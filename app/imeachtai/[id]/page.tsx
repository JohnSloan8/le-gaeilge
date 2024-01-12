import Event from "./event";

export default async function Page({ params }: { params: { id: string } }) {
  return <Event eventID={Number(params.id)} />;
}
