---
tipo: moc
materia: lenguajes-formales
nombre-completo: Lenguajes Formales
semestre: 2-2026
docente: Carlos Miranda Carrasco
fecha-inicio: 2026-08-10
tags:
  - moc
---

# 🗺️ MOC — Lenguajes Formales
> FICCT · UAGRM · Ing. Informática | 
> Semestre 2-2026 | 
> Carlos Miranda Carrasco

---

## 📚 Clases

```dataview
TABLE fecha AS Fecha, estado AS Estado
FROM "01_Notes/Lectures/lenguajes-formales"
WHERE tipo = "clase"
SORT fecha DESC
```

---

## 🧩 Conceptos

```dataview
TABLE dificultad AS Dificultad, estado AS Estado
FROM "01_Notes/Concepts/lenguajes-formales"
WHERE tipo = "concepto"
SORT dificultad DESC
```

---

## 📈 Conceptos con dificultad alta

```dataview
LIST
FROM "01_Notes/Concepts/lenguajes-formales"
WHERE dificultad = "🔴 alta"
```

---

## 🚀 Proyectos activos

```dataview
TABLE fecha-entrega AS Entrega, estado AS Estado
FROM "02_Projects"
WHERE materia = "lenguajes-formales"
SORT fecha-entrega ASC
```

---

## ✅ Tareas pendientes

```tasks
not done
path includes lenguajes-formales
```

---

## 📊 Ponderación

| Evaluacion | Ponderación | Unidades   |
| ---------- | ----------- | ---------- |
| Primera    | 20          | 1          |
| Segunda    | 20          | 2          |
| Final      | 40          | 1, 2, 3, 4 |
| Practicos  | 20          |            |

**Nota 1:** No hay recuperatorios

**Nota 2:** La sanción por trampas en los exámenes es la reprobación de la materia.

- [ ] Preguntar al auxiliar por la verdadera ponderación.

---

## 📖 Bibliografía

**Básica**

1. Dean Kelley ,”Teoría de autómatas y lenguajes formales”, Ed. Prentice hall. 1995.
2. John E. Hopcroft, Jeffrey D. Ullman, “Formal Languages and their relation to Automata”. Addison-Wesley Publishing Company, 1969.

**Complementaria**

3. Gries David, "Construcción de compiladores" Ed. Paraninfo, Madrid 1975
4. Hunter Robin, “The desing and construction of compilers” Ed. Jhon Wiley and Sons, 1983
5. Sanchis Llorca, Pacual Galan, "Compiladores" Ed. Paraninfo, Madrid, 1986
6. Sanches Dueñas Gonzales, Valverde Juan Antonio,"Compiladores e intérpretes un enfoque pragmático" Ed. Díaz de Santos, Madrid, 1984
7. Aho Alfred, Sethi Ravi, Ullman Jefrey, “Compiladores, Principios técnicas y herramientas”,Ed. Addison-Wesley Iberoamericana,1990

- [ ] Buscar los PDF de las bibliografías