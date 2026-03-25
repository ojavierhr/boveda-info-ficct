---
tipo: tema
materia: sistemas-informacion-2
dificultad: 🟢 baja
estado: 📖 en-progreso
tags: [evaluacion-diseño, revisiones, metricas, calidad]
---
<!--
  👆 Esto es el "frontmatter". Son meta-datos que usa Dataview para organizar tus notas.
  Puedes cambiar:
	  
    - tipo: siempre "tema" para notas de profundización.
    - materia: el nombre de la carpeta de la materia (sin espacios, con guiones).
    - dificultad: 🟢 baja, 🟡 media, 🔴 alta. ¡Actualízala cuando domines el concepto!
    - estado: 📖 en-progreso si aún estás estudiando, ✅ completado cuando lo domines.
    - tags: etiquetas para buscar más fácil.
    
  💡 Consejo: Si algún concepto se te resiste, cambia la dificultad a 🔴 alta.
  Así aparecerá en el dashboard de materia y sabrás que debes repasarlo.
  ¡Y no olvides marcar el estado como ✅ completado cuando ya lo hayas dominado!
-->
# Evaluación del diseño

---

## 🧠 Desarrollo del concepto

**Definición:**  

La evaluación del diseño es el proceso de examinar el modelo de diseño (arquitectura, componentes, interfaces) para identificar defectos, verificar que cumple los requisitos, y asegurar que sea de calidad antes de iniciar la construcción. Incluye técnicas formales e informales de revisión, medición de atributos de calidad y análisis de riesgos.

**Propósito:**
- Detectar errores temprano, cuando son más baratos de corregir.
- Asegurar que el diseño es **comprensible**, **mantenible**, **consistente** y **completo**.
- Verificar que se han considerado los **requisitos no funcionales** (rendimiento, seguridad, escalabilidad).
- Mejorar la calidad del producto final.

---

### 🔍 Técnicas de evaluación

| Técnica | Descripción |
|---------|-------------|
| **Revisiones técnicas formales (FTR)** | Reunión con pares para analizar el diseño; se sigue un procedimiento estructurado con roles (autor, moderador, registrador). |
| **Revisiones informales** | Paseos rápidos (walkthroughs) sin protocolo estricto, útiles para retroalimentación ágil. |
| **Inspecciones** | Variante formal centrada en detectar defectos usando listas de verificación. |
| **Análisis de métricas** | Medir atributos del diseño (acoplamiento, cohesión, complejidad ciclomática) y comparar con umbrales. |
| **Prototipado evaluativo** | Construir un prototipo del diseño para probar con usuarios antes de implementar. |
| **Análisis de riesgos** | Identificar elementos críticos que podrían fallar y planificar mitigaciones. |

---

### 📊 Métricas de calidad del diseño

| Métrica | Qué mide | Valor deseado |
|---------|----------|---------------|
| **Acoplamiento (coupling)** | Dependencia entre módulos. | Bajo (menor dependencia). |
| **Cohesión** | Grado en que las responsabilidades de un módulo están relacionadas. | Alto (alta cohesión). |
| **Complejidad ciclomática** | Número de caminos independientes en el flujo de control. | < 10 (bajo riesgo). |
| **Profundidad de herencia** | Nivel máximo en la jerarquía de clases. | ≤ 6 (evitar profundidad excesiva). |
| **Cobertura de requisitos** | Porcentaje de requisitos trazados al diseño. | 100% ideal. |

---

### ✅ Lista de verificación típica para revisión de diseño

- ¿El diseño es **consistente** con los requisitos?
- ¿Se han utilizado **estándares** y **patrones** apropiados?
- ¿Las **interfaces** entre componentes están claramente definidas?
- ¿Se han considerado **escenarios de fallo** (excepciones)?
- ¿La **arquitectura** es **escalable** y **segura**?
- ¿La **interfaz de usuario** es **usable**?
- ¿Los **datos** están correctamente modelados (normalización, integridad)?

---

### 🧪 Ejemplo práctico: evaluación del diseño de un sistema de reservas

1. **Revisión técnica formal:** un equipo de tres analistas revisa el diagrama de clases y secuencia. Se detecta que la clase `Reserva` tiene responsabilidades de facturación (baja cohesión) y se propone separar en `Reserva` y `Factura`.
2. **Métricas:** se calcula acoplamiento entre módulos: `Reserva` depende de 6 clases → alto acoplamiento. Se rediseña usando inyección de dependencias para reducir.
3. **Análisis de riesgos:** se identifica que el pago con tarjeta es crítico; se diseña un componente aislado con reintentos y registro de transacciones.
4. **Prototipo de interfaz:** se prueba con un usuario que detecta que el botón de confirmación no es claro; se cambia el texto y el color.

