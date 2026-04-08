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

# Documentación técnica y funcional de un sistema de información

## 📖 Definición simple

%%
Explicalo como si el que lo va a leer nunca oyó hablar del tema.

- Sin tecnicismos.
- Sin siglas sin explicar.
- Una o dos oraciones máximo.
- Si no podés hacerlo simple, todavía no lo entendiste del todo (Feynman dixit).
%%

La documentación de un sistema de información son los **registros escritos** (manuales, guías, especificaciones) que describen cómo funciona el sistema, cómo se usa y cómo se mantiene. Hay dos tipos: la **técnica** (para programadores y administradores) y la **funcional** (para usuarios finales). Sin documentación, el sistema se vuelve incomprensible para quienes lo operan o lo modifican.

## 🧩 Explicación técnica

%%
Ahora sí la versión completa con términos técnicos, fórmulas, estructura, etc. Podés usar tablas:

- Listas
- Diagramas
- Bloques de código
- Tablas
- Imagenes
%%

En el contexto de los sistemas de información, la **documentación** es uno de los seis componentes fundamentales. A menudo olvidada, es esencial para la operación, mantenimiento y evolución del sistema. Se clasifica en dos grandes categorías:

### Documentación técnica

Dirigida a desarrolladores, administradores de sistemas, y personal de soporte. Su objetivo es explicar la **arquitectura interna**, la configuración y los procedimientos de mantenimiento.

**Contenido típico:**
- Manual de arquitectura (diagramas de componentes, despliegue).
- Especificación de la base de datos (modelo entidad-relación, diccionario de datos).
- Documentación del código (comentarios, guías de estilo, API).
- Manual de instalación y configuración (servidores, dependencias, variables de entorno).
- Manual de administración (backups, monitoreo, recuperación ante desastres).
- Guía de despliegue (pasos para poner en producción nuevas versiones).

### Documentación funcional

Dirigida a usuarios finales, gerentes y personal de negocio. Su objetivo es explicar **qué hace el sistema** y **cómo se usa** desde la perspectiva del negocio.

**Contenido típico:**
- Manual de usuario (cómo realizar tareas comunes: subir documento, buscar, aprobar).
- Guía de inicio rápido (primeros pasos).
- Especificación de requisitos (qué debe hacer el sistema).
- Casos de uso (interacciones actor-sistema).
- Reglas de negocio documentadas.
- Preguntas frecuentes (FAQ).

**Formato de la documentación:**
- Puede ser texto, PDF, wikis internas, o incluso vídeos.
- Debe mantenerse actualizada con cada cambio del sistema.
- Se entrega como parte del proyecto (en el perfil, se menciona que se incluirá).

**Importancia en el perfil del proyecto:**  
El docente indica que la documentación debe contemplarse desde el inicio. En la sección de "Elementos del sistema", se describe qué tipo de documentación se generará (manuales, especificaciones, etc.).

## 🔗 Se conecta con

%%
Links a otras notas atómicas relacionadas.
Esto es lo que convierte tus notas en una red (Zettelkasten) en vez de una lista.

Agregá todos los conceptos que se relacionen con este.
%%

- [[componentes-sistema-informacion-computacional]]
- [[manual-de-usuario]]
- [[manual-tecnico]]
- [[especificacion-de-requisitos]]
- [[diagramas-uml]]

## 🌍 Ejemplo concreto

%%
Un caso real (puede ser codigo) sobre el concepto. Los ejemplos concretos son lo que hace que el concepto "enganche" en la memoria.
%%

**Caso: Sistema de gestión documental para TransRápida SRL**

**Documentación técnica (para el equipo de TI de la empresa):**
- **Manual de instalación:** Cómo desplegar la aplicación Django en un servidor Ubuntu, instalar PostgreSQL, configurar el motor OCR Tesseract.
- **Diagrama de arquitectura:** Componentes (frontend React, backend API, base de datos, almacenamiento de archivos).
- **Diccionario de datos:** Tablas (documentos, usuarios, logs) con campos y tipos.
- **Guía de respaldo:** Script para hacer backup de la base de datos y los archivos diariamente.
- **API Reference:** Endpoints disponibles (subir, buscar, aprobar) con ejemplos de peticiones.

**Documentación funcional (para los empleados de TransRápida):**
- **Manual de usuario (operador):** "Cómo subir un documento", "Cómo buscar una factura", "Qué hacer si el sistema rechaza un archivo".
- **Manual de usuario (supervisor):** "Cómo aprobar o rechazar documentos", "Cómo ver el historial de aprobaciones".
- **Guía de inicio rápido:** Una página con los 5 pasos principales para empezar a usar el sistema.
- **Reglas de negocio documentadas:** "Los documentos con monto > $5000 requieren aprobación del gerente".

**Valor añadido:** Si el programador original se va, otro puede mantener el sistema gracias a la documentación técnica. Si un empleado nuevo ingresa, aprende a usar el sistema con los manuales funcionales.

## ⚠️ Errores comunes

%%
¿Qué confunde a la gente con este concepto?
¿Con qué otro concepto se suele mezclar?
¿Qué pensabas vos antes de entenderlo bien?
%%

- **Creer que la documentación es solo el manual de usuario:** Falta la documentación técnica, que es igual de importante para el mantenimiento a largo plazo.
- **Pensar que se puede documentar al final del proyecto:** La documentación debe ser **progresiva** (se escribe mientras se desarrolla). Dejarla para el final garantiza que esté incompleta o desactualizada.
- **Confundir comentarios en el código con documentación técnica:** Los comentarios ayudan, pero no reemplazan un manual de arquitectura o un diccionario de datos.
- **No actualizar la documentación cuando el sistema cambia:** Una documentación desactualizada es peor que ninguna, porque genera confusión.

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
¿Qué es la documentación de un sistema de información?
Back: Son los registros escritos (manuales, guías, especificaciones) que describen cómo funciona, se usa y se mantiene el sistema. Incluye documentación técnica (para desarrolladores) y funcional (para usuarios).
Tags: sistemas-informacion-2 concepto
END

START
Básico
¿Cuál es la diferencia entre documentación técnica y funcional?
Back: La documentación técnica está dirigida a desarrolladores y administradores (arquitectura, instalación, API). La documentación funcional está dirigida a usuarios finales (manual de uso, casos de uso, reglas de negocio).
Tags: sistemas-informacion-2 concepto diferencia
END

START
Básico
Menciona dos ejemplos de documentación técnica y dos de documentación funcional.
Back: Técnica: manual de instalación, diccionario de datos, diagrama de arquitectura. Funcional: manual de usuario, guía de inicio rápido, especificación de requisitos.
Tags: sistemas-informacion-2 concepto ejemplo
END

START
Básico
¿Por qué es importante incluir la documentación desde el inicio del proyecto?
Back: Porque documentar al final suele generar documentación incompleta o desactualizada. La documentación progresiva asegura que refleje el estado real del sistema y sea útil para el mantenimiento.
Tags: sistemas-informacion-2 concepto
END