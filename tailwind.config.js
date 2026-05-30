/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  safelist: ['brightness-0', 'invert', 'mix-blend-multiply'],

  theme: {
    screens: {
      xs: '390px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        // ── Palette estratta direttamente dal logo ──────────────────────────
        // "L'altra" (script olive-grigio scuro)
        olive: {
          DEFAULT: '#5A5A3C',
          light: '#7A7A52',
        },
        // "Osteria" (rosso cremisi profondo) — colore primario del brand
        terracotta: {
          DEFAULT: '#8B1A1A',
          dark:    '#6B0F0F',
        },
        // Striscia sotto il logo con "ROMA" — beige caldo
        blush: '#EDE0D0',

        // ── Toni di sistema ─────────────────────────────────────────────────
        cream:   '#FAF6F0',   // sfondo principale (leggermente più caldo)
        charcoal:'#2B2622',   // testo scuro, footer
        gold:    '#B8872A',   // accento vini / prezzi (caldo, si sposa col cremisi)
      },

      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },

      maxWidth: {
        content: '1200px',
      },
    },
  },

  plugins: [],
}
