import axios from "axios";
import { Button, Card, Modal } from "flowbite-react";
import { useContext, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import dateFormat from "dateformat";
import useAxiosSecure from "../hook/UseAxios";
import DatePicker from "react-datepicker";
import { format } from 'date-fns';
import logo from '../assets/cars.png'
import { toast } from "react-toastify";

const CarDetails = () => {
  const [value, setValue] = useState();
  const [endDate, setEndDate] = useState();
  const [cars, setCars] = useState({});
  const axiosSecure = useAxiosSecure()
  console.log("this is car data", cars);
  const [openModal, setOpenModal] = useState(false);
  const { user } = useContext(AuthContext);
  const reviewRef = useRef();
  
 
  
  const { id } = useParams();
  const {
    _id,
    car_model,
    rental_price,
    availability,
    registration_number,
    features,
    description,
    image_url,
    location,
  } = cars || {};
  console.log("DataPaichi", cars);
  useEffect(() => {
    carData();
  }, [id]);

  const carData = async () => {
    const { data } = await axiosSecure.get(
      `/cardeatails/${id}`
    );
    setCars(data);
  };

  const handleBookMark = async () => {
    if(!value)return toast.error("Select Booking Date",{
      position: "top-center",
   })
    if(!endDate)return toast.error("Select End Date",{
      position: "top-center",
   })
    const review = reviewRef.current.value;
    const book_mark_id = _id;
    const email = user?.email;
    const user_photo = user?.photoURL;
    const name = user?.displayName;
    const start_date =format(value, 'dd/MM/yyyy HH:mm')
    const end_date = format(endDate, 'dd/MM/yyyy HH:mm')
    const booking_status = 'Confirmed'
    const bookMarkData = {
      book_mark_id,
      car_model,
      rental_price,
      availability,
      registration_number,
      features,
      description,
      image_url,
      review,
      booking_status,
      location,
      email,
      user_photo,
      name,
      start_date,
      end_date,
    };
    console.log(bookMarkData);
    if(!start_date)return toast.error("Already booking this car",{
      position: "top-center",
   })
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/bookmark`,
        bookMarkData
      );
      toast.success("Booking successfuly",{
        position: "top-center",
     })
    } catch (error) {
      toast.error("Already booking this car",{
        position: "top-center",
     })
    }
  };

  return (
    <Card className="mx-auto w-8/12">
      <div>
        <img className="w-full" src={image_url} alt="" />
      </div>

      <div>
        <p className="text-2xl sm:mt-1 lg:mt-4 text-blue-700 sm:text-4xl text-center font-bold">
          {car_model}
        </p>
        <p>
          <span className="text-3xl font-extrabold">${rental_price}</span>
          <sub className="font-semibold">Price Per Day</sub>
        </p>
        <p className="mt-4 text-justify text-gray-500">{description}</p>
        <div className="divider"></div>
        <p className="text-2xl text-red-500 font-bold ">Availability</p>

        <p className={`inline-block rounded-3xl text-sm ${availability === 'available' ? "bg-green-400 text-white font-bold px-4 py-2":"bg-red-400 text-white font-bold px-4 py-2"}`}>
        {availability}
      </p>
        <div className="divider"></div>

        <div>
          <div>
            <p className="text-2xl text-red-500 font-bold mb-3">Features</p>
            <div className="flex flex-wrap gap-4">
              {features?.map((feature, index) => (
                <Button color="gray" pill size="xs" key={index}>
                  {feature.value}
                </Button>
              ))}
            </div>
          </div>
        </div>
        <Card className="mt-6">
          <label className="label">
            <p className="text-2xl text-red-500 font-bold">Add a Review</p>
          </label>
          <textarea
            ref={reviewRef}
            type="text"
            placeholder="your_review"
            className="input input-bordered"
            name="reviews"
            required
          />
        </Card>
        <div className="flex float-end">
          <Link className="mt-4" onClick={() => setOpenModal(true)}>
            <Button size="lg" gradientDuoTone="purpleToPink">
              Book Mark
            </Button>
          </Link>
        </div>
      </div>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center ">
            <img src={logo} alt="" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure?
            </h3>
            <p className="text-xl font-bold mb-6">Car Model: {car_model}</p>
            <p className="font-semibold">Reg. No: {registration_number}</p>
            <p>
              <span className="font-semibold">Rental Price:</span>{" "}
              <span className="text-xl font-extrabold">
                ${rental_price}
                <sub className="font-semibold">Day</sub>
              </span>
            </p>
            <p className="font-bold mt-4 mb-2">Select Booking Date</p>
                <div className="flex flex-col mb-4 items-center">
                <DatePicker
                className="rounded-2xl"
                    selected={value}
                    onChange={(date) => setValue(date)}
                    placeholderText="Select booking date"
                    dateFormat="dd/MM/yyyy HH:MM"
                  />
                <DatePicker
                className="rounded-2xl mt-2"
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    placeholderText="Select booking date"
                    dateFormat="dd/MM/yyyy HH:MM"
                  />
                </div>
            <div className="flex justify-center gap-4">
              <Button
                color="failure"
                onClick={() => {
                  setOpenModal(false), handleBookMark();
                }}
              >
                Confirm
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </Card>
  );
};

export default CarDetails;
