"use client";

import { BurgerMenuIcon } from "@/icons";
// import { MediumText, RoundMobileButton } from "@/components";
import Sidebar from "./Sidebar";
import LoginButton from "./LoginButton";
import { useState } from "react";
import { themeColors } from "@/theme";
import type { Session } from "@supabase/supabase-js";
import NavbarContent from "./NavbarContent";

interface NavbarClientProps {
  session: Session | null;
}

const NavbarClient = ({ session }: NavbarClientProps) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleClickBurgerMenu = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="w-full h-full">
      <div className="w-full flex justify-center h-full bg-primary-800">
        <div className="flex justify-between flex-row h-full w-full">
          <div className="flex h-full justify-center lg:hidden">
            <button onClick={handleClickBurgerMenu} className="pl-4">
              <BurgerMenuIcon color={themeColors.primary[100]} size={24} />
            </button>
          </div>
          <div className="h-full invisible lg:visible">
            <NavbarContent />
          </div>
          <div className="flex h-full justify-center items-center pr-2">
            <LoginButton session={session} />
          </div>
        </div>
        <div className="lg:hidden">
          <Sidebar
            handleClickBurgerMenu={handleClickBurgerMenu}
            showSidebar={showSidebar}
          />
        </div>
      </div>
    </div>
  );
};

export default NavbarClient;
