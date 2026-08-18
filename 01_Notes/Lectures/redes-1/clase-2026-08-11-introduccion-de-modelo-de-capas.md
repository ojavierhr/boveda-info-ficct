---
tipo: clase
materia: redes-1
semestre: 2/2026
fecha: 2026-08-11
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

# Clase 2026-08-11 Introduccion de Modelo de Capas

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

### Modelo de capas

Para poder expresar el funcionamiento de un modelo de red, es necesario comprender y utilizar los siguientes conceptos fundamentales:

- **Capa**: Cada uno de los niveles jerárquicos en los que se divide la arquitectura de una red. Cada capa tiene una función específica y se comunica únicamente con las capas adyacentes (superior e inferior). Esta división permite modularizar el diseño, facilitando el desarrollo, mantenimiento y estandarización.
    
- **Host**: Cualquier dispositivo conectado a una red que tenga capacidad de enviar y recibir información. Puede ser un ordenador, servidor, teléfono móvil, impresora de red, etc. En el modelo OSI, cada host implementa todas las capas del modelo para poder comunicarse con otros hosts.
    
- **Interfaz**: Es el punto de conexión entre dos capas adyacentes o entre un dispositivo y el medio de transmisión. Define cómo se intercambian los datos entre capas (interfaz vertical) o cómo el dispositivo se conecta físicamente a la red (interfaz horizontal, ej. puertos de red).
    
- **Protocolo**: Conjunto de reglas y formatos que definen cómo se debe realizar la comunicación entre dos entidades de la misma capa pero en diferentes hosts (comunicación horizontal). Los protocolos establecen: sintaxis (formato de los datos), semántica (significado de cada parte) y temporización (cuándo y cómo se envían los datos).
    
- **Medio físico**: El canal o soporte a través del cual se transmiten los datos físicamente. Puede ser guiado (cable de cobre, fibra óptica) o no guiado (ondas de radio, infrarrojos). Cada medio tiene características propias de velocidad, alcance, atenuación e interferencias.

### Modelo Referencial OSI

![[Arquitectura OSI.png]]

**Su objetivo es...**  
Proporcionar un marco de referencia estandarizado que permita la interoperabilidad entre sistemas de diferentes fabricantes, definiendo cómo deben comunicarse los dispositivos en una red. Fue desarrollado por la ISO (International Standard Organization) y publicado en 1984. Consta de 7 capas organizadas jerárquicamente, donde cada capa ofrece servicios a la capa superior y utiliza los servicios de la capa inferior.

**Principios de diseño del modelo OSI:**

1. Cada capa debe tener una función claramente definida.
2. El número de capas debe ser suficiente para separar funciones distintas, pero no tan grande que el modelo sea complejo.
3. Los límites entre capas deben establecerse en puntos donde la descripción de los servicios sea sencilla.
   
### Capas del Modelo OSI (de superior a inferior)

|**Capa**|**Nombre**|**Función principal**|**Unidad de datos (PDU)**|**Ejemplos de protocolos/dispositivos**|
|---|---|---|---|---|
|**7**|**Aplicación**|Interfaz entre el usuario y la red. Proporciona servicios a las aplicaciones del usuario (navegación, correo, transferencia de archivos, etc.).|Datos (Data)|HTTP, FTP, SMTP, DNS, Telnet, DHCP|
|**6**|**Presentación**|Traducción de datos entre el formato de la aplicación y el formato de la red. Gestiona cifrado, compresión y conversión de caracteres (ej. ASCII ↔ EBCDIC).|Datos (Data)|SSL/TLS, JPEG, MPEG, ASCII, EBCDIC|
|**5**|**Sesión**|Establece, mantiene y finaliza sesiones de comunicación entre aplicaciones en diferentes hosts. Gestiona diálogos (quién habla, cuándo) y sincronización (puntos de control para reanudar).|Datos (Data)|NetBIOS, RPC, PAP, SIP|
|**4**|**Transporte**|Proporciona comunicación extremo a extremo (end-to-end) confiable o no, según el protocolo. Segmenta los datos y gestiona el control de flujo y errores.|**Segmentos** (TCP) / **Datagramas** (UDP)|TCP, UDP, SCTP|
|**3**|**Red**|Determina la ruta (encaminamiento) para enviar los datos desde el origen hasta el destino, manejando direccionamiento lógico (IP).|**Paquetes** (Packets)|IP, ICMP, RIP, OSPF, BGP, Dispositivos: **Router**|
|**2**|**Enlace de datos**|Proporciona transferencia fiable de datos a través del enlace físico. Maneja direccionamiento físico (MAC), detección y corrección de errores en el enlace.|**Tramas** (Frames)|Ethernet, PPP, HDLC, Switch, Bridge, NIC|
|**1**|**Física**|Define las características eléctricas, mecánicas y funcionales del medio de transmisión. Transmite los bits como señales (eléctricas, ópticas o de radio) a través del medio físico.|**Bits** (Bits)|RS-232, RJ45, Fibra óptica, Wi-Fi (físico), Hubs, Repetidores, Cables|

