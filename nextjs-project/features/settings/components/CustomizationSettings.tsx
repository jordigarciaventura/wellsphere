"use client";

import React, { useState } from "react";

export default function Customization() {
  const [theme, setTheme] = useState(""); // Estado para o tema
  const [language, setLanguage] = useState(""); // Estado para o idioma

  return (
    <div className="space-y-4">
      {/* Título alinhado */}
      <div className="flex items-center gap-4">
        <h2 className="text-lg font-medium mb-0">Customization</h2>
      </div>

      {/* Quadro com borda arredondada */}
      <div
        className="border border-gray-300 p-4 bg-white shadow-sm"
        style={{ borderRadius: "20px" }}
      >
        <div className="flex flex-col gap-4">
          {/* Dropdown para Change Theme */}
          <div className="relative inline-flex">
            <select
              className="border border-gray-300 rounded-lg px-4 py-2 text-bold focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            >
              <option value="" disabled hidden>
                Change Theme
              </option>
              <option value="Light">Light</option>
              <option value="Dark">Dark</option>
            </select>
          </div>

          {/* Dropdown para Change Language */}
          <div className="relative inline-flex">
            <select
              className="border border-gray-300 rounded-lg px-4 py-2 text-bold focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="" disabled hidden>
                Change Language
              </option>
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
