<%*
/*
PLANTILLA PARA EL INDEX DE UNA MATERIA (USADA EN EL MACRO PARA MATERIA)
========================================================================
Propósito: Esta plantilla es el PASO 2 del Macro "Inicializar materia". NO es para uso directo — la ejecuta el Macro de QuickAdd.

A diferencia de plantilla_moc_materia.md, esta versión NO pide la materia mediante suggester porque el Macro ya la capturó en el User Script (paso 1) y la pasó como variable {{VALUE:materia}}.

QuickAdd reemplaza {{VALUE:materia}} en el nombre del archivo y en la carpeta destino ANTES de ejecutar Templater. Templater solo recibe el archivo ya ubicado en su carpeta final.

Configuración en el Macro (paso 2):
- Type: Template
- Template: 04-plantillas/moc_para_macro.md
- File Name: moc
- Create in folder: 01-materias/{{VALUE:materia}}/
- Open new note: ✅
========================================================================
*/

// La materia ya está en el path del archivo — la extraemos desde él.
// tp.file.folder(true) devuelve la ruta completa de la carpeta actual.
// Ej: "01-materias/sistemas-operativos"
// Tomamos el último segmento como identificador de materia.
let folderPath = tp.file.folder(true);
let materiaSel = folderPath.split("/").pop();

// Datos académicos que sí pedimos aquí
let semestre = await tp.system.prompt("Semestre (ej: 2025-2)");
let docente = await tp.system.prompt("Nombre del docente");
let creditos = await tp.system.prompt("Créditos de la materia");
let nombreCompleto = await tp.system.prompt("Nombre completo (ej: Sistemas Operativos I)");
_%>
---
materia: <% materiaSel %>
semestre: <% semestre %>
docente: <% docente %>
creditos: <% creditos %>
tipo: moc
estado: activa
tags: [moc, <% materiaSel %>]
---
# <% nombreCompleto %>

> **Docente:** `= this.docente` · **Semestre:** `= this.semestre` · **Créditos:** `= this.creditos`

---

## 🎯 Descripción de la materia

_Una o dos oraciones sobre de qué trata la materia y por qué importa en la carrera._

---

## 📢 Temas principales

---

## 🏁 Evaluación

| Actividad    | Porcentaje | Nota conseguida |
| ------------ | ---------- | --------------- |
| 1er parcial  | 30         |                 |
| 2do parcial  | 30         |                 |
| Examen final | 40         |                 |
| ⅀            | 100        |                 |

---

## 📊 Estado general

```dataview
TABLE length(rows) AS "Total clases"
FROM "01-materias/<% materiaSel %>/clases"
WHERE tipo = "clase"
```

---

## 📅 Clases

### Pendientes de revisión

```dataview
TABLE fecha AS "Fecha", file.link AS "Clase"
FROM "01-materias/<% materiaSel %>/clases"
WHERE tipo = "clase" AND estado = "🟡 sin-revisar"
SORT fecha ASC
```

### Historial completo

```dataview
TABLE fecha AS "Fecha", estado, file.link AS "Clase"
FROM "01-materias/<% materiaSel %>/clases"
WHERE tipo = "clase"
SORT fecha DESC
```

---

## 📌 Tareas pendientes

```dataview
TASK
FROM "01-materias/<% materiaSel %>"
WHERE !completed
SORT file.name ASC
```

---

## 🗂️ Proyectos

```dataview
TABLE estado, fecha-entrega AS "Entrega", file.link AS "Proyecto"
FROM "01-materias/<% materiaSel %>/proyectos"
WHERE tipo = "proyecto"
SORT fecha-entrega ASC
```

---

## 📚 Temas

```dataview
TABLE nivel, file.link AS "Tema", file.mtime AS "Última edición"
FROM "01-materias/<% materiaSel %>/temas"
WHERE tipo = "tema"
SORT file.name ASC
```

---

## 🔗 Mapa de conceptos

---

## 📎 Recursos

```dataview
TABLE file.link AS "Recurso"
FROM "01-materias/<% materiaSel %>/recursos"
SORT file.name ASC
```

---

_MOC generado el <% tp.date.now("YYYY-MM-DD") %> · Materia: `<% materiaSel %>`_