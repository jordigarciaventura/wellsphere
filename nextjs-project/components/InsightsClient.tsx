"use client"; // Este componente é um Client Component

import CircularProgress from "@/components/CircularProgress"; // Corrigido o caminho e nome do arquivo
import MoodChart from "./MoodChart";

interface Props {
  locale: string;
}

export default function InsightsClient({ locale }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 p-6">
      {/* Cabeçalho da página */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Oct, 2020</h2>
          <p className="text-gray-500">Track your progress</p>
        </div>
        <button className="bg-purple-500 text-white px-4 py-2 rounded-full">
          Monthly
        </button>
      </div>

      {/* Contador de Dias */}
      <div className="my-4 text-center">
        <p className="text-sm text-gray-500">Days straight</p>
        <p className="text-4xl font-bold text-purple-500">20</p>
      </div>

      {/* Emojis para as emoções */}
      <div className="flex justify-center mb-4">
        <div className="text-center mx-4">
          <span className="text-2xl">😁</span>
          <p className="text-sm">W1</p>
        </div>
        <div className="text-center mx-4">
          <span className="text-2xl">😍</span>
          <p className="text-sm">W2</p>
        </div>
        <div className="text-center mx-4">
          <span className="text-2xl">😐</span>
          <p className="text-sm">W3</p>
        </div>
        <div className="text-center mx-4">
          <span className="text-2xl">😡</span>
          <p className="text-sm">W4</p>
        </div>
      </div>

      {/* Gráfico de Acompanhamento de Humor */}
      <div className="my-6">
        <p className="text-gray-500 text-center">Mood follow-up</p>
        <div className="h-40 bg-purple-200 rounded-lg mt-4 flex justify-center items-center">
          <MoodChart /> {/* Renderiza o gráfico de humor */}
        </div>
      </div>

      {/* Progressos circulares */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <CircularProgress label="Emotional" progress={241} total={500} />
        <CircularProgress label="Occupational" progress={370} total={500} />
        <CircularProgress label="Spiritual" progress={120} total={500} />
        <CircularProgress label="Physical" progress={241} total={500} />
        <CircularProgress label="Intelectual" progress={370} total={500} />
        <CircularProgress label="Social" progress={120} total={500} />
      </div>
    </div>
  );
}
