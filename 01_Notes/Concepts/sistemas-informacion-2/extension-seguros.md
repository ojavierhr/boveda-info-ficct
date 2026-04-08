---
tipo: concepto
materia: sistemas-informacion-2
semestre: 7
fecha-creacion: 2026-04-07
dificultad: 🟡 media
estado: 🔵 borrador
tags: [concepto, extension, seguros, parcial]

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

# Extensión con seguros

## 📖 Definición simple

%%
Explicalo como si el que lo va a leer nunca oyó hablar del tema.

- Sin tecnicismos.
- Sin siglas sin explicar.
- Una o dos oraciones máximo.
- Si no podés hacerlo simple, todavía no lo entendiste del todo (Feynman dixit).
%%

La extensión con seguros es una funcionalidad opcional que se puede agregar al sistema de auxilio mecánico si sobra tiempo. Permite que los clientes con seguro automotriz (ej. cobertura contra choques, grúa) soliciten el servicio a través de la plataforma y que el seguro pague directamente, en lugar de que el cliente pague y luego reclame. Simplifica el proceso para el usuario y automatiza la facturación entre taller y aseguradora.

## 🧩 Explicación técnica

%%
Ahora sí la versión completa con términos técnicos, fórmulas, estructura, etc. Podés usar tablas:

- Listas
- Diagramas
- Bloques de código
- Tablas
- Imagenes
%%

La **extensión con seguros** añade un nuevo actor (la compañía de seguros) y modifica el flujo de pago y validación. Se menciona en la especificación del parcial 1 como un *extra opcional* para quienes terminen temprano el MVP.

### Actores adicionales

| Actor | Rol |
|-------|-----|
| **Compañía de seguros** | Entidad externa que cubre total o parcialmente el costo del auxilio. |
| **Cliente con seguro** | Cliente que tiene una póliza vigente. Puede solicitar auxilio sin pagar directamente. |

### Flujo con seguro (integrado)

```
1. Cliente reporta emergencia normalmente.
    
2. Al momento de seleccionar método de pago, elige "Usar mi seguro".
    
3. Cliente ingresa número de póliza y compañía aseguradora.
    
4. Backend valida la póliza (vía API ficticia o real de la aseguradora):
    
    - Verifica cobertura (tipo de incidente cubierto, vigencia, límite de monto).
        
    - Obtiene datos del asegurado (nombre, vehículo, contacto).
        
5. Si es válida, el sistema procesa el servicio normalmente.
    
6. Al finalizar, el taller emite factura electrónica (o comprobante) a la aseguradora.
    
7. La plataforma cobra a la aseguradora (pago directo) y retiene comisión.
    
8. El cliente solo paga un deducible (si aplica) o nada.
```


### Integración con APIs de aseguradoras

En Bolivia, las aseguradoras no suelen exponer APIs públicas abiertas. Para la demo se puede:

- **Simular una API mock** que responda con datos de prueba (póliza válida/inválida).
- **Usar un proveedor de terceros** que agregue múltiples seguros (ej. ComparaOnline, Rastreator), aunque es más complejo.
- **Formulario manual** donde el cliente suba foto de la póliza y un operador valide (no automático).

Para el parcial, se espera al menos una **simulación** de la validación de seguro.

### Modelo de datos extendido

```sql
-- Tabla de pólizas (mock o sincronizada)
CREATE TABLE polizas (
    id SERIAL PRIMARY KEY,
    numero_poliza VARCHAR(50) UNIQUE,
    aseguradora VARCHAR(100),
    cliente_id INT REFERENCES clientes(id),
    cobertura TEXT,                -- ej. "choque, grúa, batería"
    monto_maximo DECIMAL(10,2),
    vigencia_desde DATE,
    vigencia_hasta DATE,
    activo BOOLEAN
);

-- En la tabla emergencias, agregar campos para seguro
ALTER TABLE emergencias ADD COLUMN usa_seguro BOOLEAN DEFAULT FALSE;
ALTER TABLE emergencias ADD COLUMN poliza_id INT REFERENCES polizas(id);
ALTER TABLE emergencias ADD COLUMN deducible_pagado DECIMAL(10,2);
```

### Endpoints adicionales (API)

- `POST /seguros/validar` – recibe número de póliza y aseguradora, retorna si es válida y qué cubre.
    
- `GET /seguros/mis-polizas` – para que el cliente vea sus pólizas activas (mock).
    
- `POST /emergencias/:id/facturar-seguro` – para que el taller emita factura a la aseguradora.
    

