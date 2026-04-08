// _Templates/scripts/nuevo-proyecto-grande.js
module.exports = async (params) => {
  const { quickAddApi, app } = params;
  const vault = app.vault;

  function normalizarFecha(fechaStr) {
    if (!fechaStr) return null;
    fechaStr = fechaStr.trim();
    if (/^\d{4}-\d{2}-\d{2}$/.test(fechaStr)) {
      const [year, month, day] = fechaStr.split('-').map(Number);
      const fecha = new Date(year, month-1, day);
      if (fecha.getFullYear() === year && fecha.getMonth() === month-1 && fecha.getDate() === day) return fechaStr;
    }
    let partes = fechaStr.split(/[/.-]/);
    if (partes.length === 3) {
      let dia = parseInt(partes[0], 10);
      let mes = parseInt(partes[1], 10);
      let año = parseInt(partes[2], 10);
      if (año < 100) año += 2000;
      if (dia >= 1 && dia <= 31 && mes >= 1 && mes <= 12 && año >= 1900 && año <= 2100) {
        const fecha = new Date(año, mes-1, dia);
        if (fecha.getFullYear() === año && fecha.getMonth() === mes-1 && fecha.getDate() === dia) {
          return `${año}-${String(mes).padStart(2, '0')}-${String(dia).padStart(2, '0')}`;
        }
      }
    }
    new Notice(`❌ Formato de fecha inválido: "${fechaStr}". Usá YYYY-MM-DD o DD/MM/YYYY`);
    return null;
  }

  async function safeCreateFolder(path) {
    try {
      if (await vault.adapter.exists(path)) return;
      await vault.createFolder(path);
      console.log(`Carpeta creada: ${path}`);
    } catch (e) {
      console.error(`Error creando carpeta ${path}:`, e);
      throw e;
    }
  }

  async function safeCreateFile(path, content) {
    try {
      if (await vault.adapter.exists(path)) {
        console.log(`El archivo ya existe: ${path}`);
        return;
      }
      await vault.create(path, content);
      console.log(`Archivo creado: ${path}`);
    } catch (e) {
      console.error(`Error creando archivo ${path}:`, e);
      throw e;
    }
  }

  try {
    const slug = await quickAddApi.inputPrompt("Slug del proyecto (sin espacios, ej: sis2-trabajo-final)");
    if (!slug) return;
    const nombre = await quickAddApi.inputPrompt("Nombre completo del proyecto");
    if (!nombre) return;
    const materia = await quickAddApi.inputPrompt("Materia (slug, ej: sistemas-informacion-2)");
    if (!materia) return;
    
    let fechaEntregaRaw = await quickAddApi.inputPrompt("Fecha de entrega final (YYYY-MM-DD o DD/MM/YYYY)", "2026-12-31");
    let fechaEntrega = normalizarFecha(fechaEntregaRaw);
    while (!fechaEntrega) {
      fechaEntregaRaw = await quickAddApi.inputPrompt("Formato inválido. Ingresá la fecha nuevamente (YYYY-MM-DD o DD/MM/YYYY)", "2026-12-31");
      fechaEntrega = normalizarFecha(fechaEntregaRaw);
    }
    
    const semestre = await quickAddApi.inputPrompt("Semestre (ej: 1-2026)", "", true);
    const fechaInicio = new Date().toISOString().slice(0,10);
    
    const basePath = `02_Projects/${slug}`;
    const tareasPath = `${basePath}/tareas`;
    const recursosPath = `${basePath}/recursos`;
    const reunionesPath = `${basePath}/reuniones`;
    
    await safeCreateFolder(basePath);
    await safeCreateFolder(tareasPath);
    await safeCreateFolder(recursosPath);
    await safeCreateFolder(reunionesPath);
    
    // Nota principal (sin bloque kanban)
    const proyectoContent = `---
tipo: proyecto
materia: ${materia}
semestre: ${semestre}
fecha-inicio: ${fechaInicio}
fecha-entrega: ${fechaEntrega}
estado: 🔵 en-progreso
tags: [proyecto, ${slug}]
---

# ${nombre}

## 🎯 Objetivo
%% Escribí el objetivo principal del proyecto %%

## 📋 Requisitos del docente / alcance
%% Lista de requisitos %%

## 👥 Equipo
%% Nombres y roles %%

## 📅 Hitos / entregas parciales
%% Podés listar fechas clave %%

---

## 📊 Dashboard del proyecto

### ⚙️ Tareas en progreso
\`\`\`dataview
TABLE WITHOUT ID
  file.link AS Tarea,
  fecha-limite AS "📅 Entrega",
  responsable AS "👤",
  prioridad AS "⭐"
FROM "${tareasPath}"
WHERE estado = "en-progreso"
SORT prioridad DESC, fecha-limite ASC
\`\`\`

### 📥 Backlog (pendientes)
\`\`\`dataview
LIST
FROM "${tareasPath}"
WHERE estado = "backlog" OR estado = "pendiente"
SORT fecha-limite ASC
\`\`\`

### ✅ Completado recientemente
\`\`\`dataview
TABLE fecha-completado AS "Completado"
FROM "${tareasPath}"
WHERE estado = "completado"
SORT fecha-completado DESC
LIMIT 5
\`\`\`

---

## 🗂️ Tablero Kanban
Abrí el archivo [[_tablero.kanban]] para ver el tablero visual.

## 📁 Archivos y recursos
- [[${recursosPath}]]
- [[${reunionesPath}]]

## 🔗 Conceptos aplicados
%% Enlaces a notas atómicas de la materia %%
`;
    await safeCreateFile(`${basePath}/_proyecto.md`, proyectoContent);
    
    // Tablero Kanban independiente
    const tableroContent = `---
kanban-plugin: basic
---

## 📥 Backlog
- [ ] [[tareas/tarea-ejemplo-investigacion|Tarea ejemplo]]

## 📌 Por hacer esta semana
- [ ]

## ⚙️ En progreso
- [ ]

## 👀 En revisión
- [ ]

## ✅ Completado
- [ ]

`;
    await safeCreateFile(`${basePath}/_tablero.kanban.md`, tableroContent);
    
    // Tarea de ejemplo
    const tareaEjemplo = `---
tipo: tarea-proyecto
proyecto: ${slug}
materia: ${materia}
estado: backlog
prioridad: media
fecha-limite: ${fechaEntrega}
responsable: 
dependencias: []
tags: [tarea, ${slug}]
---

# Tarea ejemplo: Investigación inicial

## Descripción
%% Ampliá la descripción de la tarea %%

## Checklist
- [ ] 
- [ ] 

## Notas / recursos
%% Enlaces a archivos en recursos/ %%
`;
    await safeCreateFile(`${tareasPath}/tarea-ejemplo-investigacion.md`, tareaEjemplo);
    
    await safeCreateFile(`${recursosPath}/.gitkeep`, "");
    await safeCreateFile(`${reunionesPath}/.gitkeep`, "");
    
    const proyectoFile = vault.getAbstractFileByPath(`${basePath}/_proyecto.md`);
    if (proyectoFile) {
      await app.workspace.getLeaf().openFile(proyectoFile);
    }
    
    new Notice(`✅ Proyecto "${nombre}" creado correctamente`);
    
  } catch (err) {
    console.error("Error en script:", err);
    new Notice(`❌ Error: ${err.message}`);
  }
};