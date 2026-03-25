---
tipo: tema
materia: sistemas-informacion-2
dificultad: 🟢 baja
estado: 📖 en-progreso
tags: [analisis-requisitos, priorizacion, trazabilidad, gestion-requisitos]
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
# Estructuración y análisis de requisitos

---

## 🧠 Desarrollo del concepto

**Definición:**  

La estructuración y análisis de requisitos es la fase del proceso de desarrollo en la que se organizan, priorizan y evalúan los requisitos obtenidos durante la indagación (entrevistas, documentos, etc.) para transformarlos en un conjunto coherente, verificable y listo para el diseño. Incluye técnicas para modelar requisitos, resolver conflictos, establecer trazabilidad y acordar prioridades con los stakeholders.

---

### 🔧 Actividades principales

| Actividad | Descripción |
|-----------|-------------|
| **Clasificación** | Agrupar requisitos por tipo (funcional, no funcional, interfaz) o por subsistema. |
| **Priorización** | Asignar importancia a cada requisito (esencial, importante, opcional) usando técnicas como MoSCoW. |
| **Análisis de conflictos** | Identificar y resolver contradicciones entre requisitos o entre requisitos y restricciones. |
| **Modelado** | Representar requisitos mediante diagramas UML (casos de uso, actividades) para clarificar su significado. |
| **Trazabilidad** | Establecer relaciones entre requisitos y su origen (stakeholder, documento fuente) y entre requisitos y artefactos posteriores (diseño, pruebas). |
| **Validación** | Confirmar con los stakeholders que los requisitos modelados reflejan sus necesidades. |

---

### 🎯 Técnicas de priorización

| Técnica | Descripción |
|---------|-------------|
| **MoSCoW** | Clasifica en: **M**ust (obligatorio), **S**hould (debería), **C**ould (podría), **W**on't (no se hará por ahora). |
| **Escala numérica** | Asignar un valor (1‑5) según impacto/urgencia. |
| **Matriz de valor vs. esfuerzo** | Graficar en cuatro cuadrantes: alto valor/bajo esfuerzo (prioridad máxima) hasta bajo valor/alto esfuerzo (descartar o aplazar). |

---

### 🧩 Trazabilidad

La trazabilidad se documenta en una **matriz de trazabilidad** que puede incluir:

- **Trazabilidad hacia adelante:** desde el requisito al diseño, implementación y casos de prueba.
- **Trazabilidad hacia atrás:** desde el requisito a su origen (stakeholder, documento, reunión).
- **Trazabilidad entre requisitos:** dependencias (un requisito debe cumplirse antes que otro).

**Ejemplo de matriz de trazabilidad simple:**

| ID Requisito | Fuente | Prioridad | Caso de uso | Módulo | Caso de prueba |
|--------------|--------|-----------|-------------|--------|----------------|
| RF‑01 | Cliente | Must | CU‑03 | Inventario | CP‑12 |
| RF‑02 | Ley X | Must | CU‑04 | Facturación | CP‑13 |

---

### 📊 Modelado para análisis

Además de los casos de uso, se utilizan:

- **Diagramas de actividad:** para describir flujos alternativos y excepciones.
- **Diagramas de clases conceptuales:** para mostrar las entidades relevantes del dominio.
- **Tablas de decisión / árboles de decisión:** cuando hay reglas complejas con múltiples condiciones.

---

### 🧪 Ejemplo práctico (sistema de aprobación de préstamos)

**Requisitos recopilados:**
1. El sistema debe calcular el monto máximo según ingresos y deudas.
2. Si el solicitante es menor de 25 años, el monto máximo se reduce en 20%.
3. El sistema debe almacenar el historial de solicitudes.
4. La interfaz debe mostrar gráficos comparativos (deseable).

**Análisis:**
- Se detecta conflicto: la reducción por edad no fue mencionada por el responsable de riesgos, se agenda reunión para confirmar.
- Priorización: 1 y 3 son **Must**, 2 es **Should**, 4 es **Could**.
- Se crea una tabla de decisión para la regla de reducción por edad.
- Se construye un diagrama de actividades para el flujo de aprobación.
- Se establece trazabilidad: RF‑01 proviene del reglamento interno; RF‑02 de una entrevista con el área de riesgos.

---

## 🃏 Flashcards para Anki

TARGET DECK: boveda informatica::sistemas informacion 2::temas::proceso desarrollo software::estructuracion analisis requisitos

START
Básico
Anverso: ¿Qué es la estructuración y análisis de requisitos?
Reverso: Fase donde se organizan, priorizan y evalúan los requisitos para transformarlos en un conjunto coherente, verificable y listo para el diseño.
Tags: definicion
END

START
Básico
Anverso: Menciona tres actividades principales en el análisis de requisitos.
Reverso: Clasificación, priorización, análisis de conflictos, modelado, trazabilidad, validación.
Tags: actividades
END

START
Básico (y tarjeta invertida)
Anverso: Priorización MoSCoW
Reverso: Clasifica en Must (obligatorio), Should (debería), Could (podría), Won't (no por ahora).
Tags: priorizacion
END

START
Básico (y tarjeta invertida)
Anverso: Trazabilidad hacia adelante
Reverso: Relaciona un requisito con los artefactos de diseño, implementación y pruebas.
Tags: trazabilidad
END

START
Básico (y tarjeta invertida)
Anverso: Trazabilidad hacia atrás
Reverso: Relaciona un requisito con su origen (stakeholder, documento, reunión).
Tags: trazabilidad
END

START
Básico
Anverso: ¿Qué técnicas se usan para modelar requisitos?
Reverso: Diagramas de casos de uso, diagramas de actividad, clases conceptuales, tablas de decisión, árboles de decisión.
Tags: modelado
END

START
Básico
Anverso: ¿Cuál es el propósito de la validación de requisitos?
Reverso: Confirmar con los stakeholders que los requisitos modelados reflejan correctamente sus necesidades.
Tags: validacion
END

START
Básico (y tarjeta invertida)
Anverso: Matriz de trazabilidad
Reverso: Documento que muestra relaciones entre requisitos, fuentes, casos de uso, módulos y pruebas.
Tags: trazabilidad
END

START
Oclusión de imagen
Texto: La priorización {{c1::MoSCoW}} clasifica requisitos en {{c2::Must}}, {{c3::Should}}, {{c4::Could}} y {{c5::Won't}}.
Tags: priorizacion, cloze
END

---

## 🔗 Enlaces a clases donde apareció este tema

- [[2026-03-13_presentacion-materia]] (se menciona dentro del contenido: "Estructuración y análisis de requisitos")

---

## 📚 Referencias y recursos

<!--
  Referencias basadas en los índices proporcionados:
  - Pressman: capítulo 5 "Comprensión de los requerimientos" (página 101) y capítulo 6 "Modelado de los requerimientos" (página 126).
  - Kendall & Kendall: capítulos sobre análisis de sistemas y recopilación de información.
  - IEEE 830-1998 (SRS) también aborda trazabilidad.
-->

- [[pressman-r-s_maxin-b-r_2021_ingenieria-del-software-un-enfoque-practico_9aed_macgraw-hill-interamericana.pdf#page=101|Pressman & Maxim, capítulo 5 "Comprensión de los requerimientos"]] – Incluye técnicas de análisis y priorización.
- [[kendall-k-e_kendall-j-e_2011_analisis-y-diseño-de-sistemas_8aed_pearson-educacion.pdf|Kendall & Kendall, capítulos sobre análisis de requerimientos]] – Herramientas como árboles de decisión y tablas.