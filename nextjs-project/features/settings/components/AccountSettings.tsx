import React from "react";
import { Edit, Bell, ShieldCheck } from "lucide-react";

interface Props {
  onEditProfile: () => void;
}

export default function AccountSettings({ onEditProfile }: Props) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <h2 className="text-lg font-medium mb-0">Account</h2>
      </div>

      <div className="border border-gray-300 p-4 bg-white shadow-sm" style={{ borderRadius: "20px" }}>
        <div className="flex flex-col gap-1">
          {/* Botão Edit Profile */}
          <button
            className="flex items-center w-full gap-4 py-3 px-4 text-left hover:bg-gray-100 focus:outline-none"
            onClick={onEditProfile}
          >
            <Edit className="w-5 h-5 text-gray-600" />
            <span className="text-gray-800">Edit Profile</span>
          </button>

          {/* Outros botões */}
          <button className="flex items-center w-full gap-4 py-3 px-4 text-left hover:bg-gray-100 focus:outline-none">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="text-gray-800">Notifications</span>
          </button>

          <button className="flex items-center w-full gap-4 py-3 px-4 text-left hover:bg-gray-100 focus:outline-none">
            <ShieldCheck className="w-5 h-5 text-gray-600" />
            <span className="text-gray-800">Privacy Policy</span>
          </button>
        </div>
      </div>
    </div>
  );
}
