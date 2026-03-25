---
tipo: tema
materia: sistemas-informacion-2
dificultad: 🟢 baja
estado: 📖 en-progreso
tags: [ecommerce, comercio-electronico, tienda-online]
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
# Sistemas de comercio electrónico (E‑commerce)

---

## 🧠 Desarrollo del concepto

**Definición:**  

El comercio electrónico (e‑commerce) es la compra y venta de productos o servicios a través de Internet, así como la transferencia de fondos y datos para ejecutar estas transacciones. Un sistema de comercio electrónico es el conjunto de tecnologías, aplicaciones y procesos que permiten realizar estas actividades de forma automatizada, segura y escalable.

**Características clave:**

- **Omnicanalidad:** integración con canales físicos (tiendas, catálogos) y digitales (web, app, redes sociales).
- **Personalización:** recomendaciones de productos basadas en el comportamiento del usuario.
- **Seguridad:** cifrado de datos (SSL/TLS), autenticación, cumplimiento de estándares PCI‑DSS para pagos con tarjeta.
- **Gestión de catálogo:** manejo de productos, precios, imágenes, inventario.
- **Procesamiento de pedidos:** desde la selección hasta la facturación y el envío.
- **Integración con sistemas internos:** ERP (para contabilidad e inventario), CRM (para gestión de clientes), SCM (para logística).

**Modelos de negocio en e‑commerce:**

| Modelo | Descripción | Ejemplo |
|--------|-------------|---------|
| **B2C** | Empresa → Consumidor final | Amazon, Mercado Libre |
| **B2B** | Empresa → Empresa | Mayoristas, plataformas industriales |
| **C2C** | Consumidor → Consumidor | eBay, Wallapop |
| **C2B** | Consumidor → Empresa | Freelancers, crowdsourcing |
| **G2C** | Gobierno → Ciudadano | Trámites online, pago de impuestos |

**Tecnologías comunes:**

- **Plataformas de e‑commerce:** Shopify, Magento, WooCommerce, PrestaShop.
- **Pasarelas de pago:** PayPal, Stripe, Mercado Pago, tarjetas de crédito.
- **Carrito de compras:** componente que acumula productos antes de la compra.
- **Motores de recomendación:** algoritmos de machine learning para sugerencias.
- **Analítica web:** seguimiento de visitas, conversión, abandono de carrito.

**Ejemplo práctico:**

Una tienda de ropa online:

- Los usuarios navegan por categorías, ven imágenes de productos y los añaden al carrito.
- Al finalizar, ingresan sus datos y eligen entre varios métodos de pago.
- El sistema verifica el inventario en tiempo real (integrado con el ERP).
- Una vez confirmado el pago, envía un correo de confirmación y actualiza el stock.
- El pedido pasa al área de logística (SCM) para su preparación y envío.
- El cliente puede rastrear el envío en línea.

**Importancia:**

- Amplía el alcance geográfico sin necesidad de tiendas físicas.
- Reduce costos operativos (menos personal, menos alquileres).
- Permite operación 24/7.
- Genera datos valiosos sobre comportamiento de compra.
- Facilita la experimentación con precios, promociones y productos.

---

## 🃏 Flashcards para Anki

TARGET DECK: boveda informatica::sistemas informacion 2::temas::tipos sistemas informacion::sistemas comercio electronico

START
Básico
Anverso: ¿Qué es el comercio electrónico (e‑commerce)?
Reverso: Compra y venta de productos o servicios a través de Internet, incluyendo transferencia de fondos y datos.
Tags: definicion
END

START
Básico
Anverso: Menciona tres características clave del e‑commerce.
Reverso: Omnicanalidad, personalización, seguridad, gestión de catálogo, procesamiento de pedidos, integración con sistemas internos.
Tags: caracteristicas
END

START
Básico (y tarjeta invertida)
Anverso: Modelo B2C (e‑commerce)
Reverso: Business to Consumer. Empresa vende directamente al consumidor final.
Tags: modelos
END

START
Básico (y tarjeta invertida)
Anverso: Modelo B2B (e‑commerce)
Reverso: Business to Business. Transacciones entre empresas.
Tags: modelos
END

START
Básico (y tarjeta invertida)
Anverso: Modelo C2C (e‑commerce)
Reverso: Consumer to Consumer. Consumidores venden a otros consumidores (plataformas como eBay).
Tags: modelos
END

START
Básico (y tarjeta invertida)
Anverso: Pasarela de pago
Reverso: Servicio que procesa pagos electrónicos de forma segura (ej. PayPal, Stripe, Mercado Pago).
Tags: tecnologias
END

START
Básico (y tarjeta invertida)
Anverso: Motor de recomendación
Reverso: Algoritmo que sugiere productos basado en el comportamiento del usuario y datos históricos.
Tags: tecnologias
END

START
Básico
Anverso: ¿Por qué es importante el e‑commerce para una empresa?
Reverso: Amplía alcance geográfico, reduce costos operativos, permite operación 24/7, genera datos valiosos y facilita experimentación comercial.
Tags: importancia
END

START
Oclusión de imagen
Texto: Los modelos de e‑commerce incluyen {{c1::B2C}}, {{c1::B2B}}, {{c1::C2C}}, {{c1::C2B}} y {{c1::G2C}}.
Tags: modelos, cloze
END

---

## 🔗 Enlaces a clases donde apareció este tema

- [[2026-03-13_presentacion-materia]] (se menciona dentro de los tipos de sistemas)
- [[2026-03-11 — Creación e instrucción de los grupos]] (el grupo 9 trabaja con CRM + Ecommerce)

---

## 📚 Referencias y recursos

<!--
  Referencia basada en los índices proporcionados:
  Laudon: capítulo 10 "E‑commerce: mercados digitales, productos digitales".
  Sección 10.1 "¿Cuáles son las características únicas del e‑commerce, los mercados digitales y los productos digitales?" (página 383).
  Allí se explican los conceptos fundamentales.
-->

- [[laudon-k-c_laudon-j-p_2016_sistemas-de-informacion-gerencial_14aed_pearson-educacion.pdf#page=383|Laudon & Laudon, capítulo 10, sección 10.1 "¿Cuáles son las características únicas del e‑commerce, los mercados digitales y los productos digitales?"]] – Introduce el e‑commerce, sus modelos y características.