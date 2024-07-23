import { XIcon } from "@/icons";
import SidebarContent from "./SidebarContent";

interface SidebarProps {
  handleClickBurgerMenu: () => void;
  showSidebar: boolean;
}

const Sidebar = ({ handleClickBurgerMenu, showSidebar }: SidebarProps) => {
  return (
    <div className="fixed h-screen top-0">
      <div
        className={[
          showSidebar ? "left-0" : "left-[-101%]",
          `fixed h-screen w-full bg-primary-800 pt-14 transition-all duration-500 ease-in-out opacity-70`,
        ].join(" ")}
        onClick={handleClickBurgerMenu}
      >
        {showSidebar && (
          <div className="absolute right-0 top-0 flex flex-row p-2 gap-2">
            <button onClick={handleClickBurgerMenu} className="p-2">
              <XIcon color="#fff" size={24} />
            </button>
          </div>
        )}
      </div>

      <div
        className={[
          showSidebar ? "left-0" : "-left-56",
          "top-[-14] transition-all h-screen duration-500 ease-in-out fixed",
        ].join(" ")}
      >
        <SidebarContent handleClickBurgerMenu={handleClickBurgerMenu} />
      </div>
    </div>
  );
};

export default Sidebar;
