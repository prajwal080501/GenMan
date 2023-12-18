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
            <button className="bg-zinc-700 items-center flex space-x-2 p-2 text-blue-500 font-medium rounded-lg">
              <PencilIcon className="h-4 w-4" />
              <span>Edit</span>
            </button>
            <button className="bg-zinc-700 text-red-400 p-2 flex items-center space-x-2  font-medium rounded-lg">
              <TrashIcon className="h-4 w-4" />
              <span> Delete</span>
            </button>
          </div>
        </div>
        <div className="flex space-x-2 b items-center">
          <LockClosedIcon className="h-8 w-8 text-blue-500" />
          <h2 className="text-white font-extrabold text-2xl lg:text-4xl">
            {password.title}
          </h2>
        </div>
        <hr className="my-5 border border-gray-500/30" />
        <div className="flex flex-col space-y-5">
          <div className="flex flex-col items-start space-y-2">
            <label className="text-white font-medium" htmlFor="email">
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
            <label className="text-white font-medium" htmlFor="email">
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
                  <ClipboardDocumentListIcon className="h-6 w-6 text-white/50 hover:text-blue-500 hover:scale-105 active:scale-95" />
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
