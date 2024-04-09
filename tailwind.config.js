/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Abarca todos los archivos JS, JSX, TS, y TSX en src
    "./public/**/*.html", // Abarca todos los archivos HTML en public
    // Añade más rutas según sea necesario
  ],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif'], // Asegúrate de poner 'Lato' primero para priorizarla sobre las fuentes genéricas sans-serif
        'poppins': ['Poppins', 'sans-serif'] // Añade Poppins aquí

      }
    },
  },
  plugins: [],
}
