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

# ERP - Módulo de Contabilidad

## 📖 Definición simple

%%
Explicalo como si el que lo va a leer nunca oyó hablar del tema.

- Sin tecnicismos.
- Sin siglas sin explicar.
- Una o dos oraciones máximo.
- Si no podés hacerlo simple, todavía no lo entendiste del todo (Feynman dixit).
%%

Es la parte del sistema ERP que registra automáticamente todas las operaciones financieras de la empresa (ventas, compras, pagos, cobros) y mantiene los libros contables al día. Genera los estados financieros (balance, estado de resultados) y facilita el cumplimiento fiscal.

## 🧩 Explicación técnica

%%
Ahora sí la versión completa con términos técnicos, fórmulas, estructura, etc. Podés usar tablas:

- Listas
- Diagramas
- Bloques de código
- Tablas
- Imagenes
%%

El **módulo de contabilidad en un ERP** es el núcleo financiero del sistema. Centraliza y automatiza el registro de todas las transacciones que afectan el patrimonio de la empresa, aplicando el principio de partida doble (cada débito tiene su crédito). A diferencia de un software contable aislado, el módulo de contabilidad del ERP recibe asientos automáticamente desde otros módulos (ventas, compras, RRHH, producción, tesorería), eliminando la necesidad de tipear datos manualmente.

**Submódulos típicos:**

| Submódulo | Función |
|-----------|---------|
| **Libro Mayor (General Ledger)** | Cuentas contables centrales. Recibe resúmenes de todos los otros submódulos. Genera balances y estado de resultados. |
| **Cuentas por Pagar (Accounts Payable)** | Gestiona facturas de proveedores, vencimientos, pagos, retenciones. |
| **Cuentas por Cobrar (Accounts Receivable)** | Gestiona facturas a clientes, cobranzas, antigüedad de saldos. |
| **Gestión de Caja y Bancos** | Conciliaciones bancarias, movimientos de efectivo, cheques, transferencias. |
| **Activos Fijos (Fixed Assets)** | Control de bienes de uso (máquinas, vehículos, inmuebles), depreciaciones, bajas. |
| **Presupuestos (Budgeting)** | Planificación financiera, control de ejecución presupuestaria, desviaciones. |
| **Impuestos (Tax Management)** | Cálculo de IVA, impuesto a las ganancias, percepciones, declaraciones juradas. |
| **Cierre Contable** | Proceso mensual/anual de ajustes, devengamientos, generación de estados. |

**Integraciones clave:**
- **Con Ventas/CRM:** Una factura electrónica emitida genera automáticamente el asiento: Debe a Clientes (activo), Haber a Ventas (ingreso) + IVA.
- **Con Compras:** Una orden de compra facturada genera: Debe a Compras (gasto) + IVA, Haber a Proveedores (pasivo).
- **Con RRHH:** La liquidación de sueldos genera asientos de gastos de personal y pasivos por cargas sociales.
- **Con Producción/MRP:** La asignación de costos a órdenes de producción se refleja en el libro mayor.

**Principales salidas:**
- Balance General (activo, pasivo, patrimonio neto).
- Estado de Resultados (ingresos, costos, gastos, utilidad/pérdida).
- Libro Diario y Libro Mayor.
- Mayor de cuentas auxiliares (por cliente, proveedor, proyecto).
- Declaraciones fiscales (IVA, Ganancias, Ingresos Brutos).

## 🔗 Se conecta con

%%
Links a otras notas atómicas relacionadas.
Esto es lo que convierte tus notas en una red (Zettelkasten) en vez de una lista.

Agregá todos los conceptos que se relacionen con este.
%%

- [[sistemas-informacion-empresarial]]
- [[erp-rrhh]]
- [[facturacion-electronica]]
- [[cuentas-por-pagar]]
- [[cuentas-por-cobrar]]
- [[activos-fijos]]

## 🌍 Ejemplo concreto

%%
Un caso real (puede ser codigo) sobre el concepto. Los ejemplos concretos son lo que hace que el concepto "enganche" en la memoria.
%%

**Caso: Empresa distribuidora que implementa ERP con módulo contable integrado**

**Situación sin integración:**
- El vendedor emite una factura en un sistema de facturación.
- La contadora tipea manualmente el asiento en un software contable aparte.
- Al pagar a un proveedor, se registra el pago en el banco y luego se carga manualmente a la cuenta del proveedor.
- A fin de mes, hay que conciliar facturas, pagos y saldos; errores frecuentes.

