import { useContext,  useState } from "react";
import dateFormat from "dateformat";
import Select from "react-select";
import axios from "axios";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Card } from "flowbite-react";

const AddCar = () => {
  console.log(import.meta.env.VITE_API_URL);
  const { user } = useContext(AuthContext);
  console.log(user);
  const [featuresData, setFeaturesData] = useState([]);
  const features = [
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

  const handleAddCar = async (e) => {
    e.preventDefault();
    const formData = e.target;
    const car_model = formData.car_model.value;
    const price = formData.rental_price.value;
    const rental_price = parseFloat(price)
    const availability = formData.availability.value;
    const registration_number = formData.registration_number.value;
    const features = featuresData;
    const description = formData.description.value;
    const bookingCount = 0;
    const location = formData.location.value;
    const image_url = formData.photo_url.value;
    const now = new Date();
    const date = dateFormat(now, "dd/mm/yyyy HH:MM");
    const AddCarData = {
      car_model,
      rental_price,
      availability,
      registration_number,
      features,
      description,
      bookingCount,
      image_url,
      date,
      location,
      name: user?.displayName,
      email: user?.email,
      user_photo: user?.photoURL,
    };
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/addcar`,
        AddCarData
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-10/12 mx-auto">
      <Card>
        <form onSubmit={handleAddCar} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Car Model</span>
            </label>
            <input
              type="text"
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
              required
            />
          </div>
          <div className=" flex flex-col gap-2">
            <label className="text-gray-700 " htmlFor="category">
              Category
            </label>
            <select className="border p-2 rounded-md" name="availability" id="availability">
              <option value="available">Available</option>
              <option value="unavailable">Unavailable</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Vehicle Registration Number</span>
            </label>
            <input
              type="text"
              placeholder="registration number"
              name="registration_number"
              className="input input-bordered"
              required
            />
          </div>

          <div className="flex flex-col gap-2 ">
            <label className="text-gray-700 " htmlFor="category">
              Features
            </label>
            <Select
              options={features}
              onChange={handleFeatures}
              isMulti={true}
              value={featuresData}
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
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">BookingCount</span>
            </label>
            <input
              type="text"
              placeholder="bookingCount"
              defaultValue={0}
              disabled
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
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add Car</button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AddCar;
