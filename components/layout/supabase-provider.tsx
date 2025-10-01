"use client";

import { createContext, ReactNode, useContext } from "react";
import type { SupabaseClient } from "@supabase/supabase-js";

const SupabaseContext = createContext<SupabaseClient | null>(null);

export function SupabaseProvider({ client, children }: { client: SupabaseClient; children: ReactNode }) {
  return <SupabaseContext.Provider value={client}>{children}</SupabaseContext.Provider>;
}

export function useSupabase() {
  const client = useContext(SupabaseContext);
  if (!client) {
    throw new Error("Supabase client is not available");
  }
  return client;
}
