# Mr. Sandwich Premium Fast-Food Website 🍔

[![Status](https://img.shields.io/badge/Status-Deployment%20Ready-success_green)](#)
[![Tech](https://img.shields.io/badge/Tech-HTML5,%20CSS3,%20Vanilla%20JS-blue)](#)
[![Animations](https://img.shields.io/badge/Animations-GSAP%20&%20ScrollTrigger-green)](#)

Un sitio web de aterrizaje ultra premium, dinámico y de alta conversión diseñado exclusivamente para **Mr. Sandwich**, un restaurante de comida rápida en Santiago de los Caballeros. Este proyecto está diseñado con los más altos estándares UX/UI, optimizado para cargar a la velocidad de la luz y con un diseño 100% responsivo (End-to-End).

## 🚀 Características Clave

- **Aesthetic Premium**: Diseño minimalista utilizando el color institucional "Green Jacket" (`#2A4B45`), paleta de grises de alto estándar y cristalismo sutil (*glassmorphism*).
- **Hero Interactivo**: Parallax sutil integrado en la cabecera, con imágenes premium de alta calidad (8K generadas por Inteligencia Artificial). 
- **Animaciones GSAP**: Apariciones progresivas, tarjetas 3D asombrosas y comportamientos de scroll manejados totalmente por la librería GreenSock GSAP & ScrollTrigger.
- **Mobile First**: Componentes adaptados (NavBar colapsable, estructura de grid) garantizando una relación de aspecto de imagen tipo Feed de 4:5 nativa para teléfonos móviles y reajuste en escritorio.
- **WhatsApp Integrado**: Botón flotante siempre activo (Bottom Right CTA) para la recepción ininterrumpida de clientes por WhatsApp y enlaces optimizados a UberEats.

## 🛠️ Stack Tecnológico Utilizado

El desarrollo de este proyecto se mantiene limpio, utilizando tecnologías web nativas para asegurar su vida útil máxima e independencia de Frameworks pesados:

1. **Estructura**: `HTML5` semántico con variables escalables.
2. **Estilizado**: `CSS3 (Vanilla CSS)` con Theming Systems, Flexbox y Grid Configurations de vanguardia. 
3. **Lógica y Micro-Interacciones**: `Vanilla JavaScript (ES6)`
4. **Animaciones Sólidas**: Librería Externa `GSAP`.

## 📁 Estructura del Archivo Local

```text
Restaurant Website/
├── assets/                    # Carpeta de Imágenes IA y media estática local
│   ├── classic_burger.png     
│   ├── double_cheese_burger.png
│   ├── spicy_crispy_burger.png
│   └── cuban_sandwich.png   
├── index.html                 # Marcado semántico del Landing y estructura del arbol DOM
├── style.css                  # Hoja de estilos de colores, dimensiones y UI Responses
├── main.js                    # Inicializador de Micro-Intergeneraciones de GSAP y menú móvil responsivo
└── README.md                  # Documentación
```

## ⚙️ Cómo Desplegar / Ejecutar

Dado que este proyecto está construido con tecnologías web base (HTML/CSS/JS), **no requiere Node.js, módulos ni procesos de compilación (build scripts)**.

1. Simplemente haz **doble clic en** `index.html` para abrirlo localmente en cualquier navegador web moderno (Chrome, Firefox, Safari o Edge).
2. Para desplegar en la nube y obtener una URL pública (Hosting serverless rápido):
   - **Vercel**: Asegúrate de estar validado en tu cuenta, arrastra toda la carpeta al panel o conecta tu terminal a Vercel con el comando `vercel --prod`.
   - **Netlify / GitHub Pages**: Arrastra el contenido del directorio en `Netlify Drop` para tener la aplicación web al instante corriendo "End-To-End".

---
*Hecho cumpliendo el 0.1% de los mejores estándares de desarrollo UX/UI.*
