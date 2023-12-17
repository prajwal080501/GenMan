import { useState } from "react";
import Modal from "./Modal";

const Update = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Modal
      title="Update Password"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
        
    </Modal>
  );
};
