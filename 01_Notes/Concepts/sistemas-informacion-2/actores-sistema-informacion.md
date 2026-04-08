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

# Actores en un sistema de información

## 📖 Definición simple

%%
Explicalo como si el que lo va a leer nunca oyó hablar del tema.

- Sin tecnicismos.
- Sin siglas sin explicar.
- Una o dos oraciones máximo.
- Si no podés hacerlo simple, todavía no lo entendiste del todo (Feynman dixit).
%%

Los **actores** son todas las personas, entidades o sistemas externos que **interactúan** con un sistema de información. Pueden ser quienes **ingresan datos** (empleados, clientes) o quienes **reciben información** (gerentes, sistemas contables). Sin actores, el sistema no tendría quién lo use ni para qué serviría.

## 🧩 Explicación técnica

%%
Ahora sí la versión completa con términos técnicos, fórmulas, estructura, etc. Podés usar tablas:

- Listas
- Diagramas
- Bloques de código
- Tablas
- Imagenes
%%

En el contexto de los sistemas de información, los **actores** son uno de los seis componentes fundamentales (junto con software, hardware, datos, procesos y documentación). Representan a cualquier **entidad externa** que interactúa con el sistema, ya sea iniciando una acción o recibiendo resultados.

**Características clave:**

- **Externos al sistema:** Los actores están fuera del límite del sistema. No forman parte del código ni de la base de datos.
- **Roles, no individuos:** Un mismo actor puede representar un rol (ej. "Operador") que puede ser desempeñado por diferentes personas.
- **Pueden ser humanos o sistemas:** Los actores no son solo personas; también pueden ser otros programas, sensores o dispositivos.

**Clasificación de actores:**

| Tipo | Descripción | Ejemplo |
|------|-------------|---------|
| **Actor primario** | Inicia la interacción para lograr un objetivo. | Un operador que sube un documento. |
| **Actor secundario** | Ayuda al sistema a cumplir el objetivo (responde a una solicitud). | Un servicio de correo electrónico que envía notificaciones. |
| **Actor humano** | Persona que usa el sistema. | Gerente, supervisor, cliente. |
| **Actor sistema** | Otro software o hardware que se comunica con el sistema. | Sistema de facturación externo, sensor IoT, base de datos remota. |

**Relación con casos de uso:**  
En UML, los actores se conectan a **casos de uso** para mostrar qué funcionalidades del sistema utilizan. Por ejemplo, el actor "Operador" se conecta al caso de uso "Subir documento".

**Importancia en el perfil del proyecto:**  
Se deben identificar y describir los actores del sistema, indicando qué rol cumplen y qué interacciones tienen con el sistema (qué datos ingresan, qué información reciben).

## 🔗 Se conecta con

%%
Links a otras notas atómicas relacionadas.
Esto es lo que convierte tus notas en una red (Zettelkasten) en vez de una lista.

Agregá todos los conceptos que se relacionen con este.
%%

- [[componentes-sistema-informacion-computacional]]
- [[casos-de-uso]]
- [[uml-2-5]]
- [[roles-de-usuario]]

## 🌍 Ejemplo concreto

%%
Un caso real (puede ser codigo) sobre el concepto. Los ejemplos concretos son lo que hace que el concepto "enganche" en la memoria.
%%

**Caso: Sistema de gestión documental para TransRápida SRL**

| Actor | Tipo | Descripción de la interacción |
|-------|------|-------------------------------|
| **Operador** | Humano primario | Ingresa datos: sube documentos, completa metadatos (fecha, proveedor, tipo). Recibe confirmación de carga y notificaciones de aprobación. |
| **Supervisor** | Humano primario | Recibe notificaciones de documentos pendientes. Aprueba o rechaza documentos. Consulta historial de aprobaciones. |
| **Gerente** | Humano primario | Consulta reportes de documentos procesados, tiempos de aprobación. No sube documentos. |
| **Sistema de correo** | Sistema secundario | Recibe solicitudes de envío de notificaciones (email) y las entrega a los destinatarios. |
| **Sistema de facturación externo** | Sistema primario | Consulta la API del sistema de gestión documental para obtener facturas electrónicas validadas. |

**Diagrama de actores (textual):**  
`Operador` --- (sube) ---> `Sistema` --- (notifica) ---> `Supervisor`  
`Supervisor` --- (aprueba) ---> `Sistema` --- (envía) ---> `Sistema de correo`  
`Gerente` --- (consulta reportes) ---> `Sistema`  
`Sistema de facturación` --- (consulta API) ---> `Sistema`

## ⚠️ Errores comunes

%%
¿Qué confunde a la gente con este concepto?
¿Con qué otro concepto se suele mezclar?
¿Qué pensabas vos antes de entenderlo bien?
%%

- **Confundir actor con usuario del sistema:** Un actor es un rol, no una persona concreta. El mismo usuario puede tener varios roles (ej. Juan es Operador y Supervisor).
- **Olvidar actores no humanos:** Muchos solo piensan en personas, pero los sistemas externos (APIs, servicios de email, sensores) también son actores importantes.
- **Poner actores que están dentro del sistema:** Por ejemplo, un "módulo de autenticación" no es un actor porque forma parte del sistema. Los actores son externos.
- **No identificar actores secundarios:** Los actores secundarios (que el sistema llama para cumplir un objetivo) suelen omitirse, pero son esenciales para entender las dependencias.

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
¿Qué son los actores en un sistema de información?
Back: Personas, entidades o sistemas externos que interactúan con el sistema, ya sea ingresando datos, recibiendo información o iniciando procesos.
Tags: sistemas-informacion-2 concepto
END

START
Básico
¿Cuál es la diferencia entre un actor primario y uno secundario?
Back: El actor primario inicia la interacción para lograr un objetivo. El actor secundario ayuda al sistema a cumplir el objetivo (responde a una solicitud).
Tags: sistemas-informacion-2 concepto diferencia
END

START
Básico
Menciona un ejemplo de actor humano y un actor sistema en un sistema de gestión documental.
Back: Actor humano: Operador, Supervisor, Gerente. Actor sistema: Servicio de correo electrónico, sistema de facturación externo.
Tags: sistemas-informacion-2 concepto ejemplo
END

START
Básico
¿Por qué es importante identificar actores en el perfil del proyecto?
Back: Para entender quiénes usarán el sistema, qué necesidades tienen, y cómo interactuarán (datos que ingresan, información que reciben), lo que define los requisitos funcionales.
Tags: sistemas-informacion-2 concepto
END