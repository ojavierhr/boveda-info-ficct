---
tipo: concepto
materia: sistemas-informacion-2
semestre: 7
fecha-creacion: 2026-04-07
dificultad: 🟢 baja
estado: 🔵 borrador
tags: [concepto, documentacion, guias, parcial1]

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

# Guías de uso del software (manuales y tutoriales)

## 📖 Definición simple

%%
Explicalo como si el que lo va a leer nunca oyó hablar del tema.

- Sin tecnicismos.
- Sin siglas sin explicar.
- Una o dos oraciones máximo.
- Si no podés hacerlo simple, todavía no lo entendiste del todo (Feynman dixit).
%%

Las guías de uso son documentos (escritos, en video, o interactivos) que **enseñan a los usuarios a manejar el sistema**. Explican paso a paso cómo hacer las tareas principales: reportar una emergencia (cliente), aceptar un servicio (taller), ver reportes (administrador). Son esenciales para que el cliente pueda usar la plataforma sin necesidad de entrenamiento previo. En el documento del parcial, forman la tercera parte.

## 🧩 Explicación técnica

%%
Ahora sí la versión completa con términos técnicos, fórmulas, estructura, etc. Podés usar tablas:

- Listas
- Diagramas
- Bloques de código
- Tablas
- Imagenes
%%

Las **guías de uso** (también llamadas manuales de usuario o documentación funcional) son materiales que acompañan al software para facilitar su adopción y reducir la curva de aprendizaje. En el contexto del parcial 1, deben entregarse como parte de la documentación del proyecto.

### Tipos de guías de uso

| Tipo | Formato | Cuándo usarlo |
|------|---------|----------------|
| **Manual de usuario escrito** | Documento PDF, HTML o Markdown. Incluye capturas de pantalla, pasos numerados, advertencias. | Para usuarios que prefieren leer y tener una referencia impresa o descargable. |
| **Tutorial interactivo** | Guía paso a paso integrada en la aplicación (tooltips, recorridos guiados). | Para enseñar mientras el usuario usa el sistema por primera vez. |
| **Videotutorial** | Grabación de pantalla con explicación de voz. Subido a YouTube o alojado en la nube. | Para usuarios que aprenden mejor viendo. Útil para flujos complejos. |
| **Preguntas frecuentes (FAQ)** | Lista de problemas comunes y soluciones. | Para resolver dudas rápidas sin leer un manual completo. |

### Contenido mínimo de un manual de usuario (para el parcial)

- **Introducción:** Qué hace el sistema, a quién va dirigido.
- **Requisitos técnicos:** Navegador, dispositivo, conexión a internet.
- **Primeros pasos:** Cómo registrarse e iniciar sesión.
- **Tareas principales (cliente):** Reportar emergencia, subir fotos/audio, pagar, calificar.
- **Tareas principales (taller):** Ver emergencias asignadas, aceptar/rechazar, actualizar estado, calificar cliente.
- **Tareas principales (administrador):** Ver reportes, gestionar talleres.
- **Solución de problemas:** Qué hacer si no carga la app, si el pago falla, etc.
- **Soporte y contacto:** Correo o teléfono de ayuda.

### Herramientas para crear guías

- **Escritas:** Google Docs, Microsoft Word, Markdown + MkDocs, Sphinx, Confluence.
- **Capturas de pantalla:** Lightshot, Snagit, Greenshot.
- **Videos:** OBS Studio (grabación gratuita), Loom, Camtasia.
- **Tutoriales interactivos:** Intro.js, Shepherd.js, WalkHub.

### Entrega en el parcial

- El docente exige **guías de uso** como parte del documento (tercera sección).
- Pueden ser escritas (PDF) o en video (enlace). Se recomienda al menos un manual escrito con capturas.
- Deben cubrir tanto la **app móvil (Flutter)** como la **web (Angular)**.

## 🔗 Se conecta con

%%
Links a otras notas atómicas relacionadas.
Esto es lo que convierte tus notas en una red (Zettelkasten) en vez de una lista.

Agregá todos los conceptos que se relacionen con este.
%%

- [[documentacion-tecnica-funcional]]
- [[sistema-auxilio-mecanico-flujo]]
- [[stack-flutter-angular-fastapi]]
- [[actores-sistema-informacion]]

## 🌍 Ejemplo concreto

%%
Un caso real (puede ser codigo) sobre el concepto. Los ejemplos concretos son lo que hace que el concepto "enganche" en la memoria.
%%

**Caso: Manual de usuario para el taller (web Angular)**

**Estructura del manual (índice):**
1. Acceso al sistema (URL, login, recuperar contraseña).
2. Panel principal: cómo ver emergencias asignadas.
3. Aceptar una emergencia (pasos: clic en "Aceptar" → confirmar → ver tiempo estimado).
4. Rechazar una emergencia (clic en "Rechazar" → seleccionar motivo).
5. Actualizar estado del servicio (en camino, completado).
6. Calificar al cliente después del servicio.
7. Ver reportes de ingresos propios (filtros por fecha).
8. Preguntas frecuentes: ¿qué pasa si no hay internet? ¿cómo editar mi perfil?

**Capturas de pantalla:** Cada paso incluye una imagen de la interfaz real con flechas y anotaciones.

**Formato de entrega:** PDF de 10-15 páginas. Además, se puede grabar un videotutorial de 5 minutos mostrando el flujo completo.

## ⚠️ Errores comunes

%%
¿Qué confunde a la gente con este concepto?
¿Con qué otro concepto se suele mezclar?
¿Qué pensabas vos antes de entenderlo bien?
%%

- **Creer que la guía de uso es solo para el usuario final:** También puede haber guías para administradores y para el equipo de soporte técnico.
- **Hacer un manual demasiado técnico:** Incluir detalles de código, bases de datos, etc. Eso va en la documentación técnica, no en la guía de uso.
- **No actualizar las capturas de pantalla después de cambios en la interfaz:** Si el diseño cambia, las capturas quedan obsoletas y confunden al usuario.
- **Entregar solo un video sin texto:** El docente pide guías en el documento. El video puede ser un complemento, pero no debe reemplazar al manual escrito (al menos una versión escrita es esperable).
- **Ignorar la guía de la app móvil:** A veces solo se documenta la web. Ambas deben tener su sección.

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
¿Qué son las guías de uso del software?
Back: Documentos o materiales (escritos, videos, tutoriales interactivos) que enseñan a los usuarios a utilizar el sistema, explicando paso a paso las tareas principales.
Tags: sistemas-informacion-2 concepto documentacion
END

START
Básico
Menciona tres tipos de guías de uso.
Back: Manual de usuario escrito, videotutorial, tutorial interactivo (tooltips), preguntas frecuentes (FAQ).
Tags: sistemas-informacion-2 concepto documentacion
END

START
Básico
¿Qué secciones debe incluir al menos un manual de usuario?
Back: Introducción, requisitos técnicos, primeros pasos (login/registro), tareas principales por rol, solución de problemas, soporte.
Tags: sistemas-informacion-2 concepto documentacion
END

START
Básico
¿Por qué es importante incluir capturas de pantalla en el manual de usuario?
Back: Para que el usuario visualice cada paso y sepa exactamente qué esperar en la interfaz, reduciendo confusiones.
Tags: sistemas-informacion-2 concepto documentacion ejemplo
END