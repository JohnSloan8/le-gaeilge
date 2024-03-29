"use server";

import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { cookies } from "next/headers";
import { signOut } from "@/app/actions";

export default async function AuthButton() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user !== null ? (
    <div className="flex items-center gap-4">
      {/* Hey, {user.email}! */}
      <form action={signOut}>
        <button className="py-2 px-4 rounded-md no-underline">logout</button>
      </form>
    </div>
  ) : (
    <Link href="/login" className="py-2 px-3 flex rounded-md no-underline">
      login
    </Link>
  );
}
