/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        night: '#05060a',
        glass: 'rgba(255, 255, 255, 0.04)',
        neon: {
          blue: '#4cc9f0',
          purple: '#a855f7',
          cyan: '#22d3ee',
        },
      },
      fontFamily: {
        sans: ['Sora', 'Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['JetBrains Mono', 'SFMono-Regular', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 10px 50px rgba(76, 201, 240, 0.25)',
        glass: '0 20px 80px rgba(0,0,0,0.45)',
      },
      backgroundImage: {
        'grid-glow':
          'radial-gradient(circle at 20% 20%, rgba(76, 201, 240, 0.08), transparent 25%), radial-gradient(circle at 80% 0%, rgba(168, 85, 247, 0.08), transparent 30%), radial-gradient(circle at 50% 80%, rgba(34, 211, 238, 0.08), transparent 30%)',
      },
    },
  },
  plugins: [],
}

