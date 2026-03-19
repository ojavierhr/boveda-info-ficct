// ===
// 🎓 SCRIPT MÁGICO PARA CREAR UNA MATERIA NUEVA
// ===
// Lo llama QuickAdd cuando pulsas Ctrl+Shift+M.
// Su tarea: crear toda la estructura de carpetas para una materia nueva:
//   - Una carpeta principal con el nombre de la materia
//   - Subcarpetas: clases, temas, proyectos, tareas, recursos, laboratorios
//   - Un archivo informe.md con consultas Dataview y Tasks listas para usar
//
// Pensado para que no tengas que hacer nada manualmente. ¡A estudiar! 📚

module.exports = async (params) => {
  // ===
  // 0. HERRAMIENTAS BÁSICAS
  // ===
  const { quickAddApi: { inputPrompt, suggester } } = params;
  const app = this.app;
  const vault = app.vault;

  // ===
  // 1. PEDIR EL NOMBRE DE LA MATERIA
  // ===
  const materia = await inputPrompt("📚 Nombre de la materia", "ej. Sistemas Operativos");
  if (!materia) return; // si cancela, nos vamos

  // ===
  // 2. CREAR LA CARPETA PRINCIPAL Y SUS SUB CARPETAS
  // ===
  const basePath = `01-materias/${materia}`;
  try {
    await vault.createFolder(basePath);
    await vault.createFolder(`${basePath}/clases`);      // aquí irán las notas de clase
    await vault.createFolder(`${basePath}/temas`);       // para profundizar conceptos
    await vault.createFolder(`${basePath}/proyectos`);   // proyectos de la materia
    await vault.createFolder(`${basePath}/tareas`);      // tareas sueltas (si las hay)
    await vault.createFolder(`${basePath}/recursos`);    // PDFs, imágenes, etc.
    await vault.createFolder(`${basePath}/laboratorios`); // prácticas de laboratorio
  } catch (e) {
    // Si la carpeta ya existe (por ejemplo, materia repetida), avisamos
    new Notice("❌ Error: La carpeta ya existe o no se pudo crear");
    return;
  }

  // ===
  // 3. CREAR EL INFORME DE LA MATERIA (dashboard)
  // ===
  // Este archivo se llamará informe.md y tendrá secciones que se llenan solas con Dataview y Tasks.
  const informeContent = `---
tags: [dashboard, materia]
---

# 📊 Dashboard de ${materia}

## 📅 Clases pendientes de revisar
\`\`\`dataview
TABLE fecha AS Fecha, file.link AS Nota
FROM "${basePath}/clases"
WHERE tipo = "clase" AND estado = "🟡 sin-revisar"
SORT fecha DESC
\`\`\`

## 🚀 Proyectos activos
\`\`\`dataview
TABLE estado-fase-1 AS "Fase 1", fecha-entrega-fase-1 AS "Entrega"
FROM "${basePath}/proyectos"
WHERE tipo = "proyecto" AND estado-fase-1 != "✅ entregado"
\`\`\`

## ✅ Tareas próximas
\`\`\`tasks
not done
due before in 7 days
path includes ${materia}
\`\`\`

## 📈 Conceptos con dificultad alta
\`\`\`dataview
LIST
FROM "${basePath}/temas"
WHERE dificultad = "🔴 alta"
\`\`\`

## 📁 Laboratorios
\`\`\`dataview
LIST
FROM "${basePath}/laboratorios"
SORT file.name DESC
\`\`\`
`;
  await vault.create(`${basePath}/informe.md`, informeContent);

  // ===
  // 4. AVISAR AL USUARIO QUE TODO SALIÓ BIEN
  // ===
  new Notice(`✅ Materia "${materia}" creada con éxito`);
};