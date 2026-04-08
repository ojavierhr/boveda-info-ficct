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

# Flujo del sistema de auxilio mecánico

## 📖 Definición simple

%%
Explicalo como si el que lo va a leer nunca oyó hablar del tema.

- Sin tecnicismos.
- Sin siglas sin explicar.
- Una o dos oraciones máximo.
- Si no podés hacerlo simple, todavía no lo entendiste del todo (Feynman dixit).
%%

El flujo del sistema de auxilio mecánico es la **secuencia de pasos** que ocurren desde que un conductor reporta una avería hasta que el servicio se completa y se paga. Incluye: reporte del cliente, procesamiento por IA, asignación de un taller, aceptación, servicio, pago y calificación mutua. Es el "camino" que sigue cada emergencia dentro de la plataforma.

## 🧩 Explicación técnica

%%
Ahora sí la versión completa con términos técnicos, fórmulas, estructura, etc. Podés usar tablas:

- Listas
- Diagramas
- Bloques de código
- Tablas
- Imagenes
%%

El **flujo** de un sistema de auxilio mecánico define la interacción entre los actores (cliente, taller, sistema IA) y los componentes de software. A continuación se describe el flujo principal (camino feliz) y las variantes.

### Flujo principal paso a paso

| Paso | Actor | Acción | Estado resultante |
|------|-------|--------|-------------------|
| 1 | Cliente | Abre la app, selecciona "Solicitar auxilio". Completa ubicación (automática o manual). Adjunta evidencias: fotos, audio (descripción), texto opcional. | Emergencia creada (pendiente de procesamiento) |
| 2 | Sistema IA | Transcribe audio, clasifica incidente (batería, llanta, choque, motor, otro), analiza imágenes básicas, genera resumen y asigna prioridad (baja/media/alta). | Incidente clasificado y priorizado |
| 3 | Motor asignación | Busca talleres cercanos que ofrezcan el servicio requerido. Calcula score según: distancia (menor mejor), disponibilidad (libre/ocupado), reputación (calificación media), costo estimado. Selecciona el mejor taller. | Lista de candidatos; taller seleccionado |
| 4 | Sistema | Envía notificación push al taller seleccionado con los detalles del incidente (resumen IA, ubicación, evidencias). Inicia temporizador de espera (ej. 60 segundos). | Notificación enviada, esperando respuesta |
| 5 | Taller | Recibe notificación, revisa el caso. Decide **aceptar** o **rechazar**. Si acepta, envía confirmación y tiempo estimado de llegada. | Emergencia asignada, taller en camino |
| 6 | Sistema | Notifica al cliente que el taller aceptó, muestra tiempo estimado, comparte ubicación del taller en tiempo real. | Cliente informado |
| 7 | Taller | Realiza el servicio (reparación in situ o remolque). Marca el servicio como "completado" en la app. | Servicio finalizado |
| 8 | Cliente | Recibe solicitud de pago. Elige método (QR, tarjeta). Paga a través de la pasarela integrada. La plataforma retiene comisión (ej. 10%) y libera el resto al taller. | Pago confirmado |
| 9 | Sistema | Presenta pantalla de calificación mutua. Cliente califica al taller (1-5 estrellas, comentario). Taller califica al cliente (opcional). | Calificaciones registradas |
| 10 | Sistema | Genera reportes internos (tiempo de respuesta, ingresos, etc.). Finaliza el flujo. | Emergencia cerrada |

### Flujos alternativos (excepciones)

| Situación | Acción del sistema |
|-----------|--------------------|
| Taller no responde en tiempo límite | Reasignar al siguiente taller candidato de la lista. |
| Taller rechaza explícitamente | Reasignar inmediatamente al siguiente candidato. |
| Ningún taller disponible o no hay cobertura | Notificar al cliente que no hay talleres en la zona, sugerir alternativas (grúa particular). |
| Cliente cancela antes de que taller acepte | Cancelar emergencia, no se cobra. |
| Cliente cancela después de que taller aceptó | Puede tener penalización (según reglas). Se notifica al taller. |
| Taller acepta pero nunca llega | Cliente reporta "no show". El taller recibe penalización en reputación. |
| Pago fallido (tarjeta rechazada, sin saldo) | Permitir reintentos o cambiar método de pago. Si persiste, cancelar servicio. |

### Diagrama de flujo (textual)

