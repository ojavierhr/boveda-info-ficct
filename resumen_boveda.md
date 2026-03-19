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
// OBTENER TODAS LAS CARPETAS (EXCLUYENDO RAÍZ Y EXCLUIDAS)
// ============================================
const allFiles = dv.app.vault.getAllLoadedFiles();
const folders = allFiles.filter(f => 
  f.children &&                // es una carpeta
  f.path !== '' &&              // no es la raíz
  f.name !== '' &&              // tiene nombre
  !excludeFolders.some(ex => f.path.includes(ex))
);
// Ordenar alfabéticamente por ruta para mantener la jerarquía
folders.sort((a, b) => a.path.localeCompare(b.path));
// ============================================
// FUNCIÓN: ARCHIVOS DENTRO DE UNA CARPETA (SIN RECURSIÓN)
// ============================================
function getFilesDirectlyInFolder(folderPath) {
  return dv.pages()
    .where(p => {
      // El archivo debe empezar con la ruta de la carpeta
      if (!p.file.path.startsWith(folderPath)) return false;
      // No debe ser la propia carpeta (no hay archivo con ese path)
      if (p.file.path === folderPath) return false;
      // La parte restante no debe contener más barras (archivo directo)
      const relativePath = p.file.path.slice(folderPath.length);
      return !relativePath.includes('/');
    })
    .map(p => p.file.path)
    .sort();
}
// ============================================
// CONSTRUIR LA LISTA JERÁRQUICA
// ============================================
let output = "";
// 1. Archivos sueltos en la raíz (si los hay)
const rootFiles = dv.pages()
  .where(p => !p.file.path.includes('/') && p.file.path.endsWith('.md'))
  .map(p => p.file.path)
  .sort();
if (rootFiles.length > 0) {
  rootFiles.forEach(filePath => {
    const fileName = filePath.split('/').pop();
    output += '  - ' + `[[${filePath}|📄 ${fileName}]]\n`;
  });
  output += "\n";
}
// 2. Carpetas (y sus archivos directos)
folders.forEach(f => {
  const depth = f.path.split('/').length; // 1 = raíz (no existe), 2 = primer nivel, etc.
  if (depth > maxDepth) return;
  const name = f.name;
  const indent = '  '.repeat(depth - 1); // Sin sangría para primer nivel
  // Mostrar la carpeta
  output += indent + '- ' + `📁 **${name}**\n`;
  // Mostrar archivos directamente dentro de esta carpeta (si está activado)
  if (showFiles && depth <= maxDepth) {
    const files = getFilesDirectlyInFolder(f.path);
    files.forEach(filePath => {
      const fileName = filePath.split('/').pop();
      if (fileExtensions.some(ext => fileName.endsWith(ext))) {
        output += indent + '  ' + '- ' + `[[${filePath}|📄 ${fileName}]]\n`;
      }
    });
  }
});
// Mostrar el resultado (si hay algo)
dv.paragraph(output || "*No hay elementos visibles*");
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
