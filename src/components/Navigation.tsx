import { Link, useLocation } from "react-router-dom";
import { Menu, X, Calendar } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <nav className="bg-white shadow-lg mb-8 relative">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Calendar className="h-8 w-8 text-primary" />
          </div>
          
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-neutral-gray hover:text-neutral-dark hover:bg-soft-purple focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <span className="sr-only">Open menu</span>
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>

          <div className="hidden md:flex md:space-x-8">
            <Link
              to="/"
              className={`text-lg font-display transition-all duration-200 hover:text-primary ${
                location.pathname === "/" 
                  ? "text-primary border-b-2 border-primary" 
                  : "text-neutral-gray"
              }`}
            >
              Age Calculator
            </Link>
            <Link
              to="/difference"
              className={`text-lg font-display transition-all duration-200 hover:text-primary ${
                location.pathname === "/difference"
                  ? "text-primary border-b-2 border-primary"
                  : "text-neutral-gray"
              }`}
            >
              Age Difference
            </Link>
            <Link
              to="/date-calculator"
              className={`text-lg font-display transition-all duration-200 hover:text-primary ${
                location.pathname === "/date-calculator"
                  ? "text-primary border-b-2 border-primary"
                  : "text-neutral-gray"
              }`}
            >
              Date Calculator
            </Link>
            <Link
              to="/birthday-countdown"
              className={`text-lg font-display transition-all duration-200 hover:text-primary ${
                location.pathname === "/birthday-countdown"
                  ? "text-primary border-b-2 border-primary"
                  : "text-neutral-gray"
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
        </div>
      </div>
    </nav>
  );
};