---
tipo: concepto
materia: sistemas-informacion-2
semestre: 7
fecha-creacion: 2026-04-07
dificultad: 🟡 media
estado: 🔵 borrador
tags: [concepto, seguridad, jwt, roles]

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

# Seguridad, roles y autenticación JWT en el sistema de auxilio mecánico

## 📖 Definición simple

%%
Explicalo como si el que lo va a leer nunca oyó hablar del tema.

- Sin tecnicismos.
- Sin siglas sin explicar.
- Una o dos oraciones máximo.
- Si no podés hacerlo simple, todavía no lo entendiste del todo (Feynman dixit).
%%

La seguridad en el sistema se basa en tres pilares: **JWT** (un "carnet digital" que demuestra quién eres), **roles** (qué tipo de usuario eres: cliente, taller, administrador) y **permisos** (qué acciones puedes hacer según tu rol). Cuando un usuario inicia sesión, el backend le entrega un JWT. La app incluye ese token en cada petición para que el backend sepa quién es y qué puede hacer. Esto evita que un cliente acceda a funciones de taller o viceversa.

## 🧩 Explicación técnica

%%
Ahora sí la versión completa con términos técnicos, fórmulas, estructura, etc. Podés usar tablas:

- Listas
- Diagramas
- Bloques de código
- Tablas
- Imagenes
%%

### JWT (JSON Web Token)

JWT es un estándar (RFC 7519) para transmitir información segura entre partes como un objeto JSON compacto y autosuficiente. Un JWT está firmado digitalmente, por lo que puede ser verificado y confiable.

**Estructura de un JWT:**  
`xxxxx.yyyyy.zzzzz`  
- **Header** (algoritmo y tipo de token)  
- **Payload** (datos: id de usuario, rol, expiración)  
- **Firma** (verifica que el token no fue alterado)

**Flujo de autenticación con JWT en el sistema:**

```
1. Cliente/taller envía credenciales (email + contraseña) al endpoint /login.
    
2. Backend (FastAPI) verifica credenciales contra la base de datos.
    
3. Si son correctas, genera un JWT con:
    
    - user_id
        
    - rol (cliente, taller, administrador)
        
    - expiración (ej. 24 horas)
        
4. Backend devuelve el JWT al cliente.
    
5. Cliente guarda el JWT (en memoria, SharedPreferences, localStorage).
    
6. En cada petición a endpoints protegidos, cliente incluye el JWT en el header:  
    Authorization: Bearer <token>
    
7. Backend valida la firma, extrae el rol y permite o deniega la acción.
```


### Roles y permisos

| Rol | Acceso | Descripción |
|-----|--------|-------------|
| **cliente** | App móvil (Flutter) | Reportar emergencias, pagar, calificar taller, ver historial. |
| **taller** | App web (Angular) | Ver emergencias asignadas, aceptar/rechazar, actualizar estado, ver ingresos, calificar cliente. |
| **administrador** | App web (Angular) | Todo lo del taller + reportes globales, gestionar talleres, ver métricas. |

**Matriz de permisos (simplificada):**

| Endpoint / Acción | cliente | taller | admin |
|-------------------|---------|--------|-------|
| POST /emergencias | ✅ | ❌ | ✅ |
| GET /emergencias/mis-solicitudes | ✅ | ❌ | ❌ |
| GET /emergencias/asignadas | ❌ | ✅ | ✅ |
| PUT /emergencias/:id/aceptar | ❌ | ✅ | ❌ |
| GET /reportes/incidentes-por-tipo | ❌ | ❌ | ✅ |
| GET /reportes/ingresos-propios | ❌ | ✅ | ✅ |
| GET /usuarios | ❌ | ❌ | ✅ |

### Implementación en FastAPI (ejemplo)

```python
from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
import jwt

security = HTTPBearer()
SECRET_KEY = "clave_super_secreta"  # usar variable de entorno

def decode_token(credentials: HTTPAuthorizationCredentials = Depends(security)):
    token = credentials.credentials
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        return payload
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Token inválido")

def role_required(required_role: str):
    def role_checker(payload = Depends(decode_token)):
        if payload.get("rol") != required_role:
            raise HTTPException(status_code=403, detail="Permiso denegado")
        return payload
    return role_checker

# Uso en endpoints
@app.post("/emergencias")
async def crear_emergencia(emergencia: EmergenciaSchema, payload = Depends(role_required("cliente"))):
    # Solo clientes pueden crear emergencias
    pass

@app.get("/reportes/incidentes-por-tipo")
async def reporte_incidentes(payload = Depends(role_required("administrador"))):
    # Solo administrador
    pass
```

