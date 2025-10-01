# Reporte Fase 1 - Estrategia y Planificación

## Resumen de la Fase
- Se consolidó la información estratégica para lanzar "PetConnect" combinando identificación NFC, perfiles digitales y un programa de lealtad para negocios pet-friendly.
- Se analizó el mercado regional de soluciones de identificación de mascotas, se definió un stack tecnológico base, se especificaron flujos y funcionalidades del MVP y se delineó el modelo de monetización.
- El entregable deja listo el terreno para iniciar prototipado UX/UI con insumos claros de negocio y tecnología.

## Avances Detallados

### Tarea 1.1: Análisis de Mercado y Competencia
| Solución | Región | Modelo de negocio | Precio referencial* | Fortalezas | Debilidades | Observaciones |
| --- | --- | --- | --- | --- | --- | --- |
| QRPets (placa QR + perfil web) | México | Venta de placas QR individuales; upsells por kits | MXN $299-$399 por placa | Distribución local rápida, interfaz sencilla para dueños | Dependencia total del QR, sin NFC, escaso valor agregado para comercios | Útil como benchmarking directo para UX de perfil público |
| Identavet / Microchip estandarizado | México (veterinarias y campañas municipales) | Inserción única de microchip + registro en base nacional | MXN $450-$800 por implante | Reconocimiento oficial, difícil de falsificar, lectura por veterinarios | Requiere visita médica, lectores especializados, poca información visible al rescatador casual | Complementario; PetConnect puede integrarse como repositorio visible ligado al ID |
| PetHub Digital ID | EUA con envíos a LatAm | Freemium: placa con QR/NFC + suscripción premium (USD $39/año) | USD $19 placa básica + membresía opcional | Ecosistema maduro, perfiles completos, ecosistema de recompensas digitales | Envíos y soporte centrados en EUA, sin enfoque en comercios locales mexicanos | Valida demanda por NFC; oportunidad de localización y servicio en español |
| PlacaQR Latam | México/Colombia | Placa QR personalizada, pago único | MXN $249-$350 | Fabricación rápida, branding personalizable | Sin app dedicada, sin backoffice de negocios, sin automatización de alertas | Diferenciar con app móvil y lealtad |
| DogHero / Rover (servicios pet care) | LatAm | Marketplace de servicios, comisiones por reserva | Comisión 20%-25% | Comunidad amplia, datos de dueños y mascotas | No ofrecen identificación física ni lealtad retail | Posible partner futuro para beneficios cruzados |

\*Precios tomados de publicaciones públicas 2023-2024; validar nuevamente antes del lanzamiento.

**Diferenciador de PetConnect**: integrar perfiles NFC (sin depender de internet estable para lectura), comunicación anónima inmediata, y un programa de lealtad gamificado que entregue métricas a comercios. Ningún competidor regional combina estos tres pilares.

### Tarea 1.2: Definición del Stack Tecnológico
| Capa | Tecnología propuesta | Justificación | Consideraciones |
| --- | --- | --- | --- |
| Frontend | Next.js 14 (React + TypeScript) + Tailwind CSS + Zustand/React Query | SSR/SSG para páginas públicas (SEO), componentes reutilizables, ecosistema maduro, gran comunidad hispanohablante | Requiere definir diseño system en Fase 2; considerar Storybook para documentar UI |
| Backend | Supabase (PostgreSQL + Edge Functions) complementado con funciones serverless (Vercel Edge / Cloudflare Workers) | Autenticación, storage y base de datos integrados; acelera MVP; Postgres facilita queries complejas (lealtad) | Para escalado >10k usuarios evaluar migración a servicio dedicado o añadir servicio Node/NestJS para reglas avanzadas |
| API Layer | GraphQL o REST JSON con OpenAPI; preferible REST para MVP | Reduce complejidad inicial; fácil consumo desde app web | Documentar con Swagger; preparar migración a GraphQL si se requieren agregaciones complejas |
| Almacenamiento de archivos | Supabase Storage | Permite guardar fotos y documentos médicos con reglas RLS | Definir política de expiración para URLs públicas |
| Autenticación | Supabase Auth (Magic Links + OAuth Google/Apple) | Implementación rápida, soporte a proveedores comunes | Evaluar autenticación de comercios con KYC ligero |
| Observabilidad | Logflare (incluido con Supabase) + Vercel Monitoring | Seguimiento de errores y auditoría mínima | Configurar alertas desde Fase 3 |
| Infraestructura / Hosting | Vercel (frontend) + Supabase (backend) + DNS en Cloudflare | Despliegue automatizado, certificados SSL incluidos | Plan de contingencia para migrar a AWS/GCP en versiones enterprise |
| Automatización | GitHub Actions | CI/CD, linters, pruebas, despliegues | Definir pipeline desde inicio de Fase 3 |

