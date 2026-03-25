---
tipo: tema
materia: sistemas-informacion-2
dificultad: 🟢 baja
estado: 📖 en-progreso
tags: [uml, c4, puds, modelado, diagramas]
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
# Herramientas para generación de modelos: UML, C4, PUDS

---

## 🧠 Desarrollo del concepto

**Definición:**  

Las herramientas para generación de modelos son aplicaciones que permiten crear, editar y gestionar representaciones visuales de sistemas de software. Facilitan la comunicación entre equipos, la documentación y la validación de diseños antes de escribir código. Entre los enfoques más utilizados destacan **UML** (Lenguaje Unificado de Modelado), **C4** (un modelo para arquitectura de software) y **PUDS** (Proceso Unificado de Desarrollo de Software, que promueve el uso de UML).

---

### 📐 UML (Unified Modeling Language)

**Qué es:**  
UML es un lenguaje estándar de modelado visual orientado a objetos, ampliamente utilizado para especificar, visualizar, construir y documentar los artefactos de un sistema de software. Es independiente de metodologías y lenguajes de programación.

**Tipos de diagramas UML más comunes:**

| Diagrama | Propósito |
|----------|-----------|
| **Casos de uso** | Muestra la interacción entre actores y el sistema. |
| **Clases** | Describe la estructura estática: clases, atributos, métodos, relaciones. |
| **Secuencia** | Muestra la interacción temporal entre objetos. |
| **Actividad** | Modela flujos de trabajo o procesos. |
| **Estados** | Describe los estados por los que pasa un objeto. |
| **Componentes** | Muestra la organización física de los componentes software. |
| **Despliegue** | Representa la arquitectura física (hardware, nodos). |

**Herramientas UML populares:** Enterprise Architect, Visual Paradigm, Lucidchart, draw.io, StarUML.

---

### 🏗️ C4 Model

**Qué es:**  
El modelo C4 es un enfoque de modelado de arquitectura de software que utiliza cuatro niveles de abstracción: **Contexto**, **Contenedores**, **Componentes** y **Código**. Permite comunicar la arquitectura de manera gradual, desde una vista general hasta los detalles de implementación.

**Niveles C4:**

| Nivel | Descripción |
|-------|-------------|
| **Contexto** | Muestra el sistema como un todo, sus usuarios y sistemas externos. |
| **Contenedores** | Descompone el sistema en aplicaciones, bases de datos, servicios, etc. |
| **Componentes** | Muestra los componentes internos de un contenedor (clases, módulos). |
| **Código** | Detalles de implementación (diagramas de clases UML). |

**Herramientas:** Structurizr, PlantUML, diagramas manuales con librerías específicas.

---

### 🔄 PUDS (Proceso Unificado de Desarrollo de Software)

**Qué es:**  
PUDS (también conocido como RUP – Rational Unified Process) es una metodología iterativa e incremental que organiza el desarrollo en cuatro fases: **Inicio, Elaboración, Construcción y Transición**. Promueve el modelado visual con UML como parte central de la documentación.

**Relación con modelado:**

- En **Inicio y Elaboración** se crean diagramas de casos de uso, clases conceptuales y de secuencia para capturar requisitos y diseñar la arquitectura.
- En **Construcción** se refinan los diagramas y se genera código.
- En **Transición** se documenta la versión final.

---

### 🛠️ Herramientas integradas

Muchas herramientas combinan soporte para UML, C4 y la gestión del proceso unificado. Ejemplos:

| Herramienta | Soporte |
|-------------|---------|
| **Enterprise Architect** | UML completo, C4 (mediante extensiones), gestión de requisitos, generación de código. |
| **Visual Paradigm** | UML, C4, soporte para RUP. |
| **PlantUML** | Texto plano → diagramas UML, C4. |
| **Structurizr** | Enfoque C4, exporta a diagramas. |
| **StarUML** | UML, extensiones para C4. |

---

## 🃏 Flashcards para Anki

