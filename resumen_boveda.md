---
tags: [dashboard, meta]
---
# 📊 ¡Bienvenido a tu Panel de Control Mágico

**Última actualización de este panel:** `= dateformat(date(today), "yyyy-MM-dd")`  
*(No te preocupes, esta fecha se cambia sola cada día)*

> [!info] **¿Qué es esto?**
> Imagina que este es el **tablero de mandos de tu nave espacial** 🚀. Aquí verás, de un vistazo, todo lo que está pasando en tu bóveda: las clases que te faltan revisar, los proyectos que tienes entre manos, las tareas que vencen pronto... ¡y todo se actualiza solito! (Gracias a los poderes de Dataview y Tasks).

---

<!-- El mapa del tesoro  -->
## 🗺️ ¿Cómo está organizada tu bóveda?

Aquí abajo tienes un **mapa interactivo** de todas tus carpetas y archivos. Puedes hacer clic en cualquier archivo para abrirlo (carpetas no). Está generado automágicamente con un pequeño código

<!-- 
NO LO TOQUES SI NO SABES

¿Quieres cambiar algo?

Si eres atrevido, arriba del todo, donde pone:

// 🎮 PANEL DE CONTROL DEL MAPA (para valientes)

Puedes jugar con las opciones. Por ejemplo, si no quieres ver los archivos, cambia `showFiles` a `false`. ¡Pero hazlo con cuidado!
-->

```dataviewjs
// ============================================
// 🎮 PANEL DE CONTROL DEL MAPA (para valientes)
// ============================================
// ¿Quieres cambiar cómo se ve el mapa? 
// Aquí tienes unas palancas para jugar:
// 1. Carpetas que NO quieres que aparezcan (como el sótano de los archivos perdidos)
const excludeFolders = [".obsidian", ".git", ".trash", "node_modules", "scripts"];
// 2. ¿Quieres ver los archivos .md dentro de las carpetas? (true = sí, false = solo carpetas)
const showFiles = true;
// 3. ¿Hasta qué profundidad quieres explorar? (1 = solo la raíz, 2 = primer nivel...)
const maxDepth = 99; // 99 significa "enséñame todo, no me canso"
// 4. ¿Qué tipo de archivos quieres mostrar? (por defecto solo .md, pero puedes añadir .pdf, .png...)
const fileExtensions = [".md"];
// ============================================

// Obtener todos los archivos y carpetas de la bóveda
const all = dv.app.vault.getAllLoadedFiles();

// Separar carpetas y archivos
const folders = all.filter(f => f.children && f.path !== ''); // carpetas (excluyendo la raíz)
const files = all.filter(f => !f.children && f.path !== '');   // archivos

// Construir un mapa rápido: carpeta padre -> lista de archivos
const filesByParent = new Map();
files.forEach(file => {
    const parentPath = file.parent?.path || '';
    if (!filesByParent.has(parentPath)) filesByParent.set(parentPath, []);
    filesByParent.get(parentPath).push(file);
});

// Construir un mapa rápido: carpeta padre -> lista de subcarpetas
const subfoldersByParent = new Map();
folders.forEach(folder => {
    const parentPath = folder.parent?.path || '';
    if (!subfoldersByParent.has(parentPath)) subfoldersByParent.set(parentPath, []);
    subfoldersByParent.get(parentPath).push(folder);
});

// Ordenar alfabéticamente los elementos dentro de cada mapa
for (let [_, list] of filesByParent) list.sort((a, b) => a.name.localeCompare(b.name));
for (let [_, list] of subfoldersByParent) list.sort((a, b) => a.name.localeCompare(b.name));

// Función recursiva para imprimir una carpeta y todo su contenido
function renderFolder(folderPath, indent, depth) {
    if (depth > maxDepth) return ""; // Profundidad máxima alcanzada

    // Obtener subcarpetas y archivos de esta carpeta
    const subfolders = subfoldersByParent.get(folderPath) || [];
    const childFiles = filesByParent.get(folderPath) || [];

    // Construir la salida para esta carpeta
    let output = "";

    // Primero imprimir los archivos (si showFiles es true)
    if (showFiles) {
        for (const file of childFiles) {
            const ext = '.' + file.extension;
            if (fileExtensions.includes(ext)) {
                const link = `[[${file.path}|📄 ${file.name}]]`;
                output += `${indent}  - ${link}\n`;
            }
        }
    }

    // Luego imprimir las subcarpetas recursivamente
    for (const sub of subfolders) {
        // Verificar si la subcarpeta debe ser excluida
        if (excludeFolders.some(ex => sub.path.includes(ex))) continue;
        // Mostrar la carpeta con su nombre
        const folderLink = `📁 ${sub.name}`;
        output += `${indent}- ${folderLink}\n`;
        // Llamar recursivamente para mostrar su contenido, aumentando la indentación y profundidad
        output += renderFolder(sub.path, indent + '  ', depth + 1);
    }

    return output;
}

// ============================================
// CONSTRUIR LA LISTA JERÁRQUICA DESDE LA RAÍZ
// ============================================
let finalOutput = "";

// 1. Archivos sueltos en la raíz (si los hay)
const rootFiles = files.filter(f => f.parent?.path === '');
if (rootFiles.length > 0) {
    rootFiles.sort((a, b) => a.name.localeCompare(b.name));
    for (const file of rootFiles) {
        const ext = '.' + file.extension;
        if (fileExtensions.includes(ext)) {
            finalOutput += `  - [[${file.path}|📄 ${file.name}]]\n`;
        }
    }
    finalOutput += "\n";
}

// 2. Carpetas de primer nivel (directamente en la raíz)
const rootFolders = subfoldersByParent.get('') || [];
rootFolders.sort((a, b) => a.name.localeCompare(b.name));

for (const folder of rootFolders) {
    // Excluir carpetas no deseadas
    if (excludeFolders.some(ex => folder.path.includes(ex))) continue;
    finalOutput += `- 📁 ${folder.name}\n`;
    finalOutput += renderFolder(folder.path, '  ', 1);
}

// Mostrar el resultado (si hay algo)
dv.paragraph(finalOutput || "*No hay elementos visibles*");
```

