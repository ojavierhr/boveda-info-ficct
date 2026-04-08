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

# Reportes eficientes en sistemas de información

## 📖 Definición simple

%%
Explicalo como si el que lo va a leer nunca oyó hablar del tema.

- Sin tecnicismos.
- Sin siglas sin explicar.
- Una o dos oraciones máximo.
- Si no podés hacerlo simple, todavía no lo entendiste del todo (Feynman dixit).
%%

Los reportes eficientes son informes automáticos que el sistema genera para mostrar datos clave de su funcionamiento: cuántas emergencias hubo, cuánto se tardó en responder, cuánto dinero ganó cada taller. Son "eficientes" porque se producen rápido, se pueden filtrar por fechas, y ayudan a tomar decisiones (ej. qué talleres son más rápidos, qué tipo de incidente es más común).

## 🧩 Explicación técnica

%%
Ahora sí la versión completa con términos técnicos, fórmulas, estructura, etc. Podés usar tablas:

- Listas
- Diagramas
- Bloques de código
- Tablas
- Imagenes
%%

En el contexto del sistema de auxilio mecánico, los **reportes eficientes** son consultas predefinidas o dinámicas que extraen datos de la base de datos (PostgreSQL) y los presentan en formato tabular, gráfico o exportable (CSV, Excel). Deben cumplir con:

- **Rapidez de ejecución:** Usar índices, vistas materializadas o agregaciones periódicas.
- **Filtros y parámetros:** Por rango de fechas, taller, tipo de incidente, ciudad, etc.
- **Visualización clara:** Tablas, gráficos de barras, líneas de evolución.
- **Acceso por roles:** Administrador ve todos; taller solo sus propios datos.

### Reportes obligatorios en el parcial

| Reporte | Descripción | Consulta SQL ejemplo |
|---------|-------------|----------------------|
| **Número de incidentes por tipo** | Cantidad de emergencias clasificadas como batería, llanta, choque, motor, otro. | `SELECT tipo_incidente, COUNT(*) FROM incidentes GROUP BY tipo_incidente;` |
| **Tiempo medio de respuesta** | Promedio de minutos desde que el cliente reporta hasta que el taller acepta (o llega). | `SELECT AVG(EXTRACT(EPOCH FROM (aceptado_at - creado_at))/60) FROM incidentes;` |
| **Ingresos por taller** | Suma de montos pagados a cada taller (monto_total - comisión). | `SELECT taller_id, SUM(monto_taller) FROM pagos GROUP BY taller_id;` |
| **Calificación promedio de talleres** | Promedio de estrellas recibidas por cada taller. | `SELECT taller_id, AVG(puntuacion) FROM calificaciones_cliente_taller GROUP BY taller_id;` |
| **Incidentes por rango horario** | Distribución de emergencias por hora del día (para planificar turnos). | `SELECT EXTRACT(HOUR FROM creado_at) as hora, COUNT(*) FROM incidentes GROUP BY hora;` |

### Eficiencia: buenas prácticas

- **Índices:** Crear índices en columnas usadas en `WHERE`, `GROUP BY`, `ORDER BY` (ej. `fecha`, `taller_id`).
- **Vistas materializadas:** Si el reporte es pesado y se consulta frecuentemente, usar una vista materializada que se refresque periódicamente.
- **Agregaciones programadas:** Para dashboards en tiempo real, se pueden precalcular totales cada hora (tablas de resumen).
- **Paginación y límites:** No devolver 100,000 filas de una vez; usar `LIMIT` y `OFFSET` o filtros por fecha.
- **Almacenamiento de reportes:** Opcionalmente guardar reportes generados (PDF, Excel) en la nube (S3) para consulta posterior.

### Implementación en FastAPI

```python
from fastapi import APIRouter, Depends, Query
from sqlalchemy import func

router = APIRouter()

@router.get("/reportes/incidentes-por-tipo")
def incidentes_por_tipo(
    fecha_desde: date = Query(...),
    fecha_hasta: date = Query(...),
    db: Session = Depends(get_db)
):
    resultados = db.query(
        Incidente.tipo,
        func.count(Incidente.id)
    ).filter(
        Incidente.fecha.between(fecha_desde, fecha_hasta)
    ).group_by(Incidente.tipo).all()
    
    return [{"tipo": t, "cantidad": c} for t, c in resultados]
```

### Exportación a Excel/CSV

- CSV: usar `csv.writer` o `pandas`.
    
