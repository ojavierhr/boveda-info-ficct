---
tipo: clase
materia: sistemas-informacion-2
semestre: 7
fecha: 2026-04-01
docente: Martinez Canedo Rolando Antoni
estado: 🟢 procesada
tags:
  - clase
  - proyecto
  - auxilio-mecanico
---

%% ↑↑↑↑↑↑↑↑↑↑↑↑
No borrar ni renombrar estos campos de arriba. Son meta-datos que se usan para algunas configuraciones no están pensados tanto para la lectura.

Los campos que si se pueden editar son:
estado: 🟡 sin-revisar, 🟢 procesada (cuando completes preguntas + resumen + conceptos)
%%

%% ============================================================
PLANTILLA: NOTA DE CLASE (formato Cornell)

CUÁNDO USARLA: Al inicio de cada clase. Una nota por sesión.

DÓNDE GUARDARLA: 01_Notes/Lectures/[slug-materia]/

NOMBRE DE ARCHIVO GENERADO AUTOMÁTICAMENTE: clase-YYYY-MM-DD-tema-central

FLUJO DE USO:

 1. Durante la clase → completar solo "Notas de Clase"
 2. Post-clase → completar "Preguntas" y "Resumen" SIN mirar las notas
 3. Después → crear las notas atómicas marcadas en "Conceptos para procesar"
 4. Cambiar estado a 🟢 procesada cuando todo esté hecho
============================================================ %%

# Clase-2026-04-01 Especificación del parcial 1 sistema de auxilio automóvil

## 📋 Información
- **Materia:** `=this.materia`
- **Semestre:** `=this.semestre`
- **Fecha:** `=this.fecha`
- **Docente:** `=this.docente`
- **Tema central:** Especificación del Parcial 1 – Sistema de auxilio mecánico

---

## 📝 Notas de Clase

%%
ZONA DE CAPTURA

Durante la clase, escribís aquí todo lo que el docente dice. No te preocupes por la estructura. Capturá todo sin filtrar.

Podés usar::

- Viñetas
- Código
- Tablas
- Lo que sea más rápido.
%%

### Problema central
%%> ? ¿Cuál es el problema central? %%
Los conductores en carretera o zona urbana sufren averías (batería, llanta, motor, choque, pérdida de llaves) y no encuentran ayuda rápida, confiable ni trazable. Los talleres no tienen una plataforma organizada para recibir solicitudes.

---

### Puntos clave del sistema
%%> ! Puntos clave del sistema %%
- Cliente reporta emergencia por **texto, audio o fotos**.
- El sistema envía **ubicación en tiempo real**.
- **IA** clasifica el incidente (batería, llanta, choque, motor, otros).
- Se asigna al **taller más cercano** según disponibilidad, tipo de servicio, costos y reputación.
- El taller recibe notificación push; si no acepta, se reasigna al siguiente.
- Incluye **pasarela de pagos** (QR, tarjeta).
- **Doble calificación**: cliente ↔ taller.
- **Despliegue** en AWS, Google u Oracle.
- **Reportes** eficientes.
- Posible extensión para **seguros**.

---

### 1. Actores y roles

%%> 👤 Cliente %%
Registra su perfil y vehículos. Puede reportar emergencias, adjuntar evidencias, ver estado, pagar, calificar al taller.

%%> 🔧 Taller %%
Se registra con sus servicios (chapistería, electricidad, grúa, etc.). Gestiona técnicos, acepta/rechaza solicitudes, actualiza estado, ve resumen IA, califica al cliente.

%%> 🤖 Sistema IA %%
Transcribe audio, clasifica incidente, analiza imagen básica, genera resumen, prioriza y asigna taller.

---

### 2. Flujo de una emergencia

%%> 📱 1. Cliente reporta %%
Desde la app móvil envía:
- Ubicación (automática o manual)
- Fotos del vehículo/daño
- Audio describiendo el problema
- Texto adicional opcional

%%> 🧠 2. Procesamiento IA %%
- Transcribe el audio → extrae palabras clave.
- Clasifica el incidente (batería, llanta, choque, motor, incierto).
- Analiza imágenes para detectar daños visibles.
- Genera una ficha resumen del incidente.
- Asigna prioridad (baja/media/alta) según gravedad.

%%> 🏢 3. Asignación inteligente %%
El motor de asignación considera:
- Ubicación del incidente vs talleres disponibles.
- Tipo de problema vs servicios que ofrece cada taller.
- Distancia, capacidad actual, costos estimados, calificaciones.
- Genera lista de talleres candidatos y selecciona el mejor.

%%> 🔔 4. Notificación al taller %%
El taller seleccionado recibe notificación push en su web/app. Puede:
- Aceptar → se confirma y se notifica al cliente con tiempo estimado.
- Rechazar o no responder en X tiempo → se reasigna al siguiente taller.

