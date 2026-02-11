import NotesFilteredClient from "./Notes.client";

type Props = {
  params: Promise<{ slug: string[] }>;
};

export default async function FilteredNotesPage({ params }: Props) {
  const { slug } = await params;

  const filter = slug?.[0] ?? "all";
  const tag = filter === "all" ? undefined : filter;

  return <NotesFilteredClient tag={tag} />;
}
