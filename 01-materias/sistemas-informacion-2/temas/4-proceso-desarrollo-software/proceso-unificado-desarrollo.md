---
tipo: tema
materia: sistemas-informacion-2
dificultad: 🟢 baja
estado: 📖 en-progreso
tags: [rup, puds, proceso-unificado, iterativo, incremental]
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
# Proceso Unificado de Desarrollo (PUDS / RUP)

---

## 🧠 Desarrollo del concepto

**Definición:**  

El Proceso Unificado de Desarrollo de Software (PUDS), conocido por sus siglas en inglés RUP (Rational Unified Process), es un marco de trabajo iterativo e incremental para el desarrollo de software, basado en el lenguaje UML y promovido originalmente por Rational Software (hoy parte de IBM). Combina prácticas de ingeniería de software con un enfoque dirigido por casos de uso, centrado en la arquitectura e iterativo.

---

### 📐 Principios fundamentales

| Principio | Descripción |
|-----------|-------------|
| **Dirigido por casos de uso** | Los casos de uso guían el análisis, diseño y pruebas. |
| **Centrado en la arquitectura** | Se define una arquitectura robusta desde las primeras iteraciones. |
| **Iterativo e incremental** | El software se construye en ciclos, entregando funcionalidad creciente. |
| **Gestión de riesgos** | Se identifican y mitigan los riesgos desde el inicio. |
| **Adaptable** | Se puede personalizar según las necesidades del proyecto. |

---

### 🔁 Fases del Proceso Unificado

| Fase | Objetivo | Hitos clave |
|------|----------|-------------|
| **Inicio** | Establecer la visión del proyecto, identificar casos de uso críticos, evaluar viabilidad. | *Hito de objetivos* (Lifecycle Objectives). |
| **Elaboración** | Definir la arquitectura base, refinar casos de uso, eliminar riesgos técnicos. | *Hito de arquitectura* (Lifecycle Architecture). |
| **Construcción** | Desarrollar el software incrementalmente, completar funcionalidades, realizar pruebas. | *Hito de capacidad operativa inicial* (Initial Operational Capability). |
| **Transición** | Desplegar el sistema a usuarios, corregir defectos, capacitar, entregar versión final. | *Hito de lanzamiento* (Product Release). |

---

### 📊 Disciplinas (flujos de trabajo)

Dentro de cada fase se ejecutan varias disciplinas con diferente intensidad:

| Disciplina | Descripción |
|------------|-------------|
| **Modelado de negocio** | Comprender la organización y sus procesos. |
| **Requisitos** | Capturar y gestionar requisitos (casos de uso). |
| **Análisis y diseño** | Transformar requisitos en diseño (UML). |
| **Implementación** | Codificar, compilar, integrar. |
| **Pruebas** | Verificar calidad (unidad, integración, sistema). |
| **Despliegue** | Empaquetar, distribuir, instalar. |
| **Gestión de configuración** | Control de versiones, cambios. |
| **Gestión de proyectos** | Planificar, supervisar, controlar. |
| **Entorno** | Herramientas, infraestructura. |

---

### 🔄 Iteraciones

Cada fase se divide en **iteraciones**. Cada iteración produce un incremento funcional y pasa por todas las disciplinas, aunque con diferente énfasis según la fase. Por ejemplo, en **Elaboración** se enfatiza el análisis y diseño; en **Construcción** se enfatiza la implementación y pruebas.

---

### 🧪 Ejemplo práctico: desarrollo de un ERP a medida

- **Inicio** (1 iteración): se identifican los principales módulos (finanzas, compras, inventario) y se esbozan casos de uso de alto nivel. Se decide la tecnología (Java, Spring, PostgreSQL).
- **Elaboración** (2 iteraciones): se construye un prototipo arquitectónico con los casos de uso más críticos (ej. registro de facturas). Se definen los componentes clave y la base de datos.
- **Construcción** (4 iteraciones): se desarrollan incrementos funcionales: en iteración 3 se completa el módulo de compras; en iteración 4, inventario; etc.
- **Transición** (1 iteración): se despliega en producción, se migran datos, se capacita al personal de finanzas y almacén.

---

### ✅ Ventajas y desventajas

