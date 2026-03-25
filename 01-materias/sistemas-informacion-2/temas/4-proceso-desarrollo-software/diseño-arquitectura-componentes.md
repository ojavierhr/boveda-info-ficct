
**Comunicación:**  
`ControladorWeb` llama a `ServicioPedidos`, que a su vez usa `RepositorioProductos` para validar stock y `RepositorioPedidos` para persistir. Los repositorios encapsulan SQL.

---

### ✅ Beneficios de un buen diseño arquitectónico y de componentes

- **Mantenibilidad:** cambios localizados, fácil evolución.
- **Escalabilidad:** se pueden escalar componentes independientemente.
- **Reutilización:** componentes pueden ser usados en otros sistemas.
- **Pruebas:** componentes con interfaces claras son más fáciles de probar en aislamiento.

---

## 🃏 Flashcards para Anki

TARGET DECK: boveda informatica::sistemas informacion 2::temas::proceso desarrollo software::diseno arquitectura componentes

START
Básico
Anverso: ¿Qué es el diseño de la arquitectura?
Reverso: Definición de la estructura de alto nivel del software, estilos arquitectónicos, vistas y organización general de los componentes.
Tags: definicion, arquitectura
END

START
Básico
Anverso: ¿Qué es un componente software?
Reverso: Unidad independiente que encapsula funciones relacionadas y expone una interfaz bien definida.
Tags: definicion, componentes
END

START
Básico
Anverso: Menciona dos principios clave en el diseño de componentes.
Reverso: Alta cohesión (responsabilidades relacionadas) y bajo acoplamiento (mínima dependencia entre componentes).
Tags: principios
END

START
Básico (y tarjeta invertida)
Anverso: Patrón MVC
Reverso: Modelo (datos), Vista (presentación), Controlador (lógica de control). Separa responsabilidades en aplicaciones web.
Tags: patrones
END

START
Básico (y tarjeta invertida)
Anverso: Patrón DAO (Data Access Object)
Reverso: Abstrae el acceso a la base de datos, encapsulando operaciones CRUD.
Tags: patrones
END

START
Básico (y tarjeta invertida)
Anverso: Patrón Fachada (Facade)
Reverso: Provee una interfaz simplificada a un subsistema complejo.
Tags: patrones
END

START
Básico (y tarjeta invertida)
Anverso: Inyección de dependencias
Reverso: Las dependencias de un componente se pasan externamente (por constructor o setter) en lugar de crearlas internamente.
Tags: principios
END

START
Básico
Anverso: ¿Qué artefactos se generan en el diseño de arquitectura?
Reverso: Diagrama de componentes, diagrama de despliegue, especificación arquitectónica.
Tags: artefactos
END

START
Básico
Anverso: ¿Cuál es la diferencia entre arquitectura y diseño de componentes?
Reverso: Arquitectura define la estructura global y los estilos; diseño de componentes detalla las piezas individuales, sus interfaces y responsabilidades.
Tags: comparacion
END

START
Oclusión de imagen
Texto: Los principios clave del diseño de componentes son {{c1::alta cohesión}} y {{c2::bajo acoplamiento}}.
Tags: principios, cloze
END

---

## 🔗 Enlaces a clases donde apareció este tema

- [[2026-03-13_presentacion-materia]] (se menciona dentro del contenido: "Diseño de la arquitectura y componentes")

---

## 📚 Referencias y recursos

<!--
  Referencias basadas en los índices proporcionados:
  - Pressman: capítulo 9 "Diseño de la arquitectura" (página 206) y capítulo 10 "Diseño en el nivel de componentes" (página 234).
  - Laudon: capítulo 13 "Creación de sistemas de información" (página 500) menciona arquitectura de sistemas.
  - Larman: capítulos sobre diseño de objetos y patrones GRASP.
-->

- [[pressman-r-s_maxin-b-r_2021_ingenieria-del-software-un-enfoque-practico_9aed_macgraw-hill-interamericana.pdf#page=206|Pressman & Maxim, capítulo 9 "Diseño de la arquitectura"]] – Estilos, patrones y evaluación arquitectónica.
- [[pressman-r-s_maxin-b-r_2021_ingenieria-del-software-un-enfoque-practico_9aed_macgraw-hill-interamericana.pdf#page=234|Pressman & Maxim, capítulo 10 "Diseño en el nivel de componentes"]] – Principios, cohesión, acoplamiento, patrones de componentes.
- [[larman-c_2003_uml-y-patrones-una-introduccion-al-analisis-y-diseño-orientado-a-objetos-y-al-proceso-unificado_2aed_pearson-educacion.pdf|Larman, C. (2003). UML y patrones]] – Patrones GRASP y diseño orientado a objetos.