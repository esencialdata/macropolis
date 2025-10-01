"use client";

import { FormEvent, useState } from "react";
import { PrimaryButton } from "@/components/ui/button";
import { getSupabaseClient } from "@/lib/supabase/client";
import { identifyUser, trackEvent } from "@/lib/analytics";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError(null);

    const supabase = getSupabaseClient();
    const { error: signInError } = await supabase.auth.signInWithOtp({ email, options: { shouldCreateUser: true } });

    if (signInError) {
      setStatus("error");
      setError(signInError.message);
      trackEvent("magic_link_request_failed", { email_domain: email.split("@")[1] ?? "unknown" });
      return;
    }

    setStatus("success");
    identifyUser(email);
    trackEvent("magic_link_requested", { email_domain: email.split("@")[1] ?? "unknown" });
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <label className="flex flex-col gap-2 text-sm text-brand-dark">
        Correo electrónico
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          className="rounded-lg border border-brand-light bg-white p-3 text-brand-dark"
          placeholder="nombre@ejemplo.com"
        />
      </label>
      <PrimaryButton type="submit" className="w-full" disabled={status === "loading"}>
        {status === "loading" ? "Enviando..." : "Enviar enlace mágico"}
      </PrimaryButton>
      {status === "success" && <p className="text-sm text-brand-teal">Revisa tu correo para continuar.</p>}
      {error && <p className="text-sm text-red-600">{error}</p>}
    </form>
  );
}
