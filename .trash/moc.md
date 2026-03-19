---
materia: calculo-1
semestre: 2026-1
docente: huaman
creditos: 5
tipo: moc
estado: activa
tags: [moc, calculo-1]
---
# estadistica
> **Docente:** `= this.docente` · **Semestre:** `= this.semestre` · **Créditos:** `= this.creditos`
---

## 🎯 Descripción de la materia

_Una o dos oraciones sobre de qué trata la materia y por qué importa en la carrera._

--- 

## 📢 Temas principales:

* 

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
TABLE length(rows) AS "Total"
FROM "01-materias/undefined/clases"
WHERE tipo = "clase"
```

```dataview
TABLE
  length(filter(rows, (r) => r.estado = "🟢 revisado")) AS "Revisadas",
  length(filter(rows, (r) => r.estado = "🟡 sin-revisar")) AS "Pendientes"
FROM "01-materias/undefined/clases"
WHERE tipo = "clase"
```

---

## 📅 Clases

### Pendientes de revisión

```dataview
TABLE fecha AS "Fecha", file.link AS "Clase"
FROM "01-materias/undefined/clases"
WHERE tipo = "clase" AND estado = "🟡 sin-revisar"
SORT fecha ASC
```

### Todas las clases

```dataview
TABLE fecha AS "Fecha", estado, file.link AS "Clase"
FROM "01-materias/undefined/clases"
WHERE tipo = "clase"
SORT fecha DESC
```

---

## 📌 Tareas pendientes

```dataview
TASK
FROM "01-materias/undefined"
WHERE !completed
SORT file.name ASC
```

---

## 🗂️ Proyectos

```dataview
TABLE estado, fecha-entrega AS "Entrega", file.link AS "Proyecto"
FROM "01-materias/undefined/proyectos"
WHERE tipo = "proyecto"
SORT fecha-entrega ASC
```

---

## 📚 Temas de la materia

_Estos son los conceptos clave — cada uno debería tener su propia nota en `temas/`_

```dataview
TABLE file.link AS "Tema", file.mtime AS "Última edición"
FROM "01-materias/undefined/temas"
SORT file.name ASC
```

---

## 🔗 Mapa de conceptos

_Enlazá aquí los temas más importantes de esta materia_

---

## 📎 Recursos de la materia

```dataview
TABLE file.link AS "Recurso"
FROM "01-materias/undefined/recursos"
SORT file.name ASC
```

---

_MOC generado el 2026-03-17 con `plantilla_moc_materia.md`_