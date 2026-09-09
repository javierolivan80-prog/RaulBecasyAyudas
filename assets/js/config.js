/* ════════════════════════════════════════════════════════════════════════════
   RAÚL — ABOGADO · CONFIGURACIÓN
   ────────────────────────────────────────────────────────────────────────────
   Este es el ÚNICO archivo que necesitas editar. No hace falta tocar el HTML
   ni el CSS.

   ⚠️  AVISO IMPORTANTE SOBRE EL CONTENIDO
   Los textos de la web (áreas de práctica, proceso de trabajo, preguntas
   frecuentes) son una BASE REDACTADA COMO PLANTILLA. Antes de publicar,
   revísalos y ajústalos a lo que realmente ofreces: es la web de un
   profesional colegiado y todo lo que diga debe ser cierto.
   ════════════════════════════════════════════════════════════════════════════ */

window.SITE_CONFIG = {

  /* ── EMAIL DE CONTACTO ───────────────────────────────────────────────────
     Lo usan el enlace directo y el formulario de consulta.                   */
  email: "contacto@ejemplo.com",   // ← CAMBIAR por el email real


  /* ── PERFILES ────────────────────────────────────────────────────────────
     Las redes con la url vacía ("") NO se muestran, así que no quedan
     enlaces rotos. Para un despacho, LinkedIn suele ser la más relevante.    */
  redes: [
    {
      id: "linkedin",
      nombre: "LinkedIn",
      handle: "Raúl — Abogado",
      url: "",                                  // ← perfil profesional
      descripcion: "Perfil profesional y publicaciones jurídicas.",
      cta: "Conectar en LinkedIn"
    },
    {
      id: "instagram",
      nombre: "Instagram",
      handle: "@raulgb_01",
      url: "https://www.instagram.com/raulgb_01/",
      descripcion: "Divulgación jurídica en formato breve.",
      cta: "Seguir en Instagram"
    },
    {
      id: "tiktok",
      nombre: "TikTok",
      handle: "@raulgb_02",
      url: "https://www.tiktok.com/@raulgb_02",
      descripcion: "Explicaciones rápidas de trámites y plazos.",
      cta: "Seguir en TikTok"
    },
    {
      id: "youtube",
      nombre: "YouTube",
      handle: "@raulgb_02",
      url: "https://www.youtube.com/@raulgb_02",
      descripcion: "Vídeos largos explicando trámites paso a paso.",
      cta: "Ver el canal"
    }
  ],


  /* ── DATOS PROFESIONALES ─────────────────────────────────────────────────
     ⚠️  SOLO DATOS REALES Y COMPROBABLES.
     El número de colegiado es público y verificable en el censo del Consejo
     General de la Abogacía: un dato inventado aquí se detecta enseguida y
     además es una infracción deontológica grave.

     Con la lista vacía (como está ahora) este bloque no se muestra y la web
     funciona igual.

     Ejemplo de uso:
       credenciales: [
         { etiqueta: "Colegio",     valor: "ICAM nº 000000" },
         { etiqueta: "Ejercicio",   valor: "Desde 2016" },
         { etiqueta: "Idiomas",     valor: "Español · Hebreo · Inglés" }
       ]                                                                      */
  credenciales: [],


  /* ── RESEÑAS DE CLIENTES ─────────────────────────────────────────────────
     ⚠️  LEE ESTO ANTES DE RELLENARLO.

     Publicar reseñas inventadas es publicidad engañosa. Está prohibido por
     la Directiva (UE) 2019/2161 y la Ley de Competencia Desleal, y en la
     abogacía es además una infracción deontológica. Las sanciones por
     reseñas falsas llegan al 4 % de la facturación anual.

     Requisitos para publicar una reseña aquí:
       1. Que sea de un cliente real.
       2. Que te haya autorizado por escrito a publicarla.
       3. Que no revele datos que identifiquen su asunto (secreto profesional).
          Lo habitual es usar el nombre y la inicial del apellido.

     Con la lista vacía, la sección entera y su enlace del menú no aparecen.

     Ejemplo de uso:
       resenas: [
         {
           texto:  "Me explicó el expediente de nacionalidad paso a paso y supe en todo momento en qué punto estaba.",
           autor:  "María L.",
           detalle: "Nacionalidad por residencia · 2025"
         }
       ]                                                                      */
  resenas: [],


  /* ── PERFIL PROFESIONAL ──────────────────────────────────────────────────
     Cualquier campo vacío o en false simplemente no se muestra.              */
  profesional: {

    // Distintivo "Acepta nuevos casos" en la portada.
    // Ponlo en false cuando la agenda esté cerrada.
    disponible: true,
    textoDisponible: "Acepta nuevos casos",

    // Plazo de respuesta a las consultas. "" = no se anuncia plazo.
    plazoRespuesta: "Respuesta a consultas en 48 horas laborables",

    // Ubicación. Se muestra en portada, contacto y pie, y alimenta los
    // datos estructurados. Mantén el formato "Ciudad, País".
    ubicacion: "Tel Aviv, Israel",

    // Aclaración horaria para quien vaya a proponer una llamada.
    husoHorario: "Una hora por delante de la España peninsular",

    // Cómo se atiende a distancia.
    modalidad: "Consultas por videollamada y trámites por vía electrónica"
  },


  /* ── PÁGINAS LEGALES ─────────────────────────────────────────────────────
     ⚠️  OBLIGATORIAS en la web de un abogado en ejercicio:
       · Aviso legal con los datos del titular, NIF, colegio y nº de colegiado
         (LSSI-CE art. 10 y normativa deontológica de publicidad).
       · Política de privacidad: el formulario recoge datos personales y
         además pueden ser datos sensibles según la materia (RGPD).

     Cuando tengas esas páginas, pon aquí sus URLs y aparecerán en el pie.    */
  legal: [
    { texto: "Aviso legal",            url: "" },
    { texto: "Política de privacidad", url: "" }
  ]

};
