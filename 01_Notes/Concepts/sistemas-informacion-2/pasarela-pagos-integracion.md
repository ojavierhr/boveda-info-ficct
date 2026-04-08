---
tipo: concepto
materia: sistemas-informacion-2
semestre: 7
fecha-creacion: 2026-04-07
dificultad: 🟡 media
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

# Pasarela de pagos e integración (sistema de auxilio mecánico)

## 📖 Definición simple

%%
Explicalo como si el que lo va a leer nunca oyó hablar del tema.

- Sin tecnicismos.
- Sin siglas sin explicar.
- Una o dos oraciones máximo.
- Si no podés hacerlo simple, todavía no lo entendiste del todo (Feynman dixit).
%%

La pasarela de pagos es un servicio online que permite que los clientes paguen con tarjeta de crédito/débito o mediante código QR de forma segura. En el sistema de auxilio mecánico, el cliente paga al taller a través de la app, la plataforma retiene una comisión (ej. 10%) y luego transfiere el resto al taller. La integración conecta la aplicación con la pasarela (como Mercado Pago, Stripe, PayPal) para automatizar todo el proceso.

## 🧩 Explicación técnica

%%
Ahora sí la versión completa con términos técnicos, fórmulas, estructura, etc. Podés usar tablas:

- Listas
- Diagramas
- Bloques de código
- Tablas
- Imagenes
%%

Una **pasarela de pago** (payment gateway) es un intermediario tecnológico que autoriza transacciones entre un cliente y un comerciante (taller) a través de tarjetas bancarias o billeteras digitales. Para el parcial, se debe integrar una pasarela (modo sandbox o simulación) que permita:

- **Pago con tarjeta** (Visa, Mastercard, etc.)
- **Pago con QR** (código generado por la app o estático del taller)

### Flujo de pago típico

```
1. Cliente finaliza el servicio y solicita pago en la app.  
    ↓
    
2. Backend (FastAPI) crea una "intención de pago" en la pasarela (con monto, moneda, descripción).  
    ↓
    
3. Pasarela devuelve un identificador de pago y una URL de checkout (o un QR).  
    ↓
    
4. App cliente muestra la interfaz de pago (formulario de tarjeta o código QR).  
    ↓
    
5. Cliente ingresa datos de tarjeta o escanea QR → la pasarela procesa.  
    ↓
    
6. Pasarela notifica al backend (vía webhook) si el pago fue exitoso o fallido.  
    ↓
    
7. Backend registra el pago, retiene la comisión (10%) y marca el servicio como pagado.  
    ↓
    
8. Periódicamente, el backend transfiere los fondos retenidos al taller (menos comisión).
```


### Opciones de pasarela para el proyecto (Bolivia / Latinoamérica)

| Pasarela | Modalidades | Sandbox | Comisión típica |
|----------|-------------|---------|-----------------|
| **Mercado Pago** | QR, tarjeta, efectivo (Pago Fácil, etc.) | Sí | 4-6% + fijo |
| **Stripe** | Tarjeta, Google/Apple Pay | Sí | 3-4% + fijo |
| **PayPal** | Tarjeta, saldo PayPal | Sí | 4-4.5% + fijo |
| **SIM (simulación propia)** | Ninguna real, solo lógica ficticia | N/A | 0% (para pruebas) |

> Para la demo del parcial, se puede simular la pasarela (mock) mientras no se tenga integración real. Pero la arquitectura debe estar preparada para reemplazar el mock por una pasarela real.

### Estructura de datos para pagos (tabla en PostgreSQL)

```sql
CREATE TABLE pagos (
    id SERIAL PRIMARY KEY,
    emergencia_id INT REFERENCES emergencias(id),
    monto_total DECIMAL(10,2),
    comision DECIMAL(10,2),          -- ej. 10% del monto_total
    monto_taller DECIMAL(10,2),      -- monto_total - comision
    metodo_pago VARCHAR(20),         -- 'tarjeta', 'qr'
    estado VARCHAR(20),              -- 'pendiente', 'aprobado', 'fallido', 'reembolsado'
    pasarela_transaccion_id VARCHAR(100),
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);
```

### Webhooks

La pasarela envía notificaciones HTTP (webhooks) al backend cuando un pago cambia de estado. El backend debe exponer un endpoint público (ej. `POST /webhook/pasarela`) que valide la firma y actualice el estado del pago.

