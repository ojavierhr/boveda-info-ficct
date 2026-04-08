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

# Diferencia entre datos e información

## 📖 Definición simple

%%
Explicalo como si el que lo va a leer nunca oyó hablar del tema.

- Sin tecnicismos.
- Sin siglas sin explicar.
- Una o dos oraciones máximo.
- Si no podés hacerlo simple, todavía no lo entendiste del todo (Feynman dixit).
%%

Los **datos** son hechos en bruto, sin procesar: números, letras, símbolos. La **información** es el resultado de organizar, procesar o interpretar esos datos para darles significado y utilidad. Es la diferencia entre tener una lista de números sueltos y entender qué representan.

## 🧩 Explicación técnica

%%
Ahora sí la versión completa con términos técnicos, fórmulas, estructura, etc. Podés usar tablas:

- Listas
- Diagramas
- Bloques de código
- Tablas
- Imagenes
%%

En el contexto de los sistemas de información, la distinción entre **datos** e **información** es fundamental. Se estudió en Sistemas de Información 1 y se aplica en la descripción de los componentes del sistema.

### Datos

- **Definición:** Representaciones simbólicas (números, caracteres, imágenes, sonidos) que por sí solas no tienen un significado claro.
- **Características:**  
  - Son la materia prima del sistema.  
  - Pueden ser cuantitativos (ej. 25, 100) o cualitativos (ej. "rojo", "aprobado").  
  - No dependen de un contexto interpretativo.
- **Ejemplos:** "30-04-2026", "250", "M", "J-1234".

### Información

- **Definición:** Conjunto de datos procesados, organizados y contextualizados que reducen la incertidumbre y permiten tomar decisiones.
- **Características:**  
  - Es el producto del procesamiento de datos.  
  - Debe ser relevante, oportuna, precisa y completa.  
  - Responde a preguntas como "¿quién?", "¿cuándo?", "¿cuánto?", "¿por qué?".
- **Ejemplos:** "La factura N° J-1234 por $250 fue emitida el 30 de abril de 2026 a nombre del cliente Juan Pérez."

### Proceso de transformación

```
Datos en bruto → (Procesamiento: cálculo, ordenamiento, filtrado, agregación, interpretación) → Información útil
```

**Ejemplo de transformación:**
- **Dato:** "35"
- **Información (con contexto):** "La temperatura actual en Santa Cruz es de 35°C, lo que está por encima del promedio histórico."

**En el sistema de información:**
- Los **datos** se almacenan en bases de datos (tablas, registros).
- Los **procesos** (reglas de negocio, consultas) transforman esos datos en **información** que se presenta a los actores (reportes, dashboards, alertas).

## 🔗 Se conecta con

%%
Links a otras notas atómicas relacionadas.
Esto es lo que convierte tus notas en una red (Zettelkasten) en vez de una lista.

Agregá todos los conceptos que se relacionen con este.
%%

- [[componentes-sistema-informacion-computacional]]
- [[procesos-negocio-sistemas]]
- [[calidad-de-la-informacion]]
- [[base-de-datos]]

## 🌍 Ejemplo concreto

%%
Un caso real (puede ser codigo) sobre el concepto. Los ejemplos concretos son lo que hace que el concepto "enganche" en la memoria.
%%

**Caso: Sistema de gestión documental para TransRápida SRL**

- **Datos en bruto (lo que ingresa al sistema):**
  - `2026-03-15`
  - `factura_1234.pdf`
  - `Juan Pérez`
  - `$500`
  - `aprobado`

- **Procesamiento aplicado:** El sistema asocia la fecha con el documento, relaciona el proveedor con la factura, calcula el IVA, y registra el estado.

- **Información generada (lo que ve el usuario):**
  > "El documento `factura_1234.pdf` fue subido por `Juan Pérez` el `15/03/2026`, corresponde a un gasto de `$500 + $95 de IVA` y tiene estado `aprobado`. Está disponible en la carpeta del proveedor `Transportes XYZ`."

- **Valor añadido:** Con esa información, el gerente puede decidir si pagar la factura o solicitar una revisión. Con solo los datos sueltos, no podría tomar esa decisión.

## ⚠️ Errores comunes

%%
¿Qué confunde a la gente con este concepto?
¿Con qué otro concepto se suele mezclar?
¿Qué pensabas vos antes de entenderlo bien?
%%

- **Usar los términos como sinónimos:** Mucha gente dice "datos" cuando en realidad se refiere a "información". No es lo mismo.
- **Creer que la información es solo datos en pantalla:** La información implica interpretación y contexto. Mostrar una tabla con números sin explicación sigue siendo datos.
- **Pensar que el proceso es unidireccional:** A veces la información se convierte nuevamente en datos para otros procesos (ej. un reporte resumido se guarda como dato histórico).
- **Ignorar la calidad de los datos:** Si los datos de entrada son incorrectos ("basura entra"), la información generada también será incorrecta ("basura sale").

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
¿Cuál es la diferencia fundamental entre datos e información?
Back: Los datos son hechos en bruto, sin procesar y sin contexto. La información es el resultado de procesar, organizar e interpretar los datos, dándoles significado y utilidad.
Tags: sistemas-informacion-2 concepto
END

START
Básico
¿Qué características debe tener la información para ser útil?
Back: Relevante, oportuna, precisa, completa, y que reduzca la incertidumbre para la toma de decisiones.
Tags: sistemas-informacion-2 concepto
END

START
Básico
Da un ejemplo de dato y su correspondiente información en un sistema de gestión documental.
Back: Dato: "2026-03-15" y "factura_1234.pdf". Información: "La factura factura_1234.pdf fue subida el 15 de marzo de 2026 por el operador Juan Pérez y está pendiente de aprobación."
Tags: sistemas-informacion-2 concepto ejemplo
END