// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },

    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      default: '0.25rem',
      default: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large-12': '12px',
      'large-24': '24px',
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
        steel: '#417D9A;',
        water: '#4A90DA',
        'bug-lighter': '#91ad6c;',
        'dark-lighter': '#7b7a7e ;',
        'dragon-lighter': '#5a7bb2;',
        'electric-lighter': '#d5d579;',
        'fairy-lighter':'#dd9ec1;',
        'fighting-lighter': '#c37c84;',
        'fire-lighter':'#dcab71;',
        'flying-lighter':'#9da4c7;',
        'ghost-lighter':'#8489b0;',
        'grass-lighter': '#88b889;',
        'ground-lighter': '#cda483;',
        'ice-lighter': '#91c6c7;',
        'normal-lighter': '#b3b3b9;',
        'poison-lighter':'#b887c3;',
        'psychic-lighter': '#d89992;',
        'rock-lighter': '#bfbba3;',
        'steel-lighter': '#748ca0;',
        'water-lighter': '#849dcb',
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