import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="relative">
            <div className="opacity-80 bg-center bg-repeat bg-cover h-[550px] bg-banner backdrop-blur-lg h-screen">
            
        </div>
            <div className="drop-shadow-2xl  font-bold absolute inset-0 flex justify-center items-center z-10">
            <div className="flex flex-col items-center">
            <p className=" text-7xl text-[#cc34e0]">Drive Your Dreams Today!</p>
            <Link to="/availablecars" className="mt-4">
            <Button size="lg" gradientDuoTone="purpleToPink">
             View Available
            </Button>
          </Link>
            </div>
            </div>
        
        </div>
    );
};

export default Banner;