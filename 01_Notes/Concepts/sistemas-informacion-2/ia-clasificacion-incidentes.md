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

# IA para clasificación de incidentes automotrices

## 📖 Definición simple

%%
Explicalo como si el que lo va a leer nunca oyó hablar del tema.

- Sin tecnicismos.
- Sin siglas sin explicar.
- Una o dos oraciones máximo.
- Si no podés hacerlo simple, todavía no lo entendiste del todo (Feynman dixit).
%%

La IA de clasificación de incidentes es un sistema automático que **escucha, lee y ve** lo que el cliente reporta (audio, texto, fotos) y **decide qué tipo de problema tiene el vehículo**: batería descargada, llanta pinchada, choque, falla de motor u otro. Esto permite enviar el taller especializado adecuado y agilizar la ayuda.

## 🧩 Explicación técnica

%%
Ahora sí la versión completa con términos técnicos, fórmulas, estructura, etc. Podés usar tablas:

- Listas
- Diagramas
- Bloques de código
- Tablas
- Imagenes
%%

La **clasificación de incidentes mediante inteligencia artificial** es un componente del sistema de auxilio mecánico que procesa las evidencias enviadas por el cliente (audio, texto, imágenes) y produce una categoría de incidente, un nivel de prioridad y un resumen descriptivo.

### Tipos de incidentes a clasificar

| Código | Categoría | Descripción |
|--------|-----------|-------------|
| BATT | Batería | Auto no arranca, ruido de clic, luces tenues. |
| TIRE | Llanta pinchada / Neumático | Neumático desinflado, cambio de rueda. |
| CRASH | Choque / Colisión | Abolladuras, daños visibles por accidente. |
| ENGINE | Motor / Mecánica | Sobrecalentamiento, ruidos extraños, humo. |
| OTHER | Otro / Incierto | Problema no clasificable (pérdida de llaves, combustible, etc.). |

### Tecnologías utilizadas (APIs sugeridas)

| Tarea | API / Modelo | Función |
|-------|--------------|---------|
| **Transcripción de audio** | OpenAI Whisper | Convierte voz del cliente a texto. |
| **Clasificación de texto** | NLP (ej. spaCy, transformers) | Extrae palabras clave del texto transcrito (batería, llanta, choque, etc.) y asigna categoría. |
| **Análisis de imágenes** | Google Vision / AWS Rekognition | Detecta daños visibles: neumático desinflado, abolladuras, humo. |
| **Generación de resumen** | LLM (GPT, Llama) | Crea un texto corto describiendo el incidente en lenguaje natural. |

### Flujo de procesamiento de IA

```
1. Cliente sube audio + fotos + texto opcional.  
    ↓
    
2. Transcripción: audio → texto (Whisper).  
    ↓
    
3. Clasificación inicial: el texto se analiza con NLP → extrae palabras clave.  
    ↓
    
4. Si hay fotos: análisis de imagen → detecta patrones visuales de daño.  
    ↓
    
5. Fusión de resultados: se combinan las señales de audio/texto e imagen.  
    ↓
    
6. Asignación de categoría (BATT, TIRE, CRASH, ENGINE, OTHER) y prioridad.  
    ↓
    
7. Generación de resumen (ej. "Cliente reporta auto no arranca, hace clic. Foto muestra luces de tablero encendidas pero motor no responde. Posible batería descargada.").  
    ↓
    
8. Salida: categoría + prioridad + resumen → enviado al motor de asignación.
```


### Prioridad asignada por la IA

| Categoría | Prioridad típica | Tiempo objetivo de respuesta |
|-----------|------------------|------------------------------|
| BATT | Media | 30 min |
| TIRE | Baja | 45 min |
| CRASH | Alta | 15 min |
| ENGINE | Alta | 20 min |
| OTHER | Media | 40 min |

### Simulación para la demo (si no se usan APIs reales)

Para la primera entrega del parcial (MVP), se puede implementar una **IA simulada con reglas**:
- El cliente selecciona manualmente el tipo de incidente desde un menú (opciones: batería, llanta, choque, motor, otro).
- El audio y las fotos se almacenan pero no se procesan automáticamente (se pueden mostrar al taller manualmente).
- El resumen se genera con un texto predefinido + concatenación de datos del formulario.
- En la segunda iteración se integrarían las APIs reales.

