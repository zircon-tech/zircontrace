# ZirconTrace™ Nivel 1 — Contexto del proyecto (handoff a Claude Code)

Este archivo resume todo lo trabajado en una sesión previa de Cowork, para continuar en Claude Code: subir esto a GitHub, seguir mejorando la metodología, y crear los skills que la soportan.

## Origen del pedido

Will (wolivera@zircon.tech) le pidió a Claudio (2026-08-06, Slack, DM grupal con Andrés Zunino) formalizar la metodología propia de trabajo de ZirconTech, con marca, como parte de un programa de mejora de ventas y marca iniciado semanas antes. Deadline pedido: mediados de la semana del 10 al 14 de agosto de 2026. Alcance explícito de este **Nivel 1**: etapas / herramientas / entregables / criterios / presentación comercial. El **Nivel 2** (detalle por vertical: IA/GenAI, migración, tokenización) queda fuera de alcance por ahora — no arrancarlo sin que lo pidan.

Doc base de Will (con su análisis y propuesta inicial): guardado en la carpeta del proyecto como `../Metodología Objetivo.docx`.

## La metodología: TRACE

Arco de 5 etapas que deletrea T-R-A-C-E: **T**arget, **R**ead, **A**rchitect, **C**raft, **E**volve. No inventa etapas nuevas — ancla en estándares reconocidos (AWS Well-Architected 6 pilares, AWS CAF 6 perspectivas + 4 fases, Working Backwards, CRISP-DM, FinOps Framework 3 fases). El diferencial de marca es la **trazabilidad**: el entregable de Evolve cierra el círculo contra el objetivo definido en Target.

Ver `methodology/00-tabla-maestra.md` para la tabla completa (foco, herramientas, entregable, gate y ancla de industria por etapa).

## Decisiones ya confirmadas por Will (2026-08-07, respondiendo preguntas de Claudio)

- **Repo:** todo (skill + metodología) va dentro de `zircon-tech/claude-skills`, no en un repo aparte. Cita: "Usemos claude-skills, me parece bien."
- **`zeal-ai` no tiene relación con esto** — es otra herramienta interna de ventas, sin conexión con TRACE.
- **Plantillas vigentes:** viven en Google Drive, carpeta `Sales/Templates` (id `1qSwP_0hFQfKPFj2P5g0NqouChvjZInhN`) — NO las versiones viejas que aparecen dispersas en el historial de Slack del canal #aws-reuniones-clientes.
- **Repo de decks/paquetes ya generados:** `zircon-tech/assessments-decks-offering` (carpeta `presentation`). **No se pudo revisar en la sesión de Cowork por falta de autorización de GitHub — es lo primero a chequear en Claude Code.**
- **Alcance confirmado: interno Y público.** Va a publicarse en la web, no solo queda como documentación interna. Esto implica que cualquier contenido "público" necesita validación de marca/mensaje antes de salir.
- **Ya existe un skill relacionado:** `zircontech-propuestas` (en el set de skills de Claudio, probablemente ya en `claude-skills` o en un repo de skills de usuario) — genera propuestas .docx con identidad visual de ZirconTech (fuente Rubik, azul #187ec6, estructura fija de 11 secciones) a partir de transcripciones de Fireflies. Se superpone bastante con lo que necesitaría un skill de Architect/Craft de TRACE — **evaluar extender/reutilizar en vez de duplicar lógica.**

## Los 3 ajustes aplicados sobre la propuesta original de Will

1. **FinOps mapeado a sus 3 fases reales** (Inform → Architect, Optimize → Craft, Operate → Evolve) en vez de mención suelta como capa transversal.
2. **Ley 21.719 (Chile, protección de datos personales) explícita** en el gate de la etapa Read, no escondida dentro de "compliance" genérico. Entra en vigor el 1-dic-2026 — es una ventana de venta con fecha real, no un checkbox. Multas hasta 20.000 UTM o 4% de ingresos en reincidencia; primer año solo con advertencias para pymes.
3. **Gate de Evolve exige un artefacto de trazabilidad de formato fijo**: objetivo de Target → KPI baseline → KPI medido → delta. Sin esa tabla completa, el gate no cierra — es lo que hace la promesa de marca ("trazabilidad") verificable y no solo narrativa.

## Fuentes reales usadas para construir las 5 plantillas (todas en Drive `Sales/Templates`)

- `IA_Assessments_ZirconTech_AWS_2026_ESP` (Slides, jul-2026) — deck vigente de AI Assessment. Base de Target/Read.
- `ZirconTech_AWS_2026_ESP` (Slides, jun-2026) — deck de posicionamiento, proceso de 6 pasos, casos de éxito, equipo ejecutivo.
- `Catálogo de Paquetes SMB - ZirconTech` (Doc, jun-2026) — 8 categorías de paquetes (Seguridad, Costos y FinOps, Arquitectura y Cloud Foundations, Almacenamiento y Backup, IA Generativa/Agentes/BI, Desarrollo y DevOps, Migración y Modernización, Integraciones y Automatización), mapeadas preliminarmente a las 5 etapas TRACE en `00-tabla-maestra.md`.
- `Template Propuestas` / "Propuesta de Trabajo DDMMYYYY" (Doc, may-2026) — estructura real de propuesta comercial: Resumen Ejecutivo, Descripción de la Solución (diagrama + actividades + costos de infra), Consideraciones, Cotización, Notas y Aclaraciones. Base de Architect/Craft.
- `Descripción de Servicio - Mantenimiento y Soporte` (Doc, may-2026) — planes Essential/Standard/Premium, capacidad mensual, priorización de incidencias. Base de Evolve.

## Qué ya está armado en esta carpeta

```
zircontrace/
├── CLAUDE.md              (este archivo)
├── README.md              (explica la estructura para quien abra el repo)
├── .gitignore              (excluye site-publico/site/, que es generado)
├── methodology/            FUENTE DE VERDAD — docs-as-code
│   ├── 00-tabla-maestra.md
│   ├── 01-target.md
│   ├── 02-read.md
│   ├── 03-architect.md
│   ├── 04-craft.md
│   └── 05-evolve.md
├── site-publico/           Sitio MkDocs Material, contenido CURADO para clientes/web
│   ├── mkdocs.yml
│   ├── requirements.txt
│   ├── docs/ (index.md, arco-trace.md, como-trabajamos.md, contacto.md, stylesheets/zircontech.css)
│   └── site/ (build ya generado y verificado con `mkdocs build --strict` — ver index.html para preview local; no se sube a git)
└── .github/workflows/deploy-docs.yml   (deploy automático a GitHub Pages en push a main; falta habilitar Pages en el repo)
```

Un nivel arriba de esta carpeta (en la carpeta raíz del proyecto) hay además:
- `ZirconTrace_Nivel1_Recomendaciones.docx` — documento de validación de los 5 estándares citados + los 3 ajustes + priorización P0/P1/P2 de entregables dado el plazo.
- `Catalogo_Entregables_AWS-Reuniones-Clientes.xlsx` — catálogo completo (8 pestañas) de todo lo que el equipo compartió en el canal Slack #aws-reuniones-clientes desde mayo 2025: propuestas, PDFs de assessment, estimaciones de costo, cuestionarios de relevamiento, videos explicativos, demos hosteadas, presentaciones y plantillas internas ya reutilizadas.
- `Metodología Objetivo.docx` — el doc original de Will con su análisis base y la propuesta inicial del arco TRACE.

## Pendiente / no resuelto todavía

- **Revisar `zircon-tech/assessments-decks-offering`** (carpeta `presentation`) — bloqueado en Cowork por falta de acceso a GitHub. Primer paso recomendado en Claude Code.
- **SKILL.md de TRACE** para `claude-skills` — no arrancado (era P1). Decidir: ¿un skill maestro que aplica las 5 etapas, o uno por etapa? El análisis original de Will deja ambas opciones abiertas.
- **Mapeo formal del Catálogo de Paquetes SMB a las 5 etapas** — hay un mapeo preliminar en `00-tabla-maestra.md`, falta validarlo con Andrés (es el dueño del catálogo).
- **Los 5 "gates" como checklist standalone** — hoy están integrados dentro de cada archivo de plantilla, no como artefacto separado.
- **1-pager y slide comercial pulido** (era P0 original) — el contenido narrativo ya existe en `site-publico/docs/index.md` y `arco-trace.md`, pero falta el formato de deck/1-pager en sí (ver el deck HTML/patrón que Will mencionó usar, todavía sin ubicar el archivo fuente).
- **Registro de marca de "ZirconTrace™"** — no confirmado si se inició el trámite. No imprimir el ™ en materiales públicos hasta confirmar.
- **Contenido de `site-publico/` es un primer borrador** — falta que Will/Andrés lo validen antes de publicarlo, dado que confirmaron que esto sale también a la web pública.

## Recomendaciones para la sesión de Claude Code

1. **Cloná `claude-skills` primero y mirá cómo están organizados los skills existentes** (`zircontech-propuestas`, `zircontech-daily-delta`, etc.) antes de decidir la ubicación exacta de `zircontrace/` dentro del repo — mejor seguir la convención existente que imponer una nueva.
2. **Trabajá en una rama y abrí PR, no pushees directo a `main`** — tageá a Will y/o Andrés como reviewers, sobre todo porque `site-publico/` es contenido que sale al público y todavía no lo validaron.
3. **No habilites GitHub Pages ni mergees `site-publico/` a `main`** hasta tener el OK de Will/Andrés sobre el contenido curado — el repo `methodology/` (uso interno) es de mucho menor riesgo y puede ir primero.
4. **Antes de crear un SKILL.md nuevo, revisá `zircontech-propuestas`** — ya resuelve buena parte de lo que necesitaría un skill de Architect/Craft (identidad visual, estructura de propuesta, generación de .docx). Evaluá extenderlo en vez de duplicar.
5. **Con GitHub ya autorizado en Claude Code, lo primero es revisar `assessments-decks-offering`** — puede cambiar el enfoque de `site-publico/` si ya existe un patrón de deck que conviene reusar en vez del que arranqué desde cero.
6. **Dado el plazo (~12-13 ago), orden sugerido:** (a) pushear `methodology/` — bajo riesgo, uso interno, (b) armar el SKILL.md, (c) dejar `site-publico/` y la activación de Pages para el final, después de la validación de contenido con Will/Andrés.
