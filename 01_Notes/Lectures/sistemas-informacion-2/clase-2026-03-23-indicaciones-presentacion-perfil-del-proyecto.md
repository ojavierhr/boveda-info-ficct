---
tipo: clase
materia: sistemas-informacion-2
semestre: 7
fecha: 2026-03-23
docente: Martinez Canedo Rolando Antoni
estado: 🟢 procesada
tags:
  - clase
---

%% ↑↑↑↑↑↑↑↑↑↑↑↑
No borrar ni renombrar estos campos de arriba. Son meta-datos que se usan para algunas configuraciones no están pensados tanto para la lectura.

Los campos que si se pueden editar son:
estado: 🟡 sin-revisar, 🟢 procesada (cuando completes preguntas + resumen + conceptos)
%%

%% ============================================================
PLANTILLA: NOTA DE CLASE (formato Cornell)

CUÁNDO USARLA: Al inicio de cada clase. Una nota por sesión.

DÓNDE GUARDARLA: 01_Notes/Lectures/[slug-materia]/

NOMBRE DE ARCHIVO GENERADO AUTOMÁTICAMENTE: clase-YYYY-MM-DD-tema-central

FLUJO DE USO:

 1. Durante la clase → completar solo "Notas de Clase"
 2. Post-clase → completar "Preguntas" y "Resumen" SIN mirar las notas
 3. Después → crear las notas atómicas marcadas en "Conceptos para procesar"
 4. Cambiar estado a 🟢 procesada cuando todo esté hecho
============================================================ %%

# Clase-2026-03-23 Indicaciones sobre la presentación del perfil del proyecto

## 📋 Información
- **Materia:** `=this.materia`
- **Semestre:** `=this.semestre`
- **Fecha:** `=this.fecha`
- **Docente:** `=this.docente`
- **Tema central:** Indicaciones para realizar el perfil del proyecto

---

## 📝 Notas de Clase

%%
ZONA DE CAPTURA

Durante la clase, escribís aquí todo lo que el docente dice. No te preocupes por la estructura. Capturá todo sin filtrar.

Podés usar::

- Viñetas
- Código
- Tablas
- Lo que sea más rápido.
%%

### Estructura del documento para el perfil del proyecto

- Seguir la estructura de títulos que dio el docente. Sin inventar, sin cambiar.
- **Normas APA** obligatorias (o el formato que indique la metodología de investigación que usen).
- **Dos carátulas**: Integrantes ordenados alfabéticamente por apellido.
	- ⚠️ Si no están las dos carátulas así, el docente rechaza el documento. Sin evaluación.
- **Índice**: Navegable (enlaces activos). Mínimo 3 niveles de profundidad.  
	- Se publicará en la plataforma, así que debe ser fácil moverse por el PDF.
- **Introducción**: Original, escrita por ustedes. Debe responder:  
	- ¿Qué es este documento?  
	- ¿Por qué es importante?  
	- Llamar la atención del lector.  
	- Máximo 1 página.
- **Antecedentes**: Resumen de la investigación previa sobre el tipo de sistema que les tocó.
	- Ver [[2026-03-13_presentacion-materia|clase donde se asignaron los temas]].
- **Descripción del problema**: La parte más extensa.  
	- Describir con detalle, lenguaje claro y directo, los problemas que el sistema va a resolver.  
	- 🎯 Aquí no se habla de software, solo del problema real.
- **Objetivos del proyecto**  
- **Objetivo general**: Una meta final clara.  
- **Objetivos específicos**: Pasos intermedios para llegar a esa meta.  
- 🔑 Todos deben empezar con un verbo (ej. “diseñar”, “implementar”, “validar”). Nada ambiguo.
- **Alcance**: aquí sí se empieza a hablar de software.  
- No se enumeran funcionalidades pequeñas.  
- Se definen épicas, metas produccionales o módulos (ej. “Módulo de gestión de inventario”).
- **Elementos del sistema de información basado en computadora**: Hardware, software, datos, procesos, redes, actores.
	- Ver [[concepto-sistema-informacion-basado-computadoras]].
