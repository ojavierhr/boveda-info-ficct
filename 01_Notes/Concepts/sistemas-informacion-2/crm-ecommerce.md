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

# CRM + Ecommerce

## 📖 Definición simple

%%
Explicalo como si el que lo va a leer nunca oyó hablar del tema.

- Sin tecnicismos.
- Sin siglas sin explicar.
- Una o dos oraciones máximo.
- Si no podés hacerlo simple, todavía no lo entendiste del todo (Feynman dixit).
%%

**CRM (Customer Relationship Management):** Sistema para gestionar la relación con los clientes, centralizando sus datos, historial de compras, interacciones y preferencias, con el objetivo de fidelizarlos y vender más.

**Ecommerce (Comercio electrónico):** Plataforma de venta online (tienda virtual) donde los clientes pueden comprar productos o servicios 24/7 desde cualquier dispositivo con internet.

Cuando se integran, el CRM alimenta al ecommerce con información del cliente (recomendaciones personalizadas, ofertas) y el ecommerce envía al CRM cada compra e interacción para enriquecer el perfil del cliente.

## 🧩 Explicación técnica

%%
Ahora sí la versión completa con términos técnicos, fórmulas, estructura, etc. Podés usar tablas:

- Listas
- Diagramas
- Bloques de código
- Tablas
- Imagenes
%%

### CRM (Customer Relationship Management)

El CRM es una estrategia y un conjunto de herramientas que permiten gestionar de manera sistemática todas las interacciones con clientes actuales y potenciales. Sus funciones principales:

- **Gestión de contactos:** Base de datos unificada con datos demográficos, historial de compras, preferencias, interacciones (llamadas, emails, chats).
- **Automatización de ventas:** Seguimiento de oportunidades (lead → cliente), pipeline de ventas, alertas de seguimiento.
- **Automatización de marketing:** Campañas de email segmentadas, landing pages, scoring de leads.
- **Servicio al cliente:** Tickets de soporte, base de conocimiento, chat en vivo, encuestas de satisfacción.

**Ejemplos de CRM:** Salesforce, HubSpot, Zoho CRM, Dynamics 365.

### Ecommerce (Comercio electrónico)

Plataforma tecnológica que permite la compraventa de productos o servicios a través de internet. Componentes típicos:

- **Catálogo de productos:** Fotos, descripciones, precios, stock.
- **Carrito de compras:** Acumula ítems, calcula envíos e impuestos.
- **Pasarela de pago:** Integración con tarjetas, transferencias, billeteras digitales (Mercado Pago, PayPal).
- **Gestión de pedidos:** Confirmación, facturación, tracking de envío.
- **Panel de administración:** Gestión de inventario, promociones, cupones.

**Tipos de ecommerce:**
- B2C (empresa → consumidor)
- B2B (empresa → empresa)
- C2C (consumidor → consumidor, ej. Mercado Libre)

**Ejemplos de plataformas ecommerce:** Shopify, WooCommerce, Magento, PrestaShop.

### Integración CRM + Ecommerce

Cuando ambos sistemas están conectados:

1. **Sincronización de datos:** Cada nuevo cliente que se registra en la tienda online se crea automáticamente en el CRM.
2. **Historial de compras en CRM:** Cada pedido completado se registra en el perfil del cliente dentro del CRM.
3. **Segmentación avanzada:** El CRM puede segmentar clientes según su comportamiento de compra (frecuencia, monto, categorías) y enviar campañas personalizadas.
4. **Recomendaciones personalizadas:** El ecommerce muestra productos basados en el historial del cliente almacenado en el CRM.
5. **Carritos abandonados:** El CRM detecta carritos no completados y puede enviar emails automáticos de recuperación.
6. **Servicio postventa:** El agente de soporte ve en el CRM el último pedido del cliente y puede resolver más rápido.

## 🔗 Se conecta con

%%
Links a otras notas atómicas relacionadas.
Esto es lo que convierte tus notas en una red (Zettelkasten) en vez de una lista.

Agregá todos los conceptos que se relacionen con este.
%%

