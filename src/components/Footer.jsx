import React from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import assets from "../assets/assests";

const Footer = () => {
  return (
    <div className="container mx-auto pt-10 pb-5 overflow-x-hidden bg-[#1E305E] text-white p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        <div className="flex flex-col gap-4">
          <img src={assets.logo} alt="logo" className="w-78" />
          <p className="text-white max-w-xs text-[14px]">
            " Our services to you is our dedication to your worth ... "
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4 text-red">Quick Links</h3>
          <ul className="space-y-2 text-[14px]">
            <li>
              <Link
                to="/"
                className="text-white hover:text-red-600 transition-colors"
              >
                Privacy
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-white hover:text-red-600 transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/legal"
                className="text-white hover:text-red-600 transition-colors"
              >
                Legal
              </Link>
            </li>
            <li>
              <Link
                to="/realtors"
                className="text-white hover:text-red-600 transition-colors"
              >
                Realtors
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-white hover:text-red-600 transition-colors"
              >
                Carrers
              </Link>
            </li>
            <li>
              <Link
                to="/sitemap"
                className="text-white hover:text-red-600 transition-colors"
              >
                Site Maps
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4 text-red">Contact Us</h3>
          <ul className="space-y-2 text-[14px]">
            <li className="text-white flex items-center gap-2">
              <FaMapMarkerAlt className="text-red" />
              39, 1st Circular Cresent Cantoment, Accra, Ghana
            </li>
            <li className="text-white flex items-center gap-2">
              <FaMapMarkerAlt className="text-red" />
              Digital Address: GL059-9755
            </li>
            <li className="text-white flex items-center gap-2">
              <FaPhone className="text-red" />
              +1 (469) 410-9683, +233-54-931-1202
            </li>
            <li className="text-white flex items-center gap-2">
              <MdEmail className="text-red" />
              info@honest-builders.com
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4 text-deep-red">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-red-600 transition-colors"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-red-600 transition-colors"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-red-600 transition-colors"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-red-600 transition-colors"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-10">
        <div className="flex justify-center items-center pt-6 pb-2">
          <p className="text-gray-500">
            © 2025 Honest Builders. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
