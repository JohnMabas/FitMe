
// import logo from 'src/assets/image/FitMe-logo.png'

import { FaSearch, FaShoppingBag } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";

const NavBar = () => {
    return ( 
        <>
        <nav className="grid grid-cols-2 justify-center items-center m-10">
            <span>
                {/* {logo} */}
                <b className='text-lg'>FitMe</b>
            </span >
            <div className="flex justify-between items-center">
                <div className='border rounded-lg w-112.5 p-1 flex justify-center items-center gap-5'>
                <input className='w-84 text-md' type="text" placeholder="Enter item or restaurant you are looking for" />
                <FaSearch className=" text-lg"/>
            </div>

            <FaShoppingBag className="text-2xl"/>
            
            <button className="border px-5 py-2 bg-black text-white font-bold rounded-lg ">singIn</button>

            </div>


            

        </nav>
            
        </>
     );
}
 
export default NavBar;