<!-- Plantilla de proceso: ../03-architect.md · Gate de salida ahí mismo -->

# Documento de Arquitectura — [Cliente]

**Fecha:** [DD/MM/AAAA] · **Versión:** [v1.0]

## Resumen ejecutivo

[Prosa, sin bullets, tono sobrio. Qué se propone y por qué, en 1-2 párrafos dirigidos a quien decide.]

## Descripción de la solución

**Diagrama de arquitectura:** [insertar diagrama o link]

**Decisiones de diseño clave:** [listar; usar una [ADR](adr.md) por cada decisión reversible con costo, ej. RAG vs. fine-tuning, single-AZ vs. multi-AZ]

## Checklist de los 6 pilares de Well-Architected

| Pilar | Cómo lo cubre esta arquitectura | Riesgo aceptado (si no se cubre) |
|---|---|---|
| Operational Excellence | | |
| Security | | |
| Reliability | | |
| Performance Efficiency | | |
| Cost Optimization | | |
| Sustainability | | |

## Roadmap por fases

| Fase | Qué se construye | Estimativo de horas/costo |
|---|---|---|
| PoC/MVP (esta propuesta) | | [en múltiplos de 5 hs] |
| Fase futura 2 | | SIN estimativo (regla heredada) |
| Fase futura 3 | | SIN estimativo |

## Estimativo de costos de infraestructura (FinOps, fase Inform)

**Región:** [us-east-1 / sa-east-1, según el cliente]

| Servicio | Descripción del uso | Costo mensual estimado (USD) |
|---|---|---|
| | | |
| | | |
| **Total** | | **[USD]** |

## Plan de PoC

**Criterios de éxito** (explícitos y medibles — alimentan el gate de Craft):

1. [criterio 1, con métrica y umbral]
2. [criterio 2]
3. [criterio 3]

## Cotización

| Servicio | Costo |
|---|---|
| | |
| **Total** | **[USD]** |

## Notas y aclaraciones

[Condiciones de pago, período de estabilización, control de cambios — reusar el bloque estándar de `Template Propuestas`.]

---

**Checklist antes de enviar** (ver gate completo en `03-architect.md`):
- [ ] Arquitectura revisada explícitamente contra los 6 pilares.
- [ ] Costo estimado (fase Inform) listo para aprobación del cliente.
- [ ] Alcance de PoC acordado, con criterios de éxito medibles (no solo "que funcione").
- [ ] Horas en múltiplos de 5; tabla de esfuerzo con exactamente 3 columnas.
