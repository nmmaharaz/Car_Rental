import { Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { format } from "timeago.js";
import { LuArrowRightLeft } from "react-icons/lu";
import { MdModelTraining } from "react-icons/md";
import { FaPersonDress } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { BsBookmarkCheck } from "react-icons/bs";

const Recent = ({ car }) => {
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
  } = car;

  const result = format(date);

  return (
    <motion.div whileHover={{ scale: 1.03 }} transition={{ stiffness: 300 }}>
      <div className=" rounded-xl h-[440px] shadow-xl overflow-hidden ">
        <div className="relative overflow-hidden">
          <img className="h-48 object-fill w-full" src={car?.image_url} alt="" />
          <div className="absolute right-1 top-1">
            <p
              className={`inline-block rounded-3xl text-sm ${
                availability === "available"
                  ? "bg-green-400 text-sm text-white px-3 py-1"
                  : "bg-red-400 text-sm text-white px-3 py-1"
              }`}
            >
              {availability}
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex border justify-between border-y-1 border-gray-300">
            <div className="flex w-1/2 items-center justify-center bg-white px-4 py-2 text-black font-bold text-lg">
              ${rental_price}
              <span className="text-sm font-normal">/day</span>
            </div>
            <button className="bg-red-600 w-1/2 text-white font-medium px-6 py-2 text-lg hover:bg-red-700">
              <Link to={`/cars/${_id}`}>See More</Link>
            </button>
          </div>
        </div>
        <div className="flex flex-col p-4 justify-between">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {car?.car_model}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {car?.description.substring(0, 60)}...
          </p>
          <div className="flex border px-2 my-2 justify-between items-center">
            <div className="">
              <div className="flex items-center">
                <FaCar className="text-red-600 mr-2" />
                <span>{car?.manufecture}</span>
              </div>
              <div className="flex items-center">
                <FaPersonDress className="text-red-600 mr-2" />
                <span>{car?.seat} person</span>
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <MdModelTraining className="text-red-600 mr-2" />
                <span>{brand}</span>
              </div>
              <div className="flex items-center">
                <LuArrowRightLeft className="text-red-600 mr-2" />
                <span>{car?.shift}</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <BsBookmarkCheck className="text-red-600 mr-2" />
              <span>{car?.bookingCount}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>

    //     <motion.div  whileHover={{ scale: 1.03 }}
    //     transition={{ stiffness: 300 }}>
    //          <Card
    //   className="max-w-sm mx-auto"
    //   renderImage={() => <img className="h-64" src={image_url} alt="image 1" />}
    // >
    //   <div className="h-[140px] flex flex-col justify-between">
    //   <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    //     {car_model}
    //   </h5>
    //  <div className="flex justify-between items-center">
    //  <p><span className="text-xl font-bold">${rental_price}</span><sub>/day</sub></p>
    //  <p className={`inline-block rounded-3xl text-sm ${availability === 'available' ? "bg-green-400 text-white font-bold px-4 py-2":"bg-red-400 text-white font-bold px-4 py-2"}`}>
    //     {availability}
    //   </p>
    //  </div>
    //   <div className="flex justify-between items-center">
    //   <p>{result}</p>
    //     <Link to={`/cars/${_id}`}><Button outline gradientDuoTone="purpleToPink">
    //     Book Now
    //   </Button></Link>
    //   </div>
    //   </div>
    // </Card>
    //     </motion.div>
  );
};

export default Recent;
