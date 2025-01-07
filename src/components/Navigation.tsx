import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <nav className="bg-white shadow-sm mb-8 relative">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="text-lg font-medium text-gray-900"
          >
            Age Calculator
          </Link>
          
          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
          >
            <span className="sr-only">Open menu</span>
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:space-x-8">
            <Link
              to="/"
              className={`text-lg font-medium transition-colors hover:text-gray-600 ${
                location.pathname === "/" ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Age Calculator
            </Link>
            <Link
              to="/difference"
              className={`text-lg font-medium transition-colors hover:text-gray-600 ${
                location.pathname === "/difference" ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Age Difference
            </Link>
            <Link
              to="/date-calculator"
              className={`text-lg font-medium transition-colors hover:text-gray-600 ${
                location.pathname === "/date-calculator" ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Date Calculator
            </Link>
            <Link
              to="/birthday-countdown"
              className={`text-lg font-medium transition-colors hover:text-gray-600 ${
                location.pathname === "/birthday-countdown" ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Birthday Countdown
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden absolute top-16 inset-x-0 z-50 bg-white shadow-lg`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              location.pathname === "/"
                ? "bg-soft-purple text-gray-900"
                : "text-gray-500 hover:bg-soft-gray hover:text-gray-900"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Age Calculator
          </Link>
          <Link
            to="/difference"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              location.pathname === "/difference"
                ? "bg-soft-purple text-gray-900"
                : "text-gray-500 hover:bg-soft-gray hover:text-gray-900"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Age Difference
          </Link>
          <Link
            to="/date-calculator"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              location.pathname === "/date-calculator"
                ? "bg-soft-purple text-gray-900"
                : "text-gray-500 hover:bg-soft-gray hover:text-gray-900"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Date Calculator
          </Link>
          <Link
            to="/birthday-countdown"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              location.pathname === "/birthday-countdown"
                ? "bg-soft-purple text-gray-900"
                : "text-gray-500 hover:bg-soft-gray hover:text-gray-900"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Birthday Countdown
          </Link>
        </div>
      </div>
    </nav>
  );
};