%% ============================================================
PLANTILLA: NOTA DIARIA

CUÁNDO SE CREA: Automáticamente al hacer clic en el ícono de
  calendario en el panel lateral, o con el plugin Calendar.
DÓNDE SE GUARDA: 00_Inbox/Daily/ (configurado en Periodic Notes)

PROPÓSITO:
  No es un diario personal. Es una herramienta operativa:
  - Registrar lo que capturaste hoy para no perderlo
  - Ver tus tareas del día en un solo lugar
  - Cerrar el día sabiendo qué quedó pendiente

REGLA DEL INBOX:
  Todo lo que anotés en "Brain dump" debe procesarse antes de 48 horas.
  Si algo lleva más de 2 días en el inbox → se pierde en la práctica.
============================================================ %%

---
tipo: daily
fecha: <% tp.date.now("YYYY-MM-DD") %>
tags: [daily]
---

# 📅 <% tp.date.now("dddd, DD MMMM YYYY") %>
%% Templater inserta el día y fecha completos automáticamente %%

---

## 🌅 Inicio del día

**3 prioridades de hoy:**
%% Elegí SOLO 3. Si ponés más de 3 "prioridades", no tenés prioridades. %%
1. 
2. 
3. 

**🃏 Anki del día:**
- [ ] Repasar las tarjetas de hoy en Anki antes de estudiar
%% Hacé esto ANTES de cualquier sesión de estudio. Es lo más importante del día. %%

---

## 📝 Brain dump
%% Zona de captura libre. Todo lo que pase por tu cabeza: ideas, dudas,
   cosas que te acordaste en clase, conceptos que no entendiste, tareas
   que surgieron, links que querés revisar.
   Sin estructura. Sin juicio. Solo capturá.
   Después de 48hs esto debería estar vacío o convertido en notas reales. %%



---

## ✅ Tareas del día
%% El plugin Tasks muestra automáticamente todas las tareas con fecha de hoy.
   No editás nada acá: lo que aparece viene de tus notas de proyectos y clases. %%

```tasks
not done
due today
```

---

## 🌙 Cierre del día

**¿Qué aprendí hoy?**
%% Una o dos oraciones. Si no podés responder esto, el día no fue productivo. %%

**¿Qué quedó sin resolver?**

**Notas pendientes de procesar mañana:**
%% Revisá el brain dump de arriba y listá lo que hay que convertir en notas reales %%
- [ ] 

