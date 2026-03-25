---
tipo: tema
materia: sistemas-informacion-2
dificultad: 🟢 baja
estado: 📖 en-progreso
tags: [srs, requisitos, especificacion, documentacion]
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
# Especificación de requisitos de software (SRS)

---

## 🧠 Desarrollo del concepto

**Definición:**  

La Especificación de Requisitos de Software (Software Requirements Specification, SRS) es un documento que describe de manera completa y precisa el comportamiento, las características, las restricciones y los atributos de calidad de un sistema de software, desde la perspectiva de los usuarios y las partes interesadas. Sirve como base para el diseño, la construcción, las pruebas y la aceptación final del producto.

**Propósito:**

- Establecer un **contrato formal** entre el cliente y el equipo de desarrollo.
- Reducir la ambigüedad y los malentendidos.
- Servir como **referencia** durante todo el ciclo de vida.
- Facilitar la **validación** de que el sistema cumple lo solicitado.

---

### 📋 Estructura típica de un SRS (según IEEE 830-1998)

| Sección | Contenido |
|---------|----------|
| **1. Introducción** | Propósito, alcance, definiciones, referencias, visión general. |
| **2. Descripción general** | Perspectiva del producto, funciones del usuario, características de los usuarios, restricciones, supuestos y dependencias. |
| **3. Requisitos específicos** | Es la parte central: requisitos funcionales, requisitos no funcionales, interfaces externas (usuario, hardware, software, comunicaciones). |
| **4. Aprobación** | Firmas de conformidad (opcional). |

---

### 🔍 Tipos de requisitos

| Tipo | Descripción | Ejemplo |
|------|-------------|---------|
| **Funcionales** | Lo que el sistema debe hacer (acciones, procesos, cálculos). | "El sistema debe permitir registrar ventas y actualizar automáticamente el inventario." |
| **No funcionales** | Atributos de calidad, restricciones, rendimiento, seguridad, usabilidad. | "El tiempo de respuesta no debe superar los 2 segundos." |
| **Interfaces externas** | Cómo se comunica el sistema con otros sistemas, hardware o usuarios. | "El sistema debe interoperar con la pasarela de pago XYZ." |

---

### 🧩 Características de un buen SRS

- **Correcto:** cada requisito refleja una necesidad real.
- **Completo:** no falta ningún requisito necesario.
- **Consistente:** no hay contradicciones entre requisitos.
- **Inequívoco:** cada requisito tiene una única interpretación.
- **Verificable:** se puede comprobar objetivamente su cumplimiento.
- **Trazable:** cada requisito puede rastrearse a su origen y a los artefactos de diseño/prueba.

---

### 🧪 Ejemplo práctico (fragmento de SRS para un sistema de inventarios)

**Requisito funcional:**  
RF‑01: El sistema debe permitir registrar entradas de mercadería mediante código de barras, actualizando el stock en tiempo real.

**Requisito no funcional:**  
RNF‑01: El tiempo de procesamiento de una entrada de mercadería no debe exceder 1 segundo.

**Interfaz externa:**  
IE‑01: El sistema debe integrarse con el ERP de la empresa mediante API REST.

---

### 🛠️ Herramientas para gestionar requisitos

- **Documentos estructurados:** Word, Google Docs (con plantillas).
- **Herramientas especializadas:** Jira (con complementos), IBM DOORS, Trello (para requisitos simples).
- **Modelado:** se pueden adjuntar diagramas UML (casos de uso) al SRS.

---

## 🃏 Flashcards para Anki

TARGET DECK: boveda informatica::sistemas informacion 2::temas::proceso desarrollo software::especificacion requisitos software

START
Básico
Anverso: ¿Qué es la Especificación de Requisitos de Software (SRS)?
Reverso: Documento que describe completa y precisamente el comportamiento, características y restricciones del software, sirviendo como base para diseño, construcción y pruebas.
Tags: definicion
END

START
Básico
Anverso: ¿Cuáles son las secciones principales de un SRS según IEEE?
Reverso: Introducción, descripción general, requisitos específicos, aprobación.
Tags: estructura
END

START
Básico (y tarjeta invertida)
Anverso: Requisitos funcionales
Reverso: Describen lo que el sistema debe hacer (acciones, procesos, cálculos).
Tags: tipos
END

START
Básico (y tarjeta invertida)
Anverso: Requisitos no funcionales
Reverso: Atributos de calidad, restricciones, rendimiento, seguridad, usabilidad.
Tags: tipos
END

START
Básico (y tarjeta invertida)
Anverso: Interfaces externas (en SRS)
Reverso: Definen cómo se comunica el sistema con otros sistemas, hardware o usuarios.
Tags: tipos
END

START
Básico
Anverso: Menciona tres características de un buen SRS.
Reverso: Correcto, completo, consistente, inequívoco, verificable, trazable.
Tags: caracteristicas
END

START
Básico (y tarjeta invertida)
Anverso: Trazabilidad (en requisitos)
Reverso: Capacidad de rastrear cada requisito a su origen y a los artefactos de diseño/prueba.
Tags: trazabilidad
END

START
Básico
Anverso: ¿Qué herramientas se pueden usar para gestionar requisitos?
Reverso: Documentos estructurados (Word), herramientas especializadas (Jira, DOORS), modelado con UML.
Tags: herramientas
END

START
Oclusión de imagen
Texto: Un SRS debe ser {{c1::correcto}}, {{c2::completo}}, {{c3::consistente}}, {{c4::inequívoco}}, {{c5::verificable}} y {{c6::trazable}}.
Tags: caracteristicas, cloze
END

---

## 🔗 Enlaces a clases donde apareció este tema

- [[2026-03-13_presentacion-materia]] (se menciona dentro del contenido: "Especificación de requisitos de software (SRS)")

---

## 📚 Referencias y recursos

<!--
  Referencias basadas en los índices proporcionados:
  - Pressman: capítulo 5 "Comprensión de los requerimientos" (página 101) y capítulo 6 "Modelado de los requerimientos: escenarios, información y clases de análisis" (página 126).
  - Laudon: capítulo 13 "Creación de sistemas de información" (página 500) aborda el análisis de sistemas.
  - Kendall: capítulos 2, 3 y 5 sobre recopilación de información y análisis.
-->

- [[pressman-r-s_maxin-b-r_2021_ingenieria-del-software-un-enfoque-practico_9aed_macgraw-hill-interamericana.pdf#page=101|Pressman & Maxim, capítulo 5 "Comprensión de los requerimientos"]] – Explica el proceso de ingeniería de requisitos y la elaboración del SRS.
- [[laudon-k-c_laudon-j-p_2016_sistemas-de-informacion-gerencial_14aed_pearson-educacion.pdf#page=509|Laudon & Laudon, capítulo 13, sección "Análisis de sistemas"]] – Enfoque práctico para capturar requisitos.
- [[kendall-k-e_kendall-j-e_2011_analisis-y-diseño-de-sistemas_8aed_pearson-educacion.pdf|Kendall & Kendall, capítulos sobre recopilación de información y análisis]] – Técnicas de indagación.