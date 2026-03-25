---
tipo: tema
materia: sistemas-informacion-2
dificultad: 🟢 baja
estado: 📖 en-progreso
tags: [desarrollo-web, desarrollo-movil, despliegue, devops, frameworks]
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
# Herramientas para desarrollo web / móvil / despliegue

---

## 🧠 Desarrollo del concepto

**Definición:**  

Este conjunto de herramientas abarca tecnologías, frameworks y prácticas que facilitan la creación de aplicaciones web, móviles y su puesta en producción (despliegue). Incluye desde lenguajes de programación hasta entornos de contenedores y pipelines de integración continua.

---

### 🌐 Desarrollo web

**Tecnologías frontend (cliente):**

| Herramienta / Framework | Propósito |
|-------------------------|-----------|
| **HTML, CSS, JavaScript** | Base de toda web. |
| **React, Angular, Vue.js** | Frameworks para construir interfaces interactivas y componentes reutilizables. |
| **Bootstrap, Tailwind** | Bibliotecas de estilos y diseño responsive. |

**Tecnologías backend (servidor):**

| Herramienta / Framework | Propósito |
|-------------------------|-----------|
| **Node.js** | Entorno JavaScript del lado del servidor. |
| **Django (Python), Spring Boot (Java), Laravel (PHP)** | Frameworks que estructuran la lógica de negocio, APIs y gestión de datos. |
| **Express.js** | Framework minimalista para Node.js. |
| **Bases de datos** | MySQL, PostgreSQL (SQL) y MongoDB (NoSQL). |

---

### 📱 Desarrollo móvil

| Enfoque | Herramientas | Descripción |
|---------|--------------|-------------|
| **Nativo** | Swift (iOS), Kotlin/Java (Android) | Aplicaciones optimizadas para cada plataforma. |
| **Híbrido / Multiplataforma** | React Native, Flutter, Xamarin | Un solo código base para iOS y Android. |
| **Web progresiva (PWA)** | HTML/CSS/JS + Service Workers | Aplicaciones web que se comportan como apps nativas. |

---

### 🚀 Despliegue (DevOps y operaciones)

| Categoría | Herramientas | Propósito |
|-----------|--------------|-----------|
| **Contenedores** | Docker, Podman | Empaquetan la aplicación y sus dependencias en entornos aislados. |
| **Orquestación** | Kubernetes, Docker Swarm | Administran contenedores a escala, balanceo de carga, actualizaciones. |
| **Integración/Despliegue continuo (CI/CD)** | GitHub Actions, GitLab CI, Jenkins, CircleCI | Automatizan pruebas, compilación y despliegue en cada cambio. |
| **Nube / Infraestructura como servicio** | AWS, Azure, Google Cloud | Proveen máquinas virtuales, bases de datos gestionadas, escalado. |
| **Infraestructura como código (IaC)** | Terraform, Ansible | Definen la infraestructura mediante archivos versionados. |

---

### 🧪 Flujo típico de desarrollo y despliegue

1. **Desarrollo local** con frameworks y herramientas de edición (VS Code, IntelliJ).
2. **Control de versiones** con Git/GitHub.
3. **Integración continua**: en cada push, GitHub Actions ejecuta pruebas y compilación.
4. **Construcción de imagen Docker** para empaquetar la aplicación.
5. **Despliegue** a un entorno de pruebas (staging) usando Kubernetes o un servicio cloud.
6. **Pruebas** de aceptación.
7. **Despliegue a producción** (con estrategias como rolling update, blue‑green).
8. **Monitoreo** con herramientas como Prometheus, Grafana, Datadog.

---

### 🧰 Ejemplo práctico

Un equipo desarrolla una tienda online:

- **Frontend:** React + Bootstrap (web) y React Native (app móvil).
- **Backend:** Node.js + Express + MongoDB.
- **GitHub:** repositorio con ramas `main`, `develop`, `feature/*`.
- **GitHub Actions:** ejecuta pruebas unitarias y de integración en cada pull request.
- **Docker:** crea una imagen del backend y otra del frontend.
- **Kubernetes (k8s):** despliega los contenedores en un clúster gestionado en AWS.
- **Terraform:** define la infraestructura (redes, bases de datos, clúster) como código.

