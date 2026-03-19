// 🎯 NUEVO TEMA - Script para crear notas de tema sin equivocarse de materia
// ===
// Este script lo usa QuickAdd cuando pulsas Ctrl+Shift+E.
// En lugar de preguntarte la materia a escribir (y que puedas equivocarte),
// te muestra una lista de las materias que YA EXISTEN en tu bóveda.
// Así te aseguras de que la nota se guarda donde toca.

module.exports = async (params) => {
  // 📦 Lo que necesitamos para funcionar
  const { quickAddApi: { suggester, inputPrompt } } = params;
  const app = this.app;            // El "cerebro" de Obsidian
  const vault = app.vault;          // La carpeta donde viven tus notas

  // ---
  // 1. Buscar todas las materias que ya has creado
  // ---
  // Miramos dentro de la carpeta "01-materias" y nos quedamos con las carpetas
  // que están justo en el primer nivel (ej. "01-materias/Sistemas Operativos")
  const todos = app.vault.getAllLoadedFiles();
  const materias = todos
    .filter(f => f.children && f.path.startsWith("01-materias/") && f.path.split("/").length === 2)
    .map(f => f.name)              // Nos quedamos solo con el nombre de la carpeta
    .sort();                        // Las ordenamos alfabéticamente

  // Si no hay ni una materia, avisamos y paramos
  if (materias.length === 0) {
    new Notice("❌ No hay materias. Crea una primero con Ctrl+Shift+M");
    return;
  }

  // ---
  // 2. Dejar que el usuario elija una materia de la lista
  // ---
  const materia = await suggester(materias, materias);
  if (!materia) return;  // Si cancela, no hacemos nada

  // ---
  // 3. Pedir el título del tema
  // ---
  const titulo = await inputPrompt(
    "Título del tema (usa guiones si son varias palabras)", 
    "ej. semaforos"
  );
  if (!titulo) return;

  // ---
  // 4. Leer la plantilla de tema y rellenar los huecos
  // ---
  // Localizamos el archivo de plantilla (asegúrate de que existe)
  const plantillaFile = app.vault.getAbstractFileByPath("04-plantillas/plantilla_tema.md");
  const plantilla = await vault.read(plantillaFile);

  // Reemplazamos los marcadores con los valores reales
  let contenido = plantilla
    .replace(/{{Materia}}/g, materia)           // Ponemos el nombre de la materia
    .replace(/{{title}}/g, titulo)              // Ponemos el título
    .replace(/{{date:YYYY-MM-DD}}/g, new Date().toISOString().slice(0,10)); // Fecha de hoy

  // ---
  // 5. Guardar la nota en la carpeta correcta
  // ---
  // Limpiamos el título para convertirlo en un nombre de archivo válido
  // (cambiamos espacios por guiones, eliminamos caracteres raros...)
  const nombreArchivo = `${titulo}.md`
    .replace(/\s+/g, '-')           // espacios → guiones
    .replace(/[^a-zA-Z0-9\-\.]/g, ''); // quitamos acentos y símbolos raros (opcional)

  const ruta = `01-materias/${materia}/temas/${nombreArchivo}`;

  try {
    await vault.create(ruta, contenido);
    new Notice(`✅ Tema "${titulo}" creado en ${materia}`);
  } catch (e) {
    new Notice(`❌ Error: No se pudo crear el tema (¿ya existe?)`);
  }
};