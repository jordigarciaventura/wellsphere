export function getGradientClass(color: string): string {
  const gradientClasses: Record<string, string> = {
    green: "bg-gradient-to-br from-green-500 to-green-700",
    blue: "bg-gradient-to-br from-blue-500 to-blue-700",
    lightGreen: "bg-gradient-to-br from-green-400 to-green-600",
    orange: "bg-gradient-to-br from-orange-400 to-orange-600",
    yellow: "bg-gradient-to-br from-yellow-400 to-yellow-600",
    purple: "bg-gradient-to-br from-purple-500 to-purple-700",
    pink: "bg-gradient-to-br from-pink-500 to-pink-700",
    teal: "bg-gradient-to-br from-teal-500 to-teal-700",
    indigo: "bg-gradient-to-br from-indigo-500 to-indigo-700",
    red: "bg-gradient-to-br from-red-500 to-red-700",
    cyan: "bg-gradient-to-br from-cyan-500 to-cyan-700",
    brown: "bg-gradient-to-br from-yellow-900 to-yellow-700",
  };
  return gradientClasses[color] || "bg-gray-500"; // Default to gray if color is not found
}
