import { BsGearWideConnected } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { IoBookmark, IoBookmarks } from "react-icons/io5";

const Choose = () => {
    return (
        <div className="w-10/12 mt-8 mb-12 mx-auto">
            <p className="text-5xl text-center font-bold my-8">Why Choose Us?</p>
            <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-3 my-5 gap-6 justify-between">
            <div className="relative bg-base-200 p-8 rounded-xl h-52 shadow-xl">
                <p className="text-3xl font-bold">Wide Variety of Cars</p>
                <p className="mt-3 mr-8">From budget-friendly options to luxury vehicles.</p>
            <div className="absolute left-14 bottom-[-30px] bg-white w-24 rounded-full flex items-center justify-center h-24">
            <div className=" bg-blue-700 rounded-full w-20 h-20 flex justify-center items-center">
            <BsGearWideConnected className="text-6xl text-white" />
            </div>
            </div>
            </div>
            <div className="relative bg-base-200 p-8 rounded-xl h-52 shadow-xl">
                <p className="text-3xl font-bold">Easy Booking Process</p>
                <p className="mt-3 mr-8">Seamlessly book your ride in just a few clicks.</p>
            <div className="absolute left-14 bottom-[-30px] bg-white w-24 rounded-full flex items-center justify-center h-24">
            <div className=" bg-blue-700 rounded-full w-20 h-20 flex justify-center items-center">
            <IoBookmark className="text-6xl text-white" />
            </div>
            </div>
            </div>
            <div className="relative bg-base-200 p-8 rounded-xl h-52 shadow-xl">
                <p className="text-3xl font-bold">Customer Support</p>
                <p className="mt-3 mr-8">24/7 assistance for all your queries.</p>
            <div className="absolute left-14 bottom-[-30px] bg-white w-24 rounded-full flex items-center justify-center h-24">
            <div className=" bg-blue-700 rounded-full w-20 h-20 flex justify-center items-center">
            <FaUserTie className="text-6xl text-white" />
            </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Choose;