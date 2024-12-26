import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Car from "../components/car";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import SingelCard from "../components/SingelCard";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";

const AvailableCars = () => {
  const {loading} = useContext(AuthContext)
  const [cars, setCars] = useState([]);
  console.log("this is car", cars.length)
  const [search, setSearch] = useState('')
  const [sortDate, setSortDate] = useState('')
  const [sortPrice, setSortPrice] = useState('')
  const [formatData, setFormatData] = useState(true)


  console.log("this is car data", cars);
  useEffect(()=>{
    const carData = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/cars/available`,{
          params:{
            search, 
            sortDate,
            sortPrice
          }
        });
        // ?filter=${filter}&search=${search}&sort=${sort}
        setCars(data);
      };
    carData()
  },[search, sortDate, sortPrice])
  if(loading)return<Loader></Loader>

  return (
    <div className="w-11/12 mx-auto">
     {
      cars.length > 0?( <div>
        <div className="flex justify-between mt-7 items-center">
          <input
            type="text"
            placeholder="search"
            name="search"
            onChange={e=>setSearch(e.target.value)}
            value={search}
            className="input input-bordered"
            required
          />
          <div className="ml-6">
            <select
              className="bg-blue-200 p-3 rounded-l-lg"
              name="sortDate"
              onChange={e => setSortDate(e.target.value)}
              value={sortDate}
              id=""
            >
              <option value="">Date Added</option>
              <option value="dsc">Newest First</option>
              <option value="asc">Oldest First</option>
            </select>
            <select
              className="bg-blue-200 p-3 rounded-r-lg"
              name="sortPrice"
              onChange={e=>setSortPrice(e.target.value)}
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
            {
              formatData?<BsFillGrid3X3GapFill onClick={()=>setFormatData(false)} className="text-gray-700 text-3xl" />:<FaList onClick={()=>setFormatData(true)} className="text-gray-700 text-3xl"  />
            }
          </div>
        </div>
        {
          formatData?<div className="grid mt-8 grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {cars?.map((car) => (
            <Car formatData={formatData} key={car._id} car={car}></Car>
          ))}
        </div>:
        <div className="grid gap-7 mt-8 gap-y-7">
          {cars?.map((car) => (
            <SingelCard formatData={formatData} key={car._id} car={car}></SingelCard>
          ))}
        </div>
        }
        </div>):(
          <div className="flex flex-col justify-center h-screen items-center">
            <p className="text-4xl mb-8 font-bold">Car is not availble</p>
            <Link to="/addcar"><Button outline gradientDuoTone="purpleToPink">
        Book Now
      </Button></Link>
          </div>
        )
     }
    </div>
  );
};

export default AvailableCars;
