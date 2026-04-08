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

# Beneficios cuantitativos y cualitativos

## 📖 Definición simple

%%
Explicalo como si el que lo va a leer nunca oyó hablar del tema.

- Sin tecnicismos.
- Sin siglas sin explicar.
- Una o dos oraciones máximo.
- Si no podés hacerlo simple, todavía no lo entendiste del todo (Feynman dixit).
%%

En el perfil del proyecto, los **beneficios cuantitativos** son las ventajas que se pueden medir con números (ahorro de dinero, reducción de tiempo, aumento de ventas). Los **beneficios cualitativos** son ventajas que se sienten o se notan pero no se miden fácilmente (mejor experiencia del usuario, mayor control, menos errores). Ambos se deben incluir para convencer al cliente de que el sistema vale la pena.

## 🧩 Explicación técnica

%%
Ahora sí la versión completa con términos técnicos, fórmulas, estructura, etc. Podés usar tablas:

- Listas
- Diagramas
- Bloques de código
- Tablas
- Imagenes
%%

En la evaluación de proyectos de software, los beneficios se clasifican en dos grandes categorías:

### Beneficios cuantitativos (tangibles, medibles)

Son aquellos que pueden expresarse en unidades numéricas, generalmente monetarias o de tiempo. Se pueden calcular con indicadores como:

- **Ahorro de costos:** reducción de gastos operativos (papel, impresión, almacenamiento físico).
- **Aumento de ingresos:** más ventas por mejor atención o por upselling.
- **Reducción de tiempos:** minutos u horas ahorradas por tarea.
- **Disminución de errores:** cantidad de errores evitados (ej. facturas mal emitidas).
- **Productividad:** cantidad de documentos procesados por hora.

**Ejemplos de métricas:**
- Reducción del 70% en tiempo de búsqueda de documentos (de 10 minutos a 3 minutos).
- Ahorro anual de $1.200 en papelería y tóner.
- Disminución del 50% en reclamos por facturación errónea.

### Beneficios cualitativos (intangibles, subjetivos)

Son aquellos que no se miden fácilmente con números, pero aportan valor significativo. Se describen con atributos o percepciones:

- **Mejora en la toma de decisiones:** información más confiable y rápida.
- **Mayor control y transparencia:** se sabe quién modificó cada documento.
- **Satisfacción del cliente:** respuestas más rápidas, menos errores.
- **Cumplimiento normativo:** evita multas por no guardar documentación.
- **Imagen de la empresa:** modernización, digitalización.
- **Reducción de estrés laboral:** empleados menos frustrados por procesos tediosos.

**Cómo presentarlos en el perfil:**
- Usar una tabla o lista separada para cada tipo.
- Ser realista (no exagerar).
- Relacionar cada beneficio con el problema identificado antes.
- Para los cuantitativos, mostrar la fuente del dato (estimación propia, benchmarking, caso similar).

## 🔗 Se conecta con

%%
Links a otras notas atómicas relacionadas.
Esto es lo que convierte tus notas en una red (Zettelkasten) en vez de una lista.

Agregá todos los conceptos que se relacionen con este.
%%

- [[estructura-perfil-proyecto]]
- [[costos-saas-onpremise]]
- [[indicadores-clave-rendimiento]]
- [[retorno-inversion-ROI]]

## 🌍 Ejemplo concreto

%%
Un caso real (puede ser codigo) sobre el concepto. Los ejemplos concretos son lo que hace que el concepto "enganche" en la memoria.
%%

**Caso: Sistema de gestión documental para TransRápida SRL**

**Problemas identificados (recordar):**
- Pérdida de documentos en papel.
- Búsqueda de una factura: 15 minutos en promedio.
- Duplicación de trabajo al reingresar datos.

**Beneficios cuantitativos (medibles):**

| Indicador | Situación actual | Con el sistema | Beneficio |
|-----------|------------------|----------------|------------|
| Tiempo de búsqueda de documento | 15 minutos | 2 minutos | Ahorro de 13 minutos/búsqueda |
| Búsquedas por día (10 empleados) | 50 búsquedas/día | 50 búsquedas/día | Ahorro: 650 minutos/día (~11 horas) |
| Costo de horas hombre | $10/hora | - | Ahorro diario: $110, anual: $28.600 |
| Papel y tóner (insumos) | $200/mes | $20/mes (solo excepciones) | Ahorro anual: $2.160 |
| **Total ahorro anual estimado** | | | **$30.760** |

**Beneficios cualitativos (intangibles):**

- **Trazabilidad:** Se sabe quién subió, modificó o aprobó cada documento.
- **Seguridad:** Acceso por roles (solo gerente ve contratos sensibles).
- **Cumplimiento legal:** Se conservan documentos por 5 años como exige la ley.
- **Satisfacción de los empleados:** Menos frustración por buscar papeles.
- **Imagen digital:** La empresa puede certificar procesos digitales ante clientes.

**Conclusión:** El ahorro cuantitativo anual supera los $30.000, que es mucho mayor al costo de implementación (SaaS ~$1.300/año o on‑premise ~$5.500 año 1). Además, los beneficios cualitativos mejoran el control y la legalidad.

## ⚠️ Errores comunes

%%
¿Qué confunde a la gente con este concepto?
¿Con qué otro concepto se suele mezclar?
¿Qué pensabas vos antes de entenderlo bien?
%%

- **No diferenciar entre cuantitativo y cualitativo:** Mezclarlos en una sola lista sin clasificar. El docente espera dos secciones o dos columnas claras.
- **Poner beneficios cuantitativos sin números:** Decir "ahorro de tiempo" sin estimar minutos/horas no es cuantitativo. Hay que poner una cifra, aunque sea aproximada.
- **Exagerar los números:** Poner ahorros irreales (ej. "ahorro del 500%") resta credibilidad. Usar estimaciones conservadoras y justificadas.
- **Olvidar los beneficios cualitativos:** Algunos grupos solo ponen números y no mencionan ventajas como control, seguridad o satisfacción. Ambos son obligatorios.

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
¿Qué son los beneficios cuantitativos en un proyecto de software?
Back: Son ventajas medibles con números, como ahorro de costos, reducción de tiempo, aumento de productividad o disminución de errores.
Tags: sistemas-informacion-2 concepto
END

START
Básico
¿Qué son los beneficios cualitativos?
Back: Son ventajas intangibles que no se miden fácilmente, como mejor control, seguridad, satisfacción del cliente, cumplimiento normativo o imagen de la empresa.
Tags: sistemas-informacion-2 concepto
END

START
Básico
¿Por qué es necesario incluir ambos tipos de beneficios en el perfil del proyecto?
Back: Porque los cuantitativos muestran el retorno económico, y los cualitativos justifican mejoras en control, seguridad y experiencia que también son valiosas para el cliente.
Tags: sistemas-informacion-2 concepto
END

START
Básico
Pon un ejemplo de beneficio cuantitativo y uno cualitativo para un sistema de gestión documental.
Back: Cuantitativo: ahorro de 13 minutos por búsqueda (aprox. $28.600 anual). Cualitativo: trazabilidad de quién modificó cada documento.
Tags: sistemas-informacion-2 concepto ejemplo
END