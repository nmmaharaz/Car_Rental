const AboutUs = () => {
    return (
      <section className="bg-white py-12">
        <div className="w-10/12 mx-auto text-center">
          <h3 className="text-red-500 text-sm font-semibold uppercase">
            Why Choose Us
          </h3>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">
            The Advantage of Renting with Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          Our main principle is to support you before, during and after the rental.
          </p>
          <div className="relative mt-10 flex flex-col lg:flex-row justify-center items-center gap-6">
            <div className="space-y-6">
              <div className="bg-white overflow-hidden shadow-lg px-8 py-7 lg:py-6 rounded-lg  relative">
                <span className="absolute bottom-0 left-0 w-4 h-4 bg-red-500"></span>
                <h4 className="font-bold text-gray-900">Diverse Fleet</h4>
                <p className="text-gray-600 text-sm mt-2">
                A wide range of cars for all needs.
                </p>
              </div>
              <div className="bg-white overflow-hidden shadow-lg px-8 py-7 lg:py-6 rounded-lg  relative">
                <span className="absolute bottom-0 left-0 w-4 h-4 bg-red-500"></span>
                <h4 className="font-bold text-gray-900">Affordable Rates</h4>
                <p className="text-gray-600 text-sm mt-2">
                Competitive pricing with no hidden fees.
                </p>
              </div>
              <div className="bg-white overflow-hidden shadow-lg px-8 py-7 lg:py-6 rounded-lg  relative">
                <span className="absolute bottom-0 left-0 w-4 h-4 bg-red-500"></span>
                <h4 className="font-bold text-gray-900">Flexible Rentals</h4>
                <p className="text-gray-600 text-sm mt-2">
                Daily, weekly, and long-term options available.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://www.pngplay.com/wp-content/uploads/13/Mercedes-Benz-AMG-PNG-HD-Quality.png"
                alt="Car"
                className=""
              />
            </div>
            <div className="space-y-6">
              <div className="bg-white overflow-hidden shadow-lg px-8 py-7 lg:py-6 rounded-lg  relative">
                <span className="absolute bottom-0 left-0 w-4 h-4 bg-red-500"></span>
                <h4 className="font-bold text-gray-900">24/7 Support</h4>
                <p className="text-gray-600 text-sm mt-2">
                  Always available to assist you anytime.
                </p>
              </div>
              <div className="bg-white overflow-hidden shadow-lg px-8 py-7 lg:py-6 rounded-lg  relative">
                <span className="absolute bottom-0 left-0 w-4 h-4 bg-red-500"></span>
                <h4 className="font-bold text-gray-900">Safety First</h4>
                <p className="text-gray-600 text-sm mt-2">
                All cars are inspected for your safety.
                </p>
              </div>
              <div className="bg-white overflow-hidden shadow-lg px-8 py-7 lg:py-6 rounded-lg  relative">
                <span className="absolute bottom-0 left-0 w-4 h-4 bg-red-500"></span>
                <h4 className="font-bold text-gray-900">Loyalty Rewards</h4>
                <p className="text-gray-600 text-sm mt-2">
                Earn exclusive discounts and special offers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    );
  };
  
  export default AboutUs;
  