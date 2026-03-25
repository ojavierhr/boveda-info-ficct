---
tipo: tema
materia: sistemas-informacion-2
dificultad: 🟢 baja
estado: 📖 en-progreso
tags: [estructura-datos, diseño-datos, modelo-logico, persistencia]
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
# Diseño de la estructura de datos

---

## 🧠 Desarrollo del concepto

**Definición:**  

El diseño de la estructura de datos es la actividad que define cómo se almacenarán, organizarán y accederán los datos persistentes de un sistema. Incluye la definición de entidades, atributos, relaciones, restricciones de integridad y la selección de la tecnología de almacenamiento (base de datos relacional, NoSQL, etc.). Su objetivo es garantizar que los datos sean consistentes, eficientes en el acceso y capaces de evolucionar con los requisitos.

---

### 📐 Pasos del diseño de la estructura de datos

| Paso | Descripción |
|------|-------------|
| **1. Modelo conceptual** | Identificar entidades y relaciones del dominio (diagrama entidad‑relación o clases UML). |
| **2. Modelo lógico** | Traducir a estructuras específicas del modelo de datos elegido (tablas relacionales, documentos JSON, etc.). |
| **3. Normalización** (relacional) | Aplicar formas normales para reducir redundancia y anomalías. |
| **4. Definición de restricciones** | Claves primarias, foráneas, valores únicos, reglas de negocio. |
| **5. Índices y optimización** | Definir índices para consultas frecuentes, particionamiento si es necesario. |
| **6. Diseño de seguridad** | Permisos de acceso, encriptación de campos sensibles. |

---

### 🗃️ Enfoques según tipo de base de datos

| Tipo | Características de diseño |
|------|---------------------------|
| **Relacional (SQL)** | Esquema fijo, normalización, claves primarias/foráneas, transacciones ACID. |
| **Documentos (NoSQL)** | Estructuras anidadas (JSON/BSON), desnormalización controlada, esquema flexible. |
| **Clave‑valor** | Diseño centrado en patrones de acceso: definir claves que permitan recuperación eficiente. |
| **Grafos** | Definir nodos, aristas, propiedades; optimizar para consultas de recorrido. |

---

### 📋 Normalización (para modelos relacionales)

| Forma normal | Regla básica |
|--------------|--------------|
| **1FN** | Eliminar grupos repetitivos; cada celda contiene un valor atómico. |
| **2FN** | Estar en 1FN y cada atributo no clave depende de toda la clave primaria (no de una parte). |
| **3FN** | Estar en 2FN y cada atributo no clave depende solo de la clave primaria (no de otros atributos no clave). |
| **BCNF** | Variante más estricta de 3FN para evitar ciertas dependencias funcionales. |

**Ejemplo:** una tabla `Pedidos` con campos (id_pedido, id_cliente, nombre_cliente, producto) – el nombre_cliente depende de id_cliente, no de id_pedido, viola 3FN. Se normaliza separando `Clientes`.

---

### 🧩 Integración con el diseño orientado a objetos

- **Mapeo objeto‑relacional (ORM):** traduce clases a tablas. Estrategias comunes: tabla por clase, tabla por jerarquía, tabla por subclase.
- **Clases de persistencia:** en el diseño detallado, se definen objetos que encapsulan el acceso a datos (DAO – Data Access Objects).

---

### 🧪 Ejemplo práctico: sistema de reservas de hotel

**Modelo conceptual:**  
Entidades: `Cliente`, `Habitación`, `Reserva`.  
Relaciones: `Cliente` hace una `Reserva` para una `Habitación`.

**Modelo lógico relacional:**

```sql
CREATE TABLE Cliente (
    id_cliente INT PRIMARY KEY,
    nombre VARCHAR(100),
    email VARCHAR(100) UNIQUE
);

CREATE TABLE Habitacion (
    numero INT PRIMARY KEY,
    tipo VARCHAR(20),
    precio_noche DECIMAL(10,2)
);

CREATE TABLE Reserva (
    id_reserva INT PRIMARY KEY,
    id_cliente INT REFERENCES Cliente(id_cliente),
    numero_habitacion INT REFERENCES Habitacion(numero),
    fecha_inicio DATE,
    fecha_fin DATE,
    estado VARCHAR(20)
);
```

**Índices:** índice sobre `fecha_inicio` para consultas de disponibilidad; índice compuesto `(numero_habitacion, fecha_inicio, fecha_fin)`.

---

### ✅ Importancia

