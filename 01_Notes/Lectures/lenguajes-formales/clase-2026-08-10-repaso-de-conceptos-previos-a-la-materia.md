---
tipo: clase
materia: lenguajes-formales
semestre: 2-2026
fecha: 2026-08-10
docente: Carlos Miranda Carrasco
estado: 🟡 sin-revisar
tags:
  - clase
  - lenguajes-formales
---

%% ↑↑↑↑↑↑↑↑↑↑↑↑
No borrar ni renombrar estos campos de arriba. Son meta-datos que se usan para algunas configuraciones no están pensados tanto para la lectura.
Los campos que sí se pueden editar son:
- estado: 🟡 sin-revisar → 🟢 procesada (cuando completes preguntas + resumen + conceptos)
- tags: agregar etiquetas adicionales si quieres
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

# Clase 2026-08-10 Repaso de Conceptos Previos a la Materia

## 📋 Información

- **Materia:** `=this.materia`
- **Docente:** `=this.docente`

---

## 📝 Notas de Clase

%% 
ZONA DE CAPTURA
Durante la clase, escribís aquí todo lo que el docente dice. No te preocupes por la estructura. Capturá todo sin filtrar.
Podés usar: viñetas, código, tablas, lo que sea más rápido.
%%
Se propuso este ejercicio sobre relaciones de conjuntos. Dado: 

$A = \{8, silla, \emptyset, \{a, b\}\}$
$B = \{2, 4, 6\}$
Construir $f: A \to B, f$ es biyectiva

**sol.**

$f: A \to B$
$f(8)=6$
$f(silla)=4$
$f(\{a,b\})=2$

![[Drawing 2026-08-17 02.38.59.excalidraw]]

Algunos conceptos ya establecidos sobre conjuntos son:

1. Si $A \subseteq B$ entonces $|A| \le |B|$
2. Si $A \subset B$ entonces $|A| < |B|$
3. La medidad de $A$ es cero si y solo si $A=0$

Pero al tratar con conjuntos infinitos imaginar los tamaños puede ser imposible de manera intuitiva. Por ejemplo si tuviéramos el conjunto de múltiplos de 13 y otra de cuadrados perfectos ¿Cual es mas grande?

Para ello recurrimos a la teoría que dice:

### Equivalencia entre conjuntos

Sean dos conjuntos $A$ y $B$. Se dice que son equivalentes entre si si y solo si existe $f: A \to B$ biyectiva.

**NOTA:** Tenemos que demostrar que la función es biyectiva de la misma forma que lo hicimos en el ejercicio anterior.

Por ejemplo, 

Sea $A =$ "cuadrados perfectos" y $B=$ "múltiplos de 13" verificar que si son equivalentes.

**Sol:**
Definimos los conjuntos:

$A = \{ k^2 \mid k \in \mathbb{N} \}$
$B = \{ 2k \mid k \in \mathbb{N} \}$

Necesitamos proponer una $f: A \to B$ que sea biyectiva, por ejemplo $f(k^2) = 2k$. Construimos entonces la funcion:

$f: A \to B$
$k=0 \mid f(0²)=2(0)$
$k=1 \mid f(1²)=2(1)$
$k=2 \mid f(2²)=2(2)$
...
$k=n \mid f(n²)=2(n)$

Entonces como para todo $k$ existe un dominio y un codominio valido entonces SI SON EQUIVALENTE.

### Conjunto Finito

Un conjunto es finito si es equivalente con $\{1, 2, 3, 4, ..., n\}$ para algun $n \in N$, entendemos también que para "n=0" la equivalencia es para el $\emptyset$.

### Cardinalidad

Si $A$ y $\{1, 2, 3, ..., n\}$ son equivalentes entonces se dice que la cardinalidad de $A$ es $n$ y se simboliza por $|A|=n$.

Notar que para un conjunto finito el numero $n$ es el numero de elementos del conjunto.

### Conjunto Infinito

Un conjunto es infinito si no es finito.

---

## ❓ Preguntas y Palabras Clave

%% 
ZONA DE ACTIVE RECALL
Completar DESPUÉS de clase, SIN mirar las notas de arriba.
El objetivo es intentar recordar los conceptos clave por tu cuenta.
Si no podés responder una pregunta → ahí está tu laguna de conocimiento.
Ejemplo: 
| ¿Qué es el teorema de Bayes? | Fórmula para actualizar probabilidades con evidencia |
%%

| Pregunta / Keyword | Respuesta corta |
|--------------------|-----------------|
|                    |                 |
|                    |                 |

---

## 💡 Resumen

%% 
ZONA DE SÍNTESIS
Explicar con tus propias palabras de qué trató la clase. Máximo 5-8 líneas. Sin copiar de las notas de arriba.
Si no podés resumirlo, todavía no lo entendiste.
%%

---

## 🔗 Conceptos para procesar en notas atómicas

%% 
Lista de conceptos de esta clase que merecen su propia nota atómica.
Una vez que creés la nota atómica, marcás el checkbox como hecho [x].
Podés escribir el concepto y luego crear el enlace con [[ ]].
%%

- [ ] [[posible-concepto-a-profundizar]]

---

## ✅ Tareas de la clase

%% 
Anotá aquí las tareas entregables, lecturas, ejercicios o cualquier acción que surja de la clase.
Usá el formato estándar de tareas:
- [ ] Descripción de la tarea
- [ ] 📅 YYYY-MM-DD Descripción con fecha (opcional)
Estas tareas aparecerán automáticamente en el Dashboard (bloque  de codigo tipo "tasks").
Si la tarea pertenece a un proyecto grande, mejor anotarla directamente en la nota del proyecto.
%%

- [ ] 📅 YYYY-MM-DD Descripción con fecha (opcional)

---

## 🃏 Flashcards → Anki

%% 
Cada bloque START/END se convierte en una tarjeta en Anki.
Para sincronizar: abrí Anki → en Obsidian Ctrl+P → "Obsidian to Anki: Sync"
Tipo "Básico" = una pregunta, una respuesta.
Las etiquetas se generan automáticamente con el slug sanitizado (sin espacios) y "clase".
%%

%%Flashcard simple%%
START
Básico
Anverso: ¿Pregunta sobre el tema de la clase?
Reverso: Respuesta concisa y completa.
Tags: Tags: lenguajes-formales clase
<!--ID: 1786620861340-->
END

%%Flashcard para escribir la respuesta%%
START
Básico (teclear la respuesta)
Anverso: ¿Pregunta sobre el tema de la clase?
Reverso: Respuesta concisa y completa.
Tags: Tags: lenguajes-formales clase
<!--ID: 1786620861342-->
END

---

## 🔙 Volver al índice

[[03_Areas/lenguajes-formales/MOC-lenguajes-formales|Volver al MOC de lenguajes-formales]]