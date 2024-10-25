"use client";
import { usePathname, useRouter } from "next/navigation";
import React, {
  ElementRef,
  forwardRef,
  InputHTMLAttributes,
  LegacyRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import { createPortal } from "react-dom";
import { ModalProps } from "./types";

export type ModalRef = {
  onDismiss: () => void;
  closeModal: () => void;
};

// eslint-disable-next-line react/display-name
const Modal = forwardRef<ModalRef, ModalProps>((args, ref) => {
  const { children } = args;
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useImperativeHandle(ref, () => {
    return {
      onDismiss,
      closeModal,
    };
  });

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }
  function closeModal() {
    dialogRef.current?.close();
  }

  return createPortal(
    <div className="modal-backdrop">
      <dialog ref={dialogRef} className="modal" onClose={onDismiss}>
        {children}
      </dialog>
    </div>,
    document.getElementById("modal-root")!
  );
});

export default Modal;
