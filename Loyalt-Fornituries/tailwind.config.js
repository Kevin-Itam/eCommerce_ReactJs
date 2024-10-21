/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Certifique-se de que esses caminhos estão corretos para cobrir todos os arquivos de front-end.
  ],
  theme: {
    extend: {
      width: {
        'src': '36rem', // Define uma largura personalizada
        '400': '350px', // Considere renomear para 'w-400px' para manter claro que isso é em pixels
      },
      height: {
        'imgcard-h': '500px', // Altura personalizada para os cartões de imagem
        'h-300': '300px', // Sugiro mudar para 'h-300px' para manter o padrão de nomenclatura
        'h-400': '400px', // Igual ao anterior, renomear para 'h-400px' pode evitar confusões
      },
      padding: {
        'p-2-custom': '0.125rem', // Renomeei para 'p-2-custom' para evitar conflitos com o Tailwind padrão
      },
      maxHeight: {
        'max-h-300': '300px', // Mantido, mas renomeado para evitar confusão com a altura fixa
      },
      left: {
        '1/5': '20%', // Posicionamento left, mantido como está
      },
    },
  },
  plugins: [],
};
