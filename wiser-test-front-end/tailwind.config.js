// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif'],
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
    },
    extend: {
      colors: {
        bug: '#8CB330;',
        dark: '#58575F;',
        dragon: '#0F6AC0;',
        electric: '#EED535;',
        fairy:'#ED6EC7;',
        fighting: '#D04164;',
        fire:'#FD7D24;',
        flying:'#748FC9;',
        ghost:'#556AAE;',
        grass: '#62B957;',
        ground: '#DD7748;',
        ice: '#61CEC0;',
        normal: '#9DA0AA;',
        poison:'#A552CC;',
        psychic: '#EA5D60;',
        rock: '#BAAB82;',
        steal: '#417D9A;',
        water: '#4A90DA',
        input: '#F2F2F2',
        gray: '#747476',
        number: 'rgba(23, 23, 27, 0.6)'
      },
      spacing: {
        'layout': '414px',
        'inner' : '334px',
        '96': '24rem',
        '128': '32rem',
      }
    }
  }
}