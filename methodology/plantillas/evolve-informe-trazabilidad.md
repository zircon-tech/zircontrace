<!-- Plantilla de proceso: ../05-evolve.md (Documento A) · Gate de salida ahí mismo -->

# Informe de Trazabilidad — [Cliente]

**Fecha de llegada a producción:** [DD/MM/AAAA] · **Fecha de este informe:** [DD/MM/AAAA]

> Formato fijo, no narrativo. Es el artefacto que hace la promesa de ZirconTrace verificable: sin esta tabla completa, el gate de Evolve no cierra.

| Objetivo definido en Target | KPI y línea base (de Target) | KPI medido en producción | Delta | Lectura |
|---|---|---|---|---|
| [copiar textual del 1-pager de Target] | [línea base numérica] | [medición real] | [+/- %] | [¿se cumplió, se superó, quedó corto? por qué] |

## Si el delta no es positivo

**Explicación:** [por qué no se alcanzó el objetivo]
**Plan de acción:** [qué se va a hacer al respecto]

---

**Checklist antes de enviar** (ver gate completo en `05-evolve.md`):
- [ ] Las 5 columnas están completas, sin quedar en narrativa suelta.
- [ ] El KPI medido usa la misma métrica y unidad que la línea base de Target (si cambió, está explicado por qué).
- [ ] Si el delta no es positivo, hay un plan de acción documentado.
