<!-- Plantilla de proceso: ../02-read.md · Gate de salida ahí mismo -->

# Informe de Assessment — [Cliente]

**Fecha:** [DD/MM/AAAA]
**Alcance:** [qué sistemas/datos se revisaron]

## Metodología

[Qué se revisó y cómo: entrevistas, acceso a cuentas AWS, WA Tool, etc.]

## Gaps por perspectiva CAF

| Perspectiva | Estado actual | Gap identificado | Severidad |
|---|---|---|---|
| Business | | | [Alto/Medio/Bajo] |
| People | | | |
| Governance | | | |
| Platform | | | |
| Security | | | |
| Operations | | | |

## Revisión Well-Architected

| Pilar | Hallazgos | Riesgo |
|---|---|---|
| Operational Excellence | | |
| Security | | |
| Reliability | | |
| Performance Efficiency | | |
| Cost Optimization | | |
| Sustainability | | |

## Data readiness

[Calidad, accesibilidad y estructura de los datos necesarios para el/los caso(s) de uso de Target.]

## Compliance — Ley 21.719 (Chile, vigencia 1-dic-2026)

> Sección obligatoria si el cliente opera en Chile o procesa datos de personas en Chile. Si no aplica, marcarlo explícitamente con la razón.

- ¿El cliente procesa datos personales? ¿Cuáles? [respuesta]
- Exposición actual bajo la ley: [multas hasta 20.000 UTM o 4% de ingresos en reincidencia; primer año solo con advertencias para pymes]
- Recomendación de siguiente paso: [ej. paquete "Compliance Baseline" del catálogo]

## Factibilidad técnica y de datos

**Conclusión:** [¿es viable seguir a Architect? ¿con qué condiciones?]

## Riesgos priorizados

1. [riesgo más importante]
2. [riesgo 2]
3. [riesgo 3]

---

**Checklist antes de enviar** (ver gate completo en `02-read.md`):
- [ ] Factibilidad confirmada: datos + arquitectura + compliance.
- [ ] Cada gap de CAF tiene severidad asignada.
- [ ] Sección de Ley 21.719 completa o marcada "no aplica" con la razón.
- [ ] Próximos pasos confirmados con el cliente (o motivo de no seguir).
