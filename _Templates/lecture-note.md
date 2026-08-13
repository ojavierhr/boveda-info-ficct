<%*
  // =============================================================
  // DETECCIÓN DEL SLUG DE LA MATERIA
  // =============================================================
  let currentFolder = tp.file.folder(true);
  let parts = currentFolder.split('/');
  let slug = null;
  // Buscar "Lectures" en la ruta y tomar el siguiente segmento
  let idxLectures = parts.indexOf('Lectures');
  if (idxLectures !== -1 && parts.length > idxLectures + 1) {
    slug = parts[idxLectures + 1];
  }
  // Si no se encontró, pedir manualmente (con sugerencias)
  if (!slug) {
    let lecturesPath = '01_Notes/Lectures';
    let possibleSlugs = [];
    try {
      let lecturesFolder = app.vault.getAbstractFileByPath(lecturesPath);
      if (lecturesFolder && lecturesFolder.children) {
        possibleSlugs = lecturesFolder.children
          .filter(f => f.children) // solo carpetas
          .map(f => f.name);
      }
    } catch(e) {}
    
    if (possibleSlugs.length > 0) {
      slug = await tp.system.suggester(possibleSlugs, possibleSlugs, false, "Elige la materia (slug)");
    } else {
      slug = await tp.system.prompt("Materia (slug) - no se encontraron carpetas en Lectures");
    }
    if (!slug) {
      new Notice("❌ Operación cancelada: no se especificó materia.");
      return;
    }
  }
  // =============================================================
  // LECTURA DEL MOC PARA EXTRAER SEMESTRE Y DOCENTE
  // =============================================================
  let mocFolder = `03_Areas/${slug}`;
  let semestre = "";
  let docente = "";
  try {
    let folder = app.vault.getAbstractFileByPath(mocFolder);
    if (folder && folder.children) {
      let mocFile = folder.children.find(f => 
        f.extension === 'md' && f.name.toUpperCase().includes('MOC')
      );
      if (mocFile) {
        let content = await app.vault.read(mocFile);
        let frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n\s*---/);
        if (frontmatterMatch) {
          let frontmatter = frontmatterMatch[1];
          let semMatch = frontmatter.match(/semestre:\s*(.+)/);
          if (semMatch) semestre = semMatch[1].trim();
          let docMatch = frontmatter.match(/docente:\s*(.+)/);
          if (docMatch) docente = docMatch[1].trim();
        }
      }
    }
  } catch(e) {
    console.warn("Error al leer MOC:", e);
  }
  if (!semestre) {
    semestre = await tp.system.prompt("Semestre (ej: 5-2026)", "2-2026");
    if (!semestre) semestre = "desconocido";
  }
  if (!docente) {
    docente = await tp.system.prompt("Docente (opcional)", "", true);
    if (!docente) docente = "No especificado";
  }
  // =============================================================
  // GENERACIÓN DEL TÍTULO Y RUTA DESTINO
  // =============================================================
  let fecha = tp.date.now("YYYY-MM-DD");
  let temaRaw = await tp.system.prompt("Tema central de la clase");
  
  let temaSlug = "";
  if (temaRaw && temaRaw.trim().length > 0) {
    temaSlug = temaRaw.trim()
      .replace(/[^a-zA-Z0-9áéíóúüñÁÉÍÓÚÜÑ\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .toLowerCase()
      .slice(0, 60);
  } else {
    temaSlug = "sin-tema";
  }
  
  let titulo = `clase-${fecha}-${temaSlug}`;
  let destino = `01_Notes/Lectures/${slug}/${titulo}.md`;
  // =============================================================
  // CREAR LA CARPETA SI NO EXISTE
  // =============================================================
  let carpetaDestino = `01_Notes/Lectures/${slug}`;
  let folder = app.vault.getAbstractFileByPath(carpetaDestino);
  if (!folder) {
    await app.vault.createFolder(carpetaDestino);
    new Notice(`📁 Carpeta creada: ${carpetaDestino}`);
  }
  // =============================================================
  // MOVER LA NOTA A SU UBICACIÓN CORRECTA
  // =============================================================
  let file = tp.file.find_tfile(tp.file.title);
  if (file) {
    let existing = app.vault.getAbstractFileByPath(destino);
    if (existing) {
      new Notice(`⚠️ Ya existe una nota en ${destino}. No se moverá.`);
    } else {
      await app.vault.rename(file, destino);
      new Notice(`✅ Nota movida a: ${destino}`);
    }
  } else {
    new Notice("❌ No se pudo encontrar el archivo para mover.");
  }
  // Guardar variables para el frontmatter
  let tema = temaRaw || "Sin tema definido";
  let sanitizedSlug = slug.replace(/\s+/g, '_');
%>---
tipo: clase
materia: <% slug %>
semestre: <% semestre %>
fecha: <% fecha %>
docente: <% docente %>
estado: 🟡 sin-revisar
tags: [clase, <% slug %>]

---

%% ↑↑↑↑↑↑↑↑↑↑↑↑
No borrar ni renombrar estos campos de arriba. Son meta-datos que se usan para algunas configuraciones no están pensados tanto para la lectura.
Los campos que sí se pueden editar son:
- estado: 🟡 sin-revisar → 🟢 procesada (cuando completes preguntas + resumen + conceptos)
- tags: agregar etiquetas adicionales si quieres
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

- **Fecha:** `=this.fecha`
- **Materia:** `=this.materia`
- **Docente:** `=this.docente`
- **Tema central:** <% tema %>

---

## 📝 Notas de Clase

%% 
ZONA DE CAPTURA
Durante la clase, escribís aquí todo lo que el docente dice. No te preocupes por la estructura. Capturá todo sin filtrar.
Podés usar: viñetas, código, tablas, lo que sea más rápido.
%%

---

## ❓ Preguntas y Palabras Clave

%% 
ZONA DE ACTIVE RECALL
Completar DESPUÉS de clase, SIN mirar las notas de arriba.
El objetivo es intentar recordar los conceptos clave por tu cuenta.
Si no podés responder una pregunta → ahí está tu laguna de conocimiento.
Ejemplo: 
| ¿Qué es el teorema de Bayes? | Fórmula para actualizar probabilidades con evidencia |
%%

| Pregunta / Keyword | Respuesta corta |
|--------------------|-----------------|
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
Podés escribir el concepto y luego crear el enlace con [[ ]].
%%

- [ ] [[posible-concepto-a-profundizar]]

---

## ✅ Tareas de la clase

%% 
Anotá aquí las tareas entregables, lecturas, ejercicios o cualquier acción que surja de la clase.
Usá el formato estándar de tareas:
- [ ] Descripción de la tarea
- [ ] 📅 YYYY-MM-DD Descripción con fecha (opcional)
Estas tareas aparecerán automáticamente en el Dashboard (bloque  de codigo tipo "tasks").
Si la tarea pertenece a un proyecto grande, mejor anotarla directamente en la nota del proyecto.
%%

- [ ] 📅 YYYY-MM-DD Descripción con fecha (opcional)

---

## 🃏 Flashcards → Anki

%% 
Cada bloque START/END se convierte en una tarjeta en Anki.
Para sincronizar: abrí Anki → en Obsidian Ctrl+P → "Obsidian to Anki: Sync"
Tipo "Básico" = una pregunta, una respuesta.
Las etiquetas se generan automáticamente con el slug sanitizado (sin espacios) y "clase".
%%

%%Flashcard simple%%
START
Básico
Anverso: ¿Pregunta sobre el tema de la clase?
Reverso: Respuesta concisa y completa.
Tags: Tags: <% sanitizedSlug %> clase
<!--ID: 1786620861340-->
END

%%Flashcard para escribir la respuesta%%
START
Básico (teclear la respuesta)
Anverso: ¿Pregunta sobre el tema de la clase?
Reverso: Respuesta concisa y completa.
Tags: Tags: <% sanitizedSlug %> clase
<!--ID: 1786620861342-->
END

---

## 🔙 Volver al índice

[[03_Areas/<% slug %>/MOC-<% slug %>|Volver al MOC de <% slug %>]]