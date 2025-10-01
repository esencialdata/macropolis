# Plan de Despliegue - Fase 4

## 1. Preparación de Entornos
- **Supabase**: crear proyecto en `app.supabase.com`. Configurar:
  - Auth: activar proveedores de correo y plantilla para magic link.
  - Storage: ejecutar `supabase/sql/storage.sql`.
  - Base de datos: correr `supabase/sql/schema.sql` desde SQL Editor.
- **Vercel**: crear proyecto importando este repositorio. Seleccionar framework Next.js.
- **GitHub Secrets**: añadir las claves usadas en el workflow CI (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`).

## 2. Variables de Entorno
| Variable | Contexto | Descripción |
| --- | --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Build/Runtime | URL del proyecto Supabase. |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Build/Runtime | Clave pública para cliente. |
| `SUPABASE_SERVICE_ROLE_KEY` | Build (solo CI) | Key servicio para seeds/migraciones. |
| `NEXT_PUBLIC_APP_URL` | Build/Runtime | Dominio público (ej. `https://beta.petconnect.mx`). |

> En Vercel: sección Settings → Environment Variables (Production & Preview). En Supabase: Settings → API para obtener URL y keys.

## 3. Pipeline CI/CD
1. Push/PR hacia `main` dispara workflow `.github/workflows/ci.yml`.
2. Jobs ejecutan `npm install`, `npm run lint`, `npm run test`, `npm run build`.
3. Al aprobar PR, Vercel genera despliegue Preview automático.
4. Merge a `main` → despliegue Production.

## 4. Checklist Pre-Release
- [ ] Ejecutar `npm run lint` y `npm run test` localmente.
- [ ] Verificar migraciones Supabase y políticas RLS aplicadas.
- [ ] Cargar datos seed (opcional) para UAT (mascota demo, negocio demo).
- [ ] Configurar dominio personalizado y SSL en Vercel.
- [ ] Configurar envío de correos (Supabase SMTP o Resend) y probar magic link.
- [ ] Revisar bucket `pet-photos` con ACL pública y subida controlada.
- [ ] Cargar credenciales GA4 (`NEXT_PUBLIC_GA_MEASUREMENT_ID`, `GA_API_SECRET`) en Vercel y `.env.local`, luego ejecutar `npm run lint`, `npm run test`, `npm run build`.

## 5. Monitoreo Post-Deploy
- Configurar alertas en Vercel/Logflare para errores 500.
- Configurar alertas de error 500 en Vercel (Settings → Alerts).
- Revisar métricas Supabase (escaneos, transacciones) diariamente durante beta.

## 6. Rollback
- Vercel mantiene historial de despliegues → revertir con "Promote Previous".
- Supabase: si migración causa problemas, revertir cambios manualmente (guardar snapshot previo en SQL Editor).

## 7. Próximos pasos
- Automatizar seeds y migraciones mediante Supabase CLI en Fase 5.
- Integrar Playwright en pipeline antes de liberar a producción.

## 8. Validación Post-Configuración
1. Confirmar que `npm install` finaliza sin errores (usar versión de `vitest` actualizada en `package.json`).
2. Ejecutar `npm run lint`, `npm run test`, `npm run build` y revisar que no haya fallos.
3. Verificar en GA4 (DebugView) que eventos (`magic_link_requested`, `pet_registered`, `rescue_notification_sent`, `loyalty_points_earned`, `loyalty_points_redeemed`, `public_profile_view`) se registran al interactuar con el entorno.
4. Verificar en GA4 (DebugView) que eventos se reciban al ejecutar los flujos; complementar con alertas en Logflare.
