---
tipo: proyecto
materia: "{{prompt: ¿De qué materia es este proyecto?}}"
nombre: "{{title}}"
estado-fase-1: ⏳ pendiente
fecha-entrega-fase-1: {{date:YYYY-MM-DD}}
integrantes: []
tags: []
---

# 🚀 {{title}} — ¡El proyecto arranca

> [!TIP] **¡Hola, project manager!**  
> Esta plantilla es el **cuartel general** de tu proyecto. Aquí vivirán la descripción, los objetivos, los entregables y el plan de fases. Todo lo que necesitas para no perder el norte. 🌟

---

## 📋 ¿De qué va esto? (Descripción)

*Explica con tus palabras: ¿qué problema resuelve? ¿qué vas a construir? ¿por qué mola?*

-
-
-

> ✍️ **Ejemplo:**  
> *"Este proyecto consiste en desarrollar una aplicación web para gestionar tareas del hogar. Los usuarios podrán crear listas, asignar responsables y recibir recordatorios."*

---

## 🎯 ¿Qué queremos lograr? (Objetivos)

*Lista los objetivos principales. Empieza con verbos de acción: Implementar, Diseñar, Evaluar...*

- [ ]
- [ ]
- [ ]

> ✍️ **Ejemplo:**  
>
> - [ ] Implementar el backend con Node.js y Express.  
> - [ ] Diseñar una interfaz responsive con React.  
> - [ ] Evaluar la usabilidad con 10 usuarios reales.

---

## 📦 ¿Qué hay que entregar? (Entregables)

*Marca con checkbox todo lo que el profesor o el cliente espera recibir al final.*

- [ ]
- [ ]
- [ ]

> ✍️ **Ejemplo:**  
>
> - [ ] Código fuente en repositorio GitHub.  
> - [ ] Documentación técnica (manual de instalación y uso).  
> - [ ] Presentación final en PowerPoint (o Beamer, si eres de LaTeX).

---

## 📊 ¿Cómo lo organizamos? (Fases)

*Aquí dividimos el proyecto en etapas. Cada fase puede tener sus propias tareas (que luego detallarás en el archivo de tareas).*

### Fase 1: [Nombre de la fase, ej. "Planificación y diseño"]

- [ ]
- [ ]
- [ ]

> ⏰ **Fecha de entrega:** {{fecha-entrega-fase-1}}  
> *(Este campo se rellena automáticamente con la fecha que pusiste arriba, pero puedes cambiarlo manualmente si se mueve la entrega).*

### Fase 2: [Nombre de la fase, ej. "Desarrollo"]

- [ ]
- [ ]
- [ ]

> 🚧 **Consejo:** Si tienes más de 2 fases, ¡copia y pega! No hay límite. Eso sí, acuérdate de añadir luego los campos en el frontmatter si quieres que aparezcan en los dashboards (ej. `estado-fase-2`, `fecha-entrega-fase-2`).

---

## 👥 Equipo del proyecto

**Integrantes:** {{integradores}} *(si no los pusiste al crear, edítalos aquí)*

-
-
-

---

> [!NOTE] **¿Y ahora qué?**  
>
> - Si necesitas **desglosar las tareas** de cada fase, usa el archivo `proy-XX_tareas.md` que se creó junto con esta nota. Allí podrás usar el plugin Tasks con fechas, prioridades y asignados.  
> - Para ver el **tablero kanban**, abre `proy-XX_kanban.md`. Las tareas se moverán solas si cambias su estado.  
> - Este proyecto ya tiene una **etiqueta** `#proy-XX` (donde XX es el número). Si escribes en tu diario cosas relacionadas, pon esa etiqueta y luego podrás filtrarlas.

---

> [!TIP] **¡A darle caña!**  
> Recuerda actualizar el estado de las fases en el frontmatter (arriba del todo) a medida que avanzas. Por ejemplo, cambia `estado-fase-1: ⏳ pendiente` por `✅ entregado` cuando termines. ¡Así los dashboards lo reflejarán automáticamente!
