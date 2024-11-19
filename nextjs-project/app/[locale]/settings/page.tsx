import React, { useState } from "react";
import ClientSettingsPages from "@/features/settings/components/ClientSettingsPages";
import CustomizationSettings from "@/features/settings/components/CustomizationSettings";

export default function SettingsPage() {

  return (
   <ClientSettingsPages right={<CustomizationSettings></CustomizationSettings>}/>
  );
}
