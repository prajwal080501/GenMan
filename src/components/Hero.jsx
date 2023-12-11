import { SunIcon, ArrowRightCircleIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import gifHome from "../assets/gifhome.gif"
import { TypeAnimation } from 'react-type-animation';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
function Hero() {
    const { user } = useContext(UserContext)
    return (
        <div className="w-full mt-5 h-fit flex flex-col lg:flex-row justify-around bg-gradient-to-br from gray-500 to-red-300 items-center py-5 px-5">
            <div className="text-left flex flex-col items-start space-y-9">
                <div className='flex flex-col space-y-4'>
                    <p className="underline decoration-rose-500  text-3xl lg:text-6xl">
                        <TypeAnimation
                            sequence={[
                                'Your Personal',
                                1000,
                                'Your Secure',
                                1000,
                                'Your Private',
                                1000,
                            ]}
                            wrapper="p"
                            repeat={Infinity}
                            className="text-black font-extrabold opacity-90"
                        />
                    </p>
                    <p className="text-black font-extrabold text-3xl lg:text-6xl opacity-90">
                        Password <span className="text-blue-500 font-extrabold">Manager</span>
                    </p>
                </div>
                <div>
                    <Link to="/dashboard" className="w-fit bg-transparent ring-2 flex justify-center space-x-3 items-center p-2 ring-blue-500 rounded-lg text-sm lg:text-lg text-black mt-18 hover:bg-blue-500 duration-200 hover:ring-0 ease-linear hover:scale-105 hover:text-white font-medium">
                        <span>{
                            !user ? "Sign in" : "Dashboard"
                        }
                        </span> <span className='animate-pulse'><ArrowRightCircleIcon className="h-5 w-5 inline-block" /></span>
                    </Link>
                </div>

            </div>
            <div>
                <img src={gifHome} className="object-contain h-96 w-96" alt="" />
            </div>
        </div>
    )
}

export default Hero;