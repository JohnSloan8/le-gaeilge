// import { createClient } from "@/utils/supabase/server";
// import { cookies } from "next/headers";
// import {
//   ProfileCard,
//   SmallMarginContainer,
//   XLargeText,
//   SmallPaddingContainer,
// } from "@/components";
// import Link from "next/link";

export default async function ProfilesPage() {
  // const cookieStore = cookies();
  // const supabase = createClient(cookieStore);
  // const { data: profiles } = await supabase.from("profiles").select();

  // return (
  //   <div className="w-full flex flex-col items-center">
  //     <SmallPaddingContainer>
  //       <XLargeText text_ga="Proifilí" text_en="profiles" />
  //     </SmallPaddingContainer>
  //     <div className="flex flex-wrap w-full justify-center">
  //       {profiles?.map((profile: any, index: number) => (
  //         <SmallMarginContainer key={String(index)}>
  //           <Link href={`/proifili/${profile.id}`}>
  //             <ProfileCard name={profile.name} image={profile.image} />
  //           </Link>
  //         </SmallMarginContainer>
  //       ))}
  //     </div>
  //   </div>
  // );
  return null;
}
