import { useState } from "react";
import { Menu, X, Calendar } from "lucide-react";
import { DesktopNav } from "./navigation/DesktopNav";
import { MobileNav } from "./navigation/MobileNav";

export const Navigation = () => {
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

          <DesktopNav />
        </div>
      </div>

      <MobileNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </nav>
  );
};