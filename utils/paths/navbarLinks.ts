import {
  EventsIcon,
  GroupIcon,
  BookIcon,
  PencilIcon,
  ProfileIcon,
  HomeIcon,
} from "@/icons";

const navbarLinks = [
  {
    name_ga: "Baile",
    name_en: "Home",
    link: "/",
    icon: HomeIcon,
    showLink: false,
  },
  {
    name_ga: "Grúpaí",
    name_en: "Groups",
    link: "/grupai",
    icon: GroupIcon,
    showLink: true,
  },
  {
    name_ga: "Fócloir",
    name_en: "Dictionary",
    link: "/focloir",
    icon: BookIcon,
    showLink: true,
  },
  {
    name_ga: "Scrúdú",
    name_en: "Tests",
    link: "/scrudu",
    icon: PencilIcon,
    showLink: true,
  },
  {
    name_ga: "Imeachtaí",
    name_en: "Events",
    link: "/imeachtai",
    icon: EventsIcon,
    showLink: true,
  },
  {
    name_ga: "Proifil",
    name_en: "Profile",
    link: "/proifil",
    icon: ProfileIcon,
    showLink: false,
  },
];

export default navbarLinks;
