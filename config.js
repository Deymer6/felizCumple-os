/* =======================================================================
   config.js  —  ⚙️ PANEL DE CONTROL DE LA WEB DE CUMPLEAÑOS
   -----------------------------------------------------------------------
   Edita SOLO este archivo para personalizar toda la página.
   NO hace falta tocar los .html.

   - Cambia "nombre" y "edad" una sola vez: se actualizan en las 3 páginas.
   - Dentro de cualquier texto o frase puedes escribir {nombre} y {edad}
     y se reemplazarán automáticamente por los valores de arriba.
     Ej: "Felices {edad}, {nombre}"  ->  "Felices 18, Ana"
   - La cantidad de globos es igual a la edad (18 años = 18 globos).
   ======================================================================= */

const CONFIG = {

  // 👤 DATOS DE LA PERSONA  (cámbialos aquí una sola vez)
  nombre: "Ana",
  edad: 18,

  // 🏷️ Títulos que se ven en la pestaña del navegador
  titulos: {
    inicio:   "¡Feliz Cumpleaños!",
    carta:    "Carta Mágica",
    sorpresa: "Caja Sorpresa"
  },

  // 🖥️ Pantalla de inicio (index.html): botón que aparece al abrir y arranca la música
  pantallaInicio: {
    titulo: "Toca para empezar"
  },

  // 🎶 Música de fondo por página (la caja sorpresa usa su propio reproductor con lista)
  musica: {
    inicio: "hey.mp3",
    carta:  "moonlightcoffee.mp3"
  },

  // 🎈 PÁGINA 1 — index.html (globos)
  globos: {
    mensajeFinal: "¡Bienvenida a los {edad}, {nombre}!",
    botonCarta:   "Ver mi carta",
    // Una frase por globo. Puedes poner las que quieras;
    // si hay menos frases que globos, los globos sobrantes no muestran texto.
    frases: [
      "Un día caminaste por primera vez… y el mundo sonrió contigo 🐾",
      "Tus risas de niña aún iluminan corazones ✨",
      "La magia de tu infancia nunca te ha dejado 💖",
      "Descubriste que la amistad es un tesoro 🌟",
      "Cada juego fue una lección disfrazada de alegría 🎠",
      "Tus pasos empezaron a tener sueños propios 🌈",
      "La niña se hizo preguntas... y encontró fuerza 🪞",
      "No todo fue fácil, pero todo te hizo más tú 💪",
      "Descubriste tu voz. Y eso cambió el mundo 🔊",
      "Aprendiste a soltar, a confiar, a sanar 🌱",
      "Tu luz interior empezó a brillar con decisión 💫",
      "Te abrazaste por dentro. Y te elegiste 🤍",
      "Te miraste al espejo... y viste futuro ✨",
      "Dejaste de pedir permiso para ser tú 🦋",
      "Celebramos tu historia, no solo tu edad 📖",
      "A partir de hoy, tus pasos suenan a libertad y propósito 🚶‍♀️",
      "Hoy no solo cumples años, también conquistas una etapa 🎯"
    ]
  },

  // 💌 PÁGINA 2 — cartaAnimada.html (carta)
  carta: {
    portadaNombre:  "{nombre}",
    portadaTitulo:  "FELIZ<br>CUMPLEAÑOS",   // el <br> hace el salto de línea
    botonSorpresa:  "Abrir Sorpresa",
    frases: [
      "Hoy no solo celebramos tu nacimiento, sino la historia que tejiste con cada paso, cada lágrima, cada risa. Felices {edad}, que este nuevo ciclo sea tan valiente como tú 💖",
      "Hoy no cumples solo un año más: sigues escribiendo tu vida con tinta propia. Que el amor, la luz y la verdad guíen cada una de tus decisiones 🌟",
      "Hoy el calendario marca un número, pero el corazón celebra una evolución: todo lo que fuiste abraza a todo lo que estás comenzando a ser ✨",
      "Que este cumpleaños sea un espejo donde veas todo lo que has superado, todo lo que te espera, y sobre todo... lo valiosa que eres para quienes te aman 🎁",
      "Cada año ha sido una página escrita con emoción, pero este capítulo {edad} viene con alas. Que tengas el coraje de volar donde tu alma te llame 🕊️",
      "Felices {edad} a esa persona que ha aprendido a levantarse con elegancia, a reír con fuerza y a amar con profundidad. Hoy empieza tu mejor versión 🌷",
      "No se trata solo de velas ni regalos. Hoy se trata de ti, de tu fuego interior, de todo lo que eres y de lo mucho que estás por descubrir 🎂",
      "Este cumpleaños no es un punto final, sino el inicio de nuevas elecciones, caminos y sueños. Y no podrías estar más lista 🌈",
      "Eres la suma de cada cumpleaños, de cada deseo pedido en silencio, de cada abrazo que guardaste. Hoy, celébrate como nunca antes 💫",
      "Que este cumpleaños te recuerde que no necesitas ser perfecta para ser increíble. Eres suficiente. Eres hermosa. Eres tú, y eso lo cambia todo 💌",
      "Tu existencia es una luz que ilumina muchas vidas ✨",
      "Nunca dejes de soñar, tu brillo es único 💫",
      "Este es tu año, y viene cargado de bendiciones 🌟",
      "¡Feliz cumpleaños, con todo mi cariño! 🎂"
    ]
  },

  // 🎁 PÁGINA 3 — sorpresaFinal.html (caja sorpresa)
  sorpresa: {
    mensajeCaja:       "✨ Presiona la caja para descubrir tu sorpresa ✨",
    tituloGracias:     "Gracias por llegar hasta aquí... 💖",
    presentacion:      "🎯 Escribe tu deseo secreto.<br>Lo enviaremos directamente a Diosito, el universo o tu yo del futuro... o a donde toque 😇✨",
    nombrePlaceholder: "Tu nombre",
    deseoPlaceholder:  "Escribe tu deseo aquí...",
    botonEnviar:       "Enviar Deseo",
    mensajeEnviado:    "🎉 Prometemos que no se lo diremos a nadie (bueno, tal vez un angelito lo lea 👼)",
    // Lista de canciones del reproductor. La primera suena al abrir la caja.
    canciones: [
      { archivo: "ukulele.mp3",         etiqueta: "🎵 ukulele" },
      { archivo: "smile.mp3",           etiqueta: "🌈 smile" },
      { archivo: "sunny.mp3",           etiqueta: "✨ sunny" },
      { archivo: "funnysong.mp3",       etiqueta: "😄 funnysong" },
      { archivo: "pop-beat-62044.mp3",  etiqueta: "🎉 pop beat" },
      { archivo: "moonlightcoffee.mp3", etiqueta: "🌙 moonlight coffee" }
    ]
  }
};

/* -----------------------------------------------------------------------
   Helper interno: reemplaza {nombre} y {edad} dentro de cualquier texto.
   No necesitas tocar esto.
   ----------------------------------------------------------------------- */
CONFIG.aplicar = function (texto) {
  return String(texto)
    .replace(/\{nombre\}/g, CONFIG.nombre)
    .replace(/\{edad\}/g, CONFIG.edad);
};
