<%*
/*
Registra cada clase en tiempo real. Su función principal no es el contenido en sí sino el frontmatter estructurado: los campos `materia`, `fecha` y `estado` son los que Dataview lee para construir los dashboards automáticos. Sin esta plantilla, los MOC de materia quedan ciegos.
*/

// Recopilar datos antes de escribir el frontmatter
let materiaSel = await tp.system.suggester([
    "calculo-1","estructuras-discretas","introduccion-informatica","fisica-1","ingles-tecnico-1",
    "calculo-2","algebra-lineal","programacion-1","fisica-2","ingles-tecnico-2","ecuaciones-diferenciales",
    "programacion-2","arquitectura-computadoras","fisica-3","administracion","probabilidad-estadistica-1",
    "metodos-numericos","estructura-datos-1","programacion-ensamblador","contabilidad","probabilidad-estadistica-2",
    "programacion-logica-funcional","estructura-datos-2","base-datos-1","lenguajes-formales","programacion-grafica",
    "investigacion-operativa-1","sistemas-informacion-1","sistemas-operativos-1","base-datos-2","compiladores",
    "topicos-avanzados-programacion","investigacion-operativa-2","inteligencia-artificial","sistemas-operativos-2",
    "redes-1","sistemas-informacion-2","sistemas-distribuidos","interaccion-hombre-computador","preparacion-evaluacion-proyectos",
    "sistemas-expertos","sistemas-informacion-geografica","redes-2","ingenieria-software-1","criptografia-seguridad",
    "taller-grado-1","ingenieria-software-2","tecnologia-web","arquitectura-software","modalidad-titulacion-licenciatura"
], [
    "calculo-1","estructuras-discretas","introduccion-informatica","fisica-1","ingles-tecnico-1",
    "calculo-2","algebra-lineal","programacion-1","fisica-2","ingles-tecnico-2","ecuaciones-diferenciales",
    "programacion-2","arquitectura-computadoras","fisica-3","administracion","probabilidad-estadistica-1",
    "metodos-numericos","estructura-datos-1","programacion-ensamblador","contabilidad","probabilidad-estadistica-2",
    "programacion-logica-funcional","estructura-datos-2","base-datos-1","lenguajes-formales","programacion-grafica",
    "investigacion-operativa-1","sistemas-informacion-1","sistemas-operativos-1","base-datos-2","compiladores",
    "topicos-avanzados-programacion","investigacion-operativa-2","inteligencia-artificial","sistemas-operativos-2",
    "redes-1","sistemas-informacion-2","sistemas-distribuidos","interaccion-hombre-computador","preparacion-evaluacion-proyectos",
    "sistemas-expertos","sistemas-informacion-geografica","redes-2","ingenieria-software-1","criptografia-seguridad",
    "taller-grado-1","ingenieria-software-2","tecnologia-web","arquitectura-software","modalidad-titulacion-licenciatura"
]);

// También podrías pedir el docente aquí si lo deseas
let docente = await tp.system.prompt("Nombre del docente (opcional)", "");
_%>
---
fecha: <% tp.date.now("YYYY-MM-DD") %>
dia: <% tp.date.now("dddd", 0, "es") %>
materia: <% materiaSel %>
tipo: clase
semana: <% tp.date.now("W") %>
estado: "🟡 sin-revisar"
tags: [clase, <% materiaSel %>]
---
# <% tp.date.now("YYYY-MM-DD") %> — {{TEMA DE LA CLASE}}

> [!info] Metadatos
> **Materia:** `= this.materia`  
> **Docente:** <% docente %>  
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

1. 
2. 
3. 

---

## 🔗 Conexiones con otras notas

_Vincula aquí conceptos que ya conocés o que aparecen en otras materias_

- 

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

> [!tip] Completar dentro de las 24 hs
> Cambiá el `estado` en el frontmatter a `🟢 revisado` cuando termines esto.

**¿Lo que anotaste tiene sentido?** (sí / no / parcialmente)  
**¿Qué necesitás profundizar?**  

**Concepto a promover a [[06-conocimiento]]:**  
→ 

---
_Nota creada con `plantilla_clase.md` el <% tp.date.now("YYYY-MM-DD [a las] HH:mm") %>_