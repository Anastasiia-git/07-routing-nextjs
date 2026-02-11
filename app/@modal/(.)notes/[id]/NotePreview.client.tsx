import ModalRoute from "@/components/Modal/ModalRoute";
import NoteDetailsServer from "@/app/(public routes)/notes/[id]/NoteDetailsServer";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function NotePreview({ params }: Props) {
  const { id } = await params;

  return (
    <ModalRoute>
      <NoteDetailsServer id={id} />
    </ModalRoute>
  );
}
