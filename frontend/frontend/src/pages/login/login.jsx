import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../../services/api";

function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${BASE_URL}/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(form)
        }
      );

      const data = await response.json();

      alert(data.message);

      if (response.ok) {
        navigate("/dashboard"); // Change this route if needed
      }

    } catch (error) {
      console.error(error);
      alert("Login failed!");
    }
  };

  return (
    <div className="login-container">

      <h2>Login</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Login
        </button>

        <p>
          Don't have an account?
          <a href="/register"> Register</a>
        </p>

      </form>

    </div>
  );
}

export default Login;