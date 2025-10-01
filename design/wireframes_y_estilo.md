# Wireframes y Lineamientos Visuales

## Wireframes Textuales

### 1. Dashboard Dueño (Desktop / Mobile)
- **Header**: logo PetConnect (izquierda), menú (Perfil, Mis Mascotas, Programa de Puntos), botón "+ Añadir Mascota".
- **Hero/Alert Banner**: estado de cuenta (puntos totales, alerta si alguna mascota está "perdida").
- **Sección Mascotas**: tarjetas horizontales con foto, nombre, estado del tag, último escaneo.
- **Sección Actividad Reciente**: tabla con fecha, tipo de evento (escaneo, puntos ganados), origen.
- **Sección Programa de Lealtad**: widgets con negocios afiliados y progreso hacia recompensas.
- **CTA Secundarios**: botón "Programar placa" y "Compartir perfil".

### 2. Perfil Público (Rescatador)
- **Hero**: foto grande de la mascota, nombre y etiqueta de estado ("Necesita Medicación", si aplica).
- **Información de Contacto**: botones rápidos (Llamar, WhatsApp, Email) con iconografía clara.
- **Datos Críticos**: lista breve (dirección aproximada, alergias, temperamento, instrucciones).
- **Formulario Anónimo**: campo mensaje + contacto opcional + checkbox de compartir ubicación actual.
- **Sección Extra**: timeline de escaneos (visible sólo para dueño; en vista pública mostrar agradecimiento y advertencia de privacidad).

### 3. Panel de Negocio
- **Sidebar**: navegación (Dashboard, Campañas, Clientes, Configuración).
- **Dashboard**: métricas clave (puntos otorgados, redenciones, clientes activos) con tarjetas.
- **Campañas Activas**: cards con nombre, vigencia, reglas. Botón "Crear campaña".
- **Clientes Frecuentes**: tabla con top 5 clientes (nombre mascota/dueño, puntos).
- **CTA**: botón para descargar QR o compartir enlace.

### 4. Flujo de Activación NFC (Modal / Wizard)
- **Paso 1**: Confirmar mascota asociada.
- **Paso 2**: Mostrar URL única y código QR.
- **Paso 3**: Instrucciones para grabar NFC (lista numerada, video/gif placeholder).
- **Paso 4**: Botón "Verificar" con campo para escanear + confirmación.

## Lineamientos Visuales Iniciales
- **Brand Personality**: confiable, cálida y moderna. Inspiración en tonos naturales + acentos vibrantes.
- **Paleta propuesta**:
  - Primario: `#2C7A7B` (teal profundo) para confianza y tecnología.
  - Secundario: `#F6AD55` (naranja suave) para llamadas a la acción y calidez.
  - Neutros: `#1A202C` (texto), `#EDF2F7` (fondos suaves), `#FFFFFF` (fondos principales).
- **Tipografía**: Titulares con "Poppins" (semibold), cuerpo con "Inter" (regular). Ambos disponibles en Google Fonts.
- **Iconografía**: estilo lineal redondeado, consistencia con Material Symbols.
- **Componentes base**: botones primarios con esquinas de 8px, sombras suaves (`rgba(44, 122, 123, 0.15)`), tarjetas con borde de 1px `#E2E8F0`.
- **Ilustraciones**: considerar mascotas vectoriales simplificadas para estados vacíos.

## Consideraciones de Accesibilidad
- Contraste mínimo 4.5:1 en textos; verificar combinaciones teal/naranja sobre neutros.
- Componentes críticos (botones de contacto) con tamaño mínimo 44px.
- Proveer modo de alto contraste en roadmap.

## Assets Requeridos para Fase 2
- Logo PetConnect (vector e icono).
- Pack de iconos (.svg) acorde a lineamientos.
- Sistema de componentes en Figma/Storybook con botones, tarjetas, formularios y modales.

Estos wireframes servirán de guía para prototipos de alta fidelidad en la herramienta de diseño seleccionada (Figma sugerido).
