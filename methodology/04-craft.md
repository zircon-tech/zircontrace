# Plantilla 4/5 — C · Craft (Construir)

**Etapa:** Craft — construir iterativo y probar hipótesis con criterios de éxito.
**Se usa en:** durante la construcción del PoC/MVP, hasta la demo de cierre.
**Fuente base real:** tabla "Actividades de Implementación" de `Template Propuestas` (Actividad | Descripción) + proceso de 6 pasos del deck `ZirconTech_AWS_2026_ESP` (Diseño Estratégico → Análisis y Prototipo → Diseño UI/UX → Desarrollo → Testing y QA → Despliegue).

## Estructura del entregable

1. **Portada** — cliente, sprint/iteración, fecha.
2. **Actividades de implementación** — tabla: Actividad | Descripción (mismo formato que `Template Propuestas`, una fila por bloque de trabajo, ej. "Configuración cuenta X", "Lambda Handler Y", "Modelo de datos Z").
3. **Testing y QA** — qué se probó, en qué entornos, resultado. (Heredado del paso 05 del proceso de 6 pasos: "Pruebas exhaustivas en todos los entornos", "Múltiples fases de prueba".)
4. **Evidencia vs. criterios de éxito** — tabla: Criterio de éxito (definido en Architect) | Resultado obtenido | Cumple (Sí/No/Parcial).
5. **Demo** — link o grabación de la demo de cierre.
6. **FinOps — fase Optimize** — durante la construcción, ¿qué se ajustó para bajar costo (rightsizing, cambio de servicio, etc.)? Aunque sea informal, dejarlo escrito.
7. **Backlog a producción** — qué queda pendiente para Evolve, priorizado.
8. **Decisión go/no-go** — explícita, con quién la tomó y cuándo.

## Gate de salida (checklist)

- [ ] Todos los criterios de éxito del PoC definidos en Architect tienen un resultado registrado (Sí/No/Parcial).
- [ ] Decisión go/no-go tomada y documentada, con nombre de quién la aprobó.
- [ ] Backlog a producción priorizado y compartido con el cliente.
- [ ] Definition of done cumplida para cada actividad de la tabla de implementación.
