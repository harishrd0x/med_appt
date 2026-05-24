import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar">
            <a href="">Home</a>
            <a href="">Appointments</a>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Login</Link>
        </div>
    )
}