### Proceso de comunicación entre dispositivos

La comunicación entre dispositivos en el modelo OSI se realiza a través de la técnica de **encapsulamiento**.

![[Pasted image 20260818064640.png]]

**¿Qué es el encapsulamiento?**  
Es el proceso mediante el cual cada capa añade su propia información de control (cabecera o header) a los datos que recibe de la capa superior, antes de pasarlos a la capa inferior. Esto permite que cada capa en el dispositivo destino pueda interpretar y procesar la información correspondiente.

**Proceso paso a paso (de emisor a receptor):**

1. **Capa 7 (Aplicación)**: La aplicación genera los datos (ej. el contenido de un correo electrónico). Los pasa a la capa de Presentación.
2. **Capa 6 (Presentación)**: Aplica formato, compresión o cifrado a los datos. Los pasa a la capa de Sesión.
3. **Capa 5 (Sesión)**: Establece la sesión y añade información de control de diálogo (ej. quién envía y quién recibe). Los pasa a la capa de Transporte.
4. **Capa 4 (Transporte)**: Fragmenta los datos en segmentos más pequeños (si es necesario) y añade su **cabecera** que incluye: puerto origen, puerto destino, número de secuencia, checksum para control de errores. → **Segmento** (PDU de transporte).
5. **Capa 3 (Red)**: Añade su **cabecera** al segmento, creando un **paquete**. La cabecera incluye: dirección IP origen, dirección IP destino, TTL (time to live) y otros campos de control. → **Paquete** (PDU de red).
6. **Capa 2 (Enlace de datos)**: Añade su **cabecera** y **cola** (trailer) al paquete, creando una **trama**. La cabecera incluye: dirección MAC origen y destino. La cola incluye: CRC (control de redundancia cíclica) para detección de errores. → **Trama** (PDU de enlace).
7. **Capa 1 (Física)**: Convierte la trama en una señal (bits) adecuada para el medio físico (señal eléctrica, óptica o de radio) y la transmite por el cable o aire.

**Proceso en el dispositivo destino (desencapsulamiento):**  
El proceso inverso ocurre capa por capa:

- Capa Física: recibe la señal y la convierte en bits.
- Capa Enlace: extrae la trama, verifica errores con el CRC y quita cabecera/cola de enlace.
- Capa Red: extrae el paquete, lee la dirección IP destino y quita su cabecera.
- Capa Transporte: extrae el segmento, verifica la integridad y reensambla los datos.
- Capas Sesión, Presentación y Aplicación: eliminan sus respectivas cabeceras hasta entregar los datos originales a la aplicación destino.
   
**📌 Nota adicional:**  
El modelo OSI es un **modelo de referencia teórico**. En la práctica, el modelo más utilizado es la **suite TCP/IP** (o modelo Internet), que combina algunas capas del OSI (por ejemplo, las capas de Sesión, Presentación y Aplicación se integran en una sola capa de Aplicación en TCP/IP). Sin embargo, comprender el modelo OSI es fundamental porque proporciona el vocabulario y la estructura conceptual para entender cualquier arquitectura de red.

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

