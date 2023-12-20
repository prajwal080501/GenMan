// import Filter from "../components/Filter";
import { useCallback, useContext, useState } from "react";
import Generate from "../components/Generate";
import PasswordList from "../components/PasswordList";
import { UserContext } from "../context/UserContext";

function Dashboard() {
    const [passwords, setPasswords] = useState(null);
    const [loading, setLoading] = useState(false);
    const { user, token } = useContext(UserContext);
    const getPasswordByUserId = useCallback(async () => {
        if (!user) {
          // User object is not available yet, skip the API call
          return;
        }
        setLoading(true);
        const res = await fetch(
          `${import.meta.env.VITE_PRODUCTION_API_URL}/password/${user?._id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "auth-token": token,
            },
          }
        );
        const data = await res.json();
        setPasswords(data.passwords);
        setLoading(false);
        return data;

      }, [user, token, setPasswords]);
    return (
        <div className="max-w-7xl   mx-auto px-2 py-5 rounded-lg mb-5 bg-gray-100 dark:bg-zinc-900 mt-10">
            <div className="w-full">
                <p className="text-2xl lg:text-4xl  text-gray-800 dark:text-white">
                    Welcome <span className="font-extrabold dark:text-white">{user?.name}</span>
                </p>
            </div>
            <div className=" flex  flex-col items-center justify-center  mx-auto h-fit">
                {/* <Filter /> */}
                <Generate getPasswordByUserId={getPasswordByUserId} passwords={passwords} setPasswords={setPasswords} />
            </div>
            <div className="w-full">
                <PasswordList getPasswordByUserId={getPasswordByUserId} passwords={passwords} setPasswords={setPasswords} />
            </div>
        </div>
    )
}

export default Dashboard;