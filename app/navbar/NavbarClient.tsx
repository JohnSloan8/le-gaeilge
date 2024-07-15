"use client";

import { BurgerMenuIcon, XIcon } from "@/icons";
// import { MediumText, RoundMobileButton } from "@/components";

import SidebarContent from "./SidebarContent";
import LoginButton from "./LoginButton";
import { useState } from "react";
import { themeColors } from "@/theme";
import type { Session } from "@supabase/supabase-js";

interface NavbarClientProps {
  session: Session | null;
}

const NavbarClient = ({ session }: NavbarClientProps) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleClick = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="absolute top-0 w-full">
      <div className="w-full flex justify-center h-14 bg-primary-800">
        <div className="flex flex-row h-full w-full">
          <div className="flex h-full justify-center lg:invisible">
            <button onClick={handleClick} className="pl-4">
              <BurgerMenuIcon color={themeColors.primary[100]} size={24} />
            </button>
          </div>

          <div className="flex h-full justify-center items-center pr-2">
            <LoginButton session={session} />
          </div>
        </div>
      </div>

      <div
        className={[
          showSidebar ? "left-0" : "left-[-101%]",
          `absolute h-screen w-full bg-primary-800 transition-all duration-500 ease-in-out opacity-50`,
        ].join(" ")}
      >
        {showSidebar && (
          <div className="absolute right-0 top-0 flex flex-row p-1 pt-2 gap-2">
            <button onClick={handleClick} className="p-2">
              <XIcon color={themeColors.primary[50]} size={22} />
            </button>
          </div>
        )}
      </div>

      <div
        className={[
          showSidebar ? "left-0" : "-left-56",
          "transition-all duration-500 ease-in-out absolute",
        ].join(" ")}
      >
        <SidebarContent setShowSidebar={setShowSidebar} />
      </div>
    </div>
  );
};

export default NavbarClient;
