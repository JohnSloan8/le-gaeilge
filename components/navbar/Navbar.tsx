import { GroupIcon, HomeIcon, EventsIcon } from "@/icons";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full h-14 pt-1 flex flex-row justify-around bg-background-dark text-light">
      <Link href="/" className="flex flex-grow justify-center border-r">
        <div className="flex flex-col h-full items-center ">
          <div className="flex flex-grow items-center">
            <HomeIcon color="#FFF" size={26} />
          </div>
          <div className="text-xs h-4">abhaile</div>
        </div>
      </Link>
      <Link href="/grupai" className="flex flex-grow justify-center border-r">
        <div className="flex flex-col h-full items-center ">
          <div className="flex flex-grow items-center">
            <GroupIcon color="#FFF" size={28} />
          </div>
          <div className="text-xs h-4">grupaí</div>
        </div>
      </Link>
      <Link href="/imeachtai" className="flex flex-grow justify-center">
        <div className="flex flex-col h-full items-center ">
          <div className="flex flex-grow items-center">
            <EventsIcon color="#FFF" size={32} />
          </div>
          <div className="text-xs h-4">imeachtaí</div>
        </div>
      </Link>
      {/* <Link href="/login" className="flex flex-grow justify-center">
        <div className="flex flex-col h-full items-center ">
          <div className="flex flex-grow items-center">
            <ProfileIcon color="#FFF" size={32} />
          </div>
          <div className="text-xs h-4">proifíl</div>
        </div>
      </Link> */}
    </nav>
  );
};

export default Navbar;
