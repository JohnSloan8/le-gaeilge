import type { ReactNode } from "react";

interface SidebarProps {
  children: ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
  return (
    <div id="sidebarContainer" className="w-56">
      <div className="w-full h-screen shadow-md bg-primary-800">
        <ul className="pt-12 ">{children}</ul>
      </div>
    </div>
  );
};

export default Sidebar;
