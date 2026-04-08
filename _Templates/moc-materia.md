---
tipo: moc
materia: <% tp.file.title %>
tags: [moc]

---
<!-- markdownlint-disable MD041 -->
%% ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
No borrar ni renombrar estos campos de arriba. Son meta-datos que se usan para algunas configuraciones no están pensados tanto para la lectura.
%%
%% ============================================================
PLANTILLA: MOC (Map of Content) — ÍNDICE MAESTRO DE MATERIA

CUÁNDO USARLA: Se crea automáticamente al usar Ctrl+Alt+M. Normalmente no deberías aplicar esta plantilla manualmente.

DÓNDE SE GUARDA: 03_Areas/[slug-materia]/MOC-[slug-materia].md

QUÉ ES UN MOC: Es la "página de inicio" de cada materia. No contiene notas, sino consultas automáticas (Dataview) que muestran todo lo de la materia en tiempo real: clases, conceptos, proyectos, tareas.

Cuando abrís el MOC de una materia, ves inmediatamente:

- Qué clases tomaste y cuáles están sin procesar
- Qué conceptos tenés y cuáles son difíciles
- Qué proyectos están activos y cuándo vencen
- Qué tareas pendientes hay
============================================================ %%

# 🗺️ MOC — <% tp.file.title %>

> Dashboard Materia

---

## 📚 Clases

%% Esta consulta Dataview busca automáticamente todas las notas de clase que tengan materia = al slug de esta nota. Se actualiza sola. %%

```dataview
TABLE fecha AS Fecha, estado AS Estado
FROM "01_Notes/Lectures/<% tp.file.title %>"
WHERE tipo = "clase"
SORT fecha DESC
```

---

## 🧩 Conceptos

%% Muestra todos los conceptos de la materia ordenados por dificultad. Los 🔴 alta aparecen primero para que los priorices. %%

```dataview
TABLE dificultad AS Dificultad, estado AS Estado
FROM "01_Notes/Concepts/<% tp.file.title %>"
WHERE tipo = "concepto"
SORT dificultad DESC
```

---

## 📈 Conceptos con dificultad alta

```dataview
LIST
FROM "01_Notes/Concepts/<% tp.file.title %>"
WHERE dificultad = "🔴 alta"
```

---

## 🚀 Proyectos activos

```dataview
TABLE fecha-entrega AS Entrega, estado AS Estado
FROM "02_Projects"
WHERE materia = "<% tp.file.title %>"
SORT fecha-entrega ASC
```

---

## 📋 Tareas pendientes de los proyectos
```tasks
not done
path includes 02_Projects
path includes <% tp.file.title %>
```

---

## ✅ Tareas pendientes

%% El plugin Tasks busca tareas (líneas con - [ ]) en toda la carpeta de la materia. %%

```tasks
not done
path includes <% tp.file.title %>
```

---

## 📊 Ponderación

| Actividad | %        | Nota |
|-----------|----------|------|
|           |          |      |
| **Total** | **100%** |      |

---

## 📖 Bibliografía