TARGET DECK: boveda informatica::sistemas informacion 2::temas::tecnologias y herramientas::herramientas generacion modelos

START
Básico
Anverso: ¿Qué es UML?
Reverso: Lenguaje Unificado de Modelado; lenguaje estándar para modelar sistemas orientados a objetos, con diagramas como casos de uso, clases, secuencia, etc.
Tags: uml, definicion
END

START
Básico
Anverso: Menciona tres diagramas UML comunes.
Reverso: Casos de uso, clases, secuencia, actividad, estados, componentes, despliegue.
Tags: uml, diagramas
END

START
Básico (y tarjeta invertida)
Anverso: Diagrama de casos de uso (UML)
Reverso: Muestra la interacción entre actores y el sistema.
Tags: uml, diagramas
END

START
Básico (y tarjeta invertida)
Anverso: Diagrama de clases (UML)
Reverso: Describe la estructura estática: clases, atributos, métodos y relaciones.
Tags: uml, diagramas
END

START
Básico (y tarjeta invertida)
Anverso: Diagrama de secuencia (UML)
Reverso: Muestra la interacción temporal entre objetos.
Tags: uml, diagramas
END

START
Básico
Anverso: ¿Qué es el modelo C4?
Reverso: Modelo de arquitectura de software con cuatro niveles: Contexto, Contenedores, Componentes, Código.
Tags: c4, definicion
END

START
Básico (y tarjeta invertida)
Anverso: Nivel Contexto (C4)
Reverso: Muestra el sistema como un todo, usuarios y sistemas externos.
Tags: c4, niveles
END

START
Básico (y tarjeta invertida)
Anverso: Nivel Contenedores (C4)
Reverso: Descompone el sistema en aplicaciones, bases de datos, servicios, etc.
Tags: c4, niveles
END

START
Básico (y tarjeta invertida)
Anverso: Nivel Componentes (C4)
Reverso: Muestra los componentes internos de un contenedor (clases, módulos).
Tags: c4, niveles
END

START
Básico
Anverso: ¿Qué es PUDS (o RUP)?
Reverso: Proceso Unificado de Desarrollo de Software; metodología iterativa con fases Inicio, Elaboración, Construcción, Transición, que promueve el modelado con UML.
Tags: puds, definicion
END

START
Básico
Anverso: ¿Qué herramientas se usan para UML y C4?
Reverso: Enterprise Architect, Visual Paradigm, PlantUML, Structurizr, StarUML.
Tags: herramientas
END

START
Oclusión de imagen
Texto: Los niveles del modelo C4 son {{c1::Contexto}}, {{c1::Contenedores}}, {{c1::Componentes}} y {{c1::Código}}.
Tags: c4, cloze
END

---

## 🔗 Enlaces a clases donde apareció este tema

- [[2026-03-13_presentacion-materia]] (se menciona dentro de "Herramientas para generación de modelos")

---

## 📚 Referencias y recursos

<!--
  Referencias basadas en los índices proporcionados:
  - Para UML: Pressman, capítulo 10 (diseño de componentes) y capítulo 12 (patrones); Kendall, capítulo 10 (UML).
  - Para C4: material del curso, sitio web c4model.com.
  - Para PUDS: Pressman, capítulo 2.5 (El proceso unificado); Jacobson, Booch, Rumbaugh (libro sobre PUDS).
-->

- [[pressman-r-s_maxin-b-r_2021_ingenieria-del-software-un-enfoque-practico_9aed_macgraw-hill-interamericana.pdf#page=45|Pressman & Maxim, capítulo 2.5 "El proceso unificado"]] – Explica PUDS.
- [[debrauwer-l_van-der-heyde-f_2016_uml-2-5-iniciacion-ejemplos-y-ejercicios-corregidos_4aed_ediciones-eni.pdf|Debrauwer & Van der Heyde, UML 2.5]] – Manual de referencia para diagramas UML.
- [C4 Model](https://c4model.com) – Sitio oficial con documentación y ejemplos.