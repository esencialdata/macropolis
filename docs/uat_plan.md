# Plan de Pruebas de Aceptación de Usuario (UAT)

## Objetivo
Validar que el MVP cumple con los flujos críticos para dueños, rescatadores y negocios antes del lanzamiento beta.

## Participantes
| Rol | Perfil sugerido | Cantidad |
| --- | --- | --- |
| Dueño | Cliente existente de tiendas premium, familiarizado con apps móviles | 3 |
| Rescatador | Personas con actividades en calle (repartidores, paseadores) | 2 |
| Negocio | Dueños de tiendas o veterinarias boutique | 2 |
| Equipo interno | PM, UX, QA | 3 |

## Calendario
- **Día 1**: Onboarding técnico, entrega de accesos y walkthrough.
- **Día 2-3**: Ejecución de scripts UAT (ver abajo), registro de feedback en tablero compartido (Notion/Jira).
- **Día 4**: Retroalimentación grupal, priorización de issues críticos.
- **Día 5**: Re-test de fixes críticos y decisión GO/NO-GO.

## Escenarios por Persona

### Dueño
1. Registrarse con enlace mágico y completar perfil personal.
2. Añadir mascota, generar URL/QR, registrar contacto de emergencia.
3. Simular estado "perdido" y compartir enlace.
4. Ver puntos acumulados tras transacción de prueba.

**Criterios de aceptación**: no errores bloqueantes, notificaciones recibidas en menos de 1 minuto, datos persistentes tras recarga.

### Rescatador
1. Escanear URL pública (o ingresar ID) desde móvil.
2. Consultar instrucciones de cuidado y enviar mensaje.
3. Recibir confirmación visual de envío.

**Criterios**: carga < 3 s en 4G, formulario usable sin login, mensaje llega al dueño (correo/logs).

### Negocio
1. Registrar cuenta de negocio y configurar campaña de puntos.
2. Otorgar puntos a mascota demo (usando panel).
3. Redimir recompensa y generar ticket.

**Criterios**: saldos actualizados correctamente, historial de transacciones visible.

## Captura de Evidencia
- Grabar sesiones (con consentimiento) o tomar capturas clave.
- Registrar issues en formato: `Escenario | Resultado | Severidad | Reproducción`.

## Cierre UAT
- Elaborar reporte con issues y decisiones GO/NO-GO.
- Actualizar `HANDOVER_CONTEXT.md` con conclusiones y pendientes antes del lanzamiento público.
