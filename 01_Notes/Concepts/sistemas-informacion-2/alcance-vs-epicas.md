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

# Alcance vs Épicas

## 📖 Definición simple

%%
Explicalo como si el que lo va a leer nunca oyó hablar del tema.

- Sin tecnicismos.
- Sin siglas sin explicar.
- Una o dos oraciones máximo.
- Si no podés hacerlo simple, todavía no lo entendiste del todo (Feynman dixit).
%%

En el perfil de proyecto, el **alcance** es la lista de los grandes módulos o metas que el sistema va a cumplir (lo que SÍ se hace). Las **épicas** son la forma de organizar ese alcance en grandes bloques de funcionalidad, sin entrar en detalles pequeños. El docente prohíbe enumerar funcionalidades pequeñas; solo se permiten épicas o módulos.

## 🧩 Explicación técnica

%%
Ahora sí la versión completa con términos técnicos, fórmulas, estructura, etc. Podés usar tablas:

- Listas
- Diagramas
- Bloques de código
- Tablas
- Imagenes
%%

En la gestión de proyectos de software (especialmente en metodologías ágiles como Scrum), las **épicas** son unidades de trabajo grandes que agrupan múltiples tareas o historias de usuario relacionadas. Una épica representa una funcionalidad significativa que puede tomar varias iteraciones completar.

**Según el docente (clase 2026-03-23):**

- En la sección de **Alcance** del perfil, **no se enumeran funcionalidades pequeñas** (como "botón de login", "recuperar contraseña", "validar formato de email").
- Se definen **épicas, metas produccionales o módulos** completos.
- Es la primera sección donde se empieza a hablar de software (antes solo se describía el problema).

**Diferencia clave:**

| Término | Definición | Ejemplo |
|---------|------------|---------|
| **Alcance** | El límite de lo que el proyecto abarca. Define qué funcionalidades (grandes) están incluidas y cuáles no. | "El sistema incluirá gestión de usuarios, gestión de documentos y búsqueda avanzada. No incluirá facturación electrónica." |
| **Épica** | Un gran bloque de funcionalidad que se entrega en varias iteraciones. Se desglosa en historias de usuario. | "Gestión de documentos" es una épica. Dentro: subir, editar metadatos, versionar. |
| **Módulo** | Una unidad funcional independiente (similar a una épica). | "Módulo de indexación", "Módulo de búsqueda". |
| **Meta produccional** | Un hito que permite poner el sistema en producción parcialmente. | "Primera meta: que los usuarios puedan subir y ver documentos." |

**Reglas para redactar el alcance:**
- Usar lenguaje de alto nivel (sin detalles de implementación).
- Distinguir entre "incluye" y "no incluye" (exclusiones).
- Cada épica o módulo debe ser **independiente** y **verificable** (se puede probar que funciona).
- El alcance debe ser realista para el tiempo del proyecto (un semestre).

**Ejemplo de mala redacción (funcionalidades pequeñas):**
- El sistema tendrá un botón para subir archivos.
- El sistema tendrá un campo de búsqueda.
- El sistema mostrará una lista de resultados.

**Ejemplo de buena redacción (épicas/módulos):**
- **Módulo de gestión documental:** permite subir, indexar, versionar y eliminar documentos.
- **Módulo de búsqueda avanzada:** permite buscar por palabras clave, fecha, tipo de documento y proveedor.
- **Módulo de seguridad:** control de acceso por roles (administrador, operador, consultor).

## 🔗 Se conecta con

%%
Links a otras notas atómicas relacionadas.
Esto es lo que convierte tus notas en una red (Zettelkasten) en vez de una lista.

Agregá todos los conceptos que se relacionen con este.
%%

- [[estructura-perfil-proyecto]]
- [[objetivos-generales-especificos]]
- [[epicas-vs-historias-usuario]]
- [[metodologia-agile-scrum]]

## 🌍 Ejemplo concreto

