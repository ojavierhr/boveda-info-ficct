---
tipo: concepto
materia: sistemas-informacion-2
semestre: 7
fecha-creacion: 2026-04-07
dificultad: 🟢 baja
estado: 🔵 borrador
tags: [concepto, despliegue, nube, parcial1]

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

# Despliegue de aplicaciones en la nube

## 📖 Definición simple

%%
Explicalo como si el que lo va a leer nunca oyó hablar del tema.

- Sin tecnicismos.
- Sin siglas sin explicar.
- Una o dos oraciones máximo.
- Si no podés hacerlo simple, todavía no lo entendiste del todo (Feynman dixit).
%%

Desplegar una aplicación en la nube significa **subirla a servidores que no son propios**, sino que se alquilan a empresas como Google, Amazon o Microsoft. Así la aplicación está disponible 24/7 desde cualquier lugar con internet, sin que tengas que comprar ni mantener el hardware. El pago es por uso: solo se gasta por lo que se consume (procesador, memoria, almacenamiento). En el sistema de auxilio mecánico, el backend y la base de datos se despliegan en la nube.

## 🧩 Explicación técnica

%%
Ahora sí la versión completa con términos técnicos, fórmulas, estructura, etc. Podés usar tablas:

- Listas
- Diagramas
- Bloques de código
- Tablas
- Imagenes
%%

El **despliegue en la nube** se refiere al alojamiento de aplicaciones en infraestructura gestionada por proveedores externos (Cloud Providers). Ofrece escalabilidad, alta disponibilidad y pago por consumo, eliminando la necesidad de invertir en hardware físico.

### Modelos de servicio en la nube

| Modelo | Descripción | Ejemplo en el parcial |
|--------|-------------|------------------------|
| **IaaS** (Infraestructura como Servicio) | Máquinas virtuales, almacenamiento, redes bajo demanda. | Compute Engine (Google) para el backend FastAPI. |
| **PaaS** (Plataforma como Servicio) | Entorno para desplegar aplicaciones sin gestionar el sistema operativo. | Cloud Run (Google) para FastAPI sin administrar servidores. |
| **SaaS** (Software como Servicio) | Software listo para usar, alojado por el proveedor. | No aplica directamente (el sistema es propio). |

### Proveedores y servicios típicos

| Proveedor | Servicios equivalentes |
|-----------|------------------------|
| **AWS** | EC2 (máquinas virtuales), RDS (BD), S3 (almacenamiento estático) |
| **Google Cloud** | Compute Engine, Cloud SQL, Cloud Storage, Cloud Run |
| **Microsoft Azure** | Virtual Machines, SQL Database, Blob Storage |

### Estructura de precios (para el fundamento teórico)

- **Pago por uso:** Se cobra por recursos consumidos (horas de CPU, GB de almacenamiento, GB de transferencia de datos).
- **Instancias reservadas:** Se paga por adelantado por 1 o 3 años, descuento de hasta 70% sobre el precio bajo demanda.
- **Niveles gratuitos:** Cada proveedor ofrece cuotas gratuitas limitadas (ej. Google Cloud: 1 instancia f1-micro gratis, 5 GB Cloud Storage).
- **Transferencia de datos:** Generalmente, el tráfico entrante es gratuito, el saliente tiene costo (especialmente entre regiones).

### Justificación del despliegue en la nube para el parcial

- **Accesibilidad:** El taller y el administrador acceden desde cualquier navegador.
- **Escalabilidad:** Si aumenta la demanda, se puede aumentar la capacidad sin cambiar hardware.
- **Respaldo automático:** Los servicios gestionados (Cloud SQL) realizan backups automáticos.
- **Reducción de costos iniciales:** No se necesita comprar servidor físico, solo pagar lo que se usa (incluso se puede usar capa gratuita para la demo).

## 🔗 Se conecta con

%%
Links a otras notas atómicas relacionadas.
Esto es lo que convierte tus notas en una red (Zettelkasten) en vez de una lista.

Agregá todos los conceptos que se relacionen con este.
%%

