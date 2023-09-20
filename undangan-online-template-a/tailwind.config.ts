import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bodyBg: '#0F0F0F',
        buttonBg: '#b09c6c',
        textPColor: '#FFFFFE',
      },
      fontFamily: {
        berkshire: ['Berkshire Swash', 'cursive'],
        mea: ['Mea Culpa', 'cursive'],
        dm: ['DM Sans', 'sans-serif'],
        samarkan: ['Samarkan', 'sans-serif'],
        bali: ['Bali Simbar', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
