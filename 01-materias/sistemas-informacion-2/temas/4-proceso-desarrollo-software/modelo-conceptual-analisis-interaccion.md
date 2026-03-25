---
tipo: tema
materia: sistemas-informacion-2
dificultad: 🟢 baja
estado: 📖 en-progreso
tags: [modelo-conceptual, analisis-interaccion, diagramas-clases, diagramas-secuencia]
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
# Modelo conceptual y análisis de interacción

---

## 🧠 Desarrollo del concepto

**Definición:**  

El **modelo conceptual** (también llamado modelo de dominio) es una representación de las entidades, conceptos y relaciones relevantes del problema que se está resolviendo, independiente de la tecnología. Se construye durante el análisis orientado a objetos para establecer un vocabulario común entre analistas, usuarios y desarrolladores.

El **análisis de interacción** complementa al modelo conceptual mostrando cómo los objetos colaboran para realizar los casos de uso, mediante diagramas de secuencia o comunicación (UML).

---

### 🧩 Modelo conceptual

**Propósito:**
- Identificar las clases conceptuales del dominio (no clases de software).
- Establecer atributos relevantes y relaciones entre conceptos.
- Servir como base para el diseño de la arquitectura y el código.

**Elementos típicos:**

| Elemento | Descripción | Ejemplo |
|----------|-------------|---------|
| **Clase conceptual** | Entidad del mundo real con significado en el negocio. | `Venta`, `Producto`, `Cliente`. |
| **Atributo** | Propiedad descriptiva de una clase. | `fecha`, `total`, `nombre`. |
| **Relación** | Vínculo entre clases (asociación, composición, agregación, herencia). | Una `Venta` tiene una `Lista de Productos`. |

**Notación:** se utilizan diagramas de clases UML (versión conceptual) sin métodos, solo atributos y relaciones.

---

### 🔄 Análisis de interacción

**Propósito:**
- Mostrar cómo los objetos (instancias de las clases conceptuales) colaboran para cumplir con un escenario (caso de uso).
- Identificar responsabilidades, mensajes y el flujo de información.

**Técnicas principales:**

| Técnica | Descripción |
|---------|-------------|
| **Diagrama de secuencia** | Representa la interacción temporal: líneas de vida, mensajes secuenciales, creación/destrucción de objetos. |
| **Diagrama de comunicación** | Enfatiza las relaciones estructurales entre objetos; los mensajes se numeran para indicar orden. |

**Elementos clave:**
- **Actores:** pueden iniciar la interacción.
- **Objetos:** instancias de clases conceptuales.
- **Mensajes:** acciones que un objeto solicita a otro (p.ej., `calcularTotal()`, `guardarVenta()`).
- **Línea de vida:** duración de un objeto en la interacción.

---

### 🧪 Ejemplo práctico (caso de uso “Registrar venta”)

**Modelo conceptual:**

```plaintext
[Cliente]           [Venta]                 [Producto]
- nombre            - fecha                  - codigo
- direccion         - total                  - descripcion
                    - estaPagada             - precio
```

**Relaciones:** Una `Venta` tiene uno o varios `Producto`; un `Cliente` realiza una `Venta`.

**Diagrama de secuencia (fragmento):**

```text
Cliente       :InterfazVenta      :ControladorVenta      :Venta      :Producto
   |                |                     |                |            |
   |--selecciona-->|                     |                |            |
   |                |--crearVenta()----->|                |            |
   |                |                     |--new()------->|            |
   |                |                     |                |            |
   |                |--agregarProducto(p)---------------->|            |
   |                |                     |                |--buscar(p)|
   |                |                     |                |           |--->[retorna]
   |                |                     |                |--actualizarStock()
   |                |                     |                |            |
   |                |--calcularTotal()------------------->|            |
   |                |                     |                |--[retorna total]
   |--[muestra total]|                     |                |            |

```

**Interpretación:** El cliente interactúa con la interfaz, ésta delega en un controlador, que coordina la creación de la venta y la adición de productos; el cálculo del total se obtiene del objeto `Venta`.

---

### ✅ Importancia

- El **modelo conceptual** ayuda a entender el dominio y reduce ambigüedades.
    
