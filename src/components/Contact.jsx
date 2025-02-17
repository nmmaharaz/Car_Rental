import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

const ContactSection = () => {
  return (
    <div className="w-10/12 mx-auto px-6 py-12 grid md:grid-cols-2 gap-12">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Visit Our Office</h2>
        <p className="text-gray-600 mt-4">
        It’s one of the few ways available for potential customers to have a direct line of communication with a business – all without leaving the site.
        </p>

        <div className="mt-6 space-y-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-red-600 text-white rounded-lg">
              <FaMapMarkerAlt size={20} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Office Location</h3>
              <p className="text-gray-600">Chattgram, Bangladesh</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="p-3 bg-red-600 text-white rounded-lg">
              <FaPhoneAlt size={20} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Phone Number</h3>
              <p className="text-gray-600">+880 1611 229720 </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="p-3 bg-red-600 text-white rounded-lg">
              <FaEnvelope size={20} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Email Address</h3>
              <p className="text-gray-600">carrental@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="p-3 bg-red-600 text-white rounded-lg">
              <FaClock size={20} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Open Time</h3>
              <p className="text-gray-600">Mon - Sat: 09:00am - 06:00pm</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold">Social media</h3>
          <div className="flex space-x-4 mt-3">
            <a target="_blank" href="https://www.facebook.com/nmmaharaz/" className="p-3 bg-red-600 text-white rounded-full">
              <FaFacebookF size={18} />
            </a>
            <a target="_blank" href="https://x.com/nmmaharaz" className="p-3 bg-red-600 text-white rounded-full">
              <FaTwitter size={18} />
            </a>
            <a target="_blank" href="https://www.instagram.com/nmmeheraj/" className="p-3 bg-red-600 text-white rounded-full">
              <FaInstagram size={18} />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/nmmaharaz/" className="p-3 bg-red-600 text-white rounded-full">
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900">Send Messege</h3>
        <form className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <input
            type="email"
            placeholder="Your email"
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <input
            type="tel"
            placeholder="+880 0000 000000"
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <textarea
            rows="4"
            placeholder="Message"
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-600"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-red-600 text-white font-bold py-3 rounded-lg flex justify-center items-center gap-2 hover:bg-red-700 transition"
          >
            SUBMIT <span className="ml-1">↗</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
