import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import logo from "../assets/image/FitMe-logo.png";

export default function Footer() {
  return (
    <footer className="w-full bg-[#FC8019] px-6 py-10 text-white sm:px-10 md:px-12 lg:px-16">

      <div
        className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          gap-8
          text-center
          md:flex-row
          md:items-start
          md:justify-between
          md:text-left
        "
      >

        <div className="flex items-center gap-3">

          <img
            src={logo}
            alt="FitMe logo"
            className="
              h-10
              w-10
              rounded-md
              bg-white
              object-contain
              p-1
              sm:h-11
              sm:w-11
            "
          />

          <b className="text-lg font-bold sm:text-xl">
            FitMe
          </b>

        </div>
        <ul
          className="
            flex
            flex-wrap
            justify-center
            gap-x-6
            gap-y-3
            text-sm
            sm:gap-x-8
            sm:text-base
            md:justify-start
          "
        >
          <li>
            <a
              href="#"
              className="transition hover:text-black"
            >
              About Us
            </a>
          </li>

          <li>
            <a
              href="#"
              className="transition hover:text-black"
            >
              Delivery
            </a>
          </li>

          <li>
            <a
              href="#"
              className="transition hover:text-black"
            >
              Help & Support
            </a>
          </li>
          <li>
            <a
              href="#"
              className="transition hover:text-black"
            >
              T&C
            </a>
          </li>
        </ul>

        <div className="text-sm sm:text-base">
          <span>Contact: </span>
          <a
            href="tel:+911245667899"
            className="font-bold hover:text-black"
          >
            +91 1245667899
          </a>

        </div>

      </div>

      <div className="mx-auto mt-8 max-w-7xl  border-white/30" />

      <div className="mt-7 flex justify-center gap-4">
          <FaFacebookF size={16} />
          <FaInstagram size={16} />
          <FaTwitter size={16} />
      </div>

    </footer>
  );
}