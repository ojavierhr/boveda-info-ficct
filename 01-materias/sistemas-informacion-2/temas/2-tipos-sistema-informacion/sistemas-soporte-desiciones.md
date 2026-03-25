---
tipo: tema
materia: sistemas-informacion-2
dificultad: 🟢 baja
estado: 📖 en-progreso
tags: [dss, decisiones, analisis]
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
# Sistemas de soporte a decisiones (DSS)

---

## 🧠 Desarrollo del concepto

**Definición:**  

Un Sistema de Soporte a Decisiones (Decision Support System, DSS) es un sistema de información que ayuda a los tomadores de decisiones a enfrentar problemas semiestructurados o no estructurados, combinando datos, modelos analíticos y herramientas de interfaz amigable. A diferencia de los MIS, que producen informes rutinarios, los DSS permiten a los usuarios explorar escenarios, realizar simulaciones y evaluar alternativas antes de tomar una decisión.

**Características clave:**

- **Orientado a decisiones semiestructuradas:** apoya problemas donde parte del proceso puede automatizarse, pero el juicio humano sigue siendo necesario.
- **Flexibilidad:** el usuario puede modificar parámetros, probar hipótesis y ver resultados en tiempo real.
- **Interactividad:** diálogo continuo entre el usuario y el sistema.
- **Integración de datos y modelos:** combina bases de datos con modelos matemáticos, estadísticos o de simulación.
- **Apoyo a la toma de decisiones individual o grupal:** algunos DSS incluyen capacidades para trabajo colaborativo (GDSS).

**Componentes típicos:**

| Componente | Descripción |
|------------|-------------|
| **Base de datos** | Almacena datos internos (TPS, ERP) y externos (mercado, competencia). |
| **Base de modelos** | Conjunto de modelos analíticos (regresión, optimización, simulación). |
| **Interfaz de usuario** | Permite al usuario interactuar con el sistema, definir consultas y visualizar resultados. |

**Tipos de decisiones que soporta:**

- **Decisiones estructuradas:** reglas claras, se pueden automatizar (por ejemplo, reordenar inventario cuando baja de un umbral). Los DSS también pueden ayudar, pero su fuerte son las semiestructuradas.
- **Decisiones semiestructuradas:** mezclan datos objetivos con juicio subjetivo (ej. fijar precio de un producto nuevo).
- **Decisiones no estructuradas:** no hay reglas definidas, dependen en gran medida del criterio humano (ej. decidir la estrategia de expansión internacional). Los DSS proporcionan análisis que enriquecen el juicio.

**Ejemplo práctico:**

Un gerente de préstamos en un banco utiliza un DSS para:

- Evaluar solicitudes de crédito: el sistema calcula la probabilidad de impago usando un modelo de scoring.
- El gerente puede modificar los pesos de ciertos criterios (antigüedad en el empleo, historial crediticio) y ver cómo cambia la calificación.
- El DSS también simula el impacto de diferentes tasas de interés en la rentabilidad de la cartera.

**Importancia:**

- Mejora la calidad y velocidad de las decisiones.
- Permite explorar “qué pasaría si” sin riesgo.
- Reduce la incertidumbre al basar decisiones en datos y modelos.
- Facilita la comunicación entre diferentes áreas al presentar análisis consistentes.

---

## 🃏 Flashcards para Anki

TARGET DECK: boveda informatica::sistemas informacion 2::temas::tipos sistemas informacion::sistemas de soporte a decisiones

START
Básico
Anverso: ¿Qué es un Sistema de Soporte a Decisiones (DSS)?
Reverso: Sistema de información que ayuda a enfrentar problemas semiestructurados o no estructurados, combinando datos, modelos analíticos e interfaz amigable para explorar escenarios y evaluar alternativas.
Tags: definicion
END

START
Básico
Anverso: Menciona tres características clave de un DSS.
Reverso: Orientado a decisiones semiestructuradas, flexibilidad (modificar parámetros), interactividad, integración de datos y modelos.
Tags: caracteristicas
END

START
Básico (y tarjeta invertida)
Anverso: Base de datos (en un DSS)
Reverso: Almacena datos internos (TPS, ERP) y externos (mercado, competencia).
Tags: componentes
END

START
Básico (y tarjeta invertida)
Anverso: Base de modelos (en un DSS)
Reverso: Conjunto de modelos analíticos (regresión, optimización, simulación).
Tags: componentes
END

START
Básico (y tarjeta invertida)
Anverso: Interfaz de usuario (en un DSS)
Reverso: Permite al usuario interactuar con el sistema, definir consultas y visualizar resultados.
Tags: componentes
END

START
Básico
Anverso: ¿Qué tipo de decisiones son el fuerte de un DSS?
Reverso: Decisiones semiestructuradas (mezclan datos objetivos con juicio subjetivo).
Tags: decisiones
END

START
Básico
Anverso: Diferencia principal entre un MIS y un DSS.
Reverso: MIS produce informes rutinarios para decisiones estructuradas; DSS permite explorar escenarios y modelos para decisiones semiestructuradas o no estructuradas.
Tags: comparacion
END

START
Básico
Anverso: ¿Cuál es la importancia de un DSS?
Reverso: Mejora calidad y velocidad de decisiones, permite análisis de "qué pasaría si", reduce incertidumbre y facilita comunicación entre áreas.
Tags: importancia
END

START
Oclusión de imagen
Texto: Los tres componentes principales de un DSS son {{c1::base de datos}}, {{c1::base de modelos}} y {{c1::interfaz de usuario}}.
Tags: componentes, cloze
END

---

## 🔗 Enlaces a clases donde apareció este tema

- [[2026-03-13_presentacion-materia]] (se menciona dentro de los tipos de sistemas)

---

## 📚 Referencias y recursos

<!--
  Referencias basadas en los índices proporcionados:
  Laudon: capítulo 12 "Mejora en la toma de decisiones", páginas 464-498.
  Kendall: no se encontró una sección específica sobre DSS en los índices proporcionados, por lo que se omite.
-->

- [[laudon-k-c_laudon-j-p_2016_sistemas-de-informacion-gerencial_14aed_pearson-educacion.pdf#page=464|Laudon & Laudon, capítulo 12, "Mejora en la toma de decisiones"]] – Explica el concepto de DSS, inteligencia de negocios y análisis de decisiones.