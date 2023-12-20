import {
  EyeIcon,
  LockClosedIcon,
  ClipboardIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../context/UserContext";
import toast from "react-hot-toast";
import PasswordDetails from "./PasswordDetails";
function PasswordCard({
  password,
  passwords,
  setPasswords,
  getPasswordByUserId,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { token } = useContext(UserContext);
  const ref = useRef(null);
  const copyPassword = () => {
    window.navigator.clipboard.writeText(ref.current.value);
    toast.success("Password copied to clipboard");
  };

  return (
    <>
      <PasswordDetails
        getPasswordByUserId={getPasswordByUserId}
        password={password}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        className="w-[100%] mt-5 bg-gray-100 dark:bg-zinc-900 px-5 flex-row cursor-pointer hover:scale-[1.01] duration-200 hover:opacity-75 p-3 rounded-lg flex items-center justify-between"
      >
        <div className="flex space-x-4 items-center">
          <div className="flex flex-row space-x-5 justify-between w-full items-center">
            <div className="bg-blue-500 p-2 rounded-full">
              <LockClosedIcon className="h-8 w-8  text-white" />
            </div>
            <div className="flex flex-col items-start w-full">
              <p className="font-bold text-lg dark:text-white">
                {password.title}
              </p>
              <p className="text-xs lg:text-base w-fit text-gray-400">
                {password?.email}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <ChevronRightIcon className="w-6 h-6 lg:h-10 lg:w-10 text-gray-400" />
        </div>
      </div>
    </>
  );
}

export default PasswordCard;
