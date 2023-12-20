import { XCircleIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
const Modal = ({ children, isOpen, setIsOpen, title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed z-10 top-0 left-0 w-full h-full flex justify-center items-center ${
        isOpen ? "block duration-200" : "hidden"
      }`}
    >
      {/* Apply a backdrop filter for a glossy and blurred background */}
      <div className="fixed z-20 inset-0 bg-black bg-opacity-80 backdrop-filter backdrop-blur-sm duration-200  transition-all flex justify-center items-center">
        <div className="bg-white dark:bg-zinc-900 p-5 drop-shadow-2xl rounded-lg w-[80%] lg:w-[40%] h[90%] lg:h-fit">
          <div className="flex justify-between items-center">
            <h1 className=" text-xl lg:text-3xl py-4 font-extrabold dark:text-white">
              {title}
            </h1>
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="text-4xl text-red-500 font-bold"
            >
              <XCircleIcon className="h-8 w-8" />
            </button>
          </div>
          <div className="mt-5">{children}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Modal;