- [[stack-flutter-angular-fastapi]]
- [[despliegue-google-cloud]]
- [[ia-modelos-supervisados-no-supervisados]]
- [[costos-saas-onpremise]]

## 🌍 Ejemplo concreto

%%
Un caso real (puede ser codigo) sobre el concepto. Los ejemplos concretos son lo que hace que el concepto "enganche" en la memoria.
%%

**Caso: Despliegue del sistema de auxilio mecánico en Google Cloud**

- **Backend FastAPI:** Se despliega en **Cloud Run** (PaaS). Cada vez que hay una petición, se ejecuta un contenedor y se cobra por millón de solicitudes y tiempo de CPU. En la capa gratuita (2 millones de solicitudes/mes) no se paga.
- **Base de datos PostgreSQL:** Se usa **Cloud SQL** con la instancia más pequeña (micro). Cuesta ~$10/mes, pero se puede apagar fuera del horario de pruebas.
- **Aplicación web Angular:** Se aloja en **Cloud Storage** como sitio estático. El costo es por almacenamiento (primeros 5 GB gratis) y transferencia de datos (primeros 1 GB/mes gratis).
- **Evidencias (fotos, audios):** Se guardan en **Cloud Storage** en un bucket con política de borrado después de 30 días.
- **Costo estimado para la demo:** Casi cero si se usan bien los niveles gratuitos y se apagan las instancias cuando no se usan.

**Estructura de precios (ejemplo de Google Cloud):**

| Recurso | Precio aprox. |
|---------|----------------|
| Cloud Run (2M solicitudes/mes) | $0 (gratuito) |
| Cloud SQL (micro, 1GB RAM) | $10/mes (o $0 si se usa una instancia efímera) |
| Cloud Storage (5GB) | $0 (gratuito) |
| Transferencia de datos (1GB saliente) | $0 (gratuito) |

## ⚠️ Errores comunes

%%
¿Qué confunde a la gente con este concepto?
¿Con qué otro concepto se suele mezclar?
¿Qué pensabas vos antes de entenderlo bien?
%%

- **Creer que la nube es siempre más cara que un servidor físico:** Para aplicaciones pequeñas o con tráfico variable, la nube es más económica porque no se pagan recursos ociosos. A muy largo plazo y alta carga, un servidor propio puede ser más barato.
- **Olvidar los costos de transferencia de datos salientes:** Muchos proveedores cobran el tráfico que sale de la nube hacia internet. Es un costo oculto frecuente.
- **No aprovechar la capa gratuita:** En la demo se puede usar sin pagar (ej. Cloud Run gratis hasta 2M solicitudes/mes).
- **Confundir región geográfica:** Desplegar en una región lejana aumenta la latencia. Para Bolivia, lo mejor es `us-central1` (Iowa) o `us-east1` (Carolina del Sur), aunque ninguna está en Sudamérica. `southamerica-east1` (São Paulo) tiene menor latencia pero costos ligeramente superiores.

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
¿Qué significa desplegar una aplicación en la nube?
Back: Alojar la aplicación en servidores gestionados por un proveedor externo (Google, AWS, Azure), pagando solo por los recursos consumidos, sin invertir en hardware propio.
Tags: sistemas-informacion-2 concepto despliegue
END

START
Básico
¿Cuáles son tres modelos de servicio en la nube?
Back: IaaS (Infraestructura), PaaS (Plataforma), SaaS (Software).
Tags: sistemas-informacion-2 concepto despliegue
END

START
Básico
¿Qué factores influyen en el costo del despliegue en la nube?
Back: Horas de CPU, almacenamiento (GB), transferencia de datos salientes, número de solicitudes (en PaaS).
Tags: sistemas-informacion-2 concepto despliegue
END

START
Básico
¿Cómo se puede reducir el costo del despliegue para la demo del parcial?
Back: Usar la capa gratuita de los proveedores, apagar instancias cuando no se usan, elegir regiones con precios más bajos, y optimizar el tamaño de los recursos.
Tags: sistemas-informacion-2 concepto despliegue ejemplo
END