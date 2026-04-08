---
tipo: concepto
materia: sistemas-informacion-2
semestre: 7
fecha-creacion: 2026-04-07
dificultad: 🟡 media
estado: 🔵 borrador
tags: [concepto, ia, vision-por-computador, parcial1]

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

# IA para reconocimiento de imágenes (visión por computador)

## 📖 Definición simple

%%
Explicalo como si el que lo va a leer nunca oyó hablar del tema.

- Sin tecnicismos.
- Sin siglas sin explicar.
- Una o dos oraciones máximo.
- Si no podés hacerlo simple, todavía no lo entendiste del todo (Feynman dixit).
%%

El reconocimiento de imágenes por IA es la capacidad de una computadora para **analizar fotografías** y entender qué contienen: si hay un vehículo chocado, una llanta pinchada, o un daño visible. En el sistema de auxilio mecánico, cuando el cliente sube fotos del accidente o avería, la IA las examina para **detectar el tipo de daño** y **ayudar a clasificar la emergencia** (choque, batería, etc.). Así se asigna el taller adecuado más rápido.

## 🧩 Explicación técnica

%%
Ahora sí la versión completa con términos técnicos, fórmulas, estructura, etc. Podés usar tablas:

- Listas
- Diagramas
- Bloques de código
- Tablas
- Imagenes
%%

El **reconocimiento de imágenes** es un subcampo de la inteligencia artificial y la visión por computador. Utiliza modelos de aprendizaje profundo (deep learning), especialmente redes neuronales convolucionales (CNN), para identificar objetos, patrones o características en imágenes digitales.

En el contexto del parcial 1, el sistema de auxilio mecánico debe **analizar las fotos** enviadas por el cliente para:

- Detectar daños visibles (parachoques roto, neumático desinflado, abolladuras, humo).
- Clasificar el tipo de incidente (choque, llanta, batería, motor) basándose también en las imágenes.
- Extraer información útil (matrícula, si es legible, marcas del vehículo).

### Enfoques de implementación

| Enfoque | Descripción | Cuándo usarlo |
|---------|-------------|----------------|
| **API pública (servicio en la nube)** | Llamar a servicios como Google Cloud Vision, AWS Rekognition, o Azure Computer Vision. | Cuando se dispone de conexión a internet y se desea alta precisión sin entrenar modelos. |
| **Modelo local** | Ejecutar un modelo preentrenado (ej. YOLO, ResNet) en la máquina del backend o incluso en el celular. | Cuando se necesita privacidad (las imágenes no salen del sistema) o no hay internet estable. |
| **Mock (simulación)** | Para la demo, se puede simular la IA con reglas simples (ej. si el nombre del archivo contiene "choque", se clasifica como choque). | Útil para la primera entrega, mientras se integra una solución real. |

### Servicios públicos sugeridos

| Servicio | Funcionalidad | Precio (capas gratuitas) |
|----------|---------------|---------------------------|
| **Google Cloud Vision** | Etiquetado de objetos, detección de caras, OCR, detección de contenido explícito. | 1,000 unidades/mes gratis. |
| **AWS Rekognition** | Detección de objetos, escenas, caras, texto. | 5,000 imágenes/mes gratis (primer año). |
| **Azure Computer Vision** | OCR, análisis de imágenes, generación de miniaturas. | 5,000 transacciones/mes gratis. |

### Flujo de integración en FastAPI

```python
import google.cloud.vision as vision

client = vision.ImageAnnotatorClient()

def analizar_imagen(url_imagen: str):
    # Descargar imagen desde Cloud Storage o recibir base64
    image = vision.Image()
    image.source.image_uri = url_imagen
    response = client.label_detection(image=image)
    labels = [label.description.lower() for label in response.label_annotations]
    
    # Detectar palabras clave
    if "car crash" in labels or "collision" in labels:
        return "choque"
    elif "flat tire" in labels or "wheel" in labels:
        return "llanta"
    elif "engine" in labels or "hood" in labels:
        return "motor"
    else:
        return "otro"
```

### Aplicación en el sistema de auxilio mecánico

- El cliente sube 1-3 fotos del vehículo dañado.
    
- El backend envía las imágenes a la API de visión (o modelo local).
    
