import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '21px',
  baseLineHeight: 1.5,
  headerFontFamily: ['Roboto', 'sans-serif'],
  headerWeight: '400',
  bodyFontFamily: ['Roboto', 'sans-serif'],
  bodyWeight: '400',
  googleFonts: [
    {
      name: 'Montserrat',
      styles: ['700']
    },
    {
      name: 'Roboto',
      styles: ['500', '400']
    }
  ]
});

export default typography;
