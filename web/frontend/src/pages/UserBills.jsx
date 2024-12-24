import React from "react";
import UserSidebar from "../components/UserSidebar";
import Header from "../components/Header";

const bills = [
  { id: 101, amount: "₹1,500", dueDate: "2024-12-30", status: "Pending" },
  { id: 102, amount: "₹2,000", dueDate: "2024-12-31", status: "Paid" },
];

const UserBills = () => {
  return (
    <div className="flex">
      <UserSidebar />
      <div className="flex-1">
        <Header title="Bills" />
        <div className="p-6 space-y-4">
          {bills.map((bill, index) => (
            <div
              key={index}
              className="p-4 bg-white shadow-md rounded-lg flex justify-between items-center"
            >
              <div>
                <p className="font-bold">Bill ID: {bill.id}</p>
                <p>Amount: {bill.amount}</p>
                <p>Due Date: {bill.dueDate}</p>
              </div>
              <span
                className={`inline-block px-3 py-1 text-sm rounded-md ${
                  bill.status === "Paid"
                    ? "bg-green-100 text-green-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {bill.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserBills;