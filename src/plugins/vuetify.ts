/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Composables
import { createVuetify } from 'vuetify'
// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'


const miTema = {
  dark: false,
  colors: {
    primary: '#4C1D95',      // morado oscuro (header, footer)
    secondary: '#9333EA',    // morado más vivo (botón)
    background: '#0F0F0F',   // negro suave de fondo
    surface: '#1A1A1A',      // negro un poco más claro para tarjetas/superficies
    error: '#DC2626',
    success: '#16A34A',
    'on-primary': '#FFFFFF',    // color del texto sobre "primary"
    'on-secondary': '#FFFFFF',  // color del texto sobre "secondary"
    'on-background': '#FFFFFF', // color del texto sobre el fondo
    'on-surface': '#FFFFFF',    // color del texto sobre superficies
  }
}

export default createVuetify({
  theme: {
    defaultTheme: 'miTema',
    themes: {
      miTema,
    },
  },
})
