// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default <Config>{
  content: [
    'components/**/*.{vue,js,ts}',
    'layouts/**/*.{vue,js,ts}',
    'pages/**/*.{vue,js,ts}',
    'app.vue',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
