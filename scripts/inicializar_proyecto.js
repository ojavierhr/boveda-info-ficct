// 🚀 INICIALIZAR PROYECTO - El mago que crea proyectos con un solo clic
// ===
// Este script es como un asistente personal: cuando pulsas Ctrl+Shift+P,
// te hace unas preguntas y automáticamente te crea toda la estructura
// de carpetas y archivos para tu nuevo proyecto.
//
// ¿Qué hace exactamente?
// 1. Te pregunta dónde quieres el proyecto: 
//    - ¿Dentro de una materia (en 01-materias)? 
//    - ¿O en proyectos generales (02-proyectos)?
// 2. Si es dentro de una materia, te muestra la lista de materias que ya tienes.
// 3. Te pide el nombre del proyecto.
// 4. Te pide los nombres de los integrantes (para luego asignar tareas).
// 5. Calcula el número que le toca (proy-01, proy-02...)
// 6. Crea una carpeta con el nombre "proy-XX_nombre-del-proyecto"
// 7. Dentro, crea tres archivos:
//    - proy-XX_nombre.md   → El CUARTEL GENERAL (con descripción, fases y DASHBOARD automático)
//    - proy-XX_tareas.md   → Lista de tareas con formato Tasks (para meter mano)
//    - proy-XX_kanban.md   → Tablero kanban para ver el avance visual
//
// ¡Todo listo para que empieces a trabajar y a ver el progreso sin mover un dedo!

