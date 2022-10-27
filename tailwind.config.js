/** @type {import('tailwindcss').Config} */

function withOpacityValue(variable) {
    return ({opacityValue}) => {
        if (opacityValue === undefined) {
            return `rgb(var(${variable}))`
        }
        return `rgb(var(${variable}) / ${opacityValue})`
    }
}


module.exports = {
  content: [
  "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {},
    colors: {
    transparent: 'transparent',
    current: 'currentColor',
    primary: 'var(--primary)',
    black: withOpacityValue('--black')
},
  },
  plugins: [],
}
