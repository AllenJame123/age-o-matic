import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="bg-white shadow-sm mb-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex space-x-8 h-16 items-center">
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
            Age Difference Calculator
          </Link>
        </div>
      </div>
    </nav>
  );
};