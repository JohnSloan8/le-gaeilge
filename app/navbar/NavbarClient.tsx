"use client";

import { BurgerMenuIcon, XIcon } from "@/icons";
import { MediumText, RoundMobileButton } from "@/components";

import SidebarContent from "./SidebarContent";
import LoginButton from "./LoginButton";
import { useState } from "react";
import { themeColors } from "@/theme";
import type { Session } from "@supabase/supabase-js";
import navbarLinks from "./navbarLinks";
import { usePathname } from "next/navigation";

interface NavbarClientProps {
  session: Session | null;
}

const NavbarClient = ({ session }: NavbarClientProps) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleClick = () => {
    setShowSidebar(!showSidebar);
  };

  const pathname = usePathname();
  console.log("pathname:", pathname);

  const getLinkObject = (link: string) => {
    return navbarLinks.find((navItem) => navItem.link === pathname);
  };

  const navbarLinkItem = getLinkObject(pathname);

  return (
    <div className="absolute top-0 w-full">
      <div className="w-full flex justify-center h-14 bg-primary-800">
        <div className="flex flex-row h-full w-full max-w-xl">
          <div className="flex h-full justify-center">
            <button onClick={handleClick} className="pl-4">
              <BurgerMenuIcon color={themeColors.primary[100]} size={24} />
            </button>
          </div>

          <div className="flex flex-grow justify-center items-center">
            {navbarLinkItem !== undefined ? (
              <MediumText
                text_en={navbarLinkItem?.name_en}
                text_ga={navbarLinkItem?.name_ga}
                dark={true}
                centered={true}
              />
            ) : (
              <div>no title</div>
            )}
          </div>
          <div className="flex h-full justify-center items-center pr-2">
            <LoginButton session={session} />
          </div>
        </div>
      </div>
      <div
        className={[
          showSidebar ? "left-0" : "left-[-101%]",
          `absolute h-screen w-full bg-primary-400 transition-all duration-500 ease-in-out`,
        ].join(" ")}
      >
        {showSidebar && (
          <div className="absolute right-0 top-0 flex flex-row p-1 pt-2 gap-2">
            <button onClick={handleClick} className="p-2">
              <XIcon color={themeColors.primary[700]} size={22} />
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
