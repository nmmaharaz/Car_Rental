import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="">
                  <div className="h-[40vh] overflow-hidden sm:h-[90vh] ">
            <img
              className="object-center"
              src="https://i.ibb.co.com/d014RJbG/popescu-andrei-alexandru-KQj-BXXPRs-YM-unsplash-1.jpg"
              alt=""
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2 bg-slate-700 w-full h-full bg-opacity-50 font-extrabold">
              <div className="flex flex-col items-center justify-center h-full">
                <p className="text-white text-base text-center sm:text-3xl lg:text-5xl mb-2 px-7">
                Elevate Your Journey with Roxride
                </p>
                <p className="text-gray-300 text-xs sm:text-base px-6 text-center mb-3 sm:mb-6">
                Our main principle is to support you before, during and after the rental..
                </p>
                <div>
                  <Link
                    to="/availablecars"
                    className="hover:bg-purple-700 border border-solid border-white text-[10px] sm:text-xl px-6 py-2 rounded-3xl shadow-lg text-white font-semibold "
                  >
                    View Available
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Banner;