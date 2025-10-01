import Link from "next/link";
import { PrimaryButton } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-12 px-6 py-16">
      <section className="rounded-xl bg-white p-10 shadow-soft">
        <h1 className="text-4xl font-semibold text-brand-teal">PetConnect</h1>
        <p className="mt-4 max-w-2xl text-lg text-brand-dark">
          Plataforma integral para proteger a tu mascota con placas NFC, perfiles de emergencia y recompensas en negocios pet-friendly.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <PrimaryButton asChild>
            <Link href="/dashboard">Ir al dashboard</Link>
          </PrimaryButton>
          <PrimaryButton variant="secondary" asChild>
            <Link href="/public" prefetch={false}>
              Ver demo de perfil público
            </Link>
          </PrimaryButton>
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2">
        <FeatureCard
          title="Activa tu placa NFC"
          description="Registra a tus mascotas y programa su placa para compartir la información crítica al instante."
        />
        <FeatureCard
          title="Comparte datos vitales"
          description="Personas rescatadoras acceden a los contactos y cuidados especiales sin exponer tu información privada."
        />
        <FeatureCard
          title="Gana recompensas"
          description="Acumula puntos con negocios aliados y canjéalos por servicios y productos."
        />
        <FeatureCard
          title="Gestiona tu negocio"
          description="Comercios pet-friendly otorgan puntos, lanzan campañas y analizan resultados desde un panel sencillo."
        />
      </section>
    </main>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <article className="rounded-xl bg-white p-6 shadow-soft">
      <h2 className="text-xl font-semibold text-brand-teal">{title}</h2>
      <p className="mt-3 text-brand-dark/80">{description}</p>
    </article>
  );
}
