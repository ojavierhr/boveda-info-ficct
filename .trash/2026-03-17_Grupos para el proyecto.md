---

## fecha: <% tp.date.now("YYYY-MM-DD") %> dia: <% tp.date.now("dddd", 0, "es") %> materia: <% tp.system.suggester(["Sistemas Operativos", "Ecuaciones Diferenciales", "Inglés Técnico", "Redes", "Sistemas de Información", "Investigación Operativa"], ["sistemas-operativos", "ecuaciones-diferenciales", "ingles-tecnico", "redes", "sistemas-informacion", "investigacion-operativa"]) %> tipo: clase semana: <% tp.date.now("W") %> estado: 🟡 sin-revisar tags: [clase, <% tp.frontmatter.materia %>]

# <% tp.date.now("YYYY-MM-DD") %> — {{TEMA DE LA CLASE}}

> [!info] Metadatos **Materia:** `= this.materia`  
> **Docente:** {{nombre del docente}}  
> **Semana:** `= this.semana`

---

## 🎯 Objetivo de la clase

_¿Qué se supone que aprenderás hoy? (1–2 oraciones antes de empezar)_

---

## 📝 Apuntes

### {{Subtema 1}}

_Escribe aquí libremente. No te preocupes por el formato en este momento._

### {{Subtema 2}}

---

## 💡 Ideas clave

> _Las 3 cosas más importantes de esta clase (llena esto AL FINAL)_

---

## 🔗 Conexiones con otras notas

_Vincula aquí conceptos que ya conocés o que aparecen en otras materias_

---

## ❓ Preguntas sin resolver

_Lo que no entendiste, lo que quedó pendiente, lo que hay que investigar_

- [ ]

---

## 📌 Tareas / Pendientes

_Tareas, lecturas o ejercicios que surgieron en clase_

- [ ] 📅 {{fecha de entrega}} — {{descripción de la tarea}}

---

## 🧠 Revisión post-clase

> [!tip] Completar dentro de las 24 hs Cambiá el `estado` en el frontmatter a `🟢 revisado` cuando termines esto.

**¿Lo que anotaste tiene sentido?** (sí / no / parcialmente)  
**¿Qué necesitás profundizar?**

**Concepto a promover a [[06-conocimiento]]:**  
→

---

_Nota creada con `plantilla_clase.md` el <% tp.date.now("YYYY-MM-DD [a las] HH:mm") %>_