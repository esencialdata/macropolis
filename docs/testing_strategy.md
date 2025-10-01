# Estrategia de Pruebas - PetConnect MVP

## Objetivos
- Garantizar estabilidad de los flujos críticos (activación de mascota, perfil público, programa de lealtad).
- Detectar regresiones de manera temprana vía CI/CD.
- Documentar pasos de UAT para stakeholders no técnicos.

## Tipos de Pruebas

### 1. Pruebas Unitarias
- **Componentes UI**: estados vacíos, loaders y manejo de errores (ej. `PetsOverview`, `LoginForm`).
- **Hooks/Lógica cliente**: stores Zustand y utilidades (pendiente implementación en Fase 5).
- **APIs**: validar esquemas `zod` y respuestas HTTP (se sugiere usar `supertest` o `next-test-api-route-handler`).

### 2. Pruebas de Integración
- **Supabase + Next.js**: mockear cliente para verificar creación/lectura de datos sin hitting real DB.
- **Rutas protegidas**: comprobar middleware con presence/absence de cookie `sb-access-token`.

### 3. Pruebas End-to-End (E2E)
- Herramienta sugerida: Playwright.
- Casos iniciales:
  1. Dueño registra mascota y verifica aparición en dashboard.
  2. Rescatador abre perfil público y envía notificación.
  3. Negocio otorga puntos y se refleja en saldo.

### 4. Pruebas Manuales / UAT
- Scripts detallados en `docs/uat_plan.md` (ver siguiente fase).
- Criterio: cada persona (Dueño, Rescatador, Negocio) debe completar su flujo sin asistencia técnica.

## Cobertura Objetivo
- Unitarias: >= 70% líneas en `components/` y `app/`.
- APIs: 100% de rutas críticas (`/api/pets`, `/api/public-notifications`).
- E2E: cubrir al menos 1 feliz + 1 caso de error por flujo crítico.

## Ejecución en CI/CD
- Workflow `.github/workflows/ci.yml` corre lint, test y build.
- Recomendación: añadir job separado para Playwright con Supabase sandbox (Fase 5).

## Próximos Pasos
1. Añadir pruebas unitarias para componentes adicionales (`PrimaryButton`, `PetsOverview`).
2. Integrar pruebas API con mocks Supabase.
3. Configurar Playwright y ambiente Supabase seed.
4. Documentar resultados en cada release en `HANDOVER_CONTEXT.md`.
