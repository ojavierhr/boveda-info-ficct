---
tipo: proyecto
materia: sistemas-informacion-2
semestre: 7
fecha-inicio: 2026-04-07
fecha-entrega: 2026-04-26
estado: 🔵 en-progreso
tags: [proyecto, g4-p1-auxilio-mecanico]
---

# Auxilio mecánico - Grupo 4

## 🎯 Objetivo
%% Escribí el objetivo principal del proyecto %%

## 📋 Requisitos del docente / alcance
%% Lista de requisitos %%

## 👥 Equipo
%% Nombres y roles %%

## 📅 Hitos / entregas parciales
%% Podés listar fechas clave %%

---

## 📊 Dashboard del proyecto

### ⚙️ Tareas en progreso
```dataview
TABLE WITHOUT ID
  file.link AS Tarea,
  fecha-limite AS "📅 Entrega",
  responsable AS "👤",
  prioridad AS "⭐"
FROM "02_Projects/g4-p1-auxilio-mecanico/tareas"
WHERE estado = "en-progreso"
SORT prioridad DESC, fecha-limite ASC
```

### 📥 Backlog (pendientes)
```dataview
LIST
FROM "02_Projects/g4-p1-auxilio-mecanico/tareas"
WHERE estado = "backlog" OR estado = "pendiente"
SORT fecha-limite ASC
```

### ✅ Completado recientemente
```dataview
TABLE fecha-completado AS "Completado"
FROM "02_Projects/g4-p1-auxilio-mecanico/tareas"
WHERE estado = "completado"
SORT fecha-completado DESC
LIMIT 5
```

---

## 🗂️ Tablero Kanban
Abrí el archivo [[_tablero.kanban]] para ver el tablero visual.

## 📁 Archivos y recursos
- [[02_Projects/g4-p1-auxilio-mecanico/recursos]]
- [[02_Projects/g4-p1-auxilio-mecanico/reuniones]]

## 🔗 Conceptos aplicados
%% Enlaces a notas atómicas de la materia %%
