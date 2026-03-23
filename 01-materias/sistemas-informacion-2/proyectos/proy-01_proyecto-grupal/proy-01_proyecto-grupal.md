---
tipo: proyecto
nombre: proy-01_proyecto-grupal
materia: sistemas-informacion-2
estado-fase-1: 🟡 en progreso # 🔴 no entregado, 🟡 en progreso, 🔵 entregado, 🟢 evaluado 
fecha-solicitud-fase-1: 2026-03-06
fecha-entrega-fase-1: 2026-03-16
fecha-evaluacion-fase-1:
integrantes:
  - "@javier"
tags:
  - proy-01
---
# 🏗️ Proyecto grupal — Panel de control

---

## 🤔 ¿De qué va este proyecto?

Es el **proyecto final** de la materia *Sistemas de Información II*. El objetivo es aplicar todo lo aprendido en clase usando la metodología **SCRUM** (trabajo en equipo de 5 personas) en el desarrollo de un sistema de software

---

## 🤝 Equipo

- @javier

---

## 🎯 Objetivos

- **Entender los conceptos previos:**
  - Conocer a fondo qué son los sistemas **MRP** y cómo se usan en empresas.
  - Preparar una presentación clara y profesional sobre la investigación.
  - Demostrar que conocemos herramientas existentes de tipo MRP.

---

## 🛣️ Fases del proyecto

### Fase 1

#### 📌 Entregables

- Informe escrito de la investigación del tipo de sistema solicitado al grupo.
- Presentación de diapositivas y presentación oral del tipo de sistema.

#### 📊 Estado de la fase

- **Estado:** 🔴 no entregado
- **Fecha de entrega:** 2026-03-16

#### ✅ Tareas pendientes

```tasks
not done
path includes 01-materias/sistemas-informacion-2/proyectos/proy-01_proyecto-grupal/tareas/
group by folder
short mode
```

#### 📈 Progreso

```dataview
TABLE
  rows.file.link AS Tarea,
  rows.status AS Estado
FROM "01-materias/sistemas-informacion-2/proyectos/proy-01_proyecto-grupal/tareas/"
FLATTEN file.tasks AS T
WHERE !T.completed
GROUP BY T.section AS Fase
```
