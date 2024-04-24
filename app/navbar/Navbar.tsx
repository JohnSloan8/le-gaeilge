import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import NavbarClient from "./NavbarClient";

const Navbar = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return <NavbarClient session={session} />;
};

export default Navbar;
