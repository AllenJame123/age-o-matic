import { Link, useLocation } from "react-router-dom";
import { Menu, X, Calendar } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-1">
            <Calendar className="h-7 w-7 text-primary" />
          </div>
          
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-neutral-gray hover:text-neutral-dark hover:bg-soft-gray focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <span className="sr-only">Open menu</span>
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>

          <div className="hidden md:flex md:space-x-6">
            <Link
              to="/"
              className={`text-base font-medium transition-colors duration-200 hover:text-primary ${
                location.pathname === "/" 
                  ? "text-primary" 
                  : "text-neutral-gray"
              }`}
            >
              Age Calculator
            </Link>
            <Link
              to="/difference"
              className={`text-base font-medium transition-colors duration-200 hover:text-primary ${
                location.pathname === "/difference"
                  ? "text-primary"
                  : "text-neutral-gray"
              }`}
            >
              Age Difference
            </Link>
            <Link
              to="/date-calculator"
              className={`text-base font-medium transition-colors duration-200 hover:text-primary ${
                location.pathname === "/date-calculator"
                  ? "text-primary"
                  : "text-neutral-gray"
              }`}
            >
              Date Calculator
            </Link>
            <Link
              to="/birthday-countdown"
              className={`text-base font-medium transition-colors duration-200 hover:text-primary ${
                location.pathname === "/birthday-countdown"
                  ? "text-primary"
                  : "text-neutral-gray"
              }`}
            >
              Birthday Countdown
            </Link>
            <Link
              to="/pregnancy-calculator"
              className={`text-base font-medium transition-colors duration-200 hover:text-primary ${
                location.pathname === "/pregnancy-calculator"
                  ? "text-primary"
                  : "text-neutral-gray"
              }`}
            >
              Pregnancy Age
            </Link>
            <Link
              to="/leap-year-calculator"
              className={`text-base font-medium transition-colors duration-200 hover:text-primary ${
                location.pathname === "/leap-year-calculator"
                  ? "text-primary"
                  : "text-neutral-gray"
              }`}
            >
              Leap Year
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
            className={`block px-3 py-2 rounded-md text-base font-display transition-colors duration-200 ${
              location.pathname === "/"
                ? "bg-soft-purple text-primary"
                : "text-neutral-gray hover:bg-soft-gray hover:text-primary"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Age Calculator
          </Link>
          <Link
            to="/difference"
            className={`block px-3 py-2 rounded-md text-base font-display transition-colors duration-200 ${
              location.pathname === "/difference"
                ? "bg-soft-purple text-primary"
                : "text-neutral-gray hover:bg-soft-gray hover:text-primary"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Age Difference
          </Link>
          <Link
            to="/date-calculator"
            className={`block px-3 py-2 rounded-md text-base font-display transition-colors duration-200 ${
              location.pathname === "/date-calculator"
                ? "bg-soft-purple text-primary"
                : "text-neutral-gray hover:bg-soft-gray hover:text-primary"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Date Calculator
          </Link>
          <Link
            to="/birthday-countdown"
            className={`block px-3 py-2 rounded-md text-base font-display transition-colors duration-200 ${
              location.pathname === "/birthday-countdown"
                ? "bg-soft-purple text-primary"
                : "text-neutral-gray hover:bg-soft-gray hover:text-primary"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Birthday Countdown
          </Link>
          <Link
            to="/pregnancy-calculator"
            className={`block px-3 py-2 rounded-md text-base font-display transition-colors duration-200 ${
              location.pathname === "/pregnancy-calculator"
                ? "bg-soft-purple text-primary"
                : "text-neutral-gray hover:bg-soft-gray hover:text-primary"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Pregnancy Age
          </Link>
          <Link
            to="/leap-year-calculator"
            className={`block px-3 py-2 rounded-md text-base font-display transition-colors duration-200 ${
              location.pathname === "/leap-year-calculator"
                ? "bg-soft-purple text-primary"
                : "text-neutral-gray hover:bg-soft-gray hover:text-primary"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Leap Year
          </Link>
        </div>
      </div>
    </nav>
  );
};