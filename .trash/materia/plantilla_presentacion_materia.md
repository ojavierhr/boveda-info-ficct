%%
PLANTILLA: presentacion_de_la_materia

Esta plantilla crea la página principal de una materia.

Estructura esperada de la carpeta:

materia
├── clases
├── proyectos
├── recursos
├── temas
├── tareas.md
└── presentacion_de_la_materia.md

Explicación de cada sección:

Temas documentados:
Notas conceptuales tipo wiki (UML, SCRUM, ERP, etc.)

Clases:
Apuntes tomados durante clases.

Proyectos:
Documentación de proyectos de la materia.

Recursos:
Material de apoyo (PDF, enlaces, diagramas).

Tareas:
Archivo con tablero Kanban de actividades.
%%

# 📚 {{title}}

**Materia:**  
**Profesor:**  
**Semestre cursado:**  

Universidad: UAGRM  
Facultad: FICCT  
Carrera: Ingeniería Informática  

---

## 🎯 Objetivo de la materia

-

---

## 📊 Ponderación

| # | Actividad | Nota | Porcentaje |
|---|---|---|---|
| 1 | 1er parcial | | |
| 2 | 2do parcial | | |
| 3 | Examen final | | |

---

## 🧠 Temas principales

-

---

## 📚 Temas documentados

```dataview
list
from this.file.folder + "/temas"
sort file.name asc
```
---
## 📅 Clases

```dataview
list  
from this.file.folder + "/clases"  
sort file.name asc
```
---
## 📦 Proyectos

```dataview
list  
from this.file.folder + "/proyectos"  
sort file.name asc
```
---

## 📎 Material de referencia

- 

---

## 📋 Tareas

[[tareas]]