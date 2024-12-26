import { Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";

const Car = ({car, formatData}) => {
    const {_id, car_model, date, rental_price, registration_number, features, description, bookingCount, image_url} = car || {}
    return (
        <div>
            <Card
      className="max-w-sm mx-auto" 
      renderImage={() => <img className="h-52" src={image_url} alt="image 1" />}
    >
      <div className="h-[220px] flex flex-col justify-between">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {car_model}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description.substring(0,100)}...
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
      <div className="flex justify-between items-center">
        <p>Total Booking: {bookingCount}</p>
        <Link to={`/cars/${_id}`}><Button outline gradientDuoTone="purpleToPink">
        Book Now
      </Button></Link>
      </div>
      </div>
    </Card>
        </div>
    );
};

export default Car;