---
tipo: clase
materia: redes-1
semestre: 2/2026
fecha: 2026-08-06
docente: Víctor Fernando Monrroy Dipp
estado: 🟡 sin-revisar
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

# Clase 2026-08-06 Introduccion a las Redes

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

### ¿Qué es una red?

- **Según el diccionario español**:  
    Aparejo hecho con hilos, cuerdas o alambres trabajados en forma de mallas, y convenientemente dispuesto para pescar, cazar, cercar, sujetar, etc.
    
- **En el ámbito de la informática**:  
    Conjunto de computadoras o de equipos informáticos conectados entre sí y que pueden intercambiar información.
    

Esta última es la definición con la que nacería el término en los años 60, aunque tal vez hoy en día se queda corta.

### ¿Qué es una conexión?

Es el mecanismo por el cual se puede transportar la información de un punto de origen a uno de destino.

- **En los inicios de las redes (años 60)**, una de las primeras formas de intercambiar información era usar un medio de almacenamiento físico: **la cinta magnética**.
    
    - Estas cintas, al pasar por **imanes**, generan campos electromagnéticos variables que, al poder responder a **0 y 1**, permiten guardar información.
        
    - Para leer la cinta, se la hace pasar cerca de una **bobina con carga magnética**; al girar la cinta, se produce por **inducción** variaciones de corriente que, mediante **amplificadores**, logran ser lo suficientemente potentes para trabajar con ellas.
        
    - Entonces, la forma de transportar la información era **copiar los datos en estas cintas y trasladarlas físicamente** a otro ordenador donde se pudiera manipular.
        
    - Este medio físico es propenso a pérdidas o daños por ciertos tipos de radiaciones o interferencias electromagnéticas.
        
- **Otros dispositivos para trasladar información**:
    
    - **Discos electromagnéticos** (como los disquetes), que transmitían mediante propiedades magnéticas.
        
    - **CD y DVD**, que transmitían información mediante perforaciones físicas diminutas en la superficie de los discos.
        
    - **Memorias flash** (las más usadas actualmente), que transmiten la información mediante cargas eléctricas (llamadas registros).
   

> ⚠️ Pero aquí estamos hablando de **transporte de información**, no de una **conexión real** entre varios ordenadores.  
> Para hablar de conexión real, debemos pensar en un **medio que brinde soporte** para la transmisión y recepción de información de un grupo de equipos conectados, por ejemplo, a través de un **switch** que provee el medio de comunicación mediante **puertos**. A esto es lo que llamamos **"conexión"**.

Entonces, a partir de aquí podemos hablar de conceptos como:

- **Paquetes de información**: forma de agrupar la información de manera digital.
    
- **Direcciones de recepción y transmisión**: para asegurar que la información no termine en otros equipos.
    
- **Switch, router, cable módem, redes, subredes, conexión cableada e inalámbrica**, etc.
   

---

### ¿Qué otros usos tienen las redes?

- **Empresas**: suelen usar redes locales para gestionar el uso de dispositivos compartidos, como bases de datos, impresoras, escáneres, altavoces, etc.
    
    - Así se evita el coste operativo de comprar individualmente para cada equipo.
        
    - También sirven para asegurar la **seguridad, centralización y privacidad** de los datos de la empresa.
        
- **Redes domésticas**: permiten el acceso a Internet y, con ello, la posibilidad de comunicarse, entretenerse, trabajar, estudiar, publicitarse, etc.
    
- **Redes móviles**: al igual que las domésticas, permiten todo lo anterior, pero añadiendo mayor **portabilidad** y **conexión continua**.
   
---

### ¿Cómo funciona el hardware a nivel de red?

Este aspecto fue tal vez el **primer obstáculo** al que se enfrentaron al hablar de redes. Por ejemplo, para conectar un dispositivo desde una casa a la red de su banco financiero, no sería conveniente arrastrar un cable que conecte directamente todo.

Al hablar de tipos de hardware de red, nos referimos a:

- **De difusión (Broadcast)**: no conectan equipos de manera física únicamente.
- **De punto a punto**: permiten la conexión de equipos de manera física.
   
