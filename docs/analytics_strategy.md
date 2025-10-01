# Estrategia de Monitoreo y Analítica

## Objetivos
- Medir adopción y uso de los flujos principales (activación, rescate, lealtad).
- Identificar cuellos de botella en onboarding y conversión.
- Proporcionar datos para priorizar iteraciones (Fase 5 y roadmap v2.0).

## Herramientas Recomendadas
- **Google Analytics 4 (GA4)**: eventos de producto, embudos, análisis de cohortes.
- **BigQuery (opcional)**: exportar datos crudos desde GA4 para análisis avanzado.
- **Supabase Analytics / Logflare**: monitoreo de logs y errores técnicos.

## Configuración
1. Crear propiedad GA4 y obtener `Measurement ID` (formato `G-XXXXXXX`).
2. Generar `API secret` en la sección *Data Streams → Measurement Protocol API secrets*.
3. Guardar ambos valores en `.env.local` / Vercel con las claves:
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - `GA_API_SECRET`

## Eventos Clave
| Evento | Descripción | Parámetros sugeridos |
| --- | --- | --- |
| `magic_link_requested` / `magic_link_request_failed` | Solicitud de enlace mágico | `email_domain` |
| `pet_registered` | Dueño registra mascota | `species`, `has_contacts`, `tag_status` |
| `public_profile_view` | Rescatador abre perfil público | `pet_id` |
| `rescue_notification_sent` | Rescatador envía mensaje | `pet_id`, `has_location` |
| `loyalty_points_earned` | Negocio otorga puntos | `account_id`, `amount` |
| `loyalty_points_redeemed` | Dueño canjea recompensa | `account_id`, `amount` |

## Implementación Técnica
- El script base de GA4 se inyecta en `app/layout.tsx` mediante `next/script`.
- Utilidades cliente: `lib/analytics.ts` (`trackEvent`, `identifyUser`).
- Utilidades servidor: `lib/analytics.server.ts` (Measurement Protocol).
- Ejemplos de uso:
  - `components/auth/login-form.tsx`
  - `app/api/pets/route.ts`
  - `app/api/public-notifications/route.ts`
  - `app/(public)/public-profile/page.tsx`
  - `lib/loyalty.ts`

## Tableros Iniciales en GA4
1. **Embudo de Activación**: `magic_link_requested` → `pet_registered` → (futuro) `tag_activated`.
2. **Embudo de Rescate**: `public_profile_view` → `rescue_notification_sent` → respuesta del dueño.
3. **Programa de Lealtad**: comparación de `loyalty_points_earned` vs `loyalty_points_redeemed`.
4. **Retención**: cohortes por `user_id` (requiere habilitar almacenamiento de `user_id`).

## Exportación y BI (Opcional)
- Activar exportación a BigQuery desde GA4 para análisis SQL y dashboards en Looker Studio.
- Programar funciones (Supabase Edge / Cloud Functions) para reportes automáticos usando los datos exportados.

## Alertas y Seguimiento
- Configurar alertas en GA4 para caídas abruptas de eventos.
- Complementar con Supabase/Logflare para errores 500 o incidencias de API.

## Próximos Pasos
1. Completar configuración GA4 (measurement id + api secret) y verificar que el script carga sin errores.
2. Ejecutar flujos clave en entorno de pruebas y confirmar que los eventos aparecen en GA4 (DebugView).
3. Vincular GA4 con BigQuery si se requieren análisis avanzados.
4. Documentar hallazgos en `HANDOVER_CONTEXT.md` después de cada release relevante.
