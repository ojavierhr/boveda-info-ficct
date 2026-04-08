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

# Stack tecnológico: Flutter, Angular, FastAPI, PostgreSQL

## 📖 Definición simple

%%
Explicalo como si el que lo va a leer nunca oyó hablar del tema.

- Sin tecnicismos.
- Sin siglas sin explicar.
- Una o dos oraciones máximo.
- Si no podés hacerlo simple, todavía no lo entendiste del todo (Feynman dixit).
%%

Es la combinación de tecnologías obligatorias para desarrollar el sistema de auxilio mecánico: **Flutter** para la aplicación del cliente (celular), **Angular** para la web del taller y administración, **FastAPI** para el servidor (backend) que procesa la lógica, y **PostgreSQL** para la base de datos que guarda toda la información. Cada herramienta cumple un rol específico y todas se comunican entre sí.

## 🧩 Explicación técnica

%%
Ahora sí la versión completa con términos técnicos, fórmulas, estructura, etc. Podés usar tablas:

- Listas
- Diagramas
- Bloques de código
- Tablas
- Imagenes
%%

El **stack tecnológico** del parcial está predefinido por el docente. A continuación se detalla cada componente:

| Tecnología | Rol en el sistema | Versión sugerida |
|------------|-------------------|------------------|
| **Flutter** | App móvil para clientes (reportar emergencias, pagar, calificar). | Flutter 3.x (Dart) |
| **Angular** | Aplicación web para talleres y administrador (gestionar solicitudes, ver reportes). | Angular 15+ (TypeScript) |
| **FastAPI** | Backend (API REST) que maneja la lógica de negocio, IA, asignación, pagos, reportes. | FastAPI 0.100+ (Python 3.10+) |
| **PostgreSQL** | Base de datos relacional para almacenar usuarios, incidentes, pagos, calificaciones. | PostgreSQL 14+ |

### Comunicación entre componentes

```
[App Flutter] <--HTTPS/JSON--> [FastAPI] <--SQL--> [PostgreSQL]  
[Web Angular] <--HTTPS/JSON--> [FastAPI]
```


- **FastAPI** expone endpoints REST (ej. `/emergencias`, `/pagos`, `/reportes`).
- **Flutter** y **Angular** consumen esos endpoints.
- **Autenticación:** JWT (JSON Web Tokens) para proteger rutas y diferenciar roles (cliente, taller, admin).
- **Notificaciones push:** FCM (Firebase) se integra con FastAPI y las apps.

### Ventajas de este stack

| Tecnología | Ventaja |
|------------|---------|
| **Flutter** | Código único para Android e iOS, interfaz rica, buena documentación. |
| **Angular** | Estructura robusta para aplicaciones empresariales, inyección de dependencias, TypeScript. |
| **FastAPI** | Alto rendimiento (asíncrono), documentación automática (Swagger), fácil integración con IA. |
| **PostgreSQL** | Confiable, soporta búsqueda de texto completo, JSONB, y es gratuito. |

### Requisitos de instalación (resumen)

- **Backend:** Python 3.10+, instalar `fastapi`, `uvicorn`, `sqlalchemy`, `psycopg2`, `firebase-admin`, etc.
- **Base de datos:** PostgreSQL local o en la nube (AWS RDS, Neon.tech).
- **App Flutter:** Flutter SDK, Dart, editor (VS Code o Android Studio).
- **App Angular:** Node.js, Angular CLI, editor (VS Code).

## 🔗 Se conecta con

%%
Links a otras notas atómicas relacionadas.
Esto es lo que convierte tus notas en una red (Zettelkasten) en vez de una lista.

Agregá todos los conceptos que se relacionen con este.
%%

- [[sistema-auxilio-mecanico-flujo]]
- [[notificaciones-push-firebase]]
- [[pasarela-pagos-integracion]]
- [[reportes-eficientes-sistemas]]
- [[autenticacion-jwt]]

## 🌍 Ejemplo concreto

%%
Un caso real (puede ser codigo) sobre el concepto. Los ejemplos concretos son lo que hace que el concepto "enganche" en la memoria.
%%

**Caso: Reporte de emergencia desde el celular del cliente**

1. **Cliente (Flutter)** llena el formulario con ubicación, fotos, audio. Al presionar "Enviar", la app hace una petición POST a `https://api.auxilio.com/emergencias` con los datos en JSON.
2. **FastAPI** recibe la petición, valida el token JWT del cliente, guarda la emergencia en PostgreSQL, invoca la IA de clasificación y el motor de asignación, y responde con el ID de la emergencia.
3. **PostgreSQL** almacena el registro en la tabla `emergencias` (id, cliente_id, ubicación, tipo, estado, etc.).
4. **FastAPI** envía notificación push al taller seleccionado (vía FCM).
5. **El taller (Angular web)** recibe la notificación (si tiene la web abierta, usa Service Worker; si no, ve la notificación push en el navegador). Al hacer clic, la web abre la pantalla de detalles de la emergencia, cargando los datos desde FastAPI.

**Código mínimo (FastAPI endpoint):**

```python
@app.post("/emergencias")
async def crear_emergencia(emergencia: EmergenciaSchema, db: Session = Depends(get_db)):
    # Guardar en BD
    nueva = Incidente(**emergencia.dict())
    db.add(nueva)
    db.commit()
    db.refresh(nueva)
    # Llamar a IA y asignación (simulado)
    return {"id": nueva.id, "estado": "creada"}
```

## ⚠️ Errores comunes

%%  
¿Qué confunde a la gente con este concepto?  
¿Con qué otro concepto se suele mezclar?  
¿Qué pensabas vos antes de entenderlo bien?  
%%

- **Confundir Flutter con React Native:** Flutter es de Google, usa Dart; React Native usa JavaScript. El docente exige Flutter, no es opcional.
    
- **Usar Django o Spring Boot en lugar de FastAPI:** El stack definido es FastAPI. Se debe respetar para la evaluación.
    
- **No manejar CORS (Cross-Origin Resource Sharing):** FastAPI y Angular/Flutter corren en diferentes puertos. Hay que configurar CORS en FastAPI para permitir peticiones desde los dominios de las apps.
    
- **No usar variables de entorno:** Las credenciales de base de datos, claves de API, etc. deben ir en archivos `.env`, no quemadas en el código.
    
- **Mezclar responsabilidades:** Flutter no debe conectarse directamente a PostgreSQL; todo debe pasar por FastAPI. La lógica de negocio va en el backend, no en las apps cliente.
    

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
¿Cuál es el stack tecnológico obligatorio para el sistema de auxilio mecánico?  
Back: Flutter (app cliente), Angular (web taller/admin), FastAPI (backend), PostgreSQL (base de datos).  
Tags: sistemas-informacion-2 concepto  
END

START  
Básico  
¿Qué rol cumple FastAPI en el stack?  
Back: Es el backend que expone la API REST, maneja la lógica de negocio (asignación, IA, pagos) y se comunica con la base de datos PostgreSQL.  
Tags: sistemas-informacion-2 concepto  
END

START  
Básico  
¿Para qué se usa Flutter y para qué Angular en este proyecto?  
Back: Flutter para la aplicación móvil del cliente (reportar emergencias, pagar). Angular para la aplicación web del taller y el administrador (gestionar solicitudes, ver reportes).  
Tags: sistemas-informacion-2 concepto  
END

START  
Básico  
¿Qué protocolo de comunicación usan las apps con el backend?  
Back: HTTPS con JSON (API REST). Las apps hacen peticiones HTTP a los endpoints de FastAPI.  
Tags: sistemas-informacion-2 concepto ejemplo  
END