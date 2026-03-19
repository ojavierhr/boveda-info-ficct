---
materia: sistemas-informacion-2
semestre: 2026-1
docente: Ing. Rolando Martinez Canedo
creditos: 5
tipo: resumen_materia
estado: activa
tags: [resumen_materia, sistemas-informacion-2]
---
# Sistemas de Información II

**Docente:** `= this.docente`

**Semestre:** `= this.semestre`

**Créditos:** `= this.creditos`

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

```dataviewjs
const clases = dv.pages('"01-materias/sistemas-informacion-2/clases"')
  .where(p => p.tipo === "clase");
const total = clases.length;
const revisadas = clases.where(p => p.estado === "🟢 revisado").length;
const pendientes = clases.where(p => p.estado === "🟡 sin-revisar").length;
dv.table(["Total clases", "Revisadas", "Pendientes"], [[total, revisadas, pendientes]]);
```

---

## 📅 Clases

### Pendientes de revisión

```dataview
TABLE fecha AS "Fecha", file.link AS "Clase"
FROM "01-materias/sistemas-informacion-2/clases"
WHERE tipo = "clase" AND estado = "🟡 sin-revisar"
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

_resumen_materia generado el 2026-03-18_
