import NoteDetailsServer from "@/app//notes/[id]/NoteDetailsServer";
import NotePreviewClient from "./NotePreview.client";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function NotePreview({ params }: Props) {
  const { id } = await params;

  return (
    <NotePreviewClient>
      <NoteDetailsServer id={id} />
    </NotePreviewClient>
  );
}
