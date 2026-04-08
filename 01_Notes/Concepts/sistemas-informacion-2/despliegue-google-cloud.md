---
tipo: concepto
materia: sistemas-informacion-2
semestre: 7
fecha-creacion: 2026-04-07
dificultad: 🟡 media
estado: 🔵 borrador
tags: [concepto, despliegue, google-cloud, parcial]

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

# Despliegue en Google Cloud

## 📖 Definición simple

%%
Explicalo como si el que lo va a leer nunca oyó hablar del tema.

- Sin tecnicismos.
- Sin siglas sin explicar.
- Una o dos oraciones máximo.
- Si no podés hacerlo simple, todavía no lo entendiste del todo (Feynman dixit).
%%

El despliegue en Google Cloud para el sistema de auxilio mecánico usa tres servicios principales: **Compute Engine** (máquinas virtuales como EC2), **Cloud SQL** (base de datos gestionada como RDS) y **Cloud Storage** (almacenamiento de objetos como S3). Estos servicios alojan el backend, la base de datos y la aplicación web estática del proyecto.

## 🧩 Explicación técnica

%%
Ahora sí la versión completa con términos técnicos, fórmulas, estructura, etc. Podés usar tablas:

- Listas
- Diagramas
- Bloques de código
- Tablas
- Imagenes
%%

En el contexto del parcial, el despliegue en Google Cloud Platform (GCP) utiliza los siguientes servicios equivalentes a los de AWS:

### Comparativa de servicios

| Área | AWS | Google Cloud | Uso en el parcial |
|------|-----|--------------|-------------------|
| **Computación (backend)** | EC2 (máquina virtual) | **Compute Engine** | Alojar el backend FastAPI |
| **Base de datos gestionada** | RDS (PostgreSQL) | **Cloud SQL** | Almacenar datos de emergencias, usuarios, pagos |
| **Almacenamiento de objetos estáticos** | S3 | **Cloud Storage** | Hostear la aplicación web Angular |

### Servicios de Google Cloud detallados

- **Compute Engine:** Servicio de Infraestructura como Servicio (IaaS) que permite crear y gestionar máquinas virtuales a medida[reference:0]. Ofrece control total sobre el sistema operativo y el software, ideal para el backend FastAPI.
- **Cloud SQL:** Servicio de base de datos relacional completamente gestionado. Soporta PostgreSQL y facilita la administración (copias de seguridad, parches, escalado)[reference:1]. Se conecta de forma segura con Compute Engine o Cloud Run.
- **Cloud Storage:** Servicio de almacenamiento de objetos con una API unificada. Se puede usar para hostear sitios web estáticos (como la aplicación Angular) o para guardar evidencias de emergencias (fotos, audios)[reference:2].

### Despliegue del backend FastAPI en Compute Engine

```bash
# Crear una instancia de Compute Engine
gcloud compute instances create backend-instance \
    --machine-type=e2-micro \
    --image-family=ubuntu-2204-lts \
    --image-project=ubuntu-os-cloud \
    --tags=http-server,https-server

# Conectarse por SSH y transferir el código
gcloud compute ssh backend-instance

# Instalar dependencias
sudo apt update && sudo apt install python3-pip -y
pip3 install fastapi uvicorn psycopg2-binary

# Clonar el repositorio
git clone https://github.com/tu-usuario/auxilio-backend.git
cd auxilio-backend

# Ejecutar con Uvicorn (usar systemd para mantenerlo activo)
uvicorn main:app --host 0.0.0.0 --port 8080
```

### Despliegue de la base de datos en Cloud SQL

```bash
# Crear instancia de Cloud SQL con PostgreSQL
gcloud sql instances create auxilio-db \
    --database-version=POSTGRES_14 \
    --cpu=1 --memory=3840MiB \
    --region=us-central1 \
    --root-password=CONTRASEÑA_SEGURA

# Crear la base de datos y un usuario
gcloud sql databases create auxilio_db --instance=auxilio-db
gcloud sql users create app_user --instance=auxilio-db --password=OTRA_CONTRASEÑA
```

Conectar FastAPI a Cloud SQL usando el proxy Unix socket (recomendado):

```python
import os
import psycopg2

DATABASE_URL = f"postgresql://{os.getenv('DB_USER')}:{os.getenv('DB_PASS')}@/postgres?host=/cloudsql/{os.getenv('CLOUD_SQL_CONNECTION_NAME')}"

# Configurar en Compute Engine: exportar variables de entorno
export DB_USER=app_user
export DB_PASS=OTRA_CONTRASEÑA
export CLOUD_SQL_CONNECTION_NAME=tu-proyecto:us-central1:auxilio-db
```

### Despliegue de Angular en Cloud Storage

