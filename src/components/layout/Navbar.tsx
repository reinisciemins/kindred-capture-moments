
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4 px-4 md:px-8 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="font-serif text-2xl font-bold text-foreground">Kindred</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/search" className="font-medium text-foreground hover:text-primary transition-colors">Find Photographers</Link>
          <Link to="/how-it-works" className="font-medium text-foreground hover:text-primary transition-colors">How It Works</Link>
          <Link to="/for-photographers" className="font-medium text-foreground hover:text-primary transition-colors">For Photographers</Link>
          <Button asChild variant="ghost">
            <Link to="/login">Log in</Link>
          </Button>
          <Button asChild>
            <Link to="/signup">Sign up</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-50 animate-fade-in">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            <Link to="/search" className="py-2 font-medium text-foreground hover:text-primary transition-colors">
              Find Photographers
            </Link>
            <Link to="/how-it-works" className="py-2 font-medium text-foreground hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link to="/for-photographers" className="py-2 font-medium text-foreground hover:text-primary transition-colors">
              For Photographers
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Button asChild variant="ghost" className="justify-center">
                <Link to="/login">Log in</Link>
              </Button>
              <Button asChild className="justify-center">
                <Link to="/signup">Sign up</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
