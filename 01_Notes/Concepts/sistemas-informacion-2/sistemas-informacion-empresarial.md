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

# Sistemas de Información Empresarial

## 📖 Definición simple

%%
Explicalo como si el que lo va a leer nunca oyó hablar del tema.

- Sin tecnicismos.
- Sin siglas sin explicar.
- Una o dos oraciones máximo.
- Si no podés hacerlo simple, todavía no lo entendiste del todo (Feynman dixit).
%%

Son aplicaciones y herramientas informáticas que ayudan a las empresas a **capturar, procesar, almacenar y compartir información** para tomar mejores decisiones, coordinar sus áreas (ventas, finanzas, producción, RRHH) y automatizar tareas repetitivas.

## 🧩 Explicación técnica

%%
Ahora sí la versión completa con términos técnicos, fórmulas, estructura, etc. Podés usar tablas:

- Listas
- Diagramas
- Bloques de código
- Tablas
- Imagenes
%%

Un **Sistema de Información Empresarial (SIE)** es un conjunto integrado de componentes (hardware, software, datos, procedimientos y personas) que recolecta, procesa, almacena y distribuye información para apoyar la gestión, operación, toma de decisiones y control estratégico de una organización.

**Clasificación por nivel organizacional:**

| Tipo | Usuarios | Ejemplos |
|------|----------|----------|
| **TPS** (Transaction Processing Systems) | Nivel operativo | Punto de venta, facturación |
| **MIS** (Management Information Systems) | Nivel táctico | Informes de ventas mensuales |
| **DSS** (Decision Support Systems) | Nivel táctico/estratégico | Modelos de simulación |
| **ESS** (Executive Support Systems) | Nivel estratégico | Cuadros de mando, dashboards |

**Sistemas integrados más comunes:**
- **ERP** (Enterprise Resource Planning): unifica toda la empresa en una sola base de datos (finanzas, RRHH, producción, ventas).
- **CRM** (Customer Relationship Management): gestiona la relación con clientes.
- **SCM** (Supply Chain Management): gestiona la cadena de suministro.
- **SGD** (Sistemas de Gestión Documental): organiza documentos electrónicos (como [[gestion-documental]]).

**Características clave:**
- Integración de datos (evita silos de información).
- Acceso en tiempo real (o casi).
- Seguridad y control de accesos.
- Capacidad de generar reportes y análisis.

## 🔗 Se conecta con

%%
Links a otras notas atómicas relacionadas.
Esto es lo que convierte tus notas en una red (Zettelkasten) en vez de una lista.

Agregá todos los conceptos que se relacionen con este.
%%

- [[gestion-documental]]
- [[mrp-material-requirements-planning]]
- [[erp-rrhh]]
- [[erp-contabilidad]]
- [[facturacion-electronica]]
- [[crm-ecommerce]]
- [[sistemas-informacion-empresarial]] (esta misma, pero se enlaza desde otros)

## 🌍 Ejemplo concreto

%%
Un caso real (puede ser codigo) sobre el concepto. Los ejemplos concretos son lo que hace que el concepto "enganche" en la memoria.
%%

**Caso: Pequeña empresa de distribución de bebidas**

Sin sistemas integrados:
- El vendedor toma pedidos en papel.
- El almacén no sabe qué hay disponible.
- El pedido puede demorar días y a veces se vende algo que ya no está.

Con un sistema de información empresarial (ERP básico + CRM + gestión de inventarios):
1. El vendedor ingresa el pedido en una tablet (CRM).
2. El sistema verifica automáticamente el stock (gestión de inventarios).
3. Si hay stock, genera la orden de preparación en el almacén.
4. Actualiza el inventario y la contabilidad en tiempo real.
5. El cliente recibe un SMS con el seguimiento.

Resultado: menos errores, menos demoras, clientes más contentos.

## ⚠️ Errores comunes

%%
¿Qué confunde a la gente con este concepto?
¿Con qué otro concepto se suele mezclar?
¿Qué pensabas vos antes de entenderlo bien?
%%

- **Pensar que un sistema de información es solo el software:** También incluye personas, procesos y datos. Si el personal no está capacitado, el sistema falla.
- **Confundir ERP con todos los sistemas empresariales:** El ERP es uno de los muchos tipos (CRM, SCM, SGD, etc.). No son sinónimos.
- **Creer que implantar un SIE resuelve automáticamente los problemas de la empresa:** Si los procesos internos son malos, la tecnología solo los hará más rápidos, no mejores.
- **Ignorar la integridad de los datos:** "Basura entra, basura sale". Si los datos de entrada son incorrectos, las decisiones basadas en el sistema serán erróneas.

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
¿Qué son los Sistemas de Información Empresarial?
Back: Conjunto de aplicaciones y herramientas (software, hardware, datos, procesos, personas) que capturan, procesan, almacenan y distribuyen información para apoyar la gestión y decisiones en una empresa.
Tags: sistemas-informacion-2 concepto
END

START
Básico
¿Cuál es la diferencia entre un ERP y un CRM?
Back: El ERP integra todas las áreas internas de la empresa (finanzas, RRHH, producción). El CRM se enfoca específicamente en la relación con clientes (ventas, marketing, postventa).
Tags: sistemas-informacion-2 concepto diferencia
END

START
Básico
¿Cuáles son los cuatro tipos de sistemas por nivel organizacional?
Back: TPS (operativo), MIS (táctico), DSS (táctico/estratégico), ESS (estratégico).
Tags: sistemas-informacion-2 concepto
END

START
Básico
Pon un ejemplo concreto de un Sistema de Información Empresarial en una distribuidora de bebidas.
Back: Un vendedor ingresa pedidos en una tablet (CRM), el sistema verifica stock en tiempo real, genera orden de preparación, actualiza inventario y contabilidad, y envía seguimiento al cliente.
Tags: sistemas-informacion-2 concepto ejemplo
END