- La IA devuelve etiquetas como "car crash", "broken bumper", "flat tire".
    
- El sistema combina esta información con el audio transcrito para clasificar el incidente con mayor certeza.
    
- Si la IA detecta un choque grave, la prioridad se eleva a "alta".
    

## 🔗 Se conecta con

%%  
Links a otras notas atómicas relacionadas.  
Esto es lo que convierte tus notas en una red (Zettelkasten) en vez de una lista.

Agregá todos los conceptos que se relacionen con este.  
%%

- [[ia-clasificacion-incidentes]]
    
- [[ia-reconocimiento-audio]]
    
- [[ia-modelos-supervisados-no-supervisados]]
    
- [[fastapi-python-backend]]
    
- [[despliegue-google-cloud]]
    

## 🌍 Ejemplo concreto

%%  
Un caso real (puede ser codigo) sobre el concepto. Los ejemplos concretos son lo que hace que el concepto "enganche" en la memoria.  
%%

**Caso: Cliente sube foto de su auto chocado**

- **Imagen:** Parachoques delantero roto, faro izquierdo roto, capó levantado.
    
- **Procesamiento con Google Cloud Vision:** Devuelve etiquetas: `car`, `bumper`, `damaged vehicle`, `collision`, `accident`.
    
- **Clasificación:** El sistema detecta "collision" y "damaged" → clasifica como `CRASH` (choque).
    
- **Prioridad:** Alta.
    
- **Asignación:** El motor de asignación busca talleres con especialidad en choques y grúa.
    
- **Resultado:** El taller sabe que debe enviar una grúa y que el daño es significativo.
    

**Simulación (mock):** Si no hay API real, el sistema puede preguntar al cliente "¿Qué tipo de daño es?" y asignar según su respuesta. Para la demo, se puede mostrar un ejemplo simulado donde la IA "reconoce" un choque a partir de una foto de prueba.

## ⚠️ Errores comunes

%%  
¿Qué confunde a la gente con este concepto?  
¿Con qué otro concepto se suele mezclar?  
¿Qué pensabas vos antes de entenderlo bien?  
%%

- **Pensar que se necesita entrenar un modelo desde cero:** En la mayoría de los casos, se puede usar una API preentrenada (Google Vision, AWS Rekognition). Entrenar un modelo personalizado es costoso y requiere muchos datos.
    
- **Confundir reconocimiento de imágenes con OCR:** OCR (reconocimiento óptico de caracteres) es una sub-tarea que extrae texto de imágenes. El reconocimiento de imágenes es más amplio (objetos, escenas, caras).
    
- **No manejar imágenes de mala calidad:** Las fotos borrosas o con poca luz pueden confundir a la IA. Se debe informar al cliente si la imagen no es procesable.
    
- **Ignorar la latencia:** Llamar a una API externa puede tomar 1-2 segundos. Si se espera por cada imagen, la experiencia de usuario empeora. Se pueden procesar en segundo plano.
    

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
¿Qué función cumple el reconocimiento de imágenes en el sistema de auxilio mecánico?  
Back: Analiza las fotos subidas por el cliente para detectar daños, clasificar el tipo de incidente (choque, llanta, etc.) y mejorar la precisión de la asignación del taller.  
Tags: sistemas-informacion-2 concepto ia  
END

START  
Básico  
Menciona dos servicios en la nube para reconocimiento de imágenes.  
Back: Google Cloud Vision, AWS Rekognition, Azure Computer Vision.  
Tags: sistemas-informacion-2 concepto ia  
END

START  
Básico  
¿Qué diferencia hay entre reconocimiento de imágenes y OCR?  
Back: El reconocimiento de imágenes identifica objetos, escenas o características visuales. OCR es una sub-tarea que extrae texto de imágenes.  
Tags: sistemas-informacion-2 concepto ia diferencia  
END

START  
Básico  
¿Cómo se puede simular el reconocimiento de imágenes en una demo temprana?  
Back: Usando reglas simples (ej. si el nombre del archivo contiene "choque", clasificar como choque) o permitiendo que el cliente seleccione el tipo de daño manualmente.  
Tags: sistemas-informacion-2 concepto ia ejemplo  
END