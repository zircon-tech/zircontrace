# Plantilla 5/5 — E · Evolve

**Etapa:** Evolve — producción, medición de resultados y mejora continua.
**Se usa en:** a partir de la puesta en producción, y luego de forma recurrente (mensual, según el plan contratado).
**Fuente base real:** `Descripción de Servicio - Mantenimiento y Soporte` (planes Essential/Standard/Premium, resumen mensual de actividades) + el ajuste de trazabilidad propuesto en `ZirconTrace_Nivel1_Recomendaciones.docx`.

Esta es la etapa donde vive la promesa de marca de ZirconTrace: que el entregable de Evolve cierra el círculo contra el objetivo definido en Target. Por eso tiene DOS documentos, no uno:

## Documento A — Informe de trazabilidad (una vez, al llegar a producción)

Formato fijo, no narrativo:

| Objetivo definido en Target | KPI y línea base (de Target) | KPI medido en producción | Delta | Lectura |
|---|---|---|---|---|
| (copiar textual del 1-pager de Target) | (línea base numérica) | (medición real) | (+/- %) | (¿se cumplió, se superó, quedó corto? por qué) |

Sin esta tabla completa, el gate de Evolve no cierra — es la pieza que hace la trazabilidad verificable y no solo un relato de venta.

## Documento B — Resumen mensual recurrente (mientras dure el plan de Mantenimiento y Soporte)

1. **Plan contratado** — Essential (8 hs/mes) / Standard (16 hs/mes) / Premium (desde 32 hs/mes).
2. **Actividades del mes** — mantenimiento correctivo, parches de seguridad, pequeñas evoluciones (según lo que incluya el plan).
3. **Capacidad utilizada del mes** — hs usadas / hs contratadas. La capacidad no utilizada no se acumula (regla del plan).
4. **Dashboards de KPIs y costos** — mismo KPI que se viene trazando desde Target, más costo real de infraestructura del mes (FinOps — fase Operate).
5. **Revisión de performance e infraestructura** (solo plan Premium) — informe de oportunidades de mejora.
6. **Ítems pendientes** — qué quedó fuera de capacidad este mes, para priorizar el siguiente.
7. **Plan de evolución** — próximos pasos sugeridos (nueva funcionalidad, upgrade de plan, nuevo caso de uso — potencial nuevo ciclo de Target).

## Gate de salida (checklist)

- [ ] Documento A (trazabilidad) completo, con las 5 columnas llenas — no puede quedar en narrativa suelta.
- [ ] KPI medido en producción usa la misma métrica y unidad que la línea base definida en Target (si cambió la métrica, explicar por qué).
- [ ] Valor demostrado: el delta es positivo, o si no lo es, está explicado y hay un plan de acción.
- [ ] Ciclo de mejora activo: hay al menos un ítem de "plan de evolución" para el próximo período.
