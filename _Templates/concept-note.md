<%*
  // =============================================================
  // NOMBRE DEL CONCEPTO (sanitizado)
  // =============================================================
  let rawTitle = await tp.system.prompt("Nombre del concepto (ej: mrp-material-requirements-planning)");
  if (!rawTitle) {
    new Notice("❌ Operación cancelada: no se especificó nombre.");
    return;
  }
  let titulo = rawTitle.trim()
    .toLowerCase()
    .replace(/[^a-zA-Z0-9áéíóúüñÁÉÍÓÚÜÑ\s-]/g, '') // eliminar caracteres especiales
    .replace(/\s+/g, '-')                           // espacios a guiones
    .replace(/-+/g, '-')                            // evitar múltiples guiones
    .slice(0, 60);                                  // limitar longitud
  if (!titulo) {
    titulo = "concepto-sin-nombre";
  }

  // =============================================================
  // DETECCIÓN DEL SLUG DE LA MATERIA
  // =============================================================
  let currentFolder = tp.file.folder(true);
  let parts = currentFolder.split('/');
  let slug = null;

  let idxConcepts = parts.indexOf('Concepts');
  if (idxConcepts !== -1 && parts.length > idxConcepts + 1) {
    slug = parts[idxConcepts + 1];
  }

  if (!slug) {
    let conceptsPath = '01_Notes/Concepts';
    let possibleSlugs = [];
    try {
      let conceptsFolder = app.vault.getAbstractFileByPath(conceptsPath);
      if (conceptsFolder && conceptsFolder.children) {
        possibleSlugs = conceptsFolder.children
          .filter(f => f.children)
          .map(f => f.name);
      }
    } catch(e) {}
    
    if (possibleSlugs.length > 0) {
      slug = await tp.system.suggester(possibleSlugs, possibleSlugs, false, "Elige la materia (slug)");
    } else {
      slug = await tp.system.prompt("Materia (slug) - no se encontraron carpetas en Concepts");
    }
    if (!slug) {
      new Notice("❌ Operación cancelada: no se especificó materia.");
      return;
    }
  }

  // =============================================================
  // LECTURA DEL MOC PARA EXTRAER SEMESTRE (y docente si se necesita)
  // =============================================================
  let mocFolder = `03_Areas/${slug}`;
  let semestre = "";

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

  // =============================================================
  // DIFICULTAD
  // =============================================================
  let dificultad = await tp.system.suggester(
    ["🟢 baja", "🟡 media", "🔴 alta"],
    ["🟢 baja", "🟡 media", "🔴 alta"],
    false,
    "Dificultad del concepto"
  );
  if (!dificultad) dificultad = "🟢 baja";

  // =============================================================
  // FECHA DE CREACIÓN
  // =============================================================
  let fecha = tp.date.now("YYYY-MM-DD");

  // =============================================================
  // RUTA DESTINO Y MOVIMIENTO DEL ARCHIVO
  // =============================================================
  let destinoCarpeta = `01_Notes/Concepts/${slug}`;
  let destinoArchivo = `${destinoCarpeta}/${titulo}.md`;

  // Crear carpeta si no existe
  let folder = app.vault.getAbstractFileByPath(destinoCarpeta);
  if (!folder) {
    await app.vault.createFolder(destinoCarpeta);
    new Notice(`📁 Carpeta creada: ${destinoCarpeta}`);
  }

  // Mover el archivo
  let file = tp.file.find_tfile(tp.file.title);
  if (file) {
    let existing = app.vault.getAbstractFileByPath(destinoArchivo);
    if (existing) {
      new Notice(`⚠️ Ya existe una nota en ${destinoArchivo}. No se moverá.`);
    } else {
      await app.vault.rename(file, destinoArchivo);
      new Notice(`✅ Nota movida a: ${destinoArchivo}`);
    }
  } else {
    new Notice("❌ No se pudo encontrar el archivo para mover.");
  }

  // Sanitizar slug para etiquetas Anki
  let sanitizedSlug = slug.replace(/\s+/g, '_');
