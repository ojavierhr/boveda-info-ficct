/**
 * nueva-materia.js
 * QuickAdd User Script — Crea la estructura completa de una nueva materia
 *
 * Ubícalo en: _Templates/scripts/nueva-materia.js
 * Obsidian lo ejecuta directamente — no crea archivos intermedios
 */

module.exports = async (params) => {
    const { app, quickAddApi } = params;

    // ─── 1. RECOLECTAR DATOS ──────────────────────────────────────────────────

    const slug = await quickAddApi.inputPrompt(
        "📚 Slug de la materia",
        "ej: calculo-1  |  sin espacios, todo minúsculas y guiones",
        ""
    );
    if (!slug || slug.trim() === "") return;
    const slugLimpio = slug.trim().toLowerCase().replace(/\s+/g, "-");

    const nombreCompleto = await quickAddApi.inputPrompt(
        "📌 Nombre completo de la materia",
        "ej: Cálculo 1",
        ""
    );
    if (!nombreCompleto || nombreCompleto.trim() === "") return;

    const semestre = await quickAddApi.inputPrompt(
        "📅 Semestre",
        "ej: 1-2026",
        ""
    );
    if (!semestre || semestre.trim() === "") return;

    const docente = await quickAddApi.inputPrompt(
        "👨‍🏫 Docente (opcional — Enter para omitir)",
        "ej: Ing. Juan Pérez",
        ""
    );

    // ─── 2. CREAR CARPETAS ────────────────────────────────────────────────────

    const carpetas = [
        `01_Notes/Lectures/${slugLimpio}`,
        `01_Notes/Concepts/${slugLimpio}`,
        `03_Areas/${slugLimpio}`,
        `04_Resources/${slugLimpio}`,
    ];

    for (const carpeta of carpetas) {
        try {
            await app.vault.createFolder(carpeta);
        } catch (_) {
            // La carpeta ya existe → ignorar
        }
    }

    // ─── 3. GENERAR CONTENIDO DEL MOC ────────────────────────────────────────

    const fecha = new Date().toISOString().split("T")[0];

    const contenidoMOC = `---
tipo: moc
materia: ${slugLimpio}
nombre-completo: ${nombreCompleto}
semestre: ${semestre}
docente: ${docente || ""}
fecha-inicio: ${fecha}
tags: [moc]
---

# 🗺️ MOC — ${nombreCompleto}
> FICCT · UAGRM · Ing. Informática | Semestre ${semestre}${docente ? " | " + docente : ""}

---

## 📚 Clases

\`\`\`dataview
TABLE fecha AS Fecha, estado AS Estado
FROM "01_Notes/Lectures/${slugLimpio}"
WHERE tipo = "clase"
SORT fecha DESC
\`\`\`

---

## 🧩 Conceptos

\`\`\`dataview
TABLE dificultad AS Dificultad, estado AS Estado
FROM "01_Notes/Concepts/${slugLimpio}"
WHERE tipo = "concepto"
SORT dificultad DESC
\`\`\`

---

## 📈 Conceptos con dificultad alta

\`\`\`dataview
LIST
FROM "01_Notes/Concepts/${slugLimpio}"
WHERE dificultad = "🔴 alta"
\`\`\`

---

## 🚀 Proyectos activos

\`\`\`dataview
TABLE fecha-entrega AS Entrega, estado AS Estado
FROM "02_Projects"
WHERE materia = "${slugLimpio}"
SORT fecha-entrega ASC
\`\`\`

---

## ✅ Tareas pendientes

\`\`\`tasks
not done
path includes ${slugLimpio}
\`\`\`

---

## 📊 Ponderación

| Actividad | % | Nota |
|---|---|---|
|  |  |  |
|  |  |  |
|  |  |  |
| **Total** | **100%** | |

---

## 📖 Bibliografía

`;

    // ─── 4. CREAR MOC Y ABRIR ─────────────────────────────────────────────────

    const rutaMOC = `03_Areas/${slugLimpio}/MOC-${slugLimpio}.md`;

    try {
        // Verificar que no exista ya
        const existe = app.vault.getAbstractFileByPath(rutaMOC);
        if (existe) {
            new Notice(`⚠️  La materia "${slugLimpio}" ya existe. Abriendo su MOC.`);
            await app.workspace.openLinkText(rutaMOC, "", false);
            return;
        }

        await app.vault.create(rutaMOC, contenidoMOC);
        await app.workspace.openLinkText(rutaMOC, "", false);

        new Notice(
            `✅ Materia "${nombreCompleto}" creada\n` +
            `📁 Carpetas: Lectures, Concepts, Areas, Resources\n` +
            `📄 MOC abierto y listo`
        );

    } catch (e) {
        new Notice(`❌ Error al crear la materia: ${e.message}`);
        console.error("[nueva-materia.js]", e);
    }
};
