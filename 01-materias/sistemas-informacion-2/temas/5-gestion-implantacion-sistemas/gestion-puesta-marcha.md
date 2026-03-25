---
tipo: tema
materia: sistemas-informacion-2
dificultad: 🟢 baja
estado: 📖 en-progreso
tags: [implantacion, migracion, capacitacion, explotacion, puesta-marcha]
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
# Gestión de puesta en marcha

---

## 🧠 Desarrollo del concepto

**Definición:**  

La gestión de puesta en marcha (también llamada implantación, despliegue o puesta en producción) es la fase final del desarrollo donde el software construido se instala en el entorno productivo, se migran los datos, se capacita a los usuarios y se inicia la operación real. Su objetivo es lograr una transición fluida y minimizar las interrupciones en la organización.

---

### 🔁 Actividades principales de la puesta en marcha

| Actividad | Descripción |
|-----------|-------------|
| **Planificación de la implantación** | Definir cronograma, recursos, responsables, estrategia de conversión. |
| **Preparación del entorno** | Configurar servidores, redes, bases de datos, permisos, herramientas de monitoreo. |
| **Migración de datos** | Trasladar datos del sistema antiguo al nuevo (limpieza, transformación, validación). |
| **Pruebas de aceptación** | Verificar en el entorno real que el sistema cumple los requisitos (UAT – User Acceptance Testing). |
| **Capacitación** | Formar a los usuarios finales, administradores y personal de soporte. |
| **Conversión** | Sustituir el sistema antiguo por el nuevo (ver estrategias abajo). |
| **Despliegue** | Instalar y activar el sistema en producción. |
| **Soporte inicial** | Asistencia intensiva durante los primeros días/semanas para resolver incidencias. |

---

### 🧭 Estrategias de conversión

| Estrategia | Descripción | Ventajas | Riesgos |
|------------|-------------|----------|---------|
| **Directa (big bang)** | Se apaga el sistema antiguo y se enciende el nuevo de una vez. | Rápida, menor coste. | Alto riesgo si falla. |
| **Paralela** | Ambos sistemas operan juntos hasta que el nuevo está validado. | Seguridad; posibilidad de volver atrás. | Coste elevado (mantener dos sistemas). |
| **Pilotaje** | Se implanta primero en una unidad o sucursal, luego se extiende. | Permite aprender y ajustar antes de escalar. | Puede generar resistencia si la unidad piloto falla. |
| **Faseada (por módulos)** | Se reemplaza el sistema por partes (módulo a módulo). | Riesgo controlado, facilita la capacitación. | Requiere interfaces temporales entre módulos. |

---

### 👩‍🏫 Capacitación

**Niveles de usuarios:**

| Nivel | Contenido |
|-------|-----------|
| **Usuarios finales** | Cómo realizar sus tareas diarias (registrar ventas, generar informes, etc.). |
| **Administradores** | Gestión de usuarios, respaldos, monitoreo, configuración. |
| **Soporte técnico** | Resolución de incidencias comunes, escalamiento. |

**Formatos:** manuales de usuario, guías rápidas, videos tutoriales, sesiones presenciales, capacitación en línea.

---

### 📈 Explotación y mantenimiento

Una vez en producción, comienza la fase de **explotación**:

- **Soporte continuo:** atención de incidencias, resolución de errores.
- **Mantenimiento correctivo:** arreglar defectos detectados en producción.
- **Mantenimiento adaptativo:** adaptar el software a cambios en el entorno (nuevo sistema operativo, nuevas leyes).
- **Mantenimiento perfectivo:** mejoras solicitadas por los usuarios (nuevas funcionalidades).

---

### 🧪 Ejemplo práctico: implantación de un sistema de facturación electrónica

1. **Planificación:** se define una conversión paralela durante 15 días.
2. **Preparación:** se configura el servidor en la nube, se instala la base de datos.
3. **Migración:** se exportan clientes y productos del sistema antiguo; se validan 100 registros aleatorios.
4. **Capacitación:** dos sesiones de 2 horas con el equipo de facturación; manuales disponibles en la intranet.
5. **Pruebas de aceptación:** los usuarios facturan 20 casos reales en paralelo con el sistema antiguo y nuevo.
6. **Conversión paralela:** durante dos semanas, ambos sistemas operan; cada noche se comparan resultados.
7. **Soporte inicial:** un analista se sienta con los usuarios los primeros tres días.
8. **Desactivación del sistema antiguo:** tras 15 días sin discrepancias, se apaga.

