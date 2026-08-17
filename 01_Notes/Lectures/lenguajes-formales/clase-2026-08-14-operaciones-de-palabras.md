---
tipo: clase
materia: lenguajes-formales
semestre: 2-2026
fecha: 2026-08-14
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

# clase-2026-08-17-operaciones-de-palabras

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
### Definición recursiva de la transpuesta ($w'$ o $w^R$)

Sea $\Sigma$ un alfabeto y $w \in \Sigma^*$. Definimos la operación transpuesta (inversa) de manera recursiva como:
- **Caso base:** $\lambda' = \lambda$ (la transpuesta de la cadena vacía es la cadena vacía).
- **Paso recursivo:** $(ua)' = a u'$, donde $u \in \Sigma^*$ y $a \in \Sigma$.
---
### Ejercicio 1: Cálculo de la transpuesta de una cadena

**Problema:** Dado $\Sigma = \{a, b\}$ y la cadena $w = baabb$, calcula $w'$ aplicando la definición recursiva.

**Desarrollo:**

Aplicamos la regla de adentro hacia afuera (recursión):
$(baabb)' = b(baab)'$
$(baab)' = b(baa)'$
$(baa)' = a(ba)'$
$(ba)' = a(b)' = a b$

*(Observación: como $b$ es un símbolo del alfabeto, su transpuesta es él mismo, es decir, $b' = b$)*

Sustituyendo los valores de vuelta en la ecuación principal:
$$ (baa)' = a \cdot (ab) = aab $$
$$ (baab)' = b \cdot (aab) = baab $$
$$ (baabb)' = b \cdot (baab) = bbaab $$
**Resultado:**
$$ \therefore w' = bbaab $$
---
### Ejercicio 2: Demostración formal de la invarianza de la longitud
**Teorema:** Demostrar que $\forall w \in \Sigma^*, \; |w'| = |w|$.
**Demostración (por inducción estructural sobre la cadena $w$):**
Definimos el conjunto de palabras que cumplen la propiedad como:
$$ L = \{ w \in \Sigma^* \mid |w'| = |w| \} $$
Demostraremos que $L = \Sigma^*$.
**1. Caso Base ($w = \lambda$):**
Por definición de la transpuesta, $\lambda' = \lambda$.
Por lo tanto:
$$ |\lambda'| = |\lambda| = 0 $$
$\therefore \lambda \in L$. El caso base se cumple.
**2. Paso Inductivo:**
Tomemos una palabra arbitraria $u \in \Sigma^*$ y un símbolo $a \in \Sigma$.
> [!note] **Hipótesis Inductiva (H.I.)**
> Asumimos que $u \in L$, es decir, que se cumple:
> $$ |u'| = |u| $$

> [!tip] **Tesis (lo que queremos probar)**
> Debemos demostrar que la palabra $ua$ también pertenece a $L$, es decir:
> $$ |(ua)'| = |ua| $$

**Desarrollo de la demostración:**
$$ |(ua)'| = |a u'| \quad \text{(por la definición recursiva de transpuesta)} $$
$$ |a u'| = |a| + |u'| \quad \text{(propiedad de la cardinalidad de la concatenación)} $$
Sabemos que $|a| = 1$ porque $a$ es un solo carácter. Aplicando la **Hipótesis Inductiva** ($|u'| = |u|$):
$$ |a| + |u'| = 1 + |u| $$
Finalmente, como $|ua| = |u| + |a| = |u| + 1$:
$$ 1 + |u| = |ua| $$
Hemos llegado a que $|(ua)'| = |ua|$. Esto demuestra que $ua \in L$.
**Conclusión:**
Como se cumplen el caso base y el paso inductivo para cualquier $u \in \Sigma^*$ y $a \in \Sigma$, por el principio de inducción estructural, $L = \Sigma^*$. 
$$ \therefore \forall w \in \Sigma^*, \; |w'| = |w| $$
Queda demostrado el teorema. ✅

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