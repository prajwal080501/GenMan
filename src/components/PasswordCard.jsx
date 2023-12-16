import { TrashIcon, PencilIcon, EyeIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
function PasswordCard({ password, passwords, setPasswords }) {
    const [showPassword, setShowPassword] = useState(false);
    const { token } = useContext(UserContext);
    function handleShowPassword() {
        setShowPassword(!showPassword);

        if (showPassword) {
            setPassword(password.password);
        }
        else {
            setPassword("********");
        }
    }

    async function deletePassword(id) {
        const res = await fetch(`https://genman-6u7z.onrender.com/api/password/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": token
            }
        })
        const data = await res.json();
        console.log(data);

        setPasswords((prev) => prev.filter((password) => password._id !== id));

        toast.success("Password deleted successfully");

        setLoading(false);
    }

    return (
        <div className="w-full mt-5 bg-gray-100 dark:bg-zinc-900  flex-col lg:flex-row cursor-pointer hover:scale-[1.01] duration-200 hover:opacity-75 p-3 rounded-lg flex items-center justify-between">
            <div className="flex space-x-4 items-center">
                <div className="flex flex-row lg:flex-col justify-between w-full space-y-2 items-start">
                    <div className="flex space-x-5 items-center w-full"> 
                    <LockClosedIcon className="h-5 w-5 bg-blue-500 text-white p-1 rounded-full" />
                    <p className="font-bold text-lg dark:text-white">{password.title}</p>

                    </div>
                 <div>
                 <p className="text-gray-400 text-sm lg:text-lg flex flex-col">
                        <span>
                        Date created: 
                        </span>
                        <span className="font-medium text-sm lg:text-lg">
                        {
                            new Date
                                (password.createdAt).toLocaleDateString()
                        }
                        </span>
                    </p>
                 </div>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <input type={
                    showPassword ? "text" : "password"

                } readOnly className="input" value={password.password} />
                <button onClick={handleShowPassword} ><EyeIcon className="h-5 w-5 dark:text-white" /></button>

                <button className="bg-green-500 p-2 rounded-lg hover:scale-105 duration-200 ease-linear tezt-white cursor-pointer hover:bg-green-600 text-white">
                    <PencilIcon className="h-5 w-5" />
                </button>
                <button onClick={() => deletePassword(password._id)} className="bg-red-500 p-2 rounded-lg hover:scale-105 duration-200 ease-linear tezt-white cursor-pointer hover:bg-red-600 text-white">
                    <TrashIcon className="h-5 w-5" />
                </button>
            </div>
        </div>
    )
}

export default PasswordCard;