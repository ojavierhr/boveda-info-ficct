#!/bin/bash
# =============================================================================
# Script 3: Documentación de la bóveda
# Crea LEEME.md (guía general) y actualiza todas las plantillas con comentarios
# =============================================================================

set -e

BASE="/home/ojavierhr/Documentos/bovedas-obsidian/boveda-estudios"
TPL="$BASE/_Templates"

GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}  Documentando la bóveda...             ${NC}"
echo -e "${BLUE}========================================${NC}\n"

# =============================================================================
# 1. GUÍA GENERAL — LEEME.md
# =============================================================================
echo -e "${YELLOW}📖 Creando guía general (LEEME.md)...${NC}"

cat << 'DOC' > "$BASE/LEEME.md"
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

| Acción | Atajo |
|---|---|
| Abrir el buscador de comandos | `Ctrl + P` |
| Crear una nueva materia | `Ctrl + Alt + M` |
| Sincronizar flashcards con Anki | `Ctrl + P` → "Obsidian to Anki: Sync" |
| Abrir/cerrar panel lateral | `Ctrl + B` |
| Crear nota nueva | `Ctrl + N` |
| Insertar plantilla (Templater) | `Ctrl + Alt + T` o `Ctrl + P` → "Templater" |

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

DOC

echo -e "${GREEN}✅ LEEME.md creado${NC}\n"

# =============================================================================
# 2. PLANTILLAS CON COMENTARIOS
# Los comentarios %% ... %% son invisibles en modo lectura de Obsidian
# Solo se ven en modo edición — perfectos para documentación interna
# =============================================================================
echo -e "${YELLOW}📝 Actualizando plantillas con comentarios...${NC}"

# -----------------------------------------------------------------------------
# PLANTILLA: lecture-note.md
# -----------------------------------------------------------------------------
cat << 'TEMPLATE' > "$TPL/lecture-note.md"
%% ============================================================
PLANTILLA: NOTA DE CLASE (formato Cornell)

CUÁNDO USARLA: Al inicio de cada clase. Una nota por sesión.
DÓNDE GUARDARLA: 01_Notes/Lectures/[slug-materia]/

NOMBRE DE ARCHIVO RECOMENDADO:
  clase-YYYY-MM-DD-tema-breve
  ej: clase-2026-04-08-introduccion-uml

FLUJO DE USO:
  1. Durante la clase → completar solo "Notas de Clase"
  2. Post-clase → completar "Preguntas" y "Resumen" SIN mirar las notas
  3. Después → crear las notas atómicas marcadas en "Conceptos para procesar"
  4. Cambiar estado a 🟢 procesada cuando todo esté hecho
============================================================ %%

---
%% El frontmatter son los metadatos de la nota.
   Dataview los usa para filtrar y mostrar información en el MOC y Dashboard.
   NO borrar ni renombrar estos campos. %%
tipo: clase
materia: 
%% ↑ Slug de la materia. Debe coincidir EXACTAMENTE con el nombre de carpeta
   ej: sistemas-informacion-2  (no "Sistemas de Información 2") %%
fecha: <% tp.date.now("YYYY-MM-DD") %>
%% ↑ Templater inserta la fecha de hoy automáticamente %%
docente: 
estado: 🟡 sin-revisar
%% ↑ Cambiar a 🟢 procesada cuando completes preguntas + resumen + conceptos %%
tags: [clase]
---

# <% tp.file.title %>
%% ↑ Templater usa el nombre del archivo como título %%

## 📋 Información
- **Materia:** `=this.materia`
- **Fecha:** `=this.fecha`
- **Tema central:** 
%% ↑ Una frase que resuma de qué trató la clase %%

---

## 📝 Notas de Clase
%% ZONA DE CAPTURA — Durante la clase, escribís aquí todo lo que el docente dice.
   No te preocupes por la estructura. Capturá todo sin filtrar.
   Podés usar viñetas, código, tablas, lo que sea más rápido. %%




---

## ❓ Preguntas y Palabras Clave
%% ZONA DE ACTIVE RECALL — Completar DESPUÉS de clase, SIN mirar las notas de arriba.
   El objetivo es intentar recordar los conceptos clave por tu cuenta.
   Si no podés responder una pregunta → ahí está tu laguna de conocimiento. %%

| Pregunta / Keyword | Respuesta corta |
|---|---|
|  |  |
|  |  |
|  |  |

---

## 💡 Resumen
%% ZONA DE SÍNTESIS — Explicar con tus propias palabras de qué trató la clase.
   Máximo 5-8 líneas. Sin copiar de las notas de arriba.
   Si no podés resumirlo, todavía no lo entendiste. %%




