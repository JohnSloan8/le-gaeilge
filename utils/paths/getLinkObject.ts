import navbarLinks from "./navbarLinks";

const getLinkObject = (pathname: string) => {
  return navbarLinks.find((navItem: any) => navItem.link === pathname);
};

export default getLinkObject;
