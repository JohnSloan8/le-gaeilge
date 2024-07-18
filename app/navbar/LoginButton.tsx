import { RoundMobileButton } from "@/components";
import { ProfileIcon, SignInIcon } from "@/icons";
import { themeColors } from "@/theme";
import type { Session } from "@supabase/supabase-js";
import Link from "next/link";

interface LoginButtonProps {
  session: Session | null;
}

const LoginButton = ({ session }: LoginButtonProps) => {
  return (
    <button>
      {session !== null ? (
        <Link href="/proifil">
          <ProfileIcon color={themeColors.primary[100]} size={28} />
        </Link>
      ) : (
        <Link href="/login">
          <SignInIcon color={themeColors.primary[100]} size={28} />
        </Link>
      )}
    </button>
  );
};

export default LoginButton;
