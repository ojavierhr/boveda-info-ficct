---
tipo: tema
materia: sistemas-informacion-2
dificultad: 🟢 baja
estado: 📖 en-progreso
tags: [tps, transacciones, operaciones]
---

# Sistemas de procesamiento de transacciones (TPS)

---

## 🧠 Desarrollo del concepto

<!--
  En esta sección desarrollas el concepto. Puedes dividirla en subsecciones.
  Lo importante es que quede claro y puedas volver a consultarlo rápidamente.
-->

**Definición:**  

Un sistema de procesamiento de transacciones (Transaction Processing System, TPS) es un sistema de información computarizado que registra y procesa las transacciones diarias de una organización. Una transacción es un evento de negocio que genera o modifica datos almacenados (por ejemplo, una venta, un depósito bancario, una reserva de hotel). El TPS es la base operativa de la empresa, ya que alimenta a otros sistemas con datos actualizados.

**Características principales:**

- **Alto volumen de transacciones:** maneja miles o millones de operaciones diarias.
- **Procesamiento en tiempo real o por lotes:** puede procesar cada transacción en el momento (online) o agruparlas y procesarlas después (batch).
- **Confiabilidad y disponibilidad:** debe funcionar sin interrupciones (24/7 en muchos casos).
- **Precisión y consistencia:** garantiza que los datos queden correctos y sin duplicidades (propiedades ACID en bases de datos).
- **Registro auditado:** deja trazabilidad de todas las operaciones.

**Tipos de procesamiento:**

- **Procesamiento por lotes (batch):** las transacciones se acumulan durante un período y se procesan todas juntas. Ejemplo: nómina mensual, facturación de servicios.
- **Procesamiento en línea (OLTP – Online Transaction Processing):** cada transacción se procesa en el momento en que ocurre. Ejemplo: cajero automático, compra en e‑commerce.

**Ejemplo práctico:**

En una tienda minorista:

- Cuando un cajero escanea un producto, el TPS:
  - Registra la venta.
  - Actualiza el inventario (resta una unidad).
  - Calcula el total y el cambio.
  - Genera el ticket.
  - Envía los datos al sistema de contabilidad.

**Importancia:**

- Es el **corazón operativo** de la empresa; sin él, no se pueden realizar las actividades diarias.
- Proporciona los datos básicos para los sistemas de nivel gerencial (MIS, DSS, etc.).
- Permite automatizar procesos repetitivos y reducir errores manuales.
- Ayuda a cumplir con regulaciones (facturación, registros contables).

---

## 🃏 Flashcards para Anki

<!--
  Copia este bloque al final de tu nota.
  Las tarjetas se guardarán en:
    boveda informatica::sistemas informacion 2::temas::tipos de sistemas de informacion::sistemas de procesamiento de transacciones (TPS)
  Si algún tipo de nota no existe en Anki, cámbialo a "Básico".
-->

TARGET DECK: boveda informatica::sistemas informacion 2::temas::tipos de sistemas de informacion::sistemas de procesamiento de transacciones

START
Básico
Anverso: ¿Qué es un sistema de procesamiento de transacciones (TPS)?
Reverso: Sistema computarizado que registra y procesa las transacciones diarias de una organización (ventas, depósitos, reservas, etc.). Es la base operativa de la empresa.
Tags: definicion
END

START
Básico
Anverso: ¿Qué es una transacción en el contexto de un TPS?
Reverso: Evento de negocio que genera o modifica datos almacenados (ej. una venta, un depósito bancario).
Tags: transaccion
END

START
Básico
Anverso: Menciona las características principales de un TPS.
Reverso: Alto volumen, procesamiento en tiempo real o por lotes, confiabilidad, precisión, registro auditado.
Tags: caracteristicas
END

START
Básico (y tarjeta invertida)
Anverso: Procesamiento por lotes (batch)
Reverso: Las transacciones se acumulan y se procesan todas juntas en un período. Ej: nómina mensual.
Tags: batch
END

START
Básico (y tarjeta invertida)
Anverso: Procesamiento en línea (OLTP)
Reverso: Cada transacción se procesa en el momento en que ocurre. Ej: cajero automático, compra online.
Tags: oltp
END

START
Básico
Anverso: ¿Por qué es importante un TPS en una organización?
Reverso: Es el corazón operativo, proporciona datos a otros sistemas, automatiza procesos repetitivos y ayuda al cumplimiento normativo.
Tags: importancia
END

START
Oclusión de imagen
Texto: Las dos formas principales de procesar transacciones son {{c1::procesamiento por lotes (batch)}} y {{c1::procesamiento en línea (OLTP)}}.
Tags: procesamiento, cloze
END

---

## 🔗 Enlaces a clases donde apareció este tema

<!--
  Aquí enlazas a las notas de clase donde mencionaste este concepto.
  Así puedes saltar directamente al contexto original.
  Asegúrate de que los nombres de los archivos coincidan exactamente con los que tienes en tu bóveda.
-->

- [[2026-03-13_presentacion-materia]] (se menciona en la sección de tipos de sistemas)

---

## 📚 Referencias y recursos

<!--
  Si tienes los libros en PDF dentro de la carpeta `03-recursos/pdf/`, enlazalos aquí.
  Puedes añadir números de página para ir directo al grano.
-->

- [[laudon-k-c_laudon-j-p_2016_sistemas-de-informacion-gerencial_14aed_pearson-educacion.pdf#page=388|Laudon & Laudon, capítulo 9, sección "¿Qué son los sistemas empresariales?"]] – Explica cómo los TPS son la base de los sistemas empresariales.
- [[pressman-r-s_maxin-b-r_2021_ingenieria-del-software-un-enfoque-practico_9aed_macgraw-hill-interamericana.pdf#page=406|Pressman & Maxim, capítulo 17, "Pruebas de sistema"]] – Menciona transacciones en el contexto de pruebas.