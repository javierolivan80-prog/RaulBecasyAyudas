# Raúl Becas y Ayudas — web personal

Sitio web de marca personal de **Raúl**, creador de contenido especializado en
becas, ayudas y oportunidades educativas para estudiantes y familias.

Es una web **estática**: HTML, CSS y JavaScript sin dependencias, sin framework
y sin proceso de compilación. Se puede publicar tal cual en GitHub Pages,
Netlify, Vercel o cualquier hosting tradicional.

---

## 🚀 Puesta en marcha (2 minutos)

Todo lo que hay que personalizar está en **un único archivo**:
[`assets/js/config.js`](assets/js/config.js). No hace falta tocar el HTML ni el CSS.

### 1. Email de contacto

```js
email: "hola@raulbecasyayudas.com",   // ← pon aquí el email real
```

Lo usan el enlace directo y el formulario de contacto.

### 2. Redes sociales

Sustituye la `url` de cada red por el perfil real:

```js
{
  id: "instagram",
  nombre: "Instagram",
  handle: "@tu_usuario",
  url: "https://www.instagram.com/tu_usuario/",
  descripcion: "Convocatorias del día, resúmenes visuales y respuestas en historias.",
  cta: "Seguir en Instagram"
}
```

* Las redes cuya `url` esté **vacía (`""`) no se muestran** en la web.
  Así puedes activar solo las que uses, sin dejar enlaces rotos.
* Redes ya preparadas con su icono: `instagram`, `tiktok`, `youtube`, `x`,
  `telegram`, `linkedin`. Cualquier otro `id` usará un icono genérico de web.

### 3. Cifras de comunidad (opcional)

> ⚠️ Usa **solo datos reales**. Si la lista está vacía —como viene por defecto—
> la web no muestra ninguna cifra y la sección "Su comunidad" funciona igual.

```js
cifras: [
  { valor: "120K", etiqueta: "Seguidores en Instagram" },
  { valor: "85K",  etiqueta: "Seguidores en TikTok" },
  { valor: "3,4M", etiqueta: "Reproducciones en el último año" }
]
```

### 4. Fotografía

La foto del hero es `assets/img/raul.jpg`. Para cambiarla, sustituye el archivo
manteniendo el nombre. Recomendado: formato cuadrado o vertical, mínimo
800 × 800 px. Si cambias mucho la proporción, ajusta `width` y `height` en la
etiqueta `<img>` de `index.html` para evitar saltos de maquetación.

---

## 📁 Estructura

```
.
├── index.html              Toda la página (una sola vista, 7 secciones)
├── assets/
│   ├── css/styles.css      Estilos completos, con tokens de diseño arriba
│   ├── js/config.js        ← EL ÚNICO ARCHIVO QUE HAY QUE EDITAR
│   ├── js/main.js          Comportamiento (menú, animaciones, formulario)
│   └── img/
│       ├── raul.jpg        Retrato del hero
│       └── favicon.svg     Icono de pestaña
└── README.md
```

## 🧭 Secciones

1. **Hero** — retrato, nombre, frase de propósito, CTA y redes.
2. **Quién es Raúl** — historia, misión y forma de trabajar.
3. **Qué hace** — sus seis áreas de contenido.
4. **Su comunidad** — impacto cualitativo (+ cifras reales si se configuran).
5. **Redes sociales** — tarjetas con enlace directo a cada perfil.
6. **Preguntas frecuentes** — acordeón accesible.
7. **Contacto** — formulario para colaboraciones, medios y centros educativos.

## ✉️ Cómo funciona el formulario

No hay servidor detrás: al enviar, se valida en el navegador y se abre la
aplicación de correo del usuario con el mensaje ya redactado (`mailto:`).
Es la opción más simple y sin mantenimiento.

Si algún día quieres recibir los mensajes directamente en una bandeja, basta
con sustituir el manejador `submit` de `assets/js/main.js` por un servicio de
formularios (Formspree, Basin, Netlify Forms…).

## 🛠️ Ver la web en local

```bash
python3 -m http.server 8000
# abre http://localhost:8000
```

## 🌐 Publicar en GitHub Pages

`Settings` → `Pages` → *Source*: `Deploy from a branch` → rama principal,
carpeta `/ (root)`. Al ser un sitio estático en la raíz, no hace falta nada más.

## ♿ Accesibilidad y rendimiento

* HTML semántico, `skip link`, foco visible y navegación completa por teclado.
* Acordeón de FAQ con `<details>` nativo.
* Respeta `prefers-reduced-motion`: sin animaciones para quien las desactiva.
* Sin librerías externas: solo se carga una fuente desde Google Fonts.
* Hoja de estilos y scripts propios, cacheables y ligeros.

## 📄 Aviso

Proyecto de divulgación independiente, no vinculado a ninguna administración
pública. La información oficial y definitiva sobre cualquier ayuda es siempre
la de la convocatoria publicada por el organismo correspondiente.
