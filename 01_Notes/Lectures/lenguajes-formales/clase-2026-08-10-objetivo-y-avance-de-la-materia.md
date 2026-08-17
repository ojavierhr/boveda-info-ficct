---
tipo: clase
materia: lenguajes-formales
semestre: 2-2026
fecha: 2026-08-10
docente: Carlos Miranda Carrasco
estado: 🟢 procesada
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

# Clase 2026-08-17 Objetivo y Avance de la Materia

- **Materia:** `=this.materia`
- **Docente:** `=this.docente`

## 📝 Notas de Clase

%% 
ZONA DE CAPTURA
Durante la clase, escribís aquí todo lo que el docente dice. No te preocupes por la estructura. Capturá todo sin filtrar.
Podés usar: viñetas, código, tablas, lo que sea más rápido.
%%

### Objetivo De La Materia

Conocer los distintos dispositivos teóricos formales que sustentan la construcción de
traductores y compiladores.

### Contenido

#### Tema 0: Repaso Previo

**Objetivo:** Repasar y recordar al estudiante contenido previamente avanzado en otras materias, para introducirlo luego al avance "Regular"

**Contenido:**

1. Teoría de conjuntos
	1. Introducción
	2. Subconjuntos
	3. Relaciones y funciones
	4. Operaciones Entre Conjuntos
	5. Demostraciones En Conjuntos

2. Lógica simbólica
	1. Introducción
	2. operadores lógicos
	3. Cuantificadores
	4. Leyes De Inferencia
	5. Demostraciones Preposicionales

#### [[Tema 1 Preliminares Formales]]

**Objetivo:** Establecer la terminología básica y notación referente a algunos
conceptos básicos. Se introduce también varios conceptos y métodos que serán
adaptados a máquinas (comportamiento entrada salida) y autómatas.

**Contenido:**

1. Introducción de preliminares formales
	
	1. Conjuntos Equivalentes
	2. Cardinalidad
	3. Conjunto Contable
		1. Conjunto Contable Finito
		2. Conjunto Contable Infinito
	4. Conjunto No Contable

2. Preliminares
	
	1. Palabras
	2. Longitud
	3. Concatenación
	4. Inducción
	5. Inversa
	6. Potencia
	7. Prefijos
	8. Sufijos
	9. Subpalabras

3. Lenguajes
	
	1. Operaciones
	2. Unión
	3. Intersección
	4. Diferencia
	5. Complemento
	6. Concatenación
	7. Transpuesta
	8. Potencia

4. Representación

5. Expresiones regulares

6. Módulos
	
	1. Conceptos básicos
	2. Interpretación
	3. Representación
	4. Comportamiento dinámico

7. Máquinas
	
	1. Conceptos básicos
	2. Interpretación
	3. Representación
	4. Comportamiento entrada-salida (Análisis, síntesis, verificación)

#### Tema 2: Autómatas

**Objetivo:** Conocer el más simple dispositivo finito aceptador o reconocedor de un
lenguaje.

**Contenido:**

1. Autómatas finitos
	
	1. Conceptos básicos
	2. Interpretación
	3. Representaciones
	4. lenguajes reconocibles
	5. Ejemplos

2. Determinismos y no determinismos
	
	1. Autómata finito determinístico
	2. Autómata finito no determinístico
	3. Equivalencia entre autómatas finitos determinísticos y no determinísticos
	4. propiedades de los lenguajes aceptados por autómatas finitos
	5. Autómatas finitos y expresiones regulares y no regulares

#### Tema 3: Gramáticas Libres De Contexto

**Objetivo:** Establecer un dispositivo generador de lenguaje.

**Contenido:**

1. Lenguajes libres de contexto
	
	1. Gramáticas libres de contexto
	2. Ejemplos
	3. Lenguajes libres de contexto

2. lenguajes regulares y lenguajes libres de contexto

3. Autómatas con pilas

4. Autómatas con pilas y gramáticas libres de contexto

5. Propiedades de los lenguajes libres de contextos
	
	1. Propiedades de clausura
	2. Propiedades de periodicidad
	3. propiedades algorítmicas

6. Determinismo y análisis sintáctico
	
	1. Autómata determinístico con pila y lenguajes libres de contexto
	2. Análisis sintáctico descendente
	3. Análisis sintáctico ascendente

#### Tema 4: Maquinas De Turing

**Objetivo:** Establecer el modelo teórico de computador que originalmente fue
introducido como un método para especificar algoritmos.

**Contenido:**

1. Definición de una máquina de Turing

2. Computaciones con máquinas de Turing

3. Combinación de máquinas de Turing

4. Ejemplos de máquinas de Turing más poderosas

5. Extensiones de máquinas de Turing

6. Máquinas de Turing no determinísticas

---

## 🔙 Volver al índice

[[03_Areas/lenguajes-formales/MOC-lenguajes-formales|Volver al MOC de lenguajes-formales]]