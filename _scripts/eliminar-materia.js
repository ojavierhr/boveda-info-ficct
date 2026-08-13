// scripts/eliminar-materia.js
const fs = require('fs');
const path = require('path');

async function eliminarMateria(params) {
    const { quickAddApi, app } = params;

    // =============================================================
    // 1. OBTENER LISTA DE MATERIAS EXISTENTES
    // =============================================================
    const lecturesPath = '01_Notes/Lectures';
    let slugs = [];

    try {
        const lecturesFolder = app.vault.getAbstractFileByPath(lecturesPath);
        if (lecturesFolder && lecturesFolder.children) {
            slugs = lecturesFolder.children
                .filter(f => f.children) // solo carpetas
                .map(f => f.name)
                .sort(); // orden alfabético
        }
    } catch (e) {
        console.warn('No se pudo leer la carpeta Lectures:', e);
    }

    // Si no hay materias, mostrar mensaje y salir
    if (slugs.length === 0) {
        new Notice('❌ No se encontraron materias en 01_Notes/Lectures/.');
        return;
    }

    // =============================================================
    // 2. MOSTRAR SELECTOR CON LAS MATERIAS
    // =============================================================
    let slug = await quickAddApi.suggester(
        slugs.map(s => `📚 ${s}`),  // texto mostrado
        slugs,                       // valor devuelto
        false,                       // no permite entrada libre
        'Selecciona la materia a eliminar:'
    );

    // Si el usuario cancela el selector, preguntamos si quiere escribir manualmente
    if (!slug) {
        const manual = await quickAddApi.yesNoPrompt(
            'No seleccionaste ninguna materia. ¿Quieres escribir el slug manualmente?'
        );
        if (manual) {
            slug = await quickAddApi.inputPrompt('Ingresa el slug manualmente:');
            if (!slug) {
                new Notice('⛔ Operación cancelada.');
                return;
            }
        } else {
            new Notice('⛔ Operación cancelada.');
            return;
        }
    }

    // =============================================================
    // 3. CONFIRMACIÓN DOBLE
    // =============================================================
    const confirmacion = await quickAddApi.yesNoPrompt(
        `⚠️ ¿ELIMINAR DEFINITIVAMENTE la materia "${slug}"?\n\n` +
        `Se borrarán:\n` +
        `- 01_Notes/Lectures/${slug}/\n` +
        `- 01_Notes/Concepts/${slug}/\n` +
        `- 03_Areas/${slug}/\n` +
        `- 04_Resources/${slug}/\n\n` +
        `¡Los enlaces en otras notas se romperán!`
    );

    if (!confirmacion) {
        new Notice('⛔ Eliminación cancelada.');
        return;
    }

    // =============================================================
    // 4. OBTENER RUTA RAÍZ DE LA BÓVEDA
    // =============================================================
    const vaultRoot = app.vault.adapter.basePath;

    // =============================================================
    // 5. DEFINIR CARPETAS A ELIMINAR
    // =============================================================
    const carpetas = [
        path.join(vaultRoot, '01_Notes', 'Lectures', slug),
        path.join(vaultRoot, '01_Notes', 'Concepts', slug),
        path.join(vaultRoot, '03_Areas', slug),
        path.join(vaultRoot, '04_Resources', slug)
    ];

    let eliminadas = 0;
    let errores = [];

    // =============================================================
    // 6. ELIMINAR CADA CARPETA
    // =============================================================
    for (const carpeta of carpetas) {
        if (fs.existsSync(carpeta)) {
            try {
                fs.rmSync(carpeta, { recursive: true, force: true });
                eliminadas++;
                console.log(`✅ Eliminada: ${carpeta}`);
            } catch (err) {
                errores.push(`${carpeta}: ${err.message}`);
                console.error(`❌ Error al eliminar ${carpeta}:`, err);
            }
        } else {
            console.log(`ℹ️ No encontrada: ${carpeta}`);
        }
    }

    // =============================================================
    // 7. MOSTRAR RESULTADO
    // =============================================================
    if (eliminadas > 0) {
        new Notice(`✅ Materia "${slug}" eliminada. (${eliminadas} carpetas removidas)`);
    } else {
        new Notice(`❌ No se encontraron carpetas para la materia "${slug}".`);
    }

    if (errores.length > 0) {
        new Notice(`⚠️ Algunas carpetas no se eliminaron:\n${errores.join('\n')}`);
    }
}

module.exports = eliminarMateria;