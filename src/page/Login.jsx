import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import google from "../assets/google.png";
import LoginImage from "../assets/login.svg"
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { login, googleSignUp } = useContext(AuthContext);
  const {state} = useLocation()
  const navigate = useNavigate()
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.table(email, password);
    try {
      await login(email, password);
      navigate(state ? state:"/")
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogle = (e) => {
    e.preventDefault();
    
    try{
      googleSignUp();
      navigate(state ? state:"/")
    }catch(error){
      console.log(error)
    }
  };

  return (
    <div className="hero w-10/12 shadow-md rounded-2xl mx-auto min-h-[calc(100vh-200px)]">
  <div className="hero-content flex-col-reverse lg:flex-row-reverse">
    <div className="flex justify-center">
    <img
      src="https://i.ibb.co.com/R4t34pC0/Secure-login-amico.png"
      className="rounded-lg w-9/12" />
    </div>

    <div className="card bg-base-100 w-full max-w-md mx-auto shrink-0">
          <form onSubmit={handleLogin} className="border-red-200 border rounded-2xl card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn w-full bg-red-600 text-white font-bold py-3 rounded-lg flex justify-center items-center gap-2 hover:bg-red-700 transition">Login</button>
            </div>
            <div className="divider">Or</div>
            <button
              onClick={handleGoogle}
              className="btn bg-red-50 border-solid border-red-300 flex justify-between items-center"
            >
              <img className="w-8" src={google} alt="" />
              <p>Sign in with Google</p> <div></div>
            </button>
          </form>
        </div>
    </div>
  </div>

  );
};

export default Login;
