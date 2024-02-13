"use client";

import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { useTheme } from "next-themes";
import { DesktopIcon, SunIcon ,MoonIcon} from "@radix-ui/react-icons";
import React, { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  });
  if (!mounted) return null;

  return (
    <Tabs defaultValue={theme}>
      <TabsList className="border">
        <TabsTrigger
          className=""
          value="light"
          onClick={() => setTheme("light")}
        >
          <SunIcon className=" h-[1.2rem] w-[1.2-rem]" />
        </TabsTrigger>
        <TabsTrigger
          className=""
          value="dark"
          onClick={() => setTheme("dark")}
        >
          <MoonIcon className=" h-[1.2rem] w-[1.2-rem] rotate-90 transition-all dark:rotate-0"/>
        </TabsTrigger>
        <TabsTrigger
          className=""
          value="system"
          onClick={() => setTheme("system")}
        >
          <DesktopIcon className=" h-[1.2rem] w-[1.2-rem]"/>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
