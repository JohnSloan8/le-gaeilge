"use client";

import {
  BurgerMenuIcon,
  HomeIcon,
  EventsIcon,
  GroupIcon,
  ProfileIcon,
  XIcon,
} from "@/icons";
import { RoundMobileButton } from "@/components";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleClick = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="absolute top-0 w-full border">
      <div className="absolute left-0 flex flex-row p-1 pt-2 gap-2">
        <RoundMobileButton handleClick={handleClick}>
          <BurgerMenuIcon color="#000" size={22} />
        </RoundMobileButton>
      </div>
      <div className="absolute right-0 top-0 flex flex-row p-1 pt-2 gap-2">
        <RoundMobileButton>
          <Link href="/login">
            <ProfileIcon color="#000" size={22} />
          </Link>
        </RoundMobileButton>
      </div>

      <div
        className={[
          showSidebar ? "left-0" : "left-[-100%]",
          "absolute h-screen w-full bg-cyan-400 transition-all duration-500 ease-in-out",
        ].join(" ")}
      >
        <div className="absolute right-0 top-0 flex flex-row p-1 pt-2 gap-2">
          <RoundMobileButton handleClick={handleClick}>
            <XIcon color="#000" size={22} />
          </RoundMobileButton>
        </div>
      </div>

      <div
        className={[
          showSidebar ? "left-0" : "-left-48",
          "transition-all duration-500 ease-in-out absolute",
        ].join(" ")}
      >
        <Sidebar>
          <Link href="/" className="text-white z-90">
            <div
              className="p-2 flex w-full"
              onClick={() => {
                setShowSidebar(false);
              }}
            >
              <div className="mx-2">
                <HomeIcon color="#fff" size={24} />
              </div>
              <div className="">bhaile</div>
            </div>
          </Link>
          <Link href="/grupai" className="text-white">
            <div
              className="p-2 flex w-full"
              onClick={() => {
                setShowSidebar(false);
              }}
            >
              <div className="mx-2">
                <GroupIcon color="#fff" size={24} />
              </div>
              <div className="">grúpaí</div>
            </div>
          </Link>
          <Link href="/imeachtai" className="text-white">
            <div
              className="p-2 flex w-full"
              onClick={() => {
                setShowSidebar(false);
              }}
            >
              <div className="mx-2">
                <EventsIcon color="#fff" size={24} />
              </div>
              <div className="">imeachtaí</div>
            </div>
          </Link>
        </Sidebar>
      </div>
    </div>
  );
};

export default Navbar;
