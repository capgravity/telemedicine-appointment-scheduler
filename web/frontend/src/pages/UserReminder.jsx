import React from "react";
import UserSidebar from "../components/UserSidebar";
import Header from "../components/Header";

const reminders = [
  { message: "Follow-up visit with Dr. Sarah Clarke on 2024-12-26" },
  { message: "Pay your pending bills by 2024-12-30" },
];

const UserReminders = () => {
  return (
    <div className="flex">
      <UserSidebar />
      <div className="flex-1">
        <Header title="Reminders" />
        <div className="p-6 space-y-4">
          {reminders.map((reminder, index) => (
            <div
              key={index}
              className="bg-blue-100 text-blue-700 p-4 rounded-lg shadow-md"
            >
              {reminder.message}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserReminders;