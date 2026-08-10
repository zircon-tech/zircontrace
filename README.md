# ZirconTrace™ — Nivel 1

Metodología propia de ZirconTech, con marca. Fuente de verdad de este repo: la carpeta `methodology/` (markdown, docs-as-code).

## Estructura

```
zircontrace/
├── methodology/          # Fuente de verdad — tabla maestra + 5 plantillas TRACE
│   ├── 00-tabla-maestra.md
│   ├── 01-target.md
│   ├── 02-read.md
│   ├── 03-architect.md
│   ├── 04-craft.md
│   └── 05-evolve.md
├── site-publico/          # Sitio MkDocs curado para clientes (sin detalle operativo interno)
│   ├── mkdocs.yml
│   ├── requirements.txt
│   └── docs/
└── .github/workflows/
    └── deploy-docs.yml    # Deploy automático a GitHub Pages en cada push a main
```

## Consulta interna

No hace falta un sitio para uso interno: GitHub renderiza `methodology/*.md` directamente al navegar el repo. Esa carpeta es la fuente de verdad completa (con gates, checklists y detalle operativo) y es la que se edita vía PR.

## Sitio público (clientes / web)

`site-publico/` es un proyecto MkDocs Material separado y **curado a mano** — no expone gates, checklists ni horas internas, solo la narrativa comercial del arco TRACE. Se arma y actualiza aparte de `methodology/` a propósito, para no filtrar detalle operativo a clientes.

Build local:

```bash
cd site-publico
pip install -r requirements.txt
mkdocs serve   # preview en localhost:8000
mkdocs build   # genera ./site
```

Deploy: el workflow en `.github/workflows/deploy-docs.yml` corre `mkdocs build` sobre `site-publico/` y publica a GitHub Pages en cada push a `main`. Requiere habilitar Pages en la configuración del repo (Settings → Pages → Source: GitHub Actions) una sola vez.

## Dónde va esto

Confirmado por Will (2026-08-07): vive dentro de `zircon-tech/claude-skills`, no en un repo aparte. Sugerido: como carpeta `zircontrace/` en la raíz de ese repo (junto al futuro `SKILL.md` de TRACE, que es un entregable P1 separado — ver `ZirconTrace_Nivel1_Recomendaciones.docx`).

## Pendiente (requiere acceso a GitHub, no disponible en esta sesión)

- Crear el repo/carpeta real y pushear este contenido.
- Habilitar GitHub Pages.
- Validar con Will/Andrés el contenido curado de `site-publico/` antes de publicarlo (el material sale también al público, según lo confirmado).
