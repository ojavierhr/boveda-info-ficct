---
tipo: clase
materia: redes-1
semestre: 2/2026
fecha: 2026-08-13
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

# Clase 2026-08-13 Modelo TCP-IP

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

### Contexto histórico: ARPANET y NCP

- **ARPANET** fue la primera red de conmutación de paquetes, desarrollada por DARPA a finales de los 60 para conectar centros de investigación y universidades.
- En sus inicios, utilizaba **NCP (Network Control Protocol)** como protocolo principal, pero presentaba limitaciones:
    - No podía interconectar redes de diferentes tipos (era específico para ARPANET).
    - No manejaba bien el direccionamiento a gran escala.
    - Era monolítico: combinaba funciones de transporte y red en un solo protocolo.
- **Vint Cerf** y **Bob Kahn** desarrollaron **TCP/IP** a mediados de los 70 para superar estas limitaciones, diseñado específicamente para interconectar redes heterogéneas (internetworking).
- En **1983**, ARPANET realizó la transición oficial de NCP a TCP/IP, marcando el nacimiento de Internet como lo conocemos hoy.

---

### ¿Qué es IP?

**IP (Internet Protocol)** es el protocolo fundamental de la capa de **Internet** (capa 3 en TCP/IP, equivalente a la capa de **Red** en OSI).

**Función principal: enrutamiento y direccionamiento lógico**
- **Direccionamiento lógico**: Asigna una dirección única (IP) a cada dispositivo para identificarlo globalmente.
- **Enrutamiento**: Determina la ruta óptima para enviar paquetes desde el origen al destino a través de múltiples redes.

**Características clave de IP:**
- **Sin conexión (connectionless)**: Cada paquete viaja de forma independiente, sin establecer una sesión previa.
- **"Best effort" (esfuerzo máximo)**: No garantiza entrega, orden ni integridad. Si un paquete se pierde, IP no lo retransmite (delega esa función a capas superiores como TCP).
- **No fiable**: Puede descartar paquetes si la red está congestionada o hay errores.
- **Fragmentación y reensamblaje**: Divide paquetes grandes en fragmentos más pequeños si la red no soporta su tamaño, y los reensambla en el destino.

**Componentes del encabezado IP:**
- Versión (IPv4 o IPv6)
- Longitud del encabezado
- Tipo de servicio (TOS)
- Longitud total del paquete
- Identificación, banderas y offset de fragmentación
- **TTL (Time To Live)** → evita que los paquetes circulen indefinidamente
- Protocolo de transporte encapsulado (TCP, UDP, etc.)
- Checksum del encabezado
- Dirección IP origen y destino

---

### ¿Qué es TCP?

**TCP (Transmission Control Protocol)** es el protocolo de la capa de **Transporte** en TCP/IP (equivalente a la capa de Transporte en OSI).

**Función principal: comunicación extremo a extremo confiable**
- Proporciona una conexión lógica entre dos aplicaciones en diferentes hosts.
- Garantiza que los datos lleguen completos, en orden y sin errores.

**Características clave de TCP:**
- **Orientado a conexión**: Establece una conexión lógica (handshake de 3 vías: SYN, SYN-ACK, ACK) antes de transmitir datos.
- **Transmisión confiable**: Garantiza la entrega mediante:
    - **Números de secuencia**: Ordenan los segmentos en el destino.
    - **Acuses de recibo (ACK)**: El receptor confirma la recepción.
    - **Retransmisión**: Si no se recibe ACK, se reenvía el segmento.
- **Control de flujo**: El receptor indica cuántos datos puede recibir (ventana deslizante), evitando saturación.
- **Control de congestión**: Ajusta la velocidad de envío para evitar la congestión en la red.
- **Segmentación**: Divide los datos en segmentos de tamaño adecuado.
- **Multiplexación**: Permite que múltiples aplicaciones usen TCP simultáneamente mediante puertos.

**Componentes del encabezado TCP:**
- Puerto origen y puerto destino
- Número de secuencia
- Número de acuse de recibo (ACK)
- Longitud del encabezado
- Banderas de control (SYN, ACK, FIN, RST, etc.)
- Tamaño de ventana
- Checksum
- Puntero de urgencia

