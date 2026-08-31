import Bananna from "../assets/image/bananna.png";
import Apple from "../assets/image/apple.png";
import Bg1 from "../assets/image/FitFood-bg1.png";
import Bg2 from "../assets/image/FitFood-bg2.png";
import sideBg from "../assets/image/side-bg.png"

const Hero = () => {
  return (
    <>
      <div className="relative w-full max-w-full overflow-hidden">

        {/* Decorative side background blob */}
        <img className=" absolute top-1/2 -left-16 sm:-left-20 md:-left-24 lg:-left-28
                     -translate-y-1/2 w-40 h-64 sm:w-52 sm:h-80 md:w-64 md:h-96 lg:w-72 
                      blur-[1px] -z-10" src={sideBg} alt="" />
        <div
          
        />

        <div className="relative grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-5 m-4 sm:m-6 lg:m-10">

          <div className="space-y-4 min-w-0">

            <div className="text-4xl max-md:w-full max-md:m-auto sm:text-5xl font-bold leading-tight">

              <span>
                Premium <span className="text-amber-600">quality</span>
              </span>

              <span className="flex flex-wrap items-center gap-2">
                Food for your
                <img
                  src={Bananna}
                  alt=""
                  className="w-8 sm:w-10 inline-block shrink-0"
                />
                <span className="text-amber-600">healthy</span>
              </span>

              <span className="flex flex-wrap items-center gap-2">
                <img
                  src={Apple}
                  alt=""
                  className="w-8 sm:w-10 inline-block shrink-0"
                />
                <span className="text-amber-600">& Daily Life</span>
              </span>

            </div>

            <p className="text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5 w-full">

              <input
                className="border w-full sm:w-80 max-w-full py-2 pl-4 rounded-lg"
                type="text"
                placeholder="Enter your delivery location"
              />

              <button className="border bg-black text-white p-2 rounded-lg whitespace-nowrap">
                Get Started
              </button>

            </div>

            <p>Popular cities in India</p>

            <div className="flex flex-wrap items-center gap-3">
              <span>Hyderabad</span>
              <span className="text-amber-600">Chennai</span>
              <span>Mumbai</span>
              <span className="text-amber-600">Bangalore</span>
              <span>Delhi</span>
              <span className="text-amber-600">Kolkata</span>
            </div>

          </div>

          <div className="relative flex items-center justify-center gap-2 sm:gap-4 w-full min-w-0">

            <img
              src={Bg1}
              alt=""
              className="w-[65%] sm:w-[60%] md:w-[55%] lg:w-[70%] xl:w-auto lg:h-120 max-w-full object-contain"
            />

            <img
              src={Bg2}
              alt=""
              className="w-[30%] sm:w-[25%] md:w-[22%] lg:w-60 max-w-full object-contain"
            />

          </div>

        </div>
      </div>
    </>
  );
};

export default Hero;