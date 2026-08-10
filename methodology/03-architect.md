# Plantilla 3/5 — A · Architect

**Etapa:** Architect — diseñar la solución target, el roadmap y el costo.
**Se usa en:** después de que Read confirmó factibilidad.
**Fuente base real:** sección "Descripción de la Solución" de `Template Propuestas` (Diagrama de Arquitectura + Estimativo de Costos de Infraestructura, tabla de 3 columnas: Servicio | Descripción del uso | Costo mensual estimado USD).

## Estructura del entregable

1. **Portada** — cliente, fecha, versión.
2. **Resumen ejecutivo** — prosa, sin bullets, tono sobrio (mismo estándar que zircontech-propuestas).
3. **Descripción de la Solución**
   - Diagrama de Arquitectura (prompt Eraser.io en español, o el diagrama ya renderizado).
   - Decisiones de diseño clave, con ADRs cuando la decisión sea reversible con costo (ej. RAG vs fine-tuning, single-AZ vs multi-AZ).
4. **Checklist de los 6 pilares de Well-Architected** — Operational Excellence / Security / Reliability / Performance Efficiency / Cost Optimization / Sustainability, con una línea de cómo la arquitectura propuesta cubre cada uno (o por qué se acepta el riesgo de no cubrirlo en esta fase).
5. **Roadmap por fases** — qué se construye en la PoC/MVP vs qué queda para fases posteriores. Fases futuras SIN estimativos de horas ni costos (regla heredada de zircontech-propuestas).
6. **Estimativo de Costos de Infraestructura (FinOps — fase Inform)** — tabla de 3 columnas: Servicio | Descripción del uso | Costo mensual estimado (USD). Total al final. Región (us-east-1 / sa-east-1) según el cliente.
7. **Plan de PoC** — criterios de éxito explícitos y medibles (esto alimenta directamente el gate de Craft).
8. **Cotización** — tabla: Servicios | Costos, con el total.
9. **Notas y Aclaraciones** — condiciones de pago, período de estabilización, control de cambios (reusar el bloque estándar de `Template Propuestas`).

## Gate de salida (checklist)

- [ ] Arquitectura revisada explícitamente contra los 6 pilares de Well-Architected.
- [ ] Costo estimado (fase Inform de FinOps) aprobado por el cliente.
- [ ] Alcance del PoC acordado, con criterios de éxito medibles definidos (no solo "que funcione").
- [ ] Horas siempre en múltiplos de 5; tabla de esfuerzo con exactamente 3 columnas (estándar de zircontech-propuestas).
