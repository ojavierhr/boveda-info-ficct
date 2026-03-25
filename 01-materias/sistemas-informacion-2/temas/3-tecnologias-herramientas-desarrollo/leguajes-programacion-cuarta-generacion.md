---
tipo: tema
materia: sistemas-informacion-2
dificultad: 🟢 baja
estado: 📖 en-progreso
tags: [4gl, lenguajes-programacion, desarrollo-rapido, rad]
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
# Lenguajes de programación de cuarta generación (4GL)

---

## 🧠 Desarrollo del concepto

**Definición:**  

Los lenguajes de programación de cuarta generación (4GL) son lenguajes de alto nivel diseñados para reducir el esfuerzo de programación, permitiendo que los desarrolladores especifiquen *qué* se quiere obtener en lugar de *cómo* hacerlo. A diferencia de los lenguajes de tercera generación (3GL, como C, Java, Python), los 4GL están orientados a dominios específicos (bases de datos, informes, interfaces gráficas) y suelen ser utilizados en entornos de desarrollo rápido de aplicaciones (RAD).

**Características clave:**

- **Declarativos vs. imperativos:** el programador declara el resultado deseado, el lenguaje se encarga de la implementación.
- **Orientación a dominios:** cada 4GL está optimizado para un tipo de tarea (consultas SQL, generación de informes, formularios).
- **Productividad elevada:** permite desarrollar aplicaciones con mucho menos código que en 3GL.
- **Integración con bases de datos:** la mayoría están diseñados para trabajar con sistemas de gestión de bases de datos (DBMS).
- **Menor flexibilidad:** sacrifican control detallado sobre el hardware y la ejecución a cambio de simplicidad.

**Ejemplos típicos de 4GL:**

| Tipo | Ejemplos | Uso principal |
|------|----------|---------------|
| **Lenguajes de consulta** | SQL | Consultas y manipulación de bases de datos relacionales. |
| **Generadores de informes** | Crystal Reports, Oracle Reports | Creación de informes estructurados. |
| **Lenguajes de desarrollo de pantallas** | Oracle Forms, PowerBuilder, Visual Basic (clásico) | Creación de interfaces de usuario y aplicaciones de gestión. |
| **Herramientas de análisis estadístico** | R, SAS, SPSS | Análisis de datos y modelado estadístico. |

**Comparación con otras generaciones:**

| Generación | Características | Ejemplos |
|------------|-----------------|----------|
| **1GL** | Lenguaje máquina (binario) | Código binario |
| **2GL** | Ensamblador (mnemónicos) | Assembly |
| **3GL** | Lenguajes de alto nivel (imperativos, estructurados) | C, C++, Java, Python, C# |
| **4GL** | Declarativos, orientados a dominio | SQL, PowerBuilder, SAS |
| **5GL** | Basados en inteligencia artificial, resolución de problemas | Prolog, OPS5 |

**Ejemplo práctico:**

Para generar un informe de ventas mensual:

- **En 3GL (Java):** escribirías código para conectarte a la base de datos, ejecutar una consulta, iterar sobre los resultados, formatear el texto y generar un PDF.
- **En 4GL (Crystal Reports):** usas el asistente para seleccionar los campos, aplicar filtros y elegir un diseño; el informe se genera en minutos con pocas líneas de código.

**Importancia:**

- Acelera el desarrollo de aplicaciones típicas de gestión (CRUD, informes).
- Permite a usuarios no programadores (analistas funcionales) construir soluciones básicas.
- Sigue siendo relevante en herramientas de inteligencia de negocios (BI) y desarrollo rápido de aplicaciones.
- En la actualidad, coexisten con frameworks de 3GL que imitan la productividad de 4GL (por ejemplo, Django, Ruby on Rails).

---

## 🃏 Flashcards para Anki

TARGET DECK: boveda informatica::sistemas informacion 2::temas::tecnologias y herramientas::lenguajes programacion cuarta generacion

START
Básico
Anverso: ¿Qué son los lenguajes de programación de cuarta generación (4GL)?
Reverso: Lenguajes de alto nivel declarativos, orientados a dominios específicos (bases de datos, informes), que aumentan la productividad al especificar qué se quiere en lugar de cómo hacerlo.
Tags: definicion
END

START
Básico
Anverso: Menciona tres características de los 4GL.
Reverso: Declarativos (qué, no cómo), orientados a dominio, alta productividad, integración con bases de datos.
Tags: caracteristicas
END

START
Básico (y tarjeta invertida)
Anverso: Diferencia entre 3GL y 4GL
Reverso: 3GL son imperativos (especifican el cómo) y de propósito general; 4GL son declarativos (especifican el qué) y orientados a dominio.
Tags: comparacion
END

START
Básico (y tarjeta invertida)
Anverso: Ejemplo de 4GL para bases de datos
Reverso: SQL (Structured Query Language).
Tags: ejemplos
END

START
Básico (y tarjeta invertida)
Anverso: Ejemplo de 4GL para generación de informes
Reverso: Crystal Reports, Oracle Reports.
Tags: ejemplos
END

START
Básico (y tarjeta invertida)
Anverso: Ejemplo de 4GL para desarrollo de pantallas/gestión
Reverso: Oracle Forms, PowerBuilder, Visual Basic (clásico).
Tags: ejemplos
END

START
Básico
Anverso: ¿Cuál es la principal ventaja de usar 4GL?
Reverso: Alta productividad: permite desarrollar aplicaciones con mucho menos código que en 3GL, ideal para sistemas de gestión y CRUD.
Tags: ventajas
END

START
Básico
Anverso: ¿Cuál es la principal desventaja de los 4GL?
Reverso: Menor flexibilidad y control sobre el hardware y la ejecución comparado con 3GL; no son adecuados para sistemas de alto rendimiento o muy complejos.
Tags: desventajas
END

START
Oclusión de imagen
Texto: Los 4GL se caracterizan por ser {{c1::declarativos}}, {{c1::orientados a dominio}} y {{c1::de alta productividad}}.
Tags: caracteristicas, cloze
END

---

## 🔗 Enlaces a clases donde apareció este tema

- [[2026-03-13_presentacion-materia]] (se menciona dentro de "Tecnologías y herramientas de desarrollo")

---

## 📚 Referencias y recursos

<!--
  Referencias basadas en los índices proporcionados:
  - Laudon: capítulo 13 "Creación de sistemas de información", sección 13.3 "Metodologías para modelar y diseñar sistemas" (página 515) menciona herramientas CASE y lenguajes de cuarta generación.
  - Pressman: capítulo 2.7 "Tecnología del proceso" (página 50) aborda herramientas de desarrollo y entornos integrados.
-->

- [[laudon-k-c_laudon-j-p_2016_sistemas-de-informacion-gerencial_14aed_pearson-educacion.pdf#page=515|Laudon & Laudon, capítulo 13, sección 13.3 "Metodologías para modelar y diseñar sistemas"]] – Contexto de herramientas de desarrollo y lenguajes de cuarta generación.
- [[pressman-r-s_maxin-b-r_2021_ingenieria-del-software-un-enfoque-practico_9aed_macgraw-hill-interamericana.pdf#page=50|Pressman & Maxim, capítulo 2, sección 2.7 "Tecnología del proceso"]] – Herramientas y entornos de desarrollo (incluye referencia a herramientas de alto nivel).