**Analogía del correo postal:**
- TCP = **servicio de mensajería certificada**: registra el envío, confirma la recepción, reenvía si algo se pierde y entrega en orden.
- IP = **servicio postal estándar**: solo pone la dirección y envía, sin garantizar entrega ni orden.

---

### Comparación de Modelo OSI vs TCP-IP

**Diferencias conceptuales clave:**

| **Aspecto** | **Modelo OSI** | **Modelo TCP/IP** |
|:---|:---|:---|
| **Origen** | Teórico, ISO (1984) | Práctico, DARPA (años 70) |
| **Enfoque** | Referencia conceptual y educativa | Implementación real de Internet |
| **Capas** | 7 capas bien definidas | 4 capas (más agregadas) |
| **Protocolos** | No define protocolos específicos | Define protocolos específicos (TCP, IP, UDP, HTTP, etc.) |
| **Popularidad** | Referencia académica | Modelo real usado en Internet |

**Tabla comparativa de capas:**

| **Modelo OSI (7 capas)** | **Modelo TCP/IP (4 capas)** | **Protocolos / Controladores** | **Equivalencia y observaciones** |
|:---:|:---:|:---|:---|
| **7. Aplicación** | **4. Aplicación** | HTTP, FTP, SMTP, DNS, DHCP, SSH, SNMP, NTP, LDAP, SIP, RTP | TCP/IP combina Aplicación, Presentación y Sesión en una sola capa. |
| **6. Presentación** | | | |
| **5. Sesión** | | | |
| **4. Transporte** | **3. Transporte** | TCP (confiable), UDP (rápido), SCTP, DCCP | TCP/IP usa TCP y UDP como protocolos principales. |
| **3. Red** | **2. Internet** | IP (IPv4/IPv6), ICMP, ARP, NAT, OSPF, RIP, BGP, IPsec | En TCP/IP se llama capa de Internet. Usa IP para direccionamiento y enrutamiento. |
| **2. Enlace de datos** | **1. Acceso a la Red** | Ethernet, Wi-Fi, PPP, HDLC, VLAN, STP, PPPoE, NIC Drivers | TCP/IP combina Enlace y Física en una sola capa de Acceso a la Red. |
| **1. Física** | | Cables, conectores, señales, hubs, repetidores, transceptores | Incluye todos los elementos físicos: medios de transmisión y dispositivos de nivel de bits. |

---

### ¿Por qué OSI no se impuso en la práctica?

- TCP/IP llegó **primero** y ya estaba implementado cuando OSI se estandarizó.
- TCP/IP era **más simple** (menos capas) y **práctico**.
- OSI era complejo y tardó mucho en definirse completamente.
- TCP/IP estaba respaldado por ARPANET y el crecimiento de Internet.

**📌 Nota adicional:**
Aunque OSI y TCP/IP tienen diferencias, **ambos modelos son complementarios**. OSI proporciona una estructura conceptual más detallada, mientras que TCP/IP ofrece la implementación real. En la práctica, la mayoría de las redes usan TCP/IP, pero el vocabulario y los conceptos de OSI son ampliamente utilizados en la enseñanza y documentación técnica.

---

## ❓ Preguntas y Palabras Clave

%% 
ZONA DE ACTIVE RECALL
Completar DESPUÉS de clase, SIN mirar las notas de arriba.
El objetivo es intentar recordar los conceptos clave por tu cuenta.
Si no podés responder una pregunta → ahí está tu laguna de conocimiento.
%%