## 🔗 Se conecta con

%%
Links a otras notas atómicas relacionadas.
Esto es lo que convierte tus notas en una red (Zettelkasten) en vez de una lista.

Agregá todos los conceptos que se relacionen con este.
%%

- [[sistema-auxilio-mecanico-flujo]]
- [[motor-asignacion-talleres]]
- [[transcripcion-audio-whisper]]
- [[vision-artificial-incidentes]]
- [[nlp-clasificacion-texto]]

## 🌍 Ejemplo concreto

%%
Un caso real (puede ser codigo) sobre el concepto. Los ejemplos concretos son lo que hace que el concepto "enganche" en la memoria.
%%

**Ejemplo 1: Batería descargada**

- **Audio del cliente:** "Hola, mi auto no arranca, escucho un clic cuando giro la llave, las luces se ven débiles."
- **Transcripción (Whisper):** "Hola, mi auto no arranca, escucho un clic cuando giro la llave, las luces se ven débiles."
- **NLP extrae:** ["no arranca", "clic", "luces débiles"] → palabras clave → clasifica BATT.
- **Foto:** (opcional) muestra luces del tablero tenues.
- **Resumen generado:** "Cliente reporta vehículo no arranca, se escucha clic al girar llave y luces débiles. Indica posible batería descargada."
- **Prioridad:** Media.
- **Salida:** categoría `BATT`, prioridad `media`, resumen anterior.

**Ejemplo 2: Choque**

- **Audio:** "Choque contra un poste, el parachoques está roto, necesito grúa."
- **Foto:** parachoques roto y capó abollado.
- **Clasificación:** palabras clave "choque", "parachoques roto" + imagen con daño visible → categoría `CRASH`, prioridad `alta`.
- **Resumen:** "Choque frontal, parachoques roto y capó abollado. Se solicita grúa."

## ⚠️ Errores comunes

%%
¿Qué confunde a la gente con este concepto?
¿Con qué otro concepto se suele mezclar?
¿Qué pensabas vos antes de entenderlo bien?
%%

- **Creer que la IA es 100% precisa y reemplaza la decisión humana:** La IA puede equivocarse (falsos positivos o falsos negativos). El taller debe poder ver las evidencias originales y ajustar si es necesario.
- **Pensar que se necesita entrenar un modelo desde cero:** Se pueden usar APIs preentrenadas (Whisper, Google Vision) que ya funcionan bien. Para la demo, se puede simular con reglas.
- **Ignorar el idioma y contexto local:** Whisper funciona en español, pero hay que asegurar que reconozca jerga boliviana ("llanta pinchada", "batería muerta").
- **No manejar casos "inciertos" o "otros":** Si la IA no puede clasificar, debe haber un flujo de derivación a un operador humano o a un taller generalista.

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
¿Qué hace la IA de clasificación de incidentes en el sistema de auxilio mecánico?
Back: Procesa audio, texto y fotos enviados por el cliente para determinar el tipo de problema (batería, llanta, choque, motor, otro), asignar prioridad y generar un resumen.
Tags: sistemas-informacion-2 concepto
END

START
Básico
¿Qué tecnologías se pueden usar para la transcripción de audio y análisis de imágenes?
Back: Transcripción: OpenAI Whisper. Análisis de imágenes: Google Vision, AWS Rekognition.
Tags: sistemas-informacion-2 concepto
END

START
Básico
¿Qué categorías de incidentes debe reconocer la IA?
Back: Batería (BATT), Llanta (TIRE), Choque (CRASH), Motor (ENGINE), Otro/Incierto (OTHER).
Tags: sistemas-informacion-2 concepto
END

START
Básico
¿Qué se puede hacer en la demo si no se integran APIs reales de IA?
Back: Simular la IA con reglas: el cliente selecciona manualmente el tipo de incidente desde un menú, y el resumen se genera con texto predefinido.
Tags: sistemas-informacion-2 concepto ejemplo
END