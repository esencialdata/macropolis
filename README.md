# PetConnect MVP

Plataforma web para gestionar perfiles de mascotas con placas NFC, facilitar rescates y operar un programa de lealtad para negocios pet-friendly. Proyecto creado conforme a la metodología DPA descrita en `prompt.md` y `GEMINI.md`.

## Stack
- **Frontend**: Next.js 14 (App Router, TypeScript), Tailwind CSS.
- **Backend**: Supabase (PostgreSQL, Auth, Storage) con funciones de soporte via API routes Next.js.
- **Estado**: React Query + Zustand para estado cliente, `@supabase/auth-helpers-nextjs` para sesión.
- **Testing**: Vitest + Testing Library.

## Scripts
- `npm run dev` – inicia servidor Next.js.
- `npm run build` – genera build de producción.
- `npm run start` – inicia servidor en producción.
- `npm run lint` – ejecuta ESLint con la configuración de Next.
- `npm run test` – ejecuta pruebas con Vitest.

> Aún no se ejecutan instalaciones de dependencias en este entorno. Antes de correr los comandos anteriores, instala dependencias (`npm install`) y configura variables en `.env`.

## Configuración de Entorno
Copiar `.env.example` a `.env.local` y rellenar:
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_MIXPANEL_TOKEN=
NEXT_PUBLIC_MIXPANEL_DEBUG=false
MIXPANEL_TOKEN=
SENTRY_DSN=
NEXT_PUBLIC_SENTRY_DSN=
SENTRY_TRACES_SAMPLE_RATE=0.1
NEXT_PUBLIC_SENTRY_TRACES_SAMPLE_RATE=0.1
```

## Supabase
1. Ejecuta los scripts SQL en `supabase/sql/` dentro de tu instancia Supabase.
2. Habilita RLS para todas las tablas creadas.
3. Configura bucket `pet-photos` desde `storage.sql`.

## Diseño
- Personas y flujos: `design/personas_y_flujos.md`
- Wireframes y estilo: `design/wireframes_y_estilo.md`

## Reportes por Fase
- `reports/Reporte_Fase_1.md`
- `reports/Reporte_Fase_2.md`
- `reports/Reporte_Fase_3.md`
- `reports/Reporte_Fase_4.md`
- `reports/Reporte_Fase_5.md`

Para continuidad operativa consulta `HANDOVER_CONTEXT.md`.

## Monitoreo y Analítica
- Configura Google Analytics 4 con `NEXT_PUBLIC_GA_MEASUREMENT_ID` y `GA_API_SECRET` (ver `docs/analytics_strategy.md`).
- Utilidades disponibles: `lib/analytics.ts` (cliente) y `lib/analytics.server.ts` (servidor).
- Eventos instrumentados actualmente: `magic_link_requested`, `magic_link_request_failed`, `pet_registered`, `public_profile_view`, `rescue_notification_sent`, `loyalty_points_earned`, `loyalty_points_redeemed`.
