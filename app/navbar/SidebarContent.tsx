import Link from "next/link";
import navbarLinks from "./navbarLinks";
import { themeColors } from "@/theme";
import { SmallText } from "@/components";

interface SidebarProps {
  setShowSidebar: (show: boolean) => void;
}

const Sidebar = ({ setShowSidebar }: SidebarProps) => {
  return (
    <div id="sidebarContainer" className="w-56">
      <div className="w-full h-screen shadow-md bg-primary-800">
        <ul className="pt-1">
          {navbarLinks.map(({ name_ga, name_en, icon: Icon, link }) => (
            <Link href={link} key={link}>
              <div
                className="p-2 flex w-full my-2 items-center"
                onClick={() => {
                  setShowSidebar(false);
                }}
              >
                <div className="mx-4 flex">
                  <Icon color={themeColors.primary[100]} size={28} />
                </div>
                <SmallText text_ga={name_ga} text_en={name_en} dark={true} />
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
