import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../assets/image/FitMe-logo.png";

export default function Footer() {
  return (
    <div>
      <footer className="bg-[#FC8019] w-full p-20 text-white">
        <ul className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="bg-white" />
            <b className="text-lg font-bold">FitMe</b>
          </div>
          <div className="flex justify-center items-center gap-10">
            <li>About Us</li>
            <li>Deilery</li>
            <li>Help & Support</li>
            <li>T&C</li>
          </div>
          <span className="flex items-center gap-1">
            <span>Contact:</span>
            <b>+911245667899</b>
          </span>
        </ul>

        <div className="flex justify-center items-center gap-3 mt-10">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
        </div>
      </footer>
    </div>
  );
}
