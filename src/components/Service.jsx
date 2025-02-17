import { Link } from "react-router-dom";

export default function Services() {
    return (
      <section className="bg-gray-100 py-12">
        <div className="w-10/12 mx-auto text-center">
          <h3 className="text-red-500 text-sm font-semibold uppercase flex items-center justify-center gap-2">
            🚗 What We Offer
          </h3>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">
            Explore Our Services
          </h2>
  
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon="🚧"
              title="One-Way Rentals"
              description="Experience hassle-free rentals, premium services, and a wide selection of vehicles."
            />
            <ServiceCard
              icon="🚕"
              title="Airport Transfers"
              description="Experience hassle-free rentals, premium services, and a wide selection of vehicles."
            />
            <ServiceCard
              icon="👨‍💼"
              title="Corporate Rentals"
              description="Experience hassle-free rentals, premium services, and a wide selection of vehicles."
            />
            <ServiceCard
              icon="🚗"
              title="Chauffeur Service"
              description="Experience hassle-free rentals, premium services, and a wide selection of vehicles."
            />
          </div>
  
          <button>
          <Link to="/services" className="mt-8 bg-red-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-700 flex items-center gap-2">
            All Services <span>↗</span>
          </Link>
          </button>
        </div>
      </section>
    );
  }
  
  function ServiceCard({ icon, title, description }) {
    return (
      <div className="relative bg-white shadow-lg p-6 rounded-xl text-left">
        <div className="w-14 h-14 flex items-center justify-center bg-gray-100 rounded-full text-2xl text-red-500 mb-4">
          {icon}
        </div>
        <h4 className="font-bold text-gray-900">{title}</h4>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
        <span className="absolute bottom-0 right-0 w-10 h-10 bg-red-600 flex items-center justify-center rounded-tl-lg text-white">
          ↗
        </span>
      </div>
    );
  }