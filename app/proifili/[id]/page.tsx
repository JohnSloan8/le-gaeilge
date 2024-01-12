import Profile from "./profile";

export default async function Page({ params }: { params: { id: string } }) {
  return <Profile profileID={Number(params.id)} />;
}
