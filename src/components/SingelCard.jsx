import { Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SingelCard = ({car}) => {
    const {_id, car_model, date, rental_price, registration_number, features, description, bookingCount, image_url} = car
    return (
        <motion.div  whileHover={{ scale: 1.03 }}
        transition={{ stiffness: 300 }} >
             <Card
      className="mx-auto"
      renderImage={() => <img className="sm:w-64 w-full" src={image_url} alt="image 1" />} horizontal >
      <div className="h-[230px] flex flex-col justify-between">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {car_model}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description.substring(0,80)}...
      </p>
      <div className="flex gap-2 flex-wrap">
        {
            features?.map((feature,index)=><Button color="gray" pill size="xs" key={index}>{feature.value}</Button>)
        }
      </div>
      <div className="flex justify-between">
        <p><span className="text-xl font-bold">${rental_price}</span><sub>per day</sub></p>
      <p>{date}</p>
      </div>
      <div className="flex flex-row justify-between items-center">
        <p className="mr-8">Total Booking: {bookingCount}</p>
        <Link to={`/cars/${_id}`}><Button outline gradientDuoTone="purpleToPink">
        Book Now
      </Button></Link>
      </div>
      </div>
    </Card>
        </motion.div>
    );
};

export default SingelCard;