| **Pregunta / Keyword** | **Respuesta corta** |
|:---|:---|
| **¿Qué es el modelo TCP/IP?** | Conjunto de protocolos de comunicación utilizado en Internet, desarrollado por DARPA en los años 70 como reemplazo de NCP. |
| **¿Cuál fue el contexto histórico del modelo TCP/IP?** | Nació para superar las limitaciones de NCP (protocolo de ARPANET) y permitir la interconexión de redes heterogéneas. Desarrollado por Cerf y Kahn. |
| **¿Qué es NCP y cuál fue su relación con TCP/IP?** | NCP fue el protocolo original de ARPANET, pero era monolítico y no podía interconectar redes diferentes. TCP/IP lo reemplazó en 1983. |
| **¿Qué es IP (Internet Protocol)?** | Protocolo de la capa de Internet (capa 3 en TCP/IP) responsable del direccionamiento lógico (direcciones IP) y enrutamiento de paquetes. |
| **¿Cuál es la función principal de IP?** | Enrutar paquetes de datos determinando la ruta óptima desde el origen hasta el destino mediante direcciones IP. |
| **¿Qué características tiene IP?** | Protocolo sin conexión, no fiable (best effort), no garantiza entrega, orden ni integridad. Realiza fragmentación y reensamblaje. |
| **¿Qué información incluye el encabezado IP?** | Versión, TTL, direcciones IP origen/destino, tipo de servicio, checksum, protocolo de transporte encapsulado (TCP/UDP). |
| **¿Qué es TCP (Transmission Control Protocol)?** | Protocolo de la capa de Transporte (capa 4 en TCP/IP) que proporciona comunicación extremo a extremo confiable, orientada a conexión. |
| **¿Cuál es la función principal de TCP?** | Garantizar la entrega completa, en orden y sin errores de los datos entre aplicaciones en diferentes hosts. |
| **¿Qué características tiene TCP?** | Orientado a conexión (handshake 3 vías), confiable (ACK, retransmisión), control de flujo (ventana deslizante) y control de congestión. |
| **¿Qué información incluye el encabezado TCP?** | Puertos origen/destino, números de secuencia y ACK, banderas de control (SYN, ACK, FIN), tamaño de ventana y checksum. |
| **¿Cuántas capas tiene el modelo TCP/IP y cuáles son?** | 4 capas: Aplicación, Transporte, Internet (o Red) y Acceso a la Red (o Enlace/Física). |
| **¿Qué capas de OSI combina TCP/IP en su capa de Aplicación?** | Combina las capas de Aplicación, Presentación y Sesión de OSI. |
| **¿Qué capas de OSI combina TCP/IP en su capa de Acceso a la Red?** | Combina las capas de Enlace de datos y Física de OSI. |
| **¿Cuál es la diferencia principal entre OSI y TCP/IP en cuanto a capas?** | OSI tiene 7 capas (más detallado y teórico), TCP/IP tiene 4 capas (más práctico y agregado). |
| **¿Qué diferencia hay en el enfoque de OSI vs TCP/IP?** | OSI es un modelo de referencia teórico que no define protocolos específicos; TCP/IP es un modelo práctico que define protocolos específicos. |
| **¿Por qué TCP/IP se impuso sobre OSI en la práctica?** | TCP/IP llegó primero, era más simple, ya estaba implementado en ARPANET y respaldado por el crecimiento de Internet. |
| **¿Qué es la interoperabilidad en el contexto de TCP/IP?** | Capacidad de TCP/IP para conectar redes de diferentes fabricantes y tecnologías, permitiendo la comunicación entre equipos heterogéneos. |
| **¿Qué protocolos se usan en la capa de Aplicación de TCP/IP?** | HTTP, FTP, SMTP, DNS, DHCP, SSH, Telnet, SNMP, NTP, LDAP, SIP, RTP. |
| **¿Qué protocolos se usan en la capa de Transporte de TCP/IP?** | TCP (confiable) y UDP (no confiable). |
| **¿Qué protocolos se usan en la capa de Internet de TCP/IP?** | IP (IPv4/IPv6), ICMP, ARP, NAT, OSPF, RIP, BGP, IPsec. |
| **¿Qué protocolos/tecnologías se usan en la capa de Acceso a la Red?** | Ethernet, Wi-Fi, PPP, HDLC, VLAN, STP, PPPoE, controladores de interfaz (NIC). |
| **¿Qué significa que IP sea "best effort"?** | IP hace el máximo esfuerzo por entregar los paquetes, pero no garantiza entrega, orden ni integridad. |
| **¿Qué significa que TCP sea "orientado a conexión"?** | TCP establece una conexión lógica (handshake) antes de enviar datos y la finaliza al terminar la transmisión. |
| **¿Qué función cumple el TTL en el encabezado IP?** | Evita que los paquetes circulen indefinidamente; se decrementa en cada salto y se descarta si llega a 0. |
| **¿Qué función cumplen los puertos en TCP?** | Permiten multiplexar múltiples aplicaciones en un mismo host, identificando cada comunicación por su número de puerto. |
| **¿Cuál es la analogía del correo postal para TCP/IP?** | TCP = mensajería certificada (confirma entrega, reenvía, ordena); IP = correo estándar (solo pone dirección y envía). |
| **¿Qué protocolos de enrutamiento se usan en TCP/IP?** | OSPF (redes internas), RIP (simple), BGP (entre sistemas autónomos, principal en Internet). |
| **¿Qué función cumple ARP en TCP/IP?** | Resuelve direcciones IP a direcciones MAC dentro de una red local. |
| **¿Qué función cumple NAT?** | Traduce direcciones IP privadas a una IP pública, permitiendo que varios dispositivos compartan una sola IP. |
| **¿Qué es ICMP y para qué se usa?** | Protocolo de mensajes de control; usado por `ping` (verifica conectividad) y `traceroute` (rastrea ruta). |

