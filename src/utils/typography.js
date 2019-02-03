import Typography from 'typography'

const systemFontStack = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Oxygen-Sans',
  'Ubuntu',
  'Cantarell',
  'Helvetica Neue',
  'sans-serif',
]

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.8,
  headerFontFamily: systemFontStack,
  headerWeight: '600',
  scaleRatio: 1.3,
  bodyFontFamily: systemFontStack,
  bodyWeight: '400',
  googleFonts: [
    {
      name: 'Montserrat',
      styles: ['700'],
    },
  ],
})

export default typography
