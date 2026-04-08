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

# Open Source vs Software Comercial

## 📖 Definición simple

%%
Explicalo como si el que lo va a leer nunca oyó hablar del tema.

- Sin tecnicismos.
- Sin siglas sin explicar.
- Una o dos oraciones máximo.
- Si no podés hacerlo simple, todavía no lo entendiste del todo (Feynman dixit).
%%

**Software open source:** programas cuyo código fuente es público. Cualquiera puede usarlos, estudiarlos, modificarlos y compartirlos (generalmente gratis).  
**Software comercial:** programas que se venden con una licencia que restringe el acceso al código fuente y su modificación. Se paga por su uso (a veces hay versiones de prueba o freemium).

## 🧩 Explicación técnica

%%
Ahora sí la versión completa con términos técnicos, fórmulas, estructura, etc. Podés usar tablas:

- Listas
- Diagramas
- Bloques de código
- Tablas
- Imagenes
%%

### Open Source (Código abierto)

Definido por la **Open Source Initiative (OSI)** con 10 criterios, entre ellos:
- Libre redistribución.
- Código fuente disponible.
- Permitir modificaciones y trabajos derivados.
- No discriminar personas, grupos o campos de uso.

**Licencias open source comunes:**
- **GPL (General Public License):** Las modificaciones también deben ser open source (copyleft fuerte).
- **MIT / BSD:** Permiten incorporar el código en software comercial sin liberar los cambios (permisivas).
- **Apache 2.0:** Similar a MIT, pero con patentes explícitas.

**Ventajas:** costo cero (o bajo), transparencia, personalización ilimitada, comunidad de soporte.  
**Desventajas:** puede faltar soporte profesional, curva de aprendizaje, integración a veces compleja.

### Software Comercial (Propietario)

El código fuente no se distribuye; se entregan binarios (ejecutables) bajo una licencia de uso que restringe copia, modificación e ingeniería inversa.

**Modelos de negocio típicos:**
- **Licencia perpetua:** Se paga una vez y se usa para siempre (ej. versiones antiguas de Microsoft Office).
- **Suscripción (SaaS):** Pago mensual/anual, incluye actualizaciones y soporte (ej. Salesforce, Adobe Creative Cloud).
- **Freemium:** Versión básica gratis, funciones avanzadas de pago (ej. Dropbox, Spotify).
- **Prueba gratuita (trial):** Uso limitado en tiempo para evaluar.

**Ventajas:** soporte técnico dedicado, integración lista para usar, experiencia de usuario pulida, actualizaciones automáticas.  
**Desventajas:** costo (a veces elevado), dependencia del proveedor (vendor lock-in), falta de control sobre el código.

### Comparativa directa

| Aspecto | Open Source | Comercial |
|---------|-------------|-----------|
| **Costo** | Cero (gratis) o costo de soporte | Licencia, suscripción o freemium |
| **Código fuente** | Disponible | Oculto (binarios) |
| **Modificación** | Permitida (bajo licencia) | Prohibida |
| **Soporte** | Comunidad (foros, wikis) | Contrato con el proveedor |
| **Actualizaciones** | Dependen de la comunidad | Planificadas por el vendedor |
| **Seguridad** | Auditoría pública posible | Confianza en el proveedor |
| **Curva de aprendizaje** | Variable (puede ser empinada) | Generalmente más amigable |

## 🔗 Se conecta con

%%
Links a otras notas atómicas relacionadas.
Esto es lo que convierte tus notas en una red (Zettelkasten) en vez de una lista.

Agregá todos los conceptos que se relacionen con este.
%%

- [[sistemas-gestion-empresarial]]
- [[licencias-de-software]]
- [[codigo-abierto]]
- [[software-propietario]]
- [[casos-de-estudio-empresas]] (porque en las exposiciones se pide un ejemplo de cada tipo)

## 🌍 Ejemplo concreto

%%
Un caso real (puede ser codigo) sobre el concepto. Los ejemplos concretos son lo que hace que el concepto "enganche" en la memoria.
%%

**Caso: Sistema de gestión documental (temática del Grupo 5)**

Para la exposición, el grupo debe investigar tres aplicaciones del mismo tipo (gestión documental) con al menos una open source y una comercial.

| Tipo | Nombre | Características |
|------|--------|-----------------|
| **Open Source** | **OpenKM** (Community Edition) | Código disponible en GitHub, permite indexación, OCR, flujos de trabajo. Soporte comunitario. |
| **Comercial** | **DocuWare** | Licencia por suscripción, soporte 24/7, integración con ERP, nube o on-premise. |
| **Comercial alternativo** | **Alfresco** (versión Enterprise) | Ofrece funcionalidades avanzadas de gobernanza, pero la versión Community es open source. |

**Decisión empresarial:** Una pyme con presupuesto ajustado y personal técnico podría elegir OpenKM Community y adaptarlo. Una empresa grande que no puede arriesgarse a fallas y necesita soporte garantizado elegirá DocuWare o Alfresco Enterprise.

## ⚠️ Errores comunes

%%
¿Qué confunde a la gente con este concepto?
¿Con qué otro concepto se suele mezclar?
¿Qué pensabas vos antes de entenderlo bien?
%%

- **Creer que "open source" significa "gratis siempre":** Muchos productos open source tienen versiones comerciales de pago (ej. Alfresco Community vs Enterprise). La libertad de uso no implica costo cero en todos los casos (puede haber servicios de pago).

- **Pensar que el software comercial es siempre mejor o más seguro:** Hay open source de altísima calidad (Linux, PostgreSQL, VLC) y software comercial con vulnerabilidades. La seguridad depende más del mantenimiento que del modelo.

- **Confundir "freeware" con "open source":** Freeware es gratis pero no da acceso al código (ej. Skype versión antigua). Open source da acceso al código, aunque a veces también es gratis.

- **Ignorar el costo total de propiedad (TCO):** El open source puede ahorrar en licencias, pero puede requerir más horas de configuración, capacitación o integración. El comercial a veces incluye soporte que reduce esos costos ocultos.

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
¿Qué diferencia al software open source del software comercial?
Back: El open source tiene código fuente disponible y permite modificarlo; el comercial oculta el código y no permite modificaciones (generalmente se paga por su uso).
Tags: sistemas-informacion-2 concepto
END

START
Básico
Menciona dos ventajas del open source y dos del software comercial.
Back: Open source: costo cero y libertad de modificación. Comercial: soporte técnico y experiencia de usuario pulida. (Otras válidas)
Tags: sistemas-informacion-2 concepto
END

START
Básico
¿Qué significa "vendor lock-in" en software comercial?
Back: Dependencia del proveedor, donde cambiarse a otro sistema es muy costoso o difícil porque los datos o procesos están atados a herramientas específicas.
Tags: sistemas-informacion-2 concepto
END

START
Básico
Pon un ejemplo concreto de open source y uno comercial para gestión documental.
Back: Open source: OpenKM Community Edition. Comercial: DocuWare o Alfresco Enterprise.
Tags: sistemas-informacion-2 concepto ejemplo
END