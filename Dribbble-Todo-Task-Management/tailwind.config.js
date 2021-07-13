module.exports = {
  purge: {
    enabled: true,
    content: ['./*.html'],
    safelist: [
      'bg-blue-50', 'text-blue-500', 'border-blue-500',
      'bg-yellow-50', 'text-yellow-500', 'border-yellow-400',
      'bg-orange-50', 'text-orange-400', 'border-orange-400',
      'bg-green-50', 'text-green-400', 'border-green-400',
      'bg-purple-50', 'text-purple-400', 'border-purple-400',
      'bg-rose-50', 'text-rose-400', 'border-rose-400',
      'bg-violet-50', 'text-violet-400', 'border-violet-400',
    ],
  },
  theme: {
    extend: {
      colors: {
        rose: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
        orange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        violet: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
      },
    },
  },
}
