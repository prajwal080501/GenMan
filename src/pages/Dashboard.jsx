import Filter from "../components/Filter";
import Generate from "../components/Generate";

function Dashboard() {
    return (
        <div className="max-w-7xl mx-auto px-5 py-5 rounded-lg bg-gray-100 h-screen">
            <div className="w-full">
                <p className="text-4xl font-extrabold text-gray-800">Dashobard</p>

              
            </div>
            <div className=" flex flex-col items-center justify-center h-fit">
                {/* <Filter /> */}
                <Generate />
            </div>
        </div>
    )
}

export default Dashboard;