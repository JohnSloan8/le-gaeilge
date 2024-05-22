// import { createClient } from "@/utils/supabase/server";
// // import { joinGroup, leaveGroup } from "@/app/actions";
// import Link from "next/link";
// import {
//   LargeTitle,
//   XLargeText,
//   SmallPaddingContainer,
//   MarginTopContainer,
//   // SmallMarginTopContainer,
//   SmallCapitalisedTitle,
//   SmallText,
//   GroupImageLarge,
//   EventCardSmall,
//   // Profiles,
//   // SecondaryButton,
//   // WarningButton,
//   ContentSection,
//   // Phrases,
// } from "@/components";
// import { cookies } from "next/headers";
// import { LocationIcon } from "@/icons";

interface PageProps {
  params: { name: string };
}

export default async function GroupPage({ params }: PageProps) {
  // const cookieStore = cookies();
  // const supabase = createClient(cookieStore);
  // const { data: group } = await supabase
  //   .from("groups")
  //   .select("*, location:locations(*), members(*), events(*), categories(*)")
  //   .match({ URL: params.name })
  //   .single();

  // if (group === null) {
  //   return <h1>No Group</h1>;
  // } else {
  // const memberIds =
  //   group !== null ? group.members.map((a: any) => a.user_id) : [];

  // const groupCategories = group.categories.map((c) => c.id);

  // const { data: phrases } = await supabase.rpc("get_categories_phrases", {
  //   categories_input: groupCategories,
  // });

  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();

  // const memberOfThisGroup = (): boolean => {
  //   return user !== null ? memberIds.includes(user.id) : false;
  // };

  // const getMemberId = (): number | undefined => {
  //   if (user !== null && memberIds.includes(user.id)) {
  //     const member = group.members.find((a) => a.user_id === user.id);
  //     return member !== undefined ? member.id : undefined;
  //   }
  //   return undefined;
  // };

  //
  return null;
}