### Consideraciones adicionales

- **Almacenamiento de contraseñas:** Usar `passlib` con bcrypt para hashear contraseñas.
    
- **HTTPS obligatorio:** En producción, siempre usar HTTPS para evitar que el token sea interceptado.
    
- **Expiración y refresh:** Los JWT tienen tiempo de vida corto (ej. 24h). Se puede implementar un refresh token para sesiones largas (opcional).
    
- **CORS:** Configurar CORS en FastAPI para permitir solo los dominios de las apps (Flutter, Angular).
    

## 🔗 Se conecta con

%%  
Links a otras notas atómicas relacionadas.  
Esto es lo que convierte tus notas en una red (Zettelkasten) en vez de una lista.

Agregá todos los conceptos que se relacionen con este.  
%%

- [[stack-flutter-angular-fastapi]]
    
- [[sistema-auxilio-mecanico-flujo]]
    
- [[actores-sistema-informacion]]
    
- [[despliegue-google-cloud]]
    

## 🌍 Ejemplo concreto

%%  
Un caso real (puede ser codigo) sobre el concepto. Los ejemplos concretos son lo que hace que el concepto "enganche" en la memoria.  
%%

**Caso: Un taller intenta acceder a un reporte de administrador**

1. El usuario "Taller A" inicia sesión con email `taller@auxilio.com` y contraseña.
    
2. El backend genera un JWT con payload:
	```json
	{
		"user_id": 10,
		"rol": "taller",
		"exp": 1712500000
	}
	```
	
3. El taller intenta acceder a `GET /reportes/incidentes-por-tipo` (solo administrador).
    
4. La app web incluye el header: `Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
    
5. FastAPI valida el token, extrae `rol: "taller"`, no coincide con `"administrador"`, y responde con `403 Forbidden` y mensaje "Permiso denegado".
    
6. El taller ve un error en la interfaz. No puede acceder.
    

**Caso correcto:** El administrador sí puede acceder al reporte porque su token tiene `rol: "administrador"`.

## ⚠️ Errores comunes

%%  
¿Qué confunde a la gente con este concepto?  
¿Con qué otro concepto se suele mezclar?  
¿Qué pensabas vos antes de entenderlo bien?  
%%

- **Almacenar JWT en localStorage para Angular está bien, pero en Flutter usar almacenamiento seguro:** En web, localStorage es común pero vulnerable a XSS. Para Flutter, usar `flutter_secure_storage`.
    
- **No incluir expiración en el JWT:** Los tokens sin expiración son peligrosos. Siempre poner un `exp` razonable (ej. 24h).
    
- **Mezclar roles con permisos a nivel de UI:** Ocultar botones en el frontend no es suficiente. Siempre validar roles también en el backend.
    
- **Usar JWT como sesión sin logout del lado del servidor:** JWT es stateless; no se puede invalidar fácilmente. Para logout, se puede borrar el token del cliente y usar tokens de corta duración.
    
- **Exponer la clave secreta en el código:** Usar variables de entorno o secret managers (Google Cloud Secret Manager, AWS Secrets Manager).
    

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
¿Qué es JWT y para qué se usa en el sistema de auxilio mecánico?  
Back: JSON Web Token es un estándar para autenticación. Se usa para que el backend sepa quién es el usuario y qué rol tiene, sin necesidad de guardar sesiones en el servidor.  
Tags: sistemas-informacion-2 concepto seguridad  
END

START  
Básico  
¿Qué roles existen en el sistema de auxilio mecánico?  
Back: Cliente (app móvil), Taller (web), Administrador (web con permisos adicionales).  
Tags: sistemas-informacion-2 concepto seguridad  
END

START  
Básico  
¿Cómo se envía el JWT en cada petición al backend?  
Back: En el header HTTP: `Authorization: Bearer <token>`.  
Tags: sistemas-informacion-2 concepto seguridad  
END

START  
Básico  
¿Qué sucede si un taller intenta acceder a un endpoint de administrador?  
Back: El backend valida el rol del token, no coincide y devuelve error 403 Forbidden (Permiso denegado).  
Tags: sistemas-informacion-2 concepto seguridad ejemplo  
END