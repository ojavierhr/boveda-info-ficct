---
tipo: clase
materia: sistemas-informacion-2
semestre: 7
fecha: 2026-04-06
docente: Martinez Canedo Rolando Antoni
estado: 🟢 procesada
tags:
  - clase
  - parcial1
  - documentacion
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

# Clase-2026-04-06 Definición de las partes del documento para el parcial 1

## 📋 Información
- **Materia:** `=this.materia`
- **Semestre:** `=this.semestre`
- **Fecha:** `=this.fecha`
- **Docente:** `=this.docente`
- **Tema central:** Definición de la documentación a presentar para el parcial 1

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

### Formato de presentación
- La documentación debe estar **avalada por referencias** bibliográficas y se debe traer (física o virtualmente) el día de la presentación.
- **Solo se imprimen dos caratulas**, no el documento completo. El resto se presenta en formato digital.
- La presentación se divide en dos momentos:
  - **Mañana (28/04):** Entrega y defensa del documento.
  - **Tarde (28/04):** Demostración presencial del software funcionando. El docente revisará funcionalidades y habilidades del equipo.

### Estructura del documento (tres partes)

#### 1. Fundamento teórico
Debe cubrir todas las tecnologías y conceptos que sustentan el proyecto:
- **Desarrollo de aplicaciones web**
  - Características particulares: eficiencia, facilidad de uso, vulnerabilidades de seguridad, arquitecturas típicas (cliente-servidor, SPA, etc.).
- **Desarrollo de aplicaciones móviles** (Flutter)
- **Servicios de mecánica y atención de emergencia** (contexto del negocio)
- **Backend con Python + FastAPI**
- **Angular** (frontend web)
- **Flutter** (app móvil)
- **Inteligencia Artificial**
  - Reconocimiento de imágenes
  - Reconocimiento de audio: transcripción de audio a texto (NLP)
  - Servicios públicos (API en la nube) vs. locales (modelo ejecutado en la máquina local)
  - Dashboard con Machine Learning: proyección de datos, modelos supervisados y no supervisados.
- **PUDS** (Proceso Unificado de Desarrollo de Software)
- **UML 2.5** (diagramas)
- **Despliegue de aplicaciones**: descripción del servicio (ej. AWS, Google Cloud) y estructura de precios.

#### 2. Proceso de desarrollo de software
- Explicar **cómo se aplicó** el proceso de desarrollo al proyecto (metodología, iteraciones, herramientas de gestión, control de versiones).

#### 3. Guías de uso
- Manuales o tutoriales (escritos, en video, etc.) para enseñar al cliente a usar el sistema.

### Fechas clave
- **Presentación del documento:** 28 de abril por la mañana.
- **Demostración del software:** 28 de abril por la tarde.
- **Entrega del alcance del otro proyecto:** se debe realizar, aunque el docente aún no lo revisará.

### Recomendaciones del docente
- Prepararse para demostrar que el programa es **realmente funcional**.
- El código será revisado presencialmente; se evaluará el trabajo de cada integrante.

---

## ❓ Preguntas y Palabras Clave (Active Recall)

%%
ZONA DE ACTIVE RECALL

Completar DESPUÉS de clase, SIN mirar las notas de arriba.
El objetivo es intentar recordar los conceptos clave por tu cuenta.
Si no podés responder una pregunta → ahí está tu laguna de conocimiento.
%%

| Pregunta / Keyword | Respuesta corta |
|---|---|
| ¿Qué partes debe contener el documento del parcial? | Fundamento teórico, proceso de desarrollo, guías de uso. |
| ¿Qué tecnologías deben aparecer en el fundamento teórico? | Angular, FastAPI, Flutter, IA (reconocimiento de imagen/audio), PUDS, UML 2.5, despliegue en la nube. |
| ¿Qué dos tipos de servicios de IA se mencionan? | Servicios públicos (API en la nube) y servicios locales (modelo en la máquina). |
| ¿Qué se debe explicar en el apartado de "Proceso de desarrollo"? | Cómo se aplicó la metodología (PUDS) al proyecto. |
| ¿Qué se presenta en la mañana del 28 de abril? | El documento (solo dos carátulas impresas). |
| ¿Qué se presenta en la tarde del 28 de abril? | Demostración del software funcionando. |
| ¿Cuántas carátulas se imprimen? | Dos. |

