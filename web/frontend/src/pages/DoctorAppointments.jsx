import React from "react";
import DoctorSidebar from "../components/DoctorSidebar";
import Header from "../components/Header";

const appointments = [
  { patient: "John Doe", time: "10:00 AM", type: "Follow-up" },
  { patient: "Jane Smith", time: "11:30 AM", type: "New Symptom" },
];

const DoctorAppointments = () => {
  return (
    <div className="flex">
      <DoctorSidebar />
      <div className="flex-1">
        <Header title="Appointments" />
        <div className="p-6 space-y-6">
          {appointments.map((appointment, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md rounded-lg border-l-4 border-blue-500"
            >
              <h3 className="text-lg font-bold">{appointment.patient}</h3>
              <p>{appointment.type}</p>
              <p className="text-gray-600">{appointment.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorAppointments;