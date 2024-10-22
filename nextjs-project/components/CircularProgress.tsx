"use client"; // Este é um Client Component

interface CircularProgressProps {
  label: string;
  progress: number; // Progresso atual
  total: number; // Valor total
}

export default function CircularProgress({
  label,
  progress,
  total,
}: CircularProgressProps) {
  // Cálculo da porcentagem
  const percentage = (progress / total) * 100;

  return (
    <div className="text-center">
      {/* Container do círculo com a barra de progresso */}
      <div className="relative inline-block h-20 w-20">
        <svg className="h-full w-full" viewBox="0 0 36 36">
          <path
            className="text-gray-300"
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            className="text-purple-500"
            strokeDasharray={`${percentage}, 100`} // Mostra o progresso no círculo
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
        {/* Texto no centro do círculo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-semibold text-gray-700">
            {progress}/{total}
          </span>
        </div>
      </div>
      {/* Texto abaixo do círculo */}
      <p className="mt-2 text-sm font-medium text-gray-600">{label}</p>
    </div>
  );
}
