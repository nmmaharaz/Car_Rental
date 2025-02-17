import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Loader from "../components/Loader";
import Banner from "../components/Banner";
// import Choose from "../components/Choose";
import axios from "axios";
import Recent from "../components/Recent";
import Testomonial from "../components/Testomonial";
import SpecialOffers from "../components/SpecialOffers";
import AboutUs from "../components/AboutUs";
import Services from "../components/Service";
import Testimonials from "../components/UpdateTestomial";


const Home = () => {
    const {user, loading} = useContext(AuthContext)
    
    const [data, setData] = useState([])
    console.log(data, "this is data")
    console.log("this Data", data)
    useEffect(()=>{
        const handleResent = async() =>{
            const {data}=await axios.get(`https://car-rental-theta-lac.vercel.app/carsdata`)
            console.log(data)
            setData(data)
        }
        handleResent()
        console.log(data)
    },[])
    const testomonial = [
        {
          id: 1,
          photo: "https://i.ibb.co.com/BB9kLQp/images.jpg",
          name: "John Doe",
          rating: 4.5,
          description: "Kia continues its dedication to building stylish, economical sedans by introducing the all-new K4. Replacing the Forte in the brand's lineup, the K4 gets a fresh new."
        },
        {
          id: 2,
          photo: "https://i.ibb.co.com/HxCXpBc/john-doe.jpg",
          name: "Jane Smith",
          rating: 3.0,
          description: "Audi's new electric SUV shares a lot with its cousin from Porsche, yet it brings a distinctive look and feel to the road, making it a compelling alternative."
        },
        {
          id: 3,
          photo: "https://i.ibb.co.com/0n3tdpp/Alice-Johnson.png",
          name: "Alice Johnson",
          rating: 5.0,
          description: "Audi's new electric SUV shares a lot with its cousin from Porsche, yet it brings a distinctive look and feel to the road, making it a compelling alternative."
        },
        {
          id: 4,
          photo: "https://i.ibb.co.com/qN4j3QQ/Chris-Lee.jpg",
          name: "Chris Lee",
          rating: 2.5,
          description: "Kia continues its dedication to building stylish, economical sedans by introducing the all-new K4. Replacing the Forte in the brand's lineup, the K4 gets a fresh new."
        },
        {
          id: 5,
          photo: "https://i.ibb.co.com/k5XpKRT/Emily-Davis.jpg",
          name: "Emily Davis",
          rating: 4.0,
          description: "Kia continues its dedication to building stylish, economical sedans by introducing the all-new K4. Replacing the Forte in the brand's lineup, the K4 gets a fresh new."
        },
        {
          id: 6,
          photo: "https://i.ibb.co.com/f0m4q3p/Michael-Brown.jpg",
          name: "Michael Brown",
          rating: 5.0,
          description: "Kia continues its dedication to building stylish, economical sedans by introducing the all-new K4. Replacing the Forte in the brand's lineup, the K4 gets a fresh new."
        }
      ]
      
    if(loading)return<Loader></Loader>
    return (
        <div className="">
            <Banner></Banner>
            {/* <Choose></Choose> */}
            <div className="grid py-12 w-10/12 mx-auto grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 ">
            {
              data?.map(car =><Recent key={car._id} car={car}></Recent>)
            }
            </div>
            <div>
              <Testimonials></Testimonials>
              <Services></Services>
              <AboutUs></AboutUs>
            </div>
        </div>
    );
};

export default Home;