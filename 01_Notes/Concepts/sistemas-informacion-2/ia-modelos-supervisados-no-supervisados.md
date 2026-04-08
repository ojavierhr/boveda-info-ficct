---
tipo: concepto
materia: sistemas-informacion-2
semestre: 7
fecha-creacion: 2026-04-07
dificultad: 🟡 media
estado: 🔵 borrador
tags: [concepto, ia, machine-learning, parcial1]

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

# Modelos de Machine Learning: supervisados y no supervisados

## 📖 Definición simple

%%
Explicalo como si el que lo va a leer nunca oyó hablar del tema.

- Sin tecnicismos.
- Sin siglas sin explicar.
- Una o dos oraciones máximo.
- Si no podés hacerlo simple, todavía no lo entendiste del todo (Feynman dixit).
%%

En Machine Learning, los **modelos supervisados** aprenden a partir de ejemplos etiquetados (como un profesor que enseña con respuestas correctas). Los **modelos no supervisados** encuentran patrones ocultos en datos sin etiquetar (como un detective que agrupa cosas similares sin ayuda). En el sistema de auxilio mecánico, los supervisados podrían clasificar incidentes (batería, llanta, choque) usando fotos etiquetadas; los no supervisados podrían agrupar talleres por comportamiento o descubrir nuevas categorías de averías.

## 🧩 Explicación técnica

%%
Ahora sí la versión completa con términos técnicos, fórmulas, estructura, etc. Podés usar tablas:

- Listas
- Diagramas
- Bloques de código
- Tablas
- Imagenes
%%

En el contexto del parcial 1, el **dashboard con Machine Learning** puede incluir proyecciones de datos y modelos tanto supervisados como no supervisados. Aunque no es obligatorio implementarlos completamente en la demo, se debe explicar el concepto en el fundamento teórico.

### Aprendizaje supervisado

- **Definición:** El algoritmo entrena con un conjunto de datos que contiene **entradas y salidas esperadas** (etiquetas). Aprende una función que mapea entrada → salida.
- **Etiquetas conocidas:** Sí.
- **Objetivo:** Predecir o clasificar sobre datos nuevos.
- **Algoritmos típicos:** Regresión lineal, árboles de decisión, SVM, redes neuronales.

**Aplicación en el sistema:** Clasificar el tipo de incidente (BATT, TIRE, CRASH, ENGINE) a partir de características extraídas del audio, texto y fotos. Para ello se necesitaría un conjunto de datos etiquetado con miles de ejemplos de averías.

### Aprendizaje no supervisado

- **Definición:** El algoritmo trabaja con datos **sin etiquetar**. Descubre estructuras, agrupamientos o relaciones ocultas.
- **Etiquetas conocidas:** No.
- **Objetivo:** Encontrar patrones intrínsecos.
- **Algoritmos típicos:** K-means, clustering jerárquico, PCA (análisis de componentes principales), reglas de asociación.

**Aplicación en el sistema:** Agrupar talleres según su comportamiento (velocidad de respuesta, tipos de incidentes que atienden más) o segmentar clientes por patrones de uso. También se podría usar para detectar incidentes anómalos (fallas poco comunes).

### Dashboard con Machine Learning en el parcial

El docente mencionó la posibilidad de incluir en el dashboard:

- **Proyección de datos:** Usar modelos supervisados (regresión) para predecir, por ejemplo, la demanda de auxilios por hora o día, basándose en datos históricos.
- **Modelos supervisados:** Clasificación de incidentes o predicción de tiempo de respuesta.
- **Modelos no supervisados:** Segmentación de talleres o clientes, detección de agrupaciones naturales.

**Implementación práctica (para la demo):** Se puede simular un dashboard que muestre gráficos "generados por ML" con datos precalculados o estáticos, explicando en el informe que se usarían modelos reales con datos históricos.

### Diferencia clave

