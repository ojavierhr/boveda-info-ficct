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

# Casos de estudio en empresas

## 📖 Definición simple

%%
Explicalo como si el que lo va a leer nunca oyó hablar del tema.

- Sin tecnicismos.
- Sin siglas sin explicar.
- Una o dos oraciones máximo.
- Si no podés hacerlo simple, todavía no lo entendiste del todo (Feynman dixit).
%%

Un caso de estudio empresarial es una **investigación profunda sobre cómo una empresa real usa (o podría usar) un sistema, proceso o tecnología**. Describe el contexto, el problema que tenían, la solución implementada y los resultados obtenidos. Sirve para aprender de experiencias reales, no solo de teoría.

## 🧩 Explicación técnica

%%
Ahora sí la versión completa con términos técnicos, fórmulas, estructura, etc. Podés usar tablas:

- Listas
- Diagramas
- Bloques de código
- Tablas
- Imagenes
%%

Un **caso de estudio** en el ámbito de sistemas de información es un método de investigación cualitativa que analiza un fenómeno contemporáneo dentro de su contexto real (una empresa específica). Se utilizan múltiples fuentes de evidencia: entrevistas, observación directa, documentos internos, datos de sistemas.

**Estructura típica de un caso de estudio (para la exposición):**

1. **Identificación de la empresa:**
   - Nombre, rubro, tamaño (pyme, gran empresa).
   - Ubicación, antigüedad.

2. **Situación o problema inicial:**
   - ¿Qué necesidad tenía la empresa? (ej. "desorganización de documentos", "inventario desactualizado").
   - ¿Qué dificultades enfrentaba? (ej. pérdida de tiempo, errores contables).

3. **Sistema o solución implementada:**
   - ¿Qué software o proceso introdujeron? (ej. sistema de gestión documental, ERP).
   - ¿Cómo lo implementaron? (fases, personal involucrado).

4. **Resultados obtenidos:**
   - Beneficios cuantitativos (ej. reducción de 30% en tiempo de búsqueda).
   - Beneficios cualitativos (ej. mejor control, menos errores).

5. **Lecciones aprendidas:**
   - Qué funcionó bien, qué no.
   - Recomendaciones para otras empresas.

**Métodos para obtener casos de estudio (para el proyecto):**
- **Entrevista a gerentes o encargados** (estructurada o semiestructurada).
- **Observación directa** (si es posible visitar la empresa).
- **Análisis de documentación pública** (memorias anuales, estudios de mercado).
- **Casos publicados** (Harvard Business Review, revistas académicas, estudios de proveedores de software).

## 🔗 Se conecta con

%%
Links a otras notas atómicas relacionadas.
Esto es lo que convierte tus notas en una red (Zettelkasten) en vez de una lista.

Agregá todos los conceptos que se relacionen con este.
%%

- [[sistemas-gestion-empresarial]]
- [[open-source-vs-comercial]]
- [[entrevista-empresarial]]
- [[investigacion-cualitativa]]
- [[metodologia-caso-de-estudio]]

## 🌍 Ejemplo concreto

%%
Un caso real (puede ser codigo) sobre el concepto. Los ejemplos concretos son lo que hace que el concepto "enganche" en la memoria.
%%

**Caso de estudio: Empresa de logística "TransRápida" (para exposición de gestión documental)**

| Elemento | Descripción |
|----------|-------------|
| **Empresa** | TransRápida SRL, 50 empleados, Santa Cruz. Rubro: logística y distribución de carga. |
| **Problema inicial** | Recibían guías de despacho, facturas y contratos en papel. Se extraviaban documentos, tardaban horas en encontrar una guía, y los auditores externos no podían verificar fácilmente. |
| **Solución implementada** | Adoptaron un sistema de gestión documental (OpenKM Community). Escanean todos los documentos entrantes, los indexan por número de guía y fecha. El acceso es por roles (solo gerente ve contratos). |
| **Resultados** | Reducción del 80% en tiempo de búsqueda de documentos. Cero extravíos en 6 meses. Los auditores ahora acceden vía web con usuario temporal. |
| **Lecciones** | La capacitación del personal fue clave; al principio algunos seguían guardando papeles. También se necesita un escáner de alta velocidad. |

**Cómo se obtuvo:** Entrevista de 30 minutos al gerente administrativo (el grupo 5 de la materia lo contactó por teléfono y luego envió un formulario).

## ⚠️ Errores comunes

%%
¿Qué confunde a la gente con este concepto?
¿Con qué otro concepto se suele mezclar?
¿Qué pensabas vos antes de entenderlo bien?
%%

- **Creer que un caso de estudio es solo una descripción superficial:** Debe incluir datos concretos (tiempos, costos, cantidades) y análisis, no solo "la empresa usa tal software".

- **Confundir caso de estudio con testimonio de proveedor:** Un caso real debe ser objetivo, no una publicidad disfrazada del vendedor. Hay que preguntar también por dificultades o fracasos.

- **Pensar que se necesita una empresa grande y famosa:** Las pymes son excelentes casos de estudio, a menudo más accesibles para entrevistas.

- **No validar la información:** Si solo se entrevista a una persona, puede haber sesgo. Conviene contrastar con documentos o con otro empleado.

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
¿Qué es un caso de estudio empresarial en el contexto de sistemas de información?
Back: Es una investigación profunda sobre cómo una empresa real usa o podría usar un sistema, describiendo el contexto, el problema, la solución implementada y los resultados obtenidos.
Tags: sistemas-informacion-2 concepto
END

START
Básico
¿Cuáles son los cinco elementos típicos de un caso de estudio empresarial?
Back: 1) Identificación de la empresa, 2) Situación o problema inicial, 3) Sistema implementado, 4) Resultados obtenidos, 5) Lecciones aprendidas.
Tags: sistemas-informacion-2 concepto
END

START
Básico
¿Qué métodos se pueden usar para obtener un caso de estudio para el proyecto?
Back: Entrevista a gerentes, observación directa, análisis de documentación pública, o casos publicados en revistas académicas.
Tags: sistemas-informacion-2 concepto
END

START
Básico
Pon un ejemplo de caso de estudio para gestión documental.
Back: TransRápida SRL (logística) – problema: extravío de guías y facturas en papel; solución: OpenKM; resultado: reducción 80% en tiempo de búsqueda, cero extravíos.
Tags: sistemas-informacion-2 concepto ejemplo
END