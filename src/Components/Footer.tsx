"use client";

import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2d314d] text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        <div className="flex flex-col items-center md:items-start gap-6">
          <h2 className="text-2xl font-bold">Digitalbank</h2>
          <div className="flex gap-4 text-xl">
            <FaFacebookF className="cursor-pointer hover:text-green-400" />
            <FaYoutube className="cursor-pointer hover:text-green-400" />
            <FaTwitter className="cursor-pointer hover:text-green-400" />
            <FaPinterestP className="cursor-pointer hover:text-green-400" />
            <FaInstagram className="cursor-pointer hover:text-green-400" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 text-gray-300 text-sm">
          <div className="flex flex-col gap-3">
            <a href="#">About Us</a>
            <a href="#">Contact</a>
            <a href="#">Blog</a>
          </div>
          <div className="flex flex-col gap-3">
            <a href="#">Careers</a>
            <a href="#">Support</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-end gap-6">
          <button className="bg-gradient-to-r from-green-400 to-teal-400 text-[#2d314d] font-semibold px-6 py-2 rounded-full hover:opacity-90 transition">
            Request Invite
          </button>
          <p className="text-gray-400 text-sm">© Digitalbank. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
