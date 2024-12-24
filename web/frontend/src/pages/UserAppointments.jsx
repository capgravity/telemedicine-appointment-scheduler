import React from "react";
import UserSidebar from "../components/UserSidebar";
import Header from "../components/Header";

const appointments = [
  {
    doctor: "Dr. Sarah Clarke",
    type: "Follow-up Visit",
    date: "2024-12-26",
    time: "10:00 AM - 10:30 AM",
    status: "Confirmed",
  },
  {
    doctor: "Dr. Maria Kenny",
    type: "New Symptom Visit",
    date: "2024-12-28",
    time: "11:30 AM - 12:00 PM",
    status: "Pending",
  },
];

const UserAppointments = () => {
  return (
    <div className="flex">
      <UserSidebar />
      <div className="flex-1">
        <Header title="Appointments" />
        <div className="p-6 space-y-6">
          {appointments.map((appointment, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md rounded-lg border-l-4 border-blue-500"
            >
              <h3 className="text-lg font-bold">{appointment.doctor}</h3>
              <p>{appointment.type}</p>
              <p className="text-gray-600">
                {appointment.date} | {appointment.time}
              </p>
              <span
                className={`inline-block px-3 py-1 text-sm rounded-md ${
                  appointment.status === "Confirmed"
                    ? "bg-green-100 text-green-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {appointment.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserAppointments;