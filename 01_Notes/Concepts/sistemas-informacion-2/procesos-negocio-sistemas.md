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

# Procesos de negocio en sistemas de información

## 📖 Definición simple

%%
Explicalo como si el que lo va a leer nunca oyó hablar del tema.

- Sin tecnicismos.
- Sin siglas sin explicar.
- Una o dos oraciones máximo.
- Si no podés hacerlo simple, todavía no lo entendiste del todo (Feynman dixit).
%%

En un sistema de información, los **procesos** son el conjunto de **pasos, reglas y actividades** que convierten los datos en información útil. Definen cómo se hacen las cosas: quién hace qué, en qué orden, y qué reglas se aplican. Son como la "receta" que el sistema sigue para funcionar.

## 🧩 Explicación técnica

%%
Ahora sí la versión completa con términos técnicos, fórmulas, estructura, etc. Podés usar tablas:

- Listas
- Diagramas
- Bloques de código
- Tablas
- Imagenes
%%

En el contexto de los sistemas de información, los **procesos** (también llamados procesos de negocio o flujos de trabajo) son uno de los seis componentes fundamentales. Representan la **lógica operativa** que transforma los datos en información y coordina las acciones de los actores y el software.

**Características clave:**

- **Secuencia de actividades:** Los procesos tienen un orden definido (pasos que pueden ser secuenciales, paralelos o condicionales).
- **Reglas de negocio:** Condiciones que determinan qué camino tomar (ej. "si el monto > $1000, requiere aprobación del gerente").
- **Entradas y salidas:** Reciben datos (entradas) y producen información o acciones (salidas).
- **Roles y responsabilidades:** Definen qué actor (persona o sistema) ejecuta cada paso.
- **Tiempos y plazos:** Pueden incluir tiempos máximos de respuesta o fechas límite.

**Tipos de procesos en un sistema de información:**

| Tipo | Descripción | Ejemplo |
|------|-------------|---------|
| **Proceso operativo** | Actividades del día a día, transaccionales. | Registrar una factura, subir un documento. |
| **Proceso de gestión** | Planificación, control, toma de decisiones. | Aprobar un presupuesto, revisar indicadores. |
| **Proceso de soporte** | Apoyan a los procesos operativos. | Gestión de usuarios, respaldo de datos. |

**Representación de procesos:**  
Se utilizan diagramas como **diagramas de flujo**, **diagramas de actividades (UML)**, o **BPMN** (Business Process Model and Notation). En el perfil del proyecto, se pueden describir en texto o con diagramas simples.

**Importancia en el sistema:**
- Sin procesos definidos, el software sería solo un repositorio de datos sin lógica de negocio.
- Los procesos automatizan tareas repetitivas, reducen errores y aseguran consistencia.

## 🔗 Se conecta con

%%
Links a otras notas atómicas relacionadas.
Esto es lo que convierte tus notas en una red (Zettelkasten) en vez de una lista.

Agregá todos los conceptos que se relacionen con este.
%%

- [[componentes-sistema-informacion-computacional]]
- [[datos-informacion-diferencia]]
- [[reglas-de-negocio]]
- [[bpmn-diagramas]]
- [[flujo-de-trabajo-workflow]]

## 🌍 Ejemplo concreto

%%
Un caso real (puede ser codigo) sobre el concepto. Los ejemplos concretos son lo que hace que el concepto "enganche" en la memoria.
%%

**Caso: Proceso de aprobación de documentos en el sistema de gestión documental (Grupo 5)**

**Descripción del proceso (flujo):**

1. **Inicio:** El operador sube un documento (PDF, imagen) al sistema.
2. **Validación automática:** El sistema verifica formato y tamaño (regla: solo PDF, <10 MB). Si no cumple → rechaza y notifica al operador.
3. **Asignación de metadatos:** El operador completa campos obligatorios (tipo de documento, proveedor, fecha).
4. **Envío a aprobación:** El sistema notifica al supervisor correspondiente (por email y en el panel).
5. **Decisión del supervisor:**
   - Si **aprueba** → el documento pasa a estado "publicado" y se notifica al operador.
   - Si **rechaza** → el sistema pide motivo, lo registra, y devuelve el documento al operador para corrección.
6. **Registro histórico:** Cada paso queda guardado en el log del sistema (quién, cuándo, qué acción).
7. **Fin:** El documento publicado está disponible para búsqueda y consulta.

**Reglas de negocio asociadas:**
- Un documento rechazado no puede ser aprobado sin una nueva subida.
- Si el supervisor no responde en 48 horas, se envía un recordatorio automático.
- Solo el gerente puede aprobar documentos de más de $5000.

**Beneficio:** El proceso elimina el caos de aprobaciones por correo electrónico y deja trazabilidad completa.

## ⚠️ Errores comunes

%%
¿Qué confunde a la gente con este concepto?
¿Con qué otro concepto se suele mezclar?
¿Qué pensabas vos antes de entenderlo bien?
%%

- **Confundir procesos con procedimientos manuales en papel:** Los procesos en un sistema de información están (al menos parcialmente) automatizados. No son solo instrucciones escritas.
- **Creer que los procesos son solo el flujo del software:** También incluyen acciones humanas (ej. el supervisor aprueba) y reglas de negocio que pueden estar fuera del código (ej. políticas de la empresa).
- **No documentar los procesos en el perfil del proyecto:** El docente espera que se describan los procesos del sistema, no solo los componentes técnicos.
- **Ignorar los flujos alternativos (errores, excepciones):** Describir solo el "camino feliz" (todo sale bien) es insuficiente. Hay que incluir qué pasa si hay error, rechazo, o demora.

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
¿Qué son los procesos en un sistema de información?
Back: Conjunto de actividades, reglas de negocio y flujos que transforman datos en información, definen quién hace qué y en qué orden, y coordinan las acciones del software y los actores.
Tags: sistemas-informacion-2 concepto
END

START
Básico
¿Cuál es la diferencia entre un proceso operativo y un proceso de gestión?
Back: El proceso operativo maneja transacciones del día a día (ej. registrar factura). El proceso de gestión apoya planificación y control (ej. aprobar presupuesto).
Tags: sistemas-informacion-2 concepto diferencia
END

START
Básico
¿Qué elementos debe describir un proceso en el perfil del proyecto?
Back: Secuencia de pasos, reglas de negocio, entradas y salidas, roles responsables, y flujos alternativos (excepciones).
Tags: sistemas-informacion-2 concepto
END

START
Básico
Pon un ejemplo de un proceso en un sistema de gestión documental.
Back: Proceso de aprobación: operador sube documento → validación automática → supervisor aprueba o rechaza → notificación → registro histórico. Incluye reglas como "si el monto > $5000, aprueba el gerente".
Tags: sistemas-informacion-2 concepto ejemplo
END