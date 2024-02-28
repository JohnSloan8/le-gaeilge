import {} from // XLargeTitle,
// ProfileImageLarge,
// GroupCardSmall,
// EventCardSmall,
// SmallPaddingContainer,
// MarginTopContainer,
// SmallMarginContainer,
// MediumTitle,
// SmallText,
"@/components";
// import { createClient } from "@/utils/supabase/server";
// import { cookies } from "next/headers";
// import { getUserGroups } from "@/services";
// import Link from "next/link";

export default async function ProfilePage({
  params,
}: {
  params: { id: string };
}) {
  // const cookieStore = cookies();
  // const supabase = createClient(cookieStore);
  // const { data: profile } = await supabase
  //   .from("profiles")
  //   .select()
  //   .eq("id", params.id)
  //   .single();

  // const groups = await getUserGroups(profile.user_id);

  // console.log("user groups", groups);

  return profile !== null ? (
    <div className="w-full">
      <XLargeTitle text_ga={profile.name} text_en="" />
      <MarginTopContainer>
        <div className="w-full flex md:flex-row flex-col items-center">
          <ProfileImageLarge url={profile.image} />

          <div className="flex flex-col">
            <div className="flex flex-row">
              <SmallPaddingContainer>
                <SmallText text_ga={`leibhéal`} text_en="Irish level" />
              </SmallPaddingContainer>
              <SmallPaddingContainer>
                <MediumTitle text_ga={`${profile.irish_level}`} text_en="" />
              </SmallPaddingContainer>
            </div>
            <div className="flex">
              <SmallPaddingContainer>
                <SmallText text_ga={`grupaí`} text_en="groups" />
              </SmallPaddingContainer>
              <SmallPaddingContainer>
                <MediumTitle text_ga={`${groups.length}`} text_en="" />
              </SmallPaddingContainer>
            </div>
            {/* <div className="flex">
              <SmallPaddingContainer>
                <SmallText text_ga={`imeachtaí`} text_en="events" />
              </SmallPaddingContainer>
              <SmallPaddingContainer>
                <MediumTitle text_ga={`${profile.events.length}`} text_en="" />
              </SmallPaddingContainer>
            </div> */}
          </div>
        </div>
      </MarginTopContainer>

      {/* <MarginTopContainer>
         <MediumTitle text_ga="Groupaí" text_en="Groups" />
         <div className="flex flex-wrap w-full justify-center">
           {profile.groups.map((g: any, index: number) => (
             <SmallMarginContainer key={String(index)}>
               <Link href={`/grupai/${g.URL}`}>
                 <GroupCardSmall
                   text_ga={`${g.name_ga}`}
                   text_en={`${g.name_en}`}
                   image={`${g.image}`}
                 />
               </Link>
             </SmallMarginContainer>
           ))}
         </div>
       </MarginTopContainer> */}

      {/* <MarginTopContainer>
         <MediumTitle text_ga="Imeachtaí" text_en="Events" />
         <div className="w-full">
           {profile.events.map((event: any, index: number) => (
             <SmallMarginContainer key={String(index)}>
               <Link href={`/imeachtai/${event.id}`}>
                 <EventCardSmall
                   name_ga={event.name_ga}
                   name_en={event.name_en}
                   group_name_ga={
                     profile.groups !== undefined &&
                     profile.groups.find((g: any) => g.id === event.group_id)
                       .name_ga
                   }
                   group_name_en={
                     profile.groups !== undefined &&
                     profile.groups.find((g: any) => g.id === event.group_id)
                       .name_en
                   }
                   start_date={event.start_date}
                   start_time={event.start_time}
                   end={event.end}
                   image={event.image}
                 />
               </Link>
             </SmallMarginContainer>
           ))}
         </div>
       </MarginTopContainer>  */}
    </div>
  ) : null;
}
