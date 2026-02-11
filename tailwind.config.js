module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-orange': '#FF6B35',
        'neon-green': '#00FF00',
        'neon-cyan': '#00FFFF',
        'dark-bg': '#0A0E27',
        'dark-card': '#1A1F3A',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
        'display': ['IBM Plex Sans', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-neon': {
          '0%, 100%': { opacity: '1', textShadow: '0 0 10px #FF6B35' },
          '50%': { opacity: '0.8', textShadow: '0 0 20px #FF6B35' },
        },
        'glow': {
          '0%, 100%': { boxShadow: '0 0 5px#00FF00' },
          '50%': { boxShadow: '0 0 20px #00FF00' },
        }
      }
    },
  },
  plugins: [],
}
