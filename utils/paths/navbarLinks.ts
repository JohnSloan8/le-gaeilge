import { HomeIcon, EventsIcon, GroupIcon, BookIcon, PencilIcon } from "@/icons";

const navbarLinks = [
  {
    name_ga: "Baile",
    name_en: "Home",
    link: "/",
    icon: HomeIcon,
  },
  {
    name_ga: "Grúpaí",
    name_en: "Groups",
    link: "/grupai",
    icon: GroupIcon,
  },
  {
    name_ga: "Fócloir",
    name_en: "Dictionary",
    link: "/focloir",
    icon: BookIcon,
  },
  {
    name_ga: "Scrúdú",
    name_en: "Tests",
    link: "/scrudu",
    icon: PencilIcon,
  },
  {
    name_ga: "Imeachtaí",
    name_en: "Events",
    link: "/imeachtai",
    icon: EventsIcon,
  },
];

export default navbarLinks;
