---
# 🎯 CONFIGURACIÓN DE LA NOTA (METADATOS)

# Esta parte de arriba (entre los ---) es el "carné de identidad" de la nota.
# Obsidian y los plugins la usan para clasificarla y mostrarla en dashboards.

# 🏷️ "tema" = es un concepto que profundizas (no una clase suelta)

# 📚 Aquí el script nuevo_tema.js pondrá automáticamente la materia que elegiste.
# ¡No lo toques! Si lo cambias a mano, el dashboard puede no encontrarlo.

# 🎯 ¿Cómo de difícil te resultó entenderlo?
#   🟢 baja  → lo dominas rápido
#   🟡 media → hay que darle un par de vueltas
#   🔴 alta  → se te atraganta, ¡vuelve a él pronto!
# (Los dashboards usarán esto para mostrarte los temas prioritarios)

# 🏷️ Etiquetas extra que quieras ponerle, por ejemplo:
#    [programacion, algoritmos, concurrencia]
# Déjalo vacío si no usas tags.

# ¡FIN DE LOS METADATOS! A partir de aquí empieza el contenido bonito.

tipo: tema 
materia: "{{Materia}}"
dificultad: 🟡 media  
tags: [] 
---
# {{title}}

> [!TIP] **🎉 ¡Bienvenido a tu nueva nota de tema!**  
> Esta plantilla es como un **laboratorio de conocimiento**. Aquí vas a destripar el concepto, conectarlo con tus clases y guardar las referencias para siempre. ¡Manos a la obra!

---

## 🧠 Desarrollo del concepto

*Este es el corazón de la nota. Explica el tema con tus propias palabras, como si se lo estuvieras contando a un compañero.*

**Consejos:**

- Empieza con una definición clara y sencilla.
- Luego profundiza: cómo funciona, para qué sirve, partes que lo componen...
- Usa **ejemplos** (cuantos más, mejor).
- Si hay código, fórrmula o diagrama, ¡ponlo!

> [!example]
> **Por ejemplo, si el tema es "Semáforos":**
>
> - **Definición:** Los semáforos son variables especiales que usa el sistema operativo para evitar que dos procesos se peleen por el mismo recurso.
> - **Operaciones básicas:** `wait()` (intenta entrar) y `signal()` (avisa que sale).
> - **Tipos:**
>   - *Binarios* → solo 0 o 1 (como una luz roja/verde).
>   - *De conteo* → pueden tener valores mayores (ej. permisos para 5 procesos).
> - **Peligro:** Si los usas mal, puedes provocar un *interbloqueo* (todos esperando a todos). ¡Cuidado!

**Empieza tú:**

-
-
-

---

## 🔗 Enlaces a clases donde apareció este tema

*Aquí conectas este tema con las clases en las que se mencionó. Así, cuando estudies el tema, podrás saltar directamente a la explicación del profesor.*

**Formato:** `[[nombre-de-la-nota-de-clase]]` (sin la extensión .md).

- Por ejemplo: `[[2026-03-18_introduccion-sistemas-operativos]]`
- Si no has dado clase aún, déjalo vacío y lo rellenas después.

**Tus enlaces:**

-
-
-

> [!NOTE] **¿Por qué enlazar?**  
> Porque el conocimiento no son fichas sueltas, es una **red**. Cada enlace que pones aquí hará que cuando leas el tema, puedas ver el contexto real donde lo explicaron. ¡Magia!

---

## 📚 Referencias y recursos

*Todo el material externo que te ayudó a entender el tema: libros, vídeos, artículos, páginas web...*

**Formato recomendado:** lista con hipervínculos.

> [!example] Ejemplo:
>
> - [Operating Systems: Three Easy Pieces (capítulo 5)](https://pages.cs.wisc.edu/~remzi/OSTEP/)
> - [Vídeo: Semáforos explicados con perritos](https://youtube.com/...)
> - Apuntes del profesor (PDF) en `03-recursos/pdfs/semaforos.pdf`

**Tus referencias:**

-
-
-

---

## 🎯 Resumen rápido: ¿cómo usar esta plantilla?

1. **Crear la nota:** Pulsa `Ctrl+Shift+E` (o el atajo que tengas).
2. **Elegir materia:** Te saldrá una lista con las materias que ya existen. Elige la que toca.
3. **Poner título:** Escribe el nombre del tema (con guiones si son varias palabras, ej. `semaforos`).
4. **¡A rellenar!** Completa las secciones con calma, no hace falta que sea en el mismo día.
5. **Ajusta la dificultad** (el campo de arriba) según lo que te cueste. Así los dashboards te lo recordarán.
6. **Vuelve más tarde** a añadir más enlaces y referencias cuando las encuentres.

> [!warning] **¡Recuerda!**  
> El campo `materia` de arriba lo rellena el script automáticamente. Si lo cambias a mano, el dashboard de esa materia dejará de ver este tema. ¡Déjalo como está!

---

> [!quote] **Frase para guardar en el corazón**  
> *"El conocimiento no es una piscina, es una red. Cada nueva conexión hace más fuerte la anterior."*
