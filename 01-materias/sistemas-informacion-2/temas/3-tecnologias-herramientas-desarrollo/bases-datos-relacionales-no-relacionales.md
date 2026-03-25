---
tipo: tema
materia: sistemas-informacion-2
dificultad: 🟢 baja
estado: 📖 en-progreso
tags: [bases-datos, sql, nosql, datos]
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
# Bases de datos relacionales y no relacionales

---

## 🧠 Desarrollo del concepto

<!--
  En esta sección desarrollas el concepto. Puedes dividirla en subsecciones.
  Lo importante es que quede claro y puedas volver a consultarlo rápidamente.
-->

**Definiciones:**

- **Base de datos relacional:** organiza los datos en tablas (relaciones) con filas (registros) y columnas (atributos). Las tablas se relacionan entre sí mediante claves primarias y foráneas. Utiliza SQL (Structured Query Language) para consultas y manipulación.

- **Base de datos no relacional (NoSQL):** agrupa sistemas de almacenamiento que no siguen el modelo relacional; están diseñados para manejar grandes volúmenes de datos no estructurados o semiestructurados, escalabilidad horizontal y alta disponibilidad. Incluyen modelos como documentos, grafos, clave‑valor y columnas.

**Características clave de las bases de datos relacionales:**

- **Estructura fija:** el esquema (tablas, columnas, tipos de datos) se define antes de insertar datos.
- **Integridad referencial:** las relaciones entre tablas garantizan consistencia mediante restricciones.
- **Transacciones ACID:** aseguran Atomicidad, Consistencia, Aislamiento y Durabilidad en operaciones críticas.
- **Lenguaje SQL:** estándar para definición, consulta y manipulación de datos.

**Características clave de las bases de datos NoSQL:**

- **Esquema flexible:** se pueden almacenar documentos con diferentes campos sin necesidad de definir una estructura fija.
- **Escalabilidad horizontal:** distribuyen datos en múltiples servidores (sharding) de forma nativa.
- **Alta disponibilidad:** diseñadas para tolerar fallos sin interrumpir el servicio.
- **Modelos variados:** cada tipo optimiza un caso de uso específico.

**Modelos NoSQL más comunes:**

| Modelo | Descripción | Ejemplos |
|--------|-------------|----------|
| **Documentos** | Almacena datos en documentos (JSON, BSON) con estructura jerárquica. | MongoDB, CouchDB |
| **Clave‑valor** | Almacena pares clave‑valor; muy rápido para consultas simples. | Redis, DynamoDB |
| **Columnas** | Organiza datos en columnas en lugar de filas; ideal para analítica. | Cassandra, HBase |
| **Grafos** | Representa entidades como nodos y relaciones como aristas. | Neo4j, Amazon Neptune |

**Cuándo usar cada una:**

| Situación | Recomendación |
|-----------|---------------|
| Datos estructurados con relaciones complejas, transacciones ACID | Relacional (SQL) |
| Grandes volúmenes de datos con esquema variable | NoSQL (documentos) |
| Caché, sesiones, contadores | NoSQL (clave‑valor) |
| Análisis de big data con alta escritura | NoSQL (columnas) |
| Redes sociales, recomendaciones, detección de fraudes | NoSQL (grafos) |

**Ejemplo práctico (comercio electrónico):**

- **Base de datos relacional:** para gestionar usuarios, pedidos, productos y stock (necesita consistencia y transacciones).
- **Base de datos NoSQL (documentos):** para almacenar el catálogo de productos con atributos variables (tallas, colores, especificaciones técnicas) que cambian según la categoría.
- **Base de datos NoSQL (clave‑valor):** para cachear las sesiones de los usuarios y mejorar la velocidad.
- **Base de datos NoSQL (grafo):** para recomendar productos basados en relaciones de compra entre clientes.

**Importancia:**

- Las bases de datos relacionales han sido el estándar durante décadas por su fiabilidad y madurez.
- Las NoSQL permiten manejar los desafíos de la era digital: volumen, variedad y velocidad de los datos (big data).
- Muchas empresas adoptan arquitecturas poliglota (varios tipos de base de datos según la necesidad).

---

## 🃏 Flashcards para Anki

<!--
  Copia este bloque al final de tu nota.
  Las tarjetas se guardarán en:
    boveda informatica::sistemas informacion 2::temas::tecnologias y herramientas::bases de datos relacionales y no relacionales
  Si algún tipo de nota no existe en Anki, cámbialo a "Básico".
-->

TARGET DECK: boveda informatica::sistemas informacion 2::temas::tecnologias y herramientas::bases de datos relacionales y no relacionales

START
Básico
Anverso: ¿Qué es una base de datos relacional?
Reverso: Organiza los datos en tablas con filas y columnas, relacionadas mediante claves primarias y foráneas. Utiliza SQL.
Tags: definicion, relacional
END

START
Básico
Anverso: ¿Qué es una base de datos NoSQL?
Reverso: Sistemas que no siguen el modelo relacional, diseñados para grandes volúmenes de datos no estructurados, escalabilidad horizontal y alta disponibilidad.
Tags: definicion, nosql
END

START
Básico
Anverso: Menciona tres características de las bases de datos relacionales.
Reverso: Estructura fija (esquema), integridad referencial, transacciones ACID, lenguaje SQL.
Tags: relacional, caracteristicas
END

START
Básico
Anverso: Menciona tres características de las bases de datos NoSQL.
Reverso: Esquema flexible, escalabilidad horizontal, alta disponibilidad, modelos variados.
Tags: nosql, caracteristicas
END

START
Básico (y tarjeta invertida)
Anverso: Modelo de documentos (NoSQL)
Reverso: Almacena datos en documentos JSON/BSON con estructura jerárquica. Ejemplo: MongoDB.
Tags: nosql, modelos
END

START
Básico (y tarjeta invertida)
Anverso: Modelo clave‑valor (NoSQL)
Reverso: Almacena pares clave‑valor. Muy rápido para consultas simples. Ejemplo: Redis.
Tags: nosql, modelos
END

START
Básico (y tarjeta invertida)
Anverso: Modelo de columnas (NoSQL)
Reverso: Organiza datos en columnas en lugar de filas; ideal para analítica. Ejemplo: Cassandra.
Tags: nosql, modelos
END

START
Básico (y tarjeta invertida)
Anverso: Modelo de grafos (NoSQL)
Reverso: Representa entidades como nodos y relaciones como aristas. Ejemplo: Neo4j.
Tags: nosql, modelos
END

START
Básico
Anverso: ¿Qué son las transacciones ACID?
Reverso: Atomicidad, Consistencia, Aislamiento, Durabilidad. Propiedades que garantizan que las transacciones en bases de datos relacionales se procesen de forma fiable.
Tags: acid, relacional
END

START
Básico
Anverso: ¿Qué significa arquitectura poliglota de persistencia?
Reverso: Usar múltiples tipos de bases de datos (relacionales y NoSQL) según la necesidad de cada parte de la aplicación.
Tags: arquitectura
END

START
Oclusión de imagen
Texto: Los modelos NoSQL más comunes son {{c1::documentos}}, {{c1::clave‑valor}}, {{c1::columnas}} y {{c1::grafos}}.
Tags: nosql, cloze
END

---

## 🔗 Enlaces a clases donde apareció este tema

<!--
  Aquí enlazas a las notas de clase donde mencionaste este concepto.
  Así puedes saltar directamente al contexto original.
  Asegúrate de que los nombres de los archivos coincidan exactamente con los que tienes en tu bóveda.
-->

- [[2026-03-13_presentacion-materia]] (se menciona dentro de "Tecnologías y herramientas de desarrollo")

---

## 📚 Referencias y recursos

<!--
  Referencias basadas en los índices proporcionados:
  - Laudon: capítulo 6 "Fundamentos de inteligencia de negocios: bases de datos y administración de la información" (página 214).
  - En la sección 6.2 se habla de sistemas de administración de bases de datos (DBMS) y bases de datos relacionales.
  - Para NoSQL, el libro de Laudon no lo trata con profundidad; se recomienda mencionarlo como tendencia actual.
  - Pressman: capítulo 10 "Diseño en el nivel de componentes" tiene una breve mención a bases de datos en el contexto de componentes.
-->

- [[laudon-k-c_laudon-j-p_2016_sistemas-de-informacion-gerencial_14aed_pearson-educacion.pdf#page=214|Laudon & Laudon, capítulo 6, "Fundamentos de inteligencia de negocios: bases de datos y administración de la información"]] – Explica bases de datos relacionales, DBMS y SQL.
- [[pressman-r-s_maxin-b-r_2021_ingenieria-del-software-un-enfoque-practico_9aed_macgraw-hill-interamericana.pdf#page=239|Pressman & Maxim, capítulo 10, "Diseño en el nivel de componentes"]] – Relacionado con el diseño de componentes que acceden a bases de datos.