import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";

interface PetOverviewItem {
  id: string;
  name: string;
  tag_status: "pending" | "active" | "lost" | "replaced";
  public_slug: string;
  updated_at: string;
}

export function PetsOverview({ pets }: { pets: PetOverviewItem[] }) {
  if (pets.length === 0) {
    return (
      <article className="rounded-xl bg-white p-6 shadow-soft">
        <h2 className="text-xl font-semibold text-brand-teal">Tus mascotas</h2>
        <p className="mt-3 text-brand-dark/80">Aún no registras mascotas. Añade tu primera mascota para activar su placa NFC.</p>
        <Link className="mt-4 inline-flex text-brand-teal underline" href="/dashboard/pets/new">
          Registrar mascota
        </Link>
      </article>
    );
  }

  return (
    <article className="rounded-xl bg-white p-6 shadow-soft">
      <h2 className="text-xl font-semibold text-brand-teal">Tus mascotas</h2>
      <ul className="mt-4 space-y-4">
        {pets.map((pet) => (
          <li key={pet.id} className="flex items-center justify-between rounded-lg border border-brand-light bg-brand-light/60 p-4">
            <div>
              <p className="text-lg font-medium text-brand-dark">{pet.name}</p>
              <p className="text-sm text-brand-dark/70">
                Estado de placa: <strong className="uppercase">{pet.tag_status}</strong>
              </p>
              <p className="text-xs text-brand-dark/60">
                Actualizado {formatDistanceToNow(pet.updated_at, { addSuffix: true, locale: es })}
              </p>
            </div>
            <Link className="text-sm text-brand-teal underline" href={`/dashboard/pets/${pet.id}`} prefetch={false}>
              Gestionar
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
