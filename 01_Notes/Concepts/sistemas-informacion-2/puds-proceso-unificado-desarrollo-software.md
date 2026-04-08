---
tipo: concepto
materia: sistemas-informacion-2
semestre: 7
fecha-creacion: 2026-04-07
dificultad: 🟡 media
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

# PUDS (Proceso Unificado de Desarrollo de Software)

> **Nota:** El docente usó la sigla "PUDS". En la literatura estándar, este proceso se conoce como **UP (Unified Process)** o **RUP (Rational Unified Process)**. El contenido de esta nota es equivalente.

## 📖 Definición simple

%%
Explicalo como si el que lo va a leer nunca oyó hablar del tema.

- Sin tecnicismos.
- Sin siglas sin explicar.
- Una o dos oraciones máximo.
- Si no podés hacerlo simple, todavía no lo entendiste del todo (Feynman dixit).
%%

El PUDS es una forma estructurada y organizada de construir software. Divide el proyecto en **pequeñas etapas** (cada una con sus objetivos) y recomienda usar **diagramas UML** para diseñar antes de programar. Así se reduce el caos y se asegura que el sistema realmente cumpla lo que el cliente necesita.

## 🧩 Explicación técnica

%%
Ahora sí la versión completa con términos técnicos, fórmulas, estructura, etc. Podés usar tablas:

- Listas
- Diagramas
- Bloques de código
- Tablas
- Imagenes
%%

El **Proceso Unificado** es un marco de trabajo iterativo e incremental para el desarrollo de software, basado en componentes y dirigido por casos de uso. Fue desarrollado por Rational Software (Jacobson, Booch, Rumbaugh) y luego integrado en Rational Unified Process (RUP).

**Características clave:**
- **Iterativo e incremental:** El proyecto se divide en iteraciones cortas (2-6 semanas). Cada iteración produce una versión ejecutable que agrega funcionalidad.
- **Dirigido por casos de uso:** Los requisitos se capturan como "casos de uso" (escenarios de interacción usuario-sistema). El diseño y las pruebas se derivan de ellos.
- **Centrado en la arquitectura:** Se define una arquitectura base temprana (vista de componentes, capas) que guía todo el desarrollo.
- **Basado en UML 2.5:** Se utiliza el Lenguaje Unificado de Modelado para representar diagramas (clases, secuencia, actividades, etc.).

**Fases del PUDS (cuatro fases):**

| Fase | Objetivo | Hito principal |
|------|----------|----------------|
| **Inicio (Inception)** | Definir el alcance, viabilidad, casos de uso clave y riesgos. | Visión del producto aprobada. |
| **Elaboración (Elaboration)** | Refinar requisitos, definir arquitectura base, planificar iteraciones. | Arquitectura base estable. |
| **Construcción (Construction)** | Desarrollar el software por iteraciones, probar, documentar. | Producto funcional listo para transición. |
| **Transición (Transition)** | Desplegar en producción, capacitar usuarios, corregir errores menores. | Producto liberado. |

**Disciplinas (flujos de trabajo):**
- Modelado de negocio
- Requisitos
- Análisis y diseño (UML)
- Implementación (código)
- Pruebas
- Despliegue
- Gestión de proyectos
- Gestión de configuración y cambios

**Artefactos típicos:** Documento de visión, modelo de casos de uso, modelo de análisis/diseño (diagramas UML), plan de iteración, código fuente, casos de prueba.

## 🔗 Se conecta con

%%
Links a otras notas atómicas relacionadas.
Esto es lo que convierte tus notas en una red (Zettelkasten) en vez de una lista.

Agregá todos los conceptos que se relacionen con este.
%%

- [[uml-2-5]]
- [[casos-de-uso]]
- [[desarrollo-iterativo]]
- [[rup- rational-unified-process]]
- [[metodologias-agiles]] (para comparar)

## 🌍 Ejemplo concreto

%%
Un caso real (puede ser codigo) sobre el concepto. Los ejemplos concretos son lo que hace que el concepto "enganche" en la memoria.
%%

**Caso: Desarrollo de un sistema de gestión documental (proyecto de la materia)**

Siguiendo PUDS:

- **Inicio (1 semana):** El grupo entrevista al cliente (docente) y redacta 5 casos de uso principales: "Registrar documento", "Buscar documento", "Aprobar documento", etc. Se identifican riesgos (poca experiencia con OCR). Se aprueba la visión.

- **Elaboración (2 semanas):** Se definen las clases principales (Documento, Usuario, Carpeta) y se dibuja un diagrama de clases UML. Se elige una arquitectura en capas (presentación, lógica, datos). Se planifican 3 iteraciones para la construcción.

- **Construcción (4 semanas - 3 iteraciones):**
  - Iteración 1: Registrar documento + listar (sube a producción interna al final).
  - Iteración 2: Búsqueda avanzada + filtros.
  - Iteración 3: Flujo de aprobación + notificaciones.
  Cada iteración incluye análisis, diseño, codificación y pruebas.

- **Transición (1 semana):** Se despliega en el servidor del aula, se capacita a los usuarios (compañeros), se corrigen errores reportados.

**Resultado:** Al final de cada iteración hay algo funcionando. El cliente puede ver el progreso real y pedir cambios a tiempo. No se acumula todo el trabajo para el final.

## ⚠️ Errores comunes

%%
¿Qué confunde a la gente con este concepto?
¿Con qué otro concepto se suele mezclar?
¿Qué pensabas vos antes de entenderlo bien?
%%

- **Creer que PUDS es lo mismo que cascada:** PUDS es iterativo, no lineal. En cascada se hace todo el análisis, luego todo el diseño, luego toda la implementación. En PUDS se hacen pequeños ciclos que incluyen análisis, diseño e implementación en cada iteración.

- **Pensar que PUDS obliga a usar UML para todo:** UML es una herramienta, no un dogma. Se usan los diagramas que aportan valor (casos de uso, clases, secuencia), no todos los posibles.

- **Confundir PUDS con una metodología ágil:** PUDS es más pesado y formal que Scrum o XP. Sin embargo, se puede adaptar ("PUDS ágil") usando iteraciones cortas y menos artefactos.

- **Saltarse la fase de elaboración:** Muchos equipos van de inicio directo a construcción, y luego la arquitectura es un desastre. La elaboración es clave para evitar refactorizaciones masivas.

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
¿Qué es PUDS (Proceso Unificado de Desarrollo de Software)?
Back: Marco de trabajo iterativo e incremental para desarrollar software, basado en casos de uso, centrado en la arquitectura y que utiliza UML. Se divide en cuatro fases: Inicio, Elaboración, Construcción y Transición.
Tags: sistemas-informacion-2 concepto
END

START
Básico
¿Cuáles son las cuatro fases del Proceso Unificado?
Back: Inicio, Elaboración, Construcción y Transición.
Tags: sistemas-informacion-2 concepto
END

START
Básico
¿Cuál es la diferencia principal entre PUDS y el modelo en cascada?
Back: PUDS es iterativo e incremental (cada iteración produce software funcional); cascada es secuencial y lineal (se termina una fase para empezar la siguiente).
Tags: sistemas-informacion-2 concepto diferencia
END

START
Básico
Describe un ejemplo concreto de aplicación de PUDS en el proyecto de gestión documental.
Back: En la fase de Inicio se definen casos de uso; en Elaboración se crea el diagrama de clases y la arquitectura; en Construcción se hacen iteraciones de 1-2 semanas agregando funcionalidad; en Transición se despliega y capacita.
Tags: sistemas-informacion-2 concepto ejemplo
END