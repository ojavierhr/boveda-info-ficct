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

# MRP (Material Requirements Planning)

## 📖 Definición simple

%%
Explicalo como si el que lo va a leer nunca oyó hablar del tema.

- Sin tecnicismos.
- Sin siglas sin explicar.
- Una o dos oraciones máximo.
- Si no podés hacerlo simple, todavía no lo entendiste del todo (Feynman dixit).
%%

El MRP es un sistema que ayuda a las empresas de fabricación a **calcular qué materiales necesitan, en qué cantidad y para cuándo**, para poder producir sus productos a tiempo sin tener exceso de inventario.

## 🧩 Explicación técnica

%%
Ahora sí la versión completa con términos técnicos, fórmulas, estructura, etc. Podés usar tablas:

- Listas
- Diagramas
- Bloques de código
- Tablas
- Imagenes
%%

El **Material Requirements Planning (MRP)** es un sistema de planificación de la producción y gestión de inventarios. Su objetivo es garantizar la disponibilidad de los materiales necesarios para la producción, minimizando los niveles de stock y los tiempos de espera.

**Entradas del MRP:**
1. **Plan Maestro de Producción (MPS):** qué productos finales se fabricarán y en qué fechas.
2. **Lista de Materiales (BOM):** desglose de todos los componentes, subensamblajes y materias primas que requiere cada producto final.
3. **Registro de inventarios:** cantidades disponibles, pedidos en curso, plazos de entrega de proveedores.

**Salidas del MRP:**
- Órdenes de producción planificadas (para componentes fabricados internamente).
- Órdenes de compra planificadas (para materias primas y componentes comprados).
- Informes de excepciones (retrasos, faltantes, etc.).

**Lógica de cálculo (neteo):**  
`Necesidad neta = Necesidad bruta – (Stock disponible + Pedidos en curso) + Stock de seguridad`

El sistema "explota" la BOM recursivamente, empezando por el producto terminado y bajando hasta la materia prima, calculando las cantidades y fechas necesarias (offset por plazos de entrega). Esto se conoce como **cálculo de necesidades escalonado**.

## 🔗 Se conecta con

%%
Links a otras notas atómicas relacionadas.
Esto es lo que convierte tus notas en una red (Zettelkasten) en vez de una lista.

Agregá todos los conceptos que se relacionen con este.
%%

- [[sistemas-informacion-empresarial]]
- [[plan-maestro-produccion-mps]]
- [[lista-materiales-bom]]
- [[erp-rrhh]] (porque el MRP suele ser un módulo de los ERP)
- [[gestion-inventarios]]

## 🌍 Ejemplo concreto

%%
Un caso real (puede ser codigo) sobre el concepto. Los ejemplos concretos son lo que hace que el concepto "enganche" en la memoria.
%%

Una fábrica de bicicletas recibe un pedido de 100 bicicletas modelo "Montaña" para entregar en 4 semanas.

- **BOM simplificada:** 1 bicicleta = 1 cuadro + 2 ruedas + 1 manubrio + 1 sillín.
- **Inventario actual:** 20 cuadros, 50 ruedas, 30 manubrios, 10 sillines.
- **Plazos:** Cuadro (3 semanas), ruedas (1 semana), manubrio (2 días), sillín (1 semana).

El MRP calcula:
- Necesidad bruta de bicicletas: 100.
- Stock disponible: 20 cuadros → necesidad neta de cuadros: 80.
- Con plazo de 3 semanas, se lanza orden de compra de 80 cuadros en la semana 1.
- Para ruedas: necesidad bruta 200 (2 por bici) – stock 50 = 150. Plazo 1 semana → orden de compra en semana 3.
- Y así sucesivamente.

Sin MRP, la empresa compraría todo junto y tendría exceso de inventario o faltantes.

## ⚠️ Errores comunes

%%
¿Qué confunde a la gente con este concepto?
¿Con qué otro concepto se suele mezclar?
¿Qué pensabas vos antes de entenderlo bien?
%%

- **Confundir MRP con ERP:** El MRP es un módulo dentro de un ERP (sistema integrado más amplio). No son sinónimos.
- **Pensar que el MRP sirve para cualquier tipo de empresa:** El MRP fue diseñado para empresas manufactureras con productos discretos (ensamblaje). No funciona bien en procesos continuos (como petroquímica) o servicios.
- **Ignorar la calidad de los datos de entrada:** Si el BOM o el inventario están mal, el MRP produce resultados erróneos ("basura entra, basura sale").
- **Suponer que el MRP elimina todo el inventario:** El MRP minimiza inventario, pero suele requerir stock de seguridad por incertidumbre en plazos o demanda.

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
¿Qué es MRP (Material Requirements Planning)?
Back: Sistema que calcula qué materiales se necesitan, en qué cantidad y para cuándo, basándose en el plan de producción y la lista de materiales, para evitar faltantes o excesos de inventario.
Tags: sistemas-informacion-2 concepto
END

START
Básico
¿Cuáles son las tres entradas principales del MRP?
Back: Plan Maestro de Producción (MPS), Lista de Materiales (BOM) y Registro de inventarios (stock disponible, pedidos, plazos).
Tags: sistemas-informacion-2 concepto
END

START
Básico
¿Con qué concepto se suele confundir el MRP y en qué se diferencian?
Back: Con ERP. El MRP es un módulo de planificación de materiales dentro de un ERP; el ERP es un sistema integral que cubre finanzas, RRHH, ventas, etc.
Tags: sistemas-informacion-2 concepto error
END

START
Básico
¿Cuál es un ejemplo concreto de aplicación de MRP?
Back: Una fábrica de bicicletas que recibe un pedido de 100 unidades. El MRP desglosa los componentes (cuadro, ruedas, manubrio) y genera órdenes de compra y producción respetando los plazos de entrega de cada material.
Tags: sistemas-informacion-2 concepto ejemplo
END