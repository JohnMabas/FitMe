import { BiRepeat } from "react-icons/bi";

export default function CTA() {
  return (
    <section className="w-full bg-[#FC8019] px-4 py-8 sm:px-6 sm:py-10 md:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-4 sm:gap-5 lg:flex-row lg:gap-6">
        <span className="text-center text-base font-medium text-white sm:text-lg lg:whitespace-nowrap">
          Search by Restaurant
        </span>

        <BiRepeat className="text-2xl text-white sm:text-3xl" />

        <input
          className="w-full rounded-lg border border-white bg-transparent px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/80 focus:ring-2 focus:ring-white sm:text-base lg:max-w-md"
          type="text"
          placeholder="Enter item or restaurant you are looking for"
        />

        <button className="w-full rounded-lg border border-black bg-black px-6 py-2.5 text-sm text-white transition hover:bg-gray-900 sm:w-auto sm:text-base">
          Get Started
        </button>
      </div>
    </section>
  );
}