---

## 🔗 Conceptos para procesar en notas atómicas
%% Lista de conceptos de esta clase que merecen su propia nota atómica.
   Una vez que creés la nota atómica, marcás el checkbox como hecho [x].
   Cada [[link]] va a crear la nota cuando hagas clic en él. %%
- [ ] [[]]
- [ ] [[]]

---

## 🃏 Flashcards → Anki
%% Cada bloque START/END se convierte en una tarjeta en Anki.
   Para sincronizar: abrí Anki → en Obsidian Ctrl+P → "Obsidian to Anki: Sync"
   Tipo "Básico" = una pregunta, una respuesta. %%

START
Básico
¿Pregunta sobre el tema de la clase?
Back: Respuesta concisa y completa.
Tags: <% tp.frontmatter.materia %> clase
END

TEMPLATE

# -----------------------------------------------------------------------------
# PLANTILLA: concept-note.md
# -----------------------------------------------------------------------------
cat << 'TEMPLATE' > "$TPL/concept-note.md"
%% ============================================================
PLANTILLA: NOTA ATÓMICA DE CONCEPTO (Zettelkasten + Feynman)

CUÁNDO USARLA: Cada vez que procesás una clase y encontrás un
concepto que merece su propio archivo.
DÓNDE GUARDARLA: 01_Notes/Concepts/[slug-materia]/

NOMBRE DE ARCHIVO RECOMENDADO:
  nombre-del-concepto (en minúsculas con guiones)
  ej: mrp-material-requirements-planning
      arquitectura-cliente-servidor

REGLA FUNDAMENTAL:
  UNA nota = UNA sola idea.
  Si la nota toca dos conceptos → partila en dos notas separadas.

FLUJO DE USO (Método Feynman):
  1. Definición simple → como si se lo explicaras a alguien que no sabe nada
  2. Explicación técnica → la versión precisa y completa
  3. Ejemplo concreto → preferiblemente del parcial o proyecto actual
  4. Errores comunes → qué confunde a la gente con este concepto
  5. Flashcards → completar los bloques START/END y sincronizar con Anki
============================================================ %%

---
tipo: concepto
materia: 
%% ↑ Slug de la materia. Mismo valor que en la nota de clase de origen. %%
fecha-creacion: <% tp.date.now("YYYY-MM-DD") %>
dificultad: 🟢 baja
%% ↑ Opciones: 🟢 baja | 🟡 media | 🔴 alta
   El MOC de la materia filtra los de dificultad alta para que los repases más. %%
estado: 🔵 borrador
%% ↑ Cambiar a 🟢 revisada cuando la nota esté completa y con flashcards. %%
tags: [concepto]
---

# <% tp.file.title %>

## 📖 Definición simple
%% Explicalo como si el que lo va a leer nunca oyó hablar del tema.
   Sin tecnicismos. Sin siglas sin explicar. Una o dos oraciones máximo.
   Si no podés hacerlo simple, todavía no lo entendiste del todo (Feynman dixit). %%



## 🧩 Explicación técnica
%% Ahora sí la versión completa: términos técnicos, fórmulas, estructura, etc.
   Podés usar tablas, listas, diagramas ASCII o bloques de código. %%



## 🔗 Se conecta con
%% Links a otras notas atómicas relacionadas.
   Esto es lo que convierte tus notas en una red (Zettelkasten) en vez de una lista.
   Agregá todos los conceptos que se relacionen con este. %%
- [[]]

## 🌍 Ejemplo concreto
%% Un caso real, de código o del proyecto/parcial que estés haciendo.
   Los ejemplos concretos son lo que hace que el concepto "enganche" en la memoria. %%

```
(código, diagrama o descripción del ejemplo aquí)
```

## ⚠️ Errores comunes
%% ¿Qué confunde a la gente con este concepto?
   ¿Con qué otro concepto se suele mezclar?
   ¿Qué pensabas vos antes de entenderlo bien? %%



---

## 🃏 Flashcards → Anki
%% Cada bloque START/END = una tarjeta en Anki.
   Regla: al menos 2 tarjetas por concepto.
     - Una para la definición
     - Una para un ejemplo o diferencia con otro concepto
   Sincronizar: Anki abierto → Ctrl+P → "Obsidian to Anki: Sync" %%

START
Básico
¿Qué es <% tp.file.title %>?
Back: (completar con la definición simple)
Tags: <% tp.frontmatter.materia %> concepto
END

START
Básico
¿Cuál es un ejemplo concreto de <% tp.file.title %>?
Back: (completar con el ejemplo)
Tags: <% tp.frontmatter.materia %> concepto ejemplo
END

