import { Link } from "react-router-dom";
import "./login.scss";

function Login() {
  return (
    <div className="login">
      <div className="formContainer">
        <form action="">
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
            placeholder="Password"
          />
          <button>Login</button>
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