- [[sistemas-informacion-empresarial]]
- [[facturacion-electronica]]
- [[gestion-documental]]
- [[pasarela-de-pago]]
- [[automatizacion-marketing]]

## 🌍 Ejemplo concreto

%%
Un caso real (puede ser codigo) sobre el concepto. Los ejemplos concretos son lo que hace que el concepto "enganche" en la memoria.
%%

**Caso: Tienda de indumentaria deportiva con ecommerce + CRM integrado**

**Sin integración:**
- El cliente compra en la web, pero el equipo de marketing no sabe qué compró.
- Para enviar una oferta de zapatillas, envían a todos los clientes por igual (genérico).
- Si el cliente llama por un problema con su pedido, el agente le pide el número de pedido y no ve su historial.

**Con integración CRM + Ecommerce:**

1. **Registro:** El cliente se registra en la tienda online (nombre, email, categorías de interés). El CRM crea su perfil automáticamente.

2. **Primera compra:** Compra una remera y un short. El ecommerce envía al CRM el detalle: productos, fecha, monto.

3. **Segmentación:** El CRM identifica que le interesa "running". Automáticamente lo incluye en una campaña de email sobre zapatillas para running.

4. **Abandono de carrito:** El cliente agrega zapatillas al carrito pero no paga. Al cabo de 2 horas, el CRM activa un email de recordatorio con un cupón del 10%.

5. **Atención al cliente:** Semanas después, el cliente llama porque el short vino con un defecto. El agente ingresa su email, ve en el CRM su historial de compras, el número de pedido y el producto exacto. Puede procesar el cambio o reembolso en minutos.

6. **Fidelización:** A los 60 días sin compra, el CRM envía un email "¡Te extrañamos!" con un 15% de descuento personalizado.

Resultado: aumento de conversión por carritos abandonados, mejor experiencia de cliente, más recompra.

## ⚠️ Errores comunes

%%
¿Qué confunde a la gente con este concepto?
¿Con qué otro concepto se suele mezclar?
¿Qué pensabas vos antes de entenderlo bien?
%%

- **Confundir CRM con un simple directorio de contactos:** El CRM no es solo una agenda; incluye automatización de marketing, pipeline de ventas, análisis predictivo.
- **Pensar que ecommerce es solo "tener una página con productos":** Un verdadero ecommerce tiene gestión de inventario, pasarela de pagos, envíos, facturación electrónica, etc.
- **Creer que integrar CRM y ecommerce es opcional o solo para grandes empresas:** Es crítico para cualquier negocio online que quiera personalizar la experiencia y retener clientes.
- **Ignorar la calidad de los datos:** Si los datos del cliente están incompletos o desactualizados, el CRM no podrá segmentar bien y las campañas fallarán.

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
¿Qué es un CRM (Customer Relationship Management)?
Back: Sistema para gestionar la relación con clientes, centralizando sus datos, historial de compras e interacciones, con el objetivo de fidelizarlos y aumentar ventas.
Tags: sistemas-informacion-2 concepto
END

START
Básico
¿Qué es el Ecommerce?
Back: Plataforma de venta online (tienda virtual) que permite comprar productos o servicios 24/7, con catálogo, carrito, pasarela de pago y gestión de pedidos.
Tags: sistemas-informacion-2 concepto
END

START
Básico
¿Qué beneficios trae integrar CRM con Ecommerce?
Back: Sincronización automática de clientes y pedidos, segmentación avanzada, recomendaciones personalizadas, recuperación de carritos abandonados y atención al cliente más eficiente.
Tags: sistemas-informacion-2 concepto integracion
END

START
Básico
Pon un ejemplo concreto de cómo un CRM + Ecommerce integrado recupera un carrito abandonado.
Back: El cliente agrega productos al carrito pero no paga. El sistema detecta el abandono y el CRM envía automáticamente un email de recordatorio (y opcionalmente un cupón de descuento) para incentivar la finalización de la compra.
Tags: sistemas-informacion-2 concepto ejemplo
END