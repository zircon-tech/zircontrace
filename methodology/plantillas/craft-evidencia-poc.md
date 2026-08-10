<!-- Plantilla de proceso: ../04-craft.md · Gate de salida ahí mismo -->

# Evidencia vs. Criterios de Éxito — [Cliente]

**Sprint / iteración:** [N] · **Fecha:** [DD/MM/AAAA]

## Actividades de implementación

| Actividad | Descripción |
|---|---|
| [ej. Configuración cuenta X] | |
| [ej. Lambda Handler Y] | |
| [ej. Modelo de datos Z] | |

## Testing y QA

[Qué se probó, en qué entornos, resultado. Incluir pruebas exhaustivas en todos los entornos y múltiples fases de prueba.]

## Evidencia vs. criterios de éxito

> Los criterios vienen de la sección "Plan de PoC" del [documento de arquitectura](architect-documento-arquitectura.md).

| Criterio de éxito | Resultado obtenido | Cumple |
|---|---|---|
| [criterio 1] | | [Sí/No/Parcial] |
| [criterio 2] | | |
| [criterio 3] | | |

## Demo

**Link / grabación:** [url]

## FinOps — fase Optimize

[Qué se ajustó durante la construcción para bajar costo: rightsizing, cambio de servicio, etc. Aunque sea informal, dejarlo escrito.]

## Backlog a producción

| Ítem pendiente | Prioridad |
|---|---|
| | [Alta/Media/Baja] |

## Decisión go/no-go

**Decisión:** [Go / No-go / Go condicional]
**Aprobada por:** [nombre] — **Fecha:** [DD/MM/AAAA]
**Condiciones (si aplica):** [qué falta resolver antes de producción]

---

**Checklist antes de cerrar la etapa** (ver gate completo en `04-craft.md`):
- [ ] Todos los criterios de éxito tienen un resultado registrado.
- [ ] Decisión go/no-go documentada, con nombre de quién la aprobó.
- [ ] Backlog a producción priorizado y compartido con el cliente.
- [ ] Definition of done cumplida para cada actividad de la tabla.