---

## 💡 Resumen

%% 
ZONA DE SÍNTESIS
Explicar con tus propias palabras de qué trató la clase. Máximo 5-8 líneas. Sin copiar de las notas de arriba.
Si no podés resumirlo, todavía no lo entendiste.
%%

La clase presentó el **modelo TCP/IP**, el conjunto de protocolos que realmente se usa en Internet. Surgió como reemplazo de NCP en ARPANET en los años 70, desarrollado por Cerf y Kahn para superar las limitaciones de interconectar redes heterogéneas. Se explican dos protocolos fundamentales: **IP** (capa de Internet), que se encarga del direccionamiento lógico y enrutamiento (esfuerzo máximo, sin conexión), y **TCP** (capa de Transporte), que proporciona comunicación confiable, orientada a conexión con control de flujo y congestión. Finalmente, se comparó TCP/IP (4 capas) con el modelo OSI (7 capas), destacando que OSI es teórico y TCP/IP es práctico, y que TCP/IP combina capas (Aplicación, Presentación, Sesión en una; Enlace y Física en otra), siendo el modelo implementado en Internet.

---

## 🔗 Conceptos para procesar en notas atómicas

%% 
Lista de conceptos de esta clase que merecen su propia nota atómica.
Una vez que creés la nota atómica, marcás el checkbox como hecho [x].
Podés escribir el concepto y luego crear el enlace con [[ ]].
%%

- [ ] [[Modelo TCP/IP]]
- [ ] [[ARPANET]]
- [ ] [[NCP (Network Control Protocol)]]
- [ ] [[Vint Cerf]]
- [ ] [[Bob Kahn]]
- [ ] [[IP (Internet Protocol)]]
- [ ] [[IPv4]]
- [ ] [[IPv6]]
- [ ] [[Dirección IP]]
- [ ] [[Enrutamiento]]
- [ ] [[Encabezado IP]]
- [ ] [[TTL (Time To Live)]]
- [ ] [[TCP (Transmission Control Protocol)]]
- [ ] [[UDP (User Datagram Protocol)]]
- [ ] [[Handshake (3 vías)]]
- [ ] [[Número de secuencia (TCP)]]
- [ ] [[ACK (Acuse de recibo)]]
- [ ] [[Retransmisión (TCP)]]
- [ ] [[Control de flujo (TCP)]]
- [ ] [[Control de congestión (TCP)]]
- [ ] [[Ventana deslizante]]
- [ ] [[Segmento TCP]]
- [ ] [[Encabezado TCP]]
- [ ] [[Puertos de red]]
- [ ] [[Capa de Aplicación (TCP/IP)]]
- [ ] [[Capa de Transporte (TCP/IP)]]
- [ ] [[Capa de Internet (TCP/IP)]]
- [ ] [[Capa de Acceso a la Red (TCP/IP)]]
- [ ] [[Comparación OSI vs TCP/IP]]
- [ ] [[Interoperabilidad]]
- [ ] [[Best effort]]
- [ ] [[Protocolo sin conexión]]
- [ ] [[Protocolo orientado a conexión]]
- [ ] [[ICMP]]
- [ ] [[ARP]]
- [ ] [[NAT]]
- [ ] [[OSPF]]
- [ ] [[BGP]]
- [ ] [[Ethernet]]
- [ ] [[Wi-Fi]]
- [ ] [[PPP]]

---

## ✅ Tareas de la clase

