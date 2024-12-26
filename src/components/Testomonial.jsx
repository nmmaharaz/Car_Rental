import { BiSolidQuoteLeft } from "react-icons/bi";

const Testomonial = ({tes}) => {
    return (
        <div>
                 <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-6">
      <div className="flex flex-col items-center">
        {/* Quotation Icon */}
        <div className="bg-blue-700 rounded-full w-20 h-20 flex justify-center items-center">
        <BiSolidQuoteLeft className="text-3xl text-white" />
        </div>
        {/* Testimonial Text */}
        <p className="text-gray-600 text-center mt-4">
            {tes.description}
        </p>
        {/* Stars */}
        <div className="flex mt-4">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-yellow-500"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
        {/* Author */}
        <div className="flex items-center mt-6">
          <img
            src={tes.photo}
            className="w-12 h-12 rounded-full"
          />
          <div className="ml-4">
            <p className="text-gray-900 font-semibold">{tes.name}</p>
            <p className="text-gray-500 text-sm">Customer</p>
          </div>
        </div>
      </div>
    </div>
    </div>
       
    );
};

export default Testomonial;