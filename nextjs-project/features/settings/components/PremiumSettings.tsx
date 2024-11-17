import React from "react";

export default function PremiumSettings() {
  return (
    <div className="flex flex-col gap-4">
      {/* Header com título e botão */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">Premium</h2>
        <button
          className="bg-[#9C2CF3] text-white font-semibold px-4 py-2 rounded-full shadow-md hover:bg-[#7a23c1] transition-all"
        >
          Subscribe
        </button>
      </div>

      {/* Campo de exibição do plano atual */}
      <div className="bg-white border border-gray-300 rounded-lg p-4 text-gray-700 flex items-center gap-2">
        <img 
          src="/assets/account_circle.svg" 
          alt="Current Plan Icon" 
          className="w-6 h-6"
        />
        <span>Current Plan: Premium</span>
      </div>
    </div>
  );
}