---

## 💡 Resumen

%%
ZONA DE SÍNTESIS

Explicar con tus propias palabras de qué trató la clase. Máximo 5-8 líneas. Sin copiar de las notas de arriba.
Si no podés resumirlo, todavía no lo entendiste.
%%

> El docente definió la estructura del documento para el parcial 1: **fundamento teórico** (cubriendo web, móvil, backend, IA, PUDS, UML, despliegue), **proceso de desarrollo** (cómo se aplicó la metodología) y **guías de uso**. La presentación será el **28 de abril**: por la mañana se entrega el documento (solo dos carátulas impresas) y por la tarde se demuestra el software funcionando. Es obligatorio traer referencias bibliográficas. También se debe entregar el alcance del otro proyecto, aunque aún no se revisará.

---

## 🔗 Conceptos para procesar en notas atómicas

%%
Lista de conceptos de esta clase que merecen su propia nota atómica.
Una vez que creés la nota atómica, marcás el checkbox como hecho [x].
Cada [[link]] va a crear la nota cuando hagas clic en él.
%%

- [x] [[desarrollo-web-caracteristicas]] ✅ 2026-04-07
- [x] [[fastapi-python-backend]] ✅ 2026-04-07
- [x] [[ia-reconocimiento-imagenes]] ✅ 2026-04-07
- [x] [[ia-reconocimiento-audio]] ✅ 2026-04-07
- [x] [[ia-modelos-supervisados-no-supervisados]] ✅ 2026-04-07
- [x] [[despliegue-aplicaciones-nube]] ✅ 2026-04-07
- [x] [[guias-uso-software]] ✅ 2026-04-07

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

- [ ] 📅 2026-04-08 Redactar la parte de fundamentos teóricos y los títulos generales del documento.
- [ ] Investigar referencias bibliográficas para cada tecnología listada.
- [ ] Preparar la demostración del software para el 28/04.
- [ ] Escribir el alcance del otro proyecto (aunque no se revise aún).

---

## 🃏 Flashcards → Anki

%%
Cada bloque START/END se convierte en una tarjeta en Anki.
Para sincronizar: abrí Anki → en Obsidian Ctrl+P → "Obsidian to Anki: Sync"
Tipo "Básico" = una pregunta, una respuesta.
%%

START
Básico
¿Cuáles son las tres partes principales del documento del parcial 1?
Back: Fundamento teórico, proceso de desarrollo de software, guías de uso.
Tags: sistemas-informacion-2 clase parcial1
END

START
Básico
¿Qué tecnologías deben incluirse en el fundamento teórico?
Back: Angular, FastAPI, Flutter, IA (reconocimiento de imagen/audio), PUDS, UML 2.5, despliegue en nube.
Tags: sistemas-informacion-2 clase parcial1
END

START
Básico
¿Qué diferencia hay entre un servicio de IA público y uno local?
Back: Público: se consume vía API en la nube; local: el modelo se ejecuta en la máquina del usuario.
Tags: sistemas-informacion-2 clase parcial1
END

START
Básico
¿Qué se presenta en la mañana del 28 de abril y qué en la tarde?
Back: Mañana: documento (solo dos carátulas impresas); tarde: demostración del software funcionando.
Tags: sistemas-informacion-2 clase parcial1
END

START
Básico
¿Qué debe contener el apartado de "Proceso de desarrollo"?
Back: Explicación de cómo se aplicó la metodología (PUDS) al proyecto.
Tags: sistemas-informacion-2 clase parcial1
END