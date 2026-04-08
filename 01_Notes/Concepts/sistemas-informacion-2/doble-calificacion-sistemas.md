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

# Doble calificación (cliente ↔ taller)

## 📖 Definición simple

%%
Explicalo como si el que lo va a leer nunca oyó hablar del tema.

- Sin tecnicismos.
- Sin siglas sin explicar.
- Una o dos oraciones máximo.
- Si no podés hacerlo simple, todavía no lo entendiste del todo (Feynman dixit).
%%

La doble calificación es un sistema en el que **tanto el cliente como el taller se califican mutuamente** después de cada servicio. El cliente evalúa al taller (rapidez, calidad, precio), y el taller evalúa al cliente (puntualidad, trato, pago). Esto genera confianza y reputación para ambas partes, y ayuda al motor de asignación a elegir mejores talleres y a los talleres a decidir si aceptan a un cliente problemático.

## 🧩 Explicación técnica

%%
Ahora sí la versión completa con términos técnicos, fórmulas, estructura, etc. Podés usar tablas:

- Listas
- Diagramas
- Bloques de código
- Tablas
- Imagenes
%%

La **doble calificación** es un mecanismo de reputación bidireccional que se implementa en plataformas de servicios (Uber, Mercado Libre, Airbnb). En el sistema de auxilio mecánico, se aplica al finalizar el servicio y el pago.

### Tipos de calificación

| Quién califica | A quién | Aspectos típicos | Escala |
|----------------|---------|------------------|--------|
| **Cliente** | Taller | Tiempo de respuesta, calidad de la reparación, trato del técnico, precio justo. | 1-5 estrellas + comentario opcional |
| **Taller** | Cliente | Puntualidad, claridad en la descripción del problema, respeto al personal, pago correcto. | 1-5 estrellas (o pulgar arriba/abajo) + comentario opcional |

### Flujo de calificación

```
1. Cliente paga el servicio (finaliza transacción).  
    ↓
    
2. Sistema muestra pantalla de calificación al cliente: preguntas sobre el taller.  
    ↓
    
3. Cliente envía calificación (estrellas + comentario). Se guarda en la BD.  
    ↓
    
4. Sistema muestra pantalla de calificación al taller: preguntas sobre el cliente.  
    ↓
    
5. Taller envía calificación. Se guarda en la BD.  
    ↓
    
6. Las calificaciones actualizan el promedio de reputación de cada parte.
```


### Modelo de datos (tablas)

```sql
-- Calificaciones de clientes a talleres
CREATE TABLE calificaciones_cliente_taller (
    id SERIAL PRIMARY KEY,
    emergencia_id INT REFERENCES emergencias(id),
    taller_id INT REFERENCES talleres(id),
    cliente_id INT REFERENCES clientes(id),
    puntuacion INT CHECK (puntuacion BETWEEN 1 AND 5),
    comentario TEXT,
    created_at TIMESTAMP
);

-- Calificaciones de talleres a clientes
CREATE TABLE calificaciones_taller_cliente (
    id SERIAL PRIMARY KEY,
    emergencia_id INT REFERENCES emergencias(id),
    taller_id INT REFERENCES talleres(id),
    cliente_id INT REFERENCES clientes(id),
    puntuacion INT CHECK (puntuacion BETWEEN 1 AND 5),
    comentario TEXT,
    created_at TIMESTAMP
);
```

### Cálculo de reputación

- **Reputación del taller:** Promedio de las últimas `N` calificaciones de clientes (ej. últimas 50). Se usa en el motor de asignación.
    
- **Reputación del cliente:** Promedio de calificaciones de talleres. Un cliente con baja reputación (ej. < 2 estrellas) podría ser penalizado (menor prioridad de asignación, o el taller puede rechazarlo sin penalización).
    

### Uso en el sistema

- **Motor de asignación:** Incluye la reputación del taller como factor (peso 20% en el score).
    
- **Taller al recibir notificación:** Puede ver la reputación del cliente antes de aceptar (opcional).
    
- **Reportes:** Número de calificaciones positivas/negativas por taller, clientes problemáticos, etc.
    

## 🔗 Se conecta con

%%  
Links a otras notas atómicas relacionadas.  
Esto es lo que convierte tus notas en una red (Zettelkasten) en vez de una lista.

Agregá todos los conceptos que se relacionen con este.  
%%

- [[sistema-auxilio-mecanico-flujo]]
    
- [[motor-asignacion-talleres]]
    
- [[pasarela-pagos-integracion]]
    
- [[reputacion-algoritmo]]
    

## 🌍 Ejemplo concreto

%%  
Un caso real (puede ser codigo) sobre el concepto. Los ejemplos concretos son lo que hace que el concepto "enganche" en la memoria.  
%%

**Caso: Servicio de batería completado**

- **Cliente:** Juan Pérez (reputación actual: 4.7 estrellas)
    
- **Taller:** Mecánica Rápida (reputación actual: 4.5 estrellas)
    

**Calificación del cliente al taller:**

- Juan otorga 5 estrellas y comenta: "Llegaron en 10 minutos, muy amables, problema resuelto rápido."
    
- El promedio del taller sube a 4.52.
    

**Calificación del taller a Juan:**

- El taller otorga 4 estrellas y comenta: "Cliente puntual, describió bien el problema. Se demoró un poco en pagar."
    
- El promedio de Juan baja a 4.68.
    

**Impacto futuro:**

- Para la próxima emergencia de Juan, el motor de asignación considera su reputación (aún alta, no afecta).
    
- Si Juan tuviera reputación 2.0 por mal comportamiento, el taller podría rechazar la solicitud sin penalización.
    

## ⚠️ Errores comunes

%%  
¿Qué confunde a la gente con este concepto?  
¿Con qué otro concepto se suele mezclar?  
¿Qué pensabas vos antes de entenderlo bien?  
%%

- **Creer que la calificación es unilateral (solo cliente a taller):** La doble calificación implica que ambas partes se evalúan. El taller también tiene derecho a calificar al cliente.
    
- **No usar las calificaciones en la lógica del sistema:** Guardar las calificaciones pero no actualizar la reputación ni usarla en asignación o en decisiones de aceptación es un error.
    
- **Permitir calificaciones sin servicio completado:** Solo deben permitirse después de que el servicio haya finalizado y pagado. Evita calificaciones falsas.
    
- **No manejar calificaciones extremas (solo 1 o 5 estrellas):** Se puede implementar validación de patrón o ponderación para evitar manipulación.
    
- **Olvidar el anonimato o la posibilidad de responder comentarios:** En plataformas reales, a veces se permite que el taller responda a la calificación del cliente. No es obligatorio, pero mejora la transparencia.
    

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
¿Qué es la doble calificación en el sistema de auxilio mecánico?  
Back: Es un mecanismo donde cliente y taller se califican mutuamente después de cada servicio (1-5 estrellas + comentario), generando reputación para ambas partes.  
Tags: sistemas-informacion-2 concepto  
END

START  
Básico  
¿Qué aspectos puede calificar el cliente sobre el taller?  
Back: Tiempo de respuesta, calidad de reparación, trato del técnico, precio justo.  
Tags: sistemas-informacion-2 concepto  
END

START  
Básico  
¿Qué aspectos puede calificar el taller sobre el cliente?  
Back: Puntualidad, claridad en la descripción del problema, respeto al personal, pago correcto.  
Tags: sistemas-informacion-2 concepto  
END

START  
Básico  
¿Cómo se usa la reputación del taller en el sistema?  
Back: El motor de asignación la incluye como factor (peso 20%) para elegir el mejor taller.  
Tags: sistemas-informacion-2 concepto ejemplo  
END