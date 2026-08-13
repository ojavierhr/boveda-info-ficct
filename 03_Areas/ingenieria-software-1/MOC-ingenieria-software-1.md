---
tipo: moc
materia: ingenieria-software-1
nombre-completo: Ingenieria de Software I
semestre: 2-2026
docente: Ing. Rolando Martínez Canedo
fecha-inicio: 2026-08-04
tags:
  - moc
---
# 🗺️ MOC — Ingenieria de Software I
> FICCT · UAGRM · Ing. Informática
> Semestre 2-2026 
> Ing. Rolando Martínez Canedo

---

## 📚 Clases

```dataview
TABLE fecha AS Fecha, estado AS Estado
FROM "01_Notes/Lectures/ingenieria-software-1"
WHERE tipo = "clase"
SORT fecha DESC
```

---

## 🧩 Conceptos

```dataview
TABLE dificultad AS Dificultad, estado AS Estado
FROM "01_Notes/Concepts/ingenieria-software-1"
WHERE tipo = "concepto"
SORT dificultad DESC
```

---

## 📈 Conceptos con dificultad alta

```dataview
LIST
FROM "01_Notes/Concepts/ingenieria-software-1"
WHERE dificultad = "🔴 alta"
```

---

## 🚀 Proyectos activos

```dataview
TABLE fecha-entrega AS Entrega, estado AS Estado
FROM "02_Projects"
WHERE materia = "ingenieria-software-1"
SORT fecha-entrega ASC
```

---

## ✅ Tareas pendientes

```tasks
not done
path includes ingenieria-software-1
```

---

## 📊 Ponderación

| Actividad | % | Nota |
|---|---|---|
|  |  |  |
|  |  |  |
|  |  |  |
| **Total** | **100%** | |

---

## 📖 Bibliografía

