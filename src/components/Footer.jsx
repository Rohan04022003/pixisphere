import camera from "../assets/camera.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="mx-auto lg:px-16 md:px-10 sm:px-4 px-2">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          {/* Logo & Description */}
          <div className="flex-1">
            <Link to={"/"}>
              <h1 className="flex items-end gap-1 text-2xl font-bold pb-3">
                <img src={camera} alt="logo" className="w-9" />
                <span className="text-2xl font-bold bg-gradient-to-r from-[#7728bc] via-[#d62ace] to-[#f71a88] bg-clip-text text-transparent">
                  Pixisphere
                </span>
              </h1>
            </Link>
            <p className="text-gray-400 max-w-sm">
              Creating stunning photography experiences with passion and
              creativity. Capturing your precious moments forever.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex-1 flex flex-col sm:flex-row sm:justify-between gap-12">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li className="hover:text-white transition">About Us</li>
                <li className="hover:text-white transition">Careers</li>
                <li className="hover:text-white transition">Blog</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-2">
                <li className="hover:text-white transition">Help Center</li>
                <li className="hover:text-white transition">Privacy Policy</li>
                <li className="hover:text-white transition">
                  Terms of Service
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  Email:{" "}
                  <a
                    href="mailto:rohankumar993985@gmail.com"
                    className="hover:text-white transition"
                  >
                    rohankumar993985@gmail.com
                  </a>
                </li>
                <li>
                  Phone:{" "}
                  <a
                    href="tel:8404973614"
                    className="hover:text-white transition"
                  >
                    +91 8404973614
                  </a>
                </li>
                <li>Address: 1459, block 34, sector 3, pushp Vihar, delhi 110017</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm select-none">
          &copy; {new Date().getFullYear()} Pixisphere. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