module.exports = async (params) => {
  // ---
  // 📦 Lo que necesitamos para funcionar
  // ---
  const { quickAddApi: { inputPrompt, suggester } } = params;
  const app = this.app;
  const vault = app.vault;

  // // 
  // 1. ¿Dónde va a vivir el proyecto?
  // ir 
  const opciones = [
    "📚 En una materia específica",
    "🌍 En proyectos generales (02-proyectos)"
  ];
  const eleccion = await suggester(opciones, opciones);
  if (!eleccion) return;

  let basePath = "";
  let materiaSeleccionada = "General";

  if (eleccion === "📚 En una materia específica") {
    // Buscar materias existentes
    const todos = app.vault.getAllLoadedFiles();
    const materias = todos
      .filter(f => f.children && f.path.startsWith("01-materias/") && f.path.split("/").length === 2)
      .map(f => f.name)
      .sort();

    if (materias.length === 0) {
      new Notice("❌ No hay materias. Crea una primero con Ctrl+Shift+M");
      return;
    }

    const materiaElegida = await suggester(materias, materias);
    if (!materiaElegida) return;

    materiaSeleccionada = materiaElegida;
    basePath = `01-materias/${materiaSeleccionada}/proyectos`;
  } else {
    basePath = "02-proyectos";
  }

  // s";
  // 2. Nombre del proyecto
  // ---
  const nombre = await inputPrompt("📝 Nombre del proyecto (sin espacios, usa guiones)", "ej. taller-mrp");
  if (!nombre) return;

  // nom
  // 3. Integrantes
  // ---
  const integrantesInput = await inputPrompt("👥 Integrantes del proyecto (separados por comas, ej. @javier, @maria)", "");
  let integrantesArray = [];
  if (integrantesInput && integrantesInput.trim() !== "") {
    integrantesArray = integrantesInput.split(',').map(s => s.trim());
  }

  // ---
  // 4. Calcular número de proyecto (proy-XX)
  // ---
  const todos = app.vault.getAllLoadedFiles();
  const proyectosExistentes = todos.filter(f =>
    f.path.startsWith(basePath) && f.name.startsWith("proy-") && f.extension === 'md'
  );

  let maxNum = 0;
  proyectosExistentes.forEach(f => {
    const match = f.name.match(/proy-(\d+)/);
    if (match) {
      const num = parseInt(match[1]);
      if (num > maxNum) maxNum = num;
    }
  });
  const nextNum = (maxNum + 1).toString().padStart(2, '0');

  // 

 
  // 5. Crear carpeta del proyecto
  // ---
  const projectFolder = `${basePath}/proy-${nextNum}_${nombre}`;
  try {
    await vault.createFolder(projectFolder);
    // También creamos una subcarpeta para las tareas (el script de tareas ya la usará)
    await vault.createFolder(`${projectFolder}/tareas`);
  } catch (e) {
    new Notice(`❌ Error: La carpeta ya existe (proy-${nextNum})`);
    return;
  }

  // ---
  // 6. Crear el archivo PRINCIPAL (OVERVIEW) convertido en DASHBOARD
  // ---
  const integrantesStr = integrantesArray.map(i => `"${i}"`).join(', ');
  // NOTA: Incluimos bloques de Dataview y Tasks para que se vea el estado en tiempo real
  const overviewContent = `---
tipo: proyecto
nombre: "${nombre}"
materia: "${materiaSeleccionada}"
estado-fase-1: ⏳ pendiente
fecha-entrega-fase-1: ${new Date().toISOString().slice(0,10)}
integrantes: [${integrantesStr}]
tags: [proy-${nextNum}]
---

# 🚀 ${nombre} — Panel de control del proyecto

> ¡Bienvenido al cuartel general! Aquí tienes toda la info del proyecto y, lo mejor, **las secciones de abajo se actualizan solas** con las tareas que vas creando. No toques nada mágico, solo disfruta.

---

## 📋 Descripción del proyecto

*¿De qué va esto? Escribe aquí la idea principal.*

- 

## 🎯 Objetivos

- 
- 

---

## 📦 Entregables (checklist manual)

- [ ] Entregable 1
- [ ] Entregable 2

---

## 🧑‍🤝‍🧑 Equipo

**Integrantes:** ${integrantesArray.join(', ') || 'Aún no hay integrantes definidos'}

---

## 📊 Estado de las fases

### Fase 1 — Pendiente (⏳)
*Fecha de entrega:* ${new Date().toISOString().slice(0,10)}

- [ ] Hito 1
- [ ] Hito 2

### Fase 2 — Pendiente (⏳)
*Fecha de entrega:* (poner fecha)

- [ ] Hito 1
- [ ] Hito 2

---

## ✅ Tareas del proyecto (las que están sin completar)

\`\`\`tasks
not done
path includes ${projectFolder}/tareas/
group by folder
\`\`\`

---

## 📈 Progreso por fases (automático)

\`\`\`dataview
TABLE
  rows.file.link AS Tareas,
  rows.status AS Estado
FROM "${projectFolder}/tareas/"
FLATTEN file.tasks AS T
WHERE !T.completed
GROUP BY T.section AS Fase
\`\`\`

---

> [!TIP] **¿Quieres ver más?** Puedes añadir más queries, por ejemplo para ver tareas asignadas a cada persona. ¡Este es tu panel, personalízalo!
`;
  await vault.create(`${projectFolder}/proy-${nextNum}_${nombre}.md`, overviewContent);

  // ---
  // 7. Crear el archivo de TAREAS (para meter tareas a mano)
  // ---
  const tareasContent = `# 📝 Tareas de ${nombre}

Aquí puedes escribir tareas usando el formato del plugin **Tasks**.  
Ejemplo:

- [ ] Hacer la documentación @javier 📅 ${new Date().toISOString().slice(0,10)} ⏫ #proy-${nextNum}/fase-1

---

## Fase 1
- [ ] Tarea 1 @persona 📅 ${new Date().toISOString().slice(0,10)} ⏫ #proy-${nextNum}/fase-1

## Fase 2
- [ ] Tarea 2 @otro 📅 ... 🔼 #proy-${nextNum}/fase-2

---
> **Integrantes:** ${integrantesArray.join(', ') || 'No definidos'}
`;
  await vault.create(`${projectFolder}/proy-${nextNum}_tareas.md`, tareasContent);

  // t);
  // 8. Crear el tablero KANBAN
  //  KA
  const kanbanContent = `---
kanban-plugin: board
tags: [proy-${nextNum}]
---

## Por hacer
- [ ] Tarea inicial

## En progreso

## Hecho

`;
  await vault.create(`${projectFolder}/proy-${nextNum}_kanban.md`, kanbanContent);

  // d`,
  // 9. ¡Listo!
  // ---
  new Notice(`✅ Proyecto "${nombre}" (proy-${nextNum}) creado en ${projectFolder}`);
};