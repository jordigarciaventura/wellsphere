"use client";

import React, { useState } from "react";
import SettingsHeader from "@/features/settings/components/SettingsHeader";
import AccountSettings from "@/features/settings/components/AccountSettings";
import CustomizationSettings from "@/features/settings/components/CustomizationSettings";
import PremiumSettings from "@/features/settings/components/PremiumSettings";
import EditProfileForm from "@/features/settings/components/EditProfileForm";

export default function SettingsPage() {
  const [currentView, setCurrentView] = useState<"Main" | "EditProfileForm">("Main");

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8">
      {currentView === "Main" ? (
        <>
          {/* Cabeçalho da página */}
          <SettingsHeader title="Settings" />
          {/* Espaçamento entre o título e os componentes */}
          <div className="mt-6 space-y-8">
            {/* Componentes de Configuração */}
            <AccountSettings onEditProfile={() => setCurrentView("EditProfileForm")} />
            <CustomizationSettings />
            <PremiumSettings />
          </div>
        </>
      ) : (
        /* Renderiza apenas o formulário de edição do perfil */
        <EditProfileForm onBack={() => setCurrentView("Main")} />
      )}
    </div>
  );
}
