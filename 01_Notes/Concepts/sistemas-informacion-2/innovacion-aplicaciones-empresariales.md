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

# Innovación en aplicaciones empresariales

## 📖 Definición simple

%%
Explicalo como si el que lo va a leer nunca oyó hablar del tema.

- Sin tecnicismos.
- Sin siglas sin explicar.
- Una o dos oraciones máximo.
- Si no podés hacerlo simple, todavía no lo entendiste del todo (Feynman dixit).
%%

Innovar en aplicaciones empresariales significa **agregar algo nuevo, útil y diferente** a un sistema de gestión (ERP, CRM, gestión documental, etc.) que lo haga más competitivo. Puede ser una funcionalidad, una forma de trabajar, o el uso de tecnología avanzada (IA, blockchain, móvil) que ninguna otra aplicación del mismo tipo tenga.

## 🧩 Explicación técnica

%%
Ahora sí la versión completa con términos técnicos, fórmulas, estructura, etc. Podés usar tablas:

- Listas
- Diagramas
- Bloques de código
- Tablas
- Imagenes
%%

La **innovación** en el contexto de sistemas de información empresarial se refiere a la introducción de una característica, proceso o tecnología que genera una ventaja competitiva significativa, mejora la eficiencia o resuelve un problema no atendido por las soluciones tradicionales.

**Tipos de innovación en aplicaciones empresariales:**

| Tipo | Descripción | Ejemplo |
|------|-------------|---------|
| **Innovación incremental** | Pequeñas mejoras sobre lo existente (más rápido, más fácil, más barato). | Añadir un chatbot a un CRM para responder consultas comunes. |
| **Innovación disruptiva** | Cambia las reglas del mercado; puede volver obsoleto lo anterior. | Software de gestión documental con IA que clasifica documentos automáticamente sin necesidad de indexación manual. |
| **Innovación tecnológica** | Usa una tecnología nueva o emergente. | Blockchain para trazabilidad de documentos en un sistema de gestión documental. |
| **Innovación en modelo de negocio** | Cambia cómo se entrega el valor o cómo se cobra. | Sistema de gestión empresarial por suscripción mensual (SaaS) en lugar de licencia perpetua. |
| **Innovación en experiencia de usuario** | Hace que el sistema sea mucho más intuitivo o accesible. | Asistente por voz para crear facturas en un punto de venta. |

**¿Por qué es importante para el proyecto de la materia?**
En la exposición, se pide **mínimo una innovación** que el grupo proponga para el tipo de sistema que le tocó (ej. gestión documental). No basta con describir lo que ya existe; hay que pensar en cómo mejorar la aplicación para ser competitivo en el mercado actual.

**Ejemplos de innovación aplicable a distintos tipos de sistemas:**
- **Gestión documental:** Clasificación automática de documentos usando IA (machine learning) que aprende del usuario.
- **MRP:** Integración con sensores IoT en almacenes para actualizar stock en tiempo real.
- **ERP (RRHH):** Predicción de rotación de personal usando algoritmos de análisis de datos.
- **CRM:** Segmentación predictiva de clientes para ofertas personalizadas antes de que compren.

## 🔗 Se conecta con

%%
Links a otras notas atómicas relacionadas.
Esto es lo que convierte tus notas en una red (Zettelkasten) en vez de una lista.

Agregá todos los conceptos que se relacionen con este.
%%

- [[sistemas-gestion-empresarial]]
- [[inteligencia-artificial-aplicada]]
- [[saas-software-como-servicio]]
- [[casos-de-estudio-empresas]]
- [[ventaja-competitiva]]

## 🌍 Ejemplo concreto

%%
Un caso real (puede ser codigo) sobre el concepto. Los ejemplos concretos son lo que hace que el concepto "enganche" en la memoria.
%%

**Innovación propuesta para el proyecto de gestión documental (Grupo 5):**

*Problema actual:* En los sistemas de gestión documental tradicionales, el usuario debe asignar manualmente categorías, palabras clave y metadatos a cada documento. Esto es tedioso y propenso a errores.

*Innovación:* **Clasificador inteligente automático usando NLP (Procesamiento de Lenguaje Natural) y aprendizaje automático.**

**Cómo funciona:**
1. El sistema analiza el contenido del documento (texto del PDF, imagen escaneada con OCR).
2. Entrena un modelo con documentos ya clasificados por el usuario (aprendizaje supervisado).
3. A partir de cierto punto, el sistema sugiere categorías, fechas y proveedores automáticamente.
4. El usuario solo confirma o corrige (feedback) para seguir mejorando el modelo.

**Ventaja competitiva:**
- Reduce el tiempo de indexación en un 70%.
- Minimiza errores humanos.
- Atrae a empresas con grandes volúmenes de documentos (logística, bancos, auditorías).

**Implementación técnica posible:**
- Librerías open source como spaCy o TensorFlow.
- Integración con el motor de OCR Tesseract.

## ⚠️ Errores comunes

%%
¿Qué confunde a la gente con este concepto?
¿Con qué otro concepto se suele mezclar?
¿Qué pensabas vos antes de entenderlo bien?
%%

- **Creer que innovación significa "inventar algo completamente nuevo desde cero":** No es necesario. Innovar puede ser aplicar una tecnología existente a un dominio nuevo, o combinar dos funcionalidades de forma novedosa.

- **Confundir innovación con "moda tecnológica":** No basta con decir "usamos blockchain" si no resuelve un problema real. La innovación debe aportar valor, no solo sonar moderno.

- **Pensar que la innovación es solo para grandes empresas:** Una pequeña mejora en usabilidad o automatización puede marcar la diferencia para una pyme.

- **Olvidar la viabilidad:** Una innovación muy cara o difícil de implementar no es útil para el proyecto de la materia. Debe ser realista (posible de desarrollar en un semestre).

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
¿Qué es innovación en aplicaciones empresariales?
Back: Agregar algo nuevo, útil y diferente a un sistema de gestión (ERP, CRM, gestión documental) que genere ventaja competitiva, mejore la eficiencia o resuelva un problema no atendido.
Tags: sistemas-informacion-2 concepto
END

START
Básico
Menciona al menos tres tipos de innovación en software empresarial.
Back: Innovación incremental, disruptiva, tecnológica, en modelo de negocio, en experiencia de usuario (cualesquiera tres).
Tags: sistemas-informacion-2 concepto
END

START
Básico
¿Por qué se pide una innovación en el proyecto de la materia?
Back: Para que el grupo no solo describa lo que ya existe, sino que proponga una mejora que haga su sistema más competitivo en el mercado actual.
Tags: sistemas-informacion-2 concepto
END

START
Básico
Pon un ejemplo concreto de innovación para un sistema de gestión documental.
Back: Clasificador inteligente automático usando NLP y machine learning que aprende de los documentos ya clasificados y sugiere categorías, reduciendo el tiempo de indexación en un 70%.
Tags: sistemas-informacion-2 concepto ejemplo
END