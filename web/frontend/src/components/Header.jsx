import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ title, role = "user" }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleViewProfile = () => {
    if (role === "admin") {
      navigate("/admin/profile");
    } else {
      navigate("/user/profile");
    }
  };

  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">{title}</h1>
      <div className="relative">
        {/* Avatar */}
        <button onClick={toggleDropdown} className="flex items-center focus:outline-none">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile Avatar"
            className="w-10 h-10 rounded-full"
          />
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-48">
            <ul className="py-2">
              <li>
                <button
                  onClick={handleViewProfile}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-t-lg"
                >
                  View Profile
                </button>
              </li>
              <li>
                <button
                  onClick={() => alert("Logout functionality here!")}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-b-lg"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;