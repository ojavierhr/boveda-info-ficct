<%*
/*
PLANTILLA PARA NOTA DE PROYECTO (Templater + Dataview)
====
Propósito:
  Esta plantilla crea una nota para gestionar proyectos académicos.
  Permite registrar el ciclo de vida completo del proyecto: desde la
  planificación hasta la entrega final, incluyendo decisiones técnicas,
  problemas encontrados y feedback recibido.

  El frontmatter estructurado permite a Dataview:
    - Listar todos los proyectos activos en el MOC de cada materia
    - Mostrar estado y fechas de entrega en tablas dinámicas
    - Filtrar proyectos por materia, estado o integrantes

Uso:
  1. Ejecutar la plantilla (desde Templater o QuickAdd).
  2. Se solicitarán secuencialmente:
     a) Materia (selector con lista predefinida)
     b) Estado del proyecto (selector con emojis)
     c) Fecha de entrega (formato YYYY-MM-DD)
     d) Integrantes (separados por coma, o "individual")
  3. El título de la nota se toma del nombre del archivo (configurable en QuickAdd).
  4. Completar las secciones a lo largo del desarrollo del proyecto.

Estructura:
  - Bloque de recolección de datos (código JavaScript con <%* ... _%>)
  - Frontmatter YAML (metadatos para Dataview)
  - Cuerpo de la nota (markdown con secciones organizadas)

====
1. SELECCIÓN DE MATERIA
----
Lista de materias que pueden tener proyectos. El valor seleccionado se usa para:
  - Ubicar la nota en la carpeta correspondiente
  - Etiquetas del frontmatter
  - Filtrar proyectos en los MOCs de materia
*/
let materiaSel = await tp.system.suggester(
    ["Sistemas Operativos", "Ecuaciones Diferenciales", "Inglés Técnico", "Redes", 
     "Sistemas de Información", "Investigación Operativa", "Transversal"],
    ["sistemas-operativos", "ecuaciones-diferenciales", "ingles-tecnico", "redes", 
     "sistemas-informacion", "investigacion-operativa", "transversal"]
);

/*
----
2. SELECCIÓN DEL ESTADO DEL PROYECTO
----
Los estados incluyen un emoji representativo (visible) y un valor interno
(sin emoji) para consultas Dataview más limpias.
  - 🔵 planificando: Etapa inicial, definiendo alcance
  - 🟡 en-progreso: Desarrollo activo
  - 🟠 en-revisión: Entregado para correcciones
  - ✅ entregado: Completado y entregado
  - ❌ cancelado: No se continuó
*/
let estadoSel = await tp.system.suggester(
    ["🔵 planificando", "🟡 en-progreso", "🟠 en-revisión", "✅ entregado", "❌ cancelado"],
    ["planificando", "en-progreso", "en-revision", "entregado", "cancelado"]
);

/*
----
3. DATOS ESPECÍFICOS DEL PROYECTO
----
- fechaEntrega: Fecha límite (formato YYYY-MM-DD) para ordenar en tablas
- integrantes:   Lista de participantes o "individual" para proyectos solitarios
*/
let fechaEntrega = await tp.system.prompt("Fecha de entrega (YYYY-MM-DD)");
let integrantes = await tp.system.prompt("Integrantes (separados por coma, o 'individual')");

/*
----
4. PREPARACIÓN PARA EL FRONTMATTER
----
A continuación se generará el frontmatter con los siguientes campos:

  - titulo:        Nombre del archivo (configurado en QuickAdd)
  - materia:       Identificador de la materia (para filtros)
  - tipo:          "proyecto" – identifica el tipo de nota
  - estado:        Estado actual del proyecto (valor interno)
  - fecha-inicio:  Fecha de creación (automática)
  - fecha-entrega: Fecha límite ingresada
  - integrantes:   Participantes del proyecto
  - tags:          Etiquetas: "proyecto" + materia para búsquedas

IMPORTANTE: Las consultas Dataview usarán estos campos para generar
tablas dinámicas en los MOCs de materia.
*/
_%>---
titulo: <% tp.file.title %>
materia: <% materiaSel %>
tipo: proyecto
estado: <% estadoSel %>
fecha-inicio: <% tp.date.now("YYYY-MM-DD") %>
fecha-entrega: <% fechaEntrega %>
integrantes: <% integrantes %>
tags: [proyecto, <% materiaSel %>]
---
# <% tp.file.title %>

> **Materia:** `= this.materia` · **Entrega:** `= this.fecha-entrega` · **Estado:** `= this.estado`  
> **Integrantes:** `= this.integrantes`

---

## 📋 Descripción del proyecto
<!-- Copiar o parafrasear el enunciado del docente -->
_¿Qué hay que hacer?_

---

## 🎯 Objetivos
<!-- Listar los objetivos específicos a cumplir -->
- [ ] 
- [ ] 
- [ ] 

---

## 🗺️ Plan de trabajo
<!-- Tabla de tareas, responsables y fechas -->

| Tarea | Responsable | Estado | Fecha límite |
|-------|-------------|--------|--------------|
|       |             | ⬜ pendiente |              |
|       |             | ⬜ pendiente |              |
|       |             | ⬜ pendiente |              |

---

## 🏗️ Estructura del proyecto
<!-- Árbol de archivos o módulos del proyecto (actualizar a medida que se avanza) -->

```
proyecto/  
├──  
└──
```

---

## 📝 Decisiones técnicas
<!-- Documentar por qué se eligió cada tecnología o enfoque -->
### Tecnologías usadas
- **Lenguaje:** 
- **Herramientas:** 
- **Librerías:** 
### Decisión: {{nombre de la decisión}}
**Contexto:** _¿Qué problema había?_  
**Decisión:** _¿Qué elegiste?_  
**Alternativas descartadas:** _¿Qué más consideraste?_  
**Consecuencia:** _¿Qué implicaciones tiene?_

---

## 🔄 Registro de avance
<!-- Bitácora de avances, actualizar cada sesión de trabajo -->
### <% tp.date.now("YYYY-MM-DD") %> — Inicio del proyecto
_Primera entrada: qué tenés claro, qué no, por dónde empezás._

---
## 🐛 Problemas encontrados
<!-- Registrar obstáculos y sus soluciones -->
| Problema | Solución | Fecha |
|----------|----------|-------|
|          |          |       |
|          |          |       |

---

## 📎 Recursos y referencias
<!-- Links, papers, libros o código de referencia -->
- 

---

## ✅ Checklist de entrega
<!-- Verificar antes de entregar -->
- [ ] El código está comentado
- [ ] El informe está completo
- [ ] Se probó el caso de uso principal
- [ ] Revisé los requerimientos originales del docente
- [ ] Exporté a PDF con Pandoc

---

## 💬 Feedback recibido
<!-- Notas del docente después de la entrega -->
<!-- Sirve para mejorar proyectos futuros -->

---
_Proyecto creado el <% tp.date.now("YYYY-MM-DD") %> con `plantilla_proyecto.md`_