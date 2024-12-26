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



  return (
    <div className="bg-base-100 border-blue-600 border-b-4">
      <div className="navbar w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            <li>
              <Link to="/addcar">Add Car </Link>
            </li>
            <li>
              <Link to="/mycars">My Cars</Link>
            </li>
            <li>
              <Link to="/mybookings">My Bookings</Link>
            </li>
            <li>
              <Link to="/login">Log-in</Link>
            </li>
            <li>
              <Link to="/registration">Registration</Link>
            </li>
            <li>
              <button onClick={handleSignOut}>Logout</button>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <img className="w-36" src={logo} alt="" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/availablecars">Available Cars</NavLink>
          </li>
          {
            user?.email && <li>
            <NavLink to="/addcar">Add Car</NavLink>
          </li>
          }
          {
            user?.email &&
             <li>
            <NavLink to="/mycars">My Cars</NavLink>
          </li>

          }
          {
            user?.email && <li>
            <NavLink to="/mybookings">My Bookings</NavLink>
          </li>
          }
         
          
        </ul>
      </div>
      <div className="navbar-end hidden lg:flex *:ml-3">
        {
          user?.email ? "":<Button gradientDuoTone="purpleToBlue">
          <Link to="/login">Log-in</Link>
        </Button>
        }
        {
          user?.email ? "":<Button gradientDuoTone="purpleToBlue">
          <Link to="/registration">Registration</Link>
        </Button>
        }
        
        {
          user?.email && <Button gradientDuoTone="purpleToBlue">
          <button onClick={handleSignOut}>Logout</button>
        </Button>
        }
      </div>
    </div>
    </div>
  );
};

export default Navbar;