---

## 🃏 Flashcards para Anki

TARGET DECK: boveda informatica::sistemas informacion 2::temas::tecnologias y herramientas::herramientas desarrollo web movil despliegue

START
Básico
Anverso: ¿Qué frameworks se usan para desarrollo web frontend?
Reverso: React, Angular, Vue.js.
Tags: frontend
END

START
Básico
Anverso: ¿Qué frameworks se usan para desarrollo web backend?
Reverso: Django (Python), Spring Boot (Java), Laravel (PHP), Node.js + Express.
Tags: backend
END

START
Básico (y tarjeta invertida)
Anverso: Desarrollo móvil nativo
Reverso: Swift para iOS, Kotlin/Java para Android.
Tags: movil, nativo
END

START
Básico (y tarjeta invertida)
Anverso: Desarrollo móvil multiplataforma
Reverso: React Native, Flutter, Xamarin (un solo código para iOS y Android).
Tags: movil, multiplataforma
END

START
Básico (y tarjeta invertida)
Anverso: ¿Qué es Docker?
Reverso: Tecnología de contenedores que empaqueta aplicaciones y dependencias en entornos aislados.
Tags: contenedores
END

START
Básico (y tarjeta invertida)
Anverso: ¿Qué es Kubernetes?
Reverso: Orquestador de contenedores que administra despliegue, escalado y operación de aplicaciones en contenedores.
Tags: kubernetes
END

START
Básico (y tarjeta invertida)
Anverso: Integración Continua / Despliegue Continuo (CI/CD)
Reverso: Automatización de pruebas, compilación y despliegue ante cada cambio en el repositorio.
Tags: cicd
END

START
Básico (y tarjeta invertida)
Anverso: Ejemplo de herramienta CI/CD
Reverso: GitHub Actions, GitLab CI, Jenkins, CircleCI.
Tags: cicd, ejemplos
END

START
Básico (y tarjeta invertida)
Anverso: Infraestructura como código (IaC)
Reverso: Definir y gestionar infraestructura (servidores, redes) mediante archivos de configuración versionados (ej. Terraform, Ansible).
Tags: iac
END

START
Básico
Anverso: Menciona dos servicios de nube para despliegue.
Reverso: AWS, Microsoft Azure, Google Cloud Platform.
Tags: nube
END

START
Oclusión de imagen
Texto: Las etapas típicas de despliegue incluyen {{c1::desarrollo}}, {{c2::control de versiones}}, {{c3::CI/CD}}, {{c4::contenedores}}, {{c5::orquestación}} y {{c6::monitoreo}}.
Tags: flujo, cloze
END

---

## 🔗 Enlaces a clases donde apareció este tema

- [[2026-03-13_presentacion-materia]] (se menciona dentro de "Tecnologías y herramientas de desarrollo")

---

## 📚 Referencias y recursos

<!--
  Referencias basadas en los índices proporcionados:
  - Pressman: capítulo 13 "Diseño de WebApps" (página 317) – aborda herramientas para desarrollo web.
  - Laudon: capítulo 7 "Telecomunicaciones, Internet y tecnología inalámbrica" – contexto de redes y aplicaciones móviles.
  - Los temas de contenedores y CI/CD no están profundizados en los libros clásicos; se complementa con conocimientos actuales.
-->

- [[pressman-r-s_maxin-b-r_2021_ingenieria-del-software-un-enfoque-practico_9aed_macgraw-hill-interamericana.pdf#page=317|Pressman & Maxim, capítulo 13 "Diseño de WebApps"]] – Herramientas y metodologías para aplicaciones web.
- [[laudon-k-c_laudon-j-p_2016_sistemas-de-informacion-gerencial_14aed_pearson-educacion.pdf#page=254|Laudon & Laudon, capítulo 7 "Telecomunicaciones, Internet y tecnología inalámbrica"]] – Infraestructura de red para aplicaciones web y móviles.
- [Documentación oficial de Docker](https://docs.docker.com/)
- [Kubernetes documentation](https://kubernetes.io/docs/home/)