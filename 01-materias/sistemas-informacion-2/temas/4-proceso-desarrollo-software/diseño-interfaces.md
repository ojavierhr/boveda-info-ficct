---
tipo: tema
materia: sistemas-informacion-2
dificultad: 🟢 baja
estado: 📖 en-progreso
tags: [interfaz-usuario, ui, ux, diseño-interface]
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
# Diseño de interfaces

---

## 🧠 Desarrollo del concepto

**Definición:**  

El diseño de interfaces (o diseño de la interfaz de usuario, UI) es la actividad que define cómo los usuarios interactúan con un sistema software. Abarca la disposición de los elementos en pantalla, los flujos de navegación, la respuesta a las acciones del usuario y la experiencia global (UX – User Experience). Su objetivo es hacer que el sistema sea intuitivo, eficiente y agradable de usar.

---

### 🎯 Principios fundamentales (las "reglas doradas")

| Principio | Descripción |
|-----------|-------------|
| **Dejar el control al usuario** | El usuario debe sentir que dirige la interacción: deshacer acciones, personalizar, navegar libremente. |
| **Reducir la carga de memoria** | No obligar a recordar información entre pantallas; ofrecer opciones reconocibles (menús, listas) en lugar de campos libres. |
| **Consistencia** | Elementos similares deben comportarse de la misma manera (botones, atajos, terminología). |

---

### 🔁 Etapas del diseño de interfaces

| Etapa | Descripción |
|-------|-------------|
| **Análisis de usuarios** | Conocer quiénes usarán el sistema, sus tareas, nivel de experiencia, entorno. |
| **Modelado de tareas** | Descomponer las tareas en pasos que el usuario realizará. |
| **Diseño de la interacción** | Definir la secuencia de pantallas y cómo fluye la información (diagramas de navegación, storyboards). |
| **Diseño de la presentación** | Definir la apariencia: colores, tipografía, disposición de elementos (wireframes, mockups). |
| **Prototipado** | Construir versiones interactivas (baja o alta fidelidad) para probar con usuarios. |
| **Evaluación** | Probar con usuarios reales, recoger feedback, iterar. |

---

### 🧩 Elementos de la interfaz

| Elemento | Descripción |
|----------|-------------|
| **Ventanas / pantallas** | Contenedores principales de la interfaz. |
| **Menús** | Listas de opciones que organizan las funcionalidades. |
| **Botones** | Elementos que desencadenan acciones inmediatas. |
| **Campos de entrada** | Texto, números, fechas, selección (checkboxes, radio buttons, listas desplegables). |
| **Mensajes** | Diálogos de confirmación, errores, notificaciones. |
| **Iconos** | Representaciones visuales de acciones o objetos. |

---

### 📐 Patrones de diseño de interfaz (ejemplos)

| Patrón | Uso |
|--------|-----|
| **Formulario maestro‑detalle** | Un panel con lista de registros y otro con los detalles del seleccionado. |
| **Asistente (wizard)** | Secuencia de pantallas para completar una tarea compleja (ej. instalación de software). |
| **Dashboard** | Resumen visual con indicadores clave (gráficos, KPI). |
| **Navegación por pestañas** | Organiza contenido relacionado en un solo espacio. |
| **Barra de búsqueda + resultados** | Permite buscar y filtrar datos. |

---

### 🧪 Ejemplo práctico: diseño de interfaz para sistema de gestión de pedidos

1. **Análisis de usuarios:** operadores de call center que atienden pedidos telefónicos; necesitan rapidez y pocos errores.
2. **Modelado de tarea:** tarea principal "registrar pedido": buscar cliente → agregar productos → confirmar → facturar.
3. **Diseño de interacción:** diagrama de flujo que muestra pantallas y transiciones.
4. **Diseño de presentación:** wireframe de la pantalla principal: campo de búsqueda de cliente, tabla de productos, botones "Agregar", "Confirmar", "Cancelar".
5. **Prototipo:** maqueta interactiva en Figma para prueba con dos operadores.
6. **Evaluación:** se detecta que el botón "Confirmar" es muy pequeño; se rediseña a mayor tamaño y color verde.

