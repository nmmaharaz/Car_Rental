import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import SingelCard from "../components/SingelCard";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import Car from "../components/Car";

const AvailableCars = () => {
  const { loading } = useContext(AuthContext);
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");
  const [sortDate, setSortDate] = useState("");
  const [sortPrice, setSortPrice] = useState("");
  const [formatData, setFormatData] = useState(true);
  const [load, setLoad] = useState(true)

  console.log("this is car data", cars);
  useEffect(() => {
    const carData = async () => {
      const { data } = await axios.get(
        `https://car-rental-theta-lac.vercel.app/cars/available`,
        {
          params: {
            search,
            sortDate,
            sortPrice,
          },
        }
      );
      setCars(data);
      setLoad(false)
    };
    carData();
  }, [search, sortDate, sortPrice, loading]);
if(load)return<Loader></Loader>
  return (
    <div className="w-10/12 mx-auto">
      {cars?.length > 0 ? (
        <div>
          <div className="flex justify-between mt-7 items-center">
            <input
              type="text"
              placeholder="search"
              name="search"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              className="w-32 border border-gray-200 py-3 pl-28 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-purple-100"
              required
            />
            <div className="flex">
              <select
                className="select select-bordered mr-2 w-full max-w-xs"
                name="sortDate"
                onChange={(e) => setSortDate(e.target.value)}
                value={sortDate}
                id=""
              >
                <option value="">Date Added</option>
                <option value="dsc">Newest First</option>
                <option value="asc">Oldest First</option>
              </select>
              <select
                className="select select-bordered w-full max-w-xs"
                name="sortPrice"
                onChange={(e) => setSortPrice(e.target.value)}
                value={sortPrice}
                id=""
              >
                <option value="">price</option>
                <option value="asc">Lowest First</option>
                <option value="dsc">Highest First</option>
              </select>
            </div>
            <div></div>
            <div>
              {formatData ? (
                <BsFillGrid3X3GapFill
                  onClick={() => setFormatData(false)}
                  className="text-gray-700 text-3xl"
                />
              ) : (
                <FaList
                  onClick={() => setFormatData(true)}
                  className="text-gray-700 text-3xl"
                />
              )}
            </div>
          </div>
          {formatData ? (
            <div className="grid mt-8 grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {cars?.map((car) => (
                <Car formatData={formatData} key={car._id} car={car}></Car>
              ))}
            </div>
          ) : (
            <div className="grid gap-7 mt-8 gap-y-7">
              {cars?.map((car) => (
                <SingelCard
                  formatData={formatData}
                  key={car._id}
                  car={car}
                ></SingelCard>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col justify-center h-screen items-center">
          <p className="text-4xl mb-8 font-bold">Car is not availble</p>
          <Link to="/addcar">
            <Button outline gradientDuoTone="purpleToPink">
              Add Car
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default AvailableCars;
