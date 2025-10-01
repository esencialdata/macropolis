"use client";

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SupabaseProvider } from "@/components/layout/supabase-provider";

const queryClient = new QueryClient();

export function Providers({ children }: { children: ReactNode }) {
  const supabase = createClientComponentClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SupabaseProvider client={supabase}>{children}</SupabaseProvider>
    </QueryClientProvider>
  );
}
