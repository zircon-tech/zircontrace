# Plantilla 1/5 · T · Target

**Etapa:** Target, traducir el problema de negocio en un resultado medible.
**Se usa en:** primera reunión de encuadre / discovery inicial con el cliente.
**Fuente base real:** deck `IA_Assessments_ZirconTech_AWS_2026_ESP` (posicionamiento "90% de las iniciativas de GenAI se traban antes de generar valor") + `Catálogo de Paquetes SMB - ZirconTech` (para encuadrar qué paquete aplica) + Working Backwards (PR/FAQ).

## Estructura del entregable

1. **Portada**: cliente, fecha, quién participó del lado de ZirconTech y del cliente.
2. **Contexto del cliente**: sector, tamaño, momento de negocio (por qué ahora).
3. **Problema central** (1-2 oraciones, en el lenguaje del cliente, no en jerga técnica).
4. **Casos de uso priorizados**: tabla: Caso de uso | Dueño del lado del cliente | KPI que mueve | Línea base actual (número, aunque sea estimado) | Valor estimado (USD o % o hs).
   - Regla: como mínimo 1 fila necesita las 4 columnas completas para poder cerrar el gate.
5. **Paquete de catálogo asociado**: qué paquete de `Catálogo de Paquetes SMB` (Seguridad / Costos-FinOps / Arquitectura / Almacenamiento / IA-Agentes-BI / Dev-DevOps / Migración / Integraciones) mejor encuadra el arranque. Si no calza ninguno 1 a 1, decirlo explícitamente, no forzar el encaje.
6. **Riesgos / supuestos declarados por el cliente**: lo que el cliente dijo que podría trabar el proyecto.
7. **Próximos pasos**: qué sigue si hay luz verde (normalmente: arrancar Read).

## Gate de salida (checklist)

- [ ] Existe al menos 1 caso de uso con dueño, KPI y valor estimado.
- [ ] El problema central está escrito en 1-2 oraciones, sin jerga técnica.
- [ ] Se identificó el paquete de catálogo de arranque (o se documentó por qué ninguno aplica).
- [ ] El cliente confirmó por escrito (mail o mensaje) que estos son los casos de uso a evaluar en Read.

## Notas de estilo (heredadas de zircontech-propuestas / Template Propuestas)

- Prosa sobria en el resumen, sin bullets, dirigido a C-suite.
- Sin lenguaje de marketing.
- Cifras y KPIs siempre con fuente (aunque sea "estimado por el cliente en la reunión").