%%> 💳 5. Pago y cierre %%
Al finalizar el servicio, el cliente paga por pasarela (QR, tarjeta). La plataforma retiene comisión (ej. 10%) y paga al taller. Ambos se califican mutuamente.

---

### 3. Requisitos técnicos

%%> 🖥️ Stack tecnológico %%
- **App móvil**: Flutter (cliente)
- **App web**: Angular (taller y administración)
- **Backend**: FastAPI (Python)
- **BD**: PostgreSQL
- **IA**: módulos de audio (whisper), visión artificial (clasificación de imágenes), NLP para resúmenes
- **Notificaciones**: push (Firebase)
- **Despliegue**: AWS (EC2, RDS, S3) o equivalente

%%> 🗄️ Modelo de datos mínimo %%
Usuarios (clientes, talleres, técnicos), vehículos, incidentes, evidencias (imagen, audio, texto), servicios ofrecidos, estados, pagos, calificaciones, historial.

---

### 4. Consideraciones adicionales

%%> 📅 Plazo %%
4 semanas desde el 2026-04-05 → fecha límite: 2026-05-03.

%%> 📊 Reportes %%
El sistema debe generar reportes eficientes (ej. número de incidentes por tipo, tiempo medio de respuesta, ingresos por taller, etc.)

%%> 🔐 Seguridad y roles %%
App web enfocada al taller con política de roles y permisos (administrador, técnico, contador). App móvil enfocada al cliente.

%%> 💡 Extensión con seguros %%
Si el tiempo lo permite, integrar servicios para compañías de seguros (validación de cobertura, envío de factura automática).

---

### 📋 Lista de preguntas para complementar la especificación

*(Estas preguntas son para aclarar dudas antes de empezar a desarrollar)*

#### Dominio y reglas de negocio
1. ¿El auxilio incluye solo reparación in situ o también remolque (grúa) hasta un taller?
2. ¿El sistema opera solo en Santa Cruz o en toda Bolivia? ¿Cómo se maneja la falta de cobertura?
3. ¿El cliente debe estar vinculado a un vehículo registrado o puede pedir auxilio para otro?
4. ¿Un taller puede tener varias sucursales? ¿Cada sucursal es independiente en ubicación y disponibilidad?
5. ¿Un técnico puede pertenecer a varios talleres?
6. Si la IA clasifica como "incierto", ¿se deriva a un operador humano o a un taller genérico? ¿Hay costo extra?

#### Flujo de emergencia y experiencia de usuario
7. ¿El cliente puede cancelar después de que el taller aceptó? ¿Hay multa o penalización?
8. ¿Qué pasa si el taller acepta pero nunca llega? ¿El cliente puede reportar "no show"?
9. ¿Hay chat o llamada interna entre cliente y taller después de la asignación?
10. ¿El cliente puede enviar más fotos/audios después del reporte inicial? ¿Se re-ejecuta la IA?
11. ¿La ubicación en tiempo real se comparte continuamente (cada 30s) o solo al momento del reporte?
12. Si el primer taller rechaza y el segundo también, ¿se vuelve a preguntar al primero si cambió su disponibilidad?

#### Lógica de la IA
13. ¿Usaremos APIs externas (Whisper, Google Vision) o modelos locales? ¿Se permite simular IA con reglas para la demo?
14. ¿De dónde obtenemos datos etiquetados para entrenar la clasificación?
15. ¿Qué porcentaje de aciertos mínimo se espera? ¿Cómo se manejan los falsos positivos?
16. El resumen generado por IA, ¿solo lo ve el taller o también el cliente? ¿En español?

#### Motor de asignación inteligente
17. ¿Cuál es la fórmula exacta para elegir el "mejor taller"? (pesos de distancia, reputación, costo, disponibilidad)
18. ¿El costo estimado lo calcula la IA o lo envía el taller al aceptar? Si es lo segundo, ¿el cliente puede rechazar por precio?
19. ¿El taller marca "ocupado" mientras atiende un servicio? ¿Respeta horarios de atención?
20. ¿Cómo se actualiza la reputación? ¿Clientes con más calificaciones tienen más peso?

#### Modelo de datos y transacciones
21. ¿Cómo se evita que dos emergencias cercanas asignen el mismo taller a la vez si tiene capacidad?
22. ¿Las evidencias (imagen, audio) se guardan en la BD o en S3? ¿Por cuánto tiempo?
23. ¿La comisión del 10% se retiene antes de pagar al taller? ¿Se necesita facturación fiscal (SIN Bolivia)?
24. ¿Se guarda un historial de reasignaciones (taller ofrecido, aceptó/rechazó, motivo)?

