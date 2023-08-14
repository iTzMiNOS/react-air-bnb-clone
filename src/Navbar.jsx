import logo from "../public/images/logo.png"

export default function Navbar() {
    return (
        <nav className="nav-bar">
            <img src={logo} className="nav-image" />
        </nav>
    )
}