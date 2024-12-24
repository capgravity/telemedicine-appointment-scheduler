import React from "react";
import UserSidebar from "../components/UserSidebar";
import Header from "../components/Header";

const UserDashboard = () => {
  return (
    <div className="flex">
      <UserSidebar />
      <div className="flex-1 p-6 bg-gray-100">
        <Header title="User Dashboard" role="user" />
        
        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
            <p className="text-gray-600">
              <span className="font-medium">Next Appointment:</span> 25th Dec 2024, 10:30 AM
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Doctor:</span> Dr. Neel Galvan
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              View All
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Pending Bills</h2>
            <p className="text-gray-600">
              <span className="font-medium">Total Due:</span> ₹4,500
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Last Payment:</span> ₹1,000 on 15th Dec 2024
            </p>
            <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
              Pay Now
            </button>
          </div>
        </div>

        {/* Additional Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
          <ul className="space-y-2">
            <li>Booked an appointment with Dr. Sarah Clarke on 20th Dec.</li>
            <li>Paid ₹1,000 for past bills on 15th Dec.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;