/* ════════════════════════════════════════════════════════════════════════════
   RAÚL BECAS Y AYUDAS — CONFIGURACIÓN
   ────────────────────────────────────────────────────────────────────────────
   Este es el ÚNICO archivo que necesitas editar para poner la web en marcha.
   No hace falta tocar el HTML ni el CSS.

   1. Sustituye los enlaces de las redes por los reales.
   2. Pon el email de contacto.
   3. (Opcional) Añade cifras REALES de comunidad. Si las dejas vacías,
      esa parte simplemente no aparece en la web.
   ════════════════════════════════════════════════════════════════════════════ */

window.SITE_CONFIG = {

  /* ── EMAIL DE CONTACTO ───────────────────────────────────────────────────
     El formulario de contacto y el enlace directo usan esta dirección.        */
  email: "hola@raulbecasyayudas.com",   // ← CAMBIAR por el email real


  /* ── REDES SOCIALES ──────────────────────────────────────────────────────
     Pon la URL completa de cada perfil. Las redes que dejes con la url
     vacía ("") NO se mostrarán en la web, así que puedes borrar o vaciar
     las que no uses.
     `handle` es el nombre de usuario que se ve en la tarjeta (con la @).     */
  redes: [
    {
      id: "instagram",
      nombre: "Instagram",
      handle: "@raulbecasyayudas",             // ← CAMBIAR
      url: "https://www.instagram.com/",       // ← CAMBIAR por el perfil real
      descripcion: "Convocatorias del día, resúmenes visuales y respuestas en historias.",
      cta: "Seguir en Instagram"
    },
    {
      id: "tiktok",
      nombre: "TikTok",
      handle: "@raulbecasyayudas",             // ← CAMBIAR
      url: "https://www.tiktok.com/",          // ← CAMBIAR por el perfil real
      descripcion: "Explicaciones rápidas de becas y ayudas en formato vertical.",
      cta: "Seguir en TikTok"
    },
    {
      id: "youtube",
      nombre: "YouTube",
      handle: "@raulbecasyayudas",             // ← CAMBIAR
      url: "https://www.youtube.com/",         // ← CAMBIAR por el canal real
      descripcion: "Vídeos largos: convocatorias paso a paso y cómo rellenar la solicitud.",
      cta: "Ver el canal"
    },
    {
      id: "x",
      nombre: "X",
      handle: "@raulbecasyayudas",             // ← CAMBIAR
      url: "",                                  // vacío = no se muestra
      descripcion: "Avisos cortos de plazos y actualidad educativa.",
      cta: "Seguir en X"
    },
    {
      id: "telegram",
      nombre: "Telegram",
      handle: "@raulbecasyayudas",             // ← CAMBIAR
      url: "",                                  // vacío = no se muestra
      descripcion: "Canal de avisos para no perderte ninguna fecha límite.",
      cta: "Unirse al canal"
    },
    {
      id: "linkedin",
      nombre: "LinkedIn",
      handle: "Raúl Becas y Ayudas",           // ← CAMBIAR
      url: "",                                  // vacío = no se muestra
      descripcion: "Colaboraciones, instituciones y proyectos educativos.",
      cta: "Conectar en LinkedIn"
    }
  ],


  /* ── CIFRAS DE COMUNIDAD (OPCIONAL) ──────────────────────────────────────
     ⚠️  IMPORTANTE: usa SOLO datos reales y verificables.
     Si dejas la lista vacía (como está ahora), la web no muestra ninguna
     cifra y la sección "Su comunidad" sigue funcionando perfectamente.

     Ejemplo de uso:
       cifras: [
         { valor: "120K", etiqueta: "Seguidores en Instagram" },
         { valor: "85K",  etiqueta: "Seguidores en TikTok" },
         { valor: "3,4M", etiqueta: "Reproducciones en el último año" }
       ]                                                                      */
  cifras: []

};