**Con módulo contable integrado en el ERP:**

1. **Venta a crédito:** El vendedor emite una factura electrónica desde el módulo de ventas. El ERP automáticamente:
   - Registra el comprobante en Cuentas por Cobrar (cliente).
   - Genera el asiento: Debe a Clientes (activo) por $1000, Haber a Ventas (ingreso) por $800 + IVA $200.
   - Actualiza el libro mayor y el mayor auxiliar de ese cliente.

2. **Compra a proveedor:** Al recibir la factura del proveedor, el comprador la ingresa en el módulo de compras. El ERP:
   - Registra la deuda en Cuentas por Pagar.
   - Genera el asiento: Debe a Compras $600 + IVA $150, Haber a Proveedores $750.
   - Programa el vencimiento para pago automático.

3. **Pago a proveedor:** Cuando llega la fecha, el tesorero autoriza la transferencia. El ERP:
   - Registra el egreso bancario.
   - Genera el asiento: Debe a Proveedores $750, Haber a Banco $750.
   - Concilia automáticamente con el extracto bancario.

4. **Fin de mes:** El contador ejecuta el cierre mensual. El ERP:
   - Calcula las depreciaciones de activos fijos.
   - Devenga gastos (ej. seguros pagados por adelantado).
   - Genera el balance y el estado de resultados con solo presionar un botón.

Resultado: ahorro de horas de trabajo manual, cero errores de tipeo, información financiera en tiempo real para la toma de decisiones.

## ⚠️ Errores comunes

%%
¿Qué confunde a la gente con este concepto?
¿Con qué otro concepto se suele mezclar?
¿Qué pensabas vos antes de entenderlo bien?
%%

- **Pensar que el módulo de contabilidad del ERP es solo para grandes empresas:** También es útil para pymes, porque automatiza tareas repetitivas y reduce errores en el cumplimiento fiscal.
- **Confundir un software de facturación con un ERP contable completo:** Un software de facturación solo registra ventas; el módulo contable del ERP incluye cuentas por pagar, activos fijos, presupuestos, etc.
- **Creer que al implementarlo ya no se necesita contador:** El contador sigue siendo necesario para interpretar los estados, planificar impuestos y hacer ajustes complejos; el ERP solo automatiza el registro.
- **Ignorar la necesidad de conciliaciones automáticas:** El ERP no hace magia; hay que configurar reglas de conciliación bancaria y revisar las excepciones.

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
¿Qué es el módulo de Contabilidad en un ERP?
Back: Subsistema que registra automáticamente todas las operaciones financieras (ventas, compras, pagos, cobros) manteniendo los libros contables al día, y genera estados financieros y declaraciones fiscales.
Tags: sistemas-informacion-2 concepto
END

START
Básico
¿Cuál es la diferencia entre un software contable aislado y el módulo de contabilidad de un ERP?
Back: El módulo del ERP recibe asientos automáticos desde otros módulos (ventas, compras, RRHH, producción), evitando el tipeo manual y garantizando consistencia; el software aislado requiere entrada manual de datos.
Tags: sistemas-informacion-2 concepto diferencia
END

START
Básico
Menciona al menos tres submódulos típicos del módulo de contabilidad en un ERP.
Back: Libro Mayor, Cuentas por Pagar, Cuentas por Cobrar, Gestión de Caja y Bancos, Activos Fijos, Presupuestos, Impuestos. (Cualesquiera tres).
Tags: sistemas-informacion-2 concepto
END

START
Básico
Describe cómo integra el módulo de contabilidad con el módulo de ventas en un ERP.
Back: Cuando se emite una factura de venta, el módulo de contabilidad genera automáticamente el asiento: Debe a Clientes (activo), Haber a Ventas (ingreso) y Haber a IVA, y actualiza el mayor auxiliar del cliente.
Tags: sistemas-informacion-2 concepto integracion
END

START
Básico
Pon un ejemplo concreto de cómo el módulo de contabilidad integrado mejora el proceso de pago a proveedores.
Back: Al registrar la factura del proveedor, el ERP crea automáticamente la deuda en Cuentas por Pagar y programa el vencimiento. Al realizar la transferencia bancaria, el ERP genera el asiento de pago (Debe a Proveedores, Haber a Banco) y concilia con el extracto bancario.
Tags: sistemas-informacion-2 concepto ejemplo
END