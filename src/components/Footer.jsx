import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { Footer } from "flowbite-react";
const FooterInfo = () => {
  return (
    <div className="">
      <Footer>
        <div className="w-full bg-[#131b35]">
          <div className="w-10/12 mx-auto px-4 py-6 sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Alta Rental Car™" year={2024} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon
                href="https://www.facebook.com/nmmaharaz/"
                target="_blank"
                icon={BsFacebook}
              />
              <Footer.Icon
                href="https://www.instagram.com/nmmeheraj/"
                target="_blank"
                icon={BsInstagram}
              />
              <Footer.Icon
                href="https://x.com/nmmaharaz"
                target="_blank"
                icon={BsTwitter}
              />
              <Footer.Icon
                href="https://github.com/nmmaharaz"
                target="_blank"
                icon={BsGithub}
              />
              
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default FooterInfo;
