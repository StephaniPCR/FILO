# FILO | Infraestructura Comercial

Sitio web oficial de **FILO**, un estudio de soluciones digitales diseñado para ayudar a pequeñas empresas y profesionales a poner orden en su negocio. Especializados en automatización, asistentes de inteligencia artificial (como "Sofía") y desarrollo de mini-ERPs o aplicaciones web a medida.

El objetivo principal de FILO es que el dueño recupere su tiempo, el control y la tranquilidad de operar su marca.

## 🛠️ Stack Tecnológico

Este es un sitio web estático optimizado, que utiliza las siguientes tecnologías sin depender de librerías de empaquetado y compilación en el Frontend:

- **HTML5**: Estructura semántica.
- **Tailwind CSS v4 (vía CDN)**: Estilizado ultra rápido usando clases de utilidad. Diseñado con un tema oscuro elegante y minimalista.
- **JavaScript (Vanilla)**: Lógica interactiva para la barra de navegación, menús móviles y funciones de UI (`main.js`).
- **CSS3 Personalizado**: Utilidades adicionales, animaciones y estilos globales que las clases de Tailwind no cubren inmediatamente (`styles.css`).
- **Tipografías**: Google Fonts (*Inter* para cuerpo e interfaces y *Plus Jakarta Sans* para títulos y encabezados).
- **Iconos**: FontAwesome 6.4 (vía CDN).

## 🗂️ Estructura de Páginas

El proyecto contiene múltiples "landing pages" enfocadas en informar de forma modular las secciones del embudo de ventas de FILO:

- `index.html`: La página principal (Home), el resumen de la propuesta de valor.
- `soluciones.html`: Síntesis de los 6 servicios modulares que ofrece FILO (Diagnóstico, Asistentes, Automatizaciones, Apps Web, Embudos de Venta y Landings, Consultoría).
- `resultados.html`: Pruebas sociales y galería esquematizada de "Casos de Éxito" (Sustentos reales).
- `demo.html`: Espacio dedicado a introducir de manera conversacional y empática a **Sofía**, la asistente IA, enfocándose en su identidad y valor comercial.
- `corazon.html`: Página cultural orientada a dar contexto sobre las raíces andinas (San Cristóbal, Táchira) que inspiran la identidad natural de Sofía y del equipo.
- `preguntas.html`: Banco interactivo de Preguntas Frecuentes (FAQ) utilizando diseño de acordeón (`<details>`).
- `inversion.html`: Página para hablar de la estructura de precios (Configuración con Pago Único Setup vs. Mantenimiento de Infraestructura Mensual).
- `contacto.html`: Punto de conversión principal para realizar agendamientos o preguntas directas.
- `privacidad.html` y `terminos.html`: Páginas de marco legal, confidencialidad y acuerdos de servicio base.

## 🚀 Uso en Desarrollo Local y Despliegue

Dado que FILO WEB está construido enteramente sobre "Vanilla Web Technologies" que consumen herramientas de red mediante CDN, no se requiere ningún empaquetador como Node.js, Webpack, Vite, ni comandos de instalación complicados de npm.

**Para ejecutar el sitio en tu computadora local:**
1. Abre tu editor de código preferido (como Visual Studio Code).
2. Haz clic derecho sobre el archivo `index.html` y presiona **Open with Live Server** (o ábrelo dándole doble clic en el administrador de archivos directamente).
3. Si lo abres con extensiones proxy como Live Server, podrás editar el código de cualquier archivo visualizando los resultados inmediatamente sin necesidad de actualizar la página manualmente.

**Para llevar el sitio a Producción (Público):**
Al ser puramente estático, la carpeta que lo guarda está lista para arrastrarse y soltarse (drag & drop) sin configuraciones extrañas a los servicios modernos mundiales:
- Vercel
- Netlify
- GitHub Pages
- Hostinger o Servidor Compartido cPanel

## 👥 El Ecosistema "Filo"

FILO se enorgullece de su narrativa clara sobre el "Poder del Equipo" como una ventaja competitiva de confianza para no asustar al consumidor final de los negocios con IAs sin cara:
1. **Sofía**: La Asistente IA Conversadora. Orientada a la atención inicial empática (ayuda y escucha a comprar).
2. **Ernesto**: El bot Analista u Organizador interno. Toma la charla y rellena bases e integraciones invisibles al cliente (n8n, CRM).
3. **Marta**: La humana especializada en soporte. Ingresa en las crisis, urgencias o en donde el sistema reconoce un tope y requiere escalar.

---
*Todos los derechos reservados © 2026 FILO. Infraestructura Comercial.*
