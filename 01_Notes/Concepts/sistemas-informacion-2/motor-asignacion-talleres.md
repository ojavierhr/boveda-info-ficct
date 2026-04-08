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

# Motor de asignación inteligente de talleres

## 📖 Definición simple

%%
Explicalo como si el que lo va a leer nunca oyó hablar del tema.

- Sin tecnicismos.
- Sin siglas sin explicar.
- Una o dos oraciones máximo.
- Si no podés hacerlo simple, todavía no lo entendiste del todo (Feynman dixit).
%%

El motor de asignación de talleres es el **cerebro que elige automáticamente qué taller debe atender una emergencia**. Analiza varios factores (cercanía, especialización, disponibilidad, reputación y costo) y selecciona el mejor candidato. Si el taller rechaza o no responde, el motor reasigna al siguiente. Es como un "matchmaking" entre conductores varados y talleres disponibles.

## 🧩 Explicación técnica

%%
Ahora sí la versión completa con términos técnicos, fórmulas, estructura, etc. Podés usar tablas:

- Listas
- Diagramas
- Bloques de código
- Tablas
- Imagenes
%%

El **motor de asignación inteligente** es un algoritmo que recibe un incidente clasificado (con tipo de problema, ubicación, prioridad) y una lista de talleres registrados, y devuelve el taller más adecuado para resolverlo. Es un componente crítico del sistema de auxilio mecánico.

### Factores de asignación

| Factor | Descripción | Peso sugerido |
|--------|-------------|---------------|
| **Distancia** | Distancia geográfica entre el incidente y el taller (menor es mejor). | 35% |
| **Disponibilidad** | Si el taller tiene capacidad para atender (libre/ocupado, cantidad de técnicos libres). | 25% |
| **Reputación** | Calificación promedio del taller (1-5 estrellas) basada en historial. | 20% |
| **Costo estimado** | Costo promedio del servicio para ese tipo de incidente (menor es mejor). | 10% |
| **Especialización** | Coincidencia entre el tipo de incidente y los servicios que ofrece el taller. | 10% |

### Fórmula de puntuación (ejemplo)

Para cada taller candidato se calcula un **score** normalizado:

```
Score = (Distancia_normalizada * 0.35)

- (Disponibilidad_normalizada * 0.25)
    
- (Reputación_normalizada * 0.20)
    
- (Costo_normalizado * 0.10)
    
- (Especialización_normalizada * 0.10)
```


**Nota:** Para la distancia y el costo (donde menor es mejor), se invierte la normalización (ej. 1 - valor_normalizado). Para disponibilidad, reputación y especialización, mayor valor es mejor.

### Flujo de ejecución

1. **Filtrado inicial:** Se descartan talleres que:
   - No ofrecen el servicio requerido (ej. no hacen reparación de baterías).
   - Están marcados como "ocupados" o fuera de horario laboral.
   - Tienen reputación muy baja (ej. < 2 estrellas) o están inhabilitados.

2. **Cálculo de scores:** Para cada taller restante, se calcula el score según la fórmula.

3. **Selección:** Se elige el taller con mayor score.

4. **Notificación y espera:** Se envía notificación push. Si el taller no responde en `X` segundos (ej. 60) o rechaza explícitamente, se pasa al siguiente taller de la lista ordenada.

5. **Reasignación:** El proceso se repite hasta que algún taller acepta o se agota la lista.

### Consideraciones adicionales

- **Desempate:** Si dos talleres tienen el mismo score, se prioriza el de mayor reputación o el más cercano.
- **Prioridad de incidente:** Para incidentes de alta prioridad (choque, motor), se puede reducir el tiempo de espera y aumentar el peso de la distancia.
- **Actualización en tiempo real:** La disponibilidad del taller se actualiza cuando el taller acepta una emergencia (pasa a "ocupado") y se libera al finalizar.

## 🔗 Se conecta con

%%
Links a otras notas atómicas relacionadas.
Esto es lo que convierte tus notas en una red (Zettelkasten) en vez de una lista.

Agregá todos los conceptos que se relacionen con este.
%%

- [[sistema-auxilio-mecanico-flujo]]
- [[ia-clasificacion-incidentes]]
- [[notificaciones-push-firebase]]
- [[doble-calificacion-sistemas]]
- [[actores-sistema-informacion]]

## 🌍 Ejemplo concreto

%%
Un caso real (puede ser codigo) sobre el concepto. Los ejemplos concretos son lo que hace que el concepto "enganche" en la memoria.
%%

