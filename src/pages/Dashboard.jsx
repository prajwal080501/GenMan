// import Filter from "../components/Filter";
import { useContext, useState } from "react";
import Generate from "../components/Generate";
import PasswordList from "../components/PasswordList";
import { UserContext } from "../context/UserContext";

function Dashboard() {
    const [passwords, setPasswords] = useState(null);

    const { user } = useContext(UserContext);
    return (
        <div className="max-w-7xl   mx-auto px-2 py-5 rounded-lg mb-5 bg-gray-100 dark:bg-zinc-900 mt-10">
            <div className="w-full ">
                <p className="text-4xl  text-gray-800 dark:text-white">
                    Welcome <span className="font-extrabold dark:text-white">{user?.name}</span>
                </p>
            </div>
            <div className=" flex w-full  flex-col items-center justify-center  mx-auto h-fit">
                {/* <Filter /> */}
                <Generate passwords={passwords} setPasswords={setPasswords} />
            </div>
            <div>
                <PasswordList passwords={passwords} setPasswords={setPasswords} />
            </div>
        </div>
    )
}

export default Dashboard;