import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalProps,
  Button,
  useDisclosure,
  RadioGroup,
  Radio,
} from "@nextui-org/react";

export default function FormModal(props: any) {
  const { isOpen, onOpen, onOpenChange } = props;

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior="inside">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
            <ModalBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                quam.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                quam.
              </p>
              <p>
                Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
                adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
                officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
                deserunt nostrud ad veniam.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                quam. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis
                sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
                deserunt nostrud ad veniam.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Action
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
