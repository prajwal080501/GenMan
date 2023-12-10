import { Link } from "react-router-dom";
import Logo from "./Logo";

function Header() {
    return (
        <div className="flex sticky top-0 items-center justify-between px-4 py-5">
            <div>
                <Logo />
            </div>
            <div className="px-4">
                <Link to="/auth" className="btn-primary">Login</Link>
            </div>
        </div>
    )
}

export default Header;