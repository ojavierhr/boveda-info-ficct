---
tipo: concepto
materia: sistemas-informacion-2
semestre: 7
fecha-creacion: 2026-04-06
dificultad: 🟢 baja
estado: 🔵 borrador
tags:
  - concepto
---
%% ↑↑ Slug de la materia. Se obtiene automáticamente de la carpeta.
   No borrar ni renombrar estos campos.
   Dificultad: 🟢 baja | 🟡 media | 🔴 alta
   Estado: 🔵 borrador → 🟢 revisada cuando esté completa %%

%% ============================================================
PLANTILLA: NOTA ATÓMICA DE CONCEPTO (Zettelkasten + Feynman)

CUÁNDO USARLA: Cada vez que procesás una clase y encontrás un concepto que merece su propio archivo.
DÓNDE GUARDARLA: 01_Notes/Concepts/[slug-materia]/

NOMBRE DE ARCHIVO RECOMENDADO:
  nombre-del-concepto (en minúsculas con guiones)
  ej: mrp-material-requirements-planning

REGLA FUNDAMENTAL:
  UNA nota = UNA sola idea. Si la nota toca dos conceptos → partila en dos notas separadas.

FLUJO DE USO (Método Feynman):
  1. Definición simple → como si se lo explicaras a alguien que no sabe nada
  2. Explicación técnica → la versión precisa y completa
  3. Ejemplo concreto → preferiblemente del parcial o proyecto actual
  4. Errores comunes → qué confunde a la gente con este concepto
  5. Flashcards → completar los bloques START/END y sincronizar con Anki
============================================================ %%

# Gestión documental

## 📖 Definición simple
%% Explicalo como si el que lo va a leer nunca oyó hablar del tema.
   Sin tecnicismos. Sin siglas sin explicar. Una o dos oraciones máximo.
   Si no podés hacerlo simple, todavía no lo entendiste del todo (Feynman dixit). %%
Sistema o conjunto de procesos que permiten **almacenar, organizar, buscar y controlar** documentos electrónicos (facturas, contratos, informes) de forma centralizada y segura, eliminando el papeleo físico y facilitando el acceso rápido.

## 🧩 Explicación técnica
%% Ahora sí la versión completa: términos técnicos, fórmulas, estructura, etc.
   Podés usar tablas, listas, diagramas ASCII o bloques de código. %%
La gestión documental abarca todo el ciclo de vida de un documento: captura (digitalización o creación), indexación (metadatos), almacenamiento (repositorio), recuperación (búsqueda por palabras clave), versionado, control de acceso (roles/permisos), flujos de trabajo (aprobaciones, firmas) y disposición final (archivo o eliminación). Se basa en estándares como ISO 15489. Los sistemas modernos (Alfresco, DocuWare, OpenKM) integran OCR para extraer texto de imágenes y automatizar la clasificación.

## 🔗 Se conecta con
%% Links a otras notas atómicas relacionadas.
   Esto es lo que convierte tus notas en una red (Zettelkasten) en vez de una lista.
   Agregá todos los conceptos que se relacionen con este. %%
- [[sistemas-informacion-empresarial]]
- [[flujos-trabajo-workflow]]
- [[digitalizacion-documentos]]

## 🌍 Ejemplo concreto
%% Un caso real, de código o del proyecto/parcial que estés haciendo.
   Los ejemplos concretos son lo que hace que el concepto "enganche" en la memoria. %%
Una empresa de auditoría recibe cientos de facturas al mes. Con un sistema de gestión documental:
- Escanea cada factura (captura).
- El OCR extrae número, fecha, proveedor y monto.
- Se indexa automáticamente y se guarda en la carpeta del cliente.
- Los auditores buscan “factura proveedor X 2025” y la encuentran en segundos.
- Los documentos tienen control de versiones y solo el equipo de finanzas puede editarlos.

## ⚠️ Errores comunes
%% ¿Qué confunde a la gente con este concepto?
   ¿Con qué otro concepto se suele mezclar?
   ¿Qué pensabas vos antes de entenderlo bien? %%
- **Confundir gestión documental con simple almacenamiento en carpetas**: La gestión documental incluye metadatos, búsqueda avanzada, flujos de trabajo y seguridad, no solo guardar archivos.
- **Pensar que es solo para grandes empresas**: Pequeñas y medianas empresas también se benefician (facturación electrónica obligatoria, organización de contratos).
- **Ignorar la normativa de conservación**: No todos los documentos se guardan para siempre; hay plazos legales de retención.

---

## 🃏 Flashcards → Anki

%% Cada bloque START/END = una tarjeta en Anki.
   Regla: al menos 2 tarjetas por concepto.
     - Una para la definición
     - Una para un ejemplo o diferencia con otro concepto
   Sincronizar: Anki abierto → Ctrl+P → "Obsidian to Anki: Sync" %%
START
Básico
¿Qué es la gestión documental?
Back: Conjunto de procesos para almacenar, organizar, buscar y controlar documentos electrónicos de forma centralizada y segura.
Tags: sistemas-informacion-2 concepto
END

START
Básico
¿Qué etapas cubre el ciclo de vida de un documento en un sistema de gestión documental?
Back: Captura, indexación, almacenamiento, recuperación, versionado, control de acceso, flujos de trabajo y disposición final.
Tags: sistemas-informacion-2 concepto
END