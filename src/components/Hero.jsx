import Bananna from "../assets/image/bananna.png";
import Apple from "../assets/image/apple.png";
const Hero = () => {
  return (
    <>
      <div className="grid grid-cols-2 justify-center items-center gap-5">

        <div>
          <span className="flex items-center gap-2 text-3xl font-bold">
            Premium <span className="text-amber-600">quality</span> <br /> Food for
            your <img src={Bananna} alt="" className="w-16" />{" "}
            <span className="text-amber-600">healthy</span> <br />{" "}
            <img src={Apple} alt="" className="w-16" /> & Daily Life{" "}
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="flex items-center gap-5">
            <input className="border w-80 py-1 pl-4 rounded-lg" type="text" placeholder="Enter your delivery location" />
            <button className="border  bg-black text-white p-2 rounded-lg">Get Started</button>
          </div>
          <p>Popular cities in India</p>
          <div className="flex items-center gap-3">
            <span>Hyderabad</span>
            <span className="text-amber-600">Chennai</span>
            <span>Mumbai</span>
            <span className="text-amber-600">Bangalore</span>
            <span>Delhi</span>
            <span className="text-amber-600">Kolkata</span>
          </div>
        </div>

        <div>
            jjjjjjjj
        </div>
      </div>
    </>
  );
};

export default Hero;
