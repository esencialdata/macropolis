# Backlog de Crecimiento e Iteración (Fase 5)

## Categoría: Analítica & Monitoreo
1. `ANA-001` Configurar Google Analytics 4 (measurement id + api secret) en entorno prod (propietario: DevOps; prioridad: alta).
2. `ANA-002` Validar wrapper GA (`trackEvent`/`trackServerEvent`) e instrumentar eventos críticos (propietario: Frontend; prioridad: alta).
3. `ANA-003` Crear dashboard GA4/Looker Studio (activación, rescate, lealtad) y compartir con stakeholders (propietario: Producto; prioridad: media).
4. `ANA-004` Programar exportación semanal de métricas via Supabase Edge Function (propietario: Backend; prioridad: media).

## Categoría: Programa de Lealtad
1. `LOY-101` Endpoint y UI para escaneo dual negocio + mascota (prioridad: alta).
2. `LOY-102` Tabla de reglas y multiplicadores de campaña (prioridad: media-alta).
3. `LOY-103` Implementar recomendaciones de recompensas (prioridad: media).
4. `LOY-104` API keys y webhooks para integraciones externas (prioridad: baja por ahora).

## Categoría: UAT & Feedback
1. `UAT-201` Calendarizar y ejecutar sesiones UAT según `docs/uat_plan.md` (responsable: PM).
2. `UAT-202` Registrar issues en backlog (Jira/Linear) con severidad y reproducibilidad.
3. `UAT-203` Preparar encuesta NPS post-lanzamiento (responsable: Marketing).

## Categoría: Roadmap V2.0
1. `RD-301` Investigación para alertas comunitarias (push/SMS) y definición técnica.
2. `RD-302` Diseño de portal veterinario (perfiles, historial médico extendido).
3. `RD-303` Análisis de viabilidad integración seguros para mascotas (alianzas, APIs).

## Dependencias / Notas
- Esperar credenciales de correo transaccional antes de instrumentar eventos de notificación.
- UAT debe completarse antes de desarrollar iteraciones de lealtad para incorporar feedback temprano.
- Documentar avances en `HANDOVER_CONTEXT.md` al cerrar cada ítem relevante.
