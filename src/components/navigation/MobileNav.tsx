import { Link, useLocation } from "react-router-dom";
import { MobileNavLink } from "./MobileNavLink";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  const location = useLocation();
  
  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } md:hidden absolute top-16 inset-x-0 z-50 bg-white shadow-lg`}
    >
      <div className="px-2 pt-2 pb-3 space-y-1">
        <MobileNavLink to="/" currentPath={location.pathname} onClick={onClose}>
          Age Calculator
        </MobileNavLink>
        <MobileNavLink to="/difference" currentPath={location.pathname} onClick={onClose}>
          Age Difference
        </MobileNavLink>
        <MobileNavLink to="/date-calculator" currentPath={location.pathname} onClick={onClose}>
          Date Calculator
        </MobileNavLink>
        <MobileNavLink to="/birthday-countdown" currentPath={location.pathname} onClick={onClose}>
          Birthday Countdown
        </MobileNavLink>
        <MobileNavLink to="/pregnancy-calculator" currentPath={location.pathname} onClick={onClose}>
          Pregnancy Age
        </MobileNavLink>
        <MobileNavLink to="/leap-year-calculator" currentPath={location.pathname} onClick={onClose}>
          Leap Year
        </MobileNavLink>
        <MobileNavLink to="/retirement" currentPath={location.pathname} onClick={onClose}>
          Retirement
        </MobileNavLink>
        <MobileNavLink to="/what-generation-am-i" currentPath={location.pathname} onClick={onClose}>
          Generational Cohort
        </MobileNavLink>
      </div>
    </div>
  );
};