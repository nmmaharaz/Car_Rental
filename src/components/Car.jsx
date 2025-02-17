import { Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";
import { MdModelTraining } from "react-icons/md";
import { motion } from "framer-motion";
import { FaCar } from "react-icons/fa";
import { FaPersonDress } from "react-icons/fa6";
import { LuArrowRightLeft } from "react-icons/lu";
import { BsBookmarkCheck } from "react-icons/bs";
const Car = ({ car, formatData }) => {
  const {
    _id,
    image_url,
    car_model,
    manufecture,
    seat,
    engine,
    mileage,
    brand,
    shift,
    power,
    fual,
    rental_price,
    availability,
    registration_number,
    description,
    bookingCount,
    date,
    location
  } = car || {};



  return (
    <motion.div whileHover={{ scale: 1.03 }}
        transition={{ stiffness: 300 }}>
      <div className=" rounded-xl h-[440px] shadow-xl overflow-hidden ">
        <div className=" overflow-hidden">
          <img className="h-48 object-fill w-full" src={car?.image_url} alt="" />
        </div>
        <div className="">
          <div className="flex border justify-between border-y-1 border-gray-300">
            <div className="flex w-1/2 items-center justify-center bg-white px-4 py-2 text-black font-bold text-lg">${car?.rental_price}
              <span className="text-sm font-normal">/day</span>
            </div>
            <button className="bg-red-600 w-1/2 text-white font-medium px-6 py-2 text-lg hover:bg-red-700">
              <Link to={`/cars/${_id}`}>
                See More
              </Link>
            </button>
          </div>
        </div>
        <div className="flex flex-col p-4 justify-between">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {car_model}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {car?.description.substring(0, 60)}...
          </p>
          
          <div className="flex border px-2 my-2 justify-between items-center">
            <div className="">
                <div className="flex items-center"><FaCar className="text-red-600 mr-2"/><span>{car?.manufecture}</span></div>
                <div className="flex items-center"><FaPersonDress className="text-red-600 mr-2"/><span>{car?.seat} person</span></div>
            </div>
            <div>
            <div className="flex items-center"><MdModelTraining className="text-red-600 mr-2"/><span>{car?.brand}</span></div>
            <div className="flex items-center"><LuArrowRightLeft className="text-red-600 mr-2"/><span>{car?.shift}</span></div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center"><BsBookmarkCheck
            className="text-red-600 mr-2"/><span>{car?.bookingCount}</span></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Car;
