import typography from '@tailwindcss/typography'

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

      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.charcoal'),
            '--tw-prose-headings': theme('colors.charcoal'),
            '--tw-prose-links': theme('colors.terracotta.DEFAULT'),
            '--tw-prose-bold': theme('colors.charcoal'),
            '--tw-prose-counters': theme('colors.charcoal'),
            '--tw-prose-bullets': theme('colors.gold'),
            '--tw-prose-quotes': theme('colors.charcoal'),
            '--tw-prose-code': theme('colors.terracotta.DEFAULT'),
            lineHeight: '1.75',
            h2: {
              fontFamily: theme('fontFamily.display').join(', '),
              fontWeight: '600',
              marginTop: '3rem',
              marginBottom: '1rem',
              paddingBottom: '0.5rem',
              borderBottom: `1px solid ${theme('colors.blush')}`,
              scrollMarginTop: '5rem',
            },
            h3: {
              fontFamily: theme('fontFamily.display').join(', '),
              fontWeight: '600',
              marginTop: '2rem',
              marginBottom: '0.5rem',
              fontSize: '1.15rem',
            },
            p: { marginTop: '1rem', marginBottom: '1rem' },
            ul: { marginTop: '0.75rem', marginBottom: '1.25rem' },
            ol: { marginTop: '0.75rem', marginBottom: '1.25rem' },
            'li > p': { marginTop: '0.25rem', marginBottom: '0.25rem' },
            code: {
              backgroundColor: theme('colors.cream'),
              padding: '2px 6px',
              borderRadius: '4px',
              fontWeight: '500',
              fontSize: '0.9em',
            },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
          },
        },
      }),
    },
  },

  plugins: [typography],
}