---

### ¿Qué tipos de redes hay según su alcance?

- **PAN** (_Personal Area Network_): distancias menores a 1 m, para conexiones muy próximas.
    
    - Ejemplo: **Bluetooth**, que permite una cierta cantidad de dispositivos conectados y una distancia determinada.
      
- **LAN** (_Local Area Network_): distancias de 10 a 100 metros, para conexiones dentro de edificios o infraestructuras.
    
- **MAN** (_Metropolitan Area Network_): distancias aproximadas de 10 km, para abarcar, por ejemplo, ciudades.
    
    - Puede verse como una red de redes LAN, y aquí ya se habla de **subredes**.
      
- **WAN** (_Wide Area Network_): distancias de 100 km a 1000 km, para conexiones entre países o continentes.
    
- **Internet**: conexión a nivel mundial.
   
---

### ¿Cómo funciona el software de la red?

Si al inicio de la historia de la red el primer obstáculo era el hardware, una vez resuelto el medio físico, surgió otro problema:  
**¿Cómo conectar equipos de diferentes fabricantes?**

Para ello, era necesario estandarizar tanto el hardware como el software.  
La **ISO** (_International Standard Organization_) fue la encargada de esta tarea y propuso en **1984** el **modelo de referencia OSI** (_Open Systems Interconnection_).

Este modelo se trataría como una **referencia** de cómo debería desarrollarse, a nivel de arquitectura y comportamiento, todo lo que se quiera conectar a una red.  
Aquí es donde empezamos a hablar de **capas y protocolos**, que será el tema que trataremos en la siguiente clase.

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

