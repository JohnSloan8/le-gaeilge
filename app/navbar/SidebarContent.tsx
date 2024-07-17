import Link from "next/link";
import navbarLinks from "@/utils/paths/navbarLinks";
import { themeColors } from "@/theme";
import { SmallText } from "@/components";

interface SidebarProps {
  handleClickBurgerMenu: () => void;
}

const SidebarContent = ({ handleClickBurgerMenu }: SidebarProps) => {
  return (
    <div id="sidebarContainer" className="w-56 h-full">
      <div className="w-full h-full bg-primary-800 pt-14 ">
        <ul className="pt-1">
          {navbarLinks.map(({ name_ga, name_en, icon: Icon, link }) => (
            <Link href={link} key={link}>
              <div
                className="p-2 flex w-full my-2 items-center"
                onClick={handleClickBurgerMenu}
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

export default SidebarContent;
