---
tipo: tema
materia: sistemas-informacion-2
dificultad: 🟢 baja
estado: 📖 en-progreso
tags: [arquitectura, analisis-arquitectura, vista-logica, vista-fisica]
---
<!--
  👆 Esto es el "frontmatter". Son meta-datos que usa Dataview para organizar tus notas.
  Puedes cambiar:
	  
    - tipo: siempre "tema" para notas de profundización.
    - materia: el nombre de la carpeta de la materia (sin espacios, con guiones).
    - dificultad: 🟢 baja, 🟡 media, 🔴 alta. ¡Actualízala cuando domines el concepto!
    - estado: 📖 en-progreso si aún estás estudiando, ✅ completado cuando lo domines.
    - tags: etiquetas para buscar más fácil.
    
  💡 Consejo: Si algún concepto se te resiste, cambia la dificultad a 🔴 alta.
  Así aparecerá en el dashboard de materia y sabrás que debes repasarlo.
  ¡Y no olvides marcar el estado como ✅ completado cuando ya lo hayas dominado!
-->
# Análisis de la arquitectura

---

## 🧠 Desarrollo del concepto

**Definición:**  

El análisis de la arquitectura es la actividad dentro del proceso de desarrollo que define la estructura global del sistema, identificando sus componentes principales, sus interacciones y las decisiones tecnológicas que afectan a los requisitos no funcionales (rendimiento, seguridad, escalabilidad, mantenibilidad). Se realiza después de haber comprendido los requisitos (SRS, casos de uso) y antes del diseño detallado.

**Propósito:**
- Establecer una **estructura de alto nivel** que permita dividir el trabajo.
- Seleccionar **tecnologías** y **plataformas** (base de datos, frameworks, despliegue).
- Definir **vistas arquitectónicas** para diferentes stakeholders (usuarios, desarrolladores, administradores).

---

### 🏛️ Vistas arquitectónicas (modelo 4+1 de Kruchten)

| Vista | Descripción |
|-------|-------------|
| **Lógica** | Clases, objetos, relaciones (diagramas de clases, secuencia). |
| **Procesos** | Hilos, procesos, comunicación (concurrencia, sincronización). |
| **Desarrollo** | Organización del software en módulos, paquetes, subsistemas. |
| **Física** | Nodos de hardware, distribución de componentes (diagrama de despliegue). |
| **Escenarios (+1)** | Casos de uso que unifican las vistas y validan la arquitectura. |

---

### 🧩 Artefactos típicos del análisis de arquitectura

| Artefacto | Descripción |
|-----------|-------------|
| **Diagrama de componentes** | Muestra los componentes software y sus interfaces. |
| **Diagrama de despliegue** | Representa la topología física (servidores, dispositivos, conexiones). |
| **Especificación de la arquitectura** | Documento que describe las decisiones, patrones, tecnologías seleccionadas. |
| **Prototipo arquitectónico** | Implementación parcial para probar decisiones críticas (ej. rendimiento). |

---

### 📐 Patrones arquitectónicos comunes

| Patrón | Descripción | Uso típico |
|--------|-------------|------------|
| **Capas (layers)** | Organización en niveles (presentación, lógica, datos). | Aplicaciones empresariales. |
| **Cliente‑Servidor** | Clientes solicitan servicios a servidores centralizados. | Sistemas distribuidos. |
| **Microservicios** | Conjunto de servicios pequeños e independientes. | Escalabilidad, equipos autónomos. |
| **Modelo‑Vista‑Controlador (MVC)** | Separa datos (modelo), presentación (vista) y lógica de control. | Aplicaciones web. |
| **Event‑driven** | Comunicación asíncrona mediante eventos. | Sistemas en tiempo real, integración. |

---

### 🧪 Ejemplo práctico: arquitectura de un sistema de ventas online

- **Vista lógica:** clases como `Pedido`, `Producto`, `Cliente`, `Carrito`; relaciones y mensajes.
- **Vista procesos:** servidor web maneja múltiples solicitudes simultáneas; cola de mensajes para procesar pedidos.
- **Vista desarrollo:** módulos: frontend (React), backend API (Node.js), módulo de pagos, módulo de notificaciones.
- **Vista física:** balanceador de carga → servidores web → base de datos replicada; almacenamiento en la nube.
- **Escenario:** un caso de uso “Realizar compra” verifica que todas las vistas colaboran correctamente.