%>---
tipo: concepto
materia: <% slug %>
semestre: <% semestre %>
fecha-creacion: <% fecha %>
dificultad: <% dificultad %>
estado: 🔵 borrador
tags: [concepto, <% slug %>]

---

%% ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
No borrar ni renombrar estos campos de arriba. Son meta-datos que se usan para algunas configuraciones no están pensados tanto para la lectura.

Los campos que sí se pueden editar son:
- dificultad: 🟢 baja | 🟡 media | 🔴 alta
- estado: 🔵 borrador → 🟢 revisada cuando esté completa
- tags: agregar etiquetas adicionales si quieres
%%

%% ============================================================
PLANTILLA: NOTA ATÓMICA DE CONCEPTO (Zettelkasten + Feynman)

CUÁNDO USARLA: Cada vez que procesás una clase y encontrás un concepto que merece su propio archivo.

DÓNDE GUARDARLA: 01_Notes/Concepts/[slug-materia]/

NOMBRE DE ARCHIVO RECOMENDADO:
 nombre-del-concepto (en minúsculas con guiones)
 ej: mrp-material-requirements-planning

REGLA FUNDAMENTAL: UNA nota = UNA sola idea. Si la nota toca dos conceptos → partila en dos notas separadas.

FLUJO DE USO (Método Feynman):

 1. Definición simple → como si se lo explicaras a alguien que no sabe nada
 2. Explicación técnica → la versión precisa y completa
 3. Ejemplo concreto → preferiblemente del parcial o proyecto actual
 4. Errores comunes → qué confunde a la gente con este concepto
 5. Flashcards → completar los bloques START/END y sincronizar con Anki
============================================================ %%

# <% titulo %>

## 📖 Definición simple

%% 
Explicalo como si el que lo va a leer nunca oyó hablar del tema.

- Sin tecnicismos.
- Sin siglas sin explicar.
- Una o dos oraciones máximo.
- Si no podés hacerlo simple, todavía no lo entendiste del todo (Feynman dixit).

%%

## 🧩 Explicación técnica

%% 
Ahora sí la versión completa con términos técnicos, fórmulas, estructura, etc. Podés usar tablas, listas, diagramas, bloques de código, imágenes, etc.
%%

## 🔗 Se conecta con

%% 
Links a otras notas atómicas relacionadas.
Esto es lo que convierte tus notas en una red (Zettelkasten) en vez de una lista.
Agregá todos los conceptos que se relacionen con este.
%%

- [[algun-enlace]]

## 🌍 Ejemplo concreto

%% 
Un caso real (puede ser código) sobre el concepto. Los ejemplos concretos son lo que hace que el concepto "enganche" en la memoria.
%%

```code
codigo aqui...
```

## ⚠️ Errores comunes

%% 
¿Qué confunde a la gente con este concepto?  
¿Con qué otro concepto se suele mezclar?  
¿Qué pensabas vos antes de entenderlo bien?  
%%

---

## 🃏 Flashcards → Anki

%% 
Cada bloque START/END = una tarjeta en Anki.  
Regla: al menos 2 tarjetas por concepto.

- Una para la definición
- Una para un ejemplo o diferencia con otro concepto  

Sincronizar: Anki abierto → Ctrl+P → "Obsidian to Anki: Sync"  
%% 

START
Básico
Anverso: ¿Qué es <% titulo %>?
Reverso: Completar con la definición simple
Tags: <% sanitizedSlug %> concepto
<!--ID: 1786620615492-->
END

START
Básico
Anverso: ¿Cuál es un ejemplo concreto de <% titulo %>?
Reverso: Completar con el ejemplo
Tags: <% sanitizedSlug %> concepto
<!--ID: 1786620615494-->
END

## 🔙 Volver al índice

[[03_Areas/<% slug %>/MOC-<% slug %>|Volver al MOC de <% slug %>]]