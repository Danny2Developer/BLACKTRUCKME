import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

function AdminModal({ children, isOpen, onOpenChange, placement, size }) {
  // const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <div>
      <Modal
        classNames={{
          body: "py-4",
          backdrop: "backdrop-opacity-40",
          base: "border-[#292f46] bg-gray-800 text-[#a8b0d3]",
          header: "",
          footer: "",
          closeButton: "hover:bg-white/5 active:bg-white/10 hidden",

        }}
        size={size}
        placement={placement}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        {children}
      </Modal>
    </div>
  );
}

export default AdminModal;