---

### ✅ Importancia del diseño de interfaces

- **Aceptación del sistema:** una interfaz confusa o fea provoca rechazo, incluso si el backend es potente.
- **Reducción de errores:** una buena interfaz minimiza equivocaciones del usuario.
- **Eficiencia:** reduce el tiempo de entrenamiento y el tiempo por tarea.
- **Satisfacción del usuario:** influye directamente en la percepción de calidad.

---

## 🃏 Flashcards para Anki

TARGET DECK: boveda informatica::sistemas informacion 2::temas::proceso desarrollo software::diseno interfaces

START
Básico
Anverso: ¿Qué es el diseño de interfaces (UI)?
Reverso: Actividad que define cómo los usuarios interactúan con el sistema: disposición de elementos, flujos, navegación, experiencia de usuario.
Tags: definicion
END

START
Básico
Anverso: Menciona las tres "reglas doradas" del diseño de interfaces.
Reverso: Dejar el control al usuario, reducir la carga de memoria, consistencia.
Tags: principios
END

START
Básico (y tarjeta invertida)
Anverso: Etapas del diseño de interfaces
Reverso: Análisis de usuarios, modelado de tareas, diseño de interacción, diseño de presentación, prototipado, evaluación.
Tags: etapas
END

START
Básico (y tarjeta invertida)
Anverso: Wireframe
Reverso: Representación esquemática de la interfaz que muestra disposición de elementos sin detalles de color o estilo.
Tags: tecnicas
END

START
Básico (y tarjeta invertida)
Anverso: Prototipado de interfaz
Reverso: Construcción de versiones interactivas (baja o alta fidelidad) para probar con usuarios antes de implementar.
Tags: tecnicas
END

START
Básico (y tarjeta invertida)
Anverso: Patrón de interfaz "Formulario maestro‑detalle"
Reverso: Un panel con lista de registros y otro con los detalles del seleccionado.
Tags: patrones
END

START
Básico (y tarjeta invertida)
Anverso: Patrón "Asistente" (wizard)
Reverso: Secuencia de pantallas para completar una tarea compleja paso a paso.
Tags: patrones
END

START
Básico
Anverso: ¿Por qué es importante un buen diseño de interfaces?
Reverso: Aceptación del sistema, reducción de errores, eficiencia, satisfacción del usuario.
Tags: importancia
END

START
Oclusión de imagen
Texto: Las etapas del diseño de interfaces son {{c1::análisis de usuarios}}, {{c2::modelado de tareas}}, {{c3::diseño de interacción}}, {{c4::diseño de presentación}}, {{c5::prototipado}} y {{c6::evaluación}}.
Tags: etapas, cloze
END

---

## 🔗 Enlaces a clases donde apareció este tema

- [[2026-03-13_presentacion-materia]] (se menciona dentro del contenido: "Diseño de interfaces")

---

## 📚 Referencias y recursos

<!--
  Referencias basadas en los índices proporcionados:
  - Pressman: capítulo 11 "Diseño de la interfaz de usuario" (página 265) – reglas doradas, análisis, etapas.
  - Kendall & Kendall: capítulo 14 "Interacción humano-computadora" (página 441) – usabilidad, tipos de interfaz, lineamientos.
  - Laudon: capítulo 13 "Creación de sistemas de información" (página 500) – contexto de diseño en sistemas de información.
-->

- [[pressman-r-s_maxin-b-r_2021_ingenieria-del-software-un-enfoque-practico_9aed_macgraw-hill-interamericana.pdf#page=265|Pressman & Maxim, capítulo 11 "Diseño de la interfaz de usuario"]] – Explica reglas, análisis de usuarios, etapas y evaluación.
- [[kendall-k-e_kendall-j-e_2011_analisis-y-diseño-de-sistemas_8aed_pearson-educacion.pdf#page=441|Kendall & Kendall, capítulo 14 "Interacción humano-computadora"]] – Tipos de interfaz, lineamientos y usabilidad.