import { notFound } from "next/navigation";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { PrimaryButton } from "@/components/ui/button";
import { trackServerEvent } from "@/lib/analytics.server";

interface PublicProfilePageProps {
  searchParams: Record<string, string | string[] | undefined>;
}

export default async function PublicProfilePage({ searchParams }: PublicProfilePageProps) {
  const petId = typeof searchParams.id === "string" ? searchParams.id : null;
  if (!petId) {
    return notFound();
  }

  const supabase = getSupabaseServerClient();
  const { data: pet } = await supabase
    .from("pets")
    .select("id, name, medical_notes, allergies, temperament, owner_id")
    .eq("public_slug", petId)
    .single();

  if (!pet) {
    return notFound();
  }

  const { data: contacts } = await supabase
    .from("emergency_contacts")
    .select("label, phone, email")
    .eq("pet_id", pet.id);

  await trackServerEvent("public_profile_view", { pet_id: pet.id });

  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col gap-8 px-6 py-12">
      <section className="rounded-xl bg-white p-8 shadow-soft">
        <h1 className="text-3xl font-semibold text-brand-teal">Hola, soy {pet.name}</h1>
        <p className="mt-4 text-brand-dark/80">Si estás leyendo esto es porque alguien me encontró. Gracias por ayudarme a volver a casa.</p>
      </section>

      <section className="rounded-xl bg-white p-6 shadow-soft">
        <h2 className="text-xl font-semibold text-brand-teal">Contacta a mi familia</h2>
        <ul className="mt-4 space-y-3">
          {(contacts ?? []).map((contact) => (
            <li key={contact.phone} className="rounded-lg border border-brand-light bg-brand-light/60 p-4">
              <p className="text-brand-dark">
                <strong>{contact.label}:</strong> {contact.phone}
              </p>
              {contact.email && <p className="text-sm text-brand-dark/70">{contact.email}</p>}
            </li>
          ))}
          {contacts?.length === 0 && <p className="text-brand-dark/70">No se encontraron contactos. Usa el botón para enviar mensaje.</p>}
        </ul>
        <form className="mt-6 space-y-3">
          <label className="block text-sm font-medium text-brand-dark" htmlFor="message">
            Envía un mensaje rápido
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            className="w-full rounded-lg border border-brand-light bg-white p-3 text-sm"
            placeholder="Describe dónde encontraste a la mascota"
          />
          <PrimaryButton type="submit" className="w-full">
            Notificar al dueño
          </PrimaryButton>
        </form>
      </section>

      <section className="rounded-xl bg-white p-6 shadow-soft">
        <h2 className="text-xl font-semibold text-brand-teal">Cuidados especiales</h2>
        <ul className="mt-4 space-y-2 text-sm text-brand-dark/80">
          {pet.allergies?.map((item: string) => (
            <li key={item}>Alergia: {item}</li>
          ))}
          {pet.medical_notes && <li>Notas médicas: {pet.medical_notes}</li>}
          {pet.temperament && <li>Temperamento: {pet.temperament}</li>}
        </ul>
      </section>
    </main>
  );
}
