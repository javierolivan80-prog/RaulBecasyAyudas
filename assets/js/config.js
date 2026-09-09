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
      handle: "@raulgb_01",
      url: "https://www.instagram.com/raulgb_01/",
      descripcion: "Convocatorias del día, resúmenes visuales y respuestas en historias.",
      cta: "Seguir en Instagram"
    },
    {
      id: "tiktok",
      nombre: "TikTok",
      handle: "@raulgb_02",
      url: "https://www.tiktok.com/@raulgb_02",
      descripcion: "Explicaciones rápidas de becas y ayudas en formato vertical.",
      cta: "Seguir en TikTok"
    },
    {
      id: "youtube",
      nombre: "YouTube",
      handle: "@raulgb_02",
      url: "https://www.youtube.com/@raulgb_02",
      descripcion: "Vídeos largos: convocatorias paso a paso y cómo rellenar la solicitud.",
      cta: "Ver el canal"
    },
    {
      id: "x",
      nombre: "X",
      handle: "@raulgb_02",                    // ← ajustar si el usuario difiere
      url: "",                                  // vacío = no se muestra
      descripcion: "Avisos cortos de plazos y actualidad educativa.",
      cta: "Seguir en X"
    },
    {
      id: "telegram",
      nombre: "Telegram",
      handle: "@raulgb_02",                    // ← ajustar si el usuario difiere
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
  cifras: [],


  /* ── PERFIL PROFESIONAL ──────────────────────────────────────────────────
     Elementos que transmiten que detrás hay un profesional en activo.
     Cualquiera de ellos vacío o en false simplemente no se muestra.        */
  profesional: {

    // Distintivo "Disponible para colaboraciones" en la portada.
    // Ponlo en false cuando no estés aceptando proyectos.
    disponible: true,
    textoDisponible: "Disponible para colaboraciones",

    // Plazo de respuesta que se anuncia en la sección de contacto.
    // Déjalo vacío ("") si prefieres no comprometerte a un plazo.
    plazoRespuesta: "Respuesta en 48 horas laborables",

    // Ubicación. Aparece en portada, contacto y pie.
    ubicacion: "Tel Aviv, Israel",

    // Aclaración horaria para quien vaya a proponer una reunión.
    // Israel va una hora por delante de la España peninsular casi todo el
    // año (los cambios de hora no coinciden exactamente). Vacío = no se muestra.
    husoHorario: "Una hora por delante de la España peninsular",

    // Aclaración sobre cómo se trabaja desde la distancia. Vacío = no se muestra.
    modalidad: "Colaboraciones en remoto para toda España"
  },


  /* ── PÁGINAS LEGALES ─────────────────────────────────────────────────────
     ⚠️  IMPORTANTE si Raúl factura como autónomo:
     la LSSI-CE obliga a identificar al titular de la web (nombre, NIF y
     datos de contacto) y, si el formulario recoge datos personales, a
     publicar una política de privacidad.

     Cuando tengas esas páginas, pon aquí sus URLs y aparecerán en el pie.
     Con las URLs vacías no se muestra ningún enlace.                       */
  legal: [
    { texto: "Aviso legal",            url: "" },
    { texto: "Política de privacidad", url: "" }
  ]

};
