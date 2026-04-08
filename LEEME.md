# 📖 Guía de uso — Bóveda de Estudios

> **Para quién es esto:** Para mí mismo cuando no recuerde cómo funciona algo.
> Escrito de forma simple, sin tecnicismos innecesarios.

---

## ¿Qué es esta bóveda y para qué sirve?

Es mi sistema personal de estudio construido en Obsidian. Combina tres cosas:
- **Organización**: cada materia tiene su propio espacio, sus clases y sus conceptos.
- **Memoria**: las flashcards se sincronizan con Anki para repasar con algoritmo científico.
- **Gestión**: los proyectos y tareas se gestionan desde aquí con tableros Kanban.

El objetivo es no estudiar más horas, sino estudiar mejor.

---

## Estructura de carpetas — qué va en cada una

```
boveda-estudios/  
│  
├── 00_Inbox/ → La bandeja de entrada. Todo lo que capturás en el momento  
│ └── Daily/ → Las notas diarias se guardan aquí automáticamente  
│  
├── 01_Notes/ → Todas tus notas de estudio  
│ ├── Lectures/ → Un archivo por cada clase que tomes  
│ │ └── materia/ → Subcarpeta por materia  
│ └── Concepts/ → Notas atómicas: UNA idea = UN archivo  
│ └── materia/ → Subcarpeta por materia  
│  
├── 02_Projects/ → Aquí van los proyectos  
│ ├── proyecto-chico.md → Proyectos simples (una sola nota)  
│ └── nombre-proyecto-grande/ → Proyectos grandes (carpeta con estructura)  
│ ├── _proyecto.md  
│ ├── _tablero.kanban.md  
│ ├── tareas/  
│ ├── recursos/  
│ └── reuniones/  
│  
├── 03_Areas/ → El "índice maestro" de cada materia (MOC)  
│ └── materia/ → Carpeta de la materia con su MOC adentro  
│  
├── 04_Resources/ → PDFs, libros, referencias externas por materia  
│  
├── 05_Reviews/ → Revisiones periódicas  
│ └── Weekly/ → Las revisiones semanales se guardan aquí  
│  
├── 06_Archive/ → Todo lo que ya terminó o ya no está activo  
│  
└── _Templates/ → Las plantillas. No tocar a menos que sepas qué hacés  
│  
└── scripts/ → Scripts de automatización (ej: nueva-materia.js, nuevo-proyecto-grande.js)
```


> **Regla de oro:** Si no sabés dónde va algo, va en `00_Inbox/`. Después lo movés.

---

## Atajos de teclado importantes

| Acción                           | Atajo                                        |
| -------------------------------- | -------------------------------------------- |
| Abrir el buscador de comandos    | `Ctrl + P`                                   |
| Crear una nueva materia          | `Ctrl + Alt + M` (creación manual en atajos) |
| Crear un proyecto grande         | `Ctrl + Alt + G` (asignar manualmente)       |
| Sincronizar flashcards con Anki  | `Ctrl + Alt + A` (creación manual en atajos) |
| Crear nota nueva                 | `Ctrl + N`                                   |
| Crear nota nueva (con plantilla) | `Alt + N`                                    |

---

## Flujo de trabajo — el ciclo completo

Este es el ciclo que repetís cada vez que cursás una clase:

```
CLASE → INBOX → CORNELL → ATÓMICA → ANKI → REPASO DIARIO
```


### Durante la clase
1. Creás una nota nueva (`Ctrl+N`) y le aplicás la plantilla `lecture-note`
2. Solo completás la sección **"Notas de Clase"** — capturás todo sin filtrar
3. En tu daily note (`00_Inbox/Daily/`) hacés un brain dump rápido (5 min): dudas, ideas sueltas

### Post-clase (mismo día — máx 24 horas)
Este es el paso más importante. La mayoría lo saltea y por eso olvida todo.

1. **Sin mirar las notas**: escribís las preguntas en la columna Cornell
2. Escribís el resumen con tus propias palabras (active recall)
3. Marcás los conceptos que hay que convertir en notas atómicas
4. Cambiás el `estado` del frontmatter de `🟡 sin-revisar` a `🟢 procesada`

### Procesamiento (esa tarde o al día siguiente)
Por cada concepto identificado:
1. Creás una nota nueva y le aplicás la plantilla `concept-note`
2. La completás usando el método Feynman: primero la definición simple, luego la técnica
3. La enlazás con otros conceptos con `[[nombre-del-concepto]]`
4. Los bloques Anki ya están listos en la plantilla — solo completar el Back:

