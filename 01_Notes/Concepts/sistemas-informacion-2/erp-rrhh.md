---
tipo: concepto
materia: sistemas-informacion-2
semestre: 7
fecha-creacion: 2026-04-07
dificultad: 🟢 baja
estado: 🔵 borrador
tags: [concepto]

---
%% ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
No borrar ni renombrar estos campos de arriba. Son meta-datos que se usan para algunas configuraciones no están pensados tanto para la lectura.

Los campos que si se pueden editar son:
Dificultad: 🟢 baja | 🟡 media | 🔴 alta
Estado: 🔵 borrador → 🟢 revisada cuando esté completa
%%
%% ============================================================
PLANTILLA: NOTA ATÓMICA DE CONCEPTO (Zettelkasten + Feynman)

CUÁNDO USARLA: Cada vez que procesás una clase y encontrás un concepto que merece su propio archivo.

DÓNDE GUARDARLA: 01_Notes/Concepts/[slug-materia]/

NOMBRE DE ARCHIVO RECOMENDADO:
 nombre-del-concepto (en minúsculas con guiones)
 ej: mrp-material-requirements-planning

REGLA FUNDAMENTAL: UNA nota = UNA sola idea. Si la nota toca dos conceptos → partila en dos notas separadas.

FLUJO DE USO (Método Feynman):

 1. Definición simple → como si se lo explicaras a alguien que no sabe nada
 2. Explicación técnica → la versión precisa y completa
 3. Ejemplo concreto → preferiblemente del parcial o proyecto actual
 4. Errores comunes → qué confunde a la gente con este concepto
 5. Flashcards → completar los bloques START/END y sincronizar con Anki
============================================================ %%

# ERP - Módulo de Recursos Humanos (RRHH)

## 📖 Definición simple

%%
Explicalo como si el que lo va a leer nunca oyó hablar del tema.

- Sin tecnicismos.
- Sin siglas sin explicar.
- Una o dos oraciones máximo.
- Si no podés hacerlo simple, todavía no lo entendiste del todo (Feynman dixit).
%%

Es la parte de un sistema ERP que se encarga de gestionar toda la información relacionada con los empleados de una empresa: datos personales, contratos, sueldos, asistencias, vacaciones, evaluaciones y capacitaciones. Automatiza las tareas administrativas de Recursos Humanos.

## 🧩 Explicación técnica

%%
Ahora sí la versión completa con términos técnicos, fórmulas, estructura, etc. Podés usar tablas:

- Listas
- Diagramas
- Bloques de código
- Tablas
- Imagenes
%%

El **módulo de RRHH dentro de un ERP** es un subsistema integrado que centraliza y automatiza los procesos de gestión del capital humano. A diferencia de sistemas HR aislados, el módulo de RRHH en un ERP comparte datos con otros módulos (contabilidad, nóminas, presupuestos, producción) para tener una visión única de la empresa.

**Funcionalidades típicas:**

| Subproceso | Descripción |
|------------|-------------|
| **Gestión de personal (administración)** | Expediente digital de empleados, documentación legal, organigrama, puestos y perfiles. |
| **Reclutamiento y selección** | Gestión de candidatos, currículums, entrevistas, ofertas. |
| **Control de asistencia** | Registro de horarios, horas extras, ausencias, vacaciones, licencias. |
| **Nómina (payroll)** | Cálculo de sueldos, deducciones, aportes a seguridad social, impuestos a las ganancias. |
| **Evaluación del desempeño** | Objetivos, revisiones anuales, feedback 360°. |
| **Capacitación y desarrollo** | Planes de formación, cursos, certificaciones. |
| **Autoservicio del empleado** | Portal donde el empleado puede solicitar vacaciones, ver recibos de sueldo, actualizar datos. |

**Integraciones clave:**
- Con **Contabilidad**: los costos de sueldos se registran automáticamente en las cuentas contables.
- Con **Producción**: la asignación de horas de trabajo a órdenes de producción se refleja en los costos.
- Con **Presupuestos**: control de gastos en personal vs. presupuesto anual.

**Ventajas de tener RRHH integrado en el ERP:**
- Un solo ingreso de datos (ej. alta de empleado → se actualiza automáticamente en contabilidad y nómina).
- Reportes consolidados (costo de personal por proyecto, departamento o país).
- Cumplimiento legal más sencillo (libros de sueldos digitales, declaraciones juradas).

## 🔗 Se conecta con

%%
Links a otras notas atómicas relacionadas.
Esto es lo que convierte tus notas en una red (Zettelkasten) en vez de una lista.

Agregá todos los conceptos que se relacionen con este.
%%

