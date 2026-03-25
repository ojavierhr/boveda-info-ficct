---
tipo: tema
materia: sistemas-informacion-2
dificultad: 🟢 baja
estado: 📖 en-progreso
tags: [gestion-proyectos, planificacion, riesgos, componentes]
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
# Componentes de proyectos de software

---

## 🧠 Desarrollo del concepto

**Definición:**  

Los componentes de proyectos de software son los elementos que conforman la gestión de un proyecto, incluyendo los procesos, artefactos, recursos y prácticas necesarias para planificar, ejecutar y controlar el desarrollo de software. Una correcta definición de estos componentes es esencial para alcanzar los objetivos de alcance, tiempo, costo y calidad.

---

### 🧩 Principales componentes

| Componente | Descripción |
|------------|-------------|
| **Alcance** | Define qué está incluido y qué no en el proyecto (requisitos, funcionalidades, límites). Se documenta en la especificación de requisitos y en el acta de constitución. |
| **Planificación** | Cronograma con actividades, hitos, dependencias, asignación de recursos. Incluye diagramas de Gantt, estimaciones de esfuerzo y costos. |
| **Recursos** | Equipo humano, herramientas, infraestructura, presupuesto. |
| **Riesgos** | Identificación, análisis (probabilidad e impacto), planes de mitigación y contingencia. |
| **Comunicación** | Plan de comunicación: informes, reuniones, canales, frecuencia, stakeholders. |
| **Calidad** | Estándares, métricas, criterios de aceptación, revisiones, pruebas. |
| **Configuración** | Control de versiones, gestión de cambios, identificación de artefactos. |
| **Adquisiciones** | Contratación de terceros, componentes externos, licencias. |

---

### 📋 Artefactos clave

| Artefacto | Propósito |
|-----------|-----------|
| **Acta de constitución (Project Charter)** | Autoriza el proyecto, define objetivos, alcance de alto nivel, patrocinador, recursos iniciales. |
| **Plan de proyecto** | Documento que integra todos los planes subsidiarios (alcance, tiempo, costo, calidad, etc.). |
| **Estructura de desglose del trabajo (EDT / WBS)** | Descompone el trabajo en paquetes manejables. |
| **Cronograma** | Diagrama de Gantt con fechas, hitos y dependencias. |
| **Registro de riesgos** | Lista de riesgos con análisis y acciones planificadas. |
| **Matriz de trazabilidad de requisitos** | Relaciona requisitos con diseño, implementación y pruebas. |

---

### ⚠️ Gestión de riesgos (pasos)

1. **Identificación** – listar posibles riesgos (técnicos, de recursos, de alcance, externos).
2. **Análisis cualitativo** – evaluar probabilidad e impacto (bajo, medio, alto).
3. **Análisis cuantitativo** (opcional) – estimar numéricamente el efecto.
4. **Planificación de respuesta** – mitigar (reducir probabilidad/impacto), transferir, aceptar, evitar.
5. **Monitoreo y control** – revisar periódicamente, actualizar.

---

### 🧪 Ejemplo práctico: proyecto de desarrollo de un sistema de inventarios

**Alcance:** sistema para control de stock, entradas/salidas, alertas de bajo stock, reportes. Excluye facturación.

**Planificación:** 4 meses, 3 iteraciones, hitos: fin de análisis (mes 1), prototipo funcional (mes 2), sistema completo (mes 3), pruebas y despliegue (mes 4).

**Riesgos identificados:**
- Cambios en los requisitos durante el desarrollo (probabilidad alta, impacto medio) → respuesta: usar metodología ágil con sprints cortos.
- Rotación del equipo (probabilidad baja, impacto alto) → respuesta: documentación de decisiones y código, pair programming.

**Comunicación:** reunión semanal con el cliente, informe de avance cada 15 días, tablero Kanban visible.

