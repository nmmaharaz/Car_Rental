import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import { Button, Card, Modal } from "flowbite-react";
import Select from "react-select";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import useAxiosSecure from "../hook/UseAxios";
import logo from "../assets/car-logo.png";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import Loader from "../components/Loader";

const MyCars = () => {
  const { user} = useContext(AuthContext);
  const [loading, setLoading]= useState(true)
  const [data, setData] = useState(null);
  const axiosSecure = useAxiosSecure();
  // const [cars, setCars] = useState({});

  

  const [bookMark, setBookMark] = useState([]);
  const [updateInfo, setUpdateInfo] = useState(null);

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
    date,
    location,
  } = updateInfo || {};


  useEffect(() => {
    bookMarkData();
  }, [user, _id]);

  const bookMarkData = async () => {
    const { data } = await axiosSecure.get(`/mycar/${user?.email}`);
    setLoading(false)
    setBookMark(data);
  };
  const handleDelete = async (id) => {
    try {
      await axiosSecure.delete(`/addcar/${id}`);
      bookMarkData();
    } catch (error) {
      console.log(error);
    }
  };
  const [value, setValue] = useState(updateInfo?.date);

  const [openModal, setOpenModal] = useState(false);
  const [openUModal, setOpenUModal] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = e.target;
    const _id = updateInfo._id;
    const car_model = formData.car_model.value;
    const manufecture = formData.manufecture.value;
    const seat = formData.seat.value;
    const engine = formData.engine.value;
    const mileage = formData.mileage.value;
    const brand = formData.brand.value;
    const shift = formData.shift.value;
    const power = formData.power.value;
    const fual = formData.fual.value;
    const price = formData.rental_price.value;
    const rental_price = parseFloat(price);
    const date = value;
    const availability = formData.availability.value;
    const registration_number = formData.registration_number.value;
    const description = formData.description.value;
    const location = formData.location.value;
    const image_url = formData.photo_url.value;
    const updateCarData = {
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
      date,
      location,
    };
    console.table("this is data", updateCarData);
    try {
      const { data } = await axiosSecure.put(`/mycar/${_id}`, updateCarData);
      bookMarkData();
      toast.success("Update Successfully", {
        position: "top-center",
      });
      setOpenModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  if(loading)return<Loader></Loader>
  return (
    <div className="my-12">
      <Card className="overflow-x-auto w-10/12 mx-auto border border-solid border-blue-300">
        <table className="table">
          <Modal
            show={openModal}
            size="7xl"
            onClose={() => setOpenModal(false)}
            popup
          >
            <Modal.Header />
            <Modal.Body>
              <div className="text-center">
                <div className="flex justify-center items-center ">
                  <img className="w-64" src={logo} alt="" />
                </div>
                <form onSubmit={handleUpdate} className="card-body">
                  <div className="flex items-center">
                    <div className="form-control w-1/2 mr-4">
                      <label className="label">
                        <span className="label-text">Car Image</span>
                      </label>
                      <input
                        type="url"
                        placeholder="image_url"
                        name="photo_url"
                        defaultValue={image_url}
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control w-1/2">
                      <label className="label">
                        <span className="label-text">Car Model</span>
                      </label>
                      <input
                        type="text"
                        placeholder="car model"
                        name="car_model"
                        defaultValue={car_model}
                        className="input input-bordered"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-1/3 form-control mr-4">
                      <label className="label">
                        <span className="label-text">Registration Number</span>
                      </label>
                      <input
                        type="text"
                        placeholder="registration number"
                        name="registration_number"
                        defaultValue={registration_number}
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="w-1/3 form-control mr-4">
                      <label className="label">
                        <span className="label-text">Manufecture</span>
                      </label>
                      <input
                        type="number"
                        placeholder="manufecture year"
                        name="manufecture"
                        defaultValue={manufecture}
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="w-1/3 form-control">
                      <label className="label">
                        <span className="label-text">Seat</span>
                      </label>
                      <input
                        type="number"
                        placeholder="total seat"
                        name="seat"
                        defaultValue={seat}
                        className="border border-solid border-gray-300 px-2 py-3 rounded-lg"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="form-control w-1/3 mr-4">
                      <label className="label">
                        <span className="label-text">Engine</span>
                      </label>
                      <input
                        type="text"
                        placeholder="engine"
                        name="engine"
                        defaultValue={engine}
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control mr-4 w-1/3">
                      <label className="label">
                        <span className="label-text">Mileage</span>
                      </label>
                      <input
                        type="text"
                        placeholder="mileage (kmpl)"
                        name="mileage"
                        defaultValue={mileage}
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control w-1/3">
                      <label className="label">
                        <span className="label-text">Brand</span>
                      </label>
                      <input
                        type="text"
                        placeholder="brand"
                        name="brand"
                        defaultValue={brand}
                        className="input input-bordered"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="form-control mr-4 w-1/3">
                      <label className="label">
                        <span className="label-text">Shift</span>
                      </label>
                      <input
                        type="text"
                        placeholder="manual/automatic"
                        name="shift"
                        defaultValue={shift}
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control mr-4 w-1/3">
                      <label className="label">
                        <span className="label-text">Power</span>
                      </label>
                      <input
                        type="text"
                        placeholder="power"
                        name="power"
                        defaultValue={power}
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control w-1/3">
                      <label className="label">
                        <span className="label-text">Fuel</span>
                      </label>
                      <input
                        type="text"
                        placeholder="fual"
                        name="fual"
                        defaultValue={fual}
                        className="input input-bordered"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className=" flex flex-col w-1/3 mr-4 gap-2">
                      <label className="text-gray-700 " htmlFor="category">
                        Category
                      </label>
                      <select
                      defaultValue={availability}
                        className="border border-solid border-gray-300 px-2 py-3 rounded-lg"
                        name="availability"
                        id="availability"
                      >
                        <option value="available">Available</option>
                        <option value="unavailable">Unavailable</option>
                      </select>
                    </div>
                    <div className="form-control mr-4 w-1/3">
                      <label className="label">
                        <span className="label-text">Daily Rental Price</span>
                      </label>
                      <input
                        type="text"
                        defaultValue={rental_price}
                        placeholder="daily rental price"
                        className="input input-bordered"
                        name="rental_price"
                        required
                      />
                    </div>
                    <div className="flex flex-col w-1/3 justify-start">
                      <label className="text-gray-700 " htmlFor="category">
                        Category
                      </label>
                      <DatePicker
                        className="border border-solid border-gray-300 mt-2 px-2 py-3 rounded-lg"
                        selected={value}
                        onChange={(date) => setValue(date)}
                        placeholderText="select start date"
                        dateFormat="dd/MM/yyyy HH:MM"
                      />
                    </div>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Location</span>
                    </label>
                    <textarea
                      type="text"
                      placeholder="location"
                      defaultValue={location}
                      name="location"
                      className="input h-20 input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Description</span>
                    </label>
                    <textarea
                      type="text"
                      defaultValue={description}
                      placeholder="description"
                      name="description"
                      className="input h-28 input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Update</button>
                  </div>
                </form>
                .
              </div>
            </Modal.Body>
          </Modal>

          <Modal
            show={openUModal}
            size="md"
            onClose={() => setOpenUModal(false)}
            popup
          >
            <Modal.Header />
            <Modal.Body>
              <div className="text-center ">
                <img src={logo} alt="" />
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Are you sure date this car?
                </h3>
                <div className="flex justify-center gap-4">
                  <Button
                    color="failure"
                    onClick={() => {
                      setOpenUModal(false), handleDelete(data._id);
                    }}
                  >
                    Yes
                  </Button>
                  <Button color="gray" onClick={() => setOpenUModal(false)}>
                    No
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
          <thead>
            <tr className="text-white font-bold text-[16px] bg-[#4472c4]">
              <th>Car Image</th>
              <th>Car Model</th>
              <th className="text-center">Daily Rental Price</th>
              <th className="text-center">Availability</th>
              <th className="text-center">Date Added</th>
              <th className="text-center"></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {bookMark?.map((bookMark, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0
                    ? "bg-[#ffffff] hover:bg-pink-50"
                    : "bg-[#ddebf7] hover:bg-purple-100"
                }`}
              >
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-14 w-14">
                        <img
                          src={bookMark.image_url}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="font-bold text-[16px]">{bookMark.car_model}</p>
                </td>
                <td className="text-center">${bookMark.rental_price}</td>
                <td className="text-center">{bookMark.availability}</td>
                <td className="text-center">{bookMark.date}</td>
                <td className="">
                  <div className="flex justify-center gap-5">
                    <BiEdit
                      onClick={() => {
                        setOpenModal(true), setUpdateInfo(bookMark);
                      }}
                      className="text-2xl cursor-pointer text-[#4981f8]"
                    />
                    <RiDeleteBin6Line
                      onClick={() => {
                        setOpenUModal(true), setData(bookMark);
                      }}
                      className="text-2xl cursor-pointer text-red-500"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default MyCars;
