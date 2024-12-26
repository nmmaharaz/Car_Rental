import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { Button, Card } from "flowbite-react";
import { motion } from "framer-motion";

const SpecialOffers = () => {
  return (
    <div>
     <div>
      <Carousel
        autoPlay
        infiniteLoop
        interval={3000}
        transitionTime={1000}
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        stopOnHover
        emulateTouch
        swipeable
      >
        <motion.div className="hero"
         whileHover={{ scale: 1.03 }}
         transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="hero-content flex-col lg:flex-row-reverse">
            <motion.img
              src="https://i.ibb.co.com/P6NnLZG/background-546713-913.jpg"
              className="max-w-[550px] rounded-lg shadow-2xl"
              initial={{ x: '100%' }}
              whileInView={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 100 }}
              viewport={{ once: true }}// Trigger the animation only once when in view
            />
            <div className="text-left">
              <h1 className="text-5xl font-bold max-w-[600px]">
                Get 15% off for weekend rentals!
              </h1>
              <p className="py-6 max-w-[400px]">
                Renting a car can be a significant investment, which makes the
                buying process longer. Buyers spend time researching, test
                driving, and visiting dealerships to ensure they buy the best
                vehicle for their needs.
              </p>
              <Link to="/availablecars">
                <Button outline gradientDuoTone="purpleToPink">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div className="hero"
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300 }}
          >
          <div className="hero-content flex-col lg:flex-row-reverse">
            <motion.img
              src="https://i.ibb.co.com/t8F61Bh/car.png"
              className="max-w-[550px] rounded-lg shadow-2xl"
              initial={{ x: '100%' }}
              whileInView={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 100 }}
              viewport={{ once: true }}
            />
            <div className="text-left">
              <h1 className="text-5xl font-bold max-w-[600px]">
                Luxury cars at $99/day this holiday season!
              </h1>
              <p className="py-6 max-w-[400px]">
                Renting a car can be a significant investment, which makes the
                buying process longer. Buyers spend time researching, test
                driving, and visiting dealerships to ensure they buy the best
                vehicle for their needs.
              </p>
              <Link to="/availablecars">
                <Button outline gradientDuoTone="purpleToPink">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </Carousel>
    </div>
    </div>
  );
};

export default SpecialOffers;
