import { useContext} from "react";
import axios from "axios";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Card } from "flowbite-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddCar = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
const navigate = useNavigate()
  const handleAddCar = async (e) => {
    e.preventDefault();
    const formData = e.target;
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
    const availability = formData.availability.value;
    const registration_number = formData.registration_number.value;
    const description = formData.description.value;
    const bookingCount = 0;
    const location = formData.location.value;
    const image_url = formData.photo_url.value;
    const date = new Date();
    const AddCarData = {
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
      location,
      name: user?.displayName,
      email: user?.email,
      user_photo: user?.photoURL,
    };
    try {
      const { data } = await axios.post(
        `https://car-rental-theta-lac.vercel.app/addcar`,
        AddCarData
      );
       toast.success("Added successfuly",{
              position: "top-center",
           })
           navigate("/availablecars")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-10/12 mx-auto">
      <Card>
        <form onSubmit={handleAddCar} className="card-body">
          <div className="flex items-center">
            <div className="form-control w-1/2 mr-4">
              <label className="label">
                <span className="label-text">Car Image</span>
              </label>
              <input
                type="url"
                placeholder="image_url"
                name="photo_url"
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
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="flex items-center">
            <div className=" flex flex-col w-1/2 mr-4 gap-2">
              <label className="text-gray-700 " htmlFor="category">
                Category
              </label>
              <select
                className="border border-solid border-gray-300 px-2 py-3 rounded-lg"
                name="availability"
                id="availability"
              >
                <option value="available">Available</option>
                <option value="unavailable">Unavailable</option>
              </select>
            </div>
            <div className="form-control w-1/2">
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
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <textarea
              type="text"
              placeholder="location"
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
              placeholder="description"
              name="description"
              className="input h-28 input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="w-full bg-red-600 text-white font-bold py-3 rounded-lg flex justify-center items-center gap-2 hover:bg-red-700 transition">Add Car</button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AddCar;
