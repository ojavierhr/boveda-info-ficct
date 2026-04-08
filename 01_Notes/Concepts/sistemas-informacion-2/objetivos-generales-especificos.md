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

# Objetivos generales y específicos

## 📖 Definición simple

%%
Explicalo como si el que lo va a leer nunca oyó hablar del tema.

- Sin tecnicismos.
- Sin siglas sin explicar.
- Una o dos oraciones máximo.
- Si no podés hacerlo simple, todavía no lo entendiste del todo (Feynman dixit).
%%

En un proyecto, los objetivos son las **metas que se quieren alcanzar**. El **objetivo general** es la meta principal y única (el "norte"). Los **objetivos específicos** son los pasos concretos y medibles que llevan a cumplir el objetivo general. Todos deben redactarse comenzando con un verbo de acción (diseñar, implementar, validar, etc.).

## 🧩 Explicación técnica

%%
Ahora sí la versión completa con términos técnicos, fórmulas, estructura, etc. Podés usar tablas:

- Listas
- Diagramas
- Bloques de código
- Tablas
- Imagenes
%%

En la gestión de proyectos y en la metodología de investigación, los objetivos son declaraciones que describen lo que se espera lograr con el proyecto. Se dividen en:

### Objetivo general
- **Uno solo** (no puede haber dos objetivos generales).
- Describe el **propósito central** del proyecto de manera amplia.
- Responde a la pregunta: ¿Qué se quiere lograr al final del proyecto?
- Se redacta en **infinitivo** (terminación -ar, -er, -ir).
- Ejemplo de verbo: *Desarrollar, Implementar, Diseñar, Evaluar, Analizar, Crear.*

### Objetivos específicos
- **Varios** (generalmente entre 3 y 6).
- Desglosan el objetivo general en **pasos lógicos y secuenciales**.
- Cada uno debe ser **medible y alcanzable**.
- También se redactan en **infinitivo** con verbos de acción.
- La suma de todos los objetivos específicos debe llevar al cumplimiento del objetivo general.

**Requisitos según el docente (clase 2026-03-23):**
- Todos deben empezar con un **verbo de acción**.
- **Nada ambiguo** (evitar "conocer", "entender"; preferir "identificar", "clasificar", "calcular").
- Los objetivos específicos deben ser **verificables** (se puede comprobar si se cumplieron o no).

**Relación jerárquica:**

```
Objetivo general (único)  
├── Objetivo específico 1  
├── Objetivo específico 2  
├── Objetivo específico 3  
└── ...
```

**Errores comunes en la redacción:**
- Usar verbos no accionables (ej. "saber", "aprender", "comprender").
- Incluir más de un verbo por objetivo (ej. "diseñar e implementar" – son dos acciones, mejor separarlas).
- Redactar el objetivo general como si fuera un objetivo específico (demasiado concreto).
- Olvidar la coherencia: los específicos deben estar alineados con el general.

## 🔗 Se conecta con

%%
Links a otras notas atómicas relacionadas.
Esto es lo que convierte tus notas en una red (Zettelkasten) en vez de una lista.

Agregá todos los conceptos que se relacionen con este.
%%

- [[estructura-perfil-proyecto]]
- [[verbos-de-accion-objetivos]]
- [[alcance-vs-epicas]]
- [[criterios-smart]]

## 🌍 Ejemplo concreto

%%
Un caso real (puede ser codigo) sobre el concepto. Los ejemplos concretos son lo que hace que el concepto "enganche" en la memoria.
%%

**Caso: Proyecto de gestión documental del Grupo 5**

**Objetivo general (único):**  
> Desarrollar un sistema de gestión documental para la empresa de logística TransRápida SRL que permita la indexación, búsqueda y control de versiones de documentos, reduciendo el tiempo de recuperación de información.

**Objetivos específicos (pasos):**

1. **Analizar** los procesos actuales de manejo de documentos en TransRápida SRL mediante entrevistas y observación directa.
2. **Diseñar** la arquitectura del sistema (base de datos, backend, frontend) y los diagramas UML correspondientes.
3. **Implementar** un módulo de indexación automática con metadatos (fecha, tipo de documento, proveedor).
4. **Desarrollar** un motor de búsqueda por palabras clave y filtros avanzados.
5. **Integrar** un sistema de control de versiones que registre cada modificación de documentos.
6. **Validar** el sistema mediante pruebas funcionales y una prueba piloto con 5 usuarios reales durante 2 semanas.

**Relación:**  
Si se cumplen los 6 específicos, automáticamente se habrá cumplido el objetivo general.

**Verbos de acción usados:** Analizar, Diseñar, Implementar, Desarrollar, Integrar, Validar.

## ⚠️ Errores comunes

%%
¿Qué confunde a la gente con este concepto?
¿Con qué otro concepto se suele mezclar?
¿Qué pensabas vos antes de entenderlo bien?
%%

- **Confundir objetivo general con la visión del proyecto:** La visión es aspiracional ("ser el mejor sistema de gestión documental"), el objetivo general es concreto y alcanzable en el plazo del proyecto.
- **Escribir objetivos específicos que no son medibles:** "Mejorar la experiencia del usuario" no es medible. "Aumentar el puntaje de satisfacción de 3 a 4.5 en una escala de 5" sí lo es.
- **Poner verbos como "conocer" o "aprender":** El docente los rechaza. Deben ser verbos que impliquen una acción tangible.
- **Confundir objetivos específicos con tareas:** Las tareas son más granulares (ej. "configurar el servidor"), los objetivos específicos son hitos más amplios.

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
¿Qué es el objetivo general de un proyecto?
Back: Es la meta principal y única del proyecto, redactada en infinitivo con un verbo de acción, que describe el propósito central que se quiere alcanzar al finalizar.
Tags: sistemas-informacion-2 concepto
END

START
Básico
¿Qué son los objetivos específicos y cómo se relacionan con el objetivo general?
Back: Son pasos concretos y medibles (entre 3 y 6) que desglosan el objetivo general. El cumplimiento de todos los específicos lleva al cumplimiento del general.
Tags: sistemas-informacion-2 concepto
END

START
Básico
¿Con qué tipo de verbo deben empezar los objetivos (generales y específicos)?
Back: Con verbos de acción en infinitivo (ej. diseñar, implementar, validar, analizar, desarrollar, integrar).
Tags: sistemas-informacion-2 concepto
END

START
Básico
Pon un ejemplo de objetivo general y un específico para un sistema de gestión documental.
Back: General: "Desarrollar un sistema de gestión documental para TransRápida SRL". Específico: "Implementar un módulo de indexación automática con metadatos".
Tags: sistemas-informacion-2 concepto ejemplo
END