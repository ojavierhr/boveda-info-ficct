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

# Componentes de un sistema de información computacional

## 📖 Definición simple

%%
Explicalo como si el que lo va a leer nunca oyó hablar del tema.

- Sin tecnicismos.
- Sin siglas sin explicar.
- Una o dos oraciones máximo.
- Si no podés hacerlo simple, todavía no lo entendiste del todo (Feynman dixit).
%%

Un sistema de información computacional está formado por **seis partes que trabajan juntas**: el software (las instrucciones), el hardware (las máquinas), los datos (la materia prima), los procesos (las reglas de negocio), los actores (las personas o entidades que lo usan) y la documentación (los manuales y registros). Sin alguno de estos, el sistema no funciona completamente.

## 🧩 Explicación técnica

%%
Ahora sí la versión completa con términos técnicos, fórmulas, estructura, etc. Podés usar tablas:

- Listas
- Diagramas
- Bloques de código
- Tablas
- Imagenes
%%

Un **sistema de información basado en computadoras** (también llamado sistema de información computacional) es un conjunto interrelacionado de componentes que recolectan, procesan, almacenan y distribuyen información para apoyar la toma de decisiones y el control en una organización. Según la clase del 25/03/2026, se identifican **seis componentes esenciales**:

| Componente | Descripción técnica |
|------------|---------------------|
| **Software** | Conjunto de programas, instrucciones y rutinas que permiten al hardware procesar datos. Incluye sistemas operativos, aplicaciones, middleware. |
| **Hardware** | Equipos físicos (servidores, PCs, dispositivos móviles, periféricos, redes) que ejecutan el software. |
| **Datos** | Hechos en bruto, símbolos, números, textos, imágenes que aún no han sido interpretados. Al procesarse se convierten en información. |
| **Procesos** | Reglas de negocio, flujos de trabajo, procedimientos y actividades que transforman datos en información útil. Definen cómo, cuándo y por quién se realizan las tareas. |
| **Actores** | Personas o entidades externas (clientes, proveedores, empleados, sistemas externos) que interactúan con el sistema, ya sea generando datos o recibiendo información. |
| **Documentación** | Registros técnicos (manuales de usuario, especificaciones de diseño, diagramas, historiales de cambios) y funcionales (políticas, procedimientos) que describen el sistema. |

**Relaciones entre componentes:**
- El **software** se ejecuta sobre el **hardware**.
- Los **datos** son la materia prima; los **procesos** los transforman.
- Los **actores** operan el software y siguen los procesos.
- La **documentación** describe todo lo anterior y sirve para operar y mantener el sistema.

**Importancia en el perfil del proyecto:**  
En la sección correspondiente del perfil, se deben describir estos seis componentes aplicados al sistema específico (ej. gestión documental) en un entorno de producción o funcionamiento real.

## 🔗 Se conecta con

%%
Links a otras notas atómicas relacionadas.
Esto es lo que convierte tus notas en una red (Zettelkasten) en vez de una lista.

Agregá todos los conceptos que se relacionen con este.
%%

- [[estructura-perfil-proyecto]]
- [[software-vs-hardware-sistemas]]
- [[datos-informacion-diferencia]]
- [[procesos-negocio-sistemas]]
- [[actores-sistema-informacion]]
- [[documentacion-tecnica-funcional]]
- [[sistemas-informacion-empresarial]]

## 🌍 Ejemplo concreto

%%
Un caso real (puede ser codigo) sobre el concepto. Los ejemplos concretos son lo que hace que el concepto "enganche" en la memoria.
%%

**Caso: Sistema de gestión documental para TransRápida SRL (proyecto del Grupo 5)**

Aplicación de los seis componentes al sistema en producción:

| Componente | Ejemplo concreto |
|------------|------------------|
| **Software** | Aplicación web desarrollada en Django + React, más el motor de OCR y la base de datos PostgreSQL. |
| **Hardware** | Servidor en la nube (AWS EC2) o un servidor local Dell PowerEdge. PCs de los empleados, escáner de documentos. |
| **Datos** | Archivos PDF, imágenes, metadatos (fecha, proveedor, tipo), logs de usuario. |
| **Procesos** | Flujo de aprobación: operador sube documento → supervisor revisa → aprueba o rechaza → notificación por email. Reglas de retención (guardar 5 años). |
| **Actores** | Operadores (suben documentos), supervisores (aprueban), gerente (consulta reportes), sistema de facturación externo (consume API). |
| **Documentación** | Manual de usuario (cómo subir/buscar), manual técnico (arquitectura, API), especificación de requisitos, diagramas UML. |

Sin alguno de estos componentes, el sistema no estaría completo. Por ejemplo, sin documentación, el mantenimiento sería imposible; sin procesos, no habría reglas de negocio.

## ⚠️ Errores comunes

%%
¿Qué confunde a la gente con este concepto?
¿Con qué otro concepto se suele mezclar?
¿Qué pensabas vos antes de entenderlo bien?
%%

- **Confundir sistema de información con solo software:** Muchos creen que un sistema de información es solo el programa. En realidad incluye hardware, datos, procesos, actores y documentación.
- **Olvidar la documentación como componente:** Frecuentemente se ignora, pero es esencial para la operación y mantenimiento a largo plazo.
- **Mezclar actores con roles internos del software:** Los actores son entidades externas al sistema (personas reales o sistemas externos), no los usuarios ficticios de un diagrama de casos de uso (aunque pueden coincidir).
- **No distinguir entre datos e información:** Los datos son la materia prima (ej. "25/03/2026") y la información es el resultado procesado (ej. "la factura se emitió el 25/03/2026").

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
¿Cuáles son los seis componentes de un sistema de información computacional?
Back: Software, hardware, datos, procesos, actores y documentación.
Tags: sistemas-informacion-2 concepto
END

START
Básico
¿Qué función cumple la documentación en un sistema de información?
Back: Proporciona registros técnicos (manuales, especificaciones) y funcionales que describen la arquitectura, operación y evolución del sistema.
Tags: sistemas-informacion-2 concepto
END

START
Básico
¿Cuál es la diferencia entre datos e información en este contexto?
Back: Los datos son hechos en bruto (símbolos, números); la información es el resultado de procesar esos datos, dándoles significado y contexto.
Tags: sistemas-informacion-2 concepto diferencia
END

START
Básico
Pon un ejemplo de cada componente para un sistema de gestión documental.
Back: Software: Django+React; Hardware: servidor y PCs; Datos: PDFs y metadatos; Procesos: flujo de aprobación; Actores: operador y supervisor; Documentación: manual de usuario.
Tags: sistemas-informacion-2 concepto ejemplo
END