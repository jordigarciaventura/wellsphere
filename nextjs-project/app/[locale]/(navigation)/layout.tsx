import BottomAppBar from "@/components/BottomAppBar";
import TopAppBar from "@/components/TopAppBar";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default async function NavigationLayout({ children }: Readonly<Props>) {
  return (
    <>
      <TopAppBar />
      {children}
      <BottomAppBar />
    </>
  );
}