#### Seguridad, roles y despliegue
25. ¿Autenticación con JWT? ¿Registro con email/celular? ¿Los talleres requieren aprobación manual?
26. Dentro del taller, ¿qué permisos específicos tiene el administrador, el técnico y el contador?
27. ¿En AWS usaremos EC2, RDS y S3? ¿Frontend en S3 estático o CloudFront?
28. ¿Cómo manejamos las API keys (Whisper, Firebase, pasarela de pagos)? ¿AWS Secrets Manager?

#### Reportes y métricas
29. ¿El "tiempo medio de respuesta" se mide desde el reporte hasta que el taller acepta, o hasta que llega al lugar?
30. ¿El reporte de ingresos por taller incluye solo servicios completados o también cancelados con penalización?
31. ¿Los reportes permiten filtrar por fecha, ciudad, rango horario? ¿Exportación a Excel?
32. ¿Se espera un dashboard en tiempo real con mapa de incidentes activos? ¿WebSockets o polling?

#### Plazo de 4 semanas y entregables
33. ¿Cuáles funcionalidades son obligatorias (MVP) y cuáles son deseables? ¿La IA puede ser mockeada en primera entrega?
34. ¿Habrá entornos de desarrollo, pruebas y producción, o solo producción desde el día 1?
35. ¿Se requiere diagramas UML, manual de usuario o solo código funcionando?
36. ¿La demo final debe ser en vivo con el profesor simulando cliente y taller? ¿Hay que preparar datos de prueba?

#### Extensión con seguros (opcional)
37. ¿Cómo se valida la póliza? ¿API ficticia o real de una aseguradora boliviana?
38. ¿El seguro paga directamente al taller o reembolsa al cliente? ¿La plataforma cobra comisión al seguro?
39. ¿Qué datos exige el seguro (matrícula, tipo de cobertura, parte policial)? ¿Se genera PDF de auxilio?

---

## ❓ Preguntas y Palabras Clave (Active Recall)

%%
ZONA DE ACTIVE RECALL

Completar DESPUÉS de clase, SIN mirar las notas de arriba.
El objetivo es intentar recordar los conceptos clave por tu cuenta.
Si no podés responder una pregunta → ahí está tu laguna de conocimiento.
%%

| Pregunta / Keyword | Respuesta corta |
|---|---|
| ¿Cuál es el problema central que resuelve el sistema? | Conductores varados sin ayuda rápida; talleres sin plataforma organizada. |
| ¿Qué tipos de evidencias puede enviar el cliente? | Texto, audio, fotos. |
| ¿Qué hace la IA con el audio? | Lo transcribe y extrae palabras clave. |
| ¿Qué factores usa el motor de asignación para elegir taller? | Ubicación, tipo de problema, distancia, capacidad, costos, reputación. |
| ¿Qué ocurre si el taller no acepta la solicitud? | Se reasigna al siguiente taller candidato. |
| ¿Qué pasarela de pago se usa? | QR o tarjeta. |
| ¿Qué porcentaje de comisión retiene la plataforma? | 10% (ejemplo). |
| ¿Qué tipo de reportes debe generar el sistema? | Incidentes por tipo, tiempo medio de respuesta, ingresos por taller. |
| ¿Cuál es la fecha límite del parcial? | 2026-05-03 (4 semanas desde el 05/04). |
| ¿Qué stack tecnológico se usará? | Flutter, Angular, FastAPI, PostgreSQL. |
| ¿Cómo se despliega el sistema? | En AWS (EC2, RDS, S3) o equivalente. |
| ¿Qué roles existen en la app web del taller? | Administrador, técnico, contador. |
| ¿Qué extensión opcional se menciona? | Integración con seguros. |

---

## 💡 Resumen

%%
ZONA DE SÍNTESIS

Explicar con tus propias palabras de qué trató la clase. Máximo 5-8 líneas. Sin copiar de las notas de arriba.
Si no podés resumirlo, todavía no lo entendiste.
%%

> El parcial consiste en desarrollar un sistema inteligente de auxilio mecánico que conecta conductores con talleres. El cliente reporta emergencias con ubicación, audio, fotos y texto; una IA clasifica el incidente y asigna el taller más adecuado según distancia, disponibilidad, costos y reputación. El taller recibe notificación push; si acepta, se coordina el servicio. Incluye pasarela de pagos, doble calificación, reportes y despliegue en la nube. El plazo es de 4 semanas (hasta el 03/05). El stack es Flutter, Angular, FastAPI, PostgreSQL. Se debe entregar un MVP con funcionalidades claras, y hay una lista extensa de preguntas para afinar la especificación.

---

## 🔗 Conceptos para procesar en notas atómicas

%%
Lista de conceptos de esta clase que merecen su propia nota atómica.
Una vez que creés la nota atómica, marcás el checkbox como hecho [x].
Cada [[link]] va a crear la nota cuando hagas clic en él.
%%

