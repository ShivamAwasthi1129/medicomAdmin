"use client";
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'; // Import hamburger icon
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineClose } from 'react-icons/ai'; // Import close icon
import SearchBar from './search';

const Navbar = ({ setActiveComponent }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-white dark:border-gray-600 dark:bg-cyan-200/80 w-full">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-2">
          {/* Logo */}
          <a
            href="https://flowbite.com"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://images.squarespace-cdn.com/content/v1/60aefe75c1a8f258e529fbac/1622081456984-G5MG4OZZJFVIM3R01YN7/jkare-2.png?format=1500w"
              className="lg:h-9 sm: h-7"
              alt="Logo"
            />
          </a>

          {/* Full Menu - Desktop */}
          <div className="hidden md:flex md:flex-1 justify-center">
            <ul className="flex space-x-8">
              <li>
                <button
                  onClick={() => setActiveComponent('SalesEarnings')}
                  className="block py-2 px-3 text-gray-900 rounded"
                >
                  Sales & Earnings
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveComponent('Prescription')}
                  className="block py-2 px-3 text-gray-900 rounded"
                >
                  Prescription
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveComponent('Orders')}
                  className="block py-2 px-3 text-gray-900 rounded"
                >
                  Orders
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveComponent('TopCustomers')}
                  className="block py-2 px-3 text-gray-900 rounded"
                >
                  Top Customers
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveComponent('TopSellingProducts')}
                  className="block py-2 px-3 text-gray-900 rounded"
                >
                  Top Selling Products
                </button>
              </li>
            </ul>
          </div>

          {/* Search and Login Icons - Always aligned to the right */}
          <div className="flex items-center space-x-4 ml-auto">
            <SearchBar />
            <button className="text-gray-900">
            <FaUserCircle className='lg:text-3xl'/>
            </button>

            {/* Hamburger Icon */}
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 md:hidden"
            >
              {isMobileMenuOpen ? (
                <AiOutlineClose className="h-6 w-6" aria-hidden="true" />
              ) : (
                <GiHamburgerMenu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="w-full md:hidden">
              <ul className="flex flex-col space-y-4 p-4">
                <li>
                  <button
                    onClick={() => setActiveComponent('SalesEarnings')}
                    className="block py-2 px-3 text-gray-900 rounded"
                  >
                    Sales & Earnings
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveComponent('Prescription')}
                    className="block py-2 px-3 text-gray-900 rounded"
                  >
                    Prescription
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveComponent('Orders')}
                    className="block py-2 px-3 text-gray-900 rounded"
                  >
                    Orders
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveComponent('TopCustomers')}
                    className="block py-2 px-3 text-gray-900 rounded"
                  >
                    Top Customers
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveComponent('TopSellingProducts')}
                    className="block py-2 px-3 text-gray-900 rounded"
                  >
                    Top Selling Products
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
