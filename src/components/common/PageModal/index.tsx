"use client";
import { useRouter } from "next/navigation";
import { PageModalProps } from "./types";
import { ElementRef, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function PageModal(args: PageModalProps) {
  const { children, backdropAdditionalElement } = args;
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  const onDismiss = () => {
    router.back();
  };

  return createPortal(
    <div className="modal-backdrop">
      <dialog ref={dialogRef} className="modal" onClose={onDismiss}>
        {children}
      </dialog>
      {backdropAdditionalElement}
    </div>,
    document.getElementById("modal-root")!
  );
}
