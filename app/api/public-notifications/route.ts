import { NextResponse } from "next/server";
import { z } from "zod";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { trackServerEvent } from "@/lib/analytics.server";

const payloadSchema = z.object({
  petId: z.string().uuid(),
  message: z.string().min(5),
  contact: z.string().optional(),
  location: z
    .object({
      lat: z.number().optional(),
      lng: z.number().optional()
    })
    .optional()
});

export async function POST(request: Request) {
  const body = await request.json();
  const parseResult = payloadSchema.safeParse(body);

  if (!parseResult.success) {
    return NextResponse.json({ error: parseResult.error.format() }, { status: 400 });
  }

  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase.from("public_views").insert({
    pet_id: parseResult.data.petId,
    rescuer_message: parseResult.data.message,
    rescuer_contact: parseResult.data.contact ?? null,
    location_lat: parseResult.data.location?.lat ?? null,
    location_lng: parseResult.data.location?.lng ?? null
  });

  if (error) {
    console.error(error);
    return NextResponse.json({ error: "No se pudo registrar la notificación" }, { status: 500 });
  }

  await trackServerEvent("rescue_notification_sent", {
    pet_id: parseResult.data.petId,
    has_location: Boolean(parseResult.data.location?.lat && parseResult.data.location?.lng)
  });

  return NextResponse.json({ ok: true, data }, { status: 201 });
}
