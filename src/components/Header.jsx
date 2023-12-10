import { Link } from "react-router-dom";
import Logo from "./Logo";
import {SunIcon} from '@heroicons/react/24/solid'
function Header() {
    return (
        <div className="flex sticky top-0 items-center justify-between px-4 py-5">
            <div>
                <Logo />
            </div>
            <div className="flex items-center space-x-6 px-4">
                <div>
                    <SunIcon className="w-8 h-8 hover:animate-spin cursor-pointer duration-200" />
                </div>
                <Link to="/auth" className="btn-primary">Login</Link>
            </div>
        </div>
    )
}

export default Header;