- **Stack tecnológico** (candidatos, pueden cambiar)
	
	| Área del proyecto | Herramienta sugerida |
	|-------------------|----------------------|
	| Backend | Spring Boot / Django |
	| Frontend | React |
	| Base de datos | PostgreSQL |
	| Desarrollo móvil | Flutter |
	| Gestión del proyecto (Scrum) | Jira / Youtrack |
	| Herramienta CASE (UML 2.5) | Visual Paradigm Community Edition |
	| Control de versiones | GitHub |
	
- **Costos**  
	- Tabla de gastos e inversiones para el cliente.  
	- Dos presupuestos: **SaaS** (licencia por suscripción) y **on‑premise** (instalación local).
- **Beneficios**  
	- **Cuantitativos**: ahorros medibles, aumento de productividad.  
	- **Cualitativos**: mejor experiencia, menos errores, mayor control.
- **Equipo de desarrollo**: Tabla con los datos de cada integrante + sus currículums.
- **Bibliografía**: Referencias de tres tipos: libros, sitios web, entrevistas.
- **Anexos**: Todo lo que ayude a entender el problema, la solución o el desarrollo.  
- **Obligatorio**:  
	- Formato de entrevista (tipo).  
	- Entrevistas realizadas.  
	- Documentación rescatada de las entrevistas.  
	- Diapositivas.

---

## ❓ Preguntas y Palabras Clave

%%
ZONA DE ACTIVE RECALL

Completar DESPUÉS de clase, SIN mirar las notas de arriba.
El objetivo es intentar recordar los conceptos clave por tu cuenta.
Si no podés responder una pregunta → ahí está tu laguna de conocimiento.
%%

| Pregunta / Keyword | Respuesta corta |
|---|---|
| ¿Qué pasa si las dos carátulas no están ordenadas alfabéticamente por apellido? | El docente rechaza el documento. Sin evaluación. |
| ¿Cuántos niveles de profundidad debe tener el índice como mínimo? | 3 niveles. |
| ¿Qué debe contener la introducción? | Respuesta a: ¿qué es?, ¿por qué es importante?, llamar la atención. Máx 1 página. |
| ¿Dónde se describe el problema real (sin mencionar software)? | En la sección "Descripción del problema". |
| ¿Con qué verbo deben empezar los objetivos? | Con un verbo de acción (diseñar, implementar, validar, etc.). |
| ¿Qué se define en el alcance? | Épicas, metas produccionales o módulos (no funcionalidades pequeñas). |
| ¿Cuáles son los dos tipos de presupuestos que se deben presentar? | SaaS (suscripción) y on‑premise (instalación local). |
| ¿Qué tipos de beneficios se mencionan? | Cuantitativos (medibles) y cualitativos (experiencia, errores, control). |
| ¿Qué anexos son obligatorios? | Formato de entrevista, entrevistas realizadas, documentación rescatada, diapositivas. |

---

## 💡 Resumen

%%
ZONA DE SÍNTESIS

Explicar con tus propias palabras de qué trató la clase. Máximo 5-8 líneas. Sin copiar de las notas de arriba.
Si no podés resumirlo, todavía no lo entendiste.
%%

> El perfil del proyecto debe seguir una estructura estricta: dos carátulas con orden alfabético, índice navegable a 3 niveles, introducción original (1 página), antecedentes, descripción del problema (sin software), objetivos (con verbos de acción), alcance (con épicas o módulos), elementos del sistema, stack tecnológico, costos (SaaS y on‑premise), beneficios (cuantitativos y cualitativos), equipo de desarrollo, bibliografía y anexos (incluyendo entrevistas y diapositivas). El incumplimiento de las carátulas implica rechazo directo.

---

## 🔗 Conceptos para procesar en notas atómicas

%%
Lista de conceptos de esta clase que merecen su propia nota atómica.
Una vez que creés la nota atómica, marcás el checkbox como hecho [x].
Cada [[link]] va a crear la nota cuando hagas clic en él.
%%

