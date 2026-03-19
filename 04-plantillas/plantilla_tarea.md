---
# 🎯 PLANTILLA PARA CREAR TAREAS (con Templater puro)
# ===================================================
# Esta versión usa un pequeño script al inicio para pedir los datos.
# No te asustes, el script solo se ejecuta una vez al crear la nota.
tipo: tarea
proyecto: "{{proyecto}}"
fase: "{{fase}}"
asignado: "{{asignado}}"
fecha-limite: "{{fechaLimite}}"
prioridad: "{{prioridad}}"
estado: pendiente
---
# ✅ {{title}} — ¡a por ella

<%*
// --- Este es el bloque de código de Templater que pedirá los datos ---
// Se ejecuta justo después de crear el archivo y ANTES de mostrar el contenido.
// 1. Pedimos los valores uno por uno
let proyecto = await tp.system.prompt("¿A qué proyecto pertenece? (ej. proy-01, o déjalo vacío)", "");
let fase = await tp.system.prompt("¿En qué fase del proyecto va? (ej. Fase 1)", "");
let asignado = await tp.system.prompt("¿Quién se encarga? (ej. @javier)", "");
let fechaLimite = tp.date.now("YYYY-MM-DD"); // Fecha de hoy por defecto, se puede cambiar
let prioridad = await tp.system.suggester(["⏫ Urgente", "🔼 Alta", "🔽 Media", "⏬ Baja"], ["⏫", "🔼", "🔽", "⏬"], true, "¿Qué prioridad tiene?");
// 2. Ahora reemplazamos los placeholders del frontmatter ({{proyecto}}, etc.)
// tp.file.content tiene todo el contenido de la plantilla (incluyendo el frontmatter de arriba)
let contenidoModificado = tp.file.content
    .replace("{{proyecto}}", proyecto)
    .replace("{{fase}}", fase)
    .replace("{{asignado}}", asignado)
    .replace("{{fechaLimite}}", fechaLimite)
    .replace("{{prioridad}}", prioridad);
// 3. Sobrescribimos el contenido del archivo con los valores reemplazados
await app.vault.modify(tp.file.find_tfile(tp.file.title), contenidoModificado);
// 4. Opcional: mover el archivo a una carpeta específica basada en el proyecto
if (proyecto) {
    // Busca la carpeta del proyecto. Esto es más complejo, lo dejamos para después.
    // Por ahora, solo te avisamos.
    new Notice("Tarea creada. Recuerda moverla a la carpeta de su proyecto.");
}
-%>

## 📋 Descripción de la tarea

- [ ] **{{title}}** <% prioridad %> 📅 <% fechaLimite %> #<% proyecto %>/<% fase %>
  - [ ] Primera subtarea
  - [ ] Segunda subtarea

> ✍️ **Ejemplo:**
>
> - [ ] Implementar módulo de autenticación @javier 📅 2026-04-10 ⏫ #proy-01/fase-1
>   - [ ] Diseñar base de datos
>   - [ ] Codificar endpoints

---

## 🆘 ¡No se han sustituido los prompts

Si ves algo como `{{prompt:...}}` en el texto de arriba, significa que **Templater no se ha ejecutado**. Sigue estos pasos:

1. **Verifica que Templater está instalado y activado** (Ajustes → Plugins comunitarios).
2. **En QuickAdd**, edita la macro "Nueva tarea":
   - Asegúrate de que la acción sea de tipo **"Template"** y que la plantilla seleccionada es esta.
   - **Marca la casilla "Enable Templater"** (es crucial).
3. **Prueba a crear la tarea de nuevo**. Si sigue sin funcionar, reinicia Obsidian.
4. Si el problema persiste, puedes **escribir los datos manualmente** en el frontmatter (arriba) y borrar los `{{...}}`. La tarea seguirá funcionando.

---

## 🧠 Guía rápida de símbolos Tasks

| Símbolo          | Significado                       |
|---------         |---------------------------------  |
| `⏫`             | Prioridad urgente                 |
| `🔼`             | Prioridad alta                    |
| `🔽`             | Prioridad media                   |
| `⏬`             | Prioridad baja                    |
| `📅 YYYY-MM-DD`  | Fecha límite                      |
| `@persona`       | Persona asignada                  |
| `#proyecto/fase` | Etiqueta para filtrar             |

---

> [!NOTE] **¿Y el título?**
> El título `{{title}}` se ha generado a partir del nombre del archivo. Si no te gusta, puedes cambiarlo manualmente.

¡A tachar tareas se ha dicho! 🚀
