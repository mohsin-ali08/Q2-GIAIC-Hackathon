import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#EEEFFB] text-black pt-10 px-5  md:px-20">
      <div className="container mx-auto">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left py-3">
          {/* Hekto Section */}
          <div >
            <h2 className="font-bold text-4xl text-[#151875]">Hekto</h2>
            <div className="mt-4 flex items-center border border-gray-300 rounded-md overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-black p-3 w-full outline-none"
              />
              <button className="px-3 py-2 text-xs bg-[#FB2E86] text-white font-semibold">
                Sign Up
              </button>
            </div>
            <p className="mt-4 text-gray-600 font-light">Subscribe</p>
            <p className="mt-2 text-gray-600 font-light">
              Get 10% off your first order
            </p>
          </div>

          {/* Support Section */}
          <div>
            <h2 className="font-semibold text-md text-black">Catagories</h2>
            <p className="mt-4 text-gray-600 font-light">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className="mt-3 text-gray-600 font-light">exclusive@gmail.com</p>
            <p className="mt-3 text-gray-600 font-light">+88015-88888-9999</p>
          </div>

          {/* Account Section */}
          <div>
            <h2 className="font-semibold text-md text-black">Customer Care</h2>
            <ul className="mt-4 space-y-3 text-gray-600 font-light">
              <li>My Account</li>
              <li>Login / Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
          </div>

        
          <div>
            <h2 className="font-semibold text-md text-black">Pages</h2>
            <ul className="mt-4 space-y-3 text-gray-600 font-light">
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className="py-2 border-t bg-[#E7E4F8] border-gray-300 md:rounded-full px-3 flex flex-col md:flex-row items-center justify-between">
  {/* Footer Text */}
  <p className="text-gray-600  font-light text-center md:text-left">
    © Copyright Rimel 2022. All rights reserved{" "}
    <a
      href="https://www.linkedin.com/in/mohsin-ali08/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#7E33E0] font-semibold hover:underline"
    >
      _MOHSIN ALI
    </a>
  </p>

  {/* Social Media Icons */}
  <div className="mt-4 md:mt-0 flex space-x-4">
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-blue-600 transition-colors"
    >
      <FaFacebookF size={20} />
    </a>
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-blue-400 transition-colors"
    >
      <FaTwitter size={20} />
    </a>
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-pink-500 transition-colors"
    >
      <FaInstagram size={20} />
    </a>
    <a
      href="https://www.linkedin.com/in/mohsin-ali08/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-blue-700 transition-colors"
    >
      <FaLinkedinIn size={20} />
    </a>
  </div>
</div>
      </div>
    </footer>
  );
};

export default Footer;
