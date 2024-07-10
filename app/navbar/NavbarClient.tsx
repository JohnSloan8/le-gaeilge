"use client";

import {
  BurgerMenuIcon,
  HomeIcon,
  EventsIcon,
  GroupIcon,
  XIcon,
  BookIcon,
  PencilIcon,
} from "@/icons";
import { RoundMobileButton, SmallText } from "@/components";
import Link from "next/link";
import Sidebar from "./Sidebar";
import LoginButton from "./LoginButton";
import { useState } from "react";
import { themeColors } from "@/theme";
import type { Session } from "@supabase/supabase-js";
import navbarLinks from "./navbarLinks";

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
      {!showSidebar && (
        <>
          <div className="absolute left-0 flex flex-row p-2 gap-2">
            <RoundMobileButton handleClick={handleClick}>
              <BurgerMenuIcon color={themeColors.primary[700]} size={22} />
            </RoundMobileButton>
          </div>
          <div className="absolute right-0 top-0 flex flex-row p-2 gap-2">
            <LoginButton session={session} />
          </div>
        </>
      )}
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
        <Sidebar setShowSidebar={setShowSidebar}>
          {/* <Link href="/grupai">
            <div
              className="p-2 flex w-full my-2 items-center"
              onClick={() => {
                setShowSidebar(false);
              }}
            >
              <div className="mx-2">
                <GroupIcon color={themeColors.primary[100]} size={24} />
              </div>
              <div className="text-primary-100">grúpaí</div>
            </div>
          </Link>
          <Link href="/imeachtai">
            <div
              className="p-2 flex w-full my-2 items-center"
              onClick={() => {
                setShowSidebar(false);
              }}
            >
              <div className="mx-2">
                <EventsIcon color={themeColors.primary[100]} size={24} />
              </div>
              <div className="text-primary-100">imeachtaí</div>
            </div>
          </Link>
          <Link href="/focloir">
            <div
              className="p-2 flex w-full my-2 items-center"
              onClick={() => {
                setShowSidebar(false);
              }}
            >
              <div className="mx-2">
                <BookIcon color={themeColors.primary[100]} size={24} />
              </div>
              <div className="text-primary-100">foclóir</div>
            </div>
          </Link>
          <Link href="/scrudu">
            <div
              className="p-2 flex w-full my-2 items-center"
              onClick={() => {
                setShowSidebar(false);
              }}
            >
              <div className="mx-2">
                <PencilIcon
                  color={themeColors.primary[100]}
                  size={24}
                  filled={true}
                />
              </div>
              <div className="text-primary-100">scrúdú</div>
            </div>
          </Link> */}
        </Sidebar>
      </div>
    </div>
  );
};

export default NavbarClient;
