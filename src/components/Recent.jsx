import { Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const Recent = ({car}) => {
    const {_id, car_model, date, rental_price, availability, registration_number, features, description, bookingCount, image_url} = car
    return (
        <motion.div  whileHover={{ scale: 1.03 }}
        transition={{ stiffness: 300 }}>
             <Card
      className="max-w-sm mx-auto" 
      renderImage={() => <img className="h-64" src={image_url} alt="image 1" />}
    >
      <div className="h-[140px] flex flex-col justify-between">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {car_model}
      </h5>
     <div className="flex justify-between items-center">
     <p><span className="text-xl font-bold">${rental_price}</span><sub>/day</sub></p>
     <p className={`inline-block rounded-3xl text-sm ${availability === 'available' ? "bg-green-400 text-white font-bold px-4 py-2":"bg-red-400 text-white font-bold px-4 py-2"}`}>
        {availability}
      </p>
     </div>
      <div className="flex justify-between items-center">
      <p>{date}</p>
        <Link to={`/cars/${_id}`}><Button outline gradientDuoTone="purpleToPink">
        Book Now
      </Button></Link>
      </div>
      </div>
    </Card>
        </motion.div>
    );
};

export default Recent;