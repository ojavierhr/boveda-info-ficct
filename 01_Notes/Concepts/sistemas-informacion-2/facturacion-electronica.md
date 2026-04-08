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

# Facturación electrónica

## 📖 Definición simple

%%
Explicalo como si el que lo va a leer nunca oyó hablar del tema.

- Sin tecnicismos.
- Sin siglas sin explicar.
- Una o dos oraciones máximo.
- Si no podés hacerlo simple, todavía no lo entendiste del todo (Feynman dixit).
%%

Es la versión digital de una factura en papel. En lugar de imprimirla, se genera, envía y almacena por medios electrónicos, con validez legal y fiscal, normalmente firmada digitalmente para garantizar su autenticidad.

## 🧩 Explicación técnica

%%
Ahora sí la versión completa con términos técnicos, fórmulas, estructura, etc. Podés usar tablas:

- Listas
- Diagramas
- Bloques de código
- Tablas
- Imagenes
%%

La **facturación electrónica** es un sistema que permite emitir, transmitir, recibir y almacenar facturas en formato electrónico estructurado (generalmente XML, JSON o facturae), cumpliendo con requisitos legales y tributarios. Sustituye a la factura en papel y suele estar regulada por cada país.

**Elementos clave:**

- **Firma electrónica:** Garantiza la autoría e integridad del documento (no puede ser modificada después de firmada).
- **Formato estándar:** Por ejemplo, en Bolivia se usa el formato de la Administración Tributaria (SIN), en España Facturae, en México CFDI.
- **Validación previa:** En muchos países, el emisor envía la factura a la agencia tributaria para su autorización antes de entregarla al cliente.
- **Archivo electrónico:** Debe conservarse por un período legal (ej. 5-10 años) con metadados de búsqueda.

**Flujo típico (modelo con autorización previa):**
1. El vendedor genera el documento electrónico (factura).
2. Lo envía al proveedor de servicios de facturación o directamente a la agencia tributaria.
3. La agencia valida (formato, CUIT, alícuotas, etc.) y devuelve un "CAE" (Código de Autorización Electrónico) o similar.
4. El vendedor entrega la factura autorizada al comprador (por mail, portal web, etc.).
5. Ambas partes conservan el archivo digital.

**Beneficios:**
- Reducción de costos (papel, impresión, correo).
- Menor riesgo de pérdida o falsificación.
- Automatización contable (integración con sistemas ERP).
- Trazabilidad y auditoría más sencilla.

## 🔗 Se conecta con

%%
Links a otras notas atómicas relacionadas.
Esto es lo que convierte tus notas en una red (Zettelkasten) en vez de una lista.

Agregá todos los conceptos que se relacionen con este.
%%

- [[sistemas-informacion-empresarial]]
- [[gestion-documental]]
- [[punto-de-venta-tpv]]
- [[firma-electronica]]
- [[factura-electronica-normativa]]

## 🌍 Ejemplo concreto

%%
Un caso real (puede ser codigo) sobre el concepto. Los ejemplos concretos son lo que hace que el concepto "enganche" en la memoria.
%%

**Caso: Pequeño comercio textil en Bolivia**

Antes de la facturación electrónica:
- El vendedor anotaba los datos del cliente en un talonario.
- Entregaba el original y copia al cliente.
- Al final del mes, llevaba los talonarios a la contadora, quien tipeaba todo a mano en el sistema.

Con facturación electrónica:
1. El vendedor ingresa los datos en un POS (punto de venta) conectado a Internet.
2. El sistema genera un XML con los datos de la venta y lo envía al SIN (Servicio de Impuestos Nacionales).
3. El SIN valida y devuelve un código de autorización (CUF: Código Único de Factura).
4. El sistema imprime un comprobante con código QR (para que el cliente verifique online) y envía la factura por correo electrónico.
5. Automáticamente, el ERP contabiliza la venta y actualiza el inventario.

Resultado: menos errores, cumplimiento fiscal automático, el cliente puede validar su factura en la web del SIN.

## ⚠️ Errores comunes

%%
¿Qué confunde a la gente con este concepto?
¿Con qué otro concepto se suele mezclar?
¿Qué pensabas vos antes de entenderlo bien?
%%

- **Creer que factura electrónica es solo enviar un PDF por mail:** No, la factura electrónica es un archivo con datos estructurados (XML) y firma digital. El PDF es solo una representación visual opcional.
- **Pensar que no requiere validación tributaria:** En la mayoría de países con control fiscal, la factura debe ser validada previamente por la agencia tributaria o tener un mecanismo de autorización.
- **Confundir factura electrónica con factura digital:** Una factura digital puede ser un simple PDF sin firma ni validación; la electrónica tiene validez legal plena.
- **Ignorar los plazos de conservación:** Aunque sea digital, hay que guardar las facturas por el tiempo que exige la ley (generalmente 5 a 10 años) y poder presentarlas ante una auditoría.

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
¿Qué es la facturación electrónica?
Back: Es la emisión, transmisión y almacenamiento de facturas en formato electrónico (XML, JSON) con firma digital y validez legal, reemplazando al papel.
Tags: sistemas-informacion-2 concepto
END

START
Básico
¿Cuál es la diferencia entre factura electrónica y un simple PDF por mail?
Back: La factura electrónica es un archivo estructurado (XML) con firma digital y validación tributaria; el PDF es solo una representación visual. La electrónica tiene plena validez legal.
Tags: sistemas-informacion-2 concepto diferencia
END

START
Básico
Describe el flujo típico de una factura electrónica con autorización previa.
Back: 1. El vendedor genera el XML. 2. Lo envía a la agencia tributaria. 3. La agencia valida y devuelve un código de autorización. 4. El vendedor entrega la factura autorizada al comprador. 5. Ambas partes la archivan.
Tags: sistemas-informacion-2 concepto
END

START
Básico
Pon un ejemplo concreto de facturación electrónica en un pequeño comercio textil.
Back: El vendedor usa un POS que genera un XML, lo envía al SIN, obtiene un CUF, imprime comprobante con QR y envía la factura por mail, mientras el ERP actualiza inventario y contabilidad.
Tags: sistemas-informacion-2 concepto ejemplo
END