- [x] [[sistema-auxilio-mecanico-flujo]] ✅ 2026-04-07
- [x] [[ia-clasificacion-incidentes]] ✅ 2026-04-07
- [x] [[motor-asignacion-talleres]] ✅ 2026-04-07
- [x] [[notificaciones-push-firebase]] ✅ 2026-04-07
- [x] [[pasarela-pagos-integracion]] ✅ 2026-04-07
- [x] [[doble-calificacion-sistemas]] ✅ 2026-04-07
- [x] [[reportes-eficientes-sistemas]] ✅ 2026-04-07
- [x] [[stack-flutter-angular-fastapi]] ✅ 2026-04-07
- [x] [[despliegue-google-cloud]] ✅ 2026-04-07
- [x] [[seguridad-roles-jwt]] ✅ 2026-04-07
- [x] [[extension-seguros]] ✅ 2026-04-07

---

## ✅ Tareas de la clase

%%
Anotá aquí las tareas entregables, lecturas, ejercicios o cualquier acción que surja de la clase.

Usá el formato estándar de tareas:

- [ ] Descripción de la tarea
- [ ] 📅 YYYY-MM-DD Descripción con fecha (opcional)

Estas tareas aparecerán automáticamente en el Dashboard (bloque \`\`\`tasks).
Si la tarea pertenece a un proyecto grande, mejor anotarla directamente en la nota del proyecto.
%%

- [ ] 📅 2026-05-03 Completar el desarrollo del sistema de auxilio mecánico (MVP).
- [ ] Responder las 39 preguntas de especificación para aclarar requisitos.
- [ ] Definir la fórmula exacta del motor de asignación (pesos).
- [ ] Decidir si la IA será simulada (reglas) o real (APIs) para la demo.
- [ ] Preparar el modelo de datos completo en PostgreSQL.
- [ ] Implementar autenticación JWT y roles (admin, técnico, contador).
- [ ] Configurar notificaciones push con Firebase.
- [ ] Integrar pasarela de pagos (modo sandbox).
- [ ] Generar reportes básicos (incidentes por tipo, tiempo de respuesta, ingresos).
- [ ] Desplegar en AWS (o simular localmente para entrega).
- [ ] Documentar con diagramas UML (casos de uso, clases, secuencia).

---

## 🃏 Flashcards → Anki

%%
Cada bloque START/END se convierte en una tarjeta en Anki.
Para sincronizar: abrí Anki → en Obsidian Ctrl+P → "Obsidian to Anki: Sync"
Tipo "Básico" = una pregunta, una respuesta.
%%

START
Básico
¿Cuál es el problema central que resuelve el sistema de auxilio mecánico?
Back: Conductores varados sin ayuda rápida y talleres sin plataforma organizada para recibir solicitudes.
Tags: sistemas-informacion-2 clase
END

START
Básico
¿Qué tipos de evidencias puede enviar el cliente al reportar una emergencia?
Back: Texto, audio y fotos.
Tags: sistemas-informacion-2 clase
END

START
Básico
¿Qué factores utiliza el motor de asignación para elegir el taller más adecuado?
Back: Ubicación, tipo de problema, distancia, capacidad actual, costos estimados y reputación.
Tags: sistemas-informacion-2 clase
END

START
Básico
¿Qué ocurre si el taller seleccionado no acepta la solicitud?
Back: Se reasigna automáticamente al siguiente taller candidato de la lista.
Tags: sistemas-informacion-2 clase
END

START
Básico
¿Cuál es el stack tecnológico obligatorio para el proyecto?
Back: Flutter (app cliente), Angular (web taller/admin), FastAPI (backend), PostgreSQL (base de datos).
Tags: sistemas-informacion-2 clase
END

START
Básico
¿Qué porcentaje de comisión retiene la plataforma por cada servicio?
Back: 10% (ejemplo, puede ajustarse).
Tags: sistemas-informacion-2 clase
END

START
Básico
¿Cuál es la fecha límite de entrega del parcial?
Back: 2026-05-03 (4 semanas desde el 05/04).
Tags: sistemas-informacion-2 clase
END

START
Básico
¿Qué roles existen en la aplicación web del taller?
Back: Administrador, técnico y contador.
Tags: sistemas-informacion-2 clase
END

START
Básico
¿Qué extensión opcional se menciona para el sistema?
Back: Integración con compañías de seguros (validación de cobertura, envío de factura automática).
Tags: sistemas-informacion-2 clase
END

START
Básico
¿Qué tipo de reportes debe generar el sistema?
Back: Número de incidentes por tipo, tiempo medio de respuesta, ingresos por taller, etc.
Tags: sistemas-informacion-2 clase
END