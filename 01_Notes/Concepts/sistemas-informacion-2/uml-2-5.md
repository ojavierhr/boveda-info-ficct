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

# UML 2.5 (Lenguaje Unificado de Modelado)

## 📖 Definición simple

%%
Explicalo como si el que lo va a leer nunca oyó hablar del tema.

- Sin tecnicismos.
- Sin siglas sin explicar.
- Una o dos oraciones máximo.
- Si no podés hacerlo simple, todavía no lo entendiste del todo (Feynman dixit).
%%

UML es un lenguaje de dibujo estándar para diseñar software. Usa diagramas (con cajitas, flechas y símbolos) para representar cómo está organizado el programa, cómo se comporta y cómo interactúan sus partes. Es como el "plano de arquitectura" pero para programadores.

## 🧩 Explicación técnica

%%
Ahora sí la versión completa con términos técnicos, fórmulas, estructura, etc. Podés usar tablas:

- Listas
- Diagramas
- Bloques de código
- Tablas
- Imagenes
%%

**UML (Unified Modeling Language)** es un lenguaje de modelado visual estandarizado (ISO/IEC 19505) utilizado para especificar, visualizar, construir y documentar los artefactos de un sistema de software. La versión 2.5 (2015) es la especificación vigente, que simplificó la versión 2.4.1 y corrigió inconsistencias.

**Tipos de diagramas UML 2.5 (14 diagramas):**

| Categoría | Diagrama | Propósito |
|-----------|----------|-----------|
| **Estructura** | Diagrama de clases | Muestra clases, atributos, métodos y relaciones (herencia, asociación, composición). |
| | Diagrama de objetos | Instancias concretas de clases en un momento dado. |
| | Diagrama de componentes | Módulos y sus interfaces (encapsulación). |
| | Diagrama de despliegue | Nodos físicos (servidores, PCs) y la ubicación del software. |
| | Diagrama de paquetes | Organización de paquetes y dependencias. |
| | Diagrama de estructura compuesta | Colaboración interna de una clase. |
| **Comportamiento** | Diagrama de casos de uso | Interacciones entre actores (usuarios externos) y el sistema. |
| | Diagrama de actividades | Flujo de trabajo, decisiones, paralelismo (similar a un flowchart). |
| | Diagrama de máquina de estados | Estados de un objeto y transiciones (eventos). |
| **Interacción** | Diagrama de secuencia | Intercambio de mensajes entre objetos a lo largo del tiempo. |
| | Diagrama de comunicación | Similar a secuencia, pero enfocado en enlaces entre objetos. |
| | Diagrama de tiempos | Restricciones temporales entre eventos. |
| | Diagrama de visión general de interacción | Híbrido entre actividades y secuencias. |

**Uso típico en desarrollo (con PUDS):**
- **Requisitos →** Diagrama de casos de uso.
- **Análisis →** Diagrama de clases conceptual, diagramas de secuencia (para escenarios clave).
- **Diseño →** Diagrama de clases detallado (con métodos y tipos), diagrama de componentes.
- **Arquitectura →** Diagrama de despliegue, diagrama de paquetes.

**Herramientas para dibujar UML:** Lucidchart, Draw.io, PlantUML (texto → diagrama), StarUML, Visual Paradigm, o incluso lápiz y papel.

## 🔗 Se conecta con

%%
Links a otras notas atómicas relacionadas.
Esto es lo que convierte tus notas en una red (Zettelkasten) en vez de una lista.

Agregá todos los conceptos que se relacionen con este.
%%

- [[puds-proceso-unificado-desarrollo-software]]
- [[diagrama-de-clases]]
- [[diagrama-de-secuencia]]
- [[casos-de-uso]]
- [[modelado-de-software]]

## 🌍 Ejemplo concreto

%%
Un caso real (puede ser codigo) sobre el concepto. Los ejemplos concretos son lo que hace que el concepto "enganche" en la memoria.
%%

**Caso: Modelar parte del sistema de gestión documental (proyecto de la materia)**

Supongamos que queremos diseñar la funcionalidad "Registrar un documento".

1. **Caso de uso (diagrama):**  
   Actor "Operador" conectado a caso de uso "Registrar documento".  
   Incluye un caso de uso "Validar formato PDF".

2. **Diagrama de clases (estructura):**  
   - Clase `Documento` con atributos: `id: int`, `nombre: string`, `fechaSubida: Date`, `archivoPDF: byte[]`.  
   - Clase `Usuario` con atributos: `id`, `nombre`, `rol`.  
   - Relación: `Usuario` (1) ---sube--- `Documento` (*).

3. **Diagrama de secuencia (interacción):**  

```
Operador → Interfaz: click "Subir documento"  
Interfaz → Controlador: registrarDocumento(datos)  
Controlador → Validador: validarFormato(pdf)  
Validador → Controlador: ok  
Controlador → Repositorio: guardar(doc)  
Repositorio → Controlador: confirmación  
Controlador → Interfaz: éxito  
Interfaz → Operador: mostrar mensaje
```

4. **Diagrama de actividades (flujo alternativo):**  
Si el formato no es válido, se muestra error y no se guarda.

Estos diagramas se dibujan antes de escribir una línea de código. Sirven para comunicar el diseño al equipo y al docente (cliente). Luego la implementación sigue fielmente los diagramas.

## ⚠️ Errores comunes

%%
¿Qué confunde a la gente con este concepto?
¿Con qué otro concepto se suele mezclar?
¿Qué pensabas vos antes de entenderlo bien?
%%

- **Creer que UML es un método de desarrollo:** UML es solo un lenguaje de modelado (herramienta de dibujo). No prescribe cómo organizar el proyecto (para eso está PUDS o metodologías ágiles).

- **Pensar que hay que usar todos los diagramas:** La mayoría de proyectos usan solo 4-5 diagramas (casos de uso, clases, secuencia, actividades, despliegue). El resto son para casos específicos.

- **Confundir UML con código:** Los diagramas son abstracciones; no reemplazan al código. Sirven para entender y comunicar, no para ejecutar.

- **Hacer diagramas demasiado detallados o demasiado vagos:** El nivel de detalle debe ser el suficiente para que otro desarrollador pueda implementar sin adivinar. Un diagrama de clases con 100 atributos es ilegible.

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
¿Qué es UML 2.5?
Back: Lenguaje Unificado de Modelado, un estándar para visualizar, especificar y documentar diseños de software mediante diagramas (clases, casos de uso, secuencia, etc.).
Tags: sistemas-informacion-2 concepto
END

START
Básico
Nombra al menos tres diagramas de UML.
Back: Diagrama de clases, diagrama de casos de uso, diagrama de secuencia, diagrama de actividades, diagrama de despliegue (cualesquiera tres).
Tags: sistemas-informacion-2 concepto
END

START
Básico
¿Para qué se usa el diagrama de casos de uso?
Back: Para representar las interacciones entre actores (usuarios externos) y el sistema, mostrando qué funcionalidades ofrece el sistema desde el punto de vista del usuario.
Tags: sistemas-informacion-2 concepto
END

START
Básico
Describe un ejemplo concreto de uso de UML en el proyecto de gestión documental.
Back: Se dibuja un diagrama de clases con Documento y Usuario, un diagrama de secuencia para el escenario "Registrar documento" (operador → interfaz → controlador → repositorio), y un diagrama de casos de uso con el actor Operador.
Tags: sistemas-informacion-2 concepto ejemplo
END