---

## 📅 Clases pendientes de revisar (las que te deben un vistazo)

Aquí aparecen las clases de los últimos 15 días que aún tienen el estado **🟡 sin-revisar**. Cuando las revises y les cambies el estado a **🟢 revisado**, desaparecerán de esta lista. ¡Así de fácil!

```dataview
TABLE fecha AS Fecha, materia AS Materia, file.link AS Nota
FROM "01-materias"
WHERE tipo = "clase" AND estado = "🟡 sin-revisar" AND fecha >= date(today) - dur(15 days)
SORT fecha DESC
LIMIT 10
```

> [!info] **¿Ves algo raro?**  
> Si no aparece ninguna clase, ¡felicidades! Estás al día 🎉. Si crees que debería salir alguna y no sale, revisa que la nota tenga bien puesto el campo `estado: 🟡 sin-revisar` en su cabecera (el trocito de código de arriba).

---

## 🚀 Proyectos activos (los que están en marcha)

Estos son los proyectos que aún no han entregado la Fase 1 (o sea, que siguen vivos). Te mostramos la materia a la que pertenecen y cuándo hay que entregar esa primera fase.

```dataview
TABLE materia AS Materia, estado-fase-1 AS "Estado Fase 1", fecha-entrega-fase-1 AS "Entrega Fase 1"
FROM "01-materias" OR "02-proyectos"
WHERE tipo = "proyecto" AND estado-fase-1 != "✅ entregado"
SORT fecha-entrega-fase-1 ASC
```

> [!TIP] **¿Quieres ver más fases?**  
> Puedes añadir más columnas si en tus proyectos guardas también `estado-fase-2`, `fecha-entrega-fase-2`, etc. Solo tienes que copiar la línea y cambiar el número.

---

## ✅ Tareas que vencen en los próximos 7 días

Aquí tienes tus tareas más urgentes, ordenadas por fecha de vencimiento. Las escribe el plugin **Tasks**, así que asegúrate de que en tus notas las tareas tengan el formato correcto (con `📅` y todo eso).

```tasks
not done
due before in 7 days
group by due
short mode
```

> [!question] **¿No aparece ninguna tarea?**  
> Puede que no tengas tareas con fecha próxima, o que no hayas usado bien la sintaxis. Recuerda: `- [ ] Hacer algo 📅 2026-03-25`. Si quieres ver todas las tareas sin filtrar, quita la línea `due before in 7 days`.

---

## 🧠 Las últimas joyas de tu conocimiento permanente

Cada vez que dominas un concepto y lo pasas a `06-conocimiento/`, aquí verás las últimas 10 notas que has tocado en esa carpeta. ¡Tu cerebro en expansión!

```dataview
TABLE file.mtime AS "Última modificación"
FROM "06-conocimiento"
SORT file.mtime DESC
LIMIT 10
```

> [!TIP] **¿Quieres ordenarlas por fecha de creación?**  
> Cambia `file.mtime` (última modificación) por `file.ctime` (fecha de creación).

---

## 🔴 Conceptos que se te atragantan (dificultad alta)

Si en tus notas de `temas/` o `conocimiento/` usas el campo `dificultad: 🔴 alta`, aquí los verás todos juntos. Así sabes por dónde empezar a repasar.

```dataview
LIST
FROM "01-materias" OR "06-conocimiento"
WHERE dificultad = "🔴 alta"
SORT file.name ASC
```

> [!warning] **Importante**  
> Recuerda poner el campo `dificultad` en el frontmatter de tus notas. Por ejemplo:
>
> ```yaml
> ---
> dificultad: 🔴 alta
> ---
> ```

---

## 📁 Las últimas 5 clases que has creado

Solo para que veas un histórico rápido de tus últimas clases, independientemente de si están revisadas o no.

```dataview
TABLE fecha AS Fecha, materia AS Materia, estado AS Estado
FROM "01-materias"
WHERE tipo = "clase"
SORT fecha DESC
LIMIT 5
```

---

## 📔 Lo último que has escrito en tu diario

Aquí tienes las 7 entradas más recientes de `05-diario/`. Si usas el diario para llevar la bitácora de proyectos (con tags como `#proy-01`), desde aquí puedes acceder rápidamente.

```dataview
LIST
FROM "05-diario"
SORT file.name DESC
LIMIT 7
```

---

## 🧭 Atajos a los lugares más importantes

- [[readme|📘 Guía de la bóveda]] (el manual de instrucciones)

---

> [!tip] **¡Este dashboard es tuyo!**  
> Puedes añadir más secciones, quitar las que no te sirvan, cambiar los colores... Todo lo que ves aquí son solo **ejemplos**. Si quieres aprender a hacer tus propias consultas, visita la [documentación de Dataview](https://blacksmithgu.github.io/obsidian-dataview/) y la de [Tasks](https://obsidian-tasks-group.github.io/Obsidian-Tasks/). ¡Es más fácil de lo que parece!
