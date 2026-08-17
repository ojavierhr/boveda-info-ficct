---
tipo: moc
materia: redes-1
nombre-completo: Redes I
semestre: 2/2026
docente: Víctor Fernando Monrroy Dipp
fecha-inicio: 2026-08-17
tags: [moc]
---

# 🗺️ MOC — Redes I
> FICCT · UAGRM · Ing. Informática | 
> Semestre 2/2026 | 
> Víctor Fernando Monrroy Dipp

---

## 📚 Clases

```dataview
TABLE fecha AS Fecha, estado AS Estado
FROM "01_Notes/Lectures/redes-1"
WHERE tipo = "clase"
SORT fecha DESC
```

---

## 🧩 Conceptos

```dataview
TABLE dificultad AS Dificultad, estado AS Estado
FROM "01_Notes/Concepts/redes-1"
WHERE tipo = "concepto"
SORT dificultad DESC
```

---

## 📈 Conceptos con dificultad alta

```dataview
LIST
FROM "01_Notes/Concepts/redes-1"
WHERE dificultad = "🔴 alta"
```

---

## 🚀 Proyectos activos

```dataview
TABLE fecha-entrega AS Entrega, estado AS Estado
FROM "02_Projects"
WHERE materia = "redes-1"
SORT fecha-entrega ASC
```

---

## ✅ Tareas pendientes

```tasks
not done
path includes redes-1
```

---

## 📊 Ponderación

| Actividad  | %        | Mi nota |
| ---------- | -------- | ------- |
| Parcial I  | 20       |         |
| Parcial II | 20       |         |
| Final      | 40       |         |
| Practicos  | 20       |         |
| Proyecto   | 10       |         |
| **Total**  | **100%** |         |

- [ ] Preguntar al docente si la ponderación es correcta

---

## 📖 Bibliografía

- Redes de computadoras - Tanenbaum (libro principal)
- Comunicación y redes de computadoras - Stalling

- [ ] Buscar los libros de la bibliografia