**Caso: Incidente de batería en Av. San Martín (coordenadas -17.78, -63.18)**

Talleres candidatos después del filtro:

| Taller | Distancia (km) | Disponibilidad | Reputación | Costo (Bs) | Especialización (Batería) |
|--------|----------------|----------------|------------|------------|---------------------------|
| A      | 1.2            | Libre (1.0)    | 4.8        | 150        | Sí (1.0)                  |
| B      | 0.8            | Libre (1.0)    | 4.2        | 180        | Sí (1.0)                  |
| C      | 2.5            | Libre (1.0)    | 4.9        | 140        | No (0.0)                  |
| D      | 3.0            | Ocupado (0.0)  | 4.5        | 160        | Sí (1.0)                  |

**Normalización (ejemplo rápido):**

- Distancia: se invierte (menor km, mayor puntaje). Escala 0-1: A=0.7, B=1.0, C=0.2, D=0.0.
- Disponibilidad: A=1.0, B=1.0, C=1.0, D=0.0.
- Reputación: normalizada sobre 5: A=0.96, B=0.84, C=0.98, D=0.90.
- Costo (menor mejor): invertido. Costo mínimo 140, máximo 180: A=0.5, B=0.0, C=1.0, D=0.5.
- Especialización: A=1.0, B=1.0, C=0.0, D=1.0.

**Score calculado (usando pesos 35%,25%,20%,10%,10%):**

- Taller A: (0.7*0.35)+(1.0*0.25)+(0.96*0.20)+(0.5*0.10)+(1.0*0.10) = 0.245 + 0.25 + 0.192 + 0.05 + 0.10 = 0.837
- Taller B: (1.0*0.35)+(1.0*0.25)+(0.84*0.20)+(0.0*0.10)+(1.0*0.10) = 0.35 + 0.25 + 0.168 + 0.0 + 0.10 = 0.868
- Taller C: (0.2*0.35)+(1.0*0.25)+(0.98*0.20)+(1.0*0.10)+(0.0*0.10) = 0.07 + 0.25 + 0.196 + 0.10 + 0.0 = 0.616
- Taller D: Disponibilidad 0 → score 0 (descartado).

**Resultado:** Taller B es seleccionado (score 0.868). Se le notifica.

Si Taller B rechaza o no responde, el siguiente es Taller A (0.837), luego Taller C, etc.

## ⚠️ Errores comunes

%%
¿Qué confunde a la gente con este concepto?
¿Con qué otro concepto se suele mezclar?
¿Qué pensabas vos antes de entenderlo bien?
%%

- **No definir los pesos de la fórmula claramente:** Los pesos deben ser justificados y documentados. El docente puede preguntar por qué se eligió 35% para distancia.
- **Olvidar la normalización de variables:** No se pueden sumar kilómetros con estrellas directamente. Hay que llevar todas las variables a una escala común (ej. 0-1).
- **Ignorar la disponibilidad en tiempo real:** Si el taller está ocupado pero se le asigna igual, el sistema falla. La disponibilidad debe actualizarse dinámicamente.
- **No manejar el caso de "ningún taller disponible":** Debe haber una respuesta de contingencia (notificar al cliente, sugerir grúa particular, etc.).

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
¿Qué es el motor de asignación inteligente de talleres?
Back: Es el algoritmo que selecciona automáticamente el mejor taller para atender una emergencia, considerando distancia, disponibilidad, reputación, costo y especialización.
Tags: sistemas-informacion-2 concepto
END

START
Básico
¿Qué factores se consideran en la asignación y cuáles son sus pesos sugeridos?
Back: Distancia (35%), disponibilidad (25%), reputación (20%), costo (10%), especialización (10%).
Tags: sistemas-informacion-2 concepto
END

START
Básico
¿Qué ocurre si el taller seleccionado no responde o rechaza?
Back: El motor reasigna automáticamente la emergencia al siguiente taller candidato con mejor score.
Tags: sistemas-informacion-2 concepto
END

START
Básico
Describe un ejemplo concreto de asignación para un incidente de batería.
Back: Tres talleres: A (1.2 km, libre, 4.8 estrellas, Bs 150), B (0.8 km, libre, 4.2, Bs 180), C (2.5 km, libre, 4.9, Bs 140 pero no especializado). El motor calcula scores y selecciona B por mejor combinación de distancia y disponibilidad.
Tags: sistemas-informacion-2 concepto ejemplo
END