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
    <RoundMobileButton>
      {session !== null ? (
        <Link href="/proifil">
          <ProfileIcon color={themeColors.primary[700]} size={22} />
        </Link>
      ) : (
        <Link href="/login">
          <SignInIcon color={themeColors.primary[700]} size={22} />
        </Link>
      )}
    </RoundMobileButton>
  );
};

export default LoginButton;
