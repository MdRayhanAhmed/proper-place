import { Link, useNavigate } from "react-router-dom";
import "./login.scss";
import { useState } from "react";
import apiRequest from "../../lib/apiRequest";
function Login() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const password = formData.get("password");
    console.log(username, password);

    try {
      const res = await apiRequest.post("/auth/login", {
        username,
        password,
      });
      console.log(res.data);
      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/");
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome Back</h1>
          <input
            type="text"
            name="username"
            required
            minLength={3}
            maxLength={20}
            placeholder="Username"
          />
          <input
            type="password"
            name="password"
            required
            min={3}
            max={20}
            placeholder="Password"
          />
          <button disabled={isLoading}>Login</button>
          {error && <span>{error}</span>}
          <Link to="/register">Don't you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;
