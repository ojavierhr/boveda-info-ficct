# 📊 Dashboard Global de Carrera

> Última actualización: `= date(today)`

## 📚 Clases sin procesar (todas las materias)

```dataview
TABLE materia AS Materia, fecha AS Fecha, estado AS Estado
FROM "01_Notes/Lectures"
WHERE estado != "🟢 procesada"
SORT fecha DESC
```

## 🧩 Conceptos con dificultad alta (prioridad)

```dataview
LIST
FROM "01_Notes/Concepts"
WHERE dificultad = "🔴 alta"
SORT materia ASC
```

## 🚀 Proyectos activos (próximos vencimientos)

```dataview
TABLE materia AS Materia, fecha-entrega AS Entrega, estado AS Estado
FROM "02_Projects"
WHERE estado != "✅ completado"
SORT fecha-entrega ASC
```

## 📋 Tareas pendientes (global)

```tasks
not done
```

## 📈 Progreso por semestre

```dataview
TABLE rows.materia AS Materias, length(rows) AS "Conceptos creados"
FROM "01_Notes/Concepts"
GROUP BY semestre
SORT semestre ASC
```

## 🎓 Materias registradas

```dataview
LIST
FROM "03_Areas"
WHERE file.name != "MOC-Carrera"
SORT file.name ASC
```

