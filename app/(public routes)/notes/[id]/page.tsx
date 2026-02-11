import NoteDetailsServer from "./NoteDetailsServer";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function NoteDetailsPage({ params }: Props) {
  const { id } = await params;
  return <NoteDetailsServer id={id} />;
}