TEMPLATE

# -----------------------------------------------------------------------------
# PLANTILLA: project-note.md
# -----------------------------------------------------------------------------
cat << 'TEMPLATE' > "$TPL/project-note.md"
%% ============================================================
PLANTILLA: PROYECTO / PRÁCTICO / PARCIAL

CUÁNDO USARLA: Para cada parcial, trabajo práctico o proyecto grupal.
DÓNDE GUARDARLA: 02_Projects/

NOMBRE DE ARCHIVO RECOMENDADO:
  MATERIA-nombre-del-proyecto
  ej: SI2-parcial1-auxilio-mecanico
      ALGO-proyecto-gestion-inventario

CÓMO USAR EL KANBAN:
  - Backlog: todo lo que hay que hacer pero aún no priorizaste
  - Por hacer esta semana: máximo 5–7 tareas para los próximos 7 días
  - En progreso: lo que estás haciendo AHORA (máximo 3 cosas simultáneas)
  - En revisión: terminado pero pendiente de revisión o entrega
  - Completado: listo. Archivá semanalmente para no acumular ruido visual
============================================================ %%

---
tipo: proyecto
materia: 
%% ↑ Slug de la materia. Debe coincidir con el usado en el resto de notas. %%
fecha-inicio: <% tp.date.now("YYYY-MM-DD") %>
fecha-entrega: 
%% ↑ Formato YYYY-MM-DD. El Dashboard lo usa para ordenar por urgencia. %%
estado: 🔵 en-progreso
%% ↑ Opciones: 🔵 en-progreso | ✅ entregado | ⏸️ pausado %%
tags: [proyecto]
---

# <% tp.file.title %>

## 🎯 Objetivo
%% Una o dos oraciones que describan exactamente qué hay que entregar.
   Leélo antes de cada sesión de trabajo para no perder el foco. %%



## 📋 Requisitos del docente
%% Lista exacta de lo que pidió el docente. Copiala literalmente si es posible.
   Es tu checklist de entregable mínimo. %%
- 
- 

## 👥 Equipo
%% Quiénes trabajan en este proyecto. %%
- 

---

## 🏗️ Kanban del proyecto
%% Este bloque lo renderiza el plugin Kanban como un tablero visual.
   Podés arrastrar las tarjetas entre columnas directamente en Obsidian.
   NO modificar las líneas "## NombreColumna" — son la estructura del tablero. %%

```kanban
---
kanban-plugin: basic
---

## 📥 Backlog
- [ ] 

## 📌 Por hacer esta semana
- [ ] 

## ⚙️ En progreso
- [ ] 

## 👀 En revisión
- [ ] 

## ✅ Completado
- [ ] 
```

---

## 📁 Archivos y recursos relacionados
%% Links a PDFs, repos de GitHub, documentos de Drive, etc. %%



## 🔗 Conceptos aplicados
%% Links a las notas atómicas de conceptos que usás en este proyecto.
   Útil para repasar la teoría cuando estás desarrollando. %%


TEMPLATE

# -----------------------------------------------------------------------------
# PLANTILLA: moc-materia.md
# -----------------------------------------------------------------------------
cat << 'TEMPLATE' > "$TPL/moc-materia.md"
%% ============================================================
PLANTILLA: MOC (Map of Content) — ÍNDICE MAESTRO DE MATERIA

CUÁNDO USARLA: Se crea automáticamente al usar Ctrl+Alt+M.
  Normalmente no deberías aplicar esta plantilla manualmente.
DÓNDE SE GUARDA: 03_Areas/[slug-materia]/MOC-[slug-materia].md

QUÉ ES UN MOC:
  Es la "página de inicio" de cada materia. No contiene notas,
  sino consultas automáticas (Dataview) que muestran todo lo de
  la materia en tiempo real: clases, conceptos, proyectos, tareas.

  Cuando abrís el MOC de una materia, ves inmediatamente:
  - Qué clases tomaste y cuáles están sin procesar
  - Qué conceptos tenés y cuáles son difíciles
  - Qué proyectos están activos y cuándo vencen
  - Qué tareas pendientes hay
============================================================ %%

---
tipo: moc
materia: <% tp.file.title %>
%% ↑ Templater usa el nombre del archivo como slug de materia.
   Cuando lo usa el script nueva-materia.js esto se llena automáticamente. %%
tags: [moc]
---

# 🗺️ MOC — <% tp.file.title %>
> FICCT · UAGRM · Ing. Informática

---

## 📚 Clases
%% Esta consulta Dataview busca automáticamente todas las notas de clase
   que tengan materia = al slug de esta nota. Se actualiza sola. %%