### Mock de validación en FastAPI

```python
@app.post("/seguros/validar")
async def validar_seguro(poliza: str, aseguradora: str):
    # Mock: solo acepta pólizas que empiecen con "SEGURO-" y terminen en dígitos
    if poliza.startswith("SEGURO-") and poliza[7:].isdigit():
        return {
            "valida": True,
            "cobertura": ["choque", "bateria", "grua"],
            "monto_maximo": 2000,
            "deducible": 100
        }
    else:
        return {"valida": False, "motivo": "Póliza no encontrada o inválida"}
```

## 🔗 Se conecta con

%%  
Links a otras notas atómicas relacionadas.  
Esto es lo que convierte tus notas en una red (Zettelkasten) en vez de una lista.

Agregá todos los conceptos que se relacionen con este.  
%%

- [[sistema-auxilio-mecanico-flujo]]
    
- [[pasarela-pagos-integracion]]
    
- [[actores-sistema-informacion]]
    
- [[facturacion-electronica]]
    
- [[mock-apis]]
    

## 🌍 Ejemplo concreto

%%  
Un caso real (puede ser codigo) sobre el concepto. Los ejemplos concretos son lo que hace que el concepto "enganche" en la memoria.  
%%

**Caso: Cliente con seguro de choque**

- **Cliente:** María tiene un seguro con "Seguros Bolivianos" que cubre choques y grúa.
    
- **Incidente:** Choca su auto, necesita grúa y taller.
    
- **Flujo:** María abre la app, reporta choque, adjunta fotos. Selecciona "Pagar con seguro". Ingresa su póliza `SEGURO-123456`. El backend mock valida la póliza (cubre choque, monto máximo Bs 2000, deducible Bs 100). El sistema asigna taller.
    
- **Servicio:** El taller envía grúa, repara el auto (costo total Bs 1800). La plataforma cobra a la aseguradora Bs 1800, retiene comisión 10% (Bs 180), paga al taller Bs 1620. María paga solo el deducible Bs 100 a través de la pasarela.
    
- **Resultado:** María no tuvo que pagar el servicio completo, el taller recibió su pago, la aseguradora facturada.
    

## ⚠️ Errores comunes

%%  
¿Qué confunde a la gente con este concepto?  
¿Con qué otro concepto se suele mezclar?  
¿Qué pensabas vos antes de entenderlo bien?  
%%

- **Pensar que la integración con seguros es obligatoria:** Es una extensión opcional para quienes terminen el MVP antes del plazo. No es parte del core.
    
- **No simular la validación de póliza:** Dejar el endpoint sin implementar (solo como idea) no cuenta. Al menos debe haber un mock funcional que devuelva datos de prueba.
    
- **Confundir el pago directo con reembolso al cliente:** El seguro paga directamente al taller, no al cliente. El cliente solo paga deducible si corresponde.
    
- **Ignorar la facturación electrónica:** Para que el seguro pague, se necesita una factura legal (SIN Bolivia) o al menos un comprobante formal. En la demo se puede simular.
    
- **No manejar la validación de cobertura por tipo de incidente:** Un seguro puede cubrir choque pero no batería. Hay que verificar que el incidente esté dentro de la cobertura antes de aceptar.
    

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
¿Qué es la extensión con seguros en el sistema de auxilio mecánico?  
Back: Una funcionalidad opcional que permite a clientes con seguro automotriz solicitar auxilio sin pagar directamente; la aseguradora cubre el costo y la plataforma gestiona la validación y facturación.  
Tags: sistemas-informacion-2 concepto extension  
END

START  
Básico  
¿Qué actores adicionales introduce la extensión con seguros?  
Back: Compañía de seguros (entidad externa) y cliente con seguro (puede usar su póliza).  
Tags: sistemas-informacion-2 concepto extension  
END

START  
Básico  
¿Cómo se valida una póliza de seguro en la demo del parcial?  
Back: Se puede implementar un mock (API simulada) que valide según reglas simples (ej. prefijo "SEGURO-" + dígitos) y devuelva cobertura y deducible.  
Tags: sistemas-informacion-2 concepto extension ejemplo  
END

START  
Básico  
¿Qué pasa si un incidente no está cubierto por la póliza del cliente?  
Back: La validación devuelve "no cubierto" y el cliente debe pagar con otro método (tarjeta, QR). El sistema no permite usar el seguro para ese incidente.  
Tags: sistemas-informacion-2 concepto extension  
END