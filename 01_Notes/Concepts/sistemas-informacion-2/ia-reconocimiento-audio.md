---
tipo: concepto
materia: sistemas-informacion-2
semestre: 7
fecha-creacion: 2026-04-07
dificultad: 🟡 media
estado: 🔵 borrador
tags: [concepto, ia, audio, nlp, parcial1]

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

# IA para reconocimiento de audio (transcripción y NLP)

## 📖 Definición simple

%%
Explicalo como si el que lo va a leer nunca oyó hablar del tema.

- Sin tecnicismos.
- Sin siglas sin explicar.
- Una o dos oraciones máximo.
- Si no podés hacerlo simple, todavía no lo entendiste del todo (Feynman dixit).
%%

El reconocimiento de audio por IA convierte lo que el cliente dice en texto (transcripción) y luego **extrae las palabras clave** para entender el problema. Por ejemplo, si el cliente graba "Mi auto no arranca, hace un clic", la IA transcribe esa frase, detecta "no arranca" y "clic", y clasifica el incidente como posible batería descargada. Así el sistema sabe qué taller especializado enviar sin que el cliente tenga que escribir.

## 🧩 Explicación técnica

%%
Ahora sí la versión completa con términos técnicos, fórmulas, estructura, etc. Podés usar tablas:

- Listas
- Diagramas
- Bloques de código
- Tablas
- Imagenes
%%

El **reconocimiento de audio** en el contexto del parcial 1 consta de dos etapas:

1. **Transcripción de audio a texto** (Automatic Speech Recognition, ASR): convierte una señal de audio (grabación del cliente) en una cadena de texto.
2. **Procesamiento de lenguaje natural (NLP)**: sobre el texto transcrito, se extraen palabras clave, se clasifica la intención y se genera un resumen.

### Tecnologías para transcripción de audio

| Herramienta | Características | Modelo / API |
|-------------|----------------|---------------|
| **OpenAI Whisper** | Modelo open source de alta precisión, soporta múltiples idiomas (incluyendo español). Se puede ejecutar localmente o vía API. | Whisper large / tiny |
| **Google Speech-to-Text** | API en la nube, reconoce 120+ idiomas, optimizada para llamadas y audios ruidosos. | Google Cloud STT |
| **AWS Transcribe** | Servicio gestionado, incluye puntuación automática y vocabulario personalizado. | AWS Transcribe |
| **Vosk** | Modelo offline, liviano, ideal para ejecutar en el celular (Flutter) si no hay internet. | Vosk API |

Para el proyecto, se sugiere **Whisper** por ser gratuito, de código abierto y funcionar bien en español.

### Procesamiento de lenguaje natural (NLP)

Una vez transcrito el audio, se aplica NLP para:

- **Extracción de palabras clave**: buscar términos como "batería", "llanta", "choque", "no arranca", "humo", "sobrecalienta".
- **Clasificación del incidente**: asignar una categoría (BATT, TIRE, CRASH, ENGINE, OTHER) basándose en las palabras encontradas.
- **Generación de resumen**: crear una frase corta que describa el problema para que el taller lo entienda rápidamente.

**Ejemplo de NLP simple (reglas):**

```python
def clasificar_por_texto(texto):
    texto_lower = texto.lower()
    if "batería" in texto_lower or "no arranca" in texto_lower or "clic" in texto_lower:
        return "bateria"
    elif "llanta" in texto_lower or "neumático" in texto_lower or "pinchado" in texto_lower:
        return "llanta"
    elif "choque" in texto_lower or "chocó" in texto_lower or "accidente" in texto_lower:
        return "choque"
    elif "motor" in texto_lower or "humo" in texto_lower or "sobrecalienta" in texto_lower:
        return "motor"
    else:
        return "otro"
```

### Arquitectura de integración en FastAPI

```
1. Cliente sube archivo de audio (formato MP3, M4A, etc.) al backend.
2. FastAPI guarda el audio temporalmente o lo envía directamente a Whisper.
3. Whisper devuelve el texto transcrito.
4. Se aplica NLP (reglas o modelo ligero) para clasificar y extraer palabras clave.
5. El resultado se combina con el análisis de imágenes (si existe) para determinar la categoría final.
6. Se genera un resumen que se envía al taller junto con la notificación.
```

