**Asunto:** Desarrollo Integral de Plataforma de Perfiles para Mascotas con NFC y Programa de Lealtad

Contexto del Proyecto:

El objetivo es desarrollar una plataforma web integral llamada "PetConnect". Esta plataforma permitirá a los dueños de mascotas crear perfiles detallados para sus perros, similar a una red social simplificada. La funcionalidad clave es la integración con collares NFC o QR que al ser escaneados por un smartphone, mostrarán un perfil público de emergencia para facilitar la recuperación de perros extraviados, alguien que apoya al rescate de un perro extraviado es un heroe, así que la idea es que haya badges en que los heroes vayan subiendo de nivel y dependiendo el nivel se obtendrán beneficios. Adicionalmente, el proyecto debe incorporar un sistema de lealtad diseñado para que los negocios que venden productos para perros puedan interactuar y premiar a los usuarios de la plataforma.

Tu Rol:

Eres un Gerente de Proyecto experto y Desarrollador Full-Stack. Tu misión es liderar este proyecto desde la concepción hasta el lanzamiento y la fase de crecimiento inicial. Eres responsable de la estrategia, el diseño, el desarrollo, las pruebas y la implementación.

**Metodología y Requisitos Fundamentales:**

1. **Metodología de Ingeniería de Contexto:** El desarrollo de este proyecto debe seguir rigurosamente los principios descritos en el archivo `GEMINI.md`. Para aplicar esta metodología de manera práctica, ejecutarás el proyecto utilizando un enfoque estructurado denominado **Metodología de Desarrollo por Fases Adaptativas (DPA)**, el cual se detalla a continuación.
2. **Reporte de Fase Obligatorio:** Al finalizar **cada una de las fases** descritas a continuación, deberás generar un reporte detallado y estructurado. Este informe es crítico para la continuidad del proyecto y debe estar diseñado para que un nuevo agente pueda tomar el control sin pérdida de contexto. Cada reporte debe contener obligatoriamente las siguientes secciones:
    - **Resumen de la Fase:** Objetivos planteados y objetivos logrados.
    - **Avances Detallados:** Descripción técnica y funcional de las tareas completadas.
    - **Problemas y Desafíos Encontrados:** Cualquier obstáculo técnico, estratégico o de recursos que haya surgido y cómo se resolvió.
    - **Decisiones Clave Tomadas:** Justificación de las decisiones importantes (ej. elección de una tecnología, modificación de una funcionalidad).
    - **Plan de Acción para la Siguiente Fase:** Pasos concretos y priorizados a seguir.

---

### **PLAN DE PROYECTO: Metodología de Desarrollo por Fases Adaptativas (DPA)**

### **FASE 1: DESCUBRIMIENTO Y ESTRATEGIA**

**Objetivo:** Establecer las bases estratégicas, técnicas y funcionales del proyecto.

- **Tarea 1.1: Análisis de Mercado y Competencia:**
    - Investiga las soluciones existentes en México y Latinoamérica para la identificación de mascotas (placas QR, microchips, otras apps).
    - Identifica sus fortalezas, debilidades, modelos de negocio y precios.
    - Define el diferenciador clave de "PetConnect".
- **Tarea 1.2: Definición del Stack Tecnológico:**
    - Propón y justifica un stack tecnológico completo:
        - **Frontend:** (ej. Vue.js, React).
        - **Backend:** (ej. Node.js, Python/Django).
        - **Base de Datos:** (ej. Firestore, Supabase/PostgreSQL).
        - **Alojamiento (Hosting):** (ej. Vercel, AWS, Google Cloud).
    - Investiga la tecnología NFC: cómo programar las etiquetas, tipos de chips recomendados (ej. NTAG215) y posibles proveedores de placas personalizadas.
- **Tarea 1.3: Especificación Funcional Detallada:**
    - Define exhaustivamente todas las funcionalidades del Producto Mínimo Viable (MVP).
        - **Flujo de Dueño:** Registro, login, creación/edición/eliminación de perfiles de mascotas, dashboard principal.
        - **Perfil de Mascota:** Campos de datos (datos básicos, foto, contacto de emergencia, historial médico detallado).
        - **Perfil Público (Vista del Rescatador):** Información crítica visible, sistema de mensajería anónima.
        - **Programa de Lealtad (MVP):** Define el flujo básico. ¿Cómo se registran los negocios? ¿Cómo interactúan con los perfiles? ¿Cómo se registran las transacciones o puntos?
- **Tarea 1.4: Estrategia de Monetización:**
    - Define el modelo de negocio principal. Se sugiere un modelo mixto:
        1. Venta de la placa NFC física (pago único).
        2. Un posible plan de suscripción "Premium" para dueños con funciones avanzadas.
        3. Un plan de suscripción para los negocios que deseen participar en el programa de lealtad.
