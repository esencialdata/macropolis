# Personas y Flujos Clave

## Persona 1: Dueño Urbano Digital ("María")
- **Edad:** 32
- **Ocupación:** Diseñadora gráfica freelance en CDMX
- **Contexto:** Vive en departamento pet-friendly, pasea a su perro (Loki) en parques urbanos; compra en tiendas especializadas y en línea.
- **Objetivos:** Mantener a Loki seguro, centralizar historial veterinario, aprovechar beneficios en comercios.
- **Pain points:** Placas tradicionales se desgastan, pérdida de historial médico en PDFs sueltos, difícil rastrear beneficios en múltiples programas.
- **Motivadores:** Experiencia móvil fluida, marca confiable en español, recompensas tangibles.
- **Tecnología:** iPhone, usa apps de banca y salud a diario.

### Flujo principal: Activación de collar NFC y creación de perfil
1. Compra kit NFC y recibe código de activación.
2. Ingresa a PetConnect, registra cuenta con link mágico.
3. Añade datos de Loki y sube foto.
4. Programa la placa con la URL usando app NFC Tools.
5. Escanea para verificar; recibe confirmación y tutorial de uso.
6. Explora dashboard y descubre puntos de bienvenida.

### Flujo alterno: Reporte de mascota perdida
1. Marca a Loki como "perdido" desde dashboard.
2. Se genera alerta pública con botón para compartir en redes.
3. Monitorea ubicaciones de escaneos posteriores.
4. Marca como "en casa" al recuperarlo y registra nota en historial.

## Persona 2: Rescatador Casual ("Luis")
- **Edad:** 27
- **Ocupación:** Repartidor de apps de comida en Guadalajara.
- **Contexto:** Se desplaza en moto por colonias residenciales; encuentra perros vagando ocasionalmente.
- **Objetivos:** Contactar rápido al dueño, evitar llevar al perro al refugio.
- **Pain points:** Placas ilegibles, números telefónicos desactualizados, miedo a llamar sin información previa.
- **Motivadores:** Fácil acceso desde smartphone, opción de enviar mensaje rápido sin revelar datos personales.
- **Tecnología:** Android gama media con datos móviles limitados.

### Flujo principal: Interacción con placa NFC/QR
1. Encuentra perro con placa PetConnect.
2. Escanea NFC (o QR si NFC falla).
3. Visualiza perfil público con foto y datos críticos.
4. Pulsa "Notificar"; ingresa mensaje corto y número opcional.
5. Recibe confirmación de envío; propietario recibe alerta.

### Flujo alterno: Consulta de cuidados especiales
1. Desde perfil público revisa sección de necesidades médicas.
2. Decide no ofrecer alimento específico según restricciones.

## Persona 3: Dueño de Negocio Pet-Friendly ("Ana")
- **Edad:** 40
- **Ocupación:** Propietaria de tienda boutique para mascotas en Puebla.
- **Contexto:** Maneja inventario de productos premium, compite con cadenas grandes.
- **Objetivos:** Captar clientes recurrentes, medir impacto de promociones, diferenciarse.
- **Pain points:** Programas de puntos manuales, falta de datos de clientes, promociones sin seguimiento.
- **Motivadores:** Herramientas simples, reportes accionables, integración con marketing local.
- **Tecnología:** Laptop Windows y tablet en tienda.

### Flujo principal: Registro y creación de campaña de puntos
1. Descubre PetConnect vía representante.
2. Completa onboarding con datos fiscales básicos.
3. Configura campaña "1 punto por MXN $10" y define recompensa (baño gratis).
4. Descarga/Imprime QR para otorgamiento desde tablet.
5. Personal registra cada compra escaneando QR del negocio y el collar del cliente o ingresando código manual.
6. Visualiza dashboard semanal con puntos otorgados.

### Flujo alterno: Redención de recompensas
1. Cliente llega con puntos suficientes.
2. Ana valida saldo en dashboard; aplica recompensa.
3. Sistema descuenta puntos y genera ticket de redención.

---

## Flujos Transversales
- **Soporte/Administración interna:** Atención al cliente revisa panel de incidencias; puede pausar tags perdidos y registrar reemplazos.
- **Analytics:** Eventos clave (escaneos, redenciones) se etiquetan para análisis en Fase 5.

Estos perfiles servirán de base para los journeys, decisiones de UX y priorización de funcionalidades en el prototipado.
