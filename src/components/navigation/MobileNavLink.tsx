import { Link } from "react-router-dom";

interface MobileNavLinkProps {
  to: string;
  currentPath: string;
  onClick: () => void;
  children: React.ReactNode;
}

export const MobileNavLink = ({ to, currentPath, onClick, children }: MobileNavLinkProps) => (
  <Link
    to={to}
    className={`block px-3 py-2 rounded-md text-base font-display transition-colors duration-200 ${
      currentPath === to
        ? "bg-soft-purple text-primary"
        : "text-neutral-gray hover:bg-soft-gray hover:text-primary"
    }`}
    onClick={onClick}
  >
    {children}
  </Link>
);