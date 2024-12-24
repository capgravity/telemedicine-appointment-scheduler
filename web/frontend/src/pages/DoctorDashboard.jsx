import React from "react";
import DoctorSidebar from "../components/DoctorSidebar";
import Header from "../components/Header";

const DoctorDashboard = () => {
  return (
    <div className="flex">
      <DoctorSidebar />
      <div className="flex-1 p-6 bg-gray-100">
        <Header title="Admin Dashboard" role="admin" />
        
        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Today's Appointments</h2>
            <p className="text-gray-600">
              <span className="font-medium">Total Appointments:</span> 8
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Upcoming:</span> 3 appointments remaining today
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              View Schedule
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Earnings</h2>
            <p className="text-gray-600">
              <span className="font-medium">Total This Month:</span> ₹85,000
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Last Payment:</span> ₹15,000 on 20th Dec 2024
            </p>
            <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
              View Details
            </button>
          </div>
        </div>

        {/* Additional Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
          <ul className="space-y-2">
            <li>Completed an appointment with John Doe at 9:00 AM.</li>
            <li>Received payment of ₹5,000 for consulting fees on 22nd Dec.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;