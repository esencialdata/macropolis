# Reporte Fase 2 - Diseño de Experiencia de Usuario

## Resumen de la Fase
- Se construyeron tres personas principales (dueño, rescatador, negocio) y sus flujos críticos ligados a los objetivos del MVP.
- Se definieron wireframes textuales para las pantallas prioritarias y se establecieron lineamientos visuales iniciales y criterios de accesibilidad.
- El proyecto avanza hacia la Fase 3 con insumos claros para desarrollo y documentación UI.

## Avances Detallados

### Tarea 2.1: Personas y Flujos de Usuario
- Documento `design/personas_y_flujos.md` captura perfiles detallados con objetivos, pain points y triggers de uso.
- Flujos cubiertos: activación de collar, reporte de mascota perdida, interacción del rescatador, campañas de lealtad y redención.
- Se añadieron flujos transversales (soporte y analytics) para asegurar cobertura operativa.

### Tarea 2.2: Wireframes y Mockups
- Documento `design/wireframes_y_estilo.md` describe estructura de interfaces clave (dashboard dueño, perfil público, panel negocio, wizard NFC).
- Lineamientos visuales propuestos: paleta centrada en teal/naranja, tipografías Poppins/Inter, iconografía redondeada, componentes con esquinas suaves.
- Consideraciones de accesibilidad definidas (contraste, tamaños mínimos, roadmap de alto contraste).
- Lista de assets requeridos para Figma/Storybook prepara al equipo de diseño para crear mockups de alta fidelidad.

## Problemas y Desafíos Encontrados
- No se generaron mockups gráficos debido a limitaciones de entorno; solución: documentar estructura y lineamientos para que el equipo de diseño los produzca en herramienta visual (Figma) al inicio de Fase 3.
- Falta validación con usuarios reales; se planificará ronda de entrevistas rápidas antes de cerrar sprint 1 de desarrollo.

## Decisiones Clave Tomadas
- Priorizar experiencia móvil para rescatadores y dueños; interfaces diseñadas mobile-first.
- Adoptar identidad visual que combine confianza y calidez (teal + naranja) para diferenciarse de placas genéricas.
- Centralizar programa de lealtad mediante dashboard de negocios con métricas claras para asegurar engagement B2B.

## Plan de Acción para la Siguiente Fase (Desarrollo del MVP)
1. Traducir wireframes a componentes en Figma y exportar guía de estilos a Storybook (colaboración diseño-dev).
2. Configurar repositorio y scaffolding Next.js + Supabase siguiendo el stack aprobado.
3. Implementar módulos prioritarios: autenticación, gestión de mascotas, perfil público y portal de negocio.
4. Definir estrategia de pruebas (unitarias/UI) y preparar pipeline de CI/CD.
5. Validar con usuarios piloto la consistencia entre prototipos y necesidades, incorporando feedback en backlog.