| **Pregunta / Keyword** | **Respuesta corta** |
| :--- | :--- |
| **¿Qué es un modelo de capas en redes?** | Es una forma de organizar las funciones de una red en niveles jerárquicos, donde cada capa tiene una responsabilidad específica y se comunica solo con las capas adyacentes. |
| **¿Cuáles son los 5 conceptos fundamentales para entender un modelo de capas?** | Capa, Host, Interfaz, Protocolo y Medio físico. |
| **¿Qué es una capa en el modelo de red?** | Cada uno de los niveles jerárquicos en los que se divide la arquitectura de una red, con una función específica y comunicación solo con capas adyacentes. |
| **¿Qué es un Host?** | Cualquier dispositivo conectado a una red con capacidad de enviar y recibir información (ordenadores, servidores, móviles, impresoras, etc.). |
| **¿Qué es una interfaz en el contexto de redes?** | El punto de conexión entre dos capas adyacentes o entre un dispositivo y el medio de transmisión. |
| **¿Qué es un protocolo de red?** | Conjunto de reglas y formatos que definen cómo se debe realizar la comunicación entre dos entidades de la misma capa en diferentes hosts. |
| **¿Qué es el medio físico en una red?** | El canal o soporte a través del cual se transmiten los datos físicamente (guiado: cables; no guiado: ondas de radio). |
| **¿Cuál es el objetivo del modelo OSI?** | Proporcionar un marco de referencia estandarizado para permitir la interoperabilidad entre sistemas de diferentes fabricantes. |
| **¿Quién desarrolló el modelo OSI y en qué año?** | La ISO (International Standard Organization) en 1984. |
| **¿Cuántas capas tiene el modelo OSI?** | Siete capas. |
| **¿Cuáles son las 7 capas del modelo OSI (de superior a inferior)?** | 1. Aplicación, 2. Presentación, 3. Sesión, 4. Transporte, 5. Red, 6. Enlace de datos, 7. Física. |
| **¿Qué función tiene la capa de Aplicación en OSI?** | Proporciona la interfaz entre el usuario y la red, ofreciendo servicios a las aplicaciones (HTTP, FTP, SMTP, etc.). |
| **¿Qué función tiene la capa de Presentación?** | Traduce datos entre el formato de la aplicación y el de la red; gestiona cifrado, compresión y conversión de caracteres. |
| **¿Qué función tiene la capa de Sesión?** | Establece, mantiene y finaliza sesiones de comunicación entre aplicaciones en diferentes hosts. |
| **¿Qué función tiene la capa de Transporte?** | Proporciona comunicación extremo a extremo, segmenta datos y gestiona control de flujo y errores. |
| **¿Qué función tiene la capa de Red?** | Determina la ruta (encaminamiento) para enviar datos, manejando direccionamiento lógico (IP). |
| **¿Qué función tiene la capa de Enlace de datos?** | Proporciona transferencia fiable a través del enlace físico, manejando direccionamiento físico (MAC) y detección de errores. |
| **¿Qué función tiene la capa Física?** | Define características eléctricas, mecánicas y funcionales del medio; transmite los bits como señales. |
| **¿Qué unidad de datos (PDU) usa la capa de Transporte?** | Segmentos (TCP) o Datagramas (UDP). |
| **¿Qué unidad de datos (PDU) usa la capa de Red?** | Paquetes. |
| **¿Qué unidad de datos (PDU) usa la capa de Enlace de datos?** | Tramas. |
| **¿Qué unidad de datos (PDU) usa la capa Física?** | Bits. |
| **¿Qué es el encapsulamiento en el modelo OSI?** | Proceso mediante el cual cada capa añade su propia información de control (cabecera) a los datos que recibe de la capa superior, antes de pasarlos a la inferior. |
| **¿Cuál es el proceso inverso al encapsulamiento?** | Desencapsulamiento: cada capa en el destino elimina su correspondiente cabecera y pasa los datos a la capa superior. |
| **¿Qué información añade la cabecera de la capa de Transporte?** | Puerto origen, puerto destino, número de secuencia y checksum. |
| **¿Qué información añade la cabecera de la capa de Red?** | Dirección IP origen, dirección IP destino, TTL (time to live) y otros campos de control. |
| **¿Qué información añade la cabecera y cola de la capa de Enlace de datos?** | Cabecera: dirección MAC origen y destino. Cola: CRC para detección de errores. |
| **¿Qué dispositivos operan en la capa de Red?** | Routers. |
| **¿Qué dispositivos operan en la capa de Enlace de datos?** | Switches, Bridges, NIC (tarjetas de red). |
| **¿Qué dispositivos operan en la capa Física?** | Hubs, Repetidores, Cables, conectores RJ45. |
| **¿Qué diferencia hay entre el modelo OSI y el modelo TCP/IP?** | El modelo OSI es teórico con 7 capas; TCP/IP es práctico con 4 o 5 capas (combina Sesión, Presentación y Aplicación en una sola). |
| **¿Por qué es importante conocer el modelo OSI si TCP/IP es el que se usa realmente?** | Porque proporciona el vocabulario y la estructura conceptual fundamental para entender cualquier arquitectura de red. |

