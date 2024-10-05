"use client";
import React, { useState } from "react";
import Orders from "./components/myorders";
import Navbar from "./components/navbar";
import Prescription from "./components/prescription";
import Dashboard from "./components/dashboard";
import TopCustomers from "./components/customers";
import TopSellingProducts from "./components/products";

const Page = () => {
  const [activeComponent, setActiveComponent] = useState("SalesEarnings");

  const renderComponent = () => {
    switch (activeComponent) {
      case "SalesEarnings":
        return <Dashboard />;
      case "Orders":
        return <Orders />;
      case "TopCustomers":
        return <TopCustomers />;
      case "TopSellingProducts":
        return <TopSellingProducts />;
      case "Prescription":
        return <Prescription />;
      default:
        return <div>Select an option from the navbar</div>;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Fixed Navbar */}
      <Navbar setActiveComponent={setActiveComponent} />
      <div className="flex-1 flex  justify-center w-full p-4 overflow-y-auto">
        <div className="w-full max-w-8xl flex flex-col items-center">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default Page;