---

### 🛠️ Herramientas para evaluación

- **Revisión manual:** actas, listas de verificación, sistemas de seguimiento de defectos (Jira, Trello).
- **Métricas de diseño:** plugins en IDEs (SonarQube, CodeClimate) que calculan acoplamiento, complejidad, etc.
- **Análisis de código estático:** herramientas como PMD, Checkstyle pueden aplicarse al diseño si se genera código base.
- **Prototipado:** Figma, Balsamiq para evaluar interfaz.

---

## 🃏 Flashcards para Anki

TARGET DECK: boveda informatica::sistemas informacion 2::temas::proceso desarrollo software::evaluacion diseño

START
Básico
Anverso: ¿Qué es la evaluación del diseño?
Reverso: Proceso de examinar el modelo de diseño para detectar defectos, verificar requisitos y asegurar calidad antes de la construcción.
Tags: definicion
END

START
Básico
Anverso: Menciona tres técnicas de evaluación del diseño.
Reverso: Revisiones técnicas formales, inspecciones, análisis de métricas, prototipado evaluativo, análisis de riesgos.
Tags: tecnicas
END

START
Básico (y tarjeta invertida)
Anverso: Revisión técnica formal (FTR)
Reverso: Reunión estructurada con pares (autor, moderador, registrador) para analizar el diseño y detectar defectos.
Tags: tecnicas
END

START
Básico (y tarjeta invertida)
Anverso: Cohesión (en diseño)
Reverso: Grado en que las responsabilidades dentro de un módulo están relacionadas. Se desea alta cohesión.
Tags: metricas
END

START
Básico (y tarjeta invertida)
Anverso: Acoplamiento (en diseño)
Reverso: Grado de dependencia entre módulos. Se desea bajo acoplamiento.
Tags: metricas
END

START
Básico (y tarjeta invertida)
Anverso: Complejidad ciclomática
Reverso: Medida del número de caminos independientes en el flujo de control; valores altos indican mayor riesgo.
Tags: metricas
END

START
Básico
Anverso: ¿Qué elementos suele incluir una lista de verificación para revisión de diseño?
Reverso: Consistencia con requisitos, uso de estándares, interfaces claras, manejo de excepciones, escalabilidad, seguridad, usabilidad, correcto modelado de datos.
Tags: checklist
END

START
Básico
Anverso: ¿Cuál es el beneficio de evaluar el diseño temprano?
Reverso: Detectar errores cuando son más baratos de corregir, mejorar calidad, reducir riesgos.
Tags: beneficios
END

START
Oclusión de imagen
Texto: Técnicas de evaluación del diseño incluyen {{c1::revisiones formales}}, {{c2::inspecciones}}, {{c3::análisis de métricas}}, {{c4::prototipado evaluativo}} y {{c5::análisis de riesgos}}.
Tags: tecnicas, cloze
END

---

## 🔗 Enlaces a clases donde apareció este tema

- [[2026-03-13_presentacion-materia]] (se menciona dentro del contenido: "Evaluación del diseño")

---

## 📚 Referencias y recursos

<!--
  Referencias basadas en los índices proporcionados:
  - Pressman: capítulo 15 "Técnicas de revisión" (página 354) – revisiones formales, inspecciones, métricas.
  - Pressman: capítulo 14 "Conceptos de calidad" (página 338) – métricas y atributos de calidad.
  - Kendall & Kendall: capítulo 16 "Aseguramiento e implementación de la calidad" (página 515) – recorridos estructurados.
-->

- [[pressman-r-s_maxin-b-r_2021_ingenieria-del-software-un-enfoque-practico_9aed_macgraw-hill-interamericana.pdf#page=354|Pressman & Maxim, capítulo 15 "Técnicas de revisión"]] – Explica revisiones formales, inspecciones y métricas de revisión.
- [[pressman-r-s_maxin-b-r_2021_ingenieria-del-software-un-enfoque-practico_9aed_macgraw-hill-interamericana.pdf#page=338|Pressman & Maxim, capítulo 14 "Conceptos de calidad"]] – Métricas de calidad del diseño.
- [[kendall-k-e_kendall-j-e_2011_analisis-y-diseño-de-sistemas_8aed_pearson-educacion.pdf#page=517|Kendall & Kendall, capítulo 16, sección "Recorrido estructurado"]] – Técnica de evaluación.