# Plantilla 2/5 · R · Read (Radiografía)

**Etapa:** Read, entender estado actual: datos, arquitectura, riesgos, factibilidad.
**Se usa en:** assessment técnico, después de que Target está firmado por el cliente.
**Fuente base real:** deck `IA_Assessments_ZirconTech_AWS_2026_ESP`, paquetes "Security Quick Review" y "Compliance Baseline (LGPD/GDPR)" del `Catálogo de Paquetes SMB`, AWS Well-Architected Review, CAF capability assessment.

## Estructura del entregable

1. **Portada**: cliente, fecha, alcance del assessment (qué sistemas/datos se revisaron).
2. **Metodología**: qué se revisó y cómo (entrevistas, acceso a cuentas AWS, WA Tool, etc.).
3. **Gaps por perspectiva CAF**: tabla: Perspectiva (Business / People / Governance / Platform / Security / Operations) | Estado actual | Gap identificado | Severidad (Alto/Medio/Bajo).
4. **Revisión Well-Architected**: tabla: Pilar (Operational Excellence / Security / Reliability / Performance Efficiency / Cost Optimization / Sustainability) | Hallazgos | Riesgo.
5. **Data readiness**: calidad, accesibilidad y estructura de los datos necesarios para el/los caso(s) de uso de Target.
6. **Compliance (Ley 21.719, Chile, vigencia 1-dic-2026)**: sección obligatoria si el cliente opera en Chile o procesa datos de personas en Chile:
   - ¿El cliente procesa datos personales? ¿Cuáles?
   - Exposición actual bajo la ley (multas hasta 20.000 UTM o 4% de ingresos en reincidencia; primer año solo con advertencias para pymes).
   - Recomendación de siguiente paso (puede ser el paquete "Compliance Baseline" del catálogo).
7. **Factibilidad técnica y de datos**: conclusión: ¿es viable seguir a Architect? ¿Con qué condiciones?
8. **Riesgos priorizados**: lista corta, los que más importan, no un inventario exhaustivo.

## Gate de salida (checklist)

- [ ] Factibilidad confirmada: datos + arquitectura + compliance (incluyendo Ley 21.719 si aplica).
- [ ] Cada gap de CAF tiene severidad asignada.
- [ ] La sección de Ley 21.719 está completa o explícitamente marcada como "no aplica" con la razón.
- [ ] El cliente recibió el informe y confirmó los próximos pasos (o el motivo de no seguir).
