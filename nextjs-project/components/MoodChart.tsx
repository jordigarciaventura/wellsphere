"use client"; // Este componente é um Client Component

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

// Dados das emoções (de triste para feliz)
const emojis = ['😡', '😐', '😍', '😁'];

// Dados do gráfico de emoções
const moodData = {
  labels: ['W1', 'W2', 'W3', 'W4'], // Semanas no eixo X
  datasets: [
    {
      label: 'Mood',
      data: [0, 1, 3, 2], // Índices das emoções correspondentes
      backgroundColor: 'rgba(128, 90, 213, 0.2)',
      borderColor: 'rgba(128, 90, 213, 1)',
      fill: true,
      tension: 0.4,
      pointRadius: 5,
      pointBackgroundColor: 'rgba(128, 90, 213, 1)',
    },
  ],
};

// Opções do gráfico
const moodOptions: any = {
  scales: {
    y: {
      beginAtZero: true,
      max: 3, // Índice máximo do array de emoções
      ticks: {
        callback: function (value: number) {
          return emojis[value]; // Mostra os emojis no eixo Y
        },
        stepSize: 1, // Passo para alternar entre as emoções
      },
    },
  },
};

export default function MoodChart() {
  return <Line data={moodData} options={moodOptions} />; // Renderiza o gráfico
}