- **Entregable:** **Reporte de Fase 1 - Estrategia y Planificación.**

---

### **FASE 2: DISEÑO Y PROTOTIPADO (UX/UI)**

**Objetivo:** Crear una experiencia de usuario intuitiva y un diseño visual atractivo.

- **Tarea 2.1: Definición de Personas y Flujos de Usuario:**
    - Crea perfiles para los tres usuarios clave:
        1. **El Dueño de la Mascota.**
        2. **El Rescatador (quien encuentra al perro).**
        3. **El Vendedor (dueño del negocio en el programa de lealtad).**
    - Diseña diagramas de flujo para sus interacciones principales con la plataforma.
- **Tarea 2.2: Creación de Wireframes y Mockups:**
    - Diseña los wireframes (estructuras alámbricas) de todas las pantallas principales.
    - Desarrolla mockups de alta fidelidad con la identidad visual de la marca (logo, colores, tipografía). El diseño debe ser limpio, moderno y emocionalmente resonante.
- **Entregable:** **Reporte de Fase 2 - Diseño de Experiencia de Usuario.**

---

### **FASE 3: DESARROLLO E IMPLEMENTACIÓN DEL MVP**

**Objetivo:** Escribir el código y construir una primera versión funcional de la plataforma.

- **Tarea 3.1: Configuración del Entorno de Desarrollo:**
    - Inicializa los repositorios de código (GitHub).
    - Configura la base de datos, la autenticación y el almacenamiento de archivos según el stack tecnológico elegido.
- **Tarea 3.2: Desarrollo del Backend:**
    - Implementa la API para la gestión de usuarios, perfiles de mascotas, y el sistema de mensajería.
    - Crea los modelos de datos para el programa de lealtad (Negocios, Puntos, Recompensas).
- **Tarea 3.3: Desarrollo del Frontend:**
    - Construye la interfaz de usuario basada en los mockups de la Fase 2.
    - Implementa la lógica para la interacción con el backend.
    - Desarrolla el generador de URLs únicas y códigos QR para cada perfil.
- **Entregable:**
    1. **Producto Mínimo Viable (MVP) funcional y desplegado en un entorno de pruebas.**
    2. **Reporte de Fase 3 - Desarrollo del MVP.**

---

### **FASE 4: PRUEBAS, DESPLIEGUE Y LANZAMIENTO**

**Objetivo:** Asegurar la calidad del producto y lanzarlo al mercado inicial.

- **Tarea 4.1: Pruebas Exhaustivas:**
    - Realiza pruebas unitarias y de integración.
    - Conduce Pruebas de Aceptación de Usuario (UAT) con un grupo pequeño para validar los flujos y encontrar errores.
- **Tarea 4.2: Despliegue a Producción:**
    - Configura el entorno de producción y despliega la aplicación.
    - Asegura que el dominio, los certificados SSL y las configuraciones de base de datos estén correctamente implementados.
- **Tarea 4.3: Lanzamiento Inicial:**
    - Ejecuta el lanzamiento enfocado en el mercado "cabeza de playa" definido.
    - Activa la estrategia de marketing inicial (ej. redes sociales, contacto con las primeras veterinarias).
- **Entregable:** **Reporte de Fase 4 - Lanzamiento y Resultados Iniciales.**

---

### **FASE 5: CRECIMIENTO E ITERACIÓN**

**Objetivo:** Medir resultados, recopilar feedback y desarrollar nuevas funcionalidades.

- **Tarea 5.1: Monitoreo y Análisis:**
    - Implementa herramientas de analítica web para monitorear el comportamiento del usuario.
    - Analiza las métricas clave: número de registros, perfiles creados, interacciones en el programa de lealtad.
- **Tarea 5.2: Optimización del Programa de Lealtad:**
    - Basado en el feedback de los primeros negocios registrados, itera sobre las funcionalidades del programa de lealtad. ¿Es fácil de usar? ¿Aporta valor real?
    - Define nuevas formas de interacción (ej. que un negocio pueda escanear el QR de un cliente para otorgar puntos).
- **Tarea 5.3: Planificación de la Versión 2.0:**
    - Diseña la hoja de ruta para futuras funcionalidades (ej. alertas comunitarias, integraciones con seguros para mascotas, portal avanzado para veterinarios).
- **Entregable:** **Reporte de Fase 5 - Análisis Post-Lanzamiento y Hoja de Ruta Futura.**

---

Instrucción Final:

Realiza reportes detallados periodicos después de cada tarea en un archivo llamado HANDOVER_CONTEXT.md con la intención de que se pueda retomar el proyecto con diferentes agentes y siempre tenga un contexto claro del estado del proyecto, los problemas a resolver, las etapas terminadas así como las tareas a realizar

**FIN DEL PROMPT**