**Calidad:** estándar de codificación definido, cobertura de pruebas unitarias ≥ 80%, revisión de código antes de integrar.

---

### ✅ Importancia de definir los componentes

- Permite **anticipar** problemas y asignar recursos adecuadamente.
- Facilita la **toma de decisiones** basada en datos objetivos.
- Ayuda a **controlar** desviaciones (tiempo, costo, calidad).
- Mejora la **transparencia** con los stakeholders.

---

## 🃏 Flashcards para Anki

TARGET DECK: boveda informatica::sistemas informacion 2::temas::gestion implantacion::componentes proyectos software

START
Básico
Anverso: ¿Cuáles son los principales componentes de un proyecto de software?
Reverso: Alcance, planificación, recursos, riesgos, comunicación, calidad, configuración, adquisiciones.
Tags: componentes
END

START
Básico
Anverso: ¿Qué es el acta de constitución (Project Charter)?
Reverso: Documento que autoriza el proyecto, define objetivos, alcance de alto nivel, patrocinador y recursos iniciales.
Tags: artefactos
END

START
Básico (y tarjeta invertida)
Anverso: Estructura de desglose del trabajo (EDT / WBS)
Reverso: Descompone el trabajo en paquetes manejables, facilitando la estimación y asignación.
Tags: artefactos
END

START
Básico (y tarjeta invertida)
Anverso: Registro de riesgos
Reverso: Lista de riesgos identificados con análisis de probabilidad, impacto y planes de respuesta.
Tags: riesgos
END

START
Básico
Anverso: ¿Cuáles son los pasos de la gestión de riesgos?
Reverso: Identificación, análisis cualitativo, análisis cuantitativo (opcional), planificación de respuesta, monitoreo y control.
Tags: riesgos
END

START
Básico
Anverso: ¿Qué debe incluir el plan de proyecto?
Reverso: Planes subsidiarios de alcance, tiempo, costo, calidad, recursos, comunicación, riesgos, adquisiciones, etc.
Tags: planificacion
END

START
Básico (y tarjeta invertida)
Anverso: Matriz de trazabilidad de requisitos
Reverso: Relaciona cada requisito con los artefactos de diseño, implementación y pruebas.
Tags: artefactos
END

START
Básico
Anverso: ¿Por qué es importante definir los componentes de un proyecto?
Reverso: Permite anticipar problemas, facilita la toma de decisiones, controla desviaciones y mejora la transparencia.
Tags: importancia
END

START
Oclusión de imagen
Texto: La gestión de riesgos incluye {{c1::identificación}}, {{c2::análisis}}, {{c3::planificación de respuesta}} y {{c4::monitoreo}}.
Tags: riesgos, cloze
END

---

## 🔗 Enlaces a clases donde apareció este tema

- [[2026-03-13_presentacion-materia]] (se menciona dentro del contenido: "Componentes de proyectos de software")

---

## 📚 Referencias y recursos

<!--
  Referencias basadas en los índices proporcionados:
  - Laudon: capítulo 14 "Administración de proyectos" (página 540) – componentes de proyectos, riesgos, planificación.
  - Pressman: capítulo 2.2 "Evaluación y mejora del proceso" (página 31) – gestión de proyectos.
  - Kendall & Kendall: capítulo 16 "Aseguramiento e implementación de la calidad" (página 515) – implementación de proyectos.
-->

- [[laudon-k-c_laudon-j-p_2016_sistemas-de-informacion-gerencial_14aed_pearson-educacion.pdf#page=540|Laudon & Laudon, capítulo 14 "Administración de proyectos"]] – Explica componentes, riesgos y herramientas de gestión.
- [[pressman-r-s_maxin-b-r_2021_ingenieria-del-software-un-enfoque-practico_9aed_macgraw-hill-interamericana.pdf#page=31|Pressman & Maxim, capítulo 2.2 "Evaluación y mejora del proceso"]] – Contexto de gestión de proyectos.