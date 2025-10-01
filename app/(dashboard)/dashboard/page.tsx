import { Suspense } from "react";
import { PetsOverview } from "@/components/dashboard/pets-overview";
import { LoyaltyOverview } from "@/components/dashboard/loyalty-overview";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const supabase = getSupabaseServerClient();
  const {
    data: pets,
    error: petsError
  } = await supabase
    .from("pets")
    .select("id, name, tag_status, public_slug, updated_at")
    .order("updated_at", { ascending: false })
    .limit(5);

  if (petsError) {
    console.error(petsError);
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-6 py-12">
      <h1 className="text-3xl font-semibold text-brand-teal">Dashboard de PetConnect</h1>
      <div className="grid gap-6 lg:grid-cols-3">
        <section className="lg:col-span-2">
          <Suspense fallback={<p>Cargando mascotas...</p>}>
            <PetsOverview pets={pets ?? []} />
          </Suspense>
        </section>
        <section>
          <Suspense fallback={<p>Cargando programa de puntos...</p>}>
            <LoyaltyOverview />
          </Suspense>
        </section>
      </div>
    </main>
  );
}
