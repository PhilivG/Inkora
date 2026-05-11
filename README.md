# Inkora 🎨

**Inkora** es una red social de arte digital donde artistas pueden compartir su trabajo, explorar ilustraciones de otros creadores y conectar con la comunidad.

Proyecto final del Módulo 1 — BIT Full Stack Bootcamp.

## 🔗 Demo en vivo

[philivg.github.io/Inkora](https://philivg.github.io/Inkora/)

> **Credenciales de prueba:**
> - Usuario: `Kuvshinov` · Contraseña: `1234`
> - Usuario: `samdoesarts` · Contraseña: `12345`

---

## 📸 Páginas

| Página | Descripción |
|--------|-------------|
| `index.html` | Login con validación de usuario/contraseña |
| `home.html` | Feed principal con galería, búsqueda y filtros por categoría |
| `profile.html` | Perfil de usuario con portada, info y publicaciones propias |

---

## ✨ Funcionalidades

- **Autenticación simulada** — login con validación de usuario/contraseña y persistencia en `localStorage`
- **Sesión activa** — el nombre e imagen del usuario se cargan dinámicamente en toda la app
- **Búsqueda por autor** — filtra obras por nombre del artista en tiempo real
- **Filtros por categoría** — organiza las obras por estilo (ilustración, pixel art, render 3D, etc.)
- **Galería tipo masonry** — layout de columnas con CSS `columns` para un feed visual atractivo
- **Modal de obra** — visualización ampliada de cada imagen con sección de comentarios
- **Comentarios dinámicos** — el usuario puede escribir comentarios que se insertan en el DOM sin recargar
- **Diseño responsive** — adaptado para móvil y escritorio con Bootstrap + CSS personalizado

---

## 🛠️ Construido con

- **HTML5** semántico
- **CSS3** — variables custom properties, layout con Flexbox y CSS Grid, diseño responsive
- **JavaScript vanilla** — manipulación del DOM, eventos, `localStorage`, lógica de filtros
- **Bootstrap 5** — componentes base y sistema de grilla
- **Google Fonts** — Inter + Playfair Display

---

## 🎨 Sistema de diseño

Paleta de colores propia con variables CSS para light mode y dark mode:

| Token | Color | Uso |
|-------|-------|-----|
| `--terracota` | `hsl(11, 48%, 52%)` | Color principal, botones, acentos |
| `--amber` | `hsl(27, 62%, 56%)` | Gradientes, sombras |
| `--dusty-rose` | `hsl(7, 39%, 62%)` | Bordes sutiles |
| `--warm-sand` | `hsl(31, 45%, 89%)` | Fondos de cards, hover states |

---

## 📁 Estructura del proyecto

```
Inkora/
├── index.html
├── home.html
├── profile.html
└── assets/
    ├── css/
    │   ├── global.css
    │   ├── index.css
    │   ├── home.css
    │   └── profile.css
    ├── js/
    │   ├── global.js
    │   ├── index.js
    │   ├── home.js
    │   └── profile.js
    └── image/
```

---

## ⚠️ Nota

Este es un prototipo frontend sin backend. La autenticación es simulada con datos en el cliente y `localStorage`. En una versión con backend, las credenciales estarían gestionadas de forma segura en el servidor.

---

## 👤 Autor

**Juan Felipe Valencia Granada**  
Ingeniero Mecatrónico | Desarrollador Frontend en formación  
[GitHub](https://github.com/philivg)
