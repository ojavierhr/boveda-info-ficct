---
tipo: tema
materia: sistemas-informacion-2
dificultad: 🟢 baja
estado: 📖 en-progreso
tags: [uml, diagramas, modelado, lenguaje-unificado]
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
# Introducción a UML 2.5

---

## 🧠 Desarrollo del concepto

**Definición:**  

UML (Unified Modeling Language) es un lenguaje de modelado visual estándar utilizado para especificar, visualizar, construir y documentar los artefactos de un sistema de software. La versión 2.5 (establecida en 2015) es la última versión mayor y unifica conceptos de versiones anteriores, añadiendo mejoras en la estructura de los diagramas y la semántica.

**Propósito:**  

- Comunicar ideas entre equipos de desarrollo, analistas y stakeholders.
- Documentar la arquitectura y el diseño.
- Generar código (en algunos casos) mediante ingeniería directa.
- Facilitar el mantenimiento y la evolución del software.

---

### 📐 Clasificación de diagramas UML 2.5

UML 2.5 define 14 tipos de diagramas, agrupados en dos categorías:

#### 1. Diagramas estructurales (representan la estática del sistema)

| Diagrama | Descripción |
|----------|-------------|
| **Diagrama de clases** | Muestra clases, atributos, métodos y relaciones (herencia, asociación, composición). |
| **Diagrama de objetos** | Muestra instancias concretas de clases en un momento dado. |
| **Diagrama de componentes** | Representa componentes software y sus interfaces. |
| **Diagrama de despliegue** | Muestra la arquitectura física (nodos, hardware, ejecución). |
| **Diagrama de estructura compuesta** | Describe la estructura interna de una clase o componente. |
| **Diagrama de paquetes** | Agrupa elementos en paquetes para organizar el modelo. |

#### 2. Diagramas de comportamiento (representan la dinámica)

| Diagrama | Descripción |
|----------|-------------|
| **Diagrama de casos de uso** | Modela la interacción entre actores y el sistema desde la perspectiva del usuario. |
| **Diagrama de secuencia** | Muestra la interacción temporal entre objetos a través de mensajes. |
| **Diagrama de comunicación** | Similar a secuencia, pero enfocado en las relaciones entre objetos. |
| **Diagrama de estados** | Describe los estados por los que pasa un objeto y las transiciones. |
| **Diagrama de actividades** | Modela flujos de trabajo o procesos de negocio. |
| **Diagrama de interacción** | Visión general de la interacción (combina varios diagramas). |
| **Diagrama de tiempos** | Muestra cambios de estado a lo largo del tiempo. |

---

### 🔍 Diagramas más utilizados en el desarrollo de software de gestión

| Diagrama | Uso principal |
|----------|---------------|
| **Casos de uso** | Capturar requisitos funcionales desde la perspectiva del usuario. |
| **Clases** | Modelar la estructura de datos y la lógica de negocio. |
| **Secuencia** | Detallar la interacción entre objetos para un escenario específico. |
| **Actividad** | Representar procesos de negocio o algoritmos complejos. |
| **Estados** | Describir el comportamiento de objetos con estados definidos (ej. un pedido: pendiente → enviado → entregado). |

---

### 🧩 Notación básica (ejemplos)

- **Clase:** rectángulo dividido en tres secciones: nombre, atributos, métodos.
- **Asociación:** línea entre clases; puede tener multiplicidad (1, 0..*, etc.).
- **Herencia:** flecha con triángulo vacío desde la subclase hacia la superclase.
- **Actor:** figura palo (stickman) en casos de uso.
- **Mensaje en secuencia:** flecha entre líneas de vida.

---

### 🧪 Ejemplo práctico: modelado de un sistema de reservas

1. **Caso de uso:** "Cliente" puede "Reservar vuelo".
2. **Diagrama de clases:** clases `Vuelo`, `Reserva`, `Cliente` con relaciones.
3. **Diagrama de secuencia:** muestra cómo `Cliente` interactúa con `Reserva` y `Vuelo` al hacer una reserva.
4. **Diagrama de actividades:** flujo desde seleccionar vuelo hasta confirmar pago.

