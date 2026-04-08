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

# Costos: SaaS vs On‑Premise

## 📖 Definición simple

%%
Explicalo como si el que lo va a leer nunca oyó hablar del tema.

- Sin tecnicismos.
- Sin siglas sin explicar.
- Una o dos oraciones máximo.
- Si no podés hacerlo simple, todavía no lo entendiste del todo (Feynman dixit).
%%

En el perfil del proyecto se deben presentar **dos formas de presupuestar** el sistema para el cliente:  
- **SaaS (Software as a Service):** el cliente paga una suscripción mensual o anual por usar el software alojado en la nube.  
- **On‑premise:** el cliente compra una licencia y lo instala en sus propios servidores (paga el hardware, la instalación y el mantenimiento).  

La comparación ayuda al cliente a decidir qué modelo le conviene más.

## 🧩 Explicación técnica

%%
Ahora sí la versión completa con términos técnicos, fórmulas, estructura, etc. Podés usar tablas:

- Listas
- Diagramas
- Bloques de código
- Tablas
- Imagenes
%%

### Modelo SaaS (Software as a Service)

- El software se ejecuta en servidores del proveedor (nube).  
- El cliente accede por internet (navegador web o aplicación).  
- **Costos típicos:**  
  - Suscripción mensual o anual (por usuario, por módulo, o por uso).  
  - Configuración inicial (puede incluir onboarding).  
  - Soporte y actualizaciones incluidas en la suscripción.  
- **Ventajas:** sin inversión inicial grande, escalable, actualizaciones automáticas.  
- **Desventajas:** costo recurrente a largo plazo, dependencia de internet, privacidad de datos en la nube.

### Modelo On‑Premise (instalación local)

- El software se instala en servidores propiedad del cliente (dentro de su empresa).  
- El cliente es responsable del hardware, sistema operativo, red, copias de seguridad y actualizaciones.  
- **Costos típicos:**  
  - Licencia perpetua (pago único por el software).  
  - Servidores (hardware, almacenamiento, respaldo).  
  - Instalación y configuración (servicios profesionales).  
  - Mantenimiento anual (opcional, a veces se contrata aparte).  
  - Capacitación del personal de TI.  
- **Ventajas:** control total de los datos, no depende de internet, puede ser más económico a muy largo plazo.  
- **Desventajas:** inversión inicial alta, requiere personal técnico, actualizaciones manuales.

### En el perfil del proyecto (según docente)

- Se debe elaborar una **tabla de gastos e inversiones** para el cliente.  
- Se presentan **dos presupuestos** (SaaS y on‑premise) con cifras estimadas (pueden ser valores de referencia realistas).  
- Para SaaS, incluir costo mensual y costo anual (primer año y años siguientes).  
- Para on‑premise, desglosar: licencias, hardware, instalación, mantenimiento anual.  
- Se pueden usar datos de proveedores reales (ej. precios de servicios cloud como AWS, Azure, o de software similar en el mercado).

## 🔗 Se conecta con

%%
Links a otras notas atómicas relacionadas.
Esto es lo que convierte tus notas en una red (Zettelkasten) en vez de una lista.

Agregá todos los conceptos que se relacionen con este.
%%

- [[estructura-perfil-proyecto]]
- [[stack-tecnologico-sistemas-informacion]]
- [[modelos-de-suscripcion]]
- [[cloud-computing]]
- [[tco-total-cost-ownership]]

## 🌍 Ejemplo concreto

%%
Un caso real (puede ser codigo) sobre el concepto. Los ejemplos concretos son lo que hace que el concepto "enganche" en la memoria.
%%

**Caso: Proyecto de gestión documental para TransRápida SRL (10 usuarios)**

**Presupuesto SaaS (suscripción mensual):**

| Concepto | Costo mensual | Costo anual (año 1) |
|----------|---------------|---------------------|
| Suscripción base (hasta 10 usuarios) | $50 | $600 |
| Módulo de OCR (procesamiento de imágenes) | $20 | $240 |
| Almacenamiento adicional (50 GB) | $10 | $120 |
| Soporte técnico (24/7) | $30 | $360 |
| **Total** | **$110** | **$1.320** |

**Presupuesto On‑Premise (instalación local):**

| Concepto | Costo único | Mantenimiento anual |
|----------|-------------|---------------------|
| Licencia perpetua del software (10 usuarios) | $2.000 | - |
| Servidor (hardware + SO) | $1.500 | $300 (extensión garantía) |
| Instalación y configuración (servicio técnico) | $800 | - |
| Capacitación de administradores | $400 | - |
| Mantenimiento del software (actualizaciones + soporte) | - | $500 |
| **Total** | **$4.700** | **$800/año** |

**Comparación para el cliente:**

| Horizonte | SaaS | On‑Premise |
|-----------|------|-------------|
| **Año 1** | $1.320 | $4.700 + $800 = $5.500 |
| **Año 2** | +$1.320 | +$800 |
| **Año 3** | +$1.320 | +$800 |
| **Total 3 años** | $3.960 | $7.100 |

**Conclusión:** Para menos de 3 años, SaaS es más barato. Para más de 5 años, on‑premise podría ser mejor si la empresa ya tiene servidores y personal técnico.

## ⚠️ Errores comunes

%%
¿Qué confunde a la gente con este concepto?
¿Con qué otro concepto se suele mezclar?
¿Qué pensabas vos antes de entenderlo bien?
%%

- **Presentar solo un presupuesto:** El docente exige explícitamente **dos presupuestos** (SaaS y on‑premise). Olvidar uno es un error grave.
- **No desglosar los costos:** Poner un solo número sin explicar de qué se compone (ej. "On‑premise: $5000") no sirve. Hay que mostrar licencia, hardware, instalación, etc.
- **Confundir SaaS con "gratis" o "muy barato":** Algunos estudiantes ponen SaaS como $0 porque creen que el software es gratis. Hay que estimar valores realistas del mercado.
- **Ignorar los costos ocultos del on‑premise:** Muchos olvidan el mantenimiento anual, la electricidad, el aire acondicionado, el tiempo del personal de TI. El costo total de propiedad (TCO) suele ser más alto de lo que parece.

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
¿Qué se debe presentar en la sección de costos del perfil del proyecto?
Back: Dos presupuestos: uno para el modelo SaaS (suscripción) y otro para el modelo on‑premise (instalación local), con desglose de gastos.
Tags: sistemas-informacion-2 concepto
END

START
Básico
¿Cuál es la diferencia principal entre SaaS y on‑premise?
Back: SaaS paga suscripción mensual/anual, el software está en la nube. On‑premise paga licencia perpetua + hardware, el software se instala en servidores del cliente.
Tags: sistemas-informacion-2 concepto diferencia
END

START
Básico
Menciona dos ventajas de SaaS y dos de on‑premise.
Back: SaaS: sin inversión inicial, actualizaciones automáticas. On‑premise: control total de datos, puede ser más económico a largo plazo.
Tags: sistemas-informacion-2 concepto
END

START
Básico
¿Qué costos se deben incluir en un presupuesto on‑premise?
Back: Licencia perpetua, servidores (hardware), instalación y configuración, mantenimiento anual (opcional), capacitación, y a veces garantía extendida.
Tags: sistemas-informacion-2 concepto
END