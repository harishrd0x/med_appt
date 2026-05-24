import { useState } from "react";
import "./Sign_Up.css";

export default function Sign_Up() {

    const [formData, setFormData] = useState({
        role: "",
        name: "",
        phone: "",
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});

    function handleChange(event) {

        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    function validate() {

        let newErrors = {};

        if (!formData.role) {
            newErrors.role = "Role is required";
        }

        if (!formData.name) {
            newErrors.name = "Name is required";
        }

        if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = "Phone number must contain exactly 10 digits";
        }

        if (!formData.email.includes("@")) {
            newErrors.email = "Enter valid email";
        }

        if (formData.password.length < 6) {
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
            alert("Sign Up Successful");

            console.log(formData);
        }
    }

    return (
        <div className="container">

            <h1>Sign Up</h1>

            <form onSubmit={handleSubmit}>

                <div className="form-group">

                    <label>Role</label>

                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="form-control"
                    >
                        <option value="">Select Role</option>
                        <option value="Doctor">Doctor</option>
                        <option value="Patient">Patient</option>
                    </select>

                    <p className="error">{errors.role}</p>

                </div>

                <div className="form-group">

                    <label>Name</label>

                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control"
                    />

                    <p className="error">{errors.name}</p>

                </div>

                <div className="form-group">

                    <label>Phone</label>

                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-control"
                    />

                    <p className="error">{errors.phone}</p>

                </div>

                <div className="form-group">

                    <label>Email</label>

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
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
                        value={formData.password}
                        onChange={handleChange}
                        className="form-control"
                    />

                    <p className="error">{errors.password}</p>

                </div>

                <button type="submit" className="btn">
                    Submit
                </button>

            </form>
        </div>
    );
}