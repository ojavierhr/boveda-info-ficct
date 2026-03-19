---
materia: calculo-1
semestre: 2026-1
docente: docente
creditos: 5
tipo: moc
estado: activa
tags: [moc, calculo-1]
---
# materia

> **Docente:** `= this.docente` · **Semestre:** `= this.semestre` · **Créditos:** `= this.creditos`

---

## 🎯 Descripción de la materia

_Una o dos oraciones sobre de qué trata la materia y por qué importa en la carrera._
<!-- Completar con una descripción general de la materia. Ejemplo: -->
<!-- "Esta materia introduce los conceptos fundamentales de sistemas operativos: -->
<!-- gestión de procesos, memoria, archivos y E/S." -->

---

## 📢 Temas principales:
<!-- Listar los grandes bloques temáticos de la materia -->
* 
* 
* 

---

## 🏁 Evaluación
<!-- Completar con los porcentajes reales de la cursada -->

| Actividad    | Porcentaje | Nota conseguida |
| ------------ | ---------- | --------------- |
| 1er parcial  | 30         |                 |
| 2do parcial  | 30         |                 |
| Examen final | 40         |                 |
| ⅀            | 100        |                 |

---

## 📊 Estado general
<!-- Consultas que muestran estadísticas globales de las clases -->

```dataview
TABLE length(rows) AS "Total"
FROM "01-materias/" + this.materia + "/clases"
WHERE tipo = "clase"
```

```dataview
TABLE
  length(filter(rows, (r) => r.estado = "🟢 revisado")) AS "Revisadas",
  length(filter(rows, (r) => r.estado = "🟡 sin-revisar")) AS "Pendientes"
FROM "01-materias/" + this.materia + "/clases"
WHERE tipo = "clase"
```
---
## 📅 Clases

### Pendientes de revisión
<!-- Clases que aún no han sido marcadas como revisadas (estado "🟡 sin-revisar") -->

```dataview
TABLE fecha AS "Fecha", file.link AS "Clase"
FROM "01-materias/" + this.materia + "/clases"
WHERE tipo = "clase" AND estado = "🟡 sin-revisar"
SORT fecha ASC
```

### Todas las clases
<!-- Historial completo de clases, ordenado de más reciente a más antigua -->

```dataview
TABLE fecha AS "Fecha", estado, file.link AS "Clase"
FROM "01-materias/" + this.materia + "/clases"
WHERE tipo = "clase"
SORT fecha DESC
```

---

## 📌 Tareas pendientes
<!-- Tareas extraídas automáticamente de todas las notas de la materia -->

```dataview
TASK
FROM "01-materias/" + this.materia
WHERE !completed
SORT file.name ASC
```

---

## 🗂️ Proyectos
<!-- Proyectos activos de la materia (requiere carpeta "proyectos" con notas tipo "proyecto") -->

```dataview
TABLE estado, fecha-entrega AS "Entrega", file.link AS "Proyecto"
FROM "01-materias/" + this.materia + "/proyectos"
WHERE tipo = "proyecto"
SORT fecha-entrega ASC
```

---

## 📚 Temas de la materia
<!-- Notas individuales sobre conceptos clave, almacenadas en "temas/" -->

```dataview
TABLE file.link AS "Tema", file.mtime AS "Última edición"
FROM "01-materias/" + this.materia + "/temas"
SORT file.name ASC
```

---

## 🔗 Mapa de conceptos
<!-- Enlaces a los temas más importantes para visualizar relaciones -->

---

## 📎 Recursos de la materia
<!-- Material de estudio: PDFs, links, apuntes adicionales -->

```dataview
TABLE file.link AS "Recurso"
FROM "01-materias/" + this.materia + "/recursos"
SORT file.name ASC
```

---

_MOC generado el 2026-03-17 con `plantilla_moc_materia.md`_