import React from "react";
import { ArrowLeft } from "lucide-react";

interface Props {
  onBack: () => void;
}

export default function EditProfileForm({ onBack }: Props) {
  return (
    <div className="max-w-2xl mx-auto p-8 space-y-8">
      {/* Título Profile com mais espaçamento */}
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={onBack}
          className="flex items-center text-blue-500 hover:text-blue-700 focus:outline-none"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
        </button>
        <h2 className="text-2xl font-semibold text-gray-800">Profile</h2>
      </div>

      <form className="space-y-8">
        {/* Campos do formulário */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            placeholder="John Doe"
            className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            placeholder="JohnD0e"
            className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="JohnDoe@gmail.com"
            className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            placeholder="******"
            className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Botão Update Profile centralizado e maior largura */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-12 py-3 w-[300px] rounded-full bg-[#9C2CF3] text-white font-medium shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
}
