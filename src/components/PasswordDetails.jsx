import {
  ClipboardDocumentListIcon,
  ClipboardIcon,
  LockClosedIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Modal from "./Modal";
import { useContext, useRef, useState } from "react";
import toast from "react-hot-toast";
import { UserContext } from "../context/UserContext";

const PasswordDetails = ({ isOpen, setIsOpen, password, getPasswordByUserId }) => {
  const { token } = useContext(UserContext);
  const ref = useRef();
  const [edit, setEdit] = useState(false);
  const [email, setEmail] = useState(password.email);
  const [updatedPassword, setUpdatedPassword] = useState(password?.password);
  function copyPassword() {
    window.navigator.clipboard.writeText(ref.current.value);
    toast.success("Password copied to clipboard");
  }
  async function deletePassword(id) {
    const res = await fetch(
      `${import.meta.env.VITE_PRODUCTION_API_URL}/password/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
      }
    );
    const data = await res.json();
    getPasswordByUserId();

    toast.success(data.message);

    setIsOpen((prev) => !prev);
  }
  function updatePassword() {
    // update password
    const updatedData = {
      title: password.title,
      email: email,
      password: updatedPassword,
    };

    console.log(updatedData);
  }
  return (
    <Modal title="Password details" isOpen={isOpen} setIsOpen={setIsOpen}>
      <div>
        <div className="w-full flex items-end justify-end">
          <div className="w-fit flex space-x-5">
            <button
              onClick={() => {
                setEdit((prev) => !prev);
              }}
              className="dark:bg-zinc-950/70 px-3 bg-gray-200 items-center flex space-x-2 p-2 text-blue-500 font-medium rounded-lg"
            >
              <PencilIcon className="h-4 w-4" />
              <span>Edit</span>
            </button>
            <button
              onClick={() => {
                deletePassword(password._id);
              }}
              className="dark:bg-zinc-950/70 bg-gray-200 text-red-400 p-2 flex items-center space-x-2  font-medium rounded-lg"
            >
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
            <label
              className="dark:text-white text-black font-medium"
              htmlFor="email"
            >
              Email
            </label>
            <input
              value={email}
              {...(!edit && { disabled: true })}
              onChange={(e) => {
                e.preventDefault();
                setEmail(e.target.value);
              }}
              name="email"
              type="email"
              className="input"
            />
          </div>
          <div className="flex flex-col items-start space-y-2">
            <label
              className="dark:text-white text-black font-medium"
              htmlFor="email"
            >
              Password
            </label>
            <div className="flex justify-between items-center input">
              <input
                ref={ref}
                value={updatedPassword}
                {...(!edit && { disabled: true })}
                onChange={(e) => {
                  e.preventDefault();
                  setUpdatedPassword(e.target.value);
                }}
                name="password"
                type={edit ? "text" : "password"}
                className="bg-transparent z-10 outline-none"
              />
              <div>
                <button onClick={copyPassword}>
                  <ClipboardDocumentListIcon className="h-6 w-6 dark:text-white/50 text-black hover:text-blue-500 hover:scale-105 active:scale-95" />
                </button>
              </div>
            </div>
            {edit && (
              <motion.div
                intial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex w-full mt-5 items-center space-x-5"
              >
                <button
                  onClick={updatePassword}
                  className="bg-green-500 w-1/2 mx-auto text-white p-2 rounded-lg shadow-md hover:bg-green-600"
                >
                  Update
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PasswordDetails;
