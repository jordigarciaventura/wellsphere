import { ArrowLeft } from "lucide-react";

interface Props {
  title: string;
}

export default function SettingsHeader({ title }: Props) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <button className="p-2 rounded-full bg-purple-100 hover:bg-purple-200">
        <ArrowLeft className="text-purple-500" />
      </button>
      <h1 className="text-2xl font-semibold">{title}</h1>
    </div>
  );
}
