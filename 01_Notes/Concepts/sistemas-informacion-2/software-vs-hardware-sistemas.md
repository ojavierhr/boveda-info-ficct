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

# Software vs Hardware en sistemas de información

## 📖 Definición simple

%%
Explicalo como si el que lo va a leer nunca oyó hablar del tema.

- Sin tecnicismos.
- Sin siglas sin explicar.
- Una o dos oraciones máximo.
- Si no podés hacerlo simple, todavía no lo entendiste del todo (Feynman dixit).
%%

En un sistema de información, el **hardware** es la parte física (computadoras, servidores, discos, cables) y el **software** es la parte lógica (programas, instrucciones, datos). El hardware es el "cuerpo" de la máquina; el software es el "cerebro" que le dice qué hacer. Ninguno sirve sin el otro.

## 🧩 Explicación técnica

%%
Ahora sí la versión completa con términos técnicos, fórmulas, estructura, etc. Podés usar tablas:

- Listas
- Diagramas
- Bloques de código
- Tablas
- Imagenes
%%

En el contexto de los sistemas de información, **hardware** y **software** son dos componentes fundamentales e interdependientes. Se estudiaron en Sistemas de Información 1 y se aplican en el perfil del proyecto.

### Hardware

Conjunto de elementos físicos, tangibles, que componen un sistema informático. Se clasifica en:

- **Hardware de procesamiento:** CPU, microcontroladores.
- **Hardware de almacenamiento:** discos duros (HDD, SSD), memoria RAM.
- **Hardware de entrada/salida:** teclado, mouse, pantalla, escáner, impresora.
- **Hardware de comunicaciones:** tarjetas de red, routers, switches, cables.

### Software

Conjunto de programas, datos y documentación asociada que permite al hardware realizar tareas específicas. Se clasifica en:

- **Software de sistema:** sistema operativo (Windows, Linux), controladores, utilidades.
- **Software de aplicación:** programas que resuelven necesidades específicas (navegadores, procesadores de texto, ERP, CRM).
- **Software de programación:** compiladores, editores, entornos de desarrollo (IDE).

### Relación e interdependencia

| Aspecto | Hardware | Software |
|---------|----------|----------|
| **Naturaleza** | Físico, tangible | Lógico, intangible |
| **Durabilidad** | Se desgasta, puede fallar físicamente | No se desgasta, pero puede tener errores (bugs) |
| **Costo** | Compra única (con depreciación) | Licencia, suscripción o desarrollo propio |
| **Modificación** | Requiere reemplazo físico | Se puede actualizar o parchear |
| **Ejecución** | El hardware ejecuta instrucciones del software | El software necesita hardware para correr |

**Frase clave:** "El hardware es el escenario; el software es la obra de teatro."

## 🔗 Se conecta con

%%
Links a otras notas atómicas relacionadas.
Esto es lo que convierte tus notas en una red (Zettelkasten) en vez de una lista.

Agregá todos los conceptos que se relacionen con este.
%%

- [[componentes-sistema-informacion-computacional]]
- [[sistemas-operativos]]
- [[software-de-aplicacion]]
- [[arquitectura-hardware]]

## 🌍 Ejemplo concreto

%%
Un caso real (puede ser codigo) sobre el concepto. Los ejemplos concretos son lo que hace que el concepto "enganche" en la memoria.
%%

**Caso: Sistema de gestión documental para TransRápida SRL**

- **Hardware necesario:**
  - Servidor (puede ser en la nube: instancia EC2 de AWS, o físico: Dell PowerEdge).
  - PCs de los empleados (5 equipos con al menos 8 GB RAM, SSD).
  - Escáner de alta velocidad (para digitalizar documentos en papel).
  - Impresora (para reportes ocasionales).
  - Switch y cableado de red (o Wi-Fi empresarial).

- **Software necesario:**
  - Sistema operativo del servidor (Ubuntu Linux o Windows Server).
  - Sistema operativo de las PCs (Windows 10/11).
  - Navegador web (Chrome, Firefox) para acceder al sistema.
  - Aplicación de gestión documental desarrollada por el grupo (Django + React).
  - Motor de OCR (Tesseract) para extraer texto de imágenes.
  - Herramientas de respaldo (rsync, Bacula) y monitorización.

**Interacción:** El usuario abre el navegador (software de aplicación) sobre Windows (software de sistema) en su PC (hardware). El navegador envía una petición al servidor (hardware) que ejecuta la aplicación Django (software). El servidor procesa y devuelve la respuesta. Sin el hardware, el software no puede ejecutarse; sin el software, el hardware es solo metal y plástico inútil.

## ⚠️ Errores comunes

%%
¿Qué confunde a la gente con este concepto?
¿Con qué otro concepto se suele mezclar?
¿Qué pensabas vos antes de entenderlo bien?
%%

- **Creer que el software puede funcionar sin hardware:** Es imposible. Todo software necesita un dispositivo físico para ejecutarse (aunque sea una máquina virtual, detrás hay hardware real).
- **Pensar que el hardware es más importante que el software (o viceversa):** Son complementarios. Un hardware potente con mal software rinde poco; un software excelente en hardware obsoleto también.
- **Confundir "software de sistema" con "software de aplicación":** El sistema operativo es software de sistema; el programa de gestión documental es de aplicación. Ambos son software, pero cumplen roles distintos.
- **Olvidar incluir ambos en el perfil del proyecto:** En la sección de elementos del sistema, se deben listar tanto los requerimientos de hardware como de software.

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
¿Qué diferencia al hardware del software en un sistema de información?
Back: El hardware es la parte física y tangible (servidores, PCs, discos). El software es la parte lógica e intangible (programas, instrucciones, datos).
Tags: sistemas-informacion-2 concepto
END

START
Básico
Menciona dos ejemplos de hardware y dos de software.
Back: Hardware: servidor, PC, escáner, impresora. Software: sistema operativo, navegador, aplicación Django, motor OCR.
Tags: sistemas-informacion-2 concepto
END

START
Básico
¿Por qué el hardware y el software son interdependientes?
Back: Porque el hardware necesita instrucciones (software) para funcionar, y el software necesita un soporte físico (hardware) para ejecutarse. Ninguno sirve sin el otro.
Tags: sistemas-informacion-2 concepto
END

START
Básico
Pon un ejemplo de hardware y software para un sistema de gestión documental.
Back: Hardware: servidor Dell PowerEdge, PCs de empleados, escáner. Software: Ubuntu Server, aplicación Django+React, motor Tesseract OCR.
Tags: sistemas-informacion-2 concepto ejemplo
END