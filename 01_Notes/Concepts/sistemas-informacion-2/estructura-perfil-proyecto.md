---
tipo: concepto
materia: sistemas-informacion-2
semestre: 7
fecha-creacion: 2026-04-07
dificultad: 🟢 baja
estado: 🔵 borrador
tags: [concepto]

---
%% ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
No borrar ni renombrar estos campos de arriba. Son meta-datos que se usan para algunas configuraciones no están pensados tanto para la lectura.

Los campos que si se pueden editar son:
Dificultad: 🟢 baja | 🟡 media | 🔴 alta
Estado: 🔵 borrador → 🟢 revisada cuando esté completa
%%
%% ============================================================
PLANTILLA: NOTA ATÓMICA DE CONCEPTO (Zettelkasten + Feynman)

CUÁNDO USARLA: Cada vez que procesás una clase y encontrás un concepto que merece su propio archivo.

DÓNDE GUARDARLA: 01_Notes/Concepts/[slug-materia]/

NOMBRE DE ARCHIVO RECOMENDADO:
 nombre-del-concepto (en minúsculas con guiones)
 ej: mrp-material-requirements-planning

REGLA FUNDAMENTAL: UNA nota = UNA sola idea. Si la nota toca dos conceptos → partila en dos notas separadas.

FLUJO DE USO (Método Feynman):

 1. Definición simple → como si se lo explicaras a alguien que no sabe nada
 2. Explicación técnica → la versión precisa y completa
 3. Ejemplo concreto → preferiblemente del parcial o proyecto actual
 4. Errores comunes → qué confunde a la gente con este concepto
 5. Flashcards → completar los bloques START/END y sincronizar con Anki
============================================================ %%

# Estructura del perfil de proyecto

## 📖 Definición simple

%%
Explicalo como si el que lo va a leer nunca oyó hablar del tema.

- Sin tecnicismos.
- Sin siglas sin explicar.
- Una o dos oraciones máximo.
- Si no podés hacerlo simple, todavía no lo entendiste del todo (Feynman dixit).
%%

Es el **esqueleto obligatorio** que debe seguir el documento donde se describe la idea del proyecto de software. Es como un checklist de secciones (carátulas, introducción, problemas, objetivos, costos, etc.) que el docente exige para evaluar el proyecto final. Si falta algo o está desordenado, el documento se rechaza.

## 🧩 Explicación técnica

%%
Ahora sí la versión completa con términos técnicos, fórmulas, estructura, etc. Podés usar tablas:

- Listas
- Diagramas
- Bloques de código
- Tablas
- Imagenes
%%

El **perfil de proyecto** es un documento formal que se entrega al inicio de un proyecto de desarrollo de software. Su objetivo es definir el alcance, los objetivos, la viabilidad y la planificación preliminar. En la materia **Sistemas de Información 2**, el docente exige una estructura específica e inamovible.

**Estructura completa del perfil (según clase 2026-03-23):**

| Orden | Sección | Requisitos clave |
|-------|---------|------------------|
| 1 | **Carátulas (2)** | Orden alfabético por apellido. Si falta o está mal → rechazo directo. |
| 2 | **Índice** | Navegable (enlaces activos), mínimo 3 niveles de profundidad. |
| 3 | **Introducción** | Máx 1 página. Original. Responde: ¿qué es?, ¿por qué es importante?, llamar la atención. |
| 4 | **Antecedentes** | Resumen de investigación previa sobre el tipo de sistema (ej. gestión documental). |
| 5 | **Descripción del problema** | Extensa. Lenguaje claro. **No mencionar software**. Solo el problema real. |
| 6 | **Objetivos** | Objetivo general + específicos. Todos con verbo de acción (diseñar, implementar, validar). |
| 7 | **Alcance** | Épicas, metas produccionales o módulos (no funcionalidades pequeñas). Aquí sí se habla de software. |
| 8 | **Elementos del sistema** | Hardware, software, datos, procesos, redes, actores (basado en el concepto de sistema de información). |
| 9 | **Stack tecnológico** | Herramientas candidatas (backend, frontend, BD, móvil, gestión, CASE, control de versiones). |
| 10 | **Costos** | Dos presupuestos: **SaaS** (suscripción) y **on‑premise** (instalación local). |
| 11 | **Beneficios** | Cuantitativos (medibles) y cualitativos (experiencia, errores, control). |
| 12 | **Equipo de desarrollo** | Tabla con integrantes + currículums. |
| 13 | **Bibliografía** | Tres tipos: libros, sitios web, entrevistas. |
| 14 | **Anexos** | Obligatorios: formato de entrevista, entrevistas realizadas, documentación rescatada, diapositivas. |

**Normas de formato:**
- **Normas APA** (o la metodología de investigación que se indique).
- Índice con hipervínculos funcionales (para navegar en PDF).
- Las carátulas deben estar **alfabéticamente por apellido** de los integrantes.

