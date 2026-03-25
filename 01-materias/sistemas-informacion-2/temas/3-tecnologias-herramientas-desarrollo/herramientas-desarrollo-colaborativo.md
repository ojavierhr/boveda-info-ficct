---
tipo: tema
materia: sistemas-informacion-2
dificultad: 🟢 baja
estado: 📖 en-progreso
tags: [git, github, control-versiones, colaboracion]
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
# Herramientas para desarrollo colaborativo: Git, GitHub

---

## 🧠 Desarrollo del concepto

**Definición:**  

Las herramientas para desarrollo colaborativo permiten a equipos de software trabajar de forma simultánea sobre el mismo código, mantener un historial de cambios, resolver conflictos y coordinar la entrega de funcionalidades. La combinación más extendida es **Git** (sistema de control de versiones distribuido) y **GitHub** (plataforma de alojamiento de repositorios que añade funcionalidades de colaboración).

---

### 🧱 Git – Sistema de control de versiones distribuido

**Qué es:**  
Git es un sistema de control de versiones que registra los cambios en archivos a lo largo del tiempo, permitiendo volver a versiones anteriores, comparar diferencias y trabajar en ramas independientes. Es **distribuido**: cada desarrollador tiene una copia completa del repositorio en su máquina.

**Conceptos clave:**

| Concepto | Descripción |
|----------|-------------|
| **Repositorio (repo)** | Almacena todos los archivos y el historial de cambios. |
| **Commit** | Instantánea de los cambios en un momento dado; cada commit tiene un identificador único. |
| **Rama (branch)** | Línea de desarrollo independiente; permite trabajar en nuevas funcionalidades sin afectar la rama principal. |
| **Fusión (merge)** | Integra los cambios de una rama en otra. |
| **Pull / Push** | Obtener cambios de un repositorio remoto (pull) o enviar cambios locales (push). |

**Flujo básico con Git:**

1. **Clone** – copia el repositorio remoto a la máquina local.
2. **Branch** – crea una rama para la nueva funcionalidad.
3. **Add / Commit** – guarda los cambios localmente.
4. **Push** – envía la rama al repositorio remoto.
5. **Pull Request** – solicita integrar los cambios en la rama principal (en GitHub).
6. **Merge** – se integra la rama después de revisión.

---

### 🌐 GitHub – Plataforma de colaboración

**Qué es:**  
GitHub es un servicio en la nube que aloja repositorios Git y añade herramientas para facilitar la colaboración: issues, pull requests, revisiones de código, integración continua, wikis, etc.

**Funcionalidades clave de GitHub:**

| Funcionalidad | Descripción |
|---------------|-------------|
| **Repositorios remotos** | Almacena y comparte código con el equipo. |
| **Pull Requests (PR)** | Solicitud para fusionar una rama; permite discusión y revisión de código antes de integrar. |
| **Issues** | Seguimiento de tareas, bugs y mejoras. |
| **Actions** | Automatización de pruebas y despliegues (CI/CD). |
| **Projects** | Tableros kanban para gestionar tareas. |
| **Wiki** | Documentación del proyecto. |

---

### 🤝 Beneficios del desarrollo colaborativo con Git/GitHub

- **Historial completo:** se puede rastrear quién hizo qué cambio y por qué.
- **Trabajo paralelo:** ramas independientes permiten desarrollar múltiples funcionalidades a la vez sin conflictos.
- **Revisión de código:** los pull requests facilitan la retroalimentación entre pares antes de integrar cambios.
- **Respaldo y acceso:** el código está en la nube, accesible desde cualquier lugar.
- **Integración continua:** se pueden ejecutar pruebas automáticas en cada pull request.

---

### 🧪 Ejemplo práctico

Un equipo de tres desarrolladores trabaja en una aplicación web:

1. **Cada uno clona** el repositorio `app-web`.
2. **Crean ramas:** `feature/login`, `feature/pagos`, `feature/dashboard`.
3. **Trabajan localmente** y suben sus ramas a GitHub con `git push`.
4. **Abren pull requests** desde cada rama hacia la rama principal (`main`).
5. **Revisan** el código de los compañeros, dejan comentarios, solicitan cambios.
6. **Aprueban y fusionan** (merge) los cambios.
7. **GitHub Actions** ejecuta pruebas automáticas en cada PR para garantizar que no rompen la aplicación.

---

## 🃏 Flashcards para Anki

TARGET DECK: boveda informatica::sistemas informacion 2::temas::tecnologias y herramientas::herramientas desarrollo colaborativo

START
Básico
Anverso: ¿Qué es Git?
Reverso: Sistema de control de versiones distribuido que registra cambios, permite ramas, commits y trabajo en equipo sin conflictos.
Tags: git, definicion
END

START
Básico
Anverso: ¿Qué es GitHub?
Reverso: Plataforma en la nube que aloja repositorios Git y añade funcionalidades colaborativas: pull requests, issues, actions, etc.
Tags: github, definicion
END

START
Básico (y tarjeta invertida)
Anverso: Repositorio (en Git)
Reverso: Almacena todos los archivos y el historial de cambios del proyecto.
Tags: git, conceptos
END

START
Básico (y tarjeta invertida)
Anverso: Commit (en Git)
Reverso: Instantánea de los cambios en un momento dado; cada commit tiene un identificador único.
Tags: git, conceptos
END

START
Básico (y tarjeta invertida)
Anverso: Rama (branch) en Git
Reverso: Línea de desarrollo independiente; permite trabajar en funcionalidades sin afectar la rama principal.
Tags: git, conceptos
END

START
Básico (y tarjeta invertida)
Anverso: Pull Request (PR) en GitHub
Reverso: Solicitud para fusionar una rama; permite discusión, revisión de código y aprobación antes de integrar.
Tags: github, conceptos
END

START
Básico (y tarjeta invertida)
Anverso: Issue en GitHub
Reverso: Seguimiento de tareas, bugs y mejoras.
Tags: github, conceptos
END

START
Básico
Anverso: ¿Cuál es la diferencia entre Git y GitHub?
Reverso: Git es el sistema de control de versiones; GitHub es una plataforma que aloja repositorios Git y ofrece herramientas colaborativas adicionales.
Tags: comparacion
END

START
Básico
Anverso: Menciona dos beneficios de usar Git/GitHub para desarrollo colaborativo.
Reverso: Historial completo, trabajo paralelo con ramas, revisión de código, respaldo en la nube, integración continua.
Tags: beneficios
END

START
Oclusión de imagen
Texto: Un flujo típico en GitHub: se crea una {{c1::rama}}, se realizan {{c2::commits}}, se abre un {{c3::pull request}}, se revisa y se {{c4::fusiona}}.
Tags: flujo, cloze
END

---

## 🔗 Enlaces a clases donde apareció este tema

- [[2026-03-13_presentacion-materia]] (se menciona dentro de "Herramientas para desarrollo colaborativo")

---

## 📚 Referencias y recursos

<!--
  Referencias basadas en los índices proporcionados:
  - Laudon: capítulo 13 "Creación de sistemas de información" – sección sobre desarrollo colaborativo, aunque no trata Git específicamente.
  - Pressman: capítulo 2.7 "Tecnología del proceso" – menciona herramientas de gestión de configuración y colaboración.
  - El conocimiento sobre Git/GitHub proviene de la práctica común en la industria.
-->

- [[pressman-r-s_maxin-b-r_2021_ingenieria-del-software-un-enfoque-practico_9aed_macgraw-hill-interamericana.pdf#page=50|Pressman & Maxim, capítulo 2, sección 2.7 "Tecnología del proceso"]] – Contexto de herramientas de colaboración y gestión de configuración.
- [Documentación oficial de Git](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)