- [x] [[estructura-perfil-proyecto]] ✅ 2026-04-07
- [x] [[normas-apa]] ✅ 2026-04-07
- [x] [[objetivos-generales-especificos]] ✅ 2026-04-07
- [x] [[alcance-vs-epicas]] ✅ 2026-04-07
- [x] [[stack-tecnologico-sistemas-informacion]] ✅ 2026-04-07
- [x] [[costos-saas-onpremise]] ✅ 2026-04-07
- [x] [[beneficios-cuantitativos-cualitativos]] ✅ 2026-04-07
- [x] [[anexos-obligatorios-perfil]] ✅ 2026-04-07

---

## ✅ Tareas de la clase

%%
Anotá aquí las tareas entregables, lecturas, ejercicios o cualquier acción que surja de la clase.

Usá el formato estándar de tareas:

- [ ] Descripción de la tarea
- [ ] 📅 YYYY-MM-DD Descripción con fecha (opcional)

Estas tareas aparecerán automáticamente en el Dashboard (bloque \`\`\`tasks).
Si la tarea pertenece a un proyecto grande, mejor anotarla directamente en la nota del proyecto.
%%

- [ ] 📅 2026-03-30 Elaborar el perfil del proyecto siguiendo la estructura indicada.
- [ ] Preparar dos carátulas con integrantes ordenados alfabéticamente.
- [ ] Crear índice navegable con 3 niveles de profundidad.
- [ ] Redactar introducción original (máx 1 página).
- [ ] Investigar antecedentes del tipo de sistema (**Gestión documental**) y redactar sección.
- [ ] Describir el problema real (sin mencionar software).
- [ ] Redactar objetivo general y específicos con verbos de acción.
- [ ] Definir alcance en términos de épicas o módulos.
- [ ] Listar elementos del sistema (hardware, software, datos, procesos, redes, actores).
- [ ] Elegir stack tecnológico definitivo (justificar candidatos).
- [ ] Elaborar tabla de costos (SaaS y on‑premise).
- [ ] Identificar beneficios cuantitativos y cualitativos.
- [ ] Completar equipo de desarrollo con currículums.
- [ ] Recolectar bibliografía (libros, sitios web, entrevistas).
- [ ] Preparar anexos: formato de entrevista, entrevistas realizadas, documentación, diapositivas.

---

## 🃏 Flashcards → Anki

%%
Cada bloque START/END se convierte en una tarjeta en Anki.
Para sincronizar: abrí Anki → en Obsidian Ctrl+P → "Obsidian to Anki: Sync"
Tipo "Básico" = una pregunta, una respuesta.
%%

START
Básico
¿Qué consecuencia tiene no presentar las dos carátulas con orden alfabético en el perfil del proyecto?
Back: El docente rechaza el documento. No hay evaluación.
Tags: sistemas-informacion-2 clase
END

START
Básico
¿Cuántos niveles de profundidad debe tener el índice del perfil como mínimo?
Back: 3 niveles.
Tags: sistemas-informacion-2 clase
END

START
Básico
¿Qué sección del perfil describe el problema real sin mencionar software?
Back: Descripción del problema.
Tags: sistemas-informacion-2 clase
END

START
Básico
¿Con qué tipo de verbo deben comenzar los objetivos del proyecto?
Back: Verbos de acción (diseñar, implementar, validar, etc.).
Tags: sistemas-informacion-2 clase
END

START
Básico
¿Qué dos tipos de presupuestos se deben presentar en la sección de costos?
Back: SaaS (suscripción) y on‑premise (instalación local).
Tags: sistemas-informacion-2 clase
END

START
Básico
¿Cuáles son los anexos obligatorios en el perfil del proyecto?
Back: Formato de entrevista, entrevistas realizadas, documentación rescatada de las entrevistas y diapositivas.
Tags: sistemas-informacion-2 clase
END

START
Básico
¿Qué diferencia hay entre beneficios cuantitativos y cualitativos?
Back: Cuantitativos son medibles (ahorros, productividad); cualitativos son subjetivos (mejor experiencia, menos errores, mayor control).
Tags: sistemas-informacion-2 clase
END