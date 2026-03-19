// ===
// 🎯 CREAR TAREA - Script para QuickAdd (v2)
// ===
// Este script te guía para crear tareas de tres tipos:
//   1. Tarea suelta (sin materia ni proyecto)
//   2. Tarea en una materia (sin proyecto)
//   3. Tarea en un proyecto (dentro de una materia)
//
// Mejoras respecto a v1:
//   - Las tareas de proyecto se guardan en una subcarpeta "tareas/" dentro del proyecto.
//   - Maneja correctamente cuando no hay integrantes en el proyecto (pregunta manualmente).
//   - Valida que las listas de opciones no estén vacías antes de llamar a suggester.
//   - Añade más mensajes de error amigables.
//   - Evita duplicados verificando si el archivo ya existe.
// ===

module.exports = async (params) => {
  // 📦 Lo que necesitamos para trabajar
  const { quickAddApi: { inputPrompt, suggester } } = params;
  const app = this.app;
  const vault = app.vault;

  // ---
  // PASO 1: ¿Qué tipo de tarea quieres crear?
  // ---
  const tipoOpciones = [
    "📌 Tarea suelta (sin materia ni proyecto)",
    "📚 Tarea en una materia (sin proyecto)",
    "🚀 Tarea en un proyecto (dentro de una materia)"
  ];
  const tipoElegido = await suggester(tipoOpciones, tipoOpciones);
  if (!tipoElegido) {
    new Notice("❌ Operación cancelada.");
    return;
  }

  // Variables que iremos llenando
  let materia = null;
  let proyecto = null;
  let fase = null;
  let asignado = null;
  let rutaBase = "";
  let etiquetas = [];

  // ---
  // PASO 2: Según el tipo, pedimos datos y definimos ruta
  // ---

  if (tipoElegido === "📌 Tarea suelta (sin materia ni proyecto)") {
    // Asegurar que existe la carpeta 00-tareas/
    if (!(await vault.adapter.exists("00-tareas"))) {
      await vault.createFolder("00-tareas");
      new Notice("📁 Carpeta '00-tareas' creada automáticamente.");
    }
    rutaBase = "00-tareas";
    // Sin etiquetas especiales
  }

  else if (tipoElegido === "📚 Tarea en una materia (sin proyecto)") {
    // Obtener lista de materias (carpetas en 01-materias/)
    const materias = await obtenerMaterias(app);
    if (materias.length === 0) {
      new Notice("❌ No hay materias. Crea una primero con Ctrl+Shift+M");
      return;
    }
    materia = await suggester(materias, materias);
    if (!materia) {
      new Notice("❌ Operación cancelada.");
      return;
    }

    // Asegurar que existe la carpeta tareas/ dentro de la materia
    const materiaPath = `01-materias/${materia}`;
    const tareasPath = `${materiaPath}/tareas`;
    if (!(await vault.adapter.exists(tareasPath))) {
      await vault.createFolder(tareasPath);
    }
    rutaBase = tareasPath;
    // Etiqueta: la materia (sin espacios, para filtros)
    etiquetas.push(`#${materia.replace(/\s+/g, '-').toLowerCase()}`);
  }

  else if (tipoElegido === "🚀 Tarea en un proyecto (dentro de una materia)") {
    // Primero elegir materia
    const materias = await obtenerMaterias(app);
    if (materias.length === 0) {
      new Notice("❌ No hay materias. Crea una primero con Ctrl+Shift+M");
      return;
    }
    materia = await suggester(materias, materias);
    if (!materia) {
      new Notice("❌ Operación cancelada.");
      return;
    }

    // Obtener proyectos de esa materia (carpetas dentro de .../proyectos/)
    const proyectosPath = `01-materias/${materia}/proyectos`;
    if (!(await vault.adapter.exists(proyectosPath))) {
      new Notice(`❌ La materia ${materia} no tiene carpeta de proyectos.`);
      return;
    }
    const proyectos = await obtenerCarpetasHijas(app, proyectosPath);
    if (proyectos.length === 0) {
      new Notice(`❌ No hay proyectos en ${materia}. Crea uno primero.`);
      return;
    }
    // Mostrar lista con nombres bonitos (proy-XX_nombre)
    proyecto = await suggester(proyectos, proyectos);
    if (!proyecto) {
      new Notice("❌ Operación cancelada.");
      return;
    }

    // Ruta completa del proyecto
    const proyectoPath = `${proyectosPath}/${proyecto}`;

    // ---
    // PASO 3: Leer fases desde el overview del proyecto
    // ---
    // Buscar el archivo overview (proy-XX_nombre.md) dentro de la carpeta
    const archivos = await vault.adapter.list(proyectoPath);
    // Filtramos archivos .md que no sean tareas ni kanban (el overview)
    const overviewFile = archivos.files.find(f => 
      f.endsWith('.md') && !f.includes('tareas') && !f.includes('kanban')
    );
    if (!overviewFile) {
      new Notice("❌ No se encontró el archivo overview del proyecto.");
      return;
    }
    // Leer el archivo y extraer las fases (buscamos "### Fase X" en el contenido)
    const contenidoOverview = await vault.adapter.read(overviewFile);
    const fasesEncontradas = extraerFases(contenidoOverview);
    if (fasesEncontradas.length === 0) {
      new Notice("❌ No se encontraron fases en el overview. Añade secciones '### Fase 1', etc.");
      return;
    }
    fase = await suggester(fasesEncontradas, fasesEncontradas);
    if (!fase) {
      new Notice("❌ Operación cancelada.");
      return;
    }

    // ---
    // PASO 4: Asignado (solo de la lista de integrantes del proyecto)
    // ---
    // Extraer integrantes del frontmatter del overview
    const integrantes = extraerIntegrantes(contenidoOverview);
    
    if (integrantes.length > 0) {
      // Permitir elegir de la lista o escribir manual (por si hay colaboradores externos)
      const opcionesAsignado = [...integrantes, "✍️ Otro (escribir manualmente)"];
      const seleccion = await suggester(opcionesAsignado, opcionesAsignado);
      if (!seleccion) {
        new Notice("❌ Operación cancelada.");
        return;
      }
      if (seleccion === "✍️ Otro (escribir manualmente)") {
        asignado = await inputPrompt("Nombre del asignado (ej. @javier)", "");
        if (asignado === null) {
          new Notice("❌ Operación cancelada.");
          return;
        }
      } else {
        asignado = seleccion; // ya viene con @ incluido
      }
    } else {
      // Si no hay integrantes, preguntar manualmente
      new Notice("ℹ️ El proyecto no tiene integrantes definidos. Puedes escribirlo manualmente.");
      asignado = await inputPrompt("¿Quién se encarga? (ej. @javier)", "");
      if (asignado === null) {
        new Notice("❌ Operación cancelada.");
        return;
      }
    }

    // ---
    // PASO 5: Crear carpeta de tareas dentro del proyecto (si no existe)
    // ---
    const tareasProyectoPath = `${proyectoPath}/tareas`;
    if (!(await vault.adapter.exists(tareasProyectoPath))) {
      await vault.createFolder(tareasProyectoPath);
    }
    rutaBase = tareasProyectoPath;

    // Etiquetas: proyecto y fase
    const proyectoTag = proyecto.split('_')[0]; // "proy-XX"
    etiquetas.push(`#${proyectoTag}/${fase.replace(/\s+/g, '-')}`);
  }

  // ---
  // PASO 6: Datos comunes a todos los tipos
  // ---
  // Título de la tarea (nombre del archivo)
  const titulo = await inputPrompt("📝 Título de la tarea", "Ej. Implementar login");
  if (!titulo) {
    new Notice("❌ Operación cancelada.");
    return;
  }

  // Prioridad
  const prioridades = ["⏫ Urgente", "🔼 Alta", "🔽 Media", "⏬ Baja"];
  const prioridadElegida = await suggester(prioridades, ["⏫", "🔼", "🔽", "⏬"]);
  if (!prioridadElegida) {
    new Notice("❌ Operación cancelada.");
    return;
  }

  // Fecha límite
  const fechaLimite = await inputPrompt("📅 Fecha límite (YYYY-MM-DD)", new Date().toISOString().slice(0,10));
  if (!fechaLimite) {
    new Notice("❌ Operación cancelada.");
    return;
  }

  // ---
  // PASO 7: Crear el archivo (evitando duplicados)
  // ---
  // Generar nombre de archivo: titulo sin espacios, con guiones, en minúsculas
  const nombreArchivo = titulo.toLowerCase().replace(/\s+/g, '-') + ".md";
  const rutaCompleta = `${rutaBase}/${nombreArchivo}`;

  // Verificar si ya existe
  if (await vault.adapter.exists(rutaCompleta)) {
    new Notice(`❌ Ya existe una tarea con ese nombre en esa carpeta.`);
    return;
  }

  // Construir frontmatter
  let frontmatter = "---\n";
  frontmatter += "tipo: tarea\n";
  frontmatter += `titulo: "${titulo}"\n`;
  if (materia) frontmatter += `materia: "${materia}"\n`;
  if (proyecto) frontmatter += `proyecto: "${proyecto}"\n`;
  if (fase) frontmatter += `fase: "${fase}"\n`;
  if (asignado) frontmatter += `asignado: "${asignado}"\n`;
  frontmatter += `fecha-limite: ${fechaLimite}\n`;
  frontmatter += `prioridad: ${prioridadElegida}\n`;
  frontmatter += "estado: pendiente\n";
  frontmatter += `tags: [${etiquetas.join(', ')}]\n`;
  frontmatter += "---\n\n";

  // Cuerpo de la tarea (formato Tasks)
  let cuerpo = `# ✅ ${titulo}\n\n`;
  cuerpo += `- [ ] ${titulo}`;
  if (asignado) cuerpo += ` ${asignado}`;
  cuerpo += ` 📅 ${fechaLimite} ${prioridadElegida}`;
  if (proyecto && fase) {
    const proyectoTag = proyecto.split('_')[0];
    cuerpo += ` #${proyectoTag}/${fase.replace(/\s+/g, '-')}`;
  }
  cuerpo += `\n`;

  // Contenido final
  const contenido = frontmatter + cuerpo;

  // Escribir archivo
  try {
    await vault.create(rutaCompleta, contenido);
    new Notice(`✅ Tarea "${titulo}" creada en ${rutaBase}`);
  } catch (error) {
    new Notice(`❌ Error al crear el archivo: ${error.message}`);
    console.error(error);
  }
};

