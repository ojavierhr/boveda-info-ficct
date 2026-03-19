%*
/*
PLANTILLA PARA NOTA DE TEMA (Templater + Dataview)
========================================================================
Propósito:
  Esta plantilla crea una nota para documentar conceptos fundamentales
  de la carrera. Cada tema es una unidad de conocimiento atómica que
  puede conectarse con múltiples materias y servir como base para
  construir mapas conceptuales.

  El frontmatter estructurado permite a Dataview:
    - Listar todos los temas en el MOC de cada materia
    - Filtrar por nivel de comprensión (superficial/entendido/dominado)
    - Mostrar fechas de creación y última revisión
    - Identificar temas que necesitan repaso

Uso:
  1. Ejecutar la plantilla (desde Templater o QuickAdd).
  2. Se solicitarán secuencialmente:
     a) Materia principal del tema (selector con lista predefinida)
     b) Nivel de comprensión inicial (selector con emojis)
     c) Fecha de próxima revisión (prompt con valor por defecto: +7 días)
  3. El título de la nota se toma del nombre del archivo.
  4. Completar las secciones a medida que se profundiza el tema.

Estructura:
  - Bloque de recolección de datos (código JavaScript con <%* ... _%>)
  - Frontmatter YAML (metadatos para Dataview)
  - Cuerpo de la nota (markdown con secciones organizadas)

========================================================================
1. SELECCIÓN DE MATERIA PRINCIPAL
------------------------------------------------------------------------
Lista completa de materias de la carrera. El valor seleccionado se usa para:
  - Ubicar la nota en la carpeta correspondiente ("01-materias/[materia]/temas/")
  - Etiquetas del frontmatter
  - Filtrar temas en los MOCs de materia
*/
let materiaSel = await tp.system.suggester([
    "calculo-1","estructuras-discretas","introduccion-informatica","fisica-1","ingles-tecnico-1",
    "calculo-2","algebra-lineal","programacion-1","fisica-2","ingles-tecnico-2","ecuaciones-diferenciales",
    "programacion-2","arquitectura-computadoras","fisica-3","administracion","probabilidad-estadistica-1",
    "metodos-numericos","estructura-datos-1","programacion-ensamblador","contabilidad","probabilidad-estadistica-2",
    "programacion-logica-funcional","estructura-datos-2","base-datos-1","lenguajes-formales","programacion-grafica",
    "investigacion-operativa-1","sistemas-informacion-1","sistemas-operativos-1","base-datos-2","compiladores",
    "topicos-avanzados-programacion","investigacion-operativa-2","inteligencia-artificial","sistemas-operativos-2",
    "redes-1","sistemas-informacion-2","sistemas-distribuidos","interaccion-hombre-computador","preparacion-evaluacion-proyectos",
    "sistemas-expertos","sistemas-informacion-geografica","redes-2","ingenieria-software-1","criptografia-seguridad",
    "taller-grado-1","ingenieria-software-2","tecnologia-web","arquitectura-software","modalidad-titulacion-licenciatura"
], [
    "calculo-1","estructuras-discretas","introduccion-informatica","fisica-1","ingles-tecnico-1",
    "calculo-2","algebra-lineal","programacion-1","fisica-2","ingles-tecnico-2","ecuaciones-diferenciales",
    "programacion-2","arquitectura-computadoras","fisica-3","administracion","probabilidad-estadistica-1",
    "metodos-numericos","estructura-datos-1","programacion-ensamblador","contabilidad","probabilidad-estadistica-2",
    "programacion-logica-funcional","estructura-datos-2","base-datos-1","lenguajes-formales","programacion-grafica",
    "investigacion-operativa-1","sistemas-informacion-1","sistemas-operativos-1","base-datos-2","compiladores",
    "topicos-avanzados-programacion","investigacion-operativa-2","inteligencia-artificial","sistemas-operativos-2",
    "redes-1","sistemas-informacion-2","sistemas-distribuidos","interaccion-hombre-computador","preparacion-evaluacion-proyectos",
    "sistemas-expertos","sistemas-informacion-geografica","redes-2","ingenieria-software-1","criptografia-seguridad",
    "taller-grado-1","ingenieria-software-2","tecnologia-web","arquitectura-software","modalidad-titulacion-licenciatura"
]);