- El **análisis de interacción** valida el modelo conceptual al descubrir si las colaboraciones son posibles.
    
- Juntos facilitan la transición del análisis al diseño orientado a objetos.
    
- Son la base para generar código y pruebas.
    
---

## 🃏 Flashcards para Anki

TARGET DECK: boveda informatica::sistemas informacion 2::temas::proceso desarrollo software::modelo conceptual analisis interaccion

START  
Básico  
Anverso: ¿Qué es un modelo conceptual (o modelo de dominio)?  
Reverso: Representación de las entidades, conceptos y relaciones relevantes del problema, independiente de la tecnología. Se expresa con diagramas de clases UML conceptuales.  
Tags: definicion, modelo-conceptual  
END

START  
Básico  
Anverso: ¿Qué elementos incluye un modelo conceptual?  
Reverso: Clases conceptuales, atributos, relaciones (asociaciones, composición, agregación, herencia).  
Tags: modelo-conceptual  
END

START  
Básico (y tarjeta invertida)  
Anverso: Diagrama de secuencia (UML)  
Reverso: Muestra la interacción temporal entre objetos mediante mensajes secuenciales; cada objeto tiene una línea de vida.  
Tags: analisis-interaccion  
END

START  
Básico (y tarjeta invertida)  
Anverso: Diagrama de comunicación (UML)  
Reverso: Enfatiza las relaciones estructurales entre objetos; los mensajes se numeran para indicar el orden.  
Tags: analisis-interaccion  
END

START  
Básico  
Anverso: ¿Cuál es el propósito del análisis de interacción?  
Reverso: Mostrar cómo los objetos colaboran para realizar un caso de uso, validando el modelo conceptual y descubriendo responsabilidades.  
Tags: analisis-interaccion  
END

START  
Básico (y tarjeta invertida)  
Anverso: ¿Qué papel tienen los mensajes en un diagrama de secuencia?  
Reverso: Representan acciones que un objeto solicita a otro, con parámetros y posible retorno.  
Tags: mensajes  
END

START  
Básico  
Anverso: ¿Cuál es la relación entre modelo conceptual y análisis de interacción?  
Reverso: El modelo conceptual define las clases y relaciones; el análisis de interacción muestra cómo sus instancias colaboran para cumplir los casos de uso.  
Tags: relacion  
END

START  
Oclusión de imagen  
Texto: En el análisis de interacción, el diagrama de {{c1::secuencia}} enfatiza el orden temporal; el de {{c2::comunicación}} enfatiza las relaciones estructurales.  
Tags: diagramas, cloze  
END

---

## 🔗 Enlaces a clases donde apareció este tema

- [[2026-03-13_presentacion-materia]] (se menciona dentro del contenido: "Modelo conceptual y análisis de interacción")
    

---

## 📚 Referencias y recursos

<!-- Referencias basadas en los índices proporcionados: - Larman: capítulos 10, 11 y 12 sobre modelo de dominio y diagramas de secuencia. - Pressman: capítulo 6 "Modelado de los requerimientos: escenarios, información y clases de análisis" (página 126). - Debrauwer: capítulos sobre diagramas de clases y secuencia. -->

- [[larman-c_2003_uml-y-patrones-una-introduccion-al-analisis-y-diseño-orientado-a-objetos-y-al-proceso-unificado_2aed_pearson-educacion.pdf|Larman, C. (2003). UML y patrones]] – Explica el modelo conceptual (cap. 10) y los diagramas de secuencia (cap. 11) en el contexto del análisis.
    
- [[pressman-r-s_maxin-b-r_2021_ingenieria-del-software-un-enfoque-practico_9aed_macgraw-hill-interamericana.pdf#page=126|Pressman & Maxim, capítulo 6 "Modelado de los requerimientos: escenarios, información y clases de análisis"]] – Incluye modelado conceptual y de interacción.
    
- [[debrauwer-l_van-der-heyde-f_2016_uml-2-5-iniciacion-ejemplos-y-ejercicios-corregidos_4aed_ediciones-eni.pdf|Debrauwer & Van der Heyde, UML 2.5]] – Referencia práctica para diagramas de clases y secuencia.