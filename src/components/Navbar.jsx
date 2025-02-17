import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/car-logo.png";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Button } from "flowbite-react";
const Navbar = () => {
  const navigate = useNavigate();
  const { logout, user } = useContext(AuthContext);
  const handleSignOut = () => {
    logout();
    navigate("/login");
  };

  console.log(user)


  return (
    <div className="sticky top-0 z-50">
      <div className="bg-base-100">
      <div className="navbar w-10/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn text-red-600 btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/availablecars">Available Cars</Link>
            </li>
            {
            user?.email && <li>
            <Link to="/addcar">Add Car</Link>
          </li>
          }
          {
            user?.email &&
             <li>
            <Link to="/mycars">My Cars</Link>
          </li>

          }
          {
            user?.email && <li>
            <Link to="/mybookings">My Bookings</Link>
          </li>
          }
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
         
            <li>
              <Link to="/login">Log-in</Link>
            </li>
            <li>
              <Link to="/registration">Registration</Link>
            </li>
            {
            user?.email && <li>
            <button onClick={handleSignOut}>Logout</button>
          </li>
          }
            
          </ul>
        </div>
        <div className="flex items-center">
          <Link className="cursor-pointer" to="/"><img className="w-36" src={logo} alt="" /></Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink className="font-medium text-gray-700" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className="font-medium text-gray-700" to="/availablecars">Available Cars</NavLink>
          </li>
          {
            user?.email && <li>
            <NavLink className="font-medium text-gray-700" to="/addcar">Add Car</NavLink>
          </li>
          }
          {
            user?.email &&
             <li>
            <NavLink className="font-medium text-gray-700" to="/mycars">My Cars</NavLink>
          </li>

          }
          {
            user?.email && <li>
            <NavLink className="font-medium text-gray-700" to="/mybookings">My Bookings</NavLink>
          </li>
          }
          <li>
            <Link className="font-medium text-gray-700" to="/services">Services</Link>
          </li>   
          <li>
            <Link className="font-medium text-gray-700" to="/contact">Contact Us</Link>
          </li>   

        </ul>
      </div>
      <div className="navbar-end hidden lg:flex *:ml-3">
        {
          user?.email ? "":<button className="border-none text-white font-semibold bg-red-700 py-2 px-6 hover:shadow-md hover:shadow-red-300 rounded-3xl">
          <Link to="/login">Log-in</Link>
        </button>
        }
        {
          user?.email ? "":<button className="font-semibold">
          <Link to="/registration">Registration</Link>
        </button>
        }
        
        {
          user?.email && <button className="border-none text-white font-semibold bg-red-700 py-2 px-6 hover:shadow-md hover:shadow-red-300 rounded-3xl">
          <button onClick={handleSignOut}>Logout</button>
        </button>
        }
        
           {
            user && user?.photoURL && (<div className="tooltip tooltip-bottom"><img className="w-[45px] h-[45px] rounded-full" src={user.photoURL} alt="" /></div>)
           }
            
      </div>
    </div>
    </div>
    </div>
  );
};

export default Navbar;
