---
tipo: tema
materia: sistemas-informacion-2
dificultad: 🟢 baja
estado: 📖 en-progreso
tags: [proceso-desarrollo, fases, ciclo-vida, software-gestion]
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
# El proceso de desarrollo de un software de gestión

---

## 🧠 Desarrollo del concepto

**Definición:**  

El proceso de desarrollo de un software de gestión es el conjunto de actividades, métodos, prácticas y transformaciones que se aplican para concebir, construir y poner en operación un sistema de información orientado a la administración de procesos empresariales (ventas, compras, inventario, finanzas, RRHH, etc.). Su objetivo es entregar un producto que satisfaga los requisitos funcionales y no funcionales, dentro de plazos y presupuestos predefinidos, con calidad suficiente.

---

### 🔁 Fases genéricas del proceso (independientemente de la metodología)

| Fase | Descripción | Entregables típicos |
|------|-------------|---------------------|
| **1. Análisis de requisitos** | Capturar y documentar lo que el sistema debe hacer. Se interactúa con los usuarios finales y se definen alcances. | Especificación de requisitos de software (SRS), casos de uso, prototipos de interfaces. |
| **2. Diseño** | Transformar los requisitos en una arquitectura y diseño detallado. Se definen componentes, bases de datos, interfaces. | Diagramas UML (clases, secuencia), modelo de datos, arquitectura de referencia, diseño de pantallas. |
| **3. Construcción (implementación)** | Escribir el código fuente siguiendo el diseño. Incluye programación, pruebas unitarias e integración inicial. | Código fuente, bibliotecas, bases de datos construidas, pruebas unitarias documentadas. |
| **4. Pruebas** | Verificar que el software cumple los requisitos y está libre de defectos. Puede incluir pruebas de integración, sistema, aceptación. | Plan de pruebas, casos de prueba, informes de errores, versión validada. |
| **5. Despliegue (implantación)** | Instalar el sistema en el entorno productivo, migrar datos, capacitar usuarios, poner en marcha. | Plan de implantación, manuales de usuario, entorno de producción activo. |
| **6. Mantenimiento y evolución** | Corregir errores detectados en producción y adaptar el software a nuevos requisitos. | Registro de incidencias, versiones actualizadas. |

---

### 🧭 Variaciones según el enfoque metodológico

- **En cascada:** las fases se ejecutan una tras otra, sin retornos. Ideal cuando los requisitos están claros y no cambiarán.
- **En iterativo incremental (RUP):** se ejecutan todas las fases en cada iteración, pero con diferente énfasis. Se entregan incrementos funcionales.
- **En ágil (Scrum):** las fases se comprimen en ciclos cortos (sprints). El análisis, diseño, construcción y pruebas ocurren en cada sprint.

---

### 🧪 Ejemplo práctico: desarrollo de un sistema de gestión de inventarios

1. **Análisis:** entrevistas con almacenistas, responsables de compras y ventas. Se identifican necesidades: control de stock, alertas de bajo inventario, registro de entradas y salidas, generación de órdenes de compra automáticas.
2. **Diseño:** se crean diagramas de clases para gestionar productos, movimientos, proveedores; se define una base de datos relacional; se diseñan pantallas de consulta y registro.
3. **Construcción:** se codifica el backend en Java/Spring y el frontend en React; se integra con la base de datos.
4. **Pruebas:** se realizan pruebas unitarias sobre los servicios de inventario; pruebas de integración con el módulo de compras; pruebas de aceptación con usuarios clave.
5. **Despliegue:** se migran datos de la hoja de cálculo actual a la nueva base; se capacita al personal en dos sesiones; se activa el sistema.
6. **Mantenimiento:** tras tres meses, se agrega un reporte de rotación de inventario solicitado por la gerencia.

---

### ✅ Factores críticos de éxito

- **Participación activa de los usuarios** durante todo el proceso.
- **Gestión de requisitos** clara y trazable.
- **Metodología adecuada** al tipo de proyecto y cultura organizacional.
- **Calidad en cada fase** (no acumular defectos).
- **Documentación justa y necesaria** que facilite el mantenimiento.

---

## 🃏 Flashcards para Anki

TARGET DECK: boveda informatica::sistemas informacion 2::temas::proceso desarrollo software::proceso desarrollo software gestion

START
Básico
Anverso: ¿Cuáles son las fases genéricas del desarrollo de un software de gestión?
Reverso: Análisis de requisitos, diseño, construcción, pruebas, despliegue, mantenimiento.
Tags: fases
END

START
Básico (y tarjeta invertida)
Anverso: ¿Qué se hace en la fase de análisis de requisitos?
Reverso: Capturar y documentar qué debe hacer el sistema; interactuar con usuarios; definir alcance. Entregable: SRS, casos de uso.
Tags: analisis
END

START
Básico (y tarjeta invertida)
Anverso: ¿Qué se hace en la fase de diseño?
Reverso: Transformar requisitos en arquitectura y diseño detallado: diagramas UML, modelo de datos, diseño de interfaces.
Tags: diseño
END

START
Básico (y tarjeta invertida)
Anverso: ¿Qué se hace en la fase de construcción?
Reverso: Escribir código fuente, pruebas unitarias, integración inicial.
Tags: construccion
END

START
Básico (y tarjeta invertida)
Anverso: ¿Qué se hace en la fase de pruebas?
Reverso: Verificar que el software cumple requisitos y está libre de defectos (integración, sistema, aceptación).
Tags: pruebas
END

START
Básico (y tarjeta invertida)
Anverso: ¿Qué se hace en la fase de despliegue?
Reverso: Instalar en producción, migrar datos, capacitar usuarios, poner en marcha.
Tags: despliegue
END

START
Básico
Anverso: ¿Cómo varían las fases en un enfoque ágil vs cascada?
Reverso: En cascada son secuenciales; en ágil se comprimen en ciclos cortos (sprints) y todas se ejecutan en cada iteración.
Tags: comparacion
END

START
Básico
Anverso: Menciona tres factores críticos de éxito en el desarrollo de software de gestión.
Reverso: Participación de usuarios, gestión de requisitos, metodología adecuada, calidad en cada fase, documentación justa.
Tags: exito
END

START
Oclusión de imagen
Texto: Las fases genéricas son {{c1::análisis}}, {{c2::diseño}}, {{c3::construcción}}, {{c4::pruebas}}, {{c5::despliegue}} y {{c6::mantenimiento}}.
Tags: fases, cloze
END

---

## 🔗 Enlaces a clases donde apareció este tema

- [[2026-03-13_presentacion-materia]] (se menciona dentro del contenido: "El proceso de desarrollo de un software de gestión")

---

## 📚 Referencias y recursos

<!--
  Referencias basadas en los índices proporcionados:
  - Pressman: capítulo 2 "Modelos del proceso" (página 26) – describe fases y modelos.
  - Laudon: capítulo 13 "Creación de sistemas de información" (página 500) – aborda el proceso de desarrollo de sistemas.
-->

- [[pressman-r-s_maxin-b-r_2021_ingenieria-del-software-un-enfoque-practico_9aed_macgraw-hill-interamericana.pdf#page=26|Pressman & Maxim, capítulo 2 "Modelos del proceso"]] – Explica las fases y modelos de proceso.
- [[laudon-k-c_laudon-j-p_2016_sistemas-de-informacion-gerencial_14aed_pearson-educacion.pdf#page=500|Laudon & Laudon, capítulo 13 "Creación de sistemas de información"]] – Ciclo de vida y metodologías de desarrollo.