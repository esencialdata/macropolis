# Plan de Lanzamiento Inicial (Cabeza de Playa)

## Objetivo
Lanzar PetConnect en un mercado controlado (CDMX + Puebla) para validar propuesta de valor y refinar operaciones antes de escalar.

## Público Meta
1. **Dueños early adopters**: profesionales 25-40, mascotas consideradas miembros de la familia, familiarizados con tecnología.
2. **Negocios aliados**: tiendas premium, veterinarias boutique, groomers con foco en servicio personalizado.
3. **Rescatadores/community partners**: asociaciones locales, parques caninos, brigadas de rescate.

## Propuesta de Valor de Lanzamiento
- Seguridad inmediata: perfil NFC accesible sin app.
- Recompensas reales: puntos compartidos entre comercios aliados.
- Comunidad conectada: comunicación anónima que protege datos del dueño.

## Canales y Acciones
- **Digital**: campañas en Instagram/TikTok (micro influencers pet-friendly), landing con CTA de lista de espera.
- **Puntos físicos**: stands en parques key (Parque México, Parque España), acuerdo con veterinarias para distribución del kit.
- **Partners**: colaboración con DogHero/Rover para perks cruzados (cupón de bienvenida, visibilidad), ONGs locales para pruebas.

## Materiales Necesarios
- Landing en Vercel (`/launch`) con formulario (Typeform/Hubspot) – pendiente de implementación.
- Folletos QR explaining NFC + beneficios.
- Tutoriales cortos (video 30-45s) sobre activación de placa y redención de puntos.

## Métricas
| Métrica | Meta 30 días | Fuente |
| --- | --- | --- |
| Kits vendidos | 150 | Analytics de e-commerce / CRM |
| Activaciones NFC | 120 | Supabase (tabla `pets`) |
| Negocios registrados | 15 | Supabase (tabla `businesses`) |
| Mensajes de rescatadores | 20 | Supabase (`public_views`) |

## Roadmap de Comunicación
1. **Semana -2**: anuncios teaser, lista de espera.
2. **Semana -1**: envíos de kits a beta testers, capacitación a negocios.
3. **Semana 0**: lanzamiento oficial, evento en parque con demostraciones.
4. **Semana +1**: seguimiento personalizado a primeros clientes, encuesta NPS.
5. **Semana +4**: evaluación de métricas, definición de ajustes para versión 1.1.

## Riesgos y Mitigaciones
- **Disponibilidad de placas**: asegurar inventario con mínimo 200 unidades; proveedor backup.
- **Soporte**: definir SLA (<12h) y canal WhatsApp Business.
- **Adopción de negocios**: ofrecer prueba gratuita 60 días + entrenamiento in situ.

## Próximos Pasos
- Diseñar landing y materiales marketing (Fase 5).
- Coordinar cronograma UAT para obtener testimonios.
- Integrar métricas al dashboard interno (GA4 + Looker Studio/BigQuery). 
