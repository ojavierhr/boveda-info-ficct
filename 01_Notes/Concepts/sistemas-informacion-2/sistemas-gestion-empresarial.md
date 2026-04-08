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

# Sistemas de Gestión Empresarial

## 📖 Definición simple

%%
Explicalo como si el que lo va a leer nunca oyó hablar del tema.

- Sin tecnicismos.
- Sin siglas sin explicar.
- Una o dos oraciones máximo.
- Si no podés hacerlo simple, todavía no lo entendiste del todo (Feynman dixit).
%%

Son aplicaciones informáticas que ayudan a las empresas a **automatizar y organizar sus procesos internos** (ventas, compras, inventario, contabilidad, recursos humanos) para funcionar de manera más eficiente, con menos errores y mejor control.

## 🧩 Explicación técnica

%%
Ahora sí la versión completa con términos técnicos, fórmulas, estructura, etc. Podés usar tablas:

- Listas
- Diagramas
- Bloques de código
- Tablas
- Imagenes
%%

Un **Sistema de Gestión Empresarial (SGE)** es un conjunto de aplicaciones de software que apoyan los procesos operativos y administrativos de una organización. A diferencia de un sistema de información genérico, los SGE se enfocan en la **ejecución y control** de actividades cotidianas (facturar, comprar, pagar sueldos, controlar stock), no solo en reportar información.

**Tipos principales de SGE:**

| Tipo | Área que gestiona | Ejemplo concreto |
|------|-------------------|------------------|
| **ERP** | Toda la empresa (integrador) | SAP, Odoo, Microsoft Dynamics |
| **CRM** | Relación con clientes | Salesforce, HubSpot, Zoho |
| **SCM** | Cadena de suministro | Blue Yonder, Oracle SCM |
| **SGD** | Documentos electrónicos | DocuWare, Alfresco, OpenKM |
| **MRP** | Planificación de materiales (producción) | (nota aparte) |
| **TMS** | Gestión de transporte | MercuryGate, Oracle TMS |
| **WMS** | Gestión de almacenes | Manhattan, Infor WMS |
| **HRMS** | Recursos humanos (nómina, talento) | Workday, SAP SuccessFactors |

**Características comunes a todos los SGE:**
- **Centralización de datos:** Una sola base de datos evita duplicación e inconsistencias.
- **Automatización de flujos:** Ejemplo: una venta automáticamente descuenta stock y genera factura.
- **Control de acceso:** Distintos permisos según el rol (vendedor no ve sueldos).
- **Generación de reportes:** En tiempo real o periódicos.
- **Integración:** Pueden comunicarse con otros sistemas (bancos, pasarelas de pago, etc.).

**Diferencia con "Sistemas de Información Empresarial":**
- Los sistemas de información empresarial (SIE) son un concepto más amplio que incluye también herramientas de inteligencia de negocios, soporte a decisiones, etc.
- Los sistemas de gestión empresarial (SGE) se centran en las operaciones diarias (transacciones). En la práctica, los términos se usan como sinónimos en muchos contextos, pero técnicamente los SGE son un subconjunto de los SIE.

## 🔗 Se conecta con

%%
Links a otras notas atómicas relacionadas.
Esto es lo que convierte tus notas en una red (Zettelkasten) en vez de una lista.

Agregá todos los conceptos que se relacionen con este.
%%

- [[sistemas-informacion-empresarial]]
- [[erp-rrhh]]
- [[erp-contabilidad]]
- [[mrp-material-requirements-planning]]
- [[gestion-documental]]
- [[crm-ecommerce]]
- [[facturacion-electronica]]

## 🌍 Ejemplo concreto

%%
Un caso real (puede ser codigo) sobre el concepto. Los ejemplos concretos son lo que hace que el concepto "enganche" en la memoria.
%%

**Caso: Pequeña empresa de venta de repuestos de automóviles**

Sin sistemas de gestión empresarial:
- El vendedor anota pedidos en una libreta.
- El encargado de compras no sabe cuándo reponer stock.
- El contador recibe facturas en papel y las tipea manualmente.
- El dueño no tiene idea de qué productos se venden más.

Con sistemas de gestión empresarial (básicos):
- **ERP (básico):** Una sola plataforma que integra:
  - **Gestión de ventas:** El vendedor emite factura electrónica desde el sistema → automáticamente se descuenta stock.
  - **Gestión de compras:** Cuando el stock baja de un mínimo, el sistema sugiere orden de compra.
  - **Contabilidad:** La factura de venta ya está registrada en el libro de ventas.
  - **Inventario:** El dueño ve en tiempo real el valor del stock.
- **CRM (opcional, pero útil):** Guarda el historial de cada cliente para ofrecer promociones personalizadas.

Resultado: se reducen errores, se acelera la atención al cliente, y el dueño puede tomar decisiones con datos reales (ej. "el repuesto X se vende mucho, compremos más").

## ⚠️ Errores comunes

%%
¿Qué confunde a la gente con este concepto?
¿Con qué otro concepto se suele mezclar?
¿Qué pensabas vos antes de entenderlo bien?
%%

- **Creer que "sistema de gestión empresarial" es sinónimo de "ERP":** ERP es solo un tipo (el más integrador), pero hay otros: CRM, SCM, WMS, etc. Todos son sistemas de gestión empresarial.

- **Pensar que solo sirven para grandes empresas:** Hoy hay soluciones en la nube (SaaS) accesibles para pymes, como Odoo, Zoho o incluso módulos específicos de facturación y stock.

- **Confundir un SGE con una simple planilla de cálculo:** Una planilla de Excel no es un sistema de gestión; no tiene control de integridad de datos, ni seguridad, ni automatización de flujos.

- **Ignorar la necesidad de capacitación:** Un SGE mal implementado (sin capacitar al personal) genera rechazo y errores. El factor humano es crítico.

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
¿Qué son los Sistemas de Gestión Empresarial (SGE)?
Back: Aplicaciones informáticas que automatizan y organizan los procesos operativos y administrativos de una empresa (ventas, compras, inventario, contabilidad, RRHH) para mejorar la eficiencia y el control.
Tags: sistemas-informacion-2 concepto
END

START
Básico
¿Cuál es la diferencia entre un ERP y un CRM dentro de los SGE?
Back: El ERP integra todas las áreas internas (finanzas, RRHH, producción, ventas). El CRM se enfoca específicamente en la relación con clientes (ventas, marketing, postventa). Ambos son SGE.
Tags: sistemas-informacion-2 concepto diferencia
END

START
Básico
Menciona al menos tres tipos de Sistemas de Gestión Empresarial.
Back: ERP, CRM, SCM, SGD, MRP, HRMS, WMS, TMS (cualesquiera tres).
Tags: sistemas-informacion-2 concepto
END

START
Básico
¿Por qué una planilla de Excel no se considera un Sistema de Gestión Empresarial?
Back: Porque carece de control de integridad de datos, seguridad de acceso, automatización de flujos y centralización confiable; es solo una herramienta de cálculo, no un sistema transaccional integrado.
Tags: sistemas-informacion-2 concepto
END