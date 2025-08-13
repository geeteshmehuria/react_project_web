import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import logo from '../assets/logo.png';



const TopNavigation = () => {
  
   //for searchbar     
   const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapperRef = useRef(null);



  const [isLoggedIn, setIsLoggedIn] = useState(true); // toggle this to test login/logout
  const [showDropdown, setShowDropdown] = useState(false);

  const navigate = useNavigate();

  
  const suggestions = ['Top', 'Shirt', 'Kurti','Jeans','Saree','bangle'];
  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowDropdown(false);
    navigate('/Login');
  };

  //for searchbar
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex items-center  px-6 py-3 bg-white shadow-md">
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="Logo" className="h-10 w-50 ml-8" />
      </Link>

      {/* Search Bar */}
      <div className="flex flex-col items-start w-2/4 mr-12 ml-12 relative " ref={wrapperRef}>
            
            {/* Search Input */}
      <div className="flex items-center w-full relative">
        <FaSearch className="absolute left-3 text-gray-500 pointer-events-none" />
        <input
          type="text"
          placeholder="TRY Saare, kurti or search by product code"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          className="w-full pl-10 pr-4 py-2 border-2 border-black font-bold rounded-md focus:outline-none"
        />
      </div>

      {/* Suggestions Dropdown */}
      {showSuggestions && (
        <ul className="absolute top-full mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10 flex gap-2 mt-2 flex-wrap">
          {suggestions.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                setSearchQuery(item);
                setShowSuggestions(false);
              }}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>

      {/* Right Side Icons */}
      <div className="flex items-center gap-x-8 ">
        {/* Become a Supplier */}
        <Link to="/supplier" className="text-black-600 font-semibold">
          Become a Supplier
        </Link>

     

{/* Profile */}
{isLoggedIn ? (
  <div
    className="relative inline-block"
    onMouseEnter={() => setShowDropdown(true)}
    onMouseLeave={() => setShowDropdown(false)}
  >
    {/* Profile Icon */}
    <button className="text-gray-600 text-xl mr-auto">
      <FaUser />
    </button>

    {/* Dropdown */}
    {showDropdown && (
      <div className="absolute right-0  w-40 bg-white shadow-lg rounded-md border z-10">
        <Link
          to="/orders"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          My Orders
        </Link>
        <Link
          to="/delete-account"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Delete Account
        </Link>
        <button
          onClick={handleLogout}
          className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
        >
          Logout
        </button>
      </div>
    )}
  </div>
) : (
  <Link
    to="/login"
    className="px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50"
  >
    Login
  </Link>
)}


        {/* Cart */}
        <button
          onClick={() => navigate('/cart')}
          className="text-gray-600 text-xl"
        >
          <FaShoppingCart />
        </button>
      </div>
    </nav>
  );
};

export default TopNavigation;