| **Pregunta / Keyword**                                                | **Respuesta corta**                                                                                                                                                                                                                                                                                    |
| --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **¿Qué es una red?**                                                  | Un sistema de dispositivos informáticos (ordenadores, servidores, móviles, etc.) interconectados que pueden comunicarse entre sí para compartir información y recursos.                                                                                                                                |
| **¿Qué es una subred?**                                               | Una división lógica de una red IP más grande. Permite dividir una red en segmentos más pequeños y manejables para mejorar el rendimiento y la seguridad.                                                                                                                                               |
| **¿Qué es una conexión?**                                             | El enlace o mecanismo físico o lógico que permite la transmisión de información desde un punto de origen hasta un punto de destino.                                                                                                                                                                    |
| **¿Cuál es la diferencia entre conexión cableada e inalámbrica?**     | La **cableada** utiliza cables físicos (como Ethernet de cobre o fibra óptica) para conectar los dispositivos. La **inalámbrica** utiliza ondas electromagnéticas (como Wi-Fi o Bluetooth) y no requiere cables físicos.                                                                               |
| **¿Cómo se transmitía información en los años 60?**                   | Principalmente mediante el traslado físico de medios de almacenamiento, como cintas magnéticas, de un ordenador a otro. A esto se le llamaba "red de sneaker" (zapatilla).                                                                                                                             |
| **¿Cómo transmite información una cinta magnética?**                  | Almacena información como variaciones del campo magnético a lo largo de pistas en su superficie. Un cabezal de lectura/escritura convierte estas variaciones magnéticas en señales eléctricas (unos y ceros) para leer los datos.                                                                      |
| **¿Cómo transmite información un disquete?**                          | Es un medio de almacenamiento magnético. Un cabezal de lectura/escritura en la unidad de disco lee y escribe datos en la superficie magnética del disco flexible.                                                                                                                                      |
| **¿Cómo transmite información un CD o DVD?**                          | Utiliza tecnología óptica. Un láser lee la información en forma de pequeñas perforaciones o "hoyos" (pits) y áreas planas (lands) en la superficie reflectante del disco.                                                                                                                              |
| **¿Cómo transmite información una memoria flash?**                    | Almacena datos en celdas de memoria basadas en transistores de puerta flotante. Funciona atrapando electrones en la puerta flotante para representar un estado binario (0 o 1).                                                                                                                        |
| **¿Qué diferencia hay entre "transporte" y "conexión real"?**         | El **transporte** se refiere al movimiento de datos de un punto a otro (como llevar una cinta magnética). La **conexión real** implica una infraestructura de red (como switches y routers) que permite la comunicación directa y el intercambio de datos entre múltiples dispositivos en tiempo real. |
| **¿Qué es un switch y qué función cumple?**                           | Dispositivo que conecta varios dispositivos dentro de una misma red de área local (LAN). Su función es dirigir el tráfico de datos de manera inteligente entre ellos para que se comuniquen eficientemente.                                                                                            |
| **¿Qué es un router y qué función cumple?**                           | Dispositivo que **interconecta diferentes redes** (por ejemplo, tu red local con Internet). Su función es **encaminar** paquetes de datos, determinando la mejor ruta para que lleguen a su destino, y segmentar la red para mejorar la seguridad.                                                     |
| **¿Qué es un cable módem?**                                           | Dispositivo que conecta tu red doméstica o computadora a Internet a través de la infraestructura de cable coaxial de tu proveedor de servicios de Internet (ISP). Actúa como un puente entre tu red y la del ISP.                                                                                      |
| **¿Qué son los paquetes de información?**                             | Pequeños bloques de datos en los que se divide la información para ser transmitida a través de una red. Cada paquete contiene la información en sí y datos de control (como la dirección de origen y destino).                                                                                         |
| **¿Qué son las direcciones de recepción y transmisión?**              | Son identificadores únicos (como las **direcciones IP** o **direcciones MAC**) que se añaden a los paquetes de datos para asegurar que la información se envíe al dispositivo correcto en la red.                                                                                                      |
| **¿Qué tipos de hardware de red existen según su modo de conexión?**  | **Punto a punto (P2P)**: Conexión directa entre dos dispositivos. **Difusión (Broadcast)**: Un dispositivo envía un mensaje a todos los demás en la red.                                                                                                                                               |
| **¿Qué significa "Broadcast" en el contexto de hardware?**            | Es un modo de transmisión donde un nodo emisor envía información de manera simultánea a todos los nodos receptores de la red. El mensaje se entrega a todos, y cada dispositivo decide si es para él o no.                                                                                             |
| **¿Para qué sirven las redes empresariales?**                         | Para conectar dispositivos dentro de una empresa, compartir recursos (impresoras, bases de datos), centralizar la gestión de datos, mejorar la seguridad y permitir la colaboración entre empleados.                                                                                                   |
| **¿Para qué sirven las redes domésticas?**                            | Para conectar dispositivos en un hogar (ordenadores, móviles, consolas) entre sí y a Internet, permitiendo el acceso a servicios online, el entretenimiento y el trabajo remoto.                                                                                                                       |
| **¿Para qué sirven las redes móviles?**                               | Para proporcionar conectividad inalámbrica a dispositivos móviles, permitiendo la comunicación (llamadas, mensajes) y el acceso a Internet desde cualquier lugar con cobertura.                                                                                                                        |
| **¿Qué tipos de redes existen según su alcance?**                     | Los principales son: **PAN** (Personal), **LAN** (Local), **MAN** (Metropolitana), **WAN** (Amplia) e **Internet**.                                                                                                                                                                                    |
| **¿Qué es una red PAN?**                                              | Red de Área Personal. Conecta dispositivos en el área inmediata de una persona, de unos pocos metros de alcance (ej. conexión Bluetooth entre un teléfono y unos auriculares).                                                                                                                         |
| **¿Qué es una red LAN?**                                              | Red de Área Local. Conecta dispositivos en un área geográfica limitada, como una oficina, un edificio o una casa.                                                                                                                                                                                      |
| **¿Qué es una red MAN?**                                              | Red de Área Metropolitana. Conecta varias redes LAN en un área geográfica más grande, como una ciudad o un área metropolitana.                                                                                                                                                                         |
| **¿Qué es una red WAN?**                                              | Red de Área Amplia. Conecta dispositivos a través de grandes distancias geográficas, como entre ciudades, países o continentes.                                                                                                                                                                        |
| **¿Qué es Internet?**                                                 | Es una **red de redes** a nivel mundial que interconecta millones de dispositivos y redes más pequeñas.                                                                                                                                                                                                |
| **¿Quién y cuándo se encargó de estandarizar las conexiones de red?** | La **Organización Internacional de Normalización (ISO)**. Publicó el modelo de referencia OSI en **1984**.                                                                                                                                                                                             |
| **¿Qué es el modelo OSI?**                                            | El modelo de **Interconexión de Sistemas Abiertos (OSI)** es un marco conceptual que estandariza las funciones de una red de comunicaciones en **siete capas** distintas. Su objetivo es guiar el diseño de redes y protocolos para que sean interoperables.                                           |

