---
tipo: tema
materia: sistemas-informacion-2
dificultad: 🟢 baja
estado: 📖 en-progreso
tags: [arquitectura, cliente-servidor, capas, distribucion]
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
# Arquitectura cliente/servidor y basada en capas

---

## 🧠 Desarrollo del concepto

**Definiciones:**

- **Arquitectura cliente/servidor:** modelo de computación distribuida donde un *cliente* solicita recursos o servicios a un *servidor*, y el servidor responde. Ambos se comunican a través de una red. El cliente maneja la interfaz de usuario; el servidor gestiona datos, lógica de negocio o ambos.

- **Arquitectura basada en capas (n‑tier):** organiza el software en niveles lógicos separados, donde cada capa tiene una responsabilidad específica y se comunica solo con las capas adyacentes. Esto facilita el mantenimiento, la escalabilidad y la reutilización.

**Arquitectura cliente/servidor – variantes:**

| Tipo | Descripción | Ejemplo |
|------|-------------|---------|
| **Dos capas (2‑tier)** | El cliente se conecta directamente al servidor de base de datos. El cliente contiene la interfaz y parte de la lógica. | Aplicación de escritorio que consulta una base de datos remota. |
| **Tres capas (3‑tier)** | Introduce una capa intermedia (aplicación) entre cliente y base de datos. La capa intermedia contiene la lógica de negocio. | Aplicación web: navegador (cliente), servidor web/app (lógica), servidor de base de datos. |
| **Multicapa (n‑tier)** | Descompone las capas en más niveles (por ejemplo, separar servicios web, caché, colas de mensajes). | Arquitectura de microservicios con múltiples componentes. |

**Arquitectura basada en capas – capas típicas:**

| Capa | Responsabilidad |
|------|-----------------|
| **Presentación** | Interfaz de usuario (UI), manejo de entrada/salida. |
| **Lógica de negocio** | Reglas de negocio, validaciones, cálculos, flujo de trabajo. |
| **Acceso a datos** | Consultas a bases de datos, mapeo objeto‑relacional (ORM). |
| **Base de datos** | Almacenamiento persistente (puede considerarse una capa separada o parte del acceso a datos). |

**Beneficios de la separación en capas:**

- **Modularidad:** se puede modificar una capa sin afectar las demás (por ejemplo, cambiar la base de datos sin tocar la interfaz).
- **Escalabilidad:** se pueden escalar capas de forma independiente (más servidores en la capa de lógica).
- **Seguridad:** se pueden restringir accesos por capa.
- **Reutilización:** la misma capa de lógica puede servir a diferentes clientes (web, móvil, API).

**Ejemplo práctico (tienda online 3‑tier):**

- **Capa presentación:** sitio web (HTML, CSS, JavaScript) que muestra productos y recibe pedidos.
- **Capa lógica de negocio:** servidor con código en Java/Python que procesa el carrito, aplica descuentos, calcula envíos y valida pagos.
- **Capa de acceso a datos:** consultas SQL a la base de datos.
- **Base de datos:** PostgreSQL con tablas de productos, clientes, pedidos.

**Importancia:**

- Permite construir sistemas robustos y mantenibles.
- Facilita el trabajo en equipos grandes (cada equipo puede enfocarse en una capa).
- Es la base para arquitecturas modernas como microservicios y cloud computing.
- Permite la evolución tecnológica: se puede cambiar la capa de presentación sin afectar la lógica de negocio.

---

## 🃏 Flashcards para Anki

TARGET DECK: boveda informatica::sistemas informacion 2::temas::tecnologias y herramientas::arquitectura cliente servidor y basada en capas

START
Básico
Anverso: ¿Qué es la arquitectura cliente/servidor?
Reverso: Modelo de computación distribuida donde un cliente solicita servicios a un servidor a través de una red; el servidor responde.
Tags: definicion
END

START
Básico
Anverso: ¿Qué es una arquitectura basada en capas (n‑tier)?
Reverso: Organización del software en niveles lógicos separados, cada uno con responsabilidad específica, comunicándose solo con capas adyacentes.
Tags: definicion
END

START
Básico
Anverso: ¿Cuál es la diferencia entre arquitectura 2‑tier y 3‑tier?
Reverso: 2‑tier: cliente y servidor de base de datos (cliente contiene lógica). 3‑tier: introduce una capa intermedia de aplicación con la lógica de negocio.
Tags: comparacion
END

START
Básico (y tarjeta invertida)
Anverso: Capa de presentación (en arquitectura por capas)
Reverso: Interfaz de usuario, manejo de entrada/salida.
Tags: capas
END

START
Básico (y tarjeta invertida)
Anverso: Capa de lógica de negocio (en arquitectura por capas)
Reverso: Reglas de negocio, validaciones, cálculos, flujo de trabajo.
Tags: capas
END

START
Básico (y tarjeta invertida)
Anverso: Capa de acceso a datos (en arquitectura por capas)
Reverso: Consultas a bases de datos, mapeo objeto‑relacional (ORM).
Tags: capas
END

START
Básico (y tarjeta invertida)
Anverso: Arquitectura 3‑tier típica en aplicaciones web
Reverso: Navegador (presentación) → servidor web/app (lógica) → base de datos.
Tags: ejemplos
END

START
Básico
Anverso: Menciona tres beneficios de la separación en capas.
Reverso: Modularidad, escalabilidad independiente, seguridad, reutilización.
Tags: beneficios
END

START
Oclusión de imagen
Texto: Las capas típicas en una arquitectura n‑tier son {{c1::presentación}}, {{c1::lógica de negocio}} y {{c1::acceso a datos}}.
Tags: capas, cloze
END

---

## 🔗 Enlaces a clases donde apareció este tema

- [[2026-03-13_presentacion-materia]] (se menciona dentro de "Tecnologías y herramientas de desarrollo")

---

## 📚 Referencias y recursos

<!--
  Referencias basadas en los índices proporcionados:
  - Laudon: capítulo 7 "Telecomunicaciones, Internet y tecnología inalámbrica" (página 254) sección sobre redes cliente/servidor.
  - Laudon: capítulo 13 "Creación de sistemas de información" sección 13.3 "Metodologías para modelar y diseñar sistemas" (página 515) menciona arquitecturas.
  - Pressman: capítulo 9 "Diseño de la arquitectura" (página 206) sección sobre estilos arquitectónicos, incluye cliente/servidor y capas.
-->

- [[laudon-k-c_laudon-j-p_2016_sistemas-de-informacion-gerencial_14aed_pearson-educacion.pdf#page=254|Laudon & Laudon, capítulo 7, "Telecomunicaciones, Internet y tecnología inalámbrica"]] – Introduce el modelo cliente/servidor en redes.
- [[pressman-r-s_maxin-b-r_2021_ingenieria-del-software-un-enfoque-practico_9aed_macgraw-hill-interamericana.pdf#page=206|Pressman & Maxim, capítulo 9, "Diseño de la arquitectura"]] – Explica estilos arquitectónicos, incluyendo cliente/servidor y arquitectura por capas.