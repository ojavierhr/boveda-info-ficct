---
tipo: clase
materia: redes-1
semestre: 2/2026
fecha: 2026-08-11
docente: Víctor Fernando Monrroy Dipp
estado: 🟢 procesada
tags:
  - clase
  - redes-1
---

%% ↑↑↑↑↑↑↑↑↑↑↑↑
No borrar ni renombrar estos campos de arriba. Son meta-datos que se usan para algunas configuraciones no están pensados tanto para la lectura.
Los campos que sí se pueden editar son:
- estado: 🟡 sin-revisar → 🟢 procesada (cuando completes preguntas + resumen + conceptos)
- tags: agregar etiquetas adicionales si quieres
%%
%% ============================================================
PLANTILLA: NOTA DE CLASE (formato Cornell)
CUÁNDO USARLA: Al inicio de cada clase. Una nota por sesión.
DÓNDE GUARDARLA: 01_Notes/Lectures/[slug-materia]/
NOMBRE DE ARCHIVO GENERADO AUTOMÁTICAMENTE: clase-YYYY-MM-DD-tema-central
FLUJO DE USO:
 1. Durante la clase → completar solo "Notas de Clase"
 2. Post-clase → completar "Preguntas" y "Resumen" SIN mirar las notas
 3. Después → crear las notas atómicas marcadas en "Conceptos para procesar"
 4. Cambiar estado a 🟢 procesada cuando todo esté hecho
============================================================ %%

# Clase 2026-08-11 Introduccion a las Redes

## 📋 Información

- **Materia:** `=this.materia`
- **Docente:** `=this.docente`

---

## 📝 Notas de Clase

%% 
ZONA DE CAPTURA
Durante la clase, escribís aquí todo lo que el docente dice. No te preocupes por la estructura. Capturá todo sin filtrar.
Podés usar: viñetas, código, tablas, lo que sea más rápido.
%%
### ¿Que es una red?

Según el diccionario español:

- Aparejo hecho con hilos, cuerdas o alambres trabajados en forma de mallas, y convenientemente dispuesto para pescar, cazar, cercar, sujetar, etc.
  
- En el ambito de la informatica es un conjunto de computadoras o de equipos informaticos conectados entre si y que pueden intercambiar informacion

Siendo esta ultima la definicion con la que naceria el termino en los años 60 pero que tal vez hoy en dia queda corto.

### ¿Que es conexión?

Es el mecanismo por el cual se pueda transportar la informacion de un punto de origen a uno de destino.

Refiriendonos a los inicio de las redes en los años 60, una de las primeras formas de intercambiar informacion era usar un medio de almacenamiento fisico que se conoce como cinta magnetica. Estas cintas al pasar por imanges pueden generar campos electromagneticos variables que al poder responder a 0 y 1 permiten guardar informacion. Entonces para leer la cinta se la pasa cerca de una bovina con carga magnetica que al girar la cinta permite genera por induccion variaciones de corriente que mediante amplificadores permiten ser suficiente para trabajar. Entonces la forma de transportar la informacion era compiar la informacion en estas cintas y trasladarlas fisicamente a otro ordenador en el que se podria manipular. Este medio fisico puede ser propenso a perdidas o daños por ciertos tipos de radiaciones o interferencias electromagneticas. Otro dispocitivos para trasladar informacion son los discos electromagneticos cuyo forma de transmitir era por propiedades magneticas como los diskets. los CD, DVD que transmitian informacion mediante perforaciones fisicas pero disminutas en la superficie de los discos y los actualmente mas usados memorias flash que transmiten la informacion mediante compuestas electricas llamadas registros.

Pero aqui estamos ablando de transporte de informacion pero no de una coneccion real entre varios ordenador donde tendriamos que pensar en un medio que brinde soporte para la transmision y recepcion de informacion de un grupo de equipos conectados a travez de un switch que brindaria el medio de comunicacion para esto a travez de puertos. A esto es lo que llamamos "conexion"

Entonces podemos hablar de conceptos como paquetes de informacion (forma de agrupar la informacion de manera digital), direccion de recepcion y transmicion de informacion (para saber asegurar que la inforamcion no termine en otros equipos), sitch, router, cable modem, redes, subredes, coneccion cableada, inalambrica, etc.

### ¿Que otros usos tienen las redes?

- Las empresas suelen usar redes locales para gestionar el uso de dispositivos compartidos como base de datos, impresoras, escaneres, altavocez, etc. Y asi por ejemplo se puede evitar el coste operatvo de comprar individualmente para cada equipo. Tambien para asegurar la seguridad, centralización y privacidad de los datos de la empresa
  
-  Las redes domesticas permiten acceso a internet y con ello comuncarse, entretenerse, trabajar, estudiar, publicitarse, etc.
  
- Las redes moviles a la par de las domesticas permiten tal vez ademas de sus analogos mas portabilidad y coneccion continua.