---

## 💡 Resumen

%% 
ZONA DE SÍNTESIS
Explicar con tus propias palabras de qué trató la clase. Máximo 5-8 líneas. Sin copiar de las notas de arriba.
Si no podés resumirlo, todavía no lo entendiste.
%%

La clase introdujo el concepto de **modelo de capas** como forma de organizar las funciones de red en niveles jerárquicos, utilizando conceptos clave como capa, host, interfaz, protocolo y medio físico. Se presentó el **modelo OSI** como estándar de referencia creado por la ISO en 1984, compuesto por 7 capas (Aplicación, Presentación, Sesión, Transporte, Red, Enlace de datos y Física), cada una con funciones específicas y unidades de datos propias. Finalmente, se explicó el proceso de **encapsulamiento**, donde cada capa añade su cabecera a los datos antes de transmitirlos, y el proceso inverso (desencapsulamiento) en el destino. Se aclaró que el modelo OSI es teórico y que en la práctica se usa TCP/IP, pero comprender OSI es fundamental para entender cualquier arquitectura de red.

---

## 🔗 Conceptos para procesar en notas atómicas

%% 
Lista de conceptos de esta clase que merecen su propia nota atómica.
Una vez que creés la nota atómica, marcás el checkbox como hecho [x].
Podés escribir el concepto y luego crear el enlace con [[ ]].
%%

- [ ] [[Modelo de capas]]
- [ ] [[Capa (red)]]
- [ ] [[Host]]
- [ ] [[Interfaz (red)]]
- [ ] [[Protocolo (red)]]
- [ ] [[Medio físico]]
- [ ] [[Modelo OSI]]
- [ ] [[Capa de Aplicación (OSI)]]
- [ ] [[Capa de Presentación (OSI)]]
- [ ] [[Capa de Sesión (OSI)]]
- [ ] [[Capa de Transporte (OSI)]]
- [ ] [[Capa de Red (OSI)]]
- [ ] [[Capa de Enlace de datos (OSI)]]
- [ ] [[Capa Física (OSI)]]
- [ ] [[PDU (Protocol Data Unit)]]
- [ ] [[Segmento]]
- [ ] [[Paquete]]
- [ ] [[Trama]]
- [ ] [[Bits]]
- [ ] [[Encapsulamiento]]
- [ ] [[Desencapsulamiento]]
- [ ] [[Cabecera (header)]]
- [ ] [[Cola (trailer)]]
- [ ] [[Dirección IP]]
- [ ] [[Dirección MAC]]
- [ ] [[Puertos de red]]
- [ ] [[TCP/IP]]
- [ ] [[Interoperabilidad]]

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

