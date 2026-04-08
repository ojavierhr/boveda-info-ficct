<!-- markdownlint-disable MD041 -->
<%*
  // Obtener el slug de la materia desde la ruta actual
  // La nota está en: 01_Notes/Lectures/[slug]/...
  let currentFolder = tp.file.folder(true); // ruta completa desde la raíz
  let parts = currentFolder.split('/');
  let slug = parts[parts.indexOf('Lectures') + 1]; // nombre de la carpeta después de 'Lectures'
  
  // Si no se pudo determinar, pedir manualmente
  if (!slug) {
    slug = await tp.system.prompt("Materia (slug)");
  }
  
  // Construir ruta del MOC
  let mocPath = `03_Areas/${slug}/MOC-${slug}.md`;
  let semestre = "";
  let docente = "";
  
  // Intentar leer el MOC y extraer el frontmatter
  try {
    let file = app.vault.getAbstractFileByPath(mocPath);
    if (file) {
      let content = await app.vault.read(file);
      // Extraer frontmatter YAML (simplificado, asumiendo que empieza con --- y termina con ---)
      let frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
      if (frontmatterMatch) {
        let frontmatter = frontmatterMatch[1];
        // Buscar semestre
        let semMatch = frontmatter.match(/semestre:\s*(.+)/);
        if (semMatch) semestre = semMatch[1].trim();
        // Buscar docente (si existe)
        let docMatch = frontmatter.match(/docente:\s*(.+)/);
        if (docMatch) docente = docMatch[1].trim();
      }
    }
  } catch(e) {
    // Si falla, se dejan vacíos o se piden manualmente
  }
  
  // Si no se encontró semestre o docente, puedes pedirlos (opcional)
  if (!semestre) {
    semestre = await tp.system.prompt("Semestre (ej: 5-2026)");
  }
  if (!docente) {
    docente = await tp.system.prompt("Docente (opcional)", "", true); // true = puede omitir
  }
  
// Guardar variables para usar en el frontmatter
  let fecha = tp.date.now("YYYY-MM-DD");
  let tema = await tp.system.prompt("Tema central de la clase");
  let titulo = `clase-${fecha}-${tema.replace(/\s+/g, '-').toLowerCase()}`;
  await tp.file.rename(titulo);
%>---
tipo: clase
materia: <% slug %>
semestre: <% semestre %>
fecha: <% fecha %>
docente: <% docente %>
estado: 🟡 sin-revisar
tags: [clase]

---

%% ↑↑↑↑↑↑↑↑↑↑↑↑
No borrar ni renombrar estos campos de arriba. Son meta-datos que se usan para algunas configuraciones no están pensados tanto para la lectura.

Los campos que si se pueden editar son:
estado: 🟡 sin-revisar, 🟢 procesada (cuando completes preguntas + resumen + conceptos)
%%

%% ============================================================
PLANTILLA: NOTA DE CLASE (formato Cornell)

CUÁNDO USARLA: Al inicio de cada clase. Una nota por sesión.

DÓNDE GUARDARLA: 01_Notes/Lectures/[slug-materia]/

NOMBRE DE ARCHIVO GENERADO AUTOMÁTICAMENTE: clase-YYYY-MM-DD-tema-central

FLUJO DE USO:

 1. Durante la clase → completar solo "Notas de Clase"
 2. Post-clase → completar "Preguntas" y "Resumen" SIN mirar las notas
 3. Después → crear las notas atómicas marcadas en "Conceptos para procesar"
 4. Cambiar estado a 🟢 procesada cuando todo esté hecho
============================================================ %%

# <% titulo %>

## 📋 Información

- **Materia:** `=this.materia`
- **Semestre:** `=this.semestre`
- **Fecha:** `=this.fecha`
- **Docente:** `=this.docente`
- **Tema central:** <% tema %>

---

## 📝 Notas de Clase

%%
ZONA DE CAPTURA

Durante la clase, escribís aquí todo lo que el docente dice. No te preocupes por la estructura. Capturá todo sin filtrar.

Podés usar::

- Viñetas
- Código
- Tablas
- Lo que sea más rápido.
%%

---

## ❓ Preguntas y Palabras Clave

%%
ZONA DE ACTIVE RECALL

Completar DESPUÉS de clase, SIN mirar las notas de arriba.
El objetivo es intentar recordar los conceptos clave por tu cuenta.
Si no podés responder una pregunta → ahí está tu laguna de conocimiento.
%%

| Pregunta / Keyword | Respuesta corta |
|--------------------|-----------------|
|                    |                 |
|                    |                 |
|                    |                 |

---

## 💡 Resumen

%%
ZONA DE SÍNTESIS

Explicar con tus propias palabras de qué trató la clase. Máximo 5-8 líneas. Sin copiar de las notas de arriba.
Si no podés resumirlo, todavía no lo entendiste.
%%

---

## 🔗 Conceptos para procesar en notas atómicas

%%
Lista de conceptos de esta clase que merecen su propia nota atómica.
Una vez que creés la nota atómica, marcás el checkbox como hecho [x].
Cada [[link]] va a crear la nota cuando hagas clic en él.
%%

- [ ] [[]]
- [ ] [[]]

---

## ✅ Tareas de la clase

%%
Anotá aquí las tareas entregables, lecturas, ejercicios o cualquier acción que surja de la clase.

Usá el formato estándar de tareas:

- [ ] Descripción de la tarea
- [ ] 📅 YYYY-MM-DD Descripción con fecha (opcional)

Estas tareas aparecerán automáticamente en el Dashboard (bloque \`\`\`tasks).
Si la tarea pertenece a un proyecto grande, mejor anotarla directamente en la nota del proyecto.
%%

- [ ]

---

## 🃏 Flashcards → Anki

%%
Cada bloque START/END se convierte en una tarjeta en Anki.
Para sincronizar: abrí Anki → en Obsidian Ctrl+P → "Obsidian to Anki: Sync"
Tipo "Básico" = una pregunta, una respuesta.
%%

START
Básico
¿Pregunta sobre el tema de la clase?
Back: Respuesta concisa y completa.
Tags: <% slug %> clase
END