/*
------------------------------------------------------------------------
2. SELECCIÓN DEL NIVEL DE COMPRENSIÓN
------------------------------------------------------------------------
Los niveles incluyen un emoji representativo (visible) y un valor interno
(sin emoji) para consultas Dataview más limpias:
  - 🌱 superficial:   Concepto nuevo, se entiende lo básico
  - 🌿 entendido:     Se puede explicar y aplicar
  - 🌳 dominado:      Se domina completamente, se puede enseñar
*/
let nivelSel = await tp.system.suggester(
    ["🌱 superficial", "🌿 entendido", "🌳 dominado"],
    ["superficial", "entendido", "dominado"]
);

/*
------------------------------------------------------------------------
3. FECHA DE PRÓXIMA REVISIÓN
------------------------------------------------------------------------
Se sugiere una fecha por defecto (hoy + 7 días) para mantener el
sistema de repaso espaciado. El usuario puede modificarla o aceptarla.
*/
let fechaRevision = await tp.system.prompt(
    "Fecha de próxima revisión (formato YYYY-MM-DD)",
    tp.date.now("YYYY-MM-DD", 7) // valor por defecto: una semana después
);

/*
------------------------------------------------------------------------
4. PREPARACIÓN PARA EL FRONTMATTER
------------------------------------------------------------------------
A continuación se generará el frontmatter con los siguientes campos:

  - titulo:          Nombre del archivo (configurado en QuickAdd)
  - materia:         Materia principal del tema (para filtros)
  - tipo:            "tema" – identifica el tipo de nota
  - nivel:           Nivel de comprensión actual
  - fecha-creacion:  Fecha de creación (automática)
  - fecha-revision:  Fecha programada para próxima revisión
  - tags:            Etiquetas: "tema" + materia para búsquedas
  - aliases:         Nombres alternativos para búsquedas

IMPORTANTE: La fecha de revisión puede usarse en consultas Dataview
para identificar temas que necesitan repaso.
*/
_%>
---
titulo: <% tp.file.title %>
materia: <% materiaSel %>
tipo: tema
nivel: <% nivelSel %>
fecha-creacion: <% tp.date.now("YYYY-MM-DD") %>
fecha-revision: <% fechaRevision %>
tags: [tema, <% materiaSel %>]
aliases: []
---
# <% tp.file.title %>

> [!abstract] En una oración
> _¿Qué es `<% tp.file.title %>`? Escribí la definición más simple y precisa posible._

---

## 🧠 Explicación
<!-- Explicar el concepto como si se enseñara a alguien sin conocimiento previo -->
_Explicá el concepto como si se lo tuvieras que enseñar a alguien que nunca lo escuchó. Sin tecnicismos innecesarios._

---

## 🔍 Detalles técnicos
<!-- Profundizar con precisión técnica: fórmulas, algoritmos, estructuras -->
_Acá sí podés usar precisión técnica: algoritmos, fórmulas, estructuras, código._

```
// código de ejemplo si aplica
```

---

## 📐 Ejemplo concreto
<!-- Crear un ejemplo propio que pueda explicarse en voz alta -->
_Un ejemplo que hagas vos, no copiado. Que puedas explicar en voz alta._

---

## 🔗 Conceptos relacionados
<!-- Enlazar otras notas de la bóveda que se conecten con este tema -->
_¿Con qué otras notas de la bóveda se conecta este tema?_

- 
- 

---

## 🌍 Aparece en estas materias
<!-- Listar otras materias donde aparece este concepto (si aplica) -->
_¿Este concepto aparece en más de una materia? Enlazalas._

- 

---

## ❓ Lo que todavía no tengo claro
<!-- Dudas activas para investigar después -->
_Dudas activas, preguntas abiertas, cosas para investigar después._

- [ ] 

---

## 📎 Fuentes
<!-- Libros, papers, videos, apuntes del docente -->
_Libros, papers, videos, apuntes del docente._

- 

---
*Nota de tema creada el <% tp.date.now("YYYY-MM-DD") %> · Nivel: `= this.nivel`*  
*Próxima revisión: `= this.fecha-revision`*