<%*
// Script para crear una nueva materia en Obsidian.
// Se activa a través de una "Template Choice" de QuickAdd.
// El prompt de QuickAdd (primer prompt) debe ser el nombre de la materia.

// 1. Captura el valor del prompt de QuickAdd y lo guarda como 'materia'.
let materia = tp.file.title;

// 2. Si el valor está vacío (por si acaso), se solicita de nuevo.
if (!materia || materia.trim() === "") {
    materia = await tp.system.prompt("Nombre corto de la materia (ej: calculo-1)");
    if (!materia) return;
}

// 3. Solicita el semestre.
let semestre = await tp.system.prompt("Semestre (1,2,3...)");
if (!semestre) return;

// 4. Limpia y define variables.
materia = materia.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
let nombreMOC = "MOC-" + materia;
let vault = app.vault;

// 5. Define las rutas de las carpetas.
let lecturesPath = `01_Notes/Lectures/${materia}`;
let conceptsPath = `01_Notes/Concepts/${materia}`;
let areasPath = `03_Areas/${materia}`;

// 6. Crea las carpetas de forma segura.
for (let path of [lecturesPath, conceptsPath, areasPath]) {
    if (!(await vault.adapter.exists(path))) {
        await vault.createFolder(path);
        new Notice(`📁 Carpeta creada: ${path}`);
    }
}

// 7. Construye y crea el archivo MOC de la materia.
let mocContent = `---
tipo: moc
materia: ${materia}
semestre: ${semestre}
tags: [moc]
---
# 🗺️ MOC — ${nombreMOC}

> Índice maestro.

## 📚 Clases

\`\`\`dataview
TABLE fecha, estado
FROM "${lecturesPath}"
SORT fecha DESC
\`\`\`

## 🧩 Conceptos

\`\`\`dataview
TABLE dificultad, estado
FROM "${conceptsPath}"
SORT dificultad DESC
\`\`\`

## 🚀 Proyectos

\`\`\`dataview
TABLE fecha-entrega, estado
FROM "02_Projects"
WHERE materia = "${materia}"
\`\`\`

## ✅ Tareas pendientes

\`\`\`dataview
TASK
FROM "02_Projects" OR "${lecturesPath}" OR "${conceptsPath}"
WHERE !completed AND materia = "${materia}"
GROUP BY file.link
\`\`\`
`;

let mocFilePath = `03_Areas/${materia}/${nombreMOC}.md`;
if (!(await vault.adapter.exists(mocFilePath))) {
    await vault.create(mocFilePath, mocContent);
    new Notice(`✅ MOC creado: ${mocFilePath}`);
} else {
    new Notice(`⚠️ El MOC ya existe, no se sobrescribe.`);
}

// 8. Actualiza o crea el MOC de Carrera.
let mocCarreraPath = "03_Areas/MOC-Carrera.md";
let enlace = `- [[${nombreMOC}|${materia}]] (semestre ${semestre})`;
let carreraFile = await vault.getAbstractFileByPath(mocCarreraPath);
if (carreraFile) {
    let currentContent = await vault.read(carreraFile);
    if (!currentContent.includes(enlace)) {
        await vault.append(carreraFile, "\n" + enlace);
        new Notice(`🔗 Enlace agregado al MOC Carrera`);
    }
} else {
    let carreraContent = `---
tipo: moc
materia: carrera
semestre: general
tags: [moc, carrera]
---

# 🧠 MOC General — Carrera

## 📚 Materias
${enlace}
`;
    await vault.create(mocCarreraPath, carreraContent);
    new Notice(`📚 MOC Carrera creado`);
}

new Notice(`🎉 Materia "${materia}" lista para usar`);

// Eliminar el archivo temporal que pudo haber creado QuickAdd
let tempFile = await vault.getAbstractFileByPath(`${materia}.md`);
if (tempFile) await vault.delete(tempFile);

%>