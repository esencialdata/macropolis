# Iteraciones Propuestas - Programa de Lealtad

## Objetivos
- Aumentar recurrencia de compras en negocios aliados.
- Simplificar otorgamiento/redención de puntos para evitar fricción operativa.
- Generar datos accionables para optimizar campañas y recompensas.

## Iteración 1: Escaneo Dual Negocio + Mascota
- **Descripción**: implementar flujo donde negocio escanea QR propio y luego placa/ID del cliente para asignar puntos en <10 segundos.
- **Acciones técnicas**:
  - Crear endpoint `POST /api/loyalty/earn` con validación de sesión negocio.
  - Emitir códigos cortos (`LOY-XXXX`) para mascotas sin placa física.
  - Añadir componente "Otorgar puntos" en panel negocio con teclado numérico y preset de puntos.
- **Métricas éxito**: tiempo medio otorgamiento <15 s, puntos otorgados por visita > 1.3x.

## Iteración 2: Campañas Gamificadas
- **Descripción**: habilitar reglas dinámicas (doble puntos en días específicos, bonos por reseñas, combos multi-negocio).
- **Acciones**:
  - Tabla `loyalty_campaign_rules` con campos `type`, `multiplier`, `date_range`, `conditions` (JSON).
  - UI para programar campañas y visualizar calendario.
  - Adaptar RPC `earn_points` para respetar multiplicadores.
- **Métricas**: tasa de participación (>40% negocios activos con campaña), incremento 20% puntos otorgados vs periodo previo.

## Iteración 3: Redenciones Inteligentes
- **Descripción**: recomendaciones de recompensas basadas en historial y stock.
- **Acciones**:
  - Endpoint de sugerencias: combina `loyalty_transactions` con preferencia mascota (peso, alergias) y promociones.
  - UI de "Recompensas sugeridas" en dashboard dueño.
- **Métricas**: ratio redención/otorgamiento >35%, satisfacción dueños (encuestas >4/5).

## Iteración 4: Integraciones Externas
- **Descripción**: permitir que franquicias conecten su POS o CRM.
- **Acciones**:
  - Token API por negocio (`business_api_keys`).
  - Webhooks para transacciones (earn/redeem) y sincronización con POS.
  - Documentación API pública y sandbox.
- **Métricas**: número de negocios integrados (meta 5 en 3 meses), reducción 30% del tiempo manual en otorgamiento.

## Riesgos y Mitigaciones
- **Fraude de puntos**: auditar transacciones, crear triggers que limiten amount > 1000.
- **Complejidad UX**: validar prototipos con negocios clave antes de lanzar nuevas pantallas.
- **Carga operativa**: programar capacitaciones y tutoriales para cada iteración.

## Prioridad Inicial
1. Escaneo dual (impacto alto, esfuerzo medio).
2. Campañas gamificadas (impacto alto, esfuerzo medio-alto).
3. Redenciones inteligentes (impacto medio, esfuerzo alto).
4. Integraciones externas (impacto alto en enterprise, esfuerzo alto).

## Próximos Pasos
- Refinar requisitos técnicos en backlog (`docs/backlog_growth.md`).
- Diseñar prototipos para escaneo dual y validar con 3 negocios piloto.
- Planificar desarrollo en sprints de 2 semanas (escaneo dual → campaña → redención).
