import { FaSearch } from 'react-icons/fa';

const NavBar = () => {
    return ( 
        <>
        <nav>
            <span>
                <b className=''>FitMe</b>
            </span>
            <div>
                <input type="text" placeholder="Enter item or restaurant you are looking for" />
                <span>{FaSearch}</span>
            </div>
        </nav>
            
        </>
     );
}
 
export default NavBar;