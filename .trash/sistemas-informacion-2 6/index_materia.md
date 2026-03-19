---
materia: sistemas-informacion-2
semestre: 2026-1
docente: Ing. Rolando Martinez Canedo
creditos: 5
tipo: moc
estado: activa
tags: [moc, sistemas-informacion-2]
---
# Sistemas de Informacion II

> **Docente:** `= this.docente` · **Semestre:** `= this.semestre` · **Créditos:** `= this.creditos`

---

## 🎯 Descripción de la materia

_Una o dos oraciones sobre de qué trata la materia y por qué importa en la carrera._

---

## 📢 Temas principales

- 
- 
- 

---

## 🏁 Evaluación

| Actividad    | Porcentaje | Nota conseguida |
| ------------ | :--------: | :-------------: |
| 1er parcial  | 30         |                 |
| 2do parcial  | 30         |                 |
| Examen final | 40         |                 |
| ⅀            | 100        |                 |

---

## 📊 Estado general

```dataview
TABLE length(rows) AS "Total clases"
FROM "01-materias/sistemas-informacion-2/clases"
WHERE tipo = "clase"
```

```dataview
TABLE
  length(filter(rows, (r) => r.estado == "🟢 revisado")) AS "Revisadas",
  length(filter(rows, (r) => r.estado == "🟡 sin-revisar")) AS "Pendientes"
FROM "01-materias/sistemas-informacion-2/clases"
WHERE tipo = "clase"
```

---

## 📅 Clases

### Pendientes de revisión

```dataview
TABLE fecha AS "Fecha", file.link AS "Clase"
FROM "01-materias/sistemas-informacion-2/clases"
WHERE tipo = "clase" AND estado == "🟡 sin-revisar"
SORT fecha ASC
```

### Historial completo

```dataview
TABLE fecha AS "Fecha", estado, file.link AS "Clase"
FROM "01-materias/sistemas-informacion-2/clases"
WHERE tipo = "clase"
SORT fecha DESC
```

---

## 📌 Tareas pendientes

```dataview
TASK
FROM "01-materias/sistemas-informacion-2"
WHERE !completed
SORT file.name ASC
```

---

## 🗂️ Proyectos

```dataview
TABLE estado, fecha-entrega AS "Entrega", file.link AS "Proyecto"
FROM "01-materias/sistemas-informacion-2/proyectos"
WHERE tipo = "proyecto"
SORT fecha-entrega ASC
```

---

## 📚 Temas

```dataview
TABLE nivel, file.link AS "Tema", file.mtime AS "Última edición"
FROM "01-materias/sistemas-informacion-2/temas"
WHERE tipo = "tema"
SORT file.name ASC
```

---

## 🔗 Mapa de conceptos

- 

---

## 📎 Recursos

```dataview
TABLE file.link AS "Recurso"
FROM "01-materias/sistemas-informacion-2/recursos"
SORT file.name ASC
```

---

_index_materia generado el 2026-03-18_