**Consecuencias del incumplimiento:**
- Si las dos carátulas no están ordenadas alfabéticamente → **rechazo sin evaluación**.
- Si falta alguna sección obligatoria → el docente puede devolver el documento sin corregir.

## 🔗 Se conecta con

%%
Links a otras notas atómicas relacionadas.
Esto es lo que convierte tus notas en una red (Zettelkasten) en vez de una lista.

Agregá todos los conceptos que se relacionen con este.
%%

- [[normas-apa]]
- [[objetivos-generales-especificos]]
- [[alcance-vs-epicas]]
- [[stack-tecnologico-sistemas-informacion]]
- [[costos-saas-onpremise]]
- [[beneficios-cuantitativos-cualitativos]]
- [[anexos-obligatorios-perfil]]
- [[elementos-sistema-informacion]]

## 🌍 Ejemplo concreto

%%
Un caso real (puede ser codigo) sobre el concepto. Los ejemplos concretos son lo que hace que el concepto "enganche" en la memoria.
%%

**Caso: Perfil de proyecto para el Grupo 5 (Gestión documental)**

Los integrantes (orden alfabético por apellido):
1. Duran, Kelly
2. Gonzales, Jose
3. Guairaje, Nicol
4. Hidalgo, Javier
5. Huarachi, Eva
6. Rodriguez, Evert
7. Rojas, Douglas

El documento debe tener:

- **Carátula 1** (docente) y **Carátula 2** (grupo) con ese orden alfabético.
- **Índice** con tres niveles: 1. Introducción, 1.1 Contexto, 1.1.1 Motivación.
- **Introducción** de 1 página explicando por qué es importante la gestión documental para pymes.
- **Descripción del problema:** "Las empresas pierden documentos, tardan horas en encontrar una factura, no hay trazabilidad de versiones" (sin decir "software").
- **Objetivo general:** "Desarrollar un sistema de gestión documental para la empresa X".
- **Alcance:** Módulo de indexación, módulo de búsqueda, módulo de flujo de aprobación.
- **Costos:** Tabla comparativa SaaS (ej. $50/mes por usuario) vs on‑premise (servidor + licencia perpetua $5000).
- **Anexos:** Incluir el formato de entrevista usado y las entrevistas a 3 empresas.

Si el grupo entrega sin el orden alfabético en las carátulas, el docente rechaza el perfil y no lo evalúa.

## ⚠️ Errores comunes

%%
¿Qué confunde a la gente con este concepto?
¿Con qué otro concepto se suele mezclar?
¿Qué pensabas vos antes de entenderlo bien?
%%

- **Creer que el orden de las secciones es opcional:** El docente fue explícito: seguir la estructura sin inventar ni cambiar. No se puede mezclar el orden.
- **Pensar que la descripción del problema puede incluir soluciones tecnológicas:** Allí solo se describe el problema real (ej. "pérdida de documentos"), nunca se dice "el software hará X".
- **Confundir alcance con lista de funcionalidades:** El alcance se define en épicas o módulos grandes, no en tareas pequeñas (ej. "botón de login" no va en alcance).
- **Ignorar los anexos obligatorios:** Muchos grupos olvidan incluir el formato de entrevista o las diapositivas, pero son obligatorios.

---

## 🃏 Flashcards → Anki

%%
Cada bloque START/END = una tarjeta en Anki.

Regla: al menos 2 tarjetas por concepto.

- Una para la definición
- Una para un ejemplo o diferencia con otro concepto
  
Sincronizar: Anki abierto → Ctrl+P → "Obsidian to Anki: Sync"
%%

START
Básico
¿Qué es la estructura del perfil de proyecto en Sistemas de Información 2?
Back: Es el esqueleto obligatorio de secciones (carátulas, índice, introducción, problema, objetivos, alcance, costos, etc.) que debe seguir el documento del proyecto final. Si falta algo o está desordenado, el docente rechaza el trabajo.
Tags: sistemas-informacion-2 concepto
END

START
Básico
¿Qué consecuencia tiene no presentar las dos carátulas con orden alfabético por apellido?
Back: El docente rechaza el documento sin evaluación.
Tags: sistemas-informacion-2 concepto
END

START
Básico
Menciona al menos cinco secciones obligatorias del perfil de proyecto.
Back: Carátulas, índice, introducción, descripción del problema, objetivos, alcance, costos, beneficios, stack tecnológico, equipo, bibliografía, anexos (cualesquiera cinco).
Tags: sistemas-informacion-2 concepto
END

START
Básico
¿Qué diferencia hay entre la descripción del problema y el alcance?
Back: En la descripción del problema no se menciona software (solo el problema real). En el alcance sí se definen módulos o épicas del sistema.
Tags: sistemas-informacion-2 concepto diferencia
END