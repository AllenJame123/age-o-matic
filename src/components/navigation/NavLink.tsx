import { Link } from "react-router-dom";

interface NavLinkProps {
  to: string;
  currentPath: string;
  children: React.ReactNode;
}

export const NavLink = ({ to, currentPath, children }: NavLinkProps) => (
  <Link
    to={to}
    className={`text-base font-medium transition-colors duration-200 hover:text-primary ${
      currentPath === to 
        ? "text-primary" 
        : "text-neutral-gray"
    }`}
  >
    {children}
  </Link>
);