### Sincronización con Anki
Con **Anki abierto** (necesario para que AnkiConnect funcione):
`Ctrl+P` → "Obsidian to Anki: Sync"

Eso envía todas las tarjetas nuevas a Anki automáticamente.

### Repaso diario (15–20 min)
Abrís Anki y repassás las tarjetas del día. El algoritmo decide cuántas y cuáles.

---

## Cómo crear una nueva materia

1. Presionás `Ctrl+Alt+M`
2. Completás los 4 prompts:
   - **Slug**: nombre corto sin espacios (ej: `calculo-1`)
   - **Nombre completo**: como aparece en la facultad (ej: `Cálculo 1`)
   - **Semestre**: (ej: `1-2026`)
   - **Docente**: opcional, Enter para omitir
3. El sistema crea automáticamente las 4 carpetas y abre el MOC listo para usar

---

## Cómo crear una nota de clase

1. Creás una nueva nota dentro de `01_Notes/Lectures/materia/`
2. Nombre recomendado: `clase-YYYY-MM-DD-tema-breve`
3. `Ctrl+P` → "Templater: Insert Template" → seleccionás `lecture-note`
4. Completás el frontmatter (materia, docente)

---

## Cómo crear una nota atómica (concepto)

1. Creás una nueva nota dentro de `01_Notes/Concepts/materia/`
2. Nombre recomendado: `nombre-del-concepto` (ej: `mrp-material-requirements-planning`)
3. `Ctrl+P` → "Templater: Insert Template" → seleccionás `concept-note`
4. Completás las secciones: definición simple → técnica → ejemplo → errores → flashcards

---

## Cómo crear un proyecto o práctico (proyecto chico)

1. Creás una nueva nota en `02_Projects/`
2. Nombre recomendado: `MATERIA-nombre-del-proyecto`
3. `Ctrl+P` → "Templater: Insert Template" → seleccionás `project-note`
4. El tablero Kanban está embebido en la nota (solo para proyectos simples).

---

## Cómo crear un proyecto grande (con estructura de carpetas)

Para trabajos finales, desarrollos de software con varias etapas, investigaciones extensas, etc.

### 1. Crear el proyecto
- Usá el comando `QuickAdd: Nuevo Proyecto Grande` (podés asignarle el atajo `Ctrl+Alt+G` en Configuración → Atajos de teclado).
- Completá los datos:
  - **Slug**: identificador sin espacios (ej: `sis2-trabajo-final`)
  - **Nombre completo**: título del proyecto
  - **Materia**: slug de la materia (debe coincidir con el MOC)
  - **Fecha de entrega**: podés usar formato `YYYY-MM-DD` o `DD/MM/YYYY` (el script lo normaliza)
  - **Semestre**: opcional

### 2. Estructura generada automáticamente
```
02_Projects/slug-proyecto/  
├── _proyecto.md # Nota principal: objetivo, requisitos, dashboard Dataview  
├── _tablero.kanban.md # Tablero Kanban visual (archivo independiente)  
├── tareas/ # Cada tarea es una nota aparte  
│ └── tarea-ejemplo-investigacion.md  
├── recursos/ # PDFs, imágenes, diagramas  
└── reuniones/ # Actas o notas de reuniones
```


### 3. Usar el tablero Kanban visual
- Abrí `_tablero.kanban.md`. Obsidian lo abre directamente como tablero (por la extensión `.kanban.md`).
- Verás columnas: Backlog, Por hacer esta semana, En progreso, En revisión, Completado.
- **Para agregar una tarea nueva**: hacé clic en "Add card" en la columna correspondiente y escribí `[[tareas/nombre-de-la-tarea]]`. Presioná Enter.
- **Para editar una tarea**: hacé clic en el nombre de la tarjeta → se abre la nota de tarea (aún vacía).
- **Para mover tareas**: arrastrá la tarjeta de una columna a otra.
  - *Importante:* mover la tarjeta NO actualiza el campo `estado` en el frontmatter de la nota de tarea. Para que el dashboard Dataview se actualice, abrí la nota de tarea y cambiá `estado: backlog` → `en-progreso` → `completado` manualmente.

### 4. Crear tareas completas (con metadatos)
- Dentro de la carpeta `tareas/`, creá una nota nueva.
- Aplicá la plantilla `tarea-proyecto` (`Alt+N` o `Ctrl+P` → Templater: Insert Template).
- Completá los prompts: proyecto, materia, prioridad, fecha límite, responsable.
- La plantilla genera el frontmatter con `estado`, `prioridad`, `fecha-limite`, etc. Luego completá la descripción y el checklist.

