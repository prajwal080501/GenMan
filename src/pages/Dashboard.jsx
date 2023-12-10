import Filter from "../components/Filter";
import Generate from "../components/Generate";
import PasswordList from "../components/PasswordList";

function Dashboard() {
    return (
        <div className="max-w-7xl overflow-y-auto  mx-auto px-5 py-5 pb-10 rounded-lg bg-gray-100 h-[80%] mb-10 ">
            <div className="w-full">
                <p className="text-4xl font-extrabold text-gray-800">Dashboard</p>

              
            </div>
            <div className=" flex flex-col items-center justify-center h-fit">
                {/* <Filter /> */}
                <Generate />
            </div>
            <div>
                <PasswordList />
            </div>
        </div>
    )
}

export default Dashboard;