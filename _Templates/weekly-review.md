<!-- markdownlint-disable MD041 -->
%% ============================================================
PLANTILLA: REVISIÓN SEMANAL

CUÁNDO SE CREA: Automáticamente cada semana con Periodic Notes. También podés crearla manualmente cuando quieras hacer una revisión.

DÓNDE SE GUARDA: 05_Reviews/Weekly/

CUÁNDO HACERLA: Sábado, 1 hora aproximadamente.

PROPÓSITO:
Es el momento de salir del "modo ejecución" (hacer tareas) y entrar al "modo sistema" (revisar que el sistema funciona bien).
Si saltás las revisiones semanales, el sistema se desordena en 2–3 semanas.

QUÉ HACÉS EN LA REVISIÓN:

 1. Ver qué hiciste esta semana (10 min)
 2. Procesar clases que quedaron pendientes (20 min)
 3. Completar links entre conceptos del Zettelkasten (10 min)
 4. Revisar estado de proyectos (10 min)
 5. Definir prioridades de la semana siguiente (10 min)
============================================================ %%

---
tipo: weekly-review
semana: <% tp.date.now("YYYY-[W]WW") %>
tags: [review]

---

# 🔄 Revisión Semanal — <% tp.date.now("YYYY-[W]WW") %>

---

## ✅ ¿Qué completé esta semana?

%% Lista libre. Sirve para darte cuenta de lo que sí lograste, que a veces no es obvio cuando uno solo ve lo que falta. %%

---

## 🟡 Clases pendientes de procesar

%% Dataview busca todas las notas de clase que todavía están en 🟡 sin-revisar. Si hay muchas → es la prioridad #1 de esta semana. %%

```dataview
TABLE fecha AS Fecha, materia AS Materia
FROM "01_Notes/Lectures"
WHERE tipo = "clase" AND estado = "🟡 sin-revisar"
SORT fecha ASC
```

---

## 🔗 Conexiones Zettelkasten pendientes

%% Notas atómicas que creaste pero todavía no enlazaste con otras. Una nota sin links es una isla — pierde todo su valor. Revisá tus notas en borrador y agregá al menos 2–3 links por nota. %%

-

---

## 📊 Estado de proyectos activos

%% Revisá fechas de entrega. Si algo vence en menos de 7 días → acción urgente. %%

```dataview
TABLE fecha-entrega AS Entrega, estado AS Estado
FROM "02_Projects"
WHERE estado = "🔵 en-progreso"
SORT fecha-entrega ASC
```

---

## 🃏 Estado Anki esta semana

%% Revisá las estadísticas en Anki (Estadísticas → Hoy). El objetivo es no tener días sin repasar. %%

- **Días sin repasar esta semana:**
- **Mazo más descuidado:**
- **Concepto más difícil de la semana:**
- **Flashcards nuevas sincronizadas:**

---

## 🎯 Prioridades de la semana siguiente

%% Máximo 3. Si ponés más, ninguna es realmente prioritaria. %%

1.
2.
3.
