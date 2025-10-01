# Metodología de Ingeniería de Contexto

Esta metodología describe un proceso sistemático para interactuar con un codebase, asegurando que las modificaciones sean seguras, consistentes y eficientes. Se contrapone al "vibe coding" o programación por intuición, que a menudo conduce a errores, inconsistencias y deuda técnica.

El principio fundamental es: **Nunca asumir. Siempre verificar.**

---

## Pasos Clave de la Ingeniería de Contexto

### 1. Comprender la Solicitud y el Objetivo Final
Antes de escribir o modificar código, es crucial entender completamente la meta del usuario.
- Acción: descomponer la petición del usuario en objetivos concretos y requerimientos específicos.
- Ejemplo: si el usuario pide "arreglar el login", se debe investigar qué significa "arreglar": ¿es un bug específico? ¿una nueva funcionalidad? ¿un cambio de estilo?

### 2. Explorar y Mapear el Entorno Relevante
Identificar todos los archivos y artefactos que se verán afectados por el cambio. No limitarse solo al archivo que parece más obvio.
- Acción: usar herramientas como `rg` y `find` para localizar archivos relevantes, tests, configuraciones, y definiciones de dependencias.
- Ejemplo: para un cambio en una función de `auth.py`, buscar `rg "nombre_de_la_funcion"` para encontrar dónde se utiliza y revisar `tests/test_auth.py` para entender cómo se prueba.

### 3. Leer y Analizar el Código Existente
Una vez identificados los archivos, leer su contenido para entender las convenciones, patrones de diseño y estilo del proyecto.
- Acción: utilizar las utilidades disponibles (por ejemplo, `cat`, `sed`, `rg --context`) para analizar la estructura del código, las importaciones, el formato y la lógica de negocio.
- Ejemplo: observar si el proyecto usa `async/await`, promesas o callbacks; si sigue un estilo de nombramiento específico (camelCase, snake_case); o si prefiere un framework particular.

### 4. Formular un Plan Detallado
Basado en el análisis, crear un plan paso a paso antes de realizar cualquier modificación. Para tareas complejas, compartir este plan con el usuario para su validación.
- Acción: escribir una lista de cambios específicos. "1. Añadir la dependencia X en `requirements.txt`. 2. Modificar la función Y en `auth.py` para usar la nueva dependencia. 3. Actualizar `test_auth.py` para cubrir el nuevo caso de uso."
- Ejemplo: "Primero, leeré `src/api.js` para entender cómo se hacen las llamadas. Luego, crearé un nuevo componente en `src/components/NewFeature.jsx` replicando el estilo de `ExistingComponent.jsx`. Finalmente, añadiré una ruta en `App.js`."

### 5. Ejecutar y Verificar Rigurosamente
Implementar el plan y, de manera crítica, verificar que los cambios no hayan roto nada.
- Acción: usar las herramientas de edición (`apply_patch`, `cat`, `sed`) para aplicar los cambios. Inmediatamente después, ejecutar los comandos de verificación del proyecto (linters, formateadores, compiladores y, sobre todo, tests).
- Ejemplo: después de modificar el código, ejecutar `npm run test`, `npm run lint` o `pytest`. Si los tests fallan, detenerse y corregir los problemas antes de continuar.

---

## Integración con la Metodología DPA

Aplicar los pasos anteriores dentro de cada fase del plan de Desarrollo por Fases Adaptativas garantiza entregables consistentes y transferibles.

- **Fase 1. Descubrimiento y Estrategia**: validar la solicitud recopilando datos de mercado verificables, registrar fuentes y supuestos en el reporte. Mapear archivos sólo si existen activos previos (por ejemplo, investigaciones o plantillas). Documentar decisiones de stack con criterios comparables (costos, complejidad, mantenibilidad).
- **Fase 2. Diseño y Prototipado**: identificar los recursos de diseño disponibles (bibliotecas, guía de estilo). Revisar si hay componentes reutilizables antes de crear nuevos. Documentar flujos de usuario con supuestos claros y validar cada entrega con stakeholders.
- **Fase 3. Desarrollo del MVP**: antes de codificar, localizar módulos relevantes, entender convenciones y dependencias. Elaborar un plan de implementación por feature (backend, frontend, integraciones) y confirmar que cada cambio tiene pruebas o verificación manual registrada.
- **Fase 4. Pruebas, Despliegue y Lanzamiento**: definir criterios de aceptación, checklist de pruebas y responsables. Toda decisión de infraestructura debe quedar en el reporte con enlaces a configuraciones o scripts.
- **Fase 5. Crecimiento e Iteración**: usar datos reales para priorizar; validar que las métricas utilizadas se midan correctamente. Cada iteración debe partir de feedback documentado y cerrar con nuevas acciones registradas en el handover.

Cada fase se considera completada sólo si el reporte asociado incluye objetivos, avances, problemas, decisiones y plan siguiente. Al detectar bloqueos, detener la fase y registrar el estado en `HANDOVER_CONTEXT.md` antes de pedir soporte.

---

## Gestión de Reportes y Handover

### Reporte por Fase
Sigue la estructura obligatoria descrita en el prompt. Incluye referencias a archivos editados, enlaces a recursos externos y evidencia de validación (tests, revisiones, sesiones con usuarios). Añade un apartado de riesgos conocidos y supuestos vigentes para facilitar futuras decisiones.

### HANDOVER_CONTEXT.md
Este archivo funciona como bitácora viva y se actualiza al terminar cada tarea relevante y al cerrar una fase. Usa la siguiente plantilla:

```
# HANDOVER CONTEXT

## Estado General
- Fecha de actualización:
- Fase actual:
- Objetivo principal en curso:

## Resumen Reciente
- Tareas completadas:
- Tareas en progreso:
- Bloqueos o riesgos (con responsable y plan de mitigación):

## Decisiones Clave Recientes
- [Fecha] Descripción y justificación.

## Próximos Pasos Inmediatos
1. Acción prioritaria 1 (dueño, criterio de éxito).
2. Acción prioritaria 2 (dueño, criterio de éxito).

## Notas Adicionales
- Dependencias externas, enlaces relevantes, documentos compartidos.
```

Mantén el historial en este archivo (no borrar entradas previas); añade nuevas actualizaciones en la parte superior con la fecha para preservar el contexto.

---

## Buenas Prácticas Operativas

- Prioriza comandos de lectura (`rg`, `cat`, `ls`) antes de solicitar permisos elevados o comandos destructivos.
- Documenta en el reporte y en el handover cualquier test ejecutado (comando, resultado, fecha).
- Usa el plan de trabajo (`update_plan`) para tareas con múltiples pasos y actualízalo después de completar cada sub-tarea significativa.
- Respeta las restricciones del sandbox: si un comando falla por permisos, registra el motivo y solicita aprobación sólo cuando sea indispensable.
- Mantén consistencia en estilos de código y documentación; valida con linters o formateadores antes de abrir PR o cerrar una fase.
- Registra suposiciones y fuentes de información externas (proveedores NFC, costos, métricas) en el handover para evitar trabajo duplicado.

Siguiendo esta guía, cada agente podrá retomar el proyecto rápidamente, minimizar riesgos y mantener la trazabilidad completa de decisiones y entregables.
