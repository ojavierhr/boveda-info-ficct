---
tipo: concepto
materia: sistemas-informacion-2
semestre: 7
fecha-creacion: 2026-04-07
dificultad: 🟢 baja
estado: 🔵 borrador
tags: [concepto, backend, fastapi, python, parcial1]

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

# FastAPI (backend con Python)

## 📖 Definición simple

%%
Explicalo como si el que lo va a leer nunca oyó hablar del tema.

- Sin tecnicismos.
- Sin siglas sin explicar.
- Una o dos oraciones máximo.
- Si no podés hacerlo simple, todavía no lo entendiste del todo (Feynman dixit).
%%

FastAPI es un framework (un conjunto de herramientas) para crear **APIs** (interfaces de comunicación) en el lenguaje Python. Es rápido (como su nombre indica), fácil de usar, y genera automáticamente documentación interactiva. En el sistema de auxilio mecánico, FastAPI es el **backend**: recibe peticiones desde la app móvil (Flutter) y la web (Angular), procesa la lógica (asignación de talleres, pagos, IA) y responde con datos.

## 🧩 Explicación técnica

%%
Ahora sí la versión completa con términos técnicos, fórmulas, estructura, etc. Podés usar tablas:

- Listas
- Diagramas
- Bloques de código
- Tablas
- Imagenes
%%

**FastAPI** es un framework web moderno y de alto rendimiento para construir APIs con Python 3.6+ basado en las anotaciones de tipo (type hints). Se apoya en **Pydantic** para la validación de datos y en **Starlette** para las partes de bajo nivel.

### Características principales (para el fundamento teórico)

| Característica | Descripción |
|----------------|-------------|
| **Alto rendimiento** | Es uno de los frameworks Python más rápidos, comparable a Node.js y Go. |
| **Documentación automática** | Genera dos interfaces interactivas: Swagger UI (`/docs`) y ReDoc (`/redoc`). |
| **Validación de datos** | Usa Pydantic para validar tipos y estructuras de datos automáticamente. |
| **Asincronía** | Soporta `async`/`await` para manejar operaciones no bloqueantes (múltiples peticiones simultáneas). |
| **Inyección de dependencias** | Fácil integración de autenticación, bases de datos, etc. |
| **OpenAPI y JSON Schema** | Cumple con estándares, lo que facilita la generación de clientes (Flutter, Angular). |

### ¿Por qué FastAPI para el parcial?

- **Rapidez de desarrollo:** Con pocas líneas se tiene una API funcional.
- **Integración con IA:** Es fácil agregar endpoints que usen librerías de Python (Whisper, scikit-learn, TensorFlow).
- **Compatibilidad con PostgreSQL:** Mediante `sqlalchemy` o `asyncpg`.
- **Generación de clientes:** Angular y Flutter pueden consumir la API con tipos generados a partir de la especificación OpenAPI.

### Ejemplo mínimo de un endpoint en FastAPI

```python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional

app = FastAPI(title="API Auxilio Mecánico", version="1.0.0")

class Emergencia(BaseModel):
    cliente_id: int
    ubicacion: str
    tipo_incidente: str
    foto_url: Optional[str] = None

@app.post("/emergencias")
async def crear_emergencia(emergencia: Emergencia):
    # Lógica de negocio (guardar en BD, asignar taller...)
    return {"id": 123, "estado": "creada"}
```

### Estructura típica de un proyecto FastAPI

```text
backend/
├── main.py              # instancia de FastAPI, routers globales
├── routers/             # endpoints agrupados
│   ├── emergencias.py
│   ├── pagos.py
│   └── talleres.py
├── models/              # modelos SQLAlchemy
├── schemas/             # esquemas Pydantic (validación)
├── services/            # lógica de negocio (IA, asignación, etc.)
├── database.py          # configuración de BD
└── dependencies.py      # dependencias (auth, etc.)
```

## 🔗 Se conecta con

%%  
Links a otras notas atómicas relacionadas.  
Esto es lo que convierte tus notas en una red (Zettelkasten) en vez de una lista.

Agregá todos los conceptos que se relacionen con este.  
%%

- [[stack-flutter-angular-fastapi]]
    
- [[seguridad-roles-jwt]]
    
- [[despliegue-google-cloud]]
    
- [[pydantic-validacion]]
    
- [[sqlalchemy-postgresql]]
    

## 🌍 Ejemplo concreto

%%  
Un caso real (puede ser codigo) sobre el concepto. Los ejemplos concretos son lo que hace que el concepto "enganche" en la memoria.  
%%

**Caso: El cliente reporta una emergencia desde Flutter**

1. La app móvil envía una petición POST a `https://api.auxilio.com/emergencias` con un JSON:

```json
{
  "cliente_id": 42,
  "ubicacion": "Av. San Martín 123",
  "tipo_incidente": "bateria",
  "foto_url": "https://storage.googleapis.com/evidencias/foto123.jpg"
}
```

1. FastAPI recibe la petición, valida con Pydantic que todos los campos estén correctos.
    
2. Llama a una función asíncrona `crear_emergencia` que:
    
    - Guarda en PostgreSQL usando SQLAlchemy.
        
    - Invoca al motor de IA (clasificación) y al motor de asignación.
        
    - Dispara notificaciones push (FCM) al taller seleccionado.
        
3. Responde con un JSON: `{"id": 456, "estado": "asignada"}`.
    
4. La app móvil muestra "Emergencia asignada a Taller X".
    

La documentación automática está disponible en `https://api.auxilio.com/docs`, donde el docente puede probar los endpoints sin escribir código.

## ⚠️ Errores comunes

%%  
¿Qué confunde a la gente con este concepto?  
¿Con qué otro concepto se suele mezclar?  
¿Qué pensabas vos antes de entenderlo bien?  
%%

- **Confundir FastAPI con Flask:** Flask es más simple y no tiene validación automática ni documentación integrada. FastAPI es más moderno y rápido.
    
- **No usar async/await cuando se necesita:** Para consultas a BD o llamadas a IA, usar `async` mejora la concurrencia. Pero si se usan librerías bloqueantes, hay que ejecutarlas en `run_in_executor`.
    
- **Olvidar la validación de tipos:** Pydantic valida automáticamente; no es necesario escribir `if` para cada campo.
    
- **Exponer la documentación en producción sin protección:** `/docs` y `/redoc` pueden estar visibles. Se pueden deshabilitar en producción o proteger con autenticación.
    

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
¿Qué es FastAPI y para qué se usa en el sistema de auxilio mecánico?  
Back: FastAPI es un framework de Python para construir APIs de alto rendimiento. Se usa como backend que procesa peticiones de Flutter y Angular, maneja la lógica de negocio y se comunica con la base de datos.  
Tags: sistemas-informacion-2 concepto backend  
END

START  
Básico  
Menciona tres características principales de FastAPI.  
Back: Alto rendimiento, documentación automática (Swagger/ReDoc), validación de datos con Pydantic, soporte asíncrono, inyección de dependencias.  
Tags: sistemas-informacion-2 concepto backend  
END

START  
Básico  
¿Qué librería usa FastAPI para la validación de datos?  
Back: Pydantic, que valida tipos y estructuras de datos mediante anotaciones de tipo de Python.  
Tags: sistemas-informacion-2 concepto backend  
END

START  
Básico  
¿Cómo se puede probar manualmente un endpoint de FastAPI durante el desarrollo?  
Back: A través de la documentación interactiva generada automáticamente en `/docs` (Swagger UI) o `/redoc` (ReDoc).  
Tags: sistemas-informacion-2 concepto backend ejemplo  
END