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
├── 00_Inbox/          → La bandeja de entrada. Todo lo que capturás en el momento
│   └── Daily/         → Las notas diarias se guardan aquí automáticamente
│
├── 01_Notes/          → Todas tus notas de estudio
│   ├── Lectures/      → Un archivo por cada clase que tomes
│   │   └── materia/   → Subcarpeta por materia
│   └── Concepts/      → Notas atómicas: UNA idea = UN archivo
│       └── materia/   → Subcarpeta por materia
│
├── 02_Projects/       → Un archivo por proyecto o parcial activo
│
├── 03_Areas/          → El "índice maestro" de cada materia (MOC)
│   └── materia/       → Carpeta de la materia con su MOC adentro
│
├── 04_Resources/      → PDFs, libros, referencias externas por materia
│
├── 05_Reviews/        → Revisiones periódicas
│   └── Weekly/        → Las revisiones semanales se guardan aquí
│
├── 06_Archive/        → Todo lo que ya terminó o ya no está activo
│
└── _Templates/        → Las plantillas. No tocar a menos que sepas qué hacés
    └── scripts/       → Scripts de automatización (ej: nueva-materia.js)
```

> **Regla de oro:** Si no sabés dónde va algo, va en `00_Inbox/`. Después lo movés.

---

## Atajos de teclado importantes

| Acción                           | Atajo                                        |
| -------------------------------- | -------------------------------------------- |
| Abrir el buscador de comandos    | `Ctrl + P`                                   |
| Crear una nueva materia          | `Ctrl + Alt + M` (creación manual en atajos) |
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

## Cómo crear un proyecto o práctico

1. Creás una nueva nota en `02_Projects/`
2. Nombre recomendado: `MATERIA-nombre-del-proyecto`
3. `Ctrl+P` → "Templater: Insert Template" → seleccionás `project-note`
4. El tablero Kanban ya está integrado en la plantilla

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
| **Sábado** | 1 hora | Revisión semanal (`weekly-review`) |
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

---

## Plugins instalados y para qué sirven

| Plugin | Para qué lo uso |
|---|---|
| **Templater** | Inserta las plantillas con variables automáticas (fecha, título) |
| **Dataview** | Las consultas que muestran listas de clases, conceptos y proyectos en el MOC y Dashboard |
| **QuickAdd** | El comando `Ctrl+Alt+M` para crear materias con el script |
| **Tasks** | Las tareas con fecha `📅 YYYY-MM-DD` y los bloques `\`\`\`tasks` del Dashboard |
| **Kanban** | Los tableros de los proyectos |
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