### ¿Como Funciona el Hardware a Nivel de Red?

Este aspecto tal vez fue el primer obstaculo al que se encontraron al hablar de redes, por que por ejemplo para conectar un dispositivo desde una casa a la red de su banco financiero no seria conveniente arrastrar un cable que conecte directamente todo.

Entonces al hablar de tipos de hardware de red no referimos a:

- De difusion (Broadcast): No concectan equipos de manera fisica solamente.
  
- De punto a punto: Permite la coneccion de equipos de manera fisica.

### ¿Que tipos de redes hay segun su alcance?

- PAN para distancias menores a 1m para conecciones muy proximas por ejemplo bluethooth que permite una cierta cantidad de dispositivos conectados y una cierta distancia.
  
- LAN pra distancias de 10 a 100 metros para conecciones dentro de edificios o infraestructuras.
  
- MAN para distancias aprox de 10 km para por ejemplo ciudades. Se la puede ver como una  red de redes LAN y ya se habla de subredes.
  
- WAN para distancias de 100km a 1000km  Para conecciones entre paise o continentes
  
- Internet para conecciones a nivel mundial  

### ¿Como Funciona el Software de la Red?

Si al inicio de la historia de la red el primer obstaculo era el hardware, luego de tener el medio fisico ahora llegaba otro problema. ¿Como conectar equipos de diferentes fabricantes?

Para ello se deberia de estandarizar tanto el hardware como el software. Y para ello se encomendo a la ISO (Intenational standar organization) que propone en 1984 el modelo de referencia OSI (Open Systems Inteconnected). Modelo que se trataria como referencia de como deberia desarrollar a nivel de arquitectura y comportamiento lo que se quiera conectar a una red. Aqui es donde empezamos a hablar de capas y protocolos. Que sera lo que se tratara en la siguiente clase.

---

## ❓ Preguntas y Palabras Clave

%% 
ZONA DE ACTIVE RECALL
Completar DESPUÉS de clase, SIN mirar las notas de arriba.
El objetivo es intentar recordar los conceptos clave por tu cuenta.
Si no podés responder una pregunta → ahí está tu laguna de conocimiento.
Ejemplo: 
| ¿Qué es el teorema de Bayes? | Fórmula para actualizar probabilidades con evidencia |
%%

| Pregunta / Keyword | Respuesta corta |
|--------------------|-----------------|
|                    |                 |
|                    |                 |

---

## 💡 Resumen

%% 
ZONA DE SÍNTESIS
Explicar con tus propias palabras de qué trató la clase. Máximo 5-8 líneas. Sin copiar de las notas de arriba.
Si no podés resumirlo, todavía no lo entendiste.
%%

---

## 🔗 Conceptos para procesar en notas atómicas

%% 
Lista de conceptos de esta clase que merecen su propia nota atómica.
Una vez que creés la nota atómica, marcás el checkbox como hecho [x].
Podés escribir el concepto y luego crear el enlace con [[ ]].
%%

- [ ] [[posible-concepto-a-profundizar]]

---

## ✅ Tareas de la clase

%% 
Anotá aquí las tareas entregables, lecturas, ejercicios o cualquier acción que surja de la clase.
Usá el formato estándar de tareas:
- [ ] Descripción de la tarea
- [ ] 📅 YYYY-MM-DD Descripción con fecha (opcional)
Estas tareas aparecerán automáticamente en el Dashboard (bloque  de codigo tipo "tasks").
Si la tarea pertenece a un proyecto grande, mejor anotarla directamente en la nota del proyecto.
%%

- [ ] 📅 2026-08-18 Investigar y escribir un resumen, describiendo: redes de sensores, sistemas distribuidos, redes sociales y entregar por plataforma, formato PDF, no es necesario manuscrito pero si citado. 

---

## 🃏 Flashcards → Anki

%% 
Cada bloque START/END se convierte en una tarjeta en Anki.
Para sincronizar: abrí Anki → en Obsidian Ctrl+P → "Obsidian to Anki: Sync"
Tipo "Básico" = una pregunta, una respuesta.
Las etiquetas se generan automáticamente con el slug sanitizado (sin espacios) y "clase".
%%

%%Flashcard simple%%
START
Básico
Anverso: ¿Pregunta sobre el tema de la clase?
Reverso: Respuesta concisa y completa.
Tags: Tags: redes-1 clase
<!--ID: 1786620861340-->
END

%%Flashcard para escribir la respuesta%%
START
Básico (teclear la respuesta)
Anverso: ¿Pregunta sobre el tema de la clase?
Reverso: Respuesta concisa y completa.
Tags: Tags: redes-1 clase
<!--ID: 1786620861342-->
END

---

## 🔙 Volver al índice

[[03_Areas/redes-1/MOC-redes-1|Volver al MOC de redes-1]]