import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import logo from '../assets/logo.png';



const TopNavigation = () => {
  
        
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(true); // toggle this to test login/logout
  const [showDropdown, setShowDropdown] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowDropdown(false);
    navigate('/Login');
  };

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-white shadow-md">
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="Logo" className="h-10 w-60" />
      </Link>

      {/* Search Bar */}
      <div className="flex items-center w-1/3">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded-r-md">
          <FaSearch />
        </button>
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center space-x-4">
        {/* Become a Supplier */}
        <Link to="/supplier" className="text-black-600  font-semibold">
          Become a Supplier
        </Link>

        {/* Profile */}
        {isLoggedIn ? (
          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button className="text-gray-600 text-xl">
              <FaUser />
            </button>

            {/* Dropdown */}
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md border z-10">
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
