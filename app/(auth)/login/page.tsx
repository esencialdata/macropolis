import { redirect } from "next/navigation";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { LoginForm } from "@/components/auth/login-form";

export default async function LoginPage() {
  const supabase = getSupabaseServerClient();
  const {
    data: { session }
  } = await supabase.auth.getSession();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-16">
      <section className="rounded-xl bg-white p-8 shadow-soft">
        <h1 className="text-2xl font-semibold text-brand-teal">Accede a PetConnect</h1>
        <p className="mt-2 text-sm text-brand-dark/80">Recibe un enlace mágico en tu correo para iniciar sesión.</p>
        <LoginForm />
      </section>
    </main>
  );
}