- [ ] 📅 2026-08-20 Realizar una analogía del sistema de correo tradicional, describiendo un modelo basado en capas, protocolos, interfaz, host, medio físico, etc. Presentar en PDF por plataforma.

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
Anverso: ¿Qué es un modelo de capas en redes?
Reverso: Es una forma de organizar las funciones de una red en niveles jerárquicos, donde cada capa tiene una responsabilidad específica y se comunica solo con las capas adyacentes.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Cuáles son los 5 conceptos fundamentales para entender un modelo de capas?
Reverso: Capa, Host, Interfaz, Protocolo y Medio físico.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué es una capa en el modelo de red?
Reverso: Cada uno de los niveles jerárquicos en los que se divide la arquitectura de una red, con una función específica y comunicación solo con capas adyacentes.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué es un Host?
Reverso: Cualquier dispositivo conectado a una red con capacidad de enviar y recibir información (ordenadores, servidores, móviles, impresoras, etc.).
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué es una interfaz en el contexto de redes?
Reverso: El punto de conexión entre dos capas adyacentes o entre un dispositivo y el medio de transmisión.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué es un protocolo de red?
Reverso: Conjunto de reglas y formatos que definen cómo se debe realizar la comunicación entre dos entidades de la misma capa en diferentes hosts.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué es el medio físico en una red?
Reverso: El canal o soporte a través del cual se transmiten los datos físicamente (guiado: cables; no guiado: ondas de radio).
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Cuál es el objetivo del modelo OSI?
Reverso: Proporcionar un marco de referencia estandarizado para permitir la interoperabilidad entre sistemas de diferentes fabricantes.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Quién desarrolló el modelo OSI y en qué año?
Reverso: La ISO (International Standard Organization) en 1984.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Cuántas capas tiene el modelo OSI?
Reverso: Siete capas.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Cuáles son las 7 capas del modelo OSI (de superior a inferior)?
Reverso: 1. Aplicación, 2. Presentación, 3. Sesión, 4. Transporte, 5. Red, 6. Enlace de datos, 7. Física.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué función tiene la capa de Aplicación en OSI?
Reverso: Proporciona la interfaz entre el usuario y la red, ofreciendo servicios a las aplicaciones (HTTP, FTP, SMTP, etc.).
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué función tiene la capa de Presentación?
Reverso: Traduce datos entre el formato de la aplicación y el de la red; gestiona cifrado, compresión y conversión de caracteres.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué función tiene la capa de Sesión?
Reverso: Establece, mantiene y finaliza sesiones de comunicación entre aplicaciones en diferentes hosts.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué función tiene la capa de Transporte?
Reverso: Proporciona comunicación extremo a extremo, segmenta datos y gestiona control de flujo y errores.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué función tiene la capa de Red?
Reverso: Determina la ruta (encaminamiento) para enviar datos, manejando direccionamiento lógico (IP).
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué función tiene la capa de Enlace de datos?
Reverso: Proporciona transferencia fiable a través del enlace físico, manejando direccionamiento físico (MAC) y detección de errores.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué función tiene la capa Física?
Reverso: Define características eléctricas, mecánicas y funcionales del medio; transmite los bits como señales.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué unidad de datos (PDU) usa la capa de Transporte?
Reverso: Segmentos (TCP) o Datagramas (UDP).
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué unidad de datos (PDU) usa la capa de Red?
Reverso: Paquetes.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué unidad de datos (PDU) usa la capa de Enlace de datos?
Reverso: Tramas.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué unidad de datos (PDU) usa la capa Física?
Reverso: Bits.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué es el encapsulamiento en el modelo OSI?
Reverso: Proceso mediante el cual cada capa añade su propia información de control (cabecera) a los datos que recibe de la capa superior, antes de pasarlos a la inferior.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Cuál es el proceso inverso al encapsulamiento?
Reverso: Desencapsulamiento: cada capa en el destino elimina su correspondiente cabecera y pasa los datos a la capa superior.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué información añade la cabecera de la capa de Transporte?
Reverso: Puerto origen, puerto destino, número de secuencia y checksum.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué información añade la cabecera de la capa de Red?
Reverso: Dirección IP origen, dirección IP destino, TTL (time to live) y otros campos de control.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué información añade la cabecera y cola de la capa de Enlace de datos?
Reverso: Cabecera: dirección MAC origen y destino. Cola: CRC para detección de errores.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué dispositivos operan en la capa de Red?
Reverso: Routers.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué dispositivos operan en la capa de Enlace de datos?
Reverso: Switches, Bridges, NIC (tarjetas de red).
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué dispositivos operan en la capa Física?
Reverso: Hubs, Repetidores, Cables, conectores RJ45.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué diferencia hay entre el modelo OSI y el modelo TCP/IP?
Reverso: El modelo OSI es teórico con 7 capas; TCP/IP es práctico con 4 o 5 capas (combina Sesión, Presentación y Aplicación en una sola).
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Por qué es importante conocer el modelo OSI si TCP/IP es el que se usa realmente?
Reverso: Porque proporciona el vocabulario y la estructura conceptual fundamental para entender cualquier arquitectura de red.
Tags: redes-1 clase
END

