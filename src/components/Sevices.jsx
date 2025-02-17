import {
  FaRoad,
  FaTaxi,
  FaBuilding,
  FaCar,
  FaUserTie,
  FaMountain,
  FaCalendarAlt,
  FaGift,
} from "react-icons/fa";

const services = [
  { title: "One-Way Rentals", icon: <FaRoad /> },
  { title: "Airport Transfers", icon: <FaTaxi /> },
  { title: "Corporate Rentals", icon: <FaBuilding /> },
  { title: "Chauffeur Service", icon: <FaCar /> },
  { title: "Rent with Driver", icon: <FaUserTie /> },
  { title: "Mountain Travel", icon: <FaMountain /> },
  { title: "Long-Term Leases", icon: <FaCalendarAlt /> },
  { title: "Loyalty Programs", icon: <FaGift /> },
];

const Services = () => {
  return (
    <div className="bg-gray-100">
      <section className="py-12">
      <div className="w-10/12 mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Explore Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white relative overflow-hidden shadow-md rounded-xl p-6 flex flex-col items-start gap-4 hover:shadow-xl transition"
            >
              <div className="text-red-500 text-4xl">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600">
                Experience hassle-free rentals, premium services, and a wide
                selection of vehicles.
              </p>
              <span className="absolute bottom-0 right-0 w-10 h-10 bg-red-600 flex items-center justify-center rounded-tl-lg text-white">
                ↗
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default Services;
