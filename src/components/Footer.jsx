import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { Footer } from "flowbite-react";

const FooterInfo = () => {
    return (
        <div className="mt-8">
            <Footer>
      <div className="w-full bg-[#131b35]">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <Footer.Title title="Company" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Careers</Footer.Link>
              <Footer.Link href="#">Brand Center</Footer.Link>
              <Footer.Link href="#">Blog</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="help center" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Discord Server</Footer.Link>
              <Footer.Link href="#">Twitter</Footer.Link>
              <Footer.Link href="#">Facebook</Footer.Link>
              <Footer.Link href="#">Contact Us</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div className="grid grid-cols-2 gap-1">
            <img className="w-40 h-28 object-fill rounded-2xl" src="https://static.vecteezy.com/system/resources/thumbnails/026/992/343/small_2x/classic-modified-car-with-dark-smokie-background-ai-generative-free-photo.jpg" alt="" />
            <img className="w-40 h-28 object-fill rounded-2xl" src="https://static.vecteezy.com/system/resources/thumbnails/023/192/562/small_2x/sport-car-running-on-the-road-in-future-city-created-with-generative-ai-free-photo.jpg" alt="" />
            <img className="w-40 h-28 object-fill rounded-2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7aogD6Hn18L0P7feuvFt_OY2TAkTqq1fj4g&s" alt="" />
            <img className="w-40 h-28 object-fill rounded-2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdHtqioLW3qAdaZCALAUcebNjUHLGPovCJ4A&s" alt="" />
          </div>
        </div>
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Alta Rental Car™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="https://www.facebook.com/groups/288111895977592" target="_blank" icon={BsFacebook} />
            <Footer.Icon href="https://www.facebook.com/groups/288111895977592" target="_blank" icon={BsInstagram} />
            <Footer.Icon href="https://www.facebook.com/groups/288111895977592" target="_blank" icon={BsTwitter} />
            <Footer.Icon href="https://www.facebook.com/groups/288111895977592" target="_blank" icon={BsGithub} />
            <Footer.Icon href="https://www.facebook.com/groups/288111895977592" target="_blank" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
        </div>
    );
};

export default FooterInfo;