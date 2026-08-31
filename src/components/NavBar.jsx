import { BiShoppingBag } from "react-icons/bi";
import logo from "../assets/image/FitMe-logo.png";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router";

const NavBar = () => {

  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (!search.trim()) return;

   navigate(`/search?q=${encodeURIComponent(search.trim())}`);
   };

  return (
    <>
      <nav className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 m-4 sm:m-6 lg:m-7">
        <span onClick={() => navigate("/home")} className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-auto" />
          <b className="text-lg">FitMe</b>
        </span>

        <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
        
          <form
        onSubmit={handleSearch}
        className="border rounded-lg w-full sm:w-112.5 p-1 flex justify-center items-center gap-3"
      >
        <input
          className="w-full min-w-0 text-md outline-none"
          type="text"
          placeholder="Enter recipe you are looking for"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button type="submit">
          <FaSearch className="text-lg shrink-0" />
        </button>
      </form>
          <BiShoppingBag className="text-2xl self-center sm:self-auto shrink-0" />
          <button className="border px-5 py-2 bg-black text-white font-bold rounded-lg whitespace-nowrap">
            singIn
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;