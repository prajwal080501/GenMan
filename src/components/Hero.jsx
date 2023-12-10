import { SunIcon, ArrowRightCircleIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className="w-full mt-5 h-1/2 flex justify-around bg-gradient-to-br from gray-500 to-red-300 items-center py-5 px-5">
            <div className="text-left">
                <p className=" text-6xl">
                    Your Personal
                </p>
                <p className="text-black font-extrabold text-6xl opacity-90">
                    Password <span className="text-rose-500 font-extrabold">Manager</span>
                </p>
                <Link to="/dashboard" className="w-fit bg-transparent ring-2 flex justify-center space-x-3 items-center p-2 ring-blue-500 rounded-lg text-lg text-black mt-8 hover:bg-blue-500 duration-200 hover:ring-0 ease-linear hover:scale-105 hover:text-white font-medium">
                    <span>Get Started</span> <span><ArrowRightCircleIcon className="h-5 w-5 inline-block" /></span>
                </Link>
            </div>
            <div>
                <img src="https://media.istockphoto.com/id/1342248182/vector/forgot-password.jpg?s=612x612&w=0&k=20&c=QcgRWfrNWRtC3N2qISWbU-EsdOTI_h442TJEHgGERJw=" className="object-contain" alt="" />
            </div>
        </div>
    )
}

export default Hero;