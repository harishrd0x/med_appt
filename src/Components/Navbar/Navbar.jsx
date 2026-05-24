import "./Navbar.css";

import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {

    const navigate = useNavigate();

    const token = sessionStorage.getItem("auth-token");

    const email = sessionStorage.getItem("email");

    const username = email ? email.split("@")[0] : "";

    function handleLogout() {

        sessionStorage.clear();

        navigate("/login");

        window.location.reload();
    }

    return (

        <div className="navbar">

            <Link to="/">Home</Link>

            <Link to="/appointments">Appointments</Link>

            {
                token ? (

                    <>

                        <span className="username">
                            {username}
                        </span>

                        <button
                            onClick={handleLogout}
                            className="logout-btn"
                        >

                            Logout

                        </button>

                    </>

                ) : (

                    <>

                        <Link to="/signup">Sign Up</Link>

                        <Link to="/login">Login</Link>

                    </>

                )
            }

        </div>
    );
}