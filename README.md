<div align="center">

# 🎓 Obsidian Student Vault

**Sistema de estudio y gestión académica para Obsidian** diseñado para estudiantes universitarios de Ingeniería

[![Obsidian](https://img.shields.io/badge/Obsidian-483699?style=for-the-badge&logo=obsidian&logoColor=white)](https://obsidian.md)
[![Anki](https://img.shields.io/badge/Anki-0091EA?style=for-the-badge&logo=anki&logoColor=white)](https://apps.ankiweb.net)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![Template](https://img.shields.io/badge/Use%20this%20template-2ea44f?style=for-the-badge)](../../generate)

</div>

---

## ¿Qué es esto?

Una bóveda de Obsidian lista para usar como sistema de estudio universitario.
Combina técnicas de aprendizaje respaldadas por evidencia científica con un flujo
de trabajo concreto y herramientas integradas.

**El problema que resuelve:** los estudiantes toman apuntes pasivos que nunca vuelven
a revisar, y estudian de forma desorganizada antes de cada examen. Este sistema convierte
cada clase en un ciclo activo de captura → procesamiento → memoria → repaso.

---

## ✨ Características

- 📝 **Apuntes en formato Cornell** — estructura que fuerza el active recall post-clase
- 🧩 **Notas atómicas (Zettelkasten)** — una idea por nota, interconectadas con `[[links]]`
- 🃏 **Flashcards integradas con Anki** — los bloques `START/END` se sincronizan directo a Anki
- 🚀 **Gestión de proyectos con Kanban** — tableros visuales dentro de cada nota de proyecto (para proyectos chicos)
- 🏗️ **Proyectos grandes** — estructura de carpetas por proyecto, tareas atómicas, tablero Kanban independiente (archivo `.kanban.md`), dashboard automático con Dataview y validación de fechas
- 📊 **Dashboard automático con Dataview** — consultas que muestran todo en tiempo real
- ⚡ **Automatización** — comandos para crear una nueva materia o un proyecto grande con un atajo de teclado
- 📖 **Documentación interna** — cada plantilla tiene comentarios explicativos invisibles en lectura
- 🗺️ **MOC por materia** — índice maestro que conecta clases, conceptos y proyectos

---

## 🧠 Base científica

| Técnica | Implementación en este sistema |
|---|---|
| **Active Recall** | Columna de preguntas Cornell + flashcards Anki |
| **Spaced Repetition** | Algoritmo SM-2 de Anki |
| **Método Feynman** | Estructura de notas atómicas (definición simple → técnica → ejemplo) |
| **Zettelkasten** | Links `[[]]` entre notas atómicas |
| **Método Cornell** | Plantilla de clase con 3 zonas: notas / preguntas / resumen |

---

## 📁 Estructura del repositorio

```text
obsidian-student-vault/
│
├── 00_Inbox/                # Captura rápida sin procesar
│   └── Daily/               # Notas diarias automáticas
├── 01_Notes/
│   ├── Lectures/            # Apuntes de clase (formato Cornell)
│   └── Concepts/            # Notas atómicas (una idea = un archivo)
├── 02_Projects/             # Proyectos, parciales y prácticos
│   ├── proyecto-chico.md    # Proyecto simple (una nota)
│   └── nombre-proyecto-grande/   # Carpeta con estructura interna
│       ├── _proyecto.md
│       ├── _tablero.kanban.md
│       ├── tareas/
│       ├── recursos/
│       └── reuniones/
├── 03_Areas/                # MOC (índice maestro) por materia
├── 04_Resources/            # PDFs, bibliografía, recursos externos
├── 05_Reviews/
│   └── Weekly/              # Revisiones semanales
├── 06_Archive/              # Contenido inactivo o terminado
│
├── _Templates/              # Todas las plantillas
│   ├── lecture-note.md
│   ├── concept-note.md
│   ├── project-note.md      # Para proyectos simples
│   ├── tarea-proyecto.md    # Para tareas de proyectos grandes
│   ├── moc-materia.md
│   ├── daily-note.md
│   └── weekly-review.md
│
├── scripts/
│   ├── nueva-materia.js
│   └── nuevo-proyecto-grande.js
│
├── Dashboard-Global.md      # Panel central con consultas Dataview
└── LEEME.md                 # Guía de uso completa (en español)
```

---

## 🚀 Instalación y configuración

### Requisitos previos

- [Obsidian](https://obsidian.md/) v1.4 o superior
    
- [Anki](https://apps.ankiweb.net/) con el plugin [AnkiConnect](https://ankiweb.net/shared/info/2055492159) (código: `2055492159`)
    

### Paso 1 — Usar este template

Hacé clic en **"Use this template"** → **"Create a new repository"** en GitHub.  
Luego clonalo en tu máquina:

bash

git clone https://github.com/TU-USUARIO/TU-REPO.git

O descargá el ZIP desde GitHub → Code → Download ZIP.

### Paso 2 — Abrir en Obsidian

`Obsidian → Abrir bóveda → Abrir carpeta como bóveda` → seleccionás la carpeta descargada.

### Paso 3 — Activar plugins (ya vienen incluidos)

Los plugins ya están descargados dentro de `.obsidian/plugins/`. Solo hay que habilitarlos:

`⚙️ → Complementos de la comunidad` → en la pestaña **"Plugins instalados"** activá cada uno de la siguiente lista:

|Plugin|Función|
|---|---|
|**Templater**|Plantillas dinámicas con variables|
|**Dataview**|Consultas automáticas en el Dashboard y MOC|
|**QuickAdd**|Automatización para crear materias y proyectos grandes|
|**Tasks**|Gestión de tareas con fechas|
|**Obsidian Kanban**|Tableros visuales en proyectos (archivos `.kanban.md`)|
|**Calendar**|Vista de calendario lateral|
|**Periodic Notes**|Notas diarias y semanales automáticas|
|**Obsidian to Anki**|Sincronización de flashcards con Anki|
|**Minimal Theme Settings**|Configuración del tema visual|
|**Style Settings**|Personalización avanzada de CSS|
|**Hider**|Oculta elementos de UI innecesarios|

> **Nota:** Si algún plugin no aparece en la lista de instalados, podés instalarlo normalmente desde la comunidad. Sin embargo, todos los archivos necesarios ya están en la bóveda, por lo que deberían aparecer automáticamente.

### Listo! Ya puedes usarlo

Usalo para aprender todo lo que quieras, espero que sea útil.

---

## 📋 Flujo de trabajo

```text
CLASE → INBOX → CORNELL → ATÓMICA → ANKI → REPASO DIARIO
```

### 1. Durante la clase

Creás una nota con la plantilla `lecture-note` y completás solo la sección **Notas de Clase**.

### 2. Post-clase (máx 24 horas) — el paso más importante

Sin mirar las notas: completás las **preguntas Cornell** y el **resumen**. Esto es active recall puro.

### 3. Procesamiento

Por cada concepto identificado: creás una nota atómica con `concept-note`, la completás con el método Feynman y la enlazás con `[[otros-conceptos]]`.

### 4. Sincronización con Anki

Con Anki abierto: `Ctrl+P → Obsidian to Anki: Sync`. Los bloques `START/END` de tus notas llegan automáticamente a Anki.

### 5. Repaso diario (15–20 min)

Abrís Anki cada mañana y repasás las tarjetas del día. El algoritmo SM-2 decide cuáles.

### 6. Revisión semanal (sábado, 1 hora)

La nota `weekly-review` se genera automáticamente. Las consultas Dataview muestran qué clases quedaron sin procesar y el estado de los proyectos (incluyendo los grandes).

---

## ⌨️ Atajos de teclado (personalizar en los atajos de Obsidian de ser necesario)

|Acción|Atajo|
|---|---|
|Paleta de comandos|`Ctrl+P`|
|Crear nueva materia (personalizado)|`Ctrl+Alt+M`|
|Crear nuevo proyecto grande (personalizado)|`Ctrl+Alt+G`|
|Sincronizar con Anki (personalizado)|`Ctrl+Alt+A`|
|Insertar plantilla|`Alt+N`|
|Abrir nota diaria|Plugin Calendar (panel lateral)|

> _Los atajos "personalizados" pueden necesitar asignarse manualmente en Configuración → Atajos de teclado._

---

## 🃏 Sintaxis de flashcards para Anki

Las tarjetas van en cualquier nota usando este formato:

```text
START
Básico
¿Pregunta?
Back: Respuesta completa.
Tags: materia tema
END
```

> **Nota:** el tipo de tarjeta es `Básico` si Anki está configurado en **español**.  
> Si tu Anki está en inglés, usá `Basic`.

---

## 📖 Documentación

La guía completa de uso (en español) está en [`LEEME.md`](https://leeme.md/) dentro de la bóveda.  
Cubre: estructura de carpetas, atajos, flujo completo, estados de notas, solución a problemas comunes, y **gestión de proyectos grandes con Kanban independiente**.

---

## 🛠️ Stack

|Herramienta|Rol|
|---|---|
|[Obsidian](https://obsidian.md/)|Editor de notas y base del sistema|
|[Anki](https://apps.ankiweb.net/)|Motor de repetición espaciada (algoritmo SM-2)|
|[Dataview](https://github.com/blacksmithgu/obsidian-dataview)|Consultas dinámicas sobre las notas|
|[Templater](https://github.com/SilentVoid13/Templater)|Plantillas con lógica y variables|
|[QuickAdd](https://github.com/chhoumann/quickadd)|Automatización y macros|
|[Minimal Theme](https://github.com/kepano/obsidian-minimal)|Interfaz minimalista|

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si encontrás un bug o tenés una mejora:

1. Hacé un fork del repositorio
    
2. Creá una rama: `git checkout -b mejora/nombre-de-la-mejora`
    
3. Commiteá los cambios: `git commit -m 'Agrega: descripción de la mejora'`
    
4. Hacé push: `git push origin mejora/nombre-de-la-mejora`
    
5. Abrí un Pull Request
    

---

## 📄 Licencia

Distribuido bajo la licencia MIT. Ver [`LICENSE`](https://license/) para más detalles.

---

<div align="center">

Hecho con ❤️ para estudiantes de Ingeniería

</div> 