---

### ✅ Importancia

- Una mala implantación puede arruinar un proyecto técnicamente perfecto.
- Reduce la resistencia al cambio y acelera la adopción.
- Asegura la continuidad del negocio durante la transición.

---

## 🃏 Flashcards para Anki

TARGET DECK: boveda informatica::sistemas informacion 2::temas::gestion implantacion::gestion puesta marcha

START
Básico
Anverso: ¿Qué es la gestión de puesta en marcha?
Reverso: Fase final donde se instala el software en producción, se migran datos, se capacita usuarios y se inicia la operación real.
Tags: definicion
END

START
Básico
Anverso: Menciona tres actividades principales de la puesta en marcha.
Reverso: Planificación de implantación, migración de datos, capacitación, conversión, soporte inicial.
Tags: actividades
END

START
Básico (y tarjeta invertida)
Anverso: Conversión directa (big bang)
Reverso: Se apaga el sistema antiguo y se enciende el nuevo de una vez. Rápida pero de alto riesgo.
Tags: estrategias
END

START
Básico (y tarjeta invertida)
Anverso: Conversión paralela
Reverso: Ambos sistemas operan juntos hasta validar el nuevo. Segura pero costosa.
Tags: estrategias
END

START
Básico (y tarjeta invertida)
Anverso: Conversión por pilotaje
Reverso: Se implanta primero en una unidad piloto, luego se extiende. Permite aprender antes de escalar.
Tags: estrategias
END

START
Básico (y tarjeta invertida)
Anverso: Conversión faseada
Reverso: Se reemplaza el sistema por módulos. Riesgo controlado, requiere interfaces temporales.
Tags: estrategias
END

START
Básico
Anverso: ¿Qué se capacita a los usuarios finales?
Reverso: Cómo realizar sus tareas diarias en el nuevo sistema (registrar ventas, generar informes, etc.).
Tags: capacitacion
END

START
Básico
Anverso: ¿Qué tipos de mantenimiento existen después de la puesta en marcha?
Reverso: Correctivo (errores), adaptativo (cambios de entorno), perfectivo (mejoras).
Tags: mantenimiento
END

START
Oclusión de imagen
Texto: Las estrategias de conversión son {{c1::directa}}, {{c2::paralela}}, {{c3::pilotaje}} y {{c4::faseada}}.
Tags: estrategias, cloze
END

---

## 🔗 Enlaces a clases donde apareció este tema

- [[2026-03-13_presentacion-materia]] (se menciona dentro del contenido: "Gestión de puesta en marcha")
- [[2026-03-11 — Creación e instrucción de los grupos]] (contexto de proyecto)

---

## 📚 Referencias y recursos

<!--
  Referencias basadas en los índices proporcionados:
  - Laudon: capítulo 13 "Creación de sistemas de información" (página 500) – sección sobre implantación y conversión.
  - Pressman: capítulo 2 "Modelos del proceso" (página 26) – incluye fases de despliegue.
  - Kendall & Kendall: capítulo 16 "Aseguramiento e implementación de la calidad" (página 515) – conversión, capacitación, estrategias.
-->

- [[laudon-k-c_laudon-j-p_2016_sistemas-de-informacion-gerencial_14aed_pearson-educacion.pdf#page=500|Laudon & Laudon, capítulo 13 "Creación de sistemas de información"]] – Aborda implantación, conversión y capacitación.
- [[pressman-r-s_maxin-b-r_2021_ingenieria-del-software-un-enfoque-practico_9aed_macgraw-hill-interamericana.pdf#page=26|Pressman & Maxim, capítulo 2 "Modelos del proceso"]] – Fase de despliegue en modelos de proceso.
- [[kendall-k-e_kendall-j-e_2011_analisis-y-diseño-de-sistemas_8aed_pearson-educacion.pdf#page=515|Kendall & Kendall, capítulo 16 "Aseguramiento e implementación de la calidad"]] – Estrategias de conversión y capacitación.