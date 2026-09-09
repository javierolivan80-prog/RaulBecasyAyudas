/* ════════════════════════════════════════════════════════════════════════════
   RAÚL — ABOGADO · COMPORTAMIENTO
   Vanilla JS, sin dependencias. No hace falta editar este archivo:
   toda la configuración vive en assets/js/config.js
   ════════════════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var cfg = window.SITE_CONFIG || {};
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Iconos de marca (SVG inline, sin librerías externas) ───────────────── */
  var ICONS = {
    instagram: '<path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.8.25 2.2.42.6.22 1 .48 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.2 1.8-.4 2.2a3.8 3.8 0 0 1-.9 1.4c-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.8-.2-2.2-.4a3.8 3.8 0 0 1-1.4-.9 3.8 3.8 0 0 1-.9-1.4c-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c0-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.7.07-1.1.05-1.7.24-2.1.4-.5.2-.9.44-1.3.83-.4.4-.63.8-.83 1.3-.16.4-.35 1-.4 2.1C2.6 9.9 2.6 10.3 2.6 12s0 2.1.07 3.3c.05 1.1.24 1.7.4 2.1.2.5.44.9.83 1.3.4.4.8.63 1.3.83.4.16 1 .35 2.1.4 1.2.07 1.6.07 4.7.07s3.5 0 4.7-.07c1.1-.05 1.7-.24 2.1-.4.5-.2.9-.44 1.3-.83.4-.4.63-.8.83-1.3.16-.4.35-1 .4-2.1.07-1.2.07-1.6.07-3.3s0-2.1-.07-3.3c-.05-1.1-.24-1.7-.4-2.1a3.5 3.5 0 0 0-.83-1.3 3.5 3.5 0 0 0-1.3-.83c-.4-.16-1-.35-2.1-.4C15.5 4 15.1 4 12 4Zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 1.8a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2Zm5.1-3.3a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z" fill="currentColor"/>',
    tiktok: '<path d="M16.6 2h-3.1v13.2a2.6 2.6 0 1 1-2.2-2.57V9.4a5.8 5.8 0 1 0 5.3 5.78V8.5a7 7 0 0 0 4.1 1.33V6.7a3.9 3.9 0 0 1-2.9-1.32A4 4 0 0 1 16.6 2Z" fill="currentColor"/>',
    youtube: '<path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.28 5 12 5 12 5s-6.28 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.72 19 12 19 12 19s6.28 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15.1V8.9l5.2 3.1-5.2 3.1Z" fill="currentColor"/>',
    x: '<path d="M17.5 3h3.1l-6.8 7.8L21.8 21h-6.2l-4.9-6.4L5.1 21H2l7.3-8.3L2.4 3h6.4l4.4 5.8L17.5 3Zm-1.1 16.1h1.7L7.7 4.8H5.9l10.5 14.3Z" fill="currentColor"/>',
    telegram: '<path d="M21.7 4.3a1.2 1.2 0 0 0-1.26-.2L2.9 11a1.2 1.2 0 0 0 .1 2.24l4.2 1.42 1.62 5a1.2 1.2 0 0 0 2.02.45l2.3-2.4 4.36 3.2a1.2 1.2 0 0 0 1.9-.72l3.02-14.6a1.2 1.2 0 0 0-.72-1.29ZM9.5 14.2l-.5 3.6-1.06-3.3 8.5-6.1-6.94 5.8Z" fill="currentColor"/>',
    linkedin: '<path d="M6.94 5.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.3 8.9h3.4V21H3.3V8.9Zm5.5 0h3.25v1.65h.05c.45-.86 1.56-1.76 3.2-1.76 3.43 0 4.06 2.25 4.06 5.18V21h-3.4v-5.35c0-1.28-.02-2.92-1.78-2.92-1.78 0-2.05 1.39-2.05 2.83V21H8.8V8.9Z" fill="currentColor"/>',
    web: '<path d="M12 2.6a9.4 9.4 0 1 0 0 18.8 9.4 9.4 0 0 0 0-18.8Zm0 1.9c1.7 1.9 2.6 4.5 2.6 7.5s-.9 5.6-2.6 7.5c-1.7-1.9-2.6-4.5-2.6-7.5s.9-5.6 2.6-7.5ZM4.6 12h4.6M14.8 12h4.6" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>'
  };

  function iconFor(id) {
    return ICONS[id] || ICONS.web;
  }

  function svgWrap(id, extraClass) {
    return '<svg class="' + (extraClass || '') + '" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + iconFor(id) + '</svg>';
  }

  /* ── Redes sociales activas ─────────────────────────────────────────────── */
  var redes = (cfg.redes || []).filter(function (r) {
    return r && typeof r.url === 'string' && r.url.trim() !== '' && r.url.trim() !== '#';
  });

  /* Botones circulares (hero + pie) */
  document.querySelectorAll('[data-social-inline]').forEach(function (list) {
    if (!redes.length) { list.remove(); return; }
    list.innerHTML = redes.map(function (r) {
      return '<li><a class="social-chip" href="' + r.url + '" target="_blank" rel="noopener noreferrer"' +
             ' data-net="' + r.id + '" aria-label="' + r.nombre + '">' + svgWrap(r.id) + '</a></li>';
    }).join('');
  });

  /* ── Escapado: todo lo que viene del config se inserta como texto ──────── */
  function esc(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  /* ── Credenciales profesionales (solo si están configuradas) ───────────── */
  var credEl = document.querySelector('[data-credentials]');
  if (credEl) {
    var creds = (cfg.credenciales || []).filter(function (c) { return c && c.etiqueta && c.valor; });
    if (creds.length) {
      credEl.innerHTML = creds.map(function (c) {
        return '<li><span class="cred-label">' + esc(c.etiqueta) + '</span>' +
               '<span class="cred-value">' + esc(c.valor) + '</span></li>';
      }).join('');
      credEl.hidden = false;
    } else {
      credEl.remove();
    }
  }

  /* ── Reseñas de clientes ────────────────────────────────────────────────
     Sin reseñas reales configuradas, la sección y su enlace del menú
     desaparecen: una sección de testimonios vacía resta más que suma.      */
  var reviewsSection = document.querySelector('[data-reviews-section]');
  var reviewsGrid = document.querySelector('[data-reviews-grid]');
  var navResenas = document.querySelector('[data-nav-resenas]');
  if (reviewsSection && reviewsGrid) {
    var resenas = (cfg.resenas || []).filter(function (r) { return r && r.texto && r.autor; });
    if (resenas.length) {
      reviewsGrid.innerHTML = resenas.map(function (r) {
        return '' +
          '<li class="review-card" data-reveal>' +
            '<blockquote>' + esc(r.texto) + '</blockquote>' +
            '<figcaption class="review-author">' +
              '<span class="review-name">' + esc(r.autor) + '</span>' +
              (r.detalle ? '<span class="review-detail">' + esc(r.detalle) + '</span>' : '') +
            '</figcaption>' +
          '</li>';
      }).join('');
      reviewsSection.hidden = false;
      if (navResenas) navResenas.hidden = false;

      /* Mientras sean de ejemplo, se avisa de forma bien visible */
      var demoBadge = document.querySelector('[data-demo-badge]');
      if (demoBadge) {
        if (cfg.resenasSonEjemplo) { demoBadge.hidden = false; }
        else { demoBadge.remove(); }
      }
    } else {
      reviewsSection.remove();
      if (navResenas) navResenas.remove();
    }
  }

  /* ── Email de contacto ─────────────────────────────────────────────────── */
  var email = (cfg.email || '').trim();
  document.querySelectorAll('[data-contact-email]').forEach(function (a) {
    if (email) {
      a.href = 'mailto:' + email;
      a.textContent = email;
    } else {
      a.closest('.contact-direct') && a.closest('.contact-direct').remove();
    }
  });

  /* ── Perfil profesional: disponibilidad y plazo de respuesta ───────────── */
  var pro = cfg.profesional || {};

  var availEl = document.querySelector('[data-availability]');
  if (availEl) {
    var availText = (pro.textoDisponible || '').trim();
    if (pro.disponible && availText) {
      availEl.querySelector('[data-availability-text]').textContent = availText;
      availEl.hidden = false;
    } else {
      availEl.remove();
    }
  }

  /* Ubicación: portada, contacto y pie */
  var ubicacion = (pro.ubicacion || '').trim();
  var huso = (pro.husoHorario || '').trim();
  var modalidad = (pro.modalidad || '').trim();

  function fillOrRemove(sel, textSel, value) {
    var el = document.querySelector(sel);
    if (!el) return;
    if (value) {
      el.querySelector(textSel).textContent = value;
      el.hidden = false;
    } else {
      el.remove();
    }
  }

  fillOrRemove('[data-location]', '[data-location-text]', ubicacion);
  fillOrRemove('[data-footer-location]', '[data-footer-location-text]', ubicacion);
  fillOrRemove('[data-contact-mode]', '[data-contact-mode-text]', modalidad);

  var contactLoc = document.querySelector('[data-contact-location]');
  if (contactLoc) {
    if (ubicacion) {
      contactLoc.querySelector('[data-contact-location-text]').textContent = ubicacion;
      var tz = contactLoc.querySelector('[data-contact-timezone]');
      if (huso) { tz.textContent = huso; } else { tz.remove(); }
      contactLoc.hidden = false;
    } else {
      contactLoc.remove();
    }
  }

  var respEl = document.querySelector('[data-response]');
  if (respEl) {
    var respText = (pro.plazoRespuesta || '').trim();
    if (respText) {
      respEl.querySelector('[data-response-text]').textContent = respText;
      respEl.hidden = false;
    } else {
      respEl.remove();
    }
  }

  /* ── Enlaces legales del pie (solo los que tengan URL) ─────────────────── */
  var legalEl = document.querySelector('[data-legal-links]');
  if (legalEl) {
    var legales = (cfg.legal || []).filter(function (l) {
      return l && l.texto && typeof l.url === 'string' && l.url.trim() !== '';
    });
    if (legales.length) {
      legalEl.innerHTML = legales.map(function (l) {
        return '<li><a href="' + l.url + '">' + l.texto + '</a></li>';
      }).join('');
      legalEl.hidden = false;
    } else {
      legalEl.remove();
    }
  }

  /* ── Menú móvil ────────────────────────────────────────────────────────── */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav-principal');
  if (toggle && nav) {
    var setMenu = function (open) {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
      document.body.classList.toggle('menu-open', open);
    };
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setMenu(false);
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 900) setMenu(false);
    });
  }

  /* ── Cabecera al hacer scroll + enlace activo ──────────────────────────── */
  var header = document.querySelector('.site-header');
  var onScroll = function () {
    if (header) header.classList.toggle('is-stuck', window.scrollY > 24);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav a[href^="#"]'));
  var sections = navLinks
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (a) {
          a.classList.toggle('is-active', a.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ── Animación de entrada ──────────────────────────────────────────────── */
  function revealAll() {
    document.querySelectorAll('[data-reveal]').forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealAll();
  } else {
    var revealObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var siblings = Array.prototype.slice.call(el.parentElement ? el.parentElement.children : []);
        var index = siblings.indexOf(el);
        el.style.transitionDelay = Math.min(Math.max(index, 0), 5) * 70 + 'ms';
        el.classList.add('is-visible');
        obs.unobserve(el);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    document.querySelectorAll('[data-reveal]').forEach(function (el) {
      revealObserver.observe(el);
    });

    /* Elementos creados por JS (tarjetas de redes, cifras) */
    document.querySelectorAll('[data-social-grid] [data-reveal], [data-stats] [data-reveal]').forEach(function (el) {
      revealObserver.observe(el);
    });
  }

  /* ── Formulario de contacto (mailto, sin servidor) ─────────────────────── */
  var form = document.querySelector('[data-contact-form]');
  if (form) {
    var note = form.querySelector('[data-form-note]');
    var defaultNote = note ? note.textContent : '';

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var invalid = null;
      ['c-nombre', 'c-email', 'c-mensaje'].forEach(function (id) {
        var field = document.getElementById(id);
        if (!field) return;
        var bad = !field.value.trim() || (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(field.value.trim()));
        field.classList.toggle('is-invalid', bad);
        if (bad && !invalid) invalid = field;
      });

      if (invalid) {
        if (note) {
          note.textContent = 'Revisa los campos marcados: necesito tu nombre, un email válido y un mensaje.';
          note.classList.add('is-error');
        }
        invalid.focus();
        return;
      }

      if (note) { note.textContent = defaultNote; note.classList.remove('is-error'); }

      if (!email) {
        if (note) {
          note.textContent = 'Aún no hay un email de contacto configurado.';
          note.classList.add('is-error');
        }
        return;
      }

      var val = function (id) {
        var f = document.getElementById(id);
        return f ? f.value.trim() : '';
      };

      var asunto = '[Web] ' + val('c-motivo') + ' — ' + val('c-nombre');
      var cuerpo =
        'Nombre: ' + val('c-nombre') + '\n' +
        (val('c-org') ? 'Empresa / medio / centro: ' + val('c-org') + '\n' : '') +
        'Email: ' + val('c-email') + '\n' +
        'Motivo: ' + val('c-motivo') + '\n\n' +
        val('c-mensaje') + '\n';

      window.location.href = 'mailto:' + email +
        '?subject=' + encodeURIComponent(asunto) +
        '&body=' + encodeURIComponent(cuerpo);
    });

    form.addEventListener('input', function (e) {
      if (e.target.classList) e.target.classList.remove('is-invalid');
    });
  }

  /* ── Datos estructurados (schema.org) ──────────────────────────────────────
     Se generan desde el config para que no haya dos sitios que mantener:
     los perfiles y la ubicación viven solo en config.js.                     */
  try {
    var persona = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Raúl',
      alternateName: 'Raúl — Abogado',
      jobTitle: 'Abogado',
      description: 'Abogado especializado en nacionalidad española, extranjería y derecho internacional.',
      knowsLanguage: 'es'
    };
    if (redes.length) {
      persona.sameAs = redes.map(function (r) { return r.url; });
    }
    if (email) { persona.email = 'mailto:' + email; }
    if (ubicacion) {
      var partes = ubicacion.split(',');
      persona.address = {
        '@type': 'PostalAddress',
        addressLocality: partes[0].trim(),
        addressCountry: (partes[1] || '').trim() || undefined
      };
    }
    var ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.textContent = JSON.stringify(persona);
    document.head.appendChild(ld);
  } catch (e) { /* los datos estructurados nunca deben romper la página */ }

  /* ── Año actual en el pie ──────────────────────────────────────────────── */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

})();
