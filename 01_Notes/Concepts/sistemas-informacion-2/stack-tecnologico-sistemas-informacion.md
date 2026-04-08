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

# Stack tecnológico en sistemas de información

## 📖 Definición simple

%%
Explicalo como si el que lo va a leer nunca oyó hablar del tema.

- Sin tecnicismos.
- Sin siglas sin explicar.
- Una o dos oraciones máximo.
- Si no podés hacerlo simple, todavía no lo entendiste del todo (Feynman dixit).
%%

El stack tecnológico es el **conjunto de herramientas, lenguajes y plataformas** que se usan para construir una aplicación de software. Es como la "receta" de ingredientes tecnológicos: backend, frontend, base de datos, herramientas de gestión, etc. En el perfil del proyecto, se deben listar las tecnologías candidatas (pueden cambiar después).

## 🧩 Explicación técnica

%%
Ahora sí la versión completa con términos técnicos, fórmulas, estructura, etc. Podés usar tablas:

- Listas
- Diagramas
- Bloques de código
- Tablas
- Imagenes
%%

El **stack tecnológico** (o tech stack) es la combinación de tecnologías que se utilizan para desarrollar, ejecutar y mantener una aplicación de software. En los proyectos de la materia, se debe definir un stack candidato en la sección correspondiente del perfil.

**Componentes típicos de un stack (según la clase):**

| Área del proyecto | Función | Herramientas sugeridas |
|-------------------|---------|------------------------|
| **Backend** | Lógica del servidor, API, procesamiento de datos | Spring Boot (Java), Django (Python) |
| **Frontend** | Interfaz de usuario web | React |
| **Base de datos** | Almacenamiento persistente | PostgreSQL |
| **Desarrollo móvil** | Aplicación para teléfonos (si aplica) | Flutter |
| **Gestión del proyecto** | Seguimiento de tareas, metodología Scrum | Jira, YouTrack |
| **Herramienta CASE** | Modelado UML 2.5 | Visual Paradigm Community Edition |
| **Control de versiones** | Código fuente colaborativo | GitHub |

**Consideraciones para elegir el stack:**

- **Compatibilidad:** Las tecnologías deben poder integrarse entre sí (ej. Spring Boot con PostgreSQL, React con una API REST).
- **Conocimiento del equipo:** Si nadie sabe Java, quizás conviene Django (Python) que puede ser más accesible.
- **Licencias:** Las herramientas sugeridas son mayormente gratuitas o con versiones comunitarias (Visual Paradigm CE, GitHub free).
- **Escalabilidad:** ¿El stack soportará el crecimiento del sistema?
- **Tiempo de desarrollo:** Algunos stacks permiten prototipado más rápido (Django + React).

**En el perfil del proyecto:**
- No es obligatorio que el stack definitivo sea exactamente el de la tabla; son **candidatos** que pueden cambiar.
- Se debe justificar por qué se elige cada tecnología (ventajas, experiencia del equipo, disponibilidad de recursos).
- Incluir alternativas si alguna herramienta no funciona.

## 🔗 Se conecta con

%%
Links a otras notas atómicas relacionadas.
Esto es lo que convierte tus notas en una red (Zettelkasten) en vez de una lista.

Agregá todos los conceptos que se relacionen con este.
%%

- [[estructura-perfil-proyecto]]
- [[spring-boot]]
- [[django]]
- [[react]]
- [[postgresql]]
- [[flutter]]
- [[visual-paradigm]]
- [[github]]

## 🌍 Ejemplo concreto

%%
Un caso real (puede ser codigo) sobre el concepto. Los ejemplos concretos son lo que hace que el concepto "enganche" en la memoria.
%%

**Caso: Stack tecnológico del Grupo 5 (Gestión documental)**

El equipo decide usar el siguiente stack (justificación incluida):

| Área | Tecnología elegida | Justificación |
|------|-------------------|----------------|
| **Backend** | Django (Python) | El equipo tiene más experiencia en Python que en Java. Django tiene un ORM potente y admin automático. |
| **Frontend** | React | Permite construir una interfaz dinámica y reactiva. Hay buena integración con Django REST Framework. |
| **Base de datos** | PostgreSQL | Soporta búsqueda de texto completo (necesario para gestión documental) y es de código abierto. |
| **Desarrollo móvil** | Flutter (opcional) | Se plantea para futura expansión, pero no se incluye en el alcance inicial. |
| **Gestión de proyecto** | Jira (free tier) | Permite tableros Scrum, seguimiento de épicas e historias. |
| **CASE (UML)** | Visual Paradigm CE | Gratuita para uso educativo, permite diagramas de clases, secuencia, casos de uso. |
| **Control de versiones** | GitHub | Se usará GitHub Classroom para repositorios privados y colaboración. |

**Alternativas consideradas:**
- Backend: Spring Boot (descartado por curva de aprendizaje).
- Base de datos: MySQL (descartado porque PostgreSQL tiene mejor soporte para búsqueda de texto).

## ⚠️ Errores comunes

%%
¿Qué confunde a la gente con este concepto?
¿Con qué otro concepto se suele mezclar?
¿Qué pensabas vos antes de entenderlo bien?
%%

- **Pensar que el stack tecnológico es fijo e inamovible:** El docente aclaró que son candidatos y pueden cambiar durante el desarrollo. Lo importante es justificar la elección inicial.
- **No incluir todas las áreas:** Falta a menudo la herramienta CASE (Visual Paradigm) o el control de versiones (GitHub). Debe estar completo.
- **Elegir tecnologías solo por moda:** No basta con decir "usamos React porque es popular". Hay que explicar por qué se adapta al proyecto.
- **Ignorar la compatibilidad entre componentes:** Por ejemplo, elegir Django con una base de datos NoSQL puede no ser óptimo. Debe haber coherencia.

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
¿Qué es el stack tecnológico en un proyecto de sistemas de información?
Back: Es el conjunto de herramientas, lenguajes y plataformas (backend, frontend, base de datos, gestión, etc.) que se utilizan para construir una aplicación de software.
Tags: sistemas-informacion-2 concepto
END

START
Básico
Según la clase del 23/03, ¿cuáles son las herramientas sugeridas para backend y frontend?
Back: Backend: Spring Boot (Java) o Django (Python). Frontend: React.
Tags: sistemas-informacion-2 concepto
END

START
Básico
¿Qué herramienta CASE se sugiere para modelado UML 2.5?
Back: Visual Paradigm Community Edition.
Tags: sistemas-informacion-2 concepto
END

START
Básico
¿Por qué es importante justificar la elección del stack tecnológico en el perfil?
Back: Para mostrar que las decisiones son razonables según la experiencia del equipo, compatibilidad, licencias y necesidades del proyecto. No es fijo, pero debe tener fundamento.
Tags: sistemas-informacion-2 concepto
END