> **Nota sobre la nota de clase:** La nota de Obsidian contiene algunas imprecisiones. Por ejemplo, indica que el modelo OSI se propuso en los años 60, pero la fecha correcta es 1984. También menciona que el hardware "Broadcast no conecta equipos de manera física", cuando en realidad se refiere a un método de transmisión de datos y no a un tipo de hardware. Las respuestas aquí proporcionadas corrigen estos puntos.

---

## 💡 Resumen

%% 
ZONA DE SÍNTESIS
Explicar con tus propias palabras de qué trató la clase. Máximo 5-8 líneas. Sin copiar de las notas de arriba.
Si no podés resumirlo, todavía no lo entendiste.
%%
Explica como conceptos introductorios al estudio de redes, como ser que es una red, una conexion, medios de transporte de datos, que partes componen una red, historia introductoria a la evolucion de las redes, las distancias que puede abarcar distintos tipos de red y presenta el concepto propuesto por la institucion iso que estandarizo la forma de conectarse a la red, el modelo referencial OSI.

---

## 🔗 Conceptos para procesar en notas atómicas

%% 
Lista de conceptos de esta clase que merecen su propia nota atómica.
Una vez que creés la nota atómica, marcás el checkbox como hecho [x].
Podés escribir el concepto y luego crear el enlace con [[ ]].
%%
- [ ] [[Red de computadoras]]
- [ ] [[Conexión de red]]
- [ ] [[Medios de transmisión de datos]]
- [ ] [[Switch]]
- [ ] [[Router]]
- [ ] [[modem]]
- [ ] [[Hardware Broadcast]]
- [ ] [[Hardware punto a punto]]
- [ ] [[PAN (Personal Area Network)]]
- [ ] [[LAN (Local Area Network)]]
- [ ] [[MAN (Metropolitan Area Network)]]
- [ ] [[WAN (Wide Area Network)]]
- [ ] [[Internet]]
- [ ] [[Subred]]
- [ ] [[Modelo OSI]]
- [ ] [[Capas y protocolos]]
- [ ] [[Interoperabilidad]]
- [ ] [[Paquetes de información]]
- [ ] [[Dirección IP]]
- [ ] [[Dirección MAC]]
- [ ] [[Puertos de red]]

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

- [ ] 📅 2026-08-18 **Tarea:** Investigar sobre **redes de sensores**, **sistemas distribuidos** y **redes sociales**. Redactar un informe breve que:
  - Defina cada concepto y explique su función.
  - Mencione ejemplos concretos de uso en la actualidad.
  - Relacione estos conceptos con los temas vistos en clase (conexión, alcance, hardware, modelo OSI).
  - Entregar en formato PDF, con citas bibliográficas según normas APA (incluir referencias al final).

---

## 🃏 Flashcards → Anki

%% 
Cada bloque START/END se convierte en una tarjeta en Anki.
Para sincronizar: abrí Anki → en Obsidian Ctrl+P → "Obsidian to Anki: Sync"
Tipo "Básico" = una pregunta, una respuesta.
Las etiquetas se generan automáticamente con el slug sanitizado (sin espacios) y "clase".
%%