// ===
// FUNCIONES AUXILIARES
// ===

// Obtener lista de materias (carpetas en 01-materias/)
async function obtenerMaterias(app) {
  const adapter = app.vault.adapter;
  const path = "01-materias";
  if (!(await adapter.exists(path))) return [];
  const list = await adapter.list(path);
  // Filtrar solo carpetas (directorios)
  const carpetas = list.folders.filter(f => f.startsWith(path + "/"));
  return carpetas.map(f => f.replace(path + "/", ""));
}

// Obtener carpetas hijas de una ruta (para proyectos)
async function obtenerCarpetasHijas(app, basePath) {
  const adapter = app.vault.adapter;
  if (!(await adapter.exists(basePath))) return [];
  const list = await adapter.list(basePath);
  return list.folders.map(f => f.replace(basePath + "/", ""));
}

// Extraer fases de un overview (busca "### Fase X" o "## Fase X")
function extraerFases(contenido) {
  const lineas = contenido.split('\n');
  const fases = [];
  const regex = /^#{2,3}\s+(Fase\s+\d+)/i; // Ej: "### Fase 1" o "## Fase 2"
  for (let linea of lineas) {
    const match = linea.match(regex);
    if (match) {
      fases.push(match[1]); // "Fase 1", "Fase 2", etc.
    }
  }
  return fases;
}

// Extraer integrantes del frontmatter (campo "integrantes:")
function extraerIntegrantes(contenido) {
  const integrantes = [];
  // Buscar la línea "integrantes: [...]" en el frontmatter
  const frontmatterMatch = contenido.match(/^---\n([\s\S]+?)\n---/);
  if (frontmatterMatch) {
    const frontmatter = frontmatterMatch[1];
    const lineas = frontmatter.split('\n');
    for (let linea of lineas) {
      if (linea.startsWith("integrantes:")) {
        // Formato: integrantes: ["@javier", "@maria"] o [@javier, @maria]
        const listaStr = linea.replace("integrantes:", "").trim();
        // Extraer entre corchetes
        const match = listaStr.match(/\[(.*)\]/);
        if (match) {
          const items = match[1].split(',').map(s => s.trim().replace(/"/g, ''));
          integrantes.push(...items);
        }
        break;
      }
    }
  }
  return integrantes;
}