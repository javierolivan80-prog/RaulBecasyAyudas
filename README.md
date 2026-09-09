# Raúl — Abogado · web del despacho

Web de marca personal de **Raúl**, abogado especializado en nacionalidad
española, extranjería y derecho internacional entre España e Israel.

Es una web **estática**: HTML, CSS y JavaScript sin dependencias, sin framework
y sin proceso de compilación. Se publica tal cual en Vercel, Netlify, GitHub
Pages o cualquier hosting tradicional.

---

## ⚠️ Léeme antes de publicar

Los textos de la web —áreas de práctica, proceso de trabajo, preguntas
frecuentes— están **redactados como plantilla**. Son una base profesional
coherente, pero describen un despacho genérico, no necesariamente el tuyo.

**Antes de poner la web en producción, revísalos uno por uno y ajústalos a lo
que realmente ofreces.** Es la web de un profesional colegiado: todo lo que
afirme tiene que ser cierto.

Hay tres bloques que se han dejado **deliberadamente vacíos** porque solo
pueden rellenarse con datos reales:

| Bloque | Por qué está vacío |
| --- | --- |
| `credenciales` | El nº de colegiado es público y verificable. Inventarlo es una infracción deontológica. |
| `resenas` | Las reseñas falsas están prohibidas por la Directiva (UE) 2019/2161 y la Ley de Competencia Desleal, con sanciones de hasta el 4 % de la facturación. |
| `legal` | El aviso legal y la política de privacidad exigen datos identificativos reales. |

Mientras estén vacíos, esas secciones **no aparecen**: la web funciona
perfectamente sin ellas y no muestra huecos.

---

## 🚀 Puesta en marcha

Todo lo personalizable está en **un único archivo**:
[`assets/js/config.js`](assets/js/config.js).

### 1. Email de contacto

```js
email: "contacto@ejemplo.com",   // ← el email real del despacho
```

### 2. Perfiles

Sustituye la `url` de cada red por el perfil real. **Las redes con la url
vacía (`""`) no se muestran**, así que no quedan enlaces rotos.

### 3. Credenciales profesionales

```js
credenciales: [
  { etiqueta: "Colegio",   valor: "ICAM nº 000000" },
  { etiqueta: "Ejercicio", valor: "Desde 2016" },
  { etiqueta: "Idiomas",   valor: "Español · Hebreo · Inglés" }
]
```

Solo datos comprobables: el censo del Consejo General de la Abogacía es
público.

### 4. Reseñas de clientes

```js
resenas: [
  {
    texto:   "…",
    autor:   "María L.",
    detalle: "Nacionalidad por residencia · 2025"
  }
]
```

Tres requisitos para publicar una reseña:

1. Que sea de un **cliente real**.
2. Que te haya **autorizado por escrito** a publicarla.
3. Que **no revele datos que identifiquen su asunto** — el secreto profesional
   sigue vigente. Lo habitual es nombre e inicial del apellido.

Si la lista está vacía, la sección y su enlace del menú desaparecen solos.

### 5. Perfil profesional

```js
disponible: true,                 // false = oculta "Acepta nuevos casos"
textoDisponible: "Acepta nuevos casos",
plazoRespuesta: "Respuesta a consultas en 48 horas laborables",
ubicacion: "Tel Aviv, Israel",
husoHorario: "Una hora por delante de la España peninsular",
modalidad: "Consultas por videollamada y trámites por vía electrónica"
```

`ubicacion` alimenta además los **datos estructurados de schema.org**, que se
generan solos desde este archivo. Mantén el formato `Ciudad, País`.

### 6. Páginas legales (obligatorias)

Un abogado en ejercicio necesita publicar:

* **Aviso legal** con titular, NIF, colegio y nº de colegiado (LSSI-CE art. 10
  y normativa deontológica de publicidad).
* **Política de privacidad**: el formulario recoge datos personales que, según
  la materia, pueden ser de categoría especial (RGPD).

Cuando las tengas, pon sus URLs en el bloque `legal` y aparecerán en el pie.

### 7. Fotografías

| Archivo | Dónde sale | Tamaño en pantalla |
| --- | --- | --- |
| `assets/img/raul.jpg` | Portada | hasta 440 px |
| `assets/img/raul-2.jpg` | Sección «Perfil» | 328 × 410 px |

`raul-2.jpg` es una captura de 516 × 505 px, por eso se limita a 328 px de
ancho. Si consigues el original en mejor calidad, súbelo con el mismo nombre y
sube el `max-width` de `.about-photo` en el CSS.

---

## 📁 Estructura

```
.
├── index.html              Toda la página (7 secciones)
├── assets/
│   ├── css/styles.css      Estilos, con los tokens de diseño arriba
│   ├── css/fonts.css       Fuentes auto-alojadas
│   ├── js/config.js        ← EL ÚNICO ARCHIVO QUE HAY QUE EDITAR
│   ├── js/main.js          Comportamiento (menú, reseñas, formulario)
│   ├── img/                Retratos y favicon
│   └── fonts/              Fraunces e Inter (113 KB, sin terceros)
└── README.md
```

## 🧭 Secciones

1. **Portada** — nombre, especialidad, ubicación y llamada a consulta.
2. **Perfil** — trayectoria, forma de trabajar y credenciales.
3. **Áreas de práctica** — las seis materias del despacho.
4. **Cómo se trabaja** — el proceso en cuatro pasos.
5. **Reseñas** — testimonios reales (oculta si no hay).
6. **Preguntas frecuentes** — acordeón accesible.
7. **Contacto** — formulario de consulta.

## ✉️ Cómo funciona el formulario

No hay servidor: al enviar, se valida en el navegador y se abre la aplicación
de correo con el mensaje ya redactado (`mailto:`).

> Para un despacho conviene valorar un servicio de formularios con cifrado
> (Formspree, Basin) y enlazar la política de privacidad junto al botón de
> envío, ya que las consultas pueden contener datos personales sensibles.

## 🛠️ Ver la web en local

```bash
python3 -m http.server 8000
# abre http://localhost:8000
```

## ♿ Accesibilidad y rendimiento

* HTML semántico, `skip link`, foco visible y navegación completa por teclado.
* Acordeón con `<details>` nativo.
* Respeta `prefers-reduced-motion`.
* Contraste verificado contra el mínimo AA.
* Sin librerías ni peticiones a terceros: las fuentes van auto-alojadas.

## 📄 Aviso

El contenido de la web es información general y no constituye asesoramiento
jurídico ni crea relación abogado-cliente.