---

### ✅ Beneficios del análisis de arquitectura temprano

- Permite **identificar riesgos** (ej. cuellos de botella) antes de invertir en implementación.
- Facilita la **asignación de trabajo** entre equipos.
- Asegura que los requisitos no funcionales sean considerados desde el inicio.
- Mejora la **consistencia** y la **reutilización** de componentes.

---

## 🃏 Flashcards para Anki

TARGET DECK: boveda informatica::sistemas informacion 2::temas::proceso desarrollo software::analisis arquitectura

START
Básico
Anverso: ¿Qué es el análisis de la arquitectura?
Reverso: Actividad que define la estructura global del sistema, sus componentes principales, interacciones y decisiones tecnológicas, atendiendo requisitos no funcionales.
Tags: definicion
END

START
Básico
Anverso: ¿Cuáles son las vistas del modelo 4+1 de Kruchten?
Reverso: Lógica, procesos, desarrollo, física, escenarios (+1).
Tags: vistas
END

START
Básico (y tarjeta invertida)
Anverso: Vista lógica (arquitectura)
Reverso: Clases, objetos, relaciones (diagramas de clases, secuencia).
Tags: vistas
END

START
Básico (y tarjeta invertida)
Anverso: Vista de procesos (arquitectura)
Reverso: Hilos, procesos, comunicación (concurrencia, sincronización).
Tags: vistas
END

START
Básico (y tarjeta invertida)
Anverso: Vista de desarrollo (arquitectura)
Reverso: Organización en módulos, paquetes, subsistemas.
Tags: vistas
END

START
Básico (y tarjeta invertida)
Anverso: Vista física (arquitectura)
Reverso: Nodos de hardware, distribución de componentes (diagrama de despliegue).
Tags: vistas
END

START
Básico
Anverso: Menciona tres patrones arquitectónicos comunes.
Reverso: Capas (layers), cliente‑servidor, microservicios, MVC, event‑driven.
Tags: patrones
END

START
Básico (y tarjeta invertida)
Anverso: ¿Qué artefactos se generan en el análisis de arquitectura?
Reverso: Diagrama de componentes, diagrama de despliegue, especificación de arquitectura, prototipo arquitectónico.
Tags: artefactos
END

START
Básico
Anverso: ¿Por qué es importante realizar el análisis de arquitectura temprano?
Reverso: Identifica riesgos, facilita asignación de trabajo, asegura requisitos no funcionales desde el inicio, mejora consistencia y reutilización.
Tags: beneficios
END

START
Oclusión de imagen
Texto: Las vistas del modelo 4+1 son {{c1::lógica}}, {{c2::procesos}}, {{c3::desarrollo}}, {{c4::física}} y {{c5::escenarios}}.
Tags: vistas, cloze
END

---

## 🔗 Enlaces a clases donde apareció este tema

- [[2026-03-13_presentacion-materia]] (se menciona dentro del contenido: "Análisis de la arquitectura")

---

## 📚 Referencias y recursos

<!--
  Referencias basadas en los índices proporcionados:
  - Pressman: capítulo 9 "Diseño de la arquitectura" (página 206) – cubre estilos arquitectónicos, evaluación y descripciones.
  - Kruchten, P. (1995). "Architectural Blueprints—The '4+1' View Model of Software Architecture". IEEE Software.
  - Laudon: capítulo 13 "Creación de sistemas de información" (página 500) – menciona decisiones arquitectónicas en desarrollo de sistemas.
-->

- [[pressman-r-s_maxin-b-r_2021_ingenieria-del-software-un-enfoque-practico_9aed_macgraw-hill-interamericana.pdf#page=206|Pressman & Maxim, capítulo 9 "Diseño de la arquitectura"]] – Explica conceptos, estilos y evaluación arquitectónica.
- [[laudon-k-c_laudon-j-p_2016_sistemas-de-informacion-gerencial_14aed_pearson-educacion.pdf#page=500|Laudon & Laudon, capítulo 13 "Creación de sistemas de información"]] – Contexto de arquitectura en sistemas de gestión.