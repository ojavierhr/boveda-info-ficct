---
tipo: concepto
materia: sistemas-informacion-2
semestre: 7
fecha-creacion: 2026-04-07
dificultad: 🟢 baja
estado: 🔵 borrador
tags: [concepto, desarrollo-web, frontend]

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

# Desarrollo web - características principales

## 📖 Definición simple

%%
Explicalo como si el que lo va a leer nunca oyó hablar del tema.

- Sin tecnicismos.
- Sin siglas sin explicar.
- Una o dos oraciones máximo.
- Si no podés hacerlo simple, todavía no lo entendiste del todo (Feynman dixit).
%%

El desarrollo web es el proceso de crear aplicaciones y sitios que se ejecutan en un navegador (Chrome, Firefox, Edge). Sus características principales incluyen la **eficiencia** (que cargue rápido), la **facilidad de uso** (que sea intuitivo), la **seguridad** (proteger datos) y una **arquitectura típica** como cliente-servidor o SPA (Single Page Application, donde la página no se recarga por completo en cada clic).

## 🧩 Explicación técnica

%%
Ahora sí la versión completa con términos técnicos, fórmulas, estructura, etc. Podés usar tablas:

- Listas
- Diagramas
- Bloques de código
- Tablas
- Imagenes
%%

El **desarrollo web** abarca la creación de aplicaciones accesibles mediante un navegador web. En el contexto del sistema de auxilio mecánico, se utiliza para la aplicación del **taller** y el **administrador** (Angular). A continuación se describen las características que el docente pide incluir en el fundamento teórico.

### Características clave

| Característica | Descripción | Ejemplo en el proyecto |
|----------------|-------------|------------------------|
| **Eficiencia** | Tiempos de carga rápidos, consumo óptimo de recursos (red, CPU). | La web del taller debe cargar la lista de emergencias en menos de 2 segundos. |
| **Facilidad de uso (usabilidad)** | Interfaz intuitiva, curva de aprendizaje baja. | El taller acepta/rechaza emergencias con un solo clic. |
| **Vulnerabilidades de seguridad** | Protección contra ataques comunes (XSS, CSRF, inyección SQL). | Angular escapa automáticamente el contenido, y el backend valida datos. |
| **Arquitectura cliente-servidor** | El navegador (cliente) solicita recursos al servidor, que procesa y responde. | Angular (cliente) consume API REST de FastAPI (servidor). |
| **Arquitectura SPA (Single Page Application)** | La página no se recarga completamente; se actualiza dinámicamente con JavaScript. | Angular es un framework SPA por defecto: la navegación entre pantallas es instantánea. |

### Otras características importantes (para el fundamento)

- **Responsive design:** La web debe adaptarse a diferentes tamaños de pantalla (PC, tablet, móvil).
- **Accesibilidad:** Cumplir con estándares (WCAG) para personas con discapacidades.
- **SEO (opcional):** Posicionamiento en buscadores (no crítico para una aplicación de taller, pero se puede mencionar).
- **Compatibilidad entre navegadores:** Funcionar correctamente en Chrome, Firefox, Edge (y Safari si aplica).

### Arquitectura típica en el proyecto

```
[Angular SPA] → [FastAPI REST API] → [PostgreSQL]  
↑ ↑  
└── HTTPS ──────┘
```


- **Cliente (Angular):** Se ejecuta en el navegador del taller.
- **Servidor (FastAPI):** Se ejecuta en la nube (Compute Engine/Cloud Run).
- **Comunicación:** Peticiones HTTP/HTTPS con formato JSON.

## 🔗 Se conecta con

%%
Links a otras notas atómicas relacionadas.
Esto es lo que convierte tus notas en una red (Zettelkasten) en vez de una lista.

Agregá todos los conceptos que se relacionen con este.
%%

- [[stack-flutter-angular-fastapi]]
- [[seguridad-roles-jwt]]
- [[despliegue-google-cloud]]
- [[arquitectura-cliente-servidor]]
- [[spa-single-page-application]]

## 🌍 Ejemplo concreto

%%
Un caso real (puede ser codigo) sobre el concepto. Los ejemplos concretos son lo que hace que el concepto "enganche" en la memoria.
%%

**Caso: Aplicación web del taller en el sistema de auxilio mecánico**

- **Eficiencia:** La lista de emergencias asignadas se carga con paginación (10 por página). Se usa un índice en la base de datos para acelerar las consultas.
- **Usabilidad:** El taller ve un panel con tarjetas de emergencia; cada tarjeta tiene botones "Aceptar" y "Rechazar". No hay opciones confusas.
- **Seguridad:** Angular sanitiza las variables para evitar XSS. El backend valida que el taller solo vea emergencias de su zona.
- **Arquitectura SPA:** Cuando el taller hace clic en "Ver detalles", la vista cambia sin recargar la página. El navegador solicita los datos del incidente vía API y los muestra.
- **Responsive:** El gerente del taller puede usar la web desde su celular (aunque la app principal es Flutter, la web también se adapta).

## ⚠️ Errores comunes

%%
¿Qué confunde a la gente con este concepto?
¿Con qué otro concepto se suele mezclar?
¿Qué pensabas vos antes de entenderlo bien?
%%

- **Confundir SPA con arquitectura cliente-servidor tradicional:** En una SPA, el servidor solo envía datos (JSON), no páginas HTML completas. La primera carga es pesada, luego es muy rápida.
- **Pensar que la seguridad solo depende del frontend:** El frontend (Angular) puede aplicar controles visuales, pero la verdadera seguridad debe estar en el backend (validación de roles, tokens).
- **Ignorar la eficiencia en el frontend:** Aunque el backend sea rápido, un frontend mal optimizado (imágenes pesadas, código no minificado) puede arruinar la experiencia.
- **No considerar la accesibilidad:** Puede ser un requisito legal o de calidad. Usar etiquetas semánticas HTML y atributos `alt` en imágenes.

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
¿Cuáles son las características principales del desarrollo web que se deben incluir en el fundamento teórico del parcial?
Back: Eficiencia, facilidad de uso (usabilidad), vulnerabilidades de seguridad, arquitectura cliente-servidor y SPA (Single Page Application).
Tags: sistemas-informacion-2 concepto desarrollo-web
END

START
Básico
¿Qué diferencia una SPA de una aplicación web tradicional?
Back: En una SPA, la página no se recarga completamente; solo se actualiza la parte necesaria mediante JavaScript y se intercambian datos en JSON con el servidor.
Tags: sistemas-informacion-2 concepto desarrollo-web
END

START
Básico
¿Por qué la seguridad no puede delegarse solo al frontend (Angular)?
Back: Porque el frontend es visible y modificable por el usuario. El backend debe validar siempre los permisos y datos para evitar ataques.
Tags: sistemas-informacion-2 concepto desarrollo-web
END

START
Básico
Menciona una medida para mejorar la eficiencia de una aplicación web.
Back: Usar paginación en listados, comprimir imágenes, minificar código CSS/JS, implementar caché, o usar índices en la base de datos.
Tags: sistemas-informacion-2 concepto desarrollo-web ejemplo
END