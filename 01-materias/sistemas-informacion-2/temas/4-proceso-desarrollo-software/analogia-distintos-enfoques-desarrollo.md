---
tipo: tema
materia: sistemas-informacion-2
dificultad: 🟢 baja
estado: 📖 en-progreso
tags: [metodologias, cascada, agil, scrum, comparacion]
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
# Analogía entre distintos enfoques de desarrollo

---

## 🧠 Desarrollo del concepto

**Definición:**  

Los enfoques de desarrollo de software se pueden clasificar en dos grandes familias: **tradicionales (prescriptivos)** y **ágiles**. La analogía entre ellos ayuda a entender cuándo aplicar cada uno según las características del proyecto, el equipo y los requisitos.

---

### 📦 Enfoque tradicional (cascada, modelo en V, RUP)

**Características:**

- **Planificación exhaustiva** al inicio: se definen todos los requisitos antes de comenzar el desarrollo.
- **Secuencial:** fases rígidas (requisitos → diseño → implementación → pruebas → despliegue).
- **Documentación detallada** como artefacto principal.
- **Cambios difíciles de incorporar** una vez avanzado el proyecto.
- **Entrega única** al final.

**Analogía: construir un puente**  
No puedes cambiar el diseño después de poner los pilares. Todo se planifica meticulosamente antes de construir.

---

### 🏃 Enfoque ágil (Scrum, XP, Kanban)

**Características:**

- **Iterativo e incremental:** se entregan funcionalidades en ciclos cortos (sprints).
- **Adaptativo:** los requisitos pueden cambiar en cualquier momento.
- **Colaboración estrecha** con el cliente y el equipo.
- **Menos documentación formal, más software funcionando.**
- **Entrega continua de valor.**

**Analogía: construir un producto con un equipo de diseño ágil**  
Se crea un prototipo básico, se prueba con usuarios, se ajusta y se mejora iterativamente.

---

### ⚖️ Comparativa clave

| Aspecto | Tradicional | Ágil |
|---------|-------------|------|
| **Requisitos** | Fijos desde el inicio | Cambiantes, se refinan continuamente |
| **Planificación** | Detallada al principio | De alto nivel, se ajusta sprint a sprint |
| **Entregas** | Una sola al final | Incrementales (cada 2-4 semanas) |
| **Documentación** | Extensa, formal | Mínima pero suficiente |
| **Rol del cliente** | Participa al inicio y al final | Involucrado continuamente |
| **Cambios** | Costosos y lentos | Absorbidos fácilmente |
| **Tamaño de equipo** | Puede ser grande | Preferiblemente pequeño (5-9 personas) |
| **Tipo de proyecto** | Grandes sistemas con requisitos estables | Proyectos con alta incertidumbre o innovación |

---

### 🧪 Ejemplo práctico

**Proyecto adecuado para tradicional:**  
Sistema de control de un satélite. Los requisitos están claros desde el principio, los cambios son extremadamente costosos y se requiere documentación rigurosa.

**Proyecto adecuado para ágil:**  
Aplicación móvil para un mercado nuevo. No se sabe exactamente qué funcionalidades tendrá éxito; se necesita experimentar y ajustar rápidamente según la respuesta de los usuarios.

---

### 🤔 ¿Cuándo usar cada uno?

- **Tradicional** → proyectos críticos, con requisitos estables, regulaciones estrictas, equipos grandes o distribuidos.
- **Ágil** → proyectos con alta incertidumbre, equipos pequeños, necesidad de entregar valor rápido, clientes disponibles para colaborar.
- **Híbridos** → muchas organizaciones combinan lo mejor de ambos: planificación general con desarrollo iterativo.

---

## 🃏 Flashcards para Anki

TARGET DECK: boveda informatica::sistemas informacion 2::temas::proceso desarrollo software::analogia enfoques desarrollo

START
Básico
Anverso: ¿Cuál es la principal diferencia entre el enfoque tradicional y el ágil?
Reverso: Tradicional: planificación exhaustiva inicial, fases secuenciales, cambios costosos. Ágil: iterativo, adaptativo, entrega continua, cambios absorbidos fácilmente.
Tags: comparacion
END

START
Básico
Anverso: Menciona tres características del enfoque tradicional.
Reverso: Planificación inicial detallada, fases secuenciales, documentación extensa, cambios difíciles, entrega única.
Tags: tradicional
END

START
Básico
Anverso: Menciona tres características del enfoque ágil.
Reverso: Iterativo e incremental, requisitos cambiantes, colaboración continua con el cliente, entregas frecuentes, menos documentación formal.
Tags: agil
END

START
Básico (y tarjeta invertida)
Anverso: ¿Qué tipo de proyecto es adecuado para el enfoque tradicional?
Reverso: Proyectos con requisitos estables, críticos, regulados, equipos grandes.
Tags: tradicional, cuando
END

START
Básico (y tarjeta invertida)
Anverso: ¿Qué tipo de proyecto es adecuado para el enfoque ágil?
Reverso: Proyectos con incertidumbre, innovación, equipos pequeños, necesidad de entregar valor rápido.
Tags: agil, cuando
END

START
Básico
Anverso: ¿Qué es un enfoque híbrido?
Reverso: Combinación de planificación tradicional con desarrollo iterativo; se usa en muchas organizaciones para equilibrar control y flexibilidad.
Tags: hibrido
END

START
Oclusión de imagen
Texto: En el enfoque {{c1::tradicional}} los requisitos son fijos y la entrega es única; en el enfoque {{c2::ágil}} los requisitos cambian y se entrega valor {{c3::incrementalmente}}.
Tags: comparacion, cloze
END

---

## 🔗 Enlaces a clases donde apareció este tema

- [[2026-03-13_presentacion-materia]] (se menciona dentro del contenido: "Analogía entre distintos enfoques de desarrollo")

---

## 📚 Referencias y recursos

<!--
  Referencias basadas en los índices proporcionados:
  - Pressman: capítulo 2 "Modelos del proceso" (página 26) y capítulo 3 "Desarrollo ágil" (página 55).
  - Laudon: capítulo 13 "Creación de sistemas de información", sección sobre metodologías estructuradas y desarrollo ágil.
-->

- [[pressman-r-s_maxin-b-r_2021_ingenieria-del-software-un-enfoque-practico_9aed_macgraw-hill-interamericana.pdf#page=26|Pressman & Maxim, capítulo 2 "Modelos del proceso"]] – Modelos tradicionales (cascada, incremental, evolutivo).
- [[pressman-r-s_maxin-b-r_2021_ingenieria-del-software-un-enfoque-practico_9aed_macgraw-hill-interamericana.pdf#page=55|Pressman & Maxim, capítulo 3 "Desarrollo ágil"]] – Principios ágiles y metodologías (Scrum, XP).
- [[laudon-k-c_laudon-j-p_2016_sistemas-de-informacion-gerencial_14aed_pearson-educacion.pdf#page=521|Laudon & Laudon, capítulo 13, sección "Prototipado"]] – Contexto de desarrollo ágil.