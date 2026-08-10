# ZirconTrace™: Nivel 1 · Tabla maestra

> Versión: v0.1 (borrador de trabajo) · 2026-08-07 · Basado en el análisis base de Will + los 3 ajustes validados en `ZirconTrace_Nivel1_Recomendaciones.docx` · Fuentes de referencia confirmadas por Will: `Sales/Templates` en Drive (no las versiones antiguas dispersas en Slack).

## Capas transversales (atraviesan las 5 etapas)

- **Governance / Seguridad / Compliance**: incluye la Ley 21.719 (Chile, vigencia 1-dic-2026) como diferencial regional explícito, no solo como ítem genérico de compliance.
- **FinOps**: mapeado a las 3 fases reales del FinOps Framework (Inform / Optimize / Operate), no como mención suelta:
  - **Inform** → etapa Architect (estimación TCO/costos de infraestructura).
  - **Optimize** → etapa Craft y transición a Evolve.
  - **Operate** → etapa Evolve (FinOps continuo, revisión periódica).
- **Change management / People**

## Tabla maestra

| Etapa | Foco | Herramientas | Entregable clave | Criterio de salida (gate) | Ancla de industria |
|---|---|---|---|---|---|
| **T · Target** | Traducir el problema de negocio en un resultado medible | Working Backwards (PR/FAQ), árbol de problemas, matriz valor/esfuerzo, mapa de stakeholders, Catálogo de Paquetes SMB (para encuadrar el paquete inicial) | 1-pager de oportunidad + casos de uso priorizados + KPIs y línea base | Existe al menos 1 caso de uso con dueño, KPI y valor estimado | Working Backwards + CAF Envision/Business |
| **R · Read (Radiografía)** | Entender estado actual: datos, arquitectura, riesgos, factibilidad | Well-Architected Review (WA Tool), CAF capability assessment (6 perspectivas), data readiness, verificación de exposición bajo **Ley 21.719 (vigencia 1-dic-2026)** | Informe de assessment con gaps por perspectiva + factibilidad técnica y de datos + riesgos | Factibilidad confirmada (datos + arquitectura + compliance, incl. Ley 21.719) | Well-Architected + CAF Align + CRISP-DM |
| **A · Architect** | Diseñar la solución target, el roadmap y el costo | Diagramas de arquitectura, ADRs, 6 pilares como checklist de diseño, estimación FinOps fase **Inform** (AWS Pricing MCP / Calculator), selección de patrón IA (RAG / fine-tuning / agentic) | Documento de arquitectura + ADRs + roadmap por fases + estimación TCO/FinOps + plan de PoC | Arquitectura revisada vs 6 pilares, costo aprobado, alcance de PoC acordado | Well-Architected + FinOps (Inform) |
| **C · Craft (Construir)** | Construir iterativo y probar hipótesis con criterios de éxito | IaC (CDK/Terraform), CI/CD, sprints, evals/LLMOps, "definition of done", FinOps fase **Optimize** | PoC/MVP funcionando + evidencia vs criterios de éxito + demo + backlog a producción | Criterios de éxito del PoC cumplidos (go/no-go) | Agile/Scrum + MLOps/DevOps + FinOps (Optimize) |
| **E · Evolve** | Producción, medición de resultados y mejora continua | Observabilidad, runbooks, plan de Mantenimiento y Soporte (Essential/Standard/Premium), FinOps fase **Operate**, model monitoring/drift, revisión periódica WA | Solución en producción + dashboards KPIs y costos + runbook + informe de trazabilidad (objetivo de Target → KPI baseline → KPI medido → delta) + plan de evolución | KPIs medidos, valor demostrado contra el objetivo de Target, ciclo de mejora activo | CAF Operations + WA Op. Excellence + FinOps (Operate) |

## Los 3 ajustes aplicados (respecto del análisis base de Will)

1. **FinOps por fases explícitas** en vez de mención suelta como capa transversal (ver tabla).
2. **Ley 21.719 explícita** en el gate de Read, no escondida dentro de "compliance" genérico.
3. **Artefacto fijo de trazabilidad en Evolve**: el gate de Evolve exige un documento con formato fijo (objetivo de Target → KPI baseline → KPI medido → delta), no solo una narrativa de "cerramos el círculo".

## Fuentes reales usadas para las 5 plantillas

Confirmado por Will (2026-08-07): los templates vigentes viven en Drive `Sales/Templates`, no las versiones antiguas encontradas en el historial de Slack. Las 5 plantillas de este Nivel 1 están construidas tomando como base real:

- `IA_Assessments_ZirconTech_AWS_2026_ESP` (deck "AI Assessment Program", jul-2026): Target/Read.
- `ZirconTech_AWS_2026_ESP` (deck, jun-2026): posicionamiento, proceso de 6 pasos, casos de éxito, equipo.
- `Catálogo de Paquetes SMB - ZirconTech` (doc, jun-2026): mapeo de catálogo a etapas (ver abajo).
- `Template Propuestas` / "Propuesta de Trabajo DDMMYYYY" (doc, may-2026): Architect/Craft.
- `Descripción de Servicio - Mantenimiento y Soporte` (doc, may-2026): Evolve.

## Mapeo rápido del Catálogo de Paquetes SMB a las 5 etapas

El catálogo tiene 8 categorías de paquetes. Mapeo preliminar (a validar con Andrés/Will, insumo para el entregable P1 "mapeo de catálogo"):

| Categoría del catálogo | Etapa(s) TRACE donde más aplica |
|---|---|
| 1. Seguridad | Read (Security Quick Review, Compliance Baseline) y transversal Governance |
| 2. Costos y FinOps | Read (FinOps Quick Win) → Architect (Inform) → Evolve (Operate) |
| 3. Arquitectura y Cloud Foundations | Architect |
| 4. Almacenamiento y Backup | Architect / Craft |
| 5. IA Generativa, Agentes, BI | Target (AI Assessment es prácticamente Target+Read empaquetados) → Craft |
| 6. Desarrollo y DevOps | Craft |
| 7. Migración y Modernización | Architect → Craft |
| 8. Integraciones y Automatización | Craft → Evolve |