### Implementación con Whisper (Python)

```python
import whisper

model = whisper.load_model("base")  # opciones: tiny, base, small, medium, large

def transcribir_audio(ruta_audio: str) -> str:
    result = model.transcribe(ruta_audio, language="es")
    return result["text"]
```

Para entornos serverless o para reducir latencia, se puede usar la API de OpenAI Whisper (coste por minuto).

## 🔗 Se conecta con

%%  
Links a otras notas atómicas relacionadas.  
Esto es lo que convierte tus notas en una red (Zettelkasten) en vez de una lista.

Agregá todos los conceptos que se relacionen con este.  
%%

- [[ia-clasificacion-incidentes]]
    
- [[ia-reconocimiento-imagenes]]
    
- [[fastapi-python-backend]]
    
- [[nlp-procesamiento-lenguaje-natural]]
    
- [[whisper-openai]]
    

## 🌍 Ejemplo concreto

%%  
Un caso real (puede ser codigo) sobre el concepto. Los ejemplos concretos son lo que hace que el concepto "enganche" en la memoria.  
%%

**Caso: Cliente graba un audio diciendo:**  
_"Hola, mi auto no arranca, hace un clic cuando giro la llave. Las luces están muy tenues. Creo que es la batería."_

**Procesamiento:**

1. **Transcripción (Whisper):** obtiene exactamente la frase anterior.
    
2. **NLP (extracción):** detecta las palabras `no arranca`, `clic`, `luces tenues`, `batería`.
    
3. **Clasificación:** asigna categoría `BATT` (batería) y prioridad media.
    
4. **Resumen generado:** _"Vehículo no arranca, emite clic al girar llave, luces tenues. Posible batería descargada."_
    
5. **Acción:** El sistema envía al taller especializado en baterías con ese resumen.
    

**Simulación para la demo:** Si no se integra Whisper, se puede simular permitiendo al cliente elegir de una lista el problema o escribir un texto breve. El backend luego aplica la misma lógica de NLP sobre ese texto.

## ⚠️ Errores comunes

%%  
¿Qué confunde a la gente con este concepto?  
¿Con qué otro concepto se suele mezclar?  
¿Qué pensabas vos antes de entenderlo bien?  
%%

- **Pensar que la transcripción es suficiente sin NLP:** El texto transcrito puede ser largo y ruidoso. El NLP es necesario para extraer las palabras clave y clasificar.
    
- **No manejar el idioma correctamente:** Whisper soporta español, pero hay que especificar `language="es"`. Algunas APIs detectan automáticamente.
    
- **Ignorar la calidad del audio:** Grabaciones con ruido de fondo o micrófono de baja calidad reducen la precisión. Se puede sugerir al cliente grabar en un lugar silencioso.
    
- **Confundir reconocimiento de audio con síntesis de voz (texto a voz):** Reconocimiento es voz → texto; síntesis es texto → voz. En el parcial solo se necesita el primero.
    

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
¿Qué dos etapas componen el reconocimiento de audio en el sistema de auxilio mecánico?  
Back: Transcripción de audio a texto (ASR) y procesamiento de lenguaje natural (NLP) para extraer palabras clave y clasificar el incidente.  
Tags: sistemas-informacion-2 concepto ia  
END

START  
Básico  
¿Qué modelo open source se recomienda para la transcripción de audio en español?  
Back: OpenAI Whisper, que soporta múltiples idiomas y tiene versiones desde tiny hasta large.  
Tags: sistemas-informacion-2 concepto ia  
END

START  
Básico  
¿Para qué sirve el NLP después de la transcripción?  
Back: Para extraer palabras clave (ej. "batería", "no arranca"), clasificar el tipo de incidente y generar un resumen para el taller.  
Tags: sistemas-informacion-2 concepto ia  
END

START  
Básico  
Describe un ejemplo de audio que clasificaría como incidente de llanta.  
Back: Cliente dice: "Se me pinchó la llanta trasera, no tengo gato para cambiarla." → palabras clave: "pinchó", "llanta" → clasifica TIRE.  
Tags: sistemas-informacion-2 concepto ia ejemplo  
END