```bash
# Construir la aplicación Angular
ng build --configuration production

# Crear un bucket y configurarlo para sitio web estático
gcloud storage buckets create gs://app-auxilio-web --location=us-central1
gcloud storage buckets update gs://app-auxilio-web --web-main-page-suffix=index.html --web-error-page=404.html

# Subir los archivos compilados
gcloud storage cp -r dist/auxilio-web/* gs://app-auxilio-web

# Hacer los objetos públicos (si se desea acceso anónimo)
gcloud storage objects update gs://app-auxilio-web/index.html --add-acl-grant=entity=AllUsers,role=READER
```

### Alternativa serverless (más moderna para FastAPI)

Como alternativa a Compute Engine, se puede usar **Cloud Run** para desplegar el backend FastAPI en contenedores Docker. Ofrece escalado automático desde cero, solo se paga por uso.

```bash
# Construir imagen Docker
docker build -t gcr.io/tu-proyecto/fastapi-backend .
docker push gcr.io/tu-proyecto/fastapi-backend

# Desplegar en Cloud Run
gcloud run deploy fastapi-backend \
    --image gcr.io/tu-proyecto/fastapi-backend \
    --platform managed \
    --region us-central1 \
    --allow-unauthenticated \
    --add-cloudsql-instances=tu-proyecto:us-central1:auxilio-db
```

## 🔗 Se conecta con

%%  
Links a otras notas atómicas relacionadas.  
Esto es lo que convierte tus notas en una red (Zettelkasten) en vez de una lista.

Agregá todos los conceptos que se relacionen con este.  
%%

- [[stack-flutter-angular-fastapi]]
    
- [[sistema-auxilio-mecanico-flujo]]
    
- [[notificaciones-push-firebase]]
    
- [[pasarela-pagos-integracion]]
    

## 🌍 Ejemplo concreto

%%  
Un caso real (puede ser codigo) sobre el concepto. Los ejemplos concretos son lo que hace que el concepto "enganche" en la memoria.  
%%

**Caso: Despliegue completo del sistema de auxilio mecánico en Google Cloud**

- **Compute Engine** aloja el backend FastAPI (`backend-instance`).
    
- **Cloud SQL** gestiona la base de datos PostgreSQL (`auxilio-db`).
    
- **Cloud Storage** sirve la aplicación Angular (`app-auxilio-web`).
    
- **Flutter** se distribuye como APK/IPA desde Firebase App Distribution o Google Play Store.
    

Los componentes se comunican:

- El usuario abre la web `https://storage.googleapis.com/app-auxilio-web/index.html` (Angular) que consume la API pública del backend (`http://<IP-de-Compute-Engine>:8080/api`).
    
- El backend se conecta a Cloud SQL mediante socket Unix (`/cloudsql/tu-proyecto:us-central1:auxilio-db`).
    

## ⚠️ Errores comunes

%%  
¿Qué confunde a la gente con este concepto?  
¿Con qué otro concepto se suele mezclar?  
¿Qué pensabas vos antes de entenderlo bien?  
%%

- **Confundir Cloud Storage con base de datos:** Cloud Storage es para archivos estáticos (imágenes, PDFs, binarios), no para consultas SQL. No almacenes datos relacionales ahí.
    
- **Usar Compute Engine cuando Cloud Run es suficiente:** Si tu aplicación es stateless y querés simplificar la gestión y pagar solo por uso, Cloud Run es una alternativa más moderna y económica.
    
- **Olvidar configurar reglas de firewall en Compute Engine:** Por defecto, las instancias no aceptan tráfico HTTP/HTTPS. Hay que agregar etiquetas (`--tags=http-server,https-server`) y reglas de firewall.
    
- **Conectar directamente a Cloud SQL sin el proxy:** Para conexiones seguras, usá el proxy de Cloud SQL (socket Unix) en lugar de abrir la base de datos a toda Internet.
    

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
¿Cuáles son los servicios equivalentes en Google Cloud a AWS EC2, RDS y S3?  
Back: Compute Engine (EC2), Cloud SQL (RDS), Cloud Storage (S3).  
Tags: sistemas-informacion-2 concepto despliegue  
END

START  
Básico  
¿Qué servicio de Google Cloud se recomienda para desplegar el backend FastAPI de forma serverless?  
Back: Cloud Run.  
Tags: sistemas-informacion-2 concepto despliegue  
END

START  
Básico  
¿Cómo se conecta un backend en Compute Engine a una base de datos Cloud SQL de forma segura?  
Back: Usando el proxy de Cloud SQL con un socket Unix (`/cloudsql/proyecto:region:instancia`).  
Tags: sistemas-informacion-2 concepto despliegue  
END

START  
Básico  
¿Para qué se usa Cloud Storage en el despliegue del sistema de auxilio mecánico?  
Back: Para hostear la aplicación web Angular como sitio estático y para almacenar evidencias (fotos, audios) de emergencias.  
Tags: sistemas-informacion-2 concepto despliegue ejemplo  
END