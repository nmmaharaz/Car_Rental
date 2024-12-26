import { useContext } from "react";
import google from "../assets/google.png";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
const Registration = () => {
  const navigate = useNavigate()
  const { createUser, logout, userUpdateProfile, googleSignUp, setUser } =
    useContext(AuthContext);
  const handleRegistration = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo_url = form.photo_url.value;
    console.table(name, email, password, photo_url);
    try {
      const result =await createUser(email, password);
      await userUpdateProfile(name, photo_url)
      setUser({ ...result.user, displayName: name, photoURL: photo_url  })
      userUpdateProfile({displayName:name, photoURL: photo_url})
      logout()
      navigate("/login")
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogle = (e) => {
    e.preventDefault();
    googleSignUp();
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegistration} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="url"
                name="photo_url"
                placeholder="photo url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Registration</button>
            </div>
            <div className="divider">Or</div>
            <button
              onClick={handleGoogle}
              className="btn bg-blue-50 border-solid border-[#435693] flex justify-between items-center"
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

export default Registration;
