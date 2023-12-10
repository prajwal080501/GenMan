import { Link } from "react-router-dom";

function Logo() {
    return (
        <div>
            <Link to="/" className="font-extrabold text-4xl text-blue-600 tracking-wider">Gen<span className="text-black">Man</span></Link>
        </div>
    )
}
export default Logo;