```dataview
TABLE fecha AS Fecha, estado AS Estado
FROM "01_Notes/Lectures/<% tp.file.title %>"
WHERE tipo = "clase"
SORT fecha DESC
```

---

## 🧩 Conceptos
%% Muestra todos los conceptos de la materia ordenados por dificultad.
   Los 🔴 alta aparecen primero para que los priorices. %%

```dataview
TABLE dificultad AS Dificultad, estado AS Estado
FROM "01_Notes/Concepts/<% tp.file.title %>"
WHERE tipo = "concepto"
SORT dificultad DESC
```

---

## 📈 Conceptos con dificultad alta

```dataview
LIST
FROM "01_Notes/Concepts/<% tp.file.title %>"
WHERE dificultad = "🔴 alta"
```

---

## 🚀 Proyectos activos

```dataview
TABLE fecha-entrega AS Entrega, estado AS Estado
FROM "02_Projects"
WHERE materia = "<% tp.file.title %>"
SORT fecha-entrega ASC
```

---

## ✅ Tareas pendientes
%% El plugin Tasks busca tareas (líneas con - [ ]) en toda la carpeta de la materia. %%

```tasks
not done
path includes <% tp.file.title %>
```

---

## 📊 Ponderación

| Actividad | % | Nota |
|---|---|---|
|  |  |  |
| **Total** | **100%** | |

---

## 📖 Bibliografía


TEMPLATE

# -----------------------------------------------------------------------------
# PLANTILLA: daily-note.md
# -----------------------------------------------------------------------------
cat << 'TEMPLATE' > "$TPL/daily-note.md"
%% ============================================================
PLANTILLA: NOTA DIARIA

CUÁNDO SE CREA: Automáticamente al hacer clic en el ícono de
  calendario en el panel lateral, o con el plugin Calendar.
DÓNDE SE GUARDA: 00_Inbox/Daily/ (configurado en Periodic Notes)

PROPÓSITO:
  No es un diario personal. Es una herramienta operativa:
  - Registrar lo que capturaste hoy para no perderlo
  - Ver tus tareas del día en un solo lugar
  - Cerrar el día sabiendo qué quedó pendiente

REGLA DEL INBOX:
  Todo lo que anotés en "Brain dump" debe procesarse antes de 48 horas.
  Si algo lleva más de 2 días en el inbox → se pierde en la práctica.
============================================================ %%

---
tipo: daily
fecha: <% tp.date.now("YYYY-MM-DD") %>
tags: [daily]
---

# 📅 <% tp.date.now("dddd, DD MMMM YYYY") %>
%% Templater inserta el día y fecha completos automáticamente %%

---

## 🌅 Inicio del día

**3 prioridades de hoy:**
%% Elegí SOLO 3. Si ponés más de 3 "prioridades", no tenés prioridades. %%
1. 
2. 
3. 

**🃏 Anki del día:**
- [ ] Repasar las tarjetas de hoy en Anki antes de estudiar
%% Hacé esto ANTES de cualquier sesión de estudio. Es lo más importante del día. %%

---

## 📝 Brain dump
%% Zona de captura libre. Todo lo que pase por tu cabeza: ideas, dudas,
   cosas que te acordaste en clase, conceptos que no entendiste, tareas
   que surgieron, links que querés revisar.
   Sin estructura. Sin juicio. Solo capturá.
   Después de 48hs esto debería estar vacío o convertido en notas reales. %%



---

## ✅ Tareas del día
%% El plugin Tasks muestra automáticamente todas las tareas con fecha de hoy.
   No editás nada acá: lo que aparece viene de tus notas de proyectos y clases. %%

```tasks
not done
due today
```

---

## 🌙 Cierre del día

**¿Qué aprendí hoy?**
%% Una o dos oraciones. Si no podés responder esto, el día no fue productivo. %%

**¿Qué quedó sin resolver?**

**Notas pendientes de procesar mañana:**
%% Revisá el brain dump de arriba y listá lo que hay que convertir en notas reales %%
- [ ] 

TEMPLATE

# -----------------------------------------------------------------------------
# PLANTILLA: weekly-review.md
# -----------------------------------------------------------------------------
cat << 'TEMPLATE' > "$TPL/weekly-review.md"
%% ============================================================
PLANTILLA: REVISIÓN SEMANAL

CUÁNDO SE CREA: Automáticamente cada semana con Periodic Notes.
  También podés crearla manualmente cuando quieras hacer una revisión.
DÓNDE SE GUARDA: 05_Reviews/Weekly/

CUÁNDO HACERLA: Sábado, 1 hora aproximadamente.

