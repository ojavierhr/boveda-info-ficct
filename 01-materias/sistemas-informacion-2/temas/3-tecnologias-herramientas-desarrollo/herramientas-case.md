---
tipo: tema
materia: sistemas-informacion-2
dificultad: 🟢 baja
estado: 📖 en-progreso
tags: [case, herramientas-modelado, desarrollo-software]
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
# Herramientas CASE

---

## 🧠 Desarrollo del concepto

**Definición:**  

Las herramientas CASE (Computer-Aided Software Engineering) son aplicaciones informáticas que automatizan y facilitan las tareas del ciclo de vida del desarrollo de software, desde el análisis de requisitos hasta la implementación y el mantenimiento. Su objetivo es mejorar la productividad, la calidad y la consistencia de los sistemas, aplicando metodologías estructuradas y orientadas a objetos.

**Clasificación de herramientas CASE:**

| Tipo | Descripción | Ejemplos |
|------|-------------|----------|
| **Upper CASE** | Soporte en las fases iniciales: análisis de requisitos, modelado de procesos, diseño lógico. | Diagramadores UML (Enterprise Architect, Visual Paradigm), herramientas de modelado de datos (ERwin). |
| **Lower CASE** | Automatizan las fases posteriores: generación de código, pruebas, documentación, mantenimiento. | Generadores de código, entornos de desarrollo integrados (IDE) con capacidades avanzadas. |
| **CASE integrado (I-CASE)** | Cubren todo el ciclo de vida, integrando las herramientas en una única plataforma. | Rational Rose (IBM), Oracle Designer. |

**Funcionalidades principales:**

- **Modelado visual:** diagramas UML (casos de uso, clases, secuencia, etc.), diagramas de flujo de datos (DFD), modelos entidad‑relación (ER).
- **Generación de código:** a partir de modelos, generan código en lenguajes como Java, C#, PHP, SQL.
- **Ingeniería inversa:** leen código existente y generan diagramas para comprender sistemas heredados.
- **Gestión de requisitos:** almacenan y rastrean requisitos, asegurando trazabilidad.
- **Colaboración:** permiten el trabajo en equipo sobre un repositorio central de modelos.
- **Documentación automática:** generan documentación técnica y de usuario a partir de los modelos.

**Ventajas:**

- Incremento de la productividad (menor tiempo de desarrollo).
- Mayor calidad y consistencia (modelos estandarizados, menos errores manuales).
- Facilitan el mantenimiento y la evolución del software.
- Mejoran la comunicación entre analistas, diseñadores y desarrolladores.

**Limitaciones:**

- Curva de aprendizaje pronunciada.
- Costo de licencias y capacitación.
- A veces generan código que debe ser ajustado manualmente.
- Requieren disciplina en el uso de metodologías.

**Ejemplo práctico:**

Un equipo de desarrollo utiliza Enterprise Architect (herramienta Upper CASE):

1. **Análisis:** modelan casos de uso y diagramas de actividad para entender el flujo del negocio.
2. **Diseño:** crean diagramas de clases y de secuencia.
3. **Generación:** exportan a código base en Java (esqueleto de clases).
4. **Ingeniería inversa:** importan cambios realizados en el código de vuelta al modelo para mantener la documentación actualizada.

**Importancia:**

- Las herramientas CASE son fundamentales en enfoques tradicionales (como el Proceso Unificado) y en metodologías ágiles que usan modelado visual.
- Ayudan a mantener la coherencia entre la documentación y el software.
- Son la base de los entornos de desarrollo modernos, aunque hoy muchos IDEs integran capacidades CASE.

---

## 🃏 Flashcards para Anki

TARGET DECK: boveda informatica::sistemas informacion 2::temas::tecnologias y herramientas::herramientas case

START
Básico
Anverso: ¿Qué son las herramientas CASE?
Reverso: Aplicaciones que automatizan tareas del ciclo de vida del desarrollo de software, mejorando productividad y calidad.
Tags: definicion
END

START
Básico
Anverso: ¿Cuál es la diferencia entre Upper CASE y Lower CASE?
Reverso: Upper CASE apoya fases iniciales (análisis, diseño); Lower CASE automatiza fases posteriores (código, pruebas, mantenimiento).
Tags: clasificacion
END

START
Básico (y tarjeta invertida)
Anverso: Funcionalidades de las herramientas CASE
Reverso: Modelado visual, generación de código, ingeniería inversa, gestión de requisitos, colaboración, documentación automática.
Tags: funcionalidades
END

START
Básico (y tarjeta invertida)
Anverso: Ejemplo de herramienta Upper CASE
Reverso: Enterprise Architect, Visual Paradigm, Rational Rose.
Tags: ejemplos
END

START
Básico (y tarjeta invertida)
Anverso: Ingeniería inversa (en CASE)
Reverso: Leer código existente y generar diagramas para comprender sistemas heredados.
Tags: funcionalidades
END

START
Básico
Anverso: Menciona dos ventajas de las herramientas CASE.
Reverso: Mayor productividad, mejor calidad y consistencia, facilitan mantenimiento, mejoran comunicación.
Tags: ventajas
END

START
Básico
Anverso: Menciona dos limitaciones de las herramientas CASE.
Reverso: Curva de aprendizaje, costo, código generado requiere ajustes manuales, requieren disciplina metodológica.
Tags: limitaciones
END

START
Oclusión de imagen
Texto: Las herramientas CASE se clasifican en {{c1::Upper CASE}} (análisis/diseño) y {{c1::Lower CASE}} (código/pruebas/mantenimiento).
Tags: clasificacion, cloze
END

---

## 🔗 Enlaces a clases donde apareció este tema

- [[2026-03-13_presentacion-materia]] (se menciona dentro de "Tecnologías y herramientas de desarrollo")

---

## 📚 Referencias y recursos

<!--
  Referencias basadas en los índices proporcionados:
  - Laudon: capítulo 13, sección 13.3 "Metodologías para modelar y diseñar sistemas" (página 519) menciona la ingeniería de software asistida por computadora (CASE).
  - Pressman: capítulo 2.7 "Tecnología del proceso" (página 50) aborda herramientas CASE como parte de la tecnología del proceso.
-->

- [[laudon-k-c_laudon-j-p_2016_sistemas-de-informacion-gerencial_14aed_pearson-educacion.pdf#page=519|Laudon & Laudon, capítulo 13, sección 13.3 "Metodologías para modelar y diseñar sistemas"]] – Introduce las herramientas CASE como soporte al desarrollo.
- [[pressman-r-s_maxin-b-r_2021_ingenieria-del-software-un-enfoque-practico_9aed_macgraw-hill-interamericana.pdf#page=50|Pressman & Maxim, capítulo 2, sección 2.7 "Tecnología del proceso"]] – Relaciona herramientas CASE con la tecnología del proceso de software.