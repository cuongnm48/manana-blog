"use client";
import Header from "@/components/Layout/Header";
import HeaderCopy from "@/components/Layout/HeaderCopy";
import { useAppSelector } from "@/redux/hooks";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import React from "react";

const BodyLayout = ({ children }: { children: React.ReactNode }) => {
  const pageTheme = useAppSelector((state) => state.theme.value);

  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme={pageTheme} forcedTheme={pageTheme}>
        <main className="font-worksans">
          <HeaderCopy theme={pageTheme} />
          <div className="px-20 md:container md:mx-auto container-app ">
            <div className="w-100">{children}</div>
          </div>
        </main>
      </NextThemesProvider>
    </NextUIProvider>
  );
};

export default BodyLayout;
