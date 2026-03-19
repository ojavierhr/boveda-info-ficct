# 🎓 Bóveda de Ingeniería Informática (Plantilla para Obsidian)

[![GitHub release](https://img.shields.io/github/v/release/JavierHidalgoR/boveda-ingenieria-informatica)](https://github.com/O-Javier-Hidalgo-R/boveda-obsidian-estudios/releases)
[![Obsidian](https://img.shields.io/badge/Obsidian-483699?style=flat&logo=obsidian&logoColor=white)](https://obsidian.md/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

> 🧠 **¿Cansado de tener tus apuntes desordenados?**  
> Esta plantilla es un **sistema completo de gestión del conocimiento** construido dentro de [Obsidian](https://obsidian.md/). Está pensada para estudiantes de ingeniería (o cualquier carrera técnica) que quieran tomar apuntes, organizar proyectos, y construir su propia base de conocimiento sin volverse locos.  
> **Filosofía:** *"Captura sin fricción, organiza después. Las notas atómicas se conectan — los carpetazos se olvidan."*

---

## 📋 Tabla de Contenidos

- [✅ Casos de uso que cubre esta bóveda](#-casos-de-uso-que-cubre-esta-bóveda)
- [✨ Características principales](#-características-principales)
- [🗂️ Estructura de la bóveda](#️-estructura-de-la-bóveda)
- [🔄 Flujo de trabajo resumido](#-flujo-de-trabajo-resumido)
- [⌨️ Atajos de teclado](#️-atajos-de-teclado)
- [🔌 Plugins necesarios](#-plugins-necesarios)
- [🚀 Cómo usar esta plantilla](#-cómo-usar-esta-plantilla)
- [🔄 Cómo contribuir / Actualizar la plantilla](#-cómo-contribuir--actualizar-la-plantilla)
- [📄 Licencia](#-licencia)

---

## ✅ Casos de uso que cubre esta bóveda

Esta plantilla no es solo una carpeta con archivos, es una **navaja suiza para tu vida académica**. Mira todo lo que puedes hacer desde el minuto uno:

📝 **Tomar apuntes de clase** <br>Con un solo atajo, incluyendo metadatos (fecha, materia, estado de revisión).

⚡ **Capturar ideas rápidas** <br>Sin interrumpir el flujo de estudio (inbox `00-capturas`).

🗂️ **Organizar por materias** <br>Con una estructura homogénea (clases, temas, proyectos, laboratorios, recursos).

🧗 **Profundizar conceptos** <br>En notas de `temas/` con campo de dificultad (`🟢 baja`, `🟡 media`, `🔴 alta`) para priorizar repaso.

👥 **Gestionar proyectos por fases**<br>Con overview, tareas operativas, tablero kanban y **lista de integrantes** (el script te los pide al crear el proyecto), todo generado automáticamente.

✅ **Crear tareas con subtareas, fechas, prioridades y asignaciones**<br>Gracias al plugin Tasks. 

🔁 **Programar tareas recurrentes**<br>Usando la sintaxis `🔁 every week`.

🎯 **Visualizar el avance de proyectos**<br>Con tableros kanban integrados.

📔 **Llevar una bitácora de proyectos**<br>Mediante entradas etiquetadas en el diario.

🔬 **Registrar prácticas de laboratorio**<br>En una carpeta específica dentro de cada materia.

🚩 **Identificar conceptos difíciles**<br>Mediante queries que los muestran en los dashboards de materia y general.

🗺️ **Crear mapas de contenido (MOCs)**<br>Para conectar temas transversales entre materias.

🏆 **Consolidar conocimiento permanente**<br>Moviendo notas dominadas a `06-conocimiento/`.

🃏 **Repasar con flashcards**<br>Integrando Obsidian con Anki (plugin Obsidian_to_Anki).

📄 **Exportar cualquier nota a PDF**<br>Con un alias de Pandoc (`md2pdf`).

☁️ **Sincronizar la bóveda entre dispositivos**<br>Usando Git + GitHub (con el plugin Obsidian Git).

📜 **Mantener un historial de cambios**<br>Gracias al control de versiones.

📈 **Tener una visión global del progreso**<br>Con el `Dashboard General.md` y los informes por materia (dataview). 

> 💡 **¿Falta algo?** No te preocupes, la estructura es como el plástico caliente: se moldea a tus necesidades. Puedes añadir carpetas, cambiar plantillas o crear nuevas queries cuando quieras.

---

## ✨ Características principales

✔ **Estructura probada**<br>En carreras de ingeniería (y en la vida real).

✔ **Automatización con QuickAdd y Templater**<br>scripts que crean la carpeta de una materia o de un proyecto con todo lo necesario (¡adiós a crear carpetas a mano!).

✔ **Dashboards dinámicos**<br>Con Dataview, estado de clases, tareas, proyectos, dificultad, etc. Todo se actualiza solo.

✔ **Gestión de tareas avanzada**<br>Con Tasks (recurrentes, fechas, prioridades, asignaciones).

✔ **Sincronización profesional**<br>Con Git/GitHub (opcional pero recomendada).

✔ **Exportación a PDF**<br>Mediante Pandoc.

✔ **Totalmente personalizable**<br>Cambia plantillas, añade campos, crea nuevas queries. Tú mandas.

---

## 🗂️ Estructura de la bóveda

Para que te hagas una idea visual, aquí tienes el plano de tu futura bóveda en formato texto (puedes hacer clic en las carpetas si ves este archivo dentro de Obsidian):

![[estructura_general_boveda.excalidraw|800]]

```markdown
📦 boveda-obsidian-estudios/
│
├── 📁 00-capturas/                  → 🗑️ Inbox: ideas rápidas, capturas sin fricción
├── 📁 01-materias/                  → 📚 Materias en curso
│   └── 📁 {materia}/
│       ├── 📄 informe.md                        → 🧭 Dashboard de la materia
│       ├── 📁 clases/                            → 📅 Notas de clase (YYYY-MM-DD_tema.md)
│       ├── 📁 temas/                             → 🔬 Notas de profundización (concepto.md)
│       ├── 📁 proyectos/                          → 🚀 Proyectos de la materia
│       │   └── 📁 proy-NN_nombre/                  → 📂 Subcarpeta por proyecto
│       ├── 📁 tareas/                             → ✅ Tareas (si se prefiere fuera de proyectos)
│       ├── 📁 laboratorios/                        → 🧪 Prácticas de laboratorio
│       └── 📁 recursos/                            → 📎 PDFs, imágenes, etc.
├── 📁 02-proyectos/                  → 🌍 Proyectos transversales (opcional)
├── 📁 03-recursos/                    → 📦 Recursos globales
│   ├── 📁 excalidraw/                  → ✏️ Diagramas y mapas mentales
│   ├── 📁 imagenes/                     → 🖼️ Imágenes referenciadas en notas
│   ├── 📁 pdf/                          → 📘 PDFs descargados
│   └── 📁 papers/                       → 📄 Artículos académicos
├── 📁 04-plantillas/                  → 🧩 Plantillas Templater
├── 📁 05-diario/                       → 📆 Notas diarias (YYYY-MM-DD.md)
├── 📁 06-conocimiento/                 → 🏅 Notas permanentes (conceptos ya dominados)
├── 📁 07-mapas/                         → 🗺️ MOCs (maps of content) transversales
├── 📁 08-archivo/                       → 📦 Materias de semestres anteriores (solo lectura)
├── 📁 scripts/                           → 🤖 Scripts de QuickAdd (.js)
├── 📄 .gitignore                         → 🙈 Para evitar subir archivos innecesarios
├── 📄 LICENSE                            → ⚖️ Licencia MIT
└── 📄 README.md                          → 📖 Este archivo
```

---

## 🔄 Flujo de trabajo resumido

Aquí tienes el **baile de la productividad** en 8 pasos:

1. **Crear una materia** → `Ctrl+Shift+M` (un script crea la carpeta y su `informe.md` mágico).

2. **Tomar apuntes en clase** → `Ctrl+Shift+C` (se crea una nota en `clases/` con la fecha y un lugar para escribir).

3. **Revisar después de clase** → Abres el `informe.md` de la materia, ves las clases pendientes (🟡), las lees, y cambias su estado a `🟢 revisado`.

4. **Iniciar un proyecto** → `Ctrl+Shift+P` (el script te pedirá **nombre e integrantes** y creará una subcarpeta con overview, tareas y kanban, ¡todo en orden y con el equipo ya registrado!).

5. **Gestionar tareas** → Dentro de la nota de tareas del proyecto, escribes tareas con fechas y prioridades (el plugin Tasks las reconoce). Además, el script de tareas (`Ctrl+Shift+T`) te ofrecerá elegir entre los integrantes del proyecto para asignarlas.

6. **Registrar en el diario** → `Ctrl+Shift+Y` (nota diaria con espacio para tu bitácora; si usas tags como `#proy-01`, luego puedes filtrarlas).

7. **Consultar el progreso** → El `Dashboard General.md` y los informes de materia se actualizan solos (gracias Dataview).

8. **Al final del semestre** → Mueve la carpeta de la materia a `08-archivo/`. Las notas de conocimiento se quedan en `06-conocimiento/` para siempre.

> 🕺 **¡Así de fácil!** Luego, cuando lo repitas varias veces, se convierte en un hábito.

---

## ⌨️ Atajos de teclado

> 🛈 **info**:
> Para programar los atajos, entrar a:
> Configuraciones 🢡 Atajos de teclados 🢡 buscar el comando asociado

| Atajo          | Acción                             | Mnemotecnia (para que no los olvides) |
| -------------- | ---------------------------------- | ------------------------------------- |
| `Ctrl+Shift+C` | Nueva nota de clase                | **C** de **C**lase                    |
| `Ctrl+Shift+E` | Nueva nota de tema / concepto      | **E** (por "t**E**ma")                |
| `Ctrl+Shift+P` | Nuevo proyecto (ejecuta script)    | **P** de **P**royecto                 |
| `Ctrl+Shift+Y` | Entrada del diario de hoy          | **Y** (por "da**Y**")                 |
| `Ctrl+Shift+A` | Captura rápida → `00-capturas/`    | **A** de **A**punte rápido            |
| `Ctrl+Shift+M` | Inicializar nueva materia (script) | **M** de **M**ateria                  |
| `Ctrl+Shift+O` | Abrir Omnisearch                   | **O** de **O**mnisearch               |

> 🤓 **Truco:**
> Si usas Mac, cambia `Ctrl` por `Cmd` mentalmente.
> *(Estos atajos los configura QuickAdd; si no te gustan, puedes cambiarlos en Ajustes → Atajos de teclado*

---

## 🔌 Plugins necesarios

Para que todo esto funcione como la seda, **ya vienen incluidos en la carpeta `.obsidian/plugins/`**. Al abrir la bóveda, Obsidian los cargará automáticamente. No necesitas instalarlos manualmente.  
Los plugins incluidos son:

|Plugin|¿Para qué sirve?|
|---|---|
|**Templater**|Para usar plantillas con preguntas (como "¿de qué materia es esta clase?").|
|**Dataview**|Para hacer consultas mágicas y que los dashboards se actualicen solos.|
|**QuickAdd**|Para crear atajos y ejecutar scripts (como los de nueva materia o proyecto).|
|**Tasks**|Para gestionar tareas con fechas, prioridades y hasta repeticiones.|
|**Kanban**|Para tener tableros estilo Trello dentro de Obsidian.|
|**Calendar**|Para ver un calendario y hacer clic en los días (se conecta con el diario).|
|**Excalidraw**|Para dibujar diagramas y mapas mentales (como el de la estructura).|
|**Omnisearch**|Para buscar como Google en todas tus notas (muy rápido).|
|**Advanced Tables**|Para trabajar con tablas en Markdown sin volverte loco.|
|**Obsidian_to_Anki**|(Opcional) Para enviar flashcards a Anki y repasar con el método espaciado.|
|**Obsidian Git**|(Opcional pero recomendado) Para sincronizar con GitHub y tener copias de seguridad.|

> 📦 **Nota:** Si algún plugin se actualiza, puedes gestionarlo desde la comunidad. Pero la versión incluida es estable y funcional.

---

## 🚀 Cómo usar esta plantilla

Tienes dos formas de empezar, según si quieres tener tu propio repositorio en GitHub o solo usar la bóveda localmente.

### Opción 1: Descargar para uso personal (sin Git)

Ideal si solo quieres probar o no te interesa el control de versiones.

1. Ve a [https://github.com/JavierHidalgoR/boveda-ingenieria-informatica](https://github.com/JavierHidalgoR/boveda-ingenieria-informatica).

2. Haz clic en el botón verde **"Code"** y luego en **"Download ZIP"**.

3. Descomprime el ZIP en la carpeta donde quieras tener tu bóveda (por ejemplo, `Documentos/Mi Boveda`).

4. Abre Obsidian, haz clic en "Abrir carpeta como bóveda" y selecciona esa carpeta.

5. ¡Listo! Todos los plugins y atajos ya están configurados. Empieza a usar los atajos de teclado.

### Opción 2: Usar como plantilla de GitHub (para crear tu propio repositorio)

Recomendada si quieres tener tu bóveda versionada y poder recibir actualizaciones de la plantilla.

1. En GitHub, asegúrate de estar logueado y ve a [este repositorio](https://github.com/JavierHidalgoR/boveda-ingenieria-informatica).

2. Haz clic en el botón **"Use this template"** (verde, arriba a la derecha).

3. Ponle nombre a tu nuevo repositorio (por ejemplo, `mi-boveda-fisica`) y descríbelo.

4. Clona **tu nuevo repositorio** en tu ordenador:

    ```bash
    git clone https://github.com/tu-usuario/mi-boveda-fisica.git
    ```

5. Abre Obsidian con esa carpeta.

6. Si más adelante la plantilla original se actualiza, puedes fusionar los cambios siguiendo las instrucciones de la sección siguiente.

> 🎁 **Ventaja de la opción 2:** Tendrás tu historial guardado en GitHub y podrás sincronizar entre varios ordenadores usando `git pull` y `git push`.

---

## 🔄 Cómo contribuir / Actualizar la plantilla

### Si quieres proponer mejoras (para el repositorio original)

¿Se te ocurre una idea genial que podría ayudar a otros? ¡Genial! Sigue estos pasos:

1. Haz un **fork** de este repositorio (botón "Fork" arriba a la derecha).

2. Clona tu fork en tu ordenador.

3. Crea una rama con tu mejora:

    ```bash
    git checkout -b mejora-flashcards
    ```

4. Realiza los cambios (nuevos scripts, plantillas, documentación, etc.).

5. Haz commit y push a tu fork:

    ```bash
    git add .
    git commit -m "Añadida nueva plantilla para flashcards"
    git push origin mejora-flashcards
    ```

6. Abre un **Pull Request** en este repositorio describiendo tus cambios y cómo mejoran la plantilla.

### Si has creado tu propia bóveda a partir de esta plantilla y quieres actualizarla con los últimos cambios de la plantilla

Asumiendo que creaste tu repositorio usando el botón "Use this template", puedes hacer lo siguiente:

```bash
# Añade el repositorio original como "upstream" (solo una vez)
git remote add upstream https://github.com/JavierHidalgoR/boveda-ingenieria-informatica.git
# Trae los cambios de la plantilla
git fetch upstream
# Fusiona los cambios en tu rama principal (main)
git checkout main
git merge upstream/main
# Si hay conflictos, resuélvelos (Git te avisará) y luego haz commit
git add .
git commit -m "Merge de actualizaciones de la plantilla"
# Sube los cambios a tu repositorio
git push origin main
```

De esta forma, puedes beneficiarte de las nuevas funcionalidades que se añadan a la plantilla sin perder tus notas personales.  
**Eso sí**: Si has modificado algún archivo que también haya cambiado en la plantilla (por ejemplo, el README o una plantilla), tendrás que resolver los conflictos manualmente. Pero no es tan difícil, Git te marca las diferencias.

> 💡 **Consejo:** Si personalizas mucho la estructura, quizá prefieras no actualizar automáticamente, sino tomar solo las mejoras que te interesen de forma manual (copiando los cambios que quieras).

---

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**. Básicamente, puedes usar, copiar, modificar y distribuir este contenido libremente, siempre que incluyas el aviso de copyright original.  
[Leer más sobre la licencia MIT](https://opensource.org/licenses/MIT).

---

## 🎉 ¡Y eso es todo

Esperamos que esta plantilla te sea tan útil como nos lo ha sido a nosotros.  
Si tienes dudas, sugerencias o simplemente quieres compartir cómo la estás usando, abre un [issue](https://github.com/JavierHidalgoR/boveda-ingenieria-informatica/issues) o escríbeme.

---

## 🙏 Agradecimientos

Esta plantilla no sería posible sin el trabajo increíble de la comunidad de Obsidian. Un agradecimiento especial a:

- **Licencia MIT** para los creadores de los plugins que hacen magia:

  - [Templater](https://github.com/SilentVoid13/Templater) de SilentVoid

  - [Dataview](https://github.com/blacksmithgu/obsidian-dataview) de Michael Brenan

  - [QuickAdd](https://github.com/chhoumann/quickadd) de Christian Houmann

  - [Tasks](https://github.com/obsidian-tasks-group/obsidian-tasks) de Clare Macrae y colab.

  - [Kanban](https://github.com/mgmeyers/obsidian-kanban) de mgmeyers

  - [Excalidraw](https://github.com/zsviczian/obsidian-excalidraw-plugin) de Zsolt Viczian

  - [Obsidian Git](https://github.com/denolehov/obsidian-git) de denolehov

  - [Omnisearch](https://github.com/scambier/obsidian-omnisearch) de Simon Cambier

  - Y a todos los demás desarrolladores que mantienen vivo el ecosistema.

- A la **comunidad de Obsidian** por sus ideas, debates y ejemplos que inspiraron esta estructura.

- A mis **compañeros de carrera** que con sus preguntas y necesidades ayudaron a dar forma a este sistema.

- Y a ti, **querido usuario**, por darle una oportunidad a esta forma de organizar tu conocimiento. Espero que te sea tan útil como a mí.
  
---

**¡Que tu conocimiento crezca en red!** 🧠✨
