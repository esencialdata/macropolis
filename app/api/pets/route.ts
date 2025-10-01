import { NextResponse } from "next/server";
import { z } from "zod";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { trackServerEvent } from "@/lib/analytics.server";

const petSchema = z.object({
  name: z.string().min(2),
  species: z.string().min(2),
  breed: z.string().optional(),
  birthdate: z.string().optional(),
  weightKg: z.number().nonnegative().optional(),
  temperament: z.string().optional(),
  allergies: z.array(z.string()).optional(),
  medicalNotes: z.string().optional()
});

export async function GET() {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from("pets")
    .select("id, name, species, tag_status, public_slug, updated_at")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ pets: data });
}

export async function POST(request: Request) {
  const body = await request.json();
  const parseResult = petSchema.safeParse(body);
  if (!parseResult.success) {
    return NextResponse.json({ error: parseResult.error.flatten() }, { status: 400 });
  }

  const supabase = getSupabaseServerClient();
  const {
    data: { session }
  } = await supabase.auth.getSession();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const publicSlug = `${parseResult.data.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${Date.now()}`;
  const { error } = await supabase.from("pets").insert({
    owner_id: session.user.id,
    name: parseResult.data.name,
    species: parseResult.data.species,
    breed: parseResult.data.breed ?? null,
    birthdate: parseResult.data.birthdate ?? null,
    weight_kg: parseResult.data.weightKg ?? null,
    temperament: parseResult.data.temperament ?? null,
    allergies: parseResult.data.allergies ?? null,
    medical_notes: parseResult.data.medicalNotes ?? null,
    tag_status: "pending",
    public_slug: publicSlug
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  await trackServerEvent("pet_registered", {
    user_id: session.user.id,
    species: parseResult.data.species,
    has_contacts: Boolean(parseResult.data.temperament || parseResult.data.allergies?.length),
    tag_status: "pending"
  });

  return NextResponse.json({ ok: true }, { status: 201 });
}
