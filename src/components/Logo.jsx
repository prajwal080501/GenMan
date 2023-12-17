import { Link } from "react-router-dom";

function Logo() {
    return (
        <div>
            <Link to="/" className="font-extrabold text-2xl lg:text-4xl text-blue-600 tracking-wider">Gen<span className="text-black dark:text-white">Man</span></Link>
        </div>
    )
}
export default Logo;