%%Flashcard para escribir la respuesta%%
START
Básico (teclear la respuesta)
Anverso: ¿Qué es un modelo de capas en redes?
Reverso: Es una forma de organizar las funciones de una red en niveles jerárquicos, donde cada capa tiene una responsabilidad específica y se comunica solo con las capas adyacentes.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Cuáles son los 5 conceptos fundamentales para entender un modelo de capas?
Reverso: Capa, Host, Interfaz, Protocolo y Medio físico.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué es una capa en el modelo de red?
Reverso: Cada uno de los niveles jerárquicos en los que se divide la arquitectura de una red, con una función específica y comunicación solo con capas adyacentes.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué es un Host?
Reverso: Cualquier dispositivo conectado a una red con capacidad de enviar y recibir información (ordenadores, servidores, móviles, impresoras, etc.).
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué es una interfaz en el contexto de redes?
Reverso: El punto de conexión entre dos capas adyacentes o entre un dispositivo y el medio de transmisión.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué es un protocolo de red?
Reverso: Conjunto de reglas y formatos que definen cómo se debe realizar la comunicación entre dos entidades de la misma capa en diferentes hosts.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué es el medio físico en una red?
Reverso: El canal o soporte a través del cual se transmiten los datos físicamente (guiado: cables; no guiado: ondas de radio).
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Cuál es el objetivo del modelo OSI?
Reverso: Proporcionar un marco de referencia estandarizado para permitir la interoperabilidad entre sistemas de diferentes fabricantes.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Quién desarrolló el modelo OSI y en qué año?
Reverso: La ISO (International Standard Organization) en 1984.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Cuántas capas tiene el modelo OSI?
Reverso: Siete capas.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Cuáles son las 7 capas del modelo OSI (de superior a inferior)?
Reverso: 1. Aplicación, 2. Presentación, 3. Sesión, 4. Transporte, 5. Red, 6. Enlace de datos, 7. Física.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué función tiene la capa de Aplicación en OSI?
Reverso: Proporciona la interfaz entre el usuario y la red, ofreciendo servicios a las aplicaciones (HTTP, FTP, SMTP, etc.).
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué función tiene la capa de Presentación?
Reverso: Traduce datos entre el formato de la aplicación y el de la red; gestiona cifrado, compresión y conversión de caracteres.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué función tiene la capa de Sesión?
Reverso: Establece, mantiene y finaliza sesiones de comunicación entre aplicaciones en diferentes hosts.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué función tiene la capa de Transporte?
Reverso: Proporciona comunicación extremo a extremo, segmenta datos y gestiona control de flujo y errores.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué función tiene la capa de Red?
Reverso: Determina la ruta (encaminamiento) para enviar datos, manejando direccionamiento lógico (IP).
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué función tiene la capa de Enlace de datos?
Reverso: Proporciona transferencia fiable a través del enlace físico, manejando direccionamiento físico (MAC) y detección de errores.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué función tiene la capa Física?
Reverso: Define características eléctricas, mecánicas y funcionales del medio; transmite los bits como señales.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué unidad de datos (PDU) usa la capa de Transporte?
Reverso: Segmentos (TCP) o Datagramas (UDP).
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué unidad de datos (PDU) usa la capa de Red?
Reverso: Paquetes.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué unidad de datos (PDU) usa la capa de Enlace de datos?
Reverso: Tramas.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué unidad de datos (PDU) usa la capa Física?
Reverso: Bits.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué es el encapsulamiento en el modelo OSI?
Reverso: Proceso mediante el cual cada capa añade su propia información de control (cabecera) a los datos que recibe de la capa superior, antes de pasarlos a la inferior.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Cuál es el proceso inverso al encapsulamiento?
Reverso: Desencapsulamiento: cada capa en el destino elimina su correspondiente cabecera y pasa los datos a la capa superior.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué información añade la cabecera de la capa de Transporte?
Reverso: Puerto origen, puerto destino, número de secuencia y checksum.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué información añade la cabecera de la capa de Red?
Reverso: Dirección IP origen, dirección IP destino, TTL (time to live) y otros campos de control.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué información añade la cabecera y cola de la capa de Enlace de datos?
Reverso: Cabecera: dirección MAC origen y destino. Cola: CRC para detección de errores.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué dispositivos operan en la capa de Red?
Reverso: Routers.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué dispositivos operan en la capa de Enlace de datos?
Reverso: Switches, Bridges, NIC (tarjetas de red).
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué dispositivos operan en la capa Física?
Reverso: Hubs, Repetidores, Cables, conectores RJ45.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué diferencia hay entre el modelo OSI y el modelo TCP/IP?
Reverso: El modelo OSI es teórico con 7 capas; TCP/IP es práctico con 4 o 5 capas (combina Sesión, Presentación y Aplicación en una sola).
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Por qué es importante conocer el modelo OSI si TCP/IP es el que se usa realmente?
Reverso: Porque proporciona el vocabulario y la estructura conceptual fundamental para entender cualquier arquitectura de red.
Tags: redes-1 clase
END

---

## 🔙 Volver al índice

[[03_Areas/redes-1/MOC-redes-1|Volver al MOC de redes-1]]