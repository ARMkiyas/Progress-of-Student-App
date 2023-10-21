import React from "react";

import { Button, Modal, CustomFlowbiteTheme } from "flowbite-react";

type AlertModelProps = {
  openModal: string;
  setOpenModal: (openModal: string) => void;
  YesFunc: () => void;
  ModalText: string;
};

export default function AlertModel({
  openModal,
  setOpenModal,
  YesFunc,
  ModalText,
}: AlertModelProps) {
  return (
    <>
      <Modal
        show={openModal === "pop-up"}
        size="lg"
        popup
        onClose={() => setOpenModal(undefined)}
        className={`animate__animated animate__fadeIn animate__fast`}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <svg
              className="mx-auto mb-4 text-gray-400 h-14 w-14 dark:text-gray-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              {ModalText}
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                className="border-0 "
                color="failure"
                onClick={() => YesFunc()}
              >
                Yes, I'm sure
              </Button>
              <Button
                color="gray"
                className="border-0 "
                onClick={() => setOpenModal(undefined)}
              >
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