### Manejo de la comisión

- La plataforma retiene un porcentaje (ej. 10%) de cada pago.
    
- Los fondos del taller se acumulan en una "cuenta interna" hasta que el taller solicite un retiro.
    
- Para el parcial, se puede simular la retención y mostrar reportes de ingresos, sin transferencias bancarias reales.
    

## 🔗 Se conecta con

%%  
Links a otras notas atómicas relacionadas.  
Esto es lo que convierte tus notas en una red (Zettelkasten) en vez de una lista.

Agregá todos los conceptos que se relacionen con este.  
%%

- [[sistema-auxilio-mecanico-flujo]]
    
- [[motor-asignacion-talleres]]
    
- [[doble-calificacion-sistemas]]
    
- [[stack-flutter-angular-fastapi]]
    

## 🌍 Ejemplo concreto

%%  
Un caso real (puede ser codigo) sobre el concepto. Los ejemplos concretos son lo que hace que el concepto "enganche" en la memoria.  
%%

**Caso: Cliente paga Bs. 150 por recarga de batería**

- **Monto total:** Bs. 150
    
- **Comisión (10%):** Bs. 15
    
- **Monto para taller:** Bs. 135
    

**Paso a paso (usando simulación o Mercado Pago sandbox):**

1. El backend crea una preferencia de pago:

```json
{
  "items": [{"title": "Servicio auxilio mecánico", "quantity": 1, "unit_price": 150}],
  "back_urls": {"success": "https://app.com/pago-exitoso"},
  "auto_return": "approved"
}
```

2. La pasarela devuelve un `init_point` (URL) o un código QR.
  
3. El cliente paga con tarjeta (modo sandbox usa números de prueba: 4242 4242...).
   
4. La pasarela redirige a `https://app.com/pago-exitoso?payment_id=123`.
   
5. El backend recibe el webhook, verifica el pago, actualiza la emergencia a "pagada".
   
6. En el reporte de fin de mes, el taller ve que ganó Bs. 135 por ese servicio.
   
## ⚠️ Errores comunes

%%  
¿Qué confunde a la gente con este concepto?  
¿Con qué otro concepto se suele mezclar?  
¿Qué pensabas vos antes de entenderlo bien?  
%%

- **No manejar el webhook correctamente:** Si solo se confía en la redirección del navegador, el pago puede quedar sin registrar si el usuario cierra la ventana. El webhook es obligatorio.
    
- **Olvidar el entorno sandbox:** Probar con tarjetas reales en desarrollo puede generar cargos no deseados. Siempre usar modo de pruebas.
    
- **Confundir la comisión con el cobro al cliente:** La comisión es un porcentaje que la plataforma descuenta del pago del cliente. El cliente paga el monto total; el taller recibe el monto menos comisión.
    
- **No validar la firma del webhook:** Un atacante podría simular pagos falsos. Hay que verificar que el webhook venga de la pasarela (usando secretos o tokens).
    
- **Simular mal la pasarela:** En la demo, si se simula, debe quedar claro que es un mock y la integración real sería similar.
    

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
¿Qué es una pasarela de pagos y para qué se usa en el sistema de auxilio mecánico?  
Back: Es un servicio que permite procesar pagos con tarjeta o QR de forma segura. Se usa para que el cliente pague al taller a través de la app, y la plataforma retiene una comisión.  
Tags: sistemas-informacion-2 concepto  
END

START  
Básico  
¿Cuál es el flujo básico de pago con pasarela?  
Back: Backend crea intención de pago → pasarela devuelve checkout/QR → cliente paga → pasarela notifica por webhook → backend actualiza estado y aplica comisión.  
Tags: sistemas-informacion-2 concepto  
END

START  
Básico  
¿Qué es un webhook en el contexto de pasarelas de pago?  
Back: Es una notificación HTTP que la pasarela envía al backend cuando un pago cambia de estado (aprobado, fallido, etc.). Es indispensable para registrar pagos de forma confiable.  
Tags: sistemas-informacion-2 concepto  
END

START  
Básico  
Si un servicio cuesta Bs. 200 y la comisión es del 10%, ¿cuánto recibe el taller?  
Back: Bs. 180 (Bs. 200 - 10% de comisión = Bs. 20 de comisión, resto para el taller).  
Tags: sistemas-informacion-2 concepto ejemplo  
END