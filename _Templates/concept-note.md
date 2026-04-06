<%*
  // 1. Pedir el nombre del concepto (slug)
  let titulo = await tp.system.prompt("Nombre del concepto (ej: mrp-material-requirements-planning)");
  if (!titulo) return;
  // Limpiar: minúsculas, reemplazar espacios por guiones, eliminar caracteres extraños
  titulo = titulo.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  await tp.file.rename(titulo);
  
  // 2. Obtener el slug de la materia desde la ruta actual (carpeta Concepts)
  let currentFolder = tp.file.folder(true);
  let parts = currentFolder.split('/');
  let slug = parts[parts.indexOf('Concepts') + 1];
  if (!slug) {
    slug = await tp.system.prompt("Materia (slug)");
  }
  
  // 3. Intentar leer el MOC para obtener semestre (opcional)
  let mocPath = `03_Areas/${slug}/MOC-${slug}.md`;
  let semestre = "";
  try {
    let file = app.vault.getAbstractFileByPath(mocPath);
    if (file) {
      let content = await app.vault.read(file);
      let frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
      if (frontmatterMatch) {
        let semMatch = frontmatterMatch[1].match(/semestre:\s*(.+)/);
        if (semMatch) semestre = semMatch[1].trim();
      }
    }
  } catch(e) {}
  
  if (!semestre) {
    semestre = await tp.system.prompt("Semestre (opcional)", "", true);
  }
  
  // 4. Fecha y dificultad
  let fecha = tp.date.now("YYYY-MM-DD");
  let dificultad = await tp.system.prompt("Dificultad (🟢 baja | 🟡 media | 🔴 alta)", "🟢 baja");
%>---
tipo: concepto
materia: <% slug %>
semestre: <% semestre %>
fecha-creacion: <% fecha %>
dificultad: <% dificultad %>
estado: 🔵 borrador
tags: [concepto]
---
%% ↑↑ Slug de la materia. Se obtiene automáticamente de la carpeta.
   No borrar ni renombrar estos campos.
   Dificultad: 🟢 baja | 🟡 media | 🔴 alta
   Estado: 🔵 borrador → 🟢 revisada cuando esté completa %%

%% ============================================================
PLANTILLA: NOTA ATÓMICA DE CONCEPTO (Zettelkasten + Feynman)

CUÁNDO USARLA: Cada vez que procesás una clase y encontrás un concepto que merece su propio archivo.
DÓNDE GUARDARLA: 01_Notes/Concepts/[slug-materia]/

NOMBRE DE ARCHIVO RECOMENDADO:
  nombre-del-concepto (en minúsculas con guiones)
  ej: mrp-material-requirements-planning

REGLA FUNDAMENTAL:
  UNA nota = UNA sola idea. Si la nota toca dos conceptos → partila en dos notas separadas.

FLUJO DE USO (Método Feynman):
  1. Definición simple → como si se lo explicaras a alguien que no sabe nada
  2. Explicación técnica → la versión precisa y completa
  3. Ejemplo concreto → preferiblemente del parcial o proyecto actual
  4. Errores comunes → qué confunde a la gente con este concepto
  5. Flashcards → completar los bloques START/END y sincronizar con Anki
============================================================ %%

# <% titulo %>

## 📖 Definición simple
%% Explicalo como si el que lo va a leer nunca oyó hablar del tema.
   Sin tecnicismos. Sin siglas sin explicar. Una o dos oraciones máximo.
   Si no podés hacerlo simple, todavía no lo entendiste del todo (Feynman dixit). %%



## 🧩 Explicación técnica
%% Ahora sí la versión completa: términos técnicos, fórmulas, estructura, etc.
   Podés usar tablas, listas, diagramas ASCII o bloques de código. %%



## 🔗 Se conecta con
%% Links a otras notas atómicas relacionadas.
   Esto es lo que convierte tus notas en una red (Zettelkasten) en vez de una lista.
   Agregá todos los conceptos que se relacionen con este. %%
- [[]]

## 🌍 Ejemplo concreto
%% Un caso real, de código o del proyecto/parcial que estés haciendo.
   Los ejemplos concretos son lo que hace que el concepto "enganche" en la memoria. %%

```
(código, diagrama o descripción del ejemplo aquí)
```

## ⚠️ Errores comunes
%% ¿Qué confunde a la gente con este concepto?
   ¿Con qué otro concepto se suele mezclar?
   ¿Qué pensabas vos antes de entenderlo bien? %%

---

## 🃏 Flashcards → Anki

%% Cada bloque START/END = una tarjeta en Anki.
   Regla: al menos 2 tarjetas por concepto.
     - Una para la definición
     - Una para un ejemplo o diferencia con otro concepto
   Sincronizar: Anki abierto → Ctrl+P → "Obsidian to Anki: Sync" %%
START
Básico
¿Qué es <% titulo %>?
Back: (completar con la definición simple)
Tags: <% slug %> concepto
END

START
Básico
¿Cuál es un ejemplo concreto de <% titulo %>?
Back: (completar con el ejemplo)
Tags: <% slug %> concepto ejemplo
END