%%
Un caso real (puede ser codigo) sobre el concepto. Los ejemplos concretos son lo que hace que el concepto "enganche" en la memoria.
%%

**Caso: Perfil del Grupo 5 (Gestión documental) – Sección Alcance**

**Alcance del proyecto:**

El sistema de gestión documental abarcará los siguientes módulos (épicas):

1. **Módulo de autenticación y usuarios:**  
   - Registro, login, recuperación de contraseña.  
   - Roles: Administrador, Operador, Consultor (solo lectura).

2. **Módulo de carga y indexación de documentos:**  
   - Subida de archivos (PDF, imágenes, Office).  
   - Asignación automática de metadatos (fecha, tipo, proveedor, categoría).  
   - OCR para documentos escaneados (extracción de texto).

3. **Módulo de búsqueda y recuperación:**  
   - Búsqueda por palabras clave en contenido y metadatos.  
   - Filtros por fecha, tipo, proveedor.  
   - Visualización previa del documento sin descargar.

4. **Módulo de control de versiones:**  
   - Registro de cada versión subida.  
   - Historial de cambios.  
   - Posibilidad de revertir a versiones anteriores.

5. **Módulo de flujo de aprobación:**  
   - Los documentos pueden requerir aprobación de un supervisor.  
   - Notificaciones por correo electrónico.  
   - Registro de quién aprobó y cuándo.

**Fuera de alcance (exclusiones):**
- No se implementará facturación electrónica.
- No se integrará con sistemas contables externos.
- No se desarrollará una aplicación móvil (solo web).

**Relación con épicas:** Cada módulo listado es una épica que se desglosará en historias de usuario durante la planificación de sprints. Por ejemplo, la épica "Módulo de carga y indexación" se divide en: "Como operador quiero subir un PDF", "Como operador quiero que se extraigan metadatos automáticamente", etc.

## ⚠️ Errores comunes

%%
¿Qué confunde a la gente con este concepto?
¿Con qué otro concepto se suele mezclar?
¿Qué pensabas vos antes de entenderlo bien?
%%

- **Confundir alcance con lista de funcionalidades pequeñas:** El docente explícitamente rechaza enumerar botones o campos. El alcance debe ser en módulos o épicas.
- **No incluir exclusiones:** El alcance no es solo lo que se hace; también es importante decir lo que NO se hace para evitar expectativas fuera de tiempo.
- **Mezclar alcance con objetivos:** Los objetivos son "para qué" (metas), el alcance es "qué" (funcionalidades concretas).
- **Hacer el alcance demasiado ambicioso:** Si se incluye todo lo imaginable, el proyecto es inviable. Hay que priorizar y dejar cosas para fuera de alcance.

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
¿Cómo se debe definir el alcance en el perfil de proyecto según el docente?
Back: En términos de épicas, metas produccionales o módulos completos. No se enumeran funcionalidades pequeñas (botones, campos, etc.).
Tags: sistemas-informacion-2 concepto
END

START
Básico
¿Qué es una épica en gestión de proyectos de software?
Back: Una unidad de trabajo grande que agrupa múltiples tareas o historias de usuario relacionadas, representando una funcionalidad significativa que puede tomar varias iteraciones completar.
Tags: sistemas-informacion-2 concepto
END

START
Básico
¿Cuál es la diferencia entre alcance y objetivo general?
Back: El objetivo general es la meta final ("para qué" se hace el proyecto). El alcance es el conjunto concreto de funcionalidades o módulos que se entregarán ("qué" se hace).
Tags: sistemas-informacion-2 concepto diferencia
END

START
Básico
Pon un ejemplo de buena redacción de alcance para un sistema de gestión documental.
Back: "Módulo de carga e indexación de documentos: permite subir archivos, asignar metadatos automáticos y aplicar OCR. Módulo de búsqueda avanzada: búsqueda por palabras clave y filtros. Módulo de control de versiones: historial y reversión."
Tags: sistemas-informacion-2 concepto ejemplo
END