"use client";

import { useRouter } from "next/navigation";
import Modal from "@/components/Modal/Modal";
import css from "./NotePreview.module.css";

export default function NotePreviewClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <Modal onClose={() => router.back()}>
      <div className={css.container}>{children}</div>
    </Modal>
  );
}