| Ventajas | Desventajas |
|----------|-------------|
| Enfoque iterativo reduce riesgos. | Puede ser pesado para proyectos pequeños. |
| Arquitectura definida temprano. | Requiere disciplina y experiencia. |
| Adaptable a distintos tipos de proyectos. | Documentación extensa si no se controla. |
| Integra UML y buenas prácticas. | Curva de aprendizaje pronunciada. |

---

## 🃏 Flashcards para Anki

TARGET DECK: boveda informatica::sistemas informacion 2::temas::proceso desarrollo software::proceso unificado desarrollo

START
Básico
Anverso: ¿Qué es el Proceso Unificado de Desarrollo (RUP)?
Reverso: Marco de trabajo iterativo e incremental para desarrollo de software, basado en UML, dirigido por casos de uso y centrado en la arquitectura.
Tags: definicion
END

START
Básico
Anverso: ¿Cuáles son las cuatro fases del Proceso Unificado?
Reverso: Inicio, Elaboración, Construcción, Transición.
Tags: fases
END

START
Básico (y tarjeta invertida)
Anverso: ¿Qué ocurre en la fase de Inicio?
Reverso: Establecer la visión, identificar casos de uso críticos, evaluar viabilidad. Hito: objetivos del ciclo de vida.
Tags: inicio
END

START
Básico (y tarjeta invertida)
Anverso: ¿Qué ocurre en la fase de Elaboración?
Reverso: Definir arquitectura base, refinar casos de uso, eliminar riesgos técnicos. Hito: arquitectura del ciclo de vida.
Tags: elaboracion
END

START
Básico (y tarjeta invertida)
Anverso: ¿Qué ocurre en la fase de Construcción?
Reverso: Desarrollar software incrementalmente, completar funcionalidades, realizar pruebas. Hito: capacidad operativa inicial.
Tags: construccion
END

START
Básico (y tarjeta invertida)
Anverso: ¿Qué ocurre en la fase de Transición?
Reverso: Desplegar a usuarios, corregir defectos, capacitar, entregar versión final. Hito: lanzamiento del producto.
Tags: transicion
END

START
Básico
Anverso: ¿Cuáles son los principios fundamentales de RUP?
Reverso: Dirigido por casos de uso, centrado en arquitectura, iterativo e incremental, gestión de riesgos, adaptable.
Tags: principios
END

START
Básico (y tarjeta invertida)
Anverso: Disciplinas típicas en RUP
Reverso: Modelado de negocio, requisitos, análisis y diseño, implementación, pruebas, despliegue, gestión de configuración, gestión de proyectos, entorno.
Tags: disciplinas
END

START
Básico
Anverso: ¿Qué es una iteración en RUP?
Reverso: Ciclo completo dentro de una fase que produce un incremento funcional y atraviesa todas las disciplinas.
Tags: iteracion
END

START
Básico
Anverso: ¿Cuál es la principal ventaja de RUP?
Reverso: Enfoque iterativo que reduce riesgos, arquitectura definida temprano, adaptable a distintos proyectos.
Tags: ventajas
END

START
Oclusión de imagen
Texto: Las cuatro fases de RUP son {{c1::Inicio}}, {{c2::Elaboración}}, {{c3::Construcción}} y {{c4::Transición}}.
Tags: fases, cloze
END

---

## 🔗 Enlaces a clases donde apareció este tema

- [[2026-03-13_presentacion-materia]] (se menciona dentro del contenido: "Proceso Unificado de Desarrollo (PUDS / RUP)")

---

## 📚 Referencias y recursos

<!--
  Referencias basadas en los índices proporcionados:
  - Pressman: capítulo 2.5 "El proceso unificado" (página 45).
  - Jacobson, Booch, Rumbaugh (2000). El proceso unificado de desarrollo de software. Pearson Educación.
-->

- [[pressman-r-s_maxin-b-r_2021_ingenieria-del-software-un-enfoque-practico_9aed_macgraw-hill-interamericana.pdf#page=45|Pressman & Maxim, capítulo 2.5 "El proceso unificado"]] – Explica las fases, disciplinas y principios.
- [[jabobson_booch_rumbaugh_2000_el-proceso-unificado-de-desarrollo-de-software_pearson-educacion.pdf|Jacobson, Booch & Rumbaugh (2000). El proceso unificado de desarrollo de software]] – Libro fundamental sobre RUP.