START
Básico
Anverso: ¿Qué es una red?
Reverso: Un sistema de dispositivos informáticos (ordenadores, servidores, móviles, etc.) interconectados que pueden comunicarse entre sí para compartir información y recursos.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué es una subred?
Reverso: Una división lógica de una red IP más grande. Permite dividir una red en segmentos más pequeños y manejables para mejorar el rendimiento y la seguridad.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué es una conexión?
Reverso: El enlace o mecanismo físico o lógico que permite la transmisión de información desde un punto de origen hasta un punto de destino.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Cuál es la diferencia entre conexión cableada e inalámbrica?
Reverso: La cableada utiliza cables físicos (como Ethernet de cobre o fibra óptica) para conectar los dispositivos. La inalámbrica utiliza ondas electromagnéticas (como Wi-Fi o Bluetooth) y no requiere cables físicos.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Cómo se transmitía información en los años 60?
Reverso: Principalmente mediante el traslado físico de medios de almacenamiento, como cintas magnéticas, de un ordenador a otro. A esto se le llamaba "red de sneaker" (zapatilla).
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Cómo transmite información una cinta magnética?
Reverso: Almacena información como variaciones del campo magnético a lo largo de pistas en su superficie. Un cabezal de lectura/escritura convierte estas variaciones magnéticas en señales eléctricas (unos y ceros) para leer los datos.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Cómo transmite información un disquete?
Reverso: Es un medio de almacenamiento magnético. Un cabezal de lectura/escritura en la unidad de disco lee y escribe datos en la superficie magnética del disco flexible.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Cómo transmite información un CD o DVD?
Reverso: Utiliza tecnología óptica. Un láser lee la información en forma de pequeñas perforaciones o "hoyos" (pits) y áreas planas (lands) en la superficie reflectante del disco.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Cómo transmite información una memoria flash?
Reverso: Almacena datos en celdas de memoria basadas en transistores de puerta flotante. Funciona atrapando electrones en la puerta flotante para representar un estado binario (0 o 1).
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué diferencia hay entre "transporte" y "conexión real"?
Reverso: El transporte se refiere al movimiento de datos de un punto a otro (como llevar una cinta magnética). La conexión real implica una infraestructura de red (como switches y routers) que permite la comunicación directa y el intercambio de datos entre múltiples dispositivos en tiempo real.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué es un switch y qué función cumple?
Reverso: Dispositivo que conecta varios dispositivos dentro de una misma red de área local (LAN). Su función es dirigir el tráfico de datos de manera inteligente entre ellos para que se comuniquen eficientemente.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué es un router y qué función cumple?
Reverso: Dispositivo que interconecta diferentes redes (por ejemplo, tu red local con Internet). Su función es encaminar paquetes de datos, determinando la mejor ruta para que lleguen a su destino, y segmentar la red para mejorar la seguridad.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué es un cable módem?
Reverso: Dispositivo que conecta tu red doméstica o computadora a Internet a través de la infraestructura de cable coaxial de tu proveedor de servicios de Internet (ISP). Actúa como un puente entre tu red y la del ISP.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué son los paquetes de información?
Reverso: Pequeños bloques de datos en los que se divide la información para ser transmitida a través de una red. Cada paquete contiene la información en sí y datos de control (como la dirección de origen y destino).
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué son las direcciones de recepción y transmisión?
Reverso: Son identificadores únicos (como las direcciones IP o direcciones MAC) que se añaden a los paquetes de datos para asegurar que la información se envíe al dispositivo correcto en la red.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué tipos de hardware de red existen según su modo de conexión?
Reverso: Punto a punto (P2P): Conexión directa entre dos dispositivos. Difusión (Broadcast): Un dispositivo envía un mensaje a todos los demás en la red.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué significa "Broadcast" en el contexto de hardware?
Reverso: Es un modo de transmisión donde un nodo emisor envía información de manera simultánea a todos los nodos receptores de la red. El mensaje se entrega a todos, y cada dispositivo decide si es para él o no.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Para qué sirven las redes empresariales?
Reverso: Para conectar dispositivos dentro de una empresa, compartir recursos (impresoras, bases de datos), centralizar la gestión de datos, mejorar la seguridad y permitir la colaboración entre empleados.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Para qué sirven las redes domésticas?
Reverso: Para conectar dispositivos en un hogar (ordenadores, móviles, consolas) entre sí y a Internet, permitiendo el acceso a servicios online, el entretenimiento y el trabajo remoto.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Para qué sirven las redes móviles?
Reverso: Para proporcionar conectividad inalámbrica a dispositivos móviles, permitiendo la comunicación (llamadas, mensajes) y el acceso a Internet desde cualquier lugar con cobertura.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué tipos de redes existen según su alcance?
Reverso: Los principales son: PAN (Personal), LAN (Local), MAN (Metropolitana), WAN (Amplia) e Internet.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué es una red PAN?
Reverso: Red de Área Personal. Conecta dispositivos en el área inmediata de una persona, de unos pocos metros de alcance (ej. conexión Bluetooth entre un teléfono y unos auriculares).
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué es una red LAN?
Reverso: Red de Área Local. Conecta dispositivos en un área geográfica limitada, como una oficina, un edificio o una casa.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué es una red MAN?
Reverso: Red de Área Metropolitana. Conecta varias redes LAN en un área geográfica más grande, como una ciudad o un área metropolitana.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué es una red WAN?
Reverso: Red de Área Amplia. Conecta dispositivos a través de grandes distancias geográficas, como entre ciudades, países o continentes.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué es Internet?
Reverso: Es una red de redes a nivel mundial que interconecta millones de dispositivos y redes más pequeñas.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Quién y cuándo se encargó de estandarizar las conexiones de red?
Reverso: La Organización Internacional de Normalización (ISO). Publicó el modelo de referencia OSI en 1984.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué es el modelo OSI?
Reverso: El modelo de Interconexión de Sistemas Abiertos (OSI) es un marco conceptual que estandariza las funciones de una red de comunicaciones en siete capas distintas. Su objetivo es guiar el diseño de redes y protocolos para que sean interoperables.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué es una red?
Reverso: Un sistema de dispositivos informáticos (ordenadores, servidores, móviles, etc.) interconectados que pueden comunicarse entre sí para compartir información y recursos.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué es una subred?
Reverso: Una división lógica de una red IP más grande. Permite dividir una red en segmentos más pequeños y manejables para mejorar el rendimiento y la seguridad.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué es una conexión?
Reverso: El enlace o mecanismo físico o lógico que permite la transmisión de información desde un punto de origen hasta un punto de destino.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Cuál es la diferencia entre conexión cableada e inalámbrica?
Reverso: La cableada utiliza cables físicos (como Ethernet de cobre o fibra óptica) para conectar los dispositivos. La inalámbrica utiliza ondas electromagnéticas (como Wi-Fi o Bluetooth) y no requiere cables físicos.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Cómo se transmitía información en los años 60?
Reverso: Principalmente mediante el traslado físico de medios de almacenamiento, como cintas magnéticas, de un ordenador a otro. A esto se le llamaba "red de sneaker" (zapatilla).
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Cómo transmite información una cinta magnética?
Reverso: Almacena información como variaciones del campo magnético a lo largo de pistas en su superficie. Un cabezal de lectura/escritura convierte estas variaciones magnéticas en señales eléctricas (unos y ceros) para leer los datos.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Cómo transmite información un disquete?
Reverso: Es un medio de almacenamiento magnético. Un cabezal de lectura/escritura en la unidad de disco lee y escribe datos en la superficie magnética del disco flexible.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Cómo transmite información un CD o DVD?
Reverso: Utiliza tecnología óptica. Un láser lee la información en forma de pequeñas perforaciones o "hoyos" (pits) y áreas planas (lands) en la superficie reflectante del disco.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Cómo transmite información una memoria flash?
Reverso: Almacena datos en celdas de memoria basadas en transistores de puerta flotante. Funciona atrapando electrones en la puerta flotante para representar un estado binario (0 o 1).
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué diferencia hay entre "transporte" y "conexión real"?
Reverso: El transporte se refiere al movimiento de datos de un punto a otro (como llevar una cinta magnética). La conexión real implica una infraestructura de red (como switches y routers) que permite la comunicación directa y el intercambio de datos entre múltiples dispositivos en tiempo real.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué es un switch y qué función cumple?
Reverso: Dispositivo que conecta varios dispositivos dentro de una misma red de área local (LAN). Su función es dirigir el tráfico de datos de manera inteligente entre ellos para que se comuniquen eficientemente.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué es un router y qué función cumple?
Reverso: Dispositivo que interconecta diferentes redes (por ejemplo, tu red local con Internet). Su función es encaminar paquetes de datos, determinando la mejor ruta para que lleguen a su destino, y segmentar la red para mejorar la seguridad.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué es un cable módem?
Reverso: Dispositivo que conecta tu red doméstica o computadora a Internet a través de la infraestructura de cable coaxial de tu proveedor de servicios de Internet (ISP). Actúa como un puente entre tu red y la del ISP.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué son los paquetes de información?
Reverso: Pequeños bloques de datos en los que se divide la información para ser transmitida a través de una red. Cada paquete contiene la información en sí y datos de control (como la dirección de origen y destino).
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué son las direcciones de recepción y transmisión?
Reverso: Son identificadores únicos (como las direcciones IP o direcciones MAC) que se añaden a los paquetes de datos para asegurar que la información se envíe al dispositivo correcto en la red.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué tipos de hardware de red existen según su modo de conexión?
Reverso: Punto a punto (P2P): Conexión directa entre dos dispositivos. Difusión (Broadcast): Un dispositivo envía un mensaje a todos los demás en la red.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué significa "Broadcast" en el contexto de hardware?
Reverso: Es un modo de transmisión donde un nodo emisor envía información de manera simultánea a todos los nodos receptores de la red. El mensaje se entrega a todos, y cada dispositivo decide si es para él o no.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Para qué sirven las redes empresariales?
Reverso: Para conectar dispositivos dentro de una empresa, compartir recursos (impresoras, bases de datos), centralizar la gestión de datos, mejorar la seguridad y permitir la colaboración entre empleados.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Para qué sirven las redes domésticas?
Reverso: Para conectar dispositivos en un hogar (ordenadores, móviles, consolas) entre sí y a Internet, permitiendo el acceso a servicios online, el entretenimiento y el trabajo remoto.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Para qué sirven las redes móviles?
Reverso: Para proporcionar conectividad inalámbrica a dispositivos móviles, permitiendo la comunicación (llamadas, mensajes) y el acceso a Internet desde cualquier lugar con cobertura.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué tipos de redes existen según su alcance?
Reverso: Los principales son: PAN (Personal), LAN (Local), MAN (Metropolitana), WAN (Amplia) e Internet.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué es una red PAN?
Reverso: Red de Área Personal. Conecta dispositivos en el área inmediata de una persona, de unos pocos metros de alcance (ej. conexión Bluetooth entre un teléfono y unos auriculares).
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué es una red LAN?
Reverso: Red de Área Local. Conecta dispositivos en un área geográfica limitada, como una oficina, un edificio o una casa.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué es una red MAN?
Reverso: Red de Área Metropolitana. Conecta varias redes LAN en un área geográfica más grande, como una ciudad o un área metropolitana.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué es una red WAN?
Reverso: Red de Área Amplia. Conecta dispositivos a través de grandes distancias geográficas, como entre ciudades, países o continentes.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué es Internet?
Reverso: Es una red de redes a nivel mundial que interconecta millones de dispositivos y redes más pequeñas.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Quién y cuándo se encargó de estandarizar las conexiones de red?
Reverso: La Organización Internacional de Normalización (ISO). Publicó el modelo de referencia OSI en 1984.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué es el modelo OSI?
Reverso: El modelo de Interconexión de Sistemas Abiertos (OSI) es un marco conceptual que estandariza las funciones de una red de comunicaciones en siete capas distintas. Su objetivo es guiar el diseño de redes y protocolos para que sean interoperables.
Tags: redes-1 clase
END

---

## 🔙 Volver al índice

[[03_Areas/redes-1/MOC-redes-1|Volver al MOC de redes-1]]