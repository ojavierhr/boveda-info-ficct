// ===
// 🆕 ¡Hola! Este script crea una nueva nota de clase.
// Lo vas a usar desde QuickAdd con el atajo Ctrl+Shift+C.
// Te guiará paso a paso: primero elegirás la materia de una lista,
// luego pondrás el título de la clase, y él solito generará la nota.
// ===

// 🧩 Esta función es la que se ejecuta cuando llamas al script desde QuickAdd.
// No te preocupes por los detalles de "params", es solo la forma en que QuickAdd
// nos pasa herramientas útiles (como el selector de opciones).

module.exports = async (params) => {
  // 🎛️ De "params" sacamos el "suggester", que es el que muestra la lista para elegir.
  const { quickAddApi: { suggester } } = params;

  // 📁 "app" y "vault" son los objetos que nos deja Obsidian para manipular archivos.
  const app = this.app;
  const vault = app.vault;

  // ===
  // PASO 1: OBTENER LA LISTA DE MATERIAS EXISTENTES
  // ===

  // 📂 "getAllLoadedFiles()" devuelve una lista con TODOS los archivos y carpetas de la bóveda.
  const todos = app.vault.getAllLoadedFiles();

  // Filtramos esa lista para quedarnos solo con las carpetas que cumplen:
  // - "f.children" significa que es una carpeta (porque las carpetas tienen hijos).
  // - "f.path.startsWith('01-materias/')" para asegurar que está dentro de la carpeta de materias.
  // - "f.path.split('/').length === 2" quiere decir que la carpeta está justo dentro de "01-materias/"
  //   (por ejemplo "01-materias/Sistemas Operativos" tiene 2 partes después de dividir por '/').
  // Luego con ".map(f => f.name)" nos quedamos solo con el nombre de la carpeta (ej. "Sistemas Operativos").
  // Finalmente ".sort()" los ordena alfabéticamente.
  const materias = todos
    .filter(f => f.children && f.path.startsWith("01-materias/") && f.path.split("/").length === 2)
    .map(f => f.name)
    .sort();

  // Si no hay ninguna materia, mostramos un aviso y salimos del script.
  if (materias.length === 0) {
    new Notice("❌ No hay materias. Crea una primero con Ctrl+Shift+M");
    return; // Salimos, no hacemos nada más.
  }

  // ===
  // PASO 2: MOSTRAR EL SELECTOR PARA QUE EL USUARIO ELIJA UNA MATERIA
  // ===

  // "await suggester(lista, lista)" muestra una ventana con las opciones.
  // Le pasamos la misma lista dos veces: la primera es lo que se ve, la segunda lo que devuelve.
  // El usuario elige una y se guarda en "materiaElegida". Si cierra la ventana sin elegir, devuelve "null".
  const materiaElegida = await suggester(materias, materias);
  if (!materiaElegida) return; // Si no eligió nada, salimos.

  // ===
  // PASO 3: PEDIR EL TÍTULO DE LA CLASE
  // ===

  // "quickAddApi.inputPrompt" muestra un cuadro de texto para que el usuario escriba.
  // El primer argumento es el mensaje, el segundo es un ejemplo.
  const titulo = await params.quickAddApi.inputPrompt("Título de la clase", "ej. introduccion-so");
  if (!titulo) return; // Si no escribió nada, salimos.

  // ===
  // PASO 4: CREAR LA NOTA USANDO LA PLANTILLA
  // ===

  // Aunque tenemos Templater, aquí vamos a hacer los reemplazos "a mano" para que sea más simple.
  // Pero si quisieras usar Templater de verdad, podrías llamarlo. Lo dejamos así por ahora.

  // Generamos la fecha de hoy en formato YYYY-MM-DD (ej. 2026-03-19)
  const fecha = new Date().toISOString().slice(0, 10);

  // El nombre del archivo será "YYYY-MM-DD_titulo.md" (todo en minúsculas y sin espacios, idealmente)
  const nombreArchivo = `${fecha}_${titulo}.md`;

  // La ruta completa donde se guardará: dentro de la carpeta de la materia elegida, en "clases/"
  const rutaCompleta = `01-materias/${materiaElegida}/clases/${nombreArchivo}`;

  // Leemos el contenido de la plantilla (que está en "04-plantillas/plantilla_clase.md")
  const plantilla = await vault.read(await vault.getAbstractFileByPath('04-plantillas/plantilla_clase.md'));

  // Ahora reemplazamos los marcadores {{...}} por los valores reales:
  // - "{{prompt: Materia}}" lo cambiamos por el nombre de la materia elegida.
  // - "{{date:YYYY-MM-DD}}" lo cambiamos por la fecha de hoy.
  // - "{{title}}" lo cambiamos por el título que escribió el usuario.
  let contenido = plantilla
    .replace(/{{prompt: Materia}}/g, materiaElegida)
    .replace(/{{date:YYYY-MM-DD}}/g, fecha)
    .replace(/{{title}}/g, titulo);

  // Finalmente, creamos el archivo en la ruta indicada con el contenido ya procesado.
  await vault.create(rutaCompleta, contenido);

  // Y mostramos un mensaje de éxito.
  new Notice(`✅ Clase creada en ${materiaElegida}`);
};