PROPÓSITO:
  Es el momento de salir del "modo ejecución" (hacer tareas) y entrar
  al "modo sistema" (revisar que el sistema funciona bien).
  Si saltás las revisiones semanales, el sistema se desordena en 2–3 semanas.

QUÉ HACÉS EN LA REVISIÓN:
  1. Ver qué hiciste esta semana (10 min)
  2. Procesar clases que quedaron pendientes (20 min)
  3. Completar links entre conceptos del Zettelkasten (10 min)
  4. Revisar estado de proyectos (10 min)
  5. Definir prioridades de la semana siguiente (10 min)
============================================================ %%

---
tipo: weekly-review
semana: <% tp.date.now("YYYY-[W]WW") %>
%% ↑ Ej: 2026-W15. Templater lo genera automáticamente. %%
tags: [review]
---

# 🔄 Revisión Semanal — <% tp.date.now("YYYY-[W]WW") %>

---

## ✅ ¿Qué completé esta semana?
%% Lista libre. Sirve para darte cuenta de lo que sí lograste,
   que a veces no es obvio cuando uno solo ve lo que falta. %%



---

## 🟡 Clases pendientes de procesar
%% Dataview busca todas las notas de clase que todavía están en 🟡 sin-revisar.
   Si hay muchas → es la prioridad #1 de esta semana. %%

```dataview
TABLE fecha AS Fecha, materia AS Materia
FROM "01_Notes/Lectures"
WHERE tipo = "clase" AND estado = "🟡 sin-revisar"
SORT fecha ASC
```

---

## 🔗 Conexiones Zettelkasten pendientes
%% Notas atómicas que creaste pero todavía no enlazaste con otras.
   Una nota sin links es una isla — pierde todo su valor.
   Revisá tus notas en borrador y agregá al menos 2–3 links por nota. %%
- 

---

## 📊 Estado de proyectos activos
%% Revisá fechas de entrega. Si algo vence en menos de 7 días → acción urgente. %%

```dataview
TABLE fecha-entrega AS Entrega, estado AS Estado
FROM "02_Projects"
WHERE estado = "🔵 en-progreso"
SORT fecha-entrega ASC
```

---

## 🃏 Estado Anki esta semana
%% Revisá las estadísticas en Anki (Estadísticas → Hoy).
   El objetivo es no tener días sin repasar. %%

- **Días sin repasar esta semana:**
- **Mazo más descuidado:**
- **Concepto más difícil de la semana:**
- **Flashcards nuevas sincronizadas:**

---

## 🎯 Prioridades de la semana siguiente
%% Máximo 3. Si ponés más, ninguna es realmente prioritaria. %%
1. 
2. 
3. 

TEMPLATE

echo -e "${GREEN}✅ Plantillas actualizadas con comentarios (5/5)${NC}\n"

# =============================================================================
# 3. AGREGAR COMENTARIOS AL SCRIPT JS
# =============================================================================
echo -e "${YELLOW}⚙️  Verificando script nueva-materia.js...${NC}"

SCRIPT_JS="$BASE/_Templates/scripts/nueva-materia.js"

if [ ! -f "$SCRIPT_JS" ]; then
    echo -e "   ${YELLOW}⚠️  No encontrado en la bóveda — solo se documenta si ya está ahí${NC}"
else
    echo -e "   ${GREEN}✅ Script encontrado: $SCRIPT_JS${NC}"
fi

echo ""

# =============================================================================
# RESUMEN FINAL
# =============================================================================
echo -e "${BLUE}======================================================${NC}"
echo -e "${GREEN}  ✅ Documentación completada                        ${NC}"
echo -e "${BLUE}======================================================${NC}\n"

echo "📄 Archivos creados/actualizados:"
echo "   📖 LEEME.md                        ← Guía general de uso"
echo "   📝 _Templates/lecture-note.md      ← Plantilla de clase (comentada)"
echo "   📝 _Templates/concept-note.md      ← Plantilla de concepto (comentada)"
echo "   📝 _Templates/project-note.md      ← Plantilla de proyecto (comentada)"
echo "   📝 _Templates/moc-materia.md       ← Plantilla de MOC (comentada)"
echo "   📝 _Templates/daily-note.md        ← Plantilla diaria (comentada)"
echo "   📝 _Templates/weekly-review.md     ← Plantilla semanal (comentada)"
echo ""
echo -e "${YELLOW}💡 Los comentarios %% ... %% en las plantillas son${NC}"
echo -e "${YELLOW}   invisibles en modo lectura de Obsidian.${NC}"
echo -e "${YELLOW}   Solo se ven en modo edición (source/live preview).${NC}"
