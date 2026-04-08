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

# Notificaciones push con Firebase (FCM)

## 📖 Definición simple

%%
Explicalo como si el que lo va a leer nunca oyó hablar del tema.

- Sin tecnicismos.
- Sin siglas sin explicar.
- Una o dos oraciones máximo.
- Si no podés hacerlo simple, todavía no lo entendiste del todo (Feynman dixit).
%%

Las notificaciones push son mensajes que aparecen en el teléfono o computadora del usuario **sin que la aplicación esté abierta**. En el sistema de auxilio mecánico, se usan para avisar al taller que hay una nueva emergencia, y al cliente cuando el taller acepta el servicio. **Firebase Cloud Messaging (FCM)** es el servicio de Google que envía estas notificaciones de forma gratuita y confiable.

## 🧩 Explicación técnica

%%
Ahora sí la versión completa con términos técnicos, fórmulas, estructura, etc. Podés usar tablas:

- Listas
- Diagramas
- Bloques de código
- Tablas
- Imagenes
%%

**Firebase Cloud Messaging (FCM)** es un servicio multiplataforma (Android, iOS, web) que permite enviar notificaciones push y mensajes de datos a dispositivos de manera escalable. Es parte de Firebase, la plataforma de desarrollo de Google.

### Componentes principales

| Componente | Función |
|------------|---------|
| **Servidor de aplicación (backend)** | El backend (FastAPI) envía la solicitud de notificación a FCM. |
| **FCM (servicio de Google)** | Recibe la solicitud, la procesa y la entrega al dispositivo destino. |
| **SDK en la app cliente** | La app (Flutter o Angular) registra el dispositivo para recibir notificaciones. |
| **Token de dispositivo** | Identificador único que la app envía al backend para saber a qué dispositivo notificar. |

### Flujo de envío de una notificación

```
1. El backend (FastAPI) detecta un evento que requiere notificación (ej. nueva emergencia asignada a taller).  
    ↓
    
2. El backend obtiene el token FCM del dispositivo del taller (previamente almacenado en la BD).  
    ↓
    
3. El backend construye un mensaje JSON con:
    
    - Título (ej. "Nueva emergencia")
        
    - Cuerpo (ej. "Batería descargada - Av. San Martín")
        
    - Datos adicionales (ej. id_emergencia, tipo_incidente)  
        ↓
        
4. El backend envía el mensaje a la API de FCM (usando una clave de autenticación).  
    ↓
    
5. FCM recibe el mensaje y lo entrega al dispositivo del taller (incluso si la app está cerrada).  
    ↓
    
6. El dispositivo muestra la notificación en la bandeja del sistema.  
    ↓
    
7. Al hacer clic, la app se abre y puede navegar a la pantalla del incidente.
```


### Tipos de mensajes en FCM

| Tipo | Descripción | Uso en el sistema |
|------|-------------|-------------------|
| **Notificación** | Mensaje visible automáticamente por el sistema (iOS/Android). Tiene título y cuerpo. | Para alertar al taller de una nueva emergencia. |
| **Datos** | Mensaje invisible para la app, sin UI automática. La app debe procesarlo. | Para enviar información adicional sin molestar al usuario. |
| **Mixto** | Combina notificación visible + datos en segundo plano. | Para mostrar alerta y pasar datos. |

### Implementación en el parcial

- **Backend (FastAPI):** Usar la librería `firebase-admin` para Python.
- **App móvil (Flutter):** Integrar el SDK de FCM y manejar el callback al recibir notificación.
- **App web (Angular):** Usar `@angular/fire` y el Service Worker para notificaciones web (requiere HTTPS).
- **Almacenamiento:** Guardar el token FCM de cada taller en la tabla `talleres` (campo `fcm_token`). Actualizarlo cuando la app se inicia o cambia.

### Ejemplo de código (backend - Python)

```python
import firebase_admin
from firebase_admin import credentials, messaging

cred = credentials.Certificate("path/to/serviceAccountKey.json")
firebase_admin.initialize_app(cred)

def enviar_notificacion(token, titulo, cuerpo, datos=None):
    message = messaging.Message(
        notification=messaging.Notification(
            title=titulo,
            body=cuerpo,
        ),
        data=datos or {},
        token=token,
    )
    response = messaging.send(message)
    return response
```

