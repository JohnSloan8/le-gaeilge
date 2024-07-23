"use client";

import { BurgerMenuIcon, HomeIcon } from "@/icons";
// import { MediumText, RoundMobileButton } from "@/components";
import Sidebar from "./Sidebar";
import LoginButton from "./LoginButton";
import { useState } from "react";
import { themeColors } from "@/theme";
import type { Session } from "@supabase/supabase-js";
import NavbarContent from "./NavbarContent";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLinkObject } from "@/utils";
import { MediumText } from "@/components";

interface NavbarClientProps {
  session: Session | null;
}

const NavbarClient = ({ session }: NavbarClientProps) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const path = usePathname();
  const linkObject = getLinkObject(path);
  console.log("linkObject", linkObject);
  const handleClickBurgerMenu = () => {
    setShowSidebar(!showSidebar);
  };

  console.log("linkObject:", linkObject);

  return (
    <div className="w-full h-full">
      <div className="w-full flex justify-center h-full bg-primary-800">
        {!showSidebar && (
          <div className="flex justify-between flex-row h-full w-full relative">
            <Link href={`/`}>
              <div className="h-full flex p-3 items-center">
                <HomeIcon color={themeColors.primary[100]} size={24} />
              </div>
            </Link>

            <div className="h-full flex items-center absolute left-1/2 -translate-x-1/2">
              <MediumText
                text_ga={
                  linkObject?.name_ga === undefined ? null : linkObject.name_ga
                }
                text_en={
                  linkObject?.name_en === undefined ? null : linkObject.name_en
                }
                dark={true}
                centered={true}
              />
            </div>

            <div className="h-full flex py-2">
              <div className="h-full invisible lg:visible pr-4 border-r">
                <NavbarContent />
              </div>
              <div className="flex h-full justify-center">
                <button onClick={handleClickBurgerMenu} className="px-4">
                  <BurgerMenuIcon color={themeColors.primary[100]} size={24} />
                </button>
              </div>
              <div className="flex h-full justify-center items-center pr-4">
                <LoginButton session={session} />
              </div>
            </div>
          </div>
        )}
        <div className="">
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