- Excel: usar librería `openpyxl` o `xlsxwriter`. Se puede enviar el archivo como `Response` con `media_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"`.
    

## 🔗 Se conecta con

%%  
Links a otras notas atómicas relacionadas.  
Esto es lo que convierte tus notas en una red (Zettelkasten) en vez de una lista.

Agregá todos los conceptos que se relacionen con este.  
%%

- [[sistema-auxilio-mecanico-flujo]]
    
- [[motor-asignacion-talleres]]
    
- [[doble-calificacion-sistemas]]
    
- [[pasarela-pagos-integracion]]
    
- [[stack-flutter-angular-fastapi]]
    
- [[optimizacion-consultas-sql]]
    

## 🌍 Ejemplo concreto

%%  
Un caso real (puede ser codigo) sobre el concepto. Los ejemplos concretos son lo que hace que el concepto "enganche" en la memoria.  
%%

**Caso: Dashboard del administrador en el sistema de auxilio mecánico**

El administrador necesita tomar decisiones sobre promociones y contratación de talleres. Usa los reportes:

1. **Incidentes por tipo (últimos 30 días):**
    
    - Batería: 45
        
    - Llanta: 30
        
    - Choque: 12
        
    - Motor: 8
        
    - Otro: 5  
        → Conclusión: las baterías son el problema más común. Se puede promocionar un descuento en ese servicio.
        
2. **Tiempo medio de respuesta por taller:**
    
    - Taller A: 12 minutos
        
    - Taller B: 25 minutos
        
    - Taller C: 18 minutos  
        → Taller A es el más rápido. El motor de asignación ya lo favorece por distancia, pero se puede ajustar el peso de reputación.
        
3. **Ingresos por taller (mes actual):**
    
    - Taller A: Bs. 4,500
        
    - Taller B: Bs. 2,800
        
    - Taller C: Bs. 3,200  
        → Taller A genera más ingresos; se le puede ofrecer una comisión reducida para mantenerlo activo.
        
4. **Incidentes por hora del día:**
    
    - 8-10 am: pico (20 incidentes)
        
    - 6-8 pm: segundo pico (15 incidentes)  
        → Se sugiere reforzar turnos en esos horarios.
        

El administrador puede exportar estos reportes a Excel y enviarlos por email al equipo.

## ⚠️ Errores comunes

%%  
¿Qué confunde a la gente con este concepto?  
¿Con qué otro concepto se suele mezclar?  
¿Qué pensabas vos antes de entenderlo bien?  
%%

- **Reportes ineficientes (lentos):** Hacer consultas sin índices o sobre millones de registros en tiempo real puede hacer que el dashboard demore minutos. Hay que optimizar.
    
- **No permitir filtros:** Un reporte fijo (ej. "incidentes de siempre") es poco útil. Debe permitir fechas, talleres, etc.
    
- **Mostrar datos sin contexto:** Un número solo (ej. 120 incidentes) no dice nada sin comparación (vs mes anterior, vs promedio). Agregar gráficos de evolución ayuda.
    
- **Ignorar la seguridad:** Los talleres solo deben ver sus propios ingresos y calificaciones, no los de la competencia. El backend debe validar roles.
    
- **No exportar datos:** A veces el usuario necesita procesar los datos fuera del sistema (Excel). Ofrecer exportación es valor agregado.
    

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
¿Qué son los reportes eficientes en el sistema de auxilio mecánico?  
Back: Son informes automáticos que muestran métricas clave (incidentes por tipo, tiempo de respuesta, ingresos por taller, calificaciones) con rapidez, filtros y posibilidad de exportación.  
Tags: sistemas-informacion-2 concepto  
END

START  
Básico  
Menciona al menos tres reportes obligatorios en el parcial.  
Back: Número de incidentes por tipo, tiempo medio de respuesta, ingresos por taller, calificación promedio de talleres, incidentes por rango horario.  
Tags: sistemas-informacion-2 concepto  
END

START  
Básico  
¿Cómo se puede mejorar la eficiencia de un reporte pesado?  
Back: Usando índices en las columnas filtradas, vistas materializadas, agregaciones periódicas (tablas de resumen) y paginación.  
Tags: sistemas-informacion-2 concepto  
END

START  
Básico  
Describe un ejemplo de uso de reportes para tomar una decisión de negocio.  
Back: El administrador ve que los incidentes de batería son los más comunes (45 en 30 días) y decide lanzar una promoción de descuento en ese servicio.  
Tags: sistemas-informacion-2 concepto ejemplo  
END