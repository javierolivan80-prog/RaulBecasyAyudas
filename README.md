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

### 4. Fotografías

Hay dos, y se cambian sustituyendo el archivo con el mismo nombre:

| Archivo                  | Dónde sale                | Tamaño en pantalla |
| ------------------------ | ------------------------- | ------------------ |
| `assets/img/raul.jpg`    | Hero (portada)            | hasta 440 px       |
| `assets/img/raul-2.jpg`  | Sección "Quién es Raúl"   | 328 × 410 px       |

Recomendado: mínimo 900 px de lado para que se vean nítidas en pantallas de
alta densidad (móviles y portátiles modernos).

> **Nota sobre `raul-2.jpg`:** el original es una captura de vídeo de 516 × 505 px.
> Por eso se muestra limitada a 328 px de ancho (`max-width` en `.about-photo`):
> a mayor tamaño se vería blanda. Si consigues esa misma foto en mejor calidad,
> súbela con el mismo nombre y sube ese `max-width` en `assets/css/styles.css`.

Si cambias mucho la proporción de una foto, ajusta también `width` y `height`
en su etiqueta `<img>` de `index.html` para evitar saltos de maquetación.

---

## 📁 Estructura

```
.
├── index.html              Toda la página (una sola vista, 7 secciones)
├── assets/
│   ├── css/styles.css      Estilos completos, con tokens de diseño arriba
│   ├── js/config.js        ← EL ÚNICO ARCHIVO QUE HAY QUE EDITAR
│   ├── js/main.js          Comportamiento (menú, animaciones, formulario)
│   ├── img/
│   │   ├── raul.jpg        Retrato del hero
│   │   ├── raul-2.jpg      Retrato de la sección "Quién es Raúl"
│   │   └── favicon.svg     Icono de pestaña
│   └── fonts/              Fuentes auto-alojadas (Fraunces e Inter)
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
