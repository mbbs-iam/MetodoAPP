Title: Live Content

Description: Fetched live

Source: https://raw.githubusercontent.com/Mr-EnderDragon/newzify/main/src/app/globals.css

---

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    font-size: 90%;
  }
  
  :root {
    /* Blue Neobrutalism Theme */
    --background: 213 100% 95%; /* Very light blue background #E5F0FF */
    --foreground: 0 0% 0%; /* Black text */

    --card: 0 0% 100%; /* White cards */
    --card-foreground: 0 0% 0%;
 
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 0%;
 
    --primary: 217 91% 60%; /* Bright blue #3b82f6 */
    --primary-foreground: 0 0% 100%;
 
    --secondary: 43 100% 50%; /* Vibrant yellow/orange for contrast #FFB800 */
    --secondary-foreground: 0 0% 0%;
 
    --muted: 214 32% 91%;
    --muted-foreground: 215 16% 47%;
 
    --accent: 217 91% 60%;
    --accent-foreground: 0 0% 100%;
 
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;

    --border: 0 0% 0%; /* Solid black borders */
    --input: 0 0% 0%;
 

✅ Análisis completo de los 3 repositorios + Propuestas de Diseño para Methodic
🔍 Lo que extraje de los repos
1. DSA — "Aplicación educativa de aprendizaje de algoritmos"
Tech stack: React + Vite + TypeScript
Identidad visual detectada:
🎨 Paleta: Neo-Brutalismo clásico — fondo #f4f4f0 (off-white), amarillo #facc15, morado #a855f7, bordes negros sólidos de 4px
✍️ Tipografía: Space Grotesk (bold, uppercase agresivo) — textos con -webkit-text-stroke y text-shadow desplazado
🃏 Componentes: Cards con box-shadow: 12px 12px 0px #000 (sombras "aplastadas"), rotación rotate(-1deg), background-image con puntos radial-gradient
🧭 Estructura: Onboarding → Dashboard → Fundamentals → Lesson → CreatorProfile (single-page con estado)
💾 Estado: localStorage masivo para progreso del usuario (sin backend)
Lo que rescato: La arquitectura de estados locales es exactamente lo que necesitamos para Firebase-efficient. El patrón onboarding-first es efectivo.
Lo que es débil: El diseño es rígido y agresivo para estudiantes. El contraste y las sombras exageradas cansan visualmente. No hay dark mode.
2. Newzify — "Agregador de noticias con sistema de recompensas"
Tech stack: Next.js + Tailwind + Framer Motion + shadcn/ui
Identidad visual detectada:
🎨 Paleta: Neo-Brutalismo "suave" — fondo #E5F0FF (azul muy pálido), azul primario #3b82f6, amarillo #FFB800, bordes negros sólidos
✨ Animaciones: framer-motion para mount animations, cubic-bezier(0.175, 0.885, 0.32, 1.275) (el "pop" elástico característico)
🏗️ Patrón UI: neo-box, shadow-neo-lg — sistema de clases utilitarias personalizadas sobre Tailwind
🎭 Interactividad: Loading skeleton con spinner, sistema de puntos/rewards en localStorage, listeners de eventos custom
Lo que rescato: El sistema de recompensas + localStorage es perfecto para el sistema de reputación de la plataforma. Las animaciones con cubic-bezier elástico son elegantes.
Lo que es débil: El estilo Neo-Brutalismo con bordes negros es polarizante y visualmente anticuado para 2026. Los componentes no son reusables.
3. Linkshort — "Acortador de URLs"
Tech stack: Next.js + Prisma + TypeScript
Identidad visual detectada:
🎨 Paleta: Neo-Brutalismo refinado — #f4f4f0, morado suave #c3a6ff, rosa suave #ff9fb2, amarillo #fce27b
📐 Sistema: --border-width: 3px, --shadow-offset: 4px, --radius: 0px (bordes completamente cuadrados)
🌐 Background: Grid linear-gradient de 32x32px con líneas a 5% de opacidad
🔤 Tipografía: Space Grotesk con peso 800, text-transform: uppercase en el branding
🧱 Componentes: Nav sticky con box-shadow: 0 4px 0 #1a1a1a, hero centrado
