# 🎂 Web de Cumpleaños

Una página web interactiva y personalizada para sorprender a alguien en su cumpleaños. Son tres pantallas encadenadas: **globos para reventar**, una **carta mágica** y una **caja sorpresa** con música y confeti. 💖

---

## ✨ Características

- 🎈 Globos que se revientan (uno por cada año cumplido), cada uno con una frase especial
- 💌 Carta animada que se abre página por página
- 🎁 Caja sorpresa con reproductor de música y un formulario para pedir un deseo
- 🎉 Confeti al reventar el último globo y al abrir la caja
- 🎵 Música de fondo con una pantalla de inicio para activarla
- 🎨 Iconos vectoriales y diseño responsivo (celular, tablet y escritorio)

---

## 🖊️ Cómo personalizarla

Todo el contenido editable vive en **un solo archivo: `config.js`**. No necesitas tocar el HTML.

Abre `config.js` y cambia el nombre y la edad al principio:

```js
nombre: "Ana",
edad: 18,
```

La cantidad de globos se ajusta sola a la edad. Luego puedes editar las frases, los mensajes y la lista de canciones a tu gusto.

> 💡 Dentro de cualquier texto puedes escribir `{nombre}` o `{edad}` y se reemplazan solos.
> Ejemplo: `"Felices {edad}, {nombre}"` se convierte en `"Felices 18, Ana"`.

---

## 👀 Verla en tu computadora

No la abras con doble clic: la música y los scripts necesitan un servidor. Desde la carpeta del proyecto ejecuta:

```bash
python -m http.server 8765
```

Y abre **http://localhost:8765/index.html** en tu navegador.

---

## 🚀 Publicarla en GitHub Pages

1. Sube todos los archivos a un repositorio de GitHub.
2. Entra a **Settings → Pages**.
3. En *Branch* elige `main` y la carpeta `/ (root)`, y guarda.
4. En un minuto tu web estará en `https://TU-USUARIO.github.io/TU-REPO/`.

> 💡 Para que el enlace muestre una vista previa bonita al compartirlo por WhatsApp, edita en `index.html` las líneas `og:image` y `og:url` con la URL completa de tu GitHub Pages.

---

## 📁 Estructura

| Archivo | Para qué sirve |
|---|---|
| `index.html` · `cartaAnimada.html` · `sorpresaFinal.html` | Las tres pantallas |
| `config.js` | 👈 Aquí editas **todo** el contenido |
| `efectos.js` | Iconos y confeti (no requiere cambios) |
| Imágenes `.png` y audios `.mp3` | Recursos de la web |

---

Hecho con cariño 💕
