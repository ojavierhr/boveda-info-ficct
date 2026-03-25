---
tipo: tema
materia: sistemas-informacion-2
dificultad: 🟢 baja
estado: 📖 en-progreso
tags: [erp, integracion, empresarial]
---
<!--
  👆 Esto es el "frontmatter". Son meta-datos que usa Dataview para organizar tus notas.
  Puedes cambiar:
	  
    - tipo: siempre "tema" para notas de profundización.
    - materia: el nombre de la carpeta de la materia (sin espacios, con guiones).
    - dificultad: 🟢 baja, 🟡 media, 🔴 alta. ¡Actualízala cuando domines el concepto!
    - estado: 📖 en-progreso si aún estás estudiando, ✅ completado cuando lo domines.
    - tags: etiquetas para buscar más fácil.
    
  💡 Consejo: Si algún concepto se te resiste, cambia la dificultad a 🔴 alta.
  Así aparecerá en el dashboard de materia y sabrás que debes repasarlo.
  ¡Y no olvides marcar el estado como ✅ completado cuando ya lo hayas dominado!
-->
# Sistemas de gestión empresarial (ERP)

---

## 🧠 Desarrollo del concepto

**Definición:**  

Un Sistema de Planificación de Recursos Empresariales (Enterprise Resource Planning, ERP) es un sistema de información que integra todas las áreas funcionales de una organización (finanzas, recursos humanos, producción, ventas, logística, etc.) en una única plataforma unificada. Su objetivo es eliminar los silos de información, estandarizar procesos y proporcionar una visión global y en tiempo real de la operación de la empresa.

**Características clave:**

- **Integración modular:** el ERP está compuesto por módulos que cubren distintas áreas, pero todos comparten la misma base de datos central.
- **Procesos estandarizados:** incorpora buenas prácticas de la industria (best practices) que ayudan a homogeneizar la forma de trabajar.
- **Información en tiempo real:** al usar una única base de datos, cualquier actualización (por ejemplo, una venta) impacta inmediatamente a todos los módulos (contabilidad, inventario, etc.).
- **Visibilidad global:** los gerentes pueden obtener reportes consolidados de toda la empresa sin tener que consolidar datos manualmente.
- **Configuración, no desarrollo:** los ERPs se configuran para adaptarse a la empresa, evitando programación a medida (aunque pueden personalizarse).

**Módulos típicos:**

| Módulo | Funciones principales |
|--------|----------------------|
| Finanzas | Contabilidad general, cuentas por pagar/cobrar, gestión de tesorería, activos fijos. |
| Recursos Humanos (RRHH) | Nómina, gestión de personal, reclutamiento, capacitación. |
| Producción | Planificación de la producción, control de calidad, gestión de materiales. |
| Ventas y distribución | Gestión de pedidos, facturación, transporte. |
| Logística | Gestión de inventarios, compras, almacenes. |
| CRM | Gestión de clientes (a veces integrado o como módulo adicional). |
| SCM | Gestión de la cadena de suministro (a veces integrado). |

**Ejemplo práctico:**

Una empresa manufacturera implementa un ERP:

- El departamento de ventas registra un pedido → automáticamente se verifica disponibilidad de inventario.
- Si no hay stock, el módulo de producción genera una orden de fabricación.
- Cuando se completa la producción, el módulo de logística programa el envío.
- Simultáneamente, el módulo de finanzas genera la factura y registra el ingreso.

Todo esto ocurre sin intervención manual entre áreas, con datos consistentes y en tiempo real.

**Importancia:**

- Elimina la duplicación de datos y los errores derivados.
- Reduce costos operativos al automatizar procesos interdepartamentales.
- Mejora la toma de decisiones al proporcionar información consolidada y actualizada.
- Facilita el cumplimiento normativo (por ejemplo, normativas contables o fiscales).
- Permite escalar la operación sin perder control.

---

## 🃏 Flashcards para Anki

TARGET DECK: boveda informatica::sistemas informacion 2::temas::tipos sistemas informacion::sistemas gestion empresarial

START
Básico
Anverso: ¿Qué es un sistema ERP (Enterprise Resource Planning)?
Reverso: Sistema de información que integra todas las áreas funcionales de una organización en una única plataforma, con una base de datos central y procesos estandarizados.
Tags: definicion
END

START
Básico
Anverso: Menciona cuatro características clave de un ERP.
Reverso: Integración modular, procesos estandarizados, información en tiempo real, visibilidad global.
Tags: caracteristicas
END

START
Básico (y tarjeta invertida)
Anverso: ¿Por qué un ERP utiliza una base de datos central?
Reverso: Para que cualquier actualización impacte inmediatamente en todos los módulos (finanzas, inventario, etc.), asegurando consistencia y tiempo real.
Tags: base-datos
END

START
Básico (y tarjeta invertida)
Anverso: Módulo de Finanzas (en un ERP)
Reverso: Contabilidad general, cuentas por pagar/cobrar, gestión de tesorería, activos fijos.
Tags: modulos
END

START
Básico (y tarjeta invertida)
Anverso: Módulo de Recursos Humanos (en un ERP)
Reverso: Nómina, gestión de personal, reclutamiento, capacitación.
Tags: modulos
END

START
Básico (y tarjeta invertida)
Anverso: Módulo de Producción (en un ERP)
Reverso: Planificación de la producción, control de calidad, gestión de materiales.
Tags: modulos
END

START
Básico (y tarjeta invertida)
Anverso: Módulo de Ventas y Distribución (en un ERP)
Reverso: Gestión de pedidos, facturación, transporte.
Tags: modulos
END

START
Básico
Anverso: ¿Cuál es la importancia de un ERP para una organización?
Reverso: Elimina duplicación de datos, reduce costos operativos, mejora la toma de decisiones, facilita cumplimiento normativo y permite escalar la operación.
Tags: importancia
END

START
Oclusión de imagen
Texto: Un ERP integra módulos como {{c1::finanzas}}, {{c1::RRHH}}, {{c1::producción}}, {{c1::ventas}}, {{c1::logística}}, entre otros.
Tags: modulos, cloze
END

---

## 🔗 Enlaces a clases donde apareció este tema

- [[2026-03-13_presentacion-materia]] (se menciona dentro de los tipos de sistemas)
- [[2026-03-11 — Creación e instrucción de los grupos]] (el grupo 8 trabaja con MRP, que es un tipo de sistema relacionado con los ERP)

---

## 📚 Referencias y recursos

<!--
  Referencias basadas en los índices proporcionados:
  Laudon: capítulo 9 "Obtención de la excelencia operacional e intimidad con el cliente: aplicaciones empresariales".
  Sección 9.1 "¿Cómo ayudan los sistemas empresariales a que las empresas logren una excelencia operacional?"
  Dentro de esa sección, las páginas 350-352 tratan sobre qué son los sistemas empresariales y su valor.
  Kendall: no se encontró una sección específica sobre ERP en los índices proporcionados, por lo que se omite.
-->

- [[laudon-k-c_laudon-j-p_2016_sistemas-de-informacion-gerencial_14aed_pearson-educacion.pdf#page=349|Laudon & Laudon, capítulo 9, sección 9.1 "¿Cómo ayudan los sistemas empresariales a que las empresas logren una excelencia operacional?"]] – Introduce el concepto de sistemas empresariales (ERP) y explica su valor de negocios.