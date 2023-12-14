import { useCallback, useState } from "react";
import Modal from "./Modal";
import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
function Upload({ isOpen, setIsOpen, setPasswords }) {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const onDrop = useCallback(
    (acceptedFiles) => {
      setUploadedFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      toast.success("File uploaded successfully");
    },
    [setUploadedFiles]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, 
accept: {
    '.json': 'application/json',
    '.txt': 'text/plain',
    '.csv': 'text/csv',
}
});

  return (
    <Modal title="Import Passwords" isOpen={isOpen} setIsOpen={setIsOpen}>
      {/* create a file upload input feild with icon to display */}
      <div className="flex flex-col space-y-3">
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {uploadedFiles.length > 0 ? (
            <ul>
              {uploadedFiles.map((file) => (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col cursor-pointer space-y-2 items-center"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2965/2965335.png"
                    alt=""
                    className="w-18 h-18"
                  />
                  <li
                    className="text-white font-medium text-xl"
                    key={file.name}
                  >
                    {file.name}
                  </li>
                  <li
                    className="text-gray-400 font-medium text-sm bg-blue-500/20 p-1 rounded-lg"
                    key={file.size}
                  >
                    {file.size} bytes
                  </li>
                </motion.div>
              ))}
            </ul>
          ) : (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center bg-blue-500/10 mx-auto w-fit h-fit rounded-lg p-4 justify-center flex-col"
            >
              <ArrowUpTrayIcon className="h-32 w-32 text-white" />
              <p className="text-blue-500 font-bold text-2xl">
                Drag and drop your file here
              </p>
            </motion.div>
          )}
        </div>
        <div className="w-full mt-8 flex items-end">
          <button
            onClick={() => {
              setIsOpen((prev) => !prev);
              readData();
            }}
            className="bg-blue-500 hover:bg-blue-600 duration-200 text-white font-bold px-3 py-2 rounded-lg"
          >
            Import
          </button>
          <button
            onClick={() => {
              setUploadedFiles([]);
            }}
            className="bg-red-500 hover:bg-red-600 duration-200 text-white font-bold px-3 py-2 rounded-lg ml-3"
          >
            Clear
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default Upload;