| Característica | Supervisado | No supervisado |
|----------------|-------------|----------------|
| Datos de entrenamiento | Etiquetados | Sin etiquetar |
| Necesita ejemplo de salida | Sí | No |
| Tarea típica | Clasificación, regresión | Clustering, reducción de dimensionalidad |
| Ejemplo | Clasificar una foto como "choque" o "no choque" | Agrupar fotos de daños sin saber qué tipo son |

## 🔗 Se conecta con

%%
Links a otras notas atómicas relacionadas.
Esto es lo que convierte tus notas en una red (Zettelkasten) en vez de una lista.

Agregá todos los conceptos que se relacionen con este.
%%

- [[ia-clasificacion-incidentes]]
- [[ia-reconocimiento-imagenes]]
- [[ia-reconocimiento-audio]]
- [[dashboard-machine-learning]]
- [[proyeccion-datos]]

## 🌍 Ejemplo concreto

%%
Un caso real (puede ser codigo) sobre el concepto. Los ejemplos concretos son lo que hace que el concepto "enganche" en la memoria.
%%

**Caso: Aplicación en el sistema de auxilio mecánico**

**Modelo supervisado:**  
Se entrena con 10,000 incidentes históricos donde cada uno tiene fotos y una etiqueta (batería, llanta, choque, motor). El modelo aprende a asociar características visuales con cada tipo. Luego, cuando un cliente sube una foto, el modelo predice la categoría automáticamente. Esto ya está planificado en `ia-reconocimiento-imagenes`.

**Modelo no supervisado:**  
El sistema recopila datos de tiempos de respuesta y montos de servicio de los talleres. Sin etiquetas, aplica K-means para encontrar 3 grupos: "talleres rápidos y caros", "talleres lentos y baratos", "talleres balanceados". Esto podría ayudar a la plataforma a recomendar talleres según la preferencia del cliente (ej. más rápido o más económico).

**Dashboard con ML:**  
Usando regresión lineal (supervisada) sobre datos históricos de incidentes por día, el sistema predice que el próximo domingo habrá 25% más solicitudes. El dashboard muestra una alerta para que los talleres refuercen el personal.

## ⚠️ Errores comunes

%%
¿Qué confunde a la gente con este concepto?
¿Con qué otro concepto se suele mezclar?
¿Qué pensabas vos antes de entenderlo bien?
%%

- **Creer que el aprendizaje no supervisado no necesita datos:** Ambos necesitan datos; la diferencia es si las etiquetas están presentes o no.
- **Pensar que los modelos supervisados siempre son mejores:** Depende del problema. Si no se dispone de etiquetas (costosas de obtener), no supervisado puede ser la única opción.
- **Confundir clustering (no supervisado) con clasificación (supervisado):** En clasificación, las categorías son conocidas de antemano; en clustering, el algoritmo descubre los grupos.
- **Ignorar la necesidad de datos representativos:** Un modelo supervisado entrenado solo con fotos de choques frontales no reconocerá choques laterales. El sesgo en los datos es crítico.

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
¿Cuál es la principal diferencia entre aprendizaje supervisado y no supervisado?
Back: El supervisado usa datos etiquetados (entrada + salida esperada); el no supervisado trabaja con datos sin etiquetar y busca patrones ocultos.
Tags: sistemas-informacion-2 concepto ia
END

START
Básico
Da un ejemplo de modelo supervisado en el sistema de auxilio mecánico.
Back: Clasificar una foto como "choque", "batería" o "llanta" usando un modelo entrenado con imágenes etiquetadas.
Tags: sistemas-informacion-2 concepto ia ejemplo
END

START
Básico
Da un ejemplo de modelo no supervisado en el sistema de auxilio mecánico.
Back: Agrupar talleres por comportamiento (tiempo de respuesta, precio) usando clustering sin etiquetas previas.
Tags: sistemas-informacion-2 concepto ia ejemplo
END

START
Básico
¿Qué tipo de modelo usarías para predecir la cantidad de emergencias el próximo fin de semana?
Back: Un modelo supervisado de regresión (ej. regresión lineal) entrenado con datos históricos de incidentes por día.
Tags: sistemas-informacion-2 concepto ia
END