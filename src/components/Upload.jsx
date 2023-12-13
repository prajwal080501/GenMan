import { useState } from "react";
import Modal from "./Modal";
import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";
import { useDropzone } from 'react-dropzone';
function Upload({ isOpen, setIsOpen, setPasswords }) {

    const [uploadedFiles, setUploadedFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: (acceptedFiles) => {
            setUploadedFiles(acceptedFiles)
        }
    });

    return (
        <Modal title="Import Passwords" isOpen={isOpen} setIsOpen={setIsOpen}>
            {/* create a file upload input feild with icon to display */}
            <div className="flex flex-col space-y-3">
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {
                        uploadedFiles.length > 0 ? (<ul>
                            {uploadedFiles.map((file) => (
                                <div className="flex flex-col space-y-3 items-center">
                                    <img src="https://cdn-icons-png.flaticon.com/128/2965/2965335.png" alt="" className="w-18 h-18" />
                                    <li className="text-white font-medium text-xl" key={file.name}>{file.name}</li>
                                </div>
                            ))}
                        </ul>) : (
                            <div className="flex items-center bg-blue-500/10 mx-auto w-fit h-fit rounded-lg p-4 justify-center flex-col">
                                <ArrowUpTrayIcon className="h-32 w-32 text-white" />
                                <p className="text-blue-500 font-bold text-2xl">Drag and drop your file here</p>
                            </div>
                        )
                    }
                    <div className="w-full flex items-end">
                        <button onClick={() => {
                            setIsOpen((prev) => !prev);
                            setPasswords((prev) => [...prev, ...uploadedFiles]);
                        }} className="bg-blue-500 hover:bg-blue-600 duration-200 text-white font-bold px-3 py-2 rounded-lg">
                            Import
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default Upload;