<!-- markdownlint-disable MD041 -->
<%*
  let materia = await tp.system.prompt("Materia (slug, ej: sistemas-informacion-2)");
  if (!materia) return;
  let semestre = await tp.system.prompt("Semestre (opcional)", "", true);
  let fechaInicio = tp.date.now("YYYY-MM-DD");
  let fechaEntrega = await tp.system.prompt("Fecha de entrega (YYYY-MM-DD)", "", true);
%>---
tipo: proyecto
materia: <% materia %>
semestre: <% semestre %>
fecha-inicio: <% fechaInicio %>
fecha-entrega: <% fechaEntrega %>
estado: 🔵 en-progreso
tags: [proyecto]

---

# <% tp.file.title %>

## 🎯 Objetivo

%% Una o dos oraciones que describan exactamente qué hay que entregar. Leélo antes de cada sesión de trabajo para no perder el foco. %%

## 📋 Requisitos del docente

%% Lista exacta de lo que pidió el docente. Copiala literalmente si es posible. Es tu checklist de entregable mínimo. %%

-

## 👥 Equipo

%% Quiénes trabajan en este proyecto. %%

-

---

## 🏗️ Kanban del proyecto

%% Este bloque lo renderiza el plugin Kanban como un tablero visual.
   Podés arrastrar las tarjetas entre columnas directamente en Obsidian.
   NO modificar las líneas "## NombreColumna" — son la estructura del tablero. %%

```kanban
---
kanban-plugin: basic
---

## 📥 Backlog
- [ ] 

## 📌 Por hacer esta semana
- [ ] 

## ⚙️ En progreso
- [ ] 

## 👀 En revisión
- [ ] 

## ✅ Completado
- [ ] 
```

---

## 📁 Archivos y recursos relacionados

%% Links a PDFs, repos de GitHub, documentos de Drive, etc. %%

## 🔗 Conceptos aplicados

%% Links a las notas atómicas de conceptos que usás en este proyecto.  
Útil para repasar la teoría cuando estás desarrollando. %%