- [[sistemas-informacion-empresarial]]
- [[erp-contabilidad]]
- [[mrp-material-requirements-planning]]
- [[nomina-payroll]]
- [[gestion-talento]]

## 🌍 Ejemplo concreto

%%
Un caso real (puede ser codigo) sobre el concepto. Los ejemplos concretos son lo que hace que el concepto "enganche" en la memoria.
%%

**Caso: Empresa de software de 200 empleados**

Sin un ERP con módulo de RRHH integrado:
- El área de RRHH lleva un Excel con los datos de empleados.
- Control de asistencia: planillas manuales.
- Liquidación de sueldos: proceso separado, con riesgo de errores.
- Cuando un empleado cambia de puesto, hay que avisar manualmente a contabilidad y a proyectos.

Con el módulo de RRHH del ERP:
1. **Alta de nuevo empleado:** El responsable de RRHH ingresa sus datos una sola vez. El ERP genera automáticamente el legajo, lo asigna a la estructura de costos y lo vincula al presupuesto del área.
2. **Control horario:** Los empleados registran entrada/salida desde el portal de autoservicio o un reloj biométrico conectado al ERP. Las horas extras se calculan automáticamente según convenio.
3. **Liquidación de sueldos:** A fin de mes, el ERP consolida las asistencias, calcula los sueldos, deduce cargas sociales y genera los recibos de sueldo. Al mismo tiempo, contabiliza los gastos en la cuenta de "Sueldos y jornales".
4. **Autoservicio:** Los empleados pueden pedir vacaciones desde el portal; el ERP verifica días disponibles y envía la solicitud al supervisor. Una vez aprobada, actualiza el calendario y la contabilidad de provisiones.

Resultado: menos carga administrativa, menos errores, información en tiempo real para la toma de decisiones (ej. costo de personal por proyecto).

## ⚠️ Errores comunes

%%
¿Qué confunde a la gente con este concepto?
¿Con qué otro concepto se suele mezclar?
¿Qué pensabas vos antes de entenderlo bien?
%%

- **Pensar que el módulo de RRHH es solo para liquidar sueldos:** Abarca mucho más: reclutamiento, capacitación, evaluación de desempeño, clima laboral, etc.
- **Confundir un sistema de RRHH aislado con el módulo de RRHH de un ERP:** Un sistema HR standalone (ej. un software de nóminas) no tiene integración automática con contabilidad o producción, lo que duplica datos y genera desviaciones.
- **Creer que el módulo de RRHH elimina la necesidad de personal de RRHH:** Al contrario, libera a los profesionales de tareas administrativas para que se dediquen a lo estratégico (planificación de carrera, cultura organizacional).
- **Ignorar la seguridad y confidencialidad:** Los datos de sueldos y evaluaciones son sensibles; el ERP debe tener controles de acceso rigurosos.

---

## 🃏 Flashcards → Anki

%%
Cada bloque START/END = una tarjeta en Anki.

Regla: al menos 2 tarjetas por concepto.

- Una para la definición
- Una para un ejemplo o diferencia con otro concepto
  
Sincronizar: Anki abierto → Ctrl+P → "Obsidian to Anki: Sync"
%%

START
Básico
¿Qué es el módulo de RRHH en un ERP?
Back: Es el subsistema que gestiona datos de empleados, contratos, sueldos, asistencias, vacaciones, evaluaciones y capacitaciones, integrado con contabilidad y otros módulos.
Tags: sistemas-informacion-2 concepto
END

START
Básico
¿Cuál es la diferencia entre un sistema de RRHH aislado y el módulo de RRHH de un ERP?
Back: El módulo de RRHH del ERP está integrado con contabilidad, presupuestos y producción, evitando duplicación de datos y permitiendo reportes consolidados de costos de personal.
Tags: sistemas-informacion-2 concepto diferencia
END

START
Básico
Menciona al menos tres funcionalidades del módulo de RRHH en un ERP.
Back: Gestión de personal (expedientes), control de asistencia, nómina (payroll), reclutamiento, evaluación de desempeño, capacitación, autoservicio del empleado. (Cualesquiera tres).
Tags: sistemas-informacion-2 concepto
END

START
Básico
Pon un ejemplo concreto de cómo el módulo de RRHH integrado mejora la liquidación de sueldos.
Back: El ERP consolida automáticamente las asistencias registradas (horas normales y extras), calcula sueldos y deducciones, genera recibos, y contabiliza los gastos en la cuenta contable correspondiente, todo sin intervención manual.
Tags: sistemas-informacion-2 concepto ejemplo
END