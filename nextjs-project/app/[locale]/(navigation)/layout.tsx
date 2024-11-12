import BottomAppBar from "@/components/navigation/BottomAppBar";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default async function NavigationLayout({ children }: Readonly<Props>) {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <div className="h-full w-full overflow-auto">{children}</div>
      <BottomAppBar />
    </div>
  );
}
