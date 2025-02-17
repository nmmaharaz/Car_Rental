import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      image: "https://i.ibb.co.com/BB9kLQp/images.jpg",
      name: "John Doe",
      position: 4.5,
      quote:
        "Kia continues its dedication to building stylish, economical sedans by introducing the all-new K4. Replacing the Forte in the brand's lineup, the K4 gets a fresh new.",
    },
    {
      id: 2,
      image: "https://i.ibb.co.com/HxCXpBc/john-doe.jpg",
      name: "Jane Smith",
      position: 3.0,
      quote:
        "Audi's new electric SUV shares a lot with its cousin from Porsche, yet it brings a distinctive look and feel to the road, making it a compelling alternative.",
    },
    {
      id: 3,
      image: "https://i.ibb.co.com/0n3tdpp/Alice-Johnson.png",
      name: "Alice Johnson",
      position: 5.0,
      quote:
        "Audi's new electric SUV shares a lot with its cousin from Porsche, yet it brings a distinctive look and feel to the road, making it a compelling alternative.",
    },
    {
      id: 4,
      image: "https://i.ibb.co.com/qN4j3QQ/Chris-Lee.jpg",
      name: "Chris Lee",
      position: 2.5,
      quote:
        "Kia continues its dedication to building stylish, economical sedans by introducing the all-new K4. Replacing the Forte in the brand's lineup, the K4 gets a fresh new.",
    },
    {
      id: 5,
      image: "https://i.ibb.co.com/k5XpKRT/Emily-Davis.jpg",
      name: "Emily Davis",
      position: 4.0,
      quote:
        "Kia continues its dedication to building stylish, economical sedans by introducing the all-new K4. Replacing the Forte in the brand's lineup, the K4 gets a fresh new.",
    },
    {
      id: 6,
      image: "https://i.ibb.co.com/f0m4q3p/Michael-Brown.jpg",
      name: "Michael Brown",
      position: 5.0,
      quote:
        "Kia continues its dedication to building stylish, economical sedans by introducing the all-new K4. Replacing the Forte in the brand's lineup, the K4 gets a fresh new.",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="w-10/12 mx-auto text-center">
        {/* Section Header */}
        <h3 className="text-red-500 text-sm font-semibold uppercase flex items-center justify-center gap-2">
          🚗 Testimonials
        </h3>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">
          What Our Clients Say About Us!
        </h2>

        {/* Testimonials Grid */}
        <div className="mt-10">
          <Swiper
            spaceBetween={30}
            freeMode={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000, disableOnInteraction: false }} 
            modules={[FreeMode, Pagination, Autoplay]}
            className="mySwiper"
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ image, name, position, quote }) {
  return (
    <div className="relative h-64 bg-white overflow-hidden shadow-lg p-6 rounded-xl text-center">
      <div className="absolute top-0 right-0 bg-red-600 text-white px-6 py-3 rounded-bl-full text-3xl font-bold">
        “
      </div>
      <img
        src={image}
        alt={name}
        className="w-16 h-16 rounded-full mx-auto border-4 border-gray-200"
      />
      <h4 className="font-bold text-gray-900 mt-2">{name}</h4>
      <p className="text-gray-600 text-sm mt-4">{quote}</p>
    </div>
  );
}