%% 
Anotá aquí las tareas entregables, lecturas, ejercicios o cualquier acción que surja de la clase.
Usá el formato estándar de tareas:
- [ ] Descripción de la tarea
- [ ] 📅 YYYY-MM-DD Descripción con fecha (opcional)
Estas tareas aparecerán automáticamente en el Dashboard (bloque de código tipo "tasks").
Si la tarea pertenece a un proyecto grande, mejor anotarla directamente en la nota del proyecto.
%%

- [ ] 📅 2026-08-20 Investigar y explicar las diferencias entre TCP y UDP: características, casos de uso y ejemplos prácticos. Entregar en formato PDF por plataforma.
- [ ] 📅 2026-08-20 Realizar un diagrama comparativo entre el modelo OSI y TCP/IP, señalando las equivalencias y diferencias clave. Presentar en formato PDF.

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
Anverso: ¿Qué es el modelo TCP/IP?
Reverso: Conjunto de protocolos de comunicación utilizado en Internet, desarrollado por DARPA en los años 70 como reemplazo de NCP.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Cuál fue el contexto histórico del modelo TCP/IP?
Reverso: Nació para superar las limitaciones de NCP (protocolo de ARPANET) y permitir la interconexión de redes heterogéneas. Desarrollado por Cerf y Kahn.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué es NCP y cuál fue su relación con TCP/IP?
Reverso: NCP fue el protocolo original de ARPANET, pero era monolítico y no podía interconectar redes diferentes. TCP/IP lo reemplazó en 1983.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué es IP (Internet Protocol)?
Reverso: Protocolo de la capa de Internet (capa 3 en TCP/IP) responsable del direccionamiento lógico (direcciones IP) y enrutamiento de paquetes.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Cuál es la función principal de IP?
Reverso: Enrutar paquetes de datos determinando la ruta óptima desde el origen hasta el destino mediante direcciones IP.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué características tiene IP?
Reverso: Protocolo sin conexión, no fiable (best effort), no garantiza entrega, orden ni integridad. Realiza fragmentación y reensamblaje.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué información incluye el encabezado IP?
Reverso: Versión, TTL, direcciones IP origen/destino, tipo de servicio, checksum, protocolo de transporte encapsulado (TCP/UDP).
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué es TCP (Transmission Control Protocol)?
Reverso: Protocolo de la capa de Transporte (capa 4 en TCP/IP) que proporciona comunicación extremo a extremo confiable, orientada a conexión.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Cuál es la función principal de TCP?
Reverso: Garantizar la entrega completa, en orden y sin errores de los datos entre aplicaciones en diferentes hosts.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué características tiene TCP?
Reverso: Orientado a conexión (handshake 3 vías), confiable (ACK, retransmisión), control de flujo (ventana deslizante) y control de congestión.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué información incluye el encabezado TCP?
Reverso: Puertos origen/destino, números de secuencia y ACK, banderas de control (SYN, ACK, FIN), tamaño de ventana y checksum.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Cuántas capas tiene el modelo TCP/IP y cuáles son?
Reverso: 4 capas: Aplicación, Transporte, Internet (o Red) y Acceso a la Red (o Enlace/Física).
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué capas de OSI combina TCP/IP en su capa de Aplicación?
Reverso: Combina las capas de Aplicación, Presentación y Sesión de OSI.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué capas de OSI combina TCP/IP en su capa de Acceso a la Red?
Reverso: Combina las capas de Enlace de datos y Física de OSI.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Cuál es la diferencia principal entre OSI y TCP/IP en cuanto a capas?
Reverso: OSI tiene 7 capas (más detallado y teórico), TCP/IP tiene 4 capas (más práctico y agregado).
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué diferencia hay en el enfoque de OSI vs TCP/IP?
Reverso: OSI es un modelo de referencia teórico que no define protocolos específicos; TCP/IP es un modelo práctico que define protocolos específicos.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Por qué TCP/IP se impuso sobre OSI en la práctica?
Reverso: TCP/IP llegó primero, era más simple, ya estaba implementado en ARPANET y respaldado por el crecimiento de Internet.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué es la interoperabilidad en el contexto de TCP/IP?
Reverso: Capacidad de TCP/IP para conectar redes de diferentes fabricantes y tecnologías, permitiendo la comunicación entre equipos heterogéneos.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué protocolos se usan en la capa de Aplicación de TCP/IP?
Reverso: HTTP, FTP, SMTP, DNS, DHCP, SSH, Telnet, SNMP, NTP, LDAP, SIP, RTP.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué protocolos se usan en la capa de Transporte de TCP/IP?
Reverso: TCP (confiable) y UDP (no confiable).
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué protocolos se usan en la capa de Internet de TCP/IP?
Reverso: IP (IPv4/IPv6), ICMP, ARP, NAT, OSPF, RIP, BGP, IPsec.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué protocolos/tecnologías se usan en la capa de Acceso a la Red?
Reverso: Ethernet, Wi-Fi, PPP, HDLC, VLAN, STP, PPPoE, controladores de interfaz (NIC).
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué significa que IP sea "best effort"?
Reverso: IP hace el máximo esfuerzo por entregar los paquetes, pero no garantiza entrega, orden ni integridad.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué significa que TCP sea "orientado a conexión"?
Reverso: TCP establece una conexión lógica (handshake) antes de enviar datos y la finaliza al terminar la transmisión.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué función cumple el TTL en el encabezado IP?
Reverso: Evita que los paquetes circulen indefinidamente; se decrementa en cada salto y se descarta si llega a 0.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué función cumplen los puertos en TCP?
Reverso: Permiten multiplexar múltiples aplicaciones en un mismo host, identificando cada comunicación por su número de puerto.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Cuál es la analogía del correo postal para TCP/IP?
Reverso: TCP = mensajería certificada (confirma entrega, reenvía, ordena); IP = correo estándar (solo pone dirección y envía).
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué protocolos de enrutamiento se usan en TCP/IP?
Reverso: OSPF (redes internas), RIP (simple), BGP (entre sistemas autónomos, principal en Internet).
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué función cumple ARP en TCP/IP?
Reverso: Resuelve direcciones IP a direcciones MAC dentro de una red local.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué función cumple NAT?
Reverso: Traduce direcciones IP privadas a una IP pública, permitiendo que varios dispositivos compartan una sola IP.
Tags: redes-1 clase
END