### 5. Ver el progreso en el dashboard
- Abrí `_proyecto.md`. Las tablas Dataview muestran automáticamente:
  - Tareas en progreso
  - Backlog (pendientes)
  - Completado recientemente
- También podés ver el progreso desde el **MOC de la materia** (sección "Proyectos activos" y "Tareas pendientes").

### 6. Formato de fechas
- El script acepta `YYYY-MM-DD` o `DD/MM/YYYY` (ej: `20/05/2026` se convierte a `2026-05-20`).
- Si ingresás una fecha inválida, te pedirá que la corrijas.
- Las fechas se guardan sin comillas para que Dataview las interprete como tipo `date`.

---

## Sintaxis de las flashcards para Anki

Las flashcards van al final de cada nota, en bloques así:

```
START  
Básico  
¿Pregunta?  
Back: Respuesta completa.  
Tags: materia tema subtema  
END
```


**Reglas:**
- La palabra `Básico` es el tipo de tarjeta (en español porque Anki está en español)
- `Tags:` separá con espacios, no comas
- Un bloque START/END = una tarjeta
- Podés tener varios bloques en la misma nota

---

## Rutina semanal recomendada

| Momento | Duración | Qué hacer |
|---|---|---|
| **Lunes–Viernes mañana** | 15–20 min | Repasar flashcards en Anki |
| **Post-clase** | 30–45 min | Procesar la nota Cornell + crear conceptos |
| **Sábado** | 1 hora | Revisión semanal (`weekly-review`) + revisar tableros de proyectos grandes |
| **Domingo** | 30 min | Planificar la semana siguiente |

---

## Estados de las notas

Las notas de clase tienen un campo `estado` en el frontmatter que indica en qué paso del flujo están:

| Estado | Significado |
|---|---|
| `🟡 sin-revisar` | Recién tomada en clase, no procesada aún |
| `🟢 procesada` | Ya tiene preguntas Cornell, resumen y conceptos extraídos |

Las notas de concepto tienen:

| Estado | Significado |
|---|---|
| `🔵 borrador` | Recién creada, falta completar secciones |
| `🟢 revisada` | Completa, con flashcards y links |

Las notas de tarea de proyectos grandes tienen:

| Estado | Significado |
|---|---|
| `backlog` | Pendiente, aún no empezada |
| `en-progreso` | Se está trabajando activamente |
| `revision` | Terminada, necesita revisión |
| `completado` | Finalizada (con fecha de completado) |

---

## Plugins instalados y para qué sirven

| Plugin | Para qué lo uso |
|---|---|
| **Templater** | Inserta las plantillas con variables automáticas (fecha, título) |
| **Dataview** | Las consultas que muestran listas de clases, conceptos y proyectos en el MOC y Dashboard |
| **QuickAdd** | Los comandos `Ctrl+Alt+M` (nueva materia) y `Ctrl+Alt+G` (nuevo proyecto grande) |
| **Tasks** | Las tareas con fecha `📅 YYYY-MM-DD` y los bloques `\`\`\`tasks` del Dashboard |
| **Kanban** | Los tableros de los proyectos (archivos `.kanban.md`) |
| **Calendar** | Vista de calendario en el panel lateral |
| **Periodic Notes** | Genera automáticamente las notas diarias y semanales |
| **Obsidian to Anki** | Sincroniza los bloques START/END con Anki |

---

## Solución a problemas comunes

**"Dataview no muestra nada en el MOC"**
→ Verificá que el campo `materia` en el frontmatter de tus notas coincide exactamente con el slug de la materia (ej: `sistemas-informacion-2`, no `Sistemas de Información 2`).

**"Anki no recibe las flashcards"**
→ Asegurate de que Anki está abierto antes de sincronizar. AnkiConnect necesita que Anki esté corriendo.

**"Templater no inserta la fecha"**
→ Verificá en la configuración de Templater que la carpeta de plantillas está seteada como `_Templates`.

**"El MOC no muestra mis notas de clase"**
→ Revisá que las notas estén en la subcarpeta correcta: `01_Notes/Lectures/slug-de-la-materia/`.

**"El tablero Kanban no se abre como tablero visual"**
→ Asegurate de que el archivo tenga extensión `.kanban.md` y que el plugin Kanban esté activado. Hacé doble clic en el archivo; debería abrirse automáticamente como tablero.

**"El script de nuevo proyecto grande no crea las carpetas"**
→ Verificá que QuickAdd esté configurado como Macro y que la ruta del script sea correcta. Revisá la consola de desarrollador (`Ctrl+Shift+I`) para ver errores.