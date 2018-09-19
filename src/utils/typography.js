import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.5,
  headerFontFamily: ['Montserrat', 'sans-serif'],
  headerWeight: '700',
  bodyFontFamily: ['Montserrat', 'sans-serif'],
  bodyWeight: '400',
  googleFonts: [
    {
      name: 'Montserrat',
      styles: ['400', '700']
    }
  ]
});

export default typography;
