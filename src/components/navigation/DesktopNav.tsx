import { Link, useLocation } from "react-router-dom";
import { NavLink } from "./NavLink";

export const DesktopNav = () => {
  const location = useLocation();
  
  return (
    <div className="hidden md:flex md:space-x-6">
      <NavLink to="/" currentPath={location.pathname}>
        Age Calculator
      </NavLink>
      <NavLink to="/difference" currentPath={location.pathname}>
        Age Difference
      </NavLink>
      <NavLink to="/date-calculator" currentPath={location.pathname}>
        Date Calculator
      </NavLink>
      <NavLink to="/birthday-countdown" currentPath={location.pathname}>
        Birthday Countdown
      </NavLink>
      <NavLink to="/pregnancy-calculator" currentPath={location.pathname}>
        Pregnancy Age
      </NavLink>
      <NavLink to="/leap-year-calculator" currentPath={location.pathname}>
        Leap Year
      </NavLink>
      <NavLink to="/retirement" currentPath={location.pathname}>
        Retirement
      </NavLink>
      <NavLink to="/what-generation-am-i" currentPath={location.pathname}>
        Generational Cohort
      </NavLink>
    </div>
  );
};