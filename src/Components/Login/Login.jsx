import { useState } from "react";
import "./Login.css";

export default function Login() {

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});

    function handleChange(event) {

        const { name, value } = event.target;

        setLoginData({
            ...loginData,
            [name]: value
        });
    }

    function validate() {

        let newErrors = {};

        if (!loginData.email.includes("@")) {
            newErrors.email = "Enter valid email";
        }

        if (loginData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        return newErrors;
    }

    function handleSubmit(event) {

        event.preventDefault();

        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {

            setErrors(validationErrors);

        } else {

            setErrors({});
            alert("Login Successful");

            console.log(loginData);
        }
    }

    return (
        <div className="container">

            <h1>Login</h1>

            <form onSubmit={handleSubmit}>

                <div className="form-group">

                    <label>Email</label>

                    <input
                        type="email"
                        name="email"
                        value={loginData.email}
                        onChange={handleChange}
                        className="form-control"
                    />

                    <p className="error">{errors.email}</p>

                </div>

                <div className="form-group">

                    <label>Password</label>

                    <input
                        type="password"
                        name="password"
                        value={loginData.password}
                        onChange={handleChange}
                        className="form-control"
                    />

                    <p className="error">{errors.password}</p>

                </div>

                <button type="submit" className="btn">
                    Login
                </button>

            </form>
        </div>
    );
}