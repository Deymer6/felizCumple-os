/* =======================================================================
   efectos.js  —  Iconos SVG + animación de confetti (sin librerías)
   Compartido por las 3 páginas. Normalmente no necesitas editarlo.
   ======================================================================= */

/* --- Iconos SVG (line-icon). Heredan el color del texto (currentColor) --- */
const ICONOS = {
  play:    '<svg class="ico" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  musica:  '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>',
  sobre:   '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  regalo:  '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5"/></svg>',
  enviar:  '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4 20-7z"/></svg>',
  globo:   '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a6 7 0 0 0-6 7c0 4 3 6.5 6 7 3-.5 6-3 6-7a6 7 0 0 0-6-7z"/><path d="M12 17v2M11 21h2"/></svg>'
};

/* ----------------------------------------------------------------------
   lanzarConfetti(duracionMs): lluvia de confeti a pantalla completa.
   No bloquea la interacción (el canvas ignora los clics).
   ---------------------------------------------------------------------- */
function lanzarConfetti(duracionMs = 2600) {
  const canvas = document.createElement('canvas');
  canvas.style.cssText =
    'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  function ajustar() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  ajustar();
  window.addEventListener('resize', ajustar);

  const colores = ['#f48fb1', '#ec407a', '#c2185b', '#f8bbd0', '#ffd54f', '#ffffff'];
  const total = Math.min(180, Math.round(window.innerWidth / 8));
  const piezas = [];
  for (let i = 0; i < total; i++) {
    piezas.push({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height,
      ancho: 6 + Math.random() * 6,
      alto: 8 + Math.random() * 8,
      color: colores[Math.floor(Math.random() * colores.length)],
      vy: 2 + Math.random() * 4,
      vx: -1.5 + Math.random() * 3,
      rot: Math.random() * Math.PI,
      vrot: -0.2 + Math.random() * 0.4
    });
  }

  const inicio = performance.now();
  function frame(ahora) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const p of piezas) {
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vrot;
      if (p.y > canvas.height + 20) p.y = -20; // reciclar mientras dure
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.ancho / 2, -p.alto / 2, p.ancho, p.alto);
      ctx.restore();
    }
    if (ahora - inicio < duracionMs) {
      requestAnimationFrame(frame);
    } else {
      window.removeEventListener('resize', ajustar);
      canvas.remove();
    }
  }
  requestAnimationFrame(frame);
}