**NFC**: usar chips NTAG215 (504 bytes útiles) para almacenar URL corta + fallback; compatibles con iOS y Android sin app dedicada. Proveedores sugeridos: NFC Tagify (UK, envíos a MX), Alibaba (fabricantes Shenzhen), proveedores locales como NFC México. Programación vía app móvil (NFC Tools) o escritor USB (ACR122U) para lotes. Costos estimados: MXN $28-$45 por chip personalizado en volúmenes de 500 piezas.

### Tarea 1.3: Especificación Funcional del MVP
- **Perfiles de Dueño**
  - Registro/login (email + magic link, social login opcional).
  - Dashboard con listado de mascotas, estados de dispositivos, puntos acumulados.
  - Alta/edición/baja de mascotas: nombre, especie, raza, fecha de nacimiento, sexo, color, foto, peso, temperamento, alergias.
  - Datos de contacto: teléfonos, emails, direcciones alternas, contactos de emergencia.
  - Historial médico básico: vacunas, tratamientos, notas veterinarias adjuntando PDF/JPG.
- **Gestión de Collar NFC**
  - Generador de URL única y QR complementario por mascota.
  - Estado del tag (activado, pendiente, perdido, reemplazo).
  - Instrucciones para programación NFC y prueba de lectura.
- **Perfil Público (Rescatador)**
  - Página responsiva accesible vía URL/NFC/QR.
  - Información crítica: nombre mascota, foto, contacto primario (botón llamar), contactos alternos, condiciones médicas relevantes, botón "Notificar" con formulario anónimo (teléfono/email rescatador opcional).
  - Geolocalización aproximada: registro del lugar de escaneo (con consentimiento) para análisis.
  - Mensajería unidireccional: envía notificación push/email al dueño con datos del rescatador sin revelar el email del dueño.
- **Programa de Lealtad MVP**
  - Portal de negocio con registro (datos fiscales básicos, ubicación, tipo de negocio).
  - Alta de promociones básicas (puntos por compra, recompensas).
  - Asignación de código QR por negocio para otorgar puntos (escaneo por dueño) o registro manual de transacción.
  - Tabla de puntos por mascota y por negocio, con reglas configurables simples (ej. 1 punto por MXN $10).
  - Dashboard de negocio con métricas: clientes activos, puntos otorgados/redimidos, visitas al perfil.
- **Administración**
  - Panel interno para soporte: gestionar usuarios, desactivar tags, registrar incidencias.
  - Auditoría básica de escaneos y transacciones.

### Tarea 1.4: Estrategia de Monetización
1. **Venta de kit físico NFC**
   - Precio objetivo: MXN $499 incluye collar/placa NFC + acceso básico a la plataforma.
   - Margen esperado 55%-60% considerando costo del chip, placa personalizada, empaque y logística nacional.
2. **Suscripción Premium Dueños** (MXN $129/mes o $1,299/año)
   - Beneficios: historial médico ilimitado, alertas geolocalizadas, múltiples contactos, soporte prioritario, niveles de puntos boost (x1.25).
3. **Plan Negocios (B2B)**
   - Tier Starter (MXN $499/mes): dashboard básico, 3 campañas activas, hasta 10 colaboradores.
   - Tier Pro (MXN $1,199/mes): integraciones API, reportes exportables, campañas ilimitadas, soporte onboarding.
4. **Upsells futuros**
   - Marketplace de servicios (comisión 10%).
   - Bienes digitales (seguros, telemedicina) mediante afiliaciones.

\*Todos los precios requieren validación con estudio de costos y sensibilidad en Fase 5.

## Problemas y Desafíos Encontrados
- Acceso a fuentes en línea limitado durante esta fase; se trabajó con datos públicos 2023-2024 y conocimiento experto previo. Acción: validar cifras al inicio de Fase 1.1 ejecutiva.
- Costos de NFC personalizados pueden variar por tasa de cambio y volumen; se requiere cotización real con proveedores locales antes de confirmar precio de kit.

## Decisiones Clave Tomadas
- Adoptar Supabase + Next.js para acelerar el MVP con infraestructura manejada, dejando abierta la posibilidad de migrar a microservicios más adelante.
- Enfocar el diferenciador en la combinación NFC + perfil dinámico + lealtad, evitando competir solo por precio de placas.
- Definir un programa de lealtad bajo un modelo de puntos centralizado (no cupones) para reforzar retorno de clientes.

## Plan de Acción para la Siguiente Fase (Diseño y Prototipado)
1. Diseñar personas (Dueño urbano, Rescatador ocasional, Negocio pet-friendly) y alimentar sus pain points con el análisis de mercado realizado.
2. Mapear flujos críticos: activación de collar, reporte de mascota perdida, otorgamiento/redención de puntos.
3. Crear wireframes de alta prioridad (dashboard dueño, perfil público, panel negocio) y validarlos con 3-5 usuarios objetivo.
4. Definir lineamientos visuales iniciales (paleta, tipografía, componentes base) coherentes con el posicionamiento premium-accesible decidido.
5. Documentar feedback y actualizar `HANDOVER_CONTEXT.md` tras cada entrega parcial para mantener continuidad.