```
[Inicio] → Cliente reporta → IA clasifica → Asigna taller → Notifica taller  
↓  
[¿Taller acepta?] → No → Reasignar (loop)  
↓  
Sí → Taller en camino → Realiza servicio → Cliente paga → Calificación mutua → [Fin]
```


## 🔗 Se conecta con

%%
Links a otras notas atómicas relacionadas.
Esto es lo que convierte tus notas en una red (Zettelkasten) en vez de una lista.

Agregá todos los conceptos que se relacionen con este.
%%

- [[ia-clasificacion-incidentes]]
- [[motor-asignacion-talleres]]
- [[notificaciones-push-firebase]]
- [[pasarela-pagos-integracion]]
- [[doble-calificacion-sistemas]]
- [[actores-sistema-informacion]]

## 🌍 Ejemplo concreto

%%
Un caso real (puede ser codigo) sobre el concepto. Los ejemplos concretos son lo que hace que el concepto "enganche" en la memoria.
%%

**Caso: Juan Pérez sufre una avería en la Av. San Martín, Santa Cruz**

1. **Reporte:** Juan abre la app, permite ubicación GPS, graba un audio diciendo "Mi auto no arranca, hace un clic al girar la llave". También toma una foto del tablero con luces encendidas.
2. **IA:** Transcribe el audio, detecta palabras clave "no arranca", "clic". Clasifica como "batería" con prioridad alta. Genera resumen: "Posible batería descargada".
3. **Asignación:** El motor encuentra 3 talleres cercanos. Calcula scores: Taller A (distancia 500m, disponibilidad sí, reputación 4.5) → score 92; Taller B (distancia 1.2km, disponibilidad sí, reputación 4.8) → score 88; Taller C (distancia 800m, ocupado) → descartado. Selecciona Taller A.
4. **Notificación:** El Taller A recibe push: "Emergencia - Batería - Av. San Martín - Tiempo estimado de llegada 10 min". El taller acepta.
5. **Servicio:** El técnico llega, recarga la batería. Juan paga con QR (Bs. 150). La plataforma retiene Bs. 15, paga Bs. 135 al taller.
6. **Calificación:** Juan califica 5 estrellas al taller. El taller califica a Juan como "buen cliente".

**Tiempo total desde reporte a cierre:** 35 minutos.

## ⚠️ Errores comunes

%%
¿Qué confunde a la gente con este concepto?
¿Con qué otro concepto se suele mezclar?
¿Qué pensabas vos antes de entenderlo bien?
%%

- **Creer que el flujo siempre es lineal y perfecto:** En la realidad ocurren muchas excepciones (taller que no responde, cliente que cancela, pago fallido). El diseño debe contemplar todos los flujos alternativos.
- **Confundir flujo con arquitectura del sistema:** El flujo describe la secuencia de interacciones; la arquitectura define los componentes técnicos. No son lo mismo.
- **No definir claramente los estados de la emergencia:** El flujo se basa en estados (creada, clasificada, asignada, aceptada, en curso, completada, pagada, cerrada). Sin estados, no se puede rastrear.
- **Ignorar los tiempos máximos de respuesta:** Si no se configuran tiempos de espera para el taller, una emergencia puede quedar colgada indefinidamente.

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
¿Cuál es el flujo principal del sistema de auxilio mecánico?
Back: Cliente reporta → IA clasifica → Asignación de taller → Notificación al taller → Aceptación/rechazo → Servicio → Pago → Calificación mutua.
Tags: sistemas-informacion-2 concepto
END

START
Básico
¿Qué ocurre si el taller no responde a la notificación en el tiempo límite?
Back: El sistema reasigna automáticamente la emergencia al siguiente taller candidato de la lista.
Tags: sistemas-informacion-2 concepto
END

START
Básico
¿Qué flujos alternativos deben considerarse en el diseño?
Back: Taller que rechaza, taller que no responde, cliente que cancela, pago fallido, taller que acepta pero no llega, ningún taller disponible.
Tags: sistemas-informacion-2 concepto
END

START
Básico
Describe un ejemplo concreto del flujo completo para una batería descargada.
Back: Juan reporta con audio y foto → IA clasifica "batería" → motor asigna taller cercano → taller acepta, llega en 10 min → recarga → pago con QR → calificación 5 estrellas.
Tags: sistemas-informacion-2 concepto ejemplo
END