START
Básico
Anverso: ¿Qué es ICMP y para qué se usa?
Reverso: Protocolo de mensajes de control; usado por `ping` (verifica conectividad) y `traceroute` (rastrea ruta).
Tags: redes-1 clase
END

%%Flashcard para escribir la respuesta%%
START
Básico (teclear la respuesta)
Anverso: ¿Qué es el modelo TCP/IP?
Reverso: Conjunto de protocolos de comunicación utilizado en Internet, desarrollado por DARPA en los años 70 como reemplazo de NCP.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Cuál fue el contexto histórico del modelo TCP/IP?
Reverso: Nació para superar las limitaciones de NCP (protocolo de ARPANET) y permitir la interconexión de redes heterogéneas. Desarrollado por Cerf y Kahn.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué es NCP y cuál fue su relación con TCP/IP?
Reverso: NCP fue el protocolo original de ARPANET, pero era monolítico y no podía interconectar redes diferentes. TCP/IP lo reemplazó en 1983.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué es IP (Internet Protocol)?
Reverso: Protocolo de la capa de Internet (capa 3 en TCP/IP) responsable del direccionamiento lógico (direcciones IP) y enrutamiento de paquetes.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Cuál es la función principal de IP?
Reverso: Enrutar paquetes de datos determinando la ruta óptima desde el origen hasta el destino mediante direcciones IP.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué características tiene IP?
Reverso: Protocolo sin conexión, no fiable (best effort), no garantiza entrega, orden ni integridad. Realiza fragmentación y reensamblaje.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué información incluye el encabezado IP?
Reverso: Versión, TTL, direcciones IP origen/destino, tipo de servicio, checksum, protocolo de transporte encapsulado (TCP/UDP).
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué es TCP (Transmission Control Protocol)?
Reverso: Protocolo de la capa de Transporte (capa 4 en TCP/IP) que proporciona comunicación extremo a extremo confiable, orientada a conexión.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Cuál es la función principal de TCP?
Reverso: Garantizar la entrega completa, en orden y sin errores de los datos entre aplicaciones en diferentes hosts.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué características tiene TCP?
Reverso: Orientado a conexión (handshake 3 vías), confiable (ACK, retransmisión), control de flujo (ventana deslizante) y control de congestión.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué información incluye el encabezado TCP?
Reverso: Puertos origen/destino, números de secuencia y ACK, banderas de control (SYN, ACK, FIN), tamaño de ventana y checksum.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Cuántas capas tiene el modelo TCP/IP y cuáles son?
Reverso: 4 capas: Aplicación, Transporte, Internet (o Red) y Acceso a la Red (o Enlace/Física).
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué capas de OSI combina TCP/IP en su capa de Aplicación?
Reverso: Combina las capas de Aplicación, Presentación y Sesión de OSI.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué capas de OSI combina TCP/IP en su capa de Acceso a la Red?
Reverso: Combina las capas de Enlace de datos y Física de OSI.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Cuál es la diferencia principal entre OSI y TCP/IP en cuanto a capas?
Reverso: OSI tiene 7 capas (más detallado y teórico), TCP/IP tiene 4 capas (más práctico y agregado).
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué diferencia hay en el enfoque de OSI vs TCP/IP?
Reverso: OSI es un modelo de referencia teórico que no define protocolos específicos; TCP/IP es un modelo práctico que define protocolos específicos.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Por qué TCP/IP se impuso sobre OSI en la práctica?
Reverso: TCP/IP llegó primero, era más simple, ya estaba implementado en ARPANET y respaldado por el crecimiento de Internet.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué es la interoperabilidad en el contexto de TCP/IP?
Reverso: Capacidad de TCP/IP para conectar redes de diferentes fabricantes y tecnologías, permitiendo la comunicación entre equipos heterogéneos.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué protocolos se usan en la capa de Aplicación de TCP/IP?
Reverso: HTTP, FTP, SMTP, DNS, DHCP, SSH, Telnet, SNMP, NTP, LDAP, SIP, RTP.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué protocolos se usan en la capa de Transporte de TCP/IP?
Reverso: TCP (confiable) y UDP (no confiable).
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué protocolos se usan en la capa de Internet de TCP/IP?
Reverso: IP (IPv4/IPv6), ICMP, ARP, NAT, OSPF, RIP, BGP, IPsec.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué protocolos/tecnologías se usan en la capa de Acceso a la Red?
Reverso: Ethernet, Wi-Fi, PPP, HDLC, VLAN, STP, PPPoE, controladores de interfaz (NIC).
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué significa que IP sea "best effort"?
Reverso: IP hace el máximo esfuerzo por entregar los paquetes, pero no garantiza entrega, orden ni integridad.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué significa que TCP sea "orientado a conexión"?
Reverso: TCP establece una conexión lógica (handshake) antes de enviar datos y la finaliza al terminar la transmisión.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué función cumple el TTL en el encabezado IP?
Reverso: Evita que los paquetes circulen indefinidamente; se decrementa en cada salto y se descarta si llega a 0.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué función cumplen los puertos en TCP?
Reverso: Permiten multiplexar múltiples aplicaciones en un mismo host, identificando cada comunicación por su número de puerto.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Cuál es la analogía del correo postal para TCP/IP?
Reverso: TCP = mensajería certificada (confirma entrega, reenvía, ordena); IP = correo estándar (solo pone dirección y envía).
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué protocolos de enrutamiento se usan en TCP/IP?
Reverso: OSPF (redes internas), RIP (simple), BGP (entre sistemas autónomos, principal en Internet).
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué función cumple ARP en TCP/IP?
Reverso: Resuelve direcciones IP a direcciones MAC dentro de una red local.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué función cumple NAT?
Reverso: Traduce direcciones IP privadas a una IP pública, permitiendo que varios dispositivos compartan una sola IP.
Tags: redes-1 clase
END

START
Básico (teclear la respuesta)
Anverso: ¿Qué es ICMP y para qué se usa?
Reverso: Protocolo de mensajes de control; usado por `ping` (verifica conectividad) y `traceroute` (rastrea ruta).
Tags: redes-1 clase
END

---

## 🔙 Volver al índice

[[03_Areas/redes-1/MOC-redes-1|Volver al MOC de redes-1]]