---

### 🛠️ Herramientas para dibujar UML

- **Profesionales:** Enterprise Architect, Visual Paradigm, Lucidchart.
- **Gratuitas / ligeras:** draw.io (diagrams.net), StarUML (versión gratuita limitada), PlantUML (texto → diagramas).
- **Integradas en IDEs:** IntelliJ IDEA, Eclipse (con plugins).

---

## 🃏 Flashcards para Anki

TARGET DECK: boveda informatica::sistemas informacion 2::temas::proceso desarrollo software::introduccion uml 2.5

START
Básico
Anverso: ¿Qué es UML?
Reverso: Lenguaje Unificado de Modelado; lenguaje estándar para especificar, visualizar y documentar sistemas de software mediante diagramas.
Tags: definicion
END

START
Básico
Anverso: ¿Cuáles son las dos categorías principales de diagramas UML?
Reverso: Diagramas estructurales (estáticos) y diagramas de comportamiento (dinámicos).
Tags: categorias
END

START
Básico (y tarjeta invertida)
Anverso: Diagrama de clases (UML)
Reverso: Muestra clases, atributos, métodos y relaciones. Es el diagrama estructural más utilizado.
Tags: estructural, clases
END

START
Básico (y tarjeta invertida)
Anverso: Diagrama de casos de uso (UML)
Reverso: Modela interacciones entre actores y el sistema desde la perspectiva del usuario.
Tags: comportamiento, casos-uso
END

START
Básico (y tarjeta invertida)
Anverso: Diagrama de secuencia (UML)
Reverso: Muestra la interacción temporal entre objetos mediante mensajes.
Tags: comportamiento, secuencia
END

START
Básico (y tarjeta invertida)
Anverso: Diagrama de actividades (UML)
Reverso: Modela flujos de trabajo o procesos de negocio.
Tags: comportamiento, actividad
END

START
Básico (y tarjeta invertida)
Anverso: Diagrama de estados (UML)
Reverso: Describe estados de un objeto y las transiciones entre ellos.
Tags: comportamiento, estados
END

START
Básico (y tarjeta invertida)
Anverso: Notación de herencia en UML
Reverso: Flecha con triángulo vacío desde la subclase hacia la superclase.
Tags: notacion
END

START
Básico
Anverso: Menciona tres herramientas para dibujar diagramas UML.
Reverso: Enterprise Architect, Visual Paradigm, draw.io, StarUML, PlantUML.
Tags: herramientas
END

START
Oclusión de imagen
Texto: Los diagramas {{c1::estructurales}} representan la estática del sistema; los de {{c2::comportamiento}} representan la dinámica.
Tags: categorias, cloze
END

---

## 🔗 Enlaces a clases donde apareció este tema

- [[2026-03-13_presentacion-materia]] (se menciona dentro del contenido: "Introducción a UML 2.5")

---

## 📚 Referencias y recursos

<!--
  Referencias basadas en los índices proporcionados:
  - Debrauwer & Van der Heyde (2016). UML 2.5: Iniciación, ejemplos y ejercicios corregidos.
  - Pressman: capítulo 10 "Diseño en el nivel de componentes" (página 234) incluye conceptos UML.
  - Larman: capítulos sobre UML y patrones.
-->

- [[debrauwer-l_van-der-heyde-f_2016_uml-2-5-iniciacion-ejemplos-y-ejercicios-corregidos_4aed_ediciones-eni.pdf|Debrauwer & Van der Heyde, UML 2.5]] – Manual práctico de referencia.
- [[larman-c_2003_uml-y-patrones-una-introduccion-al-analisis-y-diseño-orientado-a-objetos-y-al-proceso-unificado_2aed_pearson-educacion.pdf|Larman, C. (2003). UML y patrones]] – Explica casos de uso y diagramas de clases con enfoque en análisis.
- [[pressman-r-s_maxin-b-r_2021_ingenieria-del-software-un-enfoque-practico_9aed_macgraw-hill-interamericana.pdf#page=234|Pressman & Maxim, capítulo 10 "Diseño en el nivel de componentes"]] – Incluye notación UML para componentes.