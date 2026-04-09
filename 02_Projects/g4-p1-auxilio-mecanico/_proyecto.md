---
tipo: proyecto
materia: sistemas-informacion-2
semestre: 7
slug: g4-p1-auxilio-mecanico
fecha-inicio: 2026-04-01
fecha-entrega: 2026-04-26
estado: en-progreso
tags:
  - proyecto
  - parcial1
  - auxilio-mecanico
---

# Auxilio mecánico - Grupo 4

## 🎯 Objetivo
%% Objetivo general del proyecto (más específico y alineado con el PDF) %%
Desarrollar un software inteligente de atención de emergencias vehiculares que permita conectar usuarios con talleres mecánicos mediante el análisis automatizado de incidentes.

## 📋 Requisitos del docente / alcance

%% Lista de requisitos en términos de módulos (arquitectura) %%

### 📌 Alcance del sistema (qué SÍ se desarrolla)

El sistema se compone de **cinco grandes módulos** que cubren la plataforma completa:

> *Un **módulo** es una parte funcionalmente independiente del sistema, que agrupa un conjunto de funcionalidades relacionadas entre sí. En la arquitectura de software, un módulo puede ser un componente, una capa o un servicio.*

#### 1. Módulo de atención al cliente (aplicación móvil – Flutter)
- **Registro y gestión de perfil** (incluye vehículos asociados).
- **Reporte de emergencia multimodal**: permite enviar ubicación en tiempo real, fotos, audio descriptivo y texto opcional.
- **Seguimiento de la solicitud**: visualización de estado (pendiente, en proceso, atendido), taller asignado, tiempo estimado de llegada.
- **Pagos integrados** (pasarela, comisión del 10% para la plataforma).
- **Notificaciones push** y comunicación básica con el taller (chat opcional).

#### 2. Módulo de gestión para talleres (aplicación web – Angular)
- **Registro y administración del taller** (incluye técnicos, horarios, especialidades).
- **Recepción y gestión de solicitudes**: visualización de incidentes entrantes con resumen generado por IA, clasificación y prioridad.
- **Aceptación/rechazo de servicios** con reasignación automática si no responde.
- **Actualización del estado del servicio** (en camino, completado, etc.).
- **Historial de atenciones** y reporte de ingresos propios (con la comisión ya descontada).

#### 3. Módulo backend (FastAPI + PostgreSQL)
- **Autenticación y autorización** (JWT por roles: cliente, taller, administrador).
- **Gestión de usuarios, talleres, vehículos e incidentes**.
- **Procesamiento de datos multimodales** (recepción y almacenamiento de imágenes, audios, texto).
- **Integración con los módulos de IA** (transcripción, clasificación, análisis de imagen, generación de resumen).
- **Motor de asignación inteligente** (considera ubicación, tipo de problema, disponibilidad, distancia, prioridad, reputación).
- **Sistema de notificaciones push** (Firebase Cloud Messaging).
- **API REST** para las aplicaciones frontend.

#### 4. Módulo de inteligencia artificial (puede ser simulado o con APIs reales)
- **Transcripción de audio** (ej. Whisper) y extracción de palabras clave.
- **Clasificación de incidentes** (batería, llanta, choque, motor, otro).
- **Análisis básico de imágenes** (detección de daños visibles, apoyo a la clasificación).
- **Generación de resumen estructurado** del incidente (para el taller).

#### 5. Módulo de administración y reportes (web – Angular, solo rol administrador)
- **Visualización de métricas globales**: incidentes por tipo, tiempo medio de respuesta, ingresos por taller.
- **Gestión de talleres** (alta/baja, revisión de calificaciones).
- **Generación de reportes exportables** (CSV/Excel) con filtros (fecha, taller, tipo de incidente).

---

### 📌 Fuera de alcance (qué NO se incluye en esta versión)

- **Integración real con aseguradoras** (extensión opcional, no obligatoria).
- **Sistema de facturación electrónica completo** (solo se simula el pago; no se emite factura fiscal real).
- **Machine learning entrenado con datos reales** (la IA puede ser simulada con reglas o APIs preentrenadas, no se exige un modelo propio).
- **Aplicación para múltiples países o regiones** (se asume una zona de cobertura definida, ej. Santa Cruz).
- **Interfaz para el cliente en web** (solo móvil para clientes; web solo para taller y admin).
- **Funcionalidades de marketing o promociones** (no se pide).

---

### 📌 Stack tecnológico

| Componente                                  | Tecnología       |
| ------------------------------------------- | ---------------- |
| **Aplicación móvil (cliente)**              | Flutter          |
| **Aplicación web (taller y administrador)** | Angular          |
| **Backend (API)**                           | FastAPI (Python) |
| **Base de datos**                           | PostgreSQL       |
| **Despliegue en nube**                      | Google Cloud     |
| **Control de versiones**                    | GitHub           |
| **Modelado**                                | PUDS + UML 2.5   |

