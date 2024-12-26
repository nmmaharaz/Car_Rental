import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import { Card, Modal } from "flowbite-react";
import Select from "react-select";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import useAxiosSecure from "../hook/UseAxios";


const MyCars = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure()
  const [cars, setCars] = useState({});
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
  const [bookMark, setBookMark] = useState([]);
  const [updateInfo, setUpdateInfo] = useState(null);
  useEffect(() => {
    bookMarkData();
  }, [user, _id]);

  const bookMarkData = async () => {
    const { data } = await axiosSecure.get(
      `/mycar/${user?.email}`
    );
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
  const [openModal, setOpenModal] = useState(false);
 

  const [featuresData, setFeaturesData] = useState();

  const option = [
    { value: "GPS", label: "GPS" },
    { value: "AC", label: "AC" },
    { value: "Backup Camera", label: "Backup Camera" },
    { value: "Heated Seat", label: "Heated Seat" },
    { value: "Sound System", label: "Sound System" },
  ];
  const handleFeatures = (event) => {
    const { value } = event;
    console.log(value);
    setFeaturesData(event);
  };

  // const updateData = async (id) => {
  //   const { data } = await axiosSecure.get(
  //     `/cardeatails/${id}`
  //   );
  //   setCars(data);
  // };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = e.target;
    const _id = updateInfo._id;
    const car_model = formData.car_model.value;
    const rental_price = formData.rental_price.value;
    const availability = formData.availability.value;
    const registration_number = formData.registration_number.value;
    const features = featuresData;
    const description = formData.description.value;
    const image_url = formData.photo_url.value;
    const location = formData.location.value;
    const updateCarData = {
      car_model,
      rental_price,
      availability,
      registration_number,
      features,
      description,
      image_url,
      location,
    };
    console.table("this is data", updateCarData);
    try {
      const { data } =await axiosSecure.put(
        `/mycar/${_id}`,
        updateCarData
      );
      bookMarkData();
      setOpenModal(false)
    } catch (error) {
      console.log(error);
    }
  };



  console.log("Book Mark Data", bookMark);
  return (
    <div>
      <Card className="overflow-x-auto w-10/12 mx-auto border border-solid border-blue-300">
        <table className="table">
          <Modal
            show={openModal}
            size="3xl"
            onClose={() => setOpenModal(false)}
            popup
          >
            <Modal.Header />
            <Modal.Body>
              <div className="text-center">
                <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                <form onSubmit={handleUpdate} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Car Model</span>
                    </label>
                    <input
                      type="text"
                      defaultValue={updateInfo?.car_model}
                      placeholder="car model"
                      name="car_model"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Daily Rental Price</span>
                    </label>
                    <input
                      type="text"
                      placeholder="daily rental price"
                      className="input input-bordered"
                      name="rental_price"
                      defaultValue={updateInfo?.rental_price}
                      required
                    />
                  </div>
                  <div className=" flex flex-col justify-start gap-2">
                    <label className="text-gray-700 text-left " htmlFor="category">
                      Category
                    </label>
                    <select
                      className="border p-2 rounded-md"
                      defaultValue={availability}
                      name="availability"
                      id="availability"
                    >
                      <option value="available">Available</option>
                      <option value="unavailable">Unavailable</option>
                    </select>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">
                        Vehicle Registration Number
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="registration number"
                      name="registration_number"
                      defaultValue={updateInfo?.registration_number}
                      className="input input-bordered"
                      required
                    />
                  </div>

                  <div className="flex flex-col  gap-2 ">
                    <label
                      className="text-gray-700  text-left"
                      htmlFor="category"
                    >
                      Features
                    </label>
                    <Select
                      options={option}
                      onChange={handleFeatures}
                      defaultValue={updateInfo?.features}
                      isMulti
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Description</span>
                    </label>
                    <textarea
                      type="text"
                      placeholder="description"
                      name="description"
                      defaultValue={updateInfo?.description}
                      className="input input-bordered"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Photo URL</span>
                    </label>
                    <input
                      type="url"
                      placeholder="photo_url"
                      name="photo_url"
                      defaultValue={updateInfo?.image_url}
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Location</span>
                    </label>
                    <textarea
                      type="text"
                      placeholder="location"
                      name="location"
                      defaultValue={updateInfo?.location}
                      className="input input-bordered"
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
                      onClick={() => handleDelete(bookMark._id)}
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
