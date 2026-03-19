# <%* /* PLANTILLA: TAREAS DE PROYECTO — por fase

Genera un archivo de tareas estructurado para una fase de un proyecto. Usa el plugin Tasks para gestión de tareas con subtareas, fechas y asignados.

Convención de tareas:

- [ ] Descripción @persona 📅 YYYY-MM-DD ⏫ #proy-NN/fase-N
    - [ ] Subtarea 1
    - [ ] Subtarea 2

Estados de tarea: [ ] → pendiente [/] → en progreso [x] → completada [-] → cancelada [>] → diferida

Prioridades: 🔺 → urgente ⏫ → alta 🔼 → media 🔽 → baja

Fechas: 📅 YYYY-MM-DD → fecha límite ⏳ YYYY-MM-DD → fecha programada (para cuando planificás empezar) 🛫 YYYY-MM-DD → fecha de inicio

# Asignados: @nombre (queryable con Tasks)

*/

let proyecto = await tp.system.prompt("Código del proyecto (ej: proy-01)"); let faseNum = await tp.system.prompt("Número de fase (ej: 1)"); let faseNombre = await tp.system.prompt("Nombre de la fase (ej: Taller de investigación)"); let fechaEnt = await tp.system.prompt("Fecha de entrega (YYYY-MM-DD)"); let materia = await tp.system.suggester([ "sistemas-informacion-2", "sistemas-operativos-2", "ecuaciones-diferenciales", "ingles-tecnico", "redes-1", "investigacion-operativa-2" ], [ "sistemas-informacion-2", "sistemas-operativos-2", "ecuaciones-diferenciales", "ingles-tecnico", "redes-1", "investigacion-operativa-2" ]);

## await tp.file.move(`01-materias/${materia}/tareas/${proyecto}_fase-${faseNum}_tareas`); _%>--- proyecto: <% proyecto %> fase: <% faseNum %> materia: <% materia %> tipo: tareas fecha-entrega: <% fechaEnt %> tags: [tareas, <% proyecto %>, <% proyecto %>/fase-<% faseNum %>, <% materia %>]

# Tareas — Fase <% faseNum %>: <% faseNombre %>

> Proyecto: [[<% proyecto %>_taller-mrp]] · Entrega: <% fechaEnt %> `@nombre` para asignar · `📅` fecha límite · `⏫` alta · `🔼` media · `🔽` baja

---

## 📋 Tareas pendientes

```tasks
not done
tags include #<% proyecto %>/fase-<% faseNum %>
sort by due
```

---

## ✅ Completadas

```tasks
done
tags include #<% proyecto %>/fase-<% faseNum %>
sort by done
```

---

## 📝 Lista de tareas

_Completar con las tareas específicas de esta fase_ _Usar subtareas (indentadas con Tab) para desglosar trabajo_

- [ ] Tarea principal @persona 📅 <% fechaEnt %> ⏫ #<% proyecto %>/fase-<% faseNum %>
    - [ ] Subtarea A
    - [ ] Subtarea B

---

_Archivo de tareas creado el <% tp.date.now("YYYY-MM-DD") %>_