import Link from "next/link";
import navbarLinks from "@/utils/paths/navbarLinks";
import { themeColors } from "@/theme";
import { SmallText } from "@/components";

const NavbarContent = () => {
  return (
    <div className="">
      <ul className="flex flex-row gap-2">
        {navbarLinks.map(({ name_ga, name_en, icon: Icon, link }) => (
          <Link href={link} key={link}>
            <div className="p-2 flex w-full items-center">
              <div className="mx-2 flex">
                <Icon color={themeColors.primary[100]} size={28} />
              </div>
              <SmallText text_ga={name_ga} text_en={name_en} dark={true} />
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default NavbarContent;