## 🔗 Se conecta con

%%  
Links a otras notas atómicas relacionadas.  
Esto es lo que convierte tus notas en una red (Zettelkasten) en vez de una lista.

Agregá todos los conceptos que se relacionen con este.  
%%

- [[sistema-auxilio-mecanico-flujo]]
    
- [[motor-asignacion-talleres]]
    
- [[stack-flutter-angular-fastapi]]
    
- [[autenticacion-jwt]]
    

## 🌍 Ejemplo concreto

%%  
Un caso real (puede ser codigo) sobre el concepto. Los ejemplos concretos son lo que hace que el concepto "enganche" en la memoria.  
%%

**Caso: Taller "Mecánica Rápida" recibe notificación de una nueva emergencia**

- **Evento:** El motor de asignación selecciona este taller para una batería descargada.
    
- **Backend (FastAPI)** obtiene el token FCM del taller desde la base de datos.
    
- **Mensaje enviado a FCM:**
```json
{
  "to": "fcm_token_del_taller",
  "notification": {
    "title": "🔧 Nueva emergencia",
    "body": "Batería descargada - Av. San Martín - Prioridad media",
    "click_action": "FLUTTER_NOTIFICATION_CLICK"
  },
  "data": {
    "incidente_id": "12345",
    "tipo": "bateria",
    "lat": "-17.78",
    "lng": "-63.18"
  }
}
```

- **El celular del taller** recibe la notificación en la pantalla de bloqueo. Suena un tono.
    
- **El técnico** toca la notificación → la app se abre directamente en la pantalla de detalles del incidente 12345.
    
- **Si no responde en 60 segundos**, el sistema reasigna. La notificación incluye un temporizador implícito (el backend mide el tiempo).
    

## ⚠️ Errores comunes

%%  
¿Qué confunde a la gente con este concepto?  
¿Con qué otro concepto se suele mezclar?  
¿Qué pensabas vos antes de entenderlo bien?  
%%

- **No manejar la renovación del token FCM:** El token puede cambiar (usuario reinstala la app, borra datos). El backend debe actualizarlo cuando la app envía el nuevo token.
    
- **Enviar notificaciones sin permisos:** En Android/iOS se necesita solicitar permiso al usuario. En web, HTTPS es obligatorio.
    
- **Ignorar el manejo de errores:** Si el token es inválido (ej. el taller desinstaló la app), FCM devuelve un error. Hay que eliminar ese token de la base de datos.
    
- **Confundir notificación push con SMS o correo electrónico:** Las notificaciones push son más inmediatas y no requieren datos del teléfono (solo internet). Son ideales para tiempo real.
    
- **No probar en segundo plano:** En iOS, las notificaciones en segundo plano tienen comportamiento especial (requieren configurar `content-available`).

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
¿Qué es Firebase Cloud Messaging (FCM) y para qué se usa en el sistema de auxilio mecánico?  
Back: FCM es el servicio de Google para enviar notificaciones push a dispositivos. Se usa para alertar al taller de nuevas emergencias y al cliente cuando el taller acepta.  
Tags: sistemas-informacion-2 concepto  
END

START  
Básico  
¿Cuál es el flujo básico de envío de una notificación push con FCM?  
Back: Backend obtiene token del dispositivo → construye mensaje → envía a FCM → FCM entrega al dispositivo → la app la recibe y muestra.  
Tags: sistemas-informacion-2 concepto  
END

START  
Básico  
¿Qué información debe almacenar el backend sobre cada taller para enviar notificaciones?  
Back: El token FCM del dispositivo del taller (actualizado periódicamente).  
Tags: sistemas-informacion-2 concepto  
END

START  
Básico  
¿Qué sucede si el token FCM es inválido (ej. el taller desinstaló la app)?  
Back: FCM devuelve un error. El backend debe eliminar ese token de la base de datos para no seguir enviando notificaciones fallidas.  
Tags: sistemas-informacion-2 concepto ejemplo  
END