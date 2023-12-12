import { useContext, useState } from "react";
import Modal from "./Modal";
import ClipLoader from "react-spinners/ClipLoader";
import toast from "react-hot-toast";
import { UserContext, UserProvider } from "../context/UserContext";
function SavePassword({ isOpen, setIsOpen, password , passwords, setPasswords}) {
    const { user, token } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    console.log(token);
    async function savePassword(e) {
        // save password to databasee.
        e.preventDefault();
        setLoading(true);
        const res = await fetch("http://localhost:8000/api/password", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": token
            },
            body: JSON.stringify({
                user_id: user._id,
                title: title,
                password: password
            })
        })
        const data = await res.json();

        toast.success(data.message);

       const newPassword = {
            user_id: user._id,
            title: title,
            password: password
        }
        setPasswords((prev) => [...prev, newPassword]);


        setLoading(false);
        setIsOpen((prev) => !prev);
    }
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <form onSubmit={savePassword} className="flex flex-col space-y-5">
                <div className="flex flex-col space-y-3">
                    <label className="label" htmlFor="title">Title</label>
                    <input value={title} onChange={
                        (e) => {
                            e.preventDefault();
                            setTitle(e.target.value);
                        }

                    } name="title" type="text" placeholder="Title" className="input" />
                </div>
                <div className="flex flex-col space-y-3">
                    <label className="label" htmlFor="password">Password</label>
                    <input name="password" type="text" value={password} className="input" />
                </div>
                <div>
                    <p className="w-1/2 bg-gray-200 dark:bg-zinc-950  dark:text-white p-2 rounded-lg font-medium">
                        By saving this password, you agree to our <a className="text-blue-500" href="https://google.com">Terms and Conditions</a>
                    </p>
                </div>
                <div>
                    <button type="submit" className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded-lg text-white font-medium text-lg hover:scale-105 active:scale-95 duration-200 ease-linear">
                        {
                            loading ? <span className="">
                                <ClipLoader color="white" size={20} />
                            </span> : "Save"
                        }
                    </button>
                </div>
               
            </form>
        </Modal>
    )
}

export default SavePassword;