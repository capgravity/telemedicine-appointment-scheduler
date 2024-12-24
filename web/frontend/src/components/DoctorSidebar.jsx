import React from "react";
import { NavLink } from "react-router-dom";

const DoctorSidebar = () => {
  const links = [
    { path: "/admin/dashboard", label: "Dashboard", icon: "📊" },
    { path: "/admin/appointments", label: "Appointments", icon: "📅" },
    { path: "/admin/messages", label: "Messages", icon: "✉️" },
  ];

  return (
    <div className="w-64 bg-gray-100 h-screen p-6 shadow-md">
      <h2 className="text-xl font-bold mb-6">TeleMedicine - Doctor</h2>
      <nav className="space-y-4">
        {links.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center p-3 rounded-md ${
                isActive ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-200"
              }`
            }
          >
            <span className="text-xl mr-3">{link.icon}</span>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default DoctorSidebar;