**Complementos necesarios:**
- **Inteligencia Artificial:** APIs externas (Whisper, Google Cloud Vision) o simulación con reglas.
- **Notificaciones push:** Firebase Cloud Messaging (FCM).
- **Herramientas de desarrollo:** VS Code, PyCharm, Android Studio, etc.

---

## 👥 Equipo

| Apellidos          | Nombres      | Alias     | Teléfono      | Correo                     |
| ------------------ | ------------ | --------- | ------------- | -------------------------- |
| Hidalgo Riffarachi | Osmar Javier | ojavierhr | +591 64543128 | javierhidalgor99@gmail.com |
| Mamani Aguilera    | Roger Javier | rjavierma | +591 73679340 | javiercyto55@gmail.com     |

---

## 📅 Hitos / entregas parciales (Épicas)

> *Una **épica** es una gran unidad de trabajo desde la perspectiva de la gestión del proyecto. Agrupa un conjunto de historias de usuario o tareas que, juntas, entregan una funcionalidad significativa. Las épicas se desglosan en iteraciones y se completan incrementalmente.*

| Épica | Descripción | Criterios de aceptación | Fecha entrega |
|-------|-------------|--------------------------|----------------|
| **Épica 1: Autenticación y perfiles** | Registro/login de clientes y talleres, gestión de perfiles y vehículos. | Un cliente puede registrarse; un taller puede registrarse y agregar técnicos. | 2026-04-07 |
| **Épica 2: Reporte de emergencia (cliente)** | El cliente puede enviar ubicación, fotos, audio y texto; el sistema almacena la solicitud. | La solicitud queda en estado "pendiente" y es visible en el backend. | 2026-04-07 |
| **Épica 3: IA básica (simulada)** | Transcripción de audio, clasificación por reglas, generación de resumen. | Para cada solicitud, se genera automáticamente un resumen y una categoría (batería, llanta, etc.). | 2026-04-14 |
| **Épica 4: Asignación inteligente** | El motor selecciona un taller según ubicación, tipo de incidente y disponibilidad; se notifica al taller. | El taller recibe una notificación push con los detalles y puede aceptar/rechazar. | 2026-04-14 |
| **Épica 5: Seguimiento y pagos** | El cliente ve el estado de su solicitud; al finalizar, puede pagar con pasarela (simulada). | Se actualiza el estado, se aplica comisión del 10% y se registra el pago. | 2026-04-21 |
| **Épica 6: Panel del taller** | El taller puede ver sus solicitudes asignadas, aceptar/rechazar, actualizar estado, ver historial. | El taller tiene una vista web con todas las funcionalidades descritas. | 2026-04-21 |
| **Épica 7: Reportes y administración** | El administrador puede ver métricas globales y exportar reportes. | Se muestran indicadores básicos (incidentes por tipo, tiempo de respuesta, ingresos). | 2026-04-25 |
| **Épica 8: Despliegue en la nube** | Backend, BD y web estática se despliegan en Google Cloud (Compute Engine/Cloud Run, Cloud SQL, Cloud Storage). | El sistema es accesible públicamente y funciona 24/7. | 2026-05-25 |

---

## 📊 Dashboard del proyecto

### 📥 Backlog (pendientes)

```dataview
LIST
FROM "02_Projects/g4-p1-auxilio-mecanico/tareas"
WHERE estado = "backlog" OR estado = "pendiente"
SORT fecha-limite ASC
```

### ⚙️ Tareas en progreso
```dataview
TABLE WITHOUT ID
  file.link AS Tarea,
  fecha-limite AS "📅 Entrega",
  responsable AS "👤",
  prioridad AS "⭐"
FROM "02_Projects/g4-p1-auxilio-mecanico/tareas"
WHERE estado = "en-progreso"
SORT prioridad DESC, fecha-limite ASC
```

### ✅ Completado recientemente

```dataview
TABLE fecha-completado AS "Completado"
FROM "02_Projects/g4-p1-auxilio-mecanico/tareas"
WHERE estado = "completado"
SORT fecha-completado DESC
LIMIT 5
```

---

## 🗂️ Tablero Kanban

Abrí el archivo [[_tablero.kanban]] para ver el tablero visual.

## 📁 Archivos y recursos

- [[recursos]] (carpeta)
    
- [[reuniones]] (carpeta)
    

## 🔗 Conceptos aplicados

- [[sistema-auxilio-mecanico-flujo]]
    
- [[ia-clasificacion-incidentes]]
    
- [[ia-reconocimiento-audio]]
    
- [[ia-reconocimiento-imagenes]]
    
- [[motor-asignacion-talleres]]
    
- [[notificaciones-push-firebase]]
    
- [[pasarela-pagos-integracion]]
    
- [[doble-calificacion-sistemas]]
    
- [[reportes-eficientes-sistemas]]
    
- [[seguridad-roles-jwt]]
    
- [[stack-flutter-angular-fastapi]]
    
- [[despliegue-google-cloud]]