- Un buen diseño de datos evita **inconsistencias** y **anomalías** de actualización.
    
- Impacta directamente en el **rendimiento** (consultas rápidas) y **escalabilidad**.
    
- Facilita la **evolución** del sistema (agregar nuevos atributos sin romper aplicaciones existentes).
    
- Asegura la **integridad** de la información a largo plazo.
    
---

## 🃏 Flashcards para Anki

TARGET DECK: boveda informatica::sistemas informacion 2::temas::proceso desarrollo software::diseno estructura datos

START  
Básico  
Anverso: ¿Qué es el diseño de la estructura de datos?  
Reverso: Actividad que define cómo se almacenan, organizan y acceden los datos persistentes del sistema, incluyendo entidades, relaciones, restricciones y tecnología de base de datos.  
Tags: definicion  
END

START  
Básico  
Anverso: Menciona los pasos del diseño de la estructura de datos.  
Reverso: Modelo conceptual, modelo lógico, normalización (si relacional), restricciones, índices/optimización, seguridad.  
Tags: pasos  
END

START  
Básico (y tarjeta invertida)  
Anverso: Normalización (en bases de datos relacionales)  
Reverso: Proceso de organizar tablas para reducir redundancia y anomalías, aplicando formas normales (1FN, 2FN, 3FN, BCNF).  
Tags: normalizacion  
END

START  
Básico (y tarjeta invertida)  
Anverso: 1FN (Primera Forma Normal)  
Reverso: Eliminar grupos repetitivos; cada celda contiene un valor atómico.  
Tags: normalizacion  
END

START  
Básico (y tarjeta invertida)  
Anverso: 2FN (Segunda Forma Normal)  
Reverso: Estar en 1FN y cada atributo no clave depende de toda la clave primaria (no de una parte).  
Tags: normalizacion  
END

START  
Básico (y tarjeta invertida)  
Anverso: 3FN (Tercera Forma Normal)  
Reverso: Estar en 2FN y cada atributo no clave depende solo de la clave primaria (no de otros atributos no clave).  
Tags: normalizacion  
END

START  
Básico  
Anverso: ¿Qué restricciones se definen en el diseño de datos?  
Reverso: Claves primarias, claves foráneas, valores únicos, NOT NULL, reglas de negocio (CHECK), etc.  
Tags: restricciones  
END

START  
Básico  
Anverso: ¿Cómo se relaciona el diseño de datos con el diseño orientado a objetos?  
Reverso: Mediante mapeo objeto‑relacional (ORM), donde las clases se traducen a tablas y los objetos a registros.  
Tags: orm  
END

START  
Oclusión de imagen  
Texto: Las formas normales básicas son {{c1::1FN}}, {{c2::2FN}} y {{c3::3FN}}.  
Tags: normalizacion, cloze  
END

---

## 🔗 Enlaces a clases donde apareció este tema

- [[2026-03-13_presentacion-materia]] (se menciona dentro del contenido: "Diseño de la estructura de datos")
    
---

## 📚 Referencias y recursos

<!-- Referencias basadas en los índices proporcionados: - Laudon: capítulo 6 "Fundamentos de inteligencia de negocios: bases de datos y administración de la información" (página 214), secciones sobre diseño de bases de datos y normalización. - Pressman: capítulo 10 "Diseño en el nivel de componentes" (página 234) – incluye diseño de bases de datos como parte del diseño de componentes. - Kendall & Kendall: capítulo 13 "Diseño de bases de datos" (página 403) – explica normalización y modelo entidad‑relación. -->

- [[laudon-k-c_laudon-j-p_2016_sistemas-de-informacion-gerencial_14aed_pearson-educacion.pdf#page=214|Laudon & Laudon, capítulo 6 "Fundamentos de inteligencia de negocios: bases de datos y administración de la información"]] – Aborda diseño de bases de datos y normalización.
    
- [[pressman-r-s_maxin-b-r_2021_ingenieria-del-software-un-enfoque-practico_9aed_macgraw-hill-interamericana.pdf#page=234|Pressman & Maxim, capítulo 10 "Diseño en el nivel de componentes"]] – Incluye diseño de datos en el contexto de componentes.
    
- [[kendall-k-e_kendall-j-e_2011_analisis-y-diseño-de-sistemas_8aed_pearson-educacion.pdf#page=403|Kendall & Kendall, capítulo 13 "Diseño de bases de datos"]] – Explica normalización con ejemplos prácticos.