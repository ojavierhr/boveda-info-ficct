---
tipo: tarea-proyecto
proyecto: <% tp.system.prompt("Slug del proyecto") %>
materia: <% tp.system.prompt("Materia slug") %>
estado: backlog
prioridad: <% tp.system.prompt("Prioridad (alta, media, baja)", "media") %>
fecha-limite: <% tp.system.prompt("Fecha límite YYYY-MM-DD", tp.date.now("YYYY-MM-DD")) %>
responsable: <% tp.system.prompt("Responsable (opcional)", "", true) %>
dependencias: 
tags: [tarea, <% tp.system.prompt("Slug del proyecto") %>]
---

# <% tp.file.title %>

## Descripción
%% Explicá qué hay que hacer %%

## Checklist
- [ ] 

## Recursos / enlaces