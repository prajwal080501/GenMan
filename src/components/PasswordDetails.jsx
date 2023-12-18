import {
  ClipboardDocumentListIcon,
  ClipboardIcon,
  LockClosedIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import Modal from "./Modal";
import { useRef } from "react";
import toast from "react-hot-toast";

const PasswordDetails = ({ isOpen, setIsOpen, password }) => {
  const ref = useRef();
  function copyPassword() {
    window.navigator.clipboard.writeText(ref.current.value);
    toast.success("Password copied to clipboard");
  }
  return (
    <Modal title="Password details" isOpen={isOpen} setIsOpen={setIsOpen}>
      <div>
        <div className="w-full flex items-end justify-end">
          <div className="w-fit flex space-x-5">
            <button className="dark:bg-zinc-700 bg-gray-200 items-center flex space-x-2 p-2 text-blue-500 font-medium rounded-lg">
              <PencilIcon className="h-4 w-4" />
              <span>Edit</span>
            </button>
            <button className="dark:bg-zinc-700 bg-gray-200 text-red-400 p-2 flex items-center space-x-2  font-medium rounded-lg">
              <TrashIcon className="h-4 w-4" />
              <span> Delete</span>
            </button>
          </div>
        </div>
        <div className="flex space-x-2 mt-8 lg:mt-2 items-center">
          <LockClosedIcon className="h-8 w-8 text-blue-500" />
          <h2 className="dark:text-white text-gray-800 font-extrabold text-2xl lg:text-4xl">
            {password.title}
          </h2>
        </div>
        <hr className="my-5 border border-gray-500/30" />
        <div className="flex flex-col space-y-5">
          <div className="flex flex-col items-start space-y-2">
            <label className="dark:text-white text-black font-medium" htmlFor="email">
              Email
            </label>
            <input
              value={password.email}
              disabled
              name="email"
              type="email"
              className="input"
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label className="dark:text-white text-black font-medium" htmlFor="email">
              Password
            </label>
            <div className="flex justify-between items-center input">
              <input
                ref={ref}
                value={password.password}
                disabled
                name="password"
                type="password"
                className="bg-transparent outline-none"
              />
              <div>
                <button onClick={copyPassword}>
                  <ClipboardDocumentListIcon className="h-6 w-6 dark:text-white/50 text-black hover:text-blue-500 hover:scale-105 active:scale-95" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PasswordDetails;
