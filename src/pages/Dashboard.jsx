// import Filter from "../components/Filter";
import { useContext, useState } from "react";
import Generate from "../components/Generate";
import PasswordList from "../components/PasswordList";
import { UserContext } from "../context/UserContext";

function Dashboard() {
    const [passwords, setPasswords] = useState(null);
    const {user} = useContext(UserContext);
    return (
        <div className="max-w-7xl overflow-y-auto  mx-auto px-5 py-5 pb-10 rounded-lg bg-gray-100 h-[80%] mb-10 ">
            <div className="w-full">
                <p className="text-4xl  text-gray-800">
                    Welcome <span className="font-extrabold">{user?.name}</span>
                </p>
            </div>
            <div className=" flex flex-col items-center justify-center h-fit">
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