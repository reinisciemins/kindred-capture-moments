
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    toast.success("Veiksmīga izrakstīšanās");
    navigate("/");
  };

  return (
    <nav className="bg-white py-4 px-4 md:px-8 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="font-serif text-2xl font-bold text-foreground">Kindred</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/search" className="font-medium text-foreground hover:text-primary transition-colors">Atrast fotogrāfus</Link>
          <Link to="/how-it-works" className="font-medium text-foreground hover:text-primary transition-colors">Kā tas darbojas</Link>
          <Link to="/pricing" className="font-medium text-foreground hover:text-primary transition-colors">Cenas</Link>
          
          {!user ? (
            <>
              <Button asChild variant="ghost">
                <Link to="/login">Pieslēgties</Link>
              </Button>
              <Button asChild>
                <Link to="/signup">Reģistrēties</Link>
              </Button>
            </>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Mans konts</DropdownMenuLabel>
                <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/dashboard" className="cursor-pointer">Kontrolpanelis</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Izrakstīties</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
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
              Atrast fotogrāfus
            </Link>
            <Link to="/how-it-works" className="py-2 font-medium text-foreground hover:text-primary transition-colors">
              Kā tas darbojas
            </Link>
            <Link to="/pricing" className="py-2 font-medium text-foreground hover:text-primary transition-colors">
              Cenas
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              {!user ? (
                <>
                  <Button asChild variant="ghost" className="justify-center">
                    <Link to="/login">Pieslēgties</Link>
                  </Button>
                  <Button asChild className="justify-center">
                    <Link to="/signup">Reģistrēties</Link>
                  </Button>
                </>
              ) : (
                <>
                  <Button asChild variant="ghost" className="justify-center">
                    <Link to="/dashboard">Kontrolpanelis</Link>
                  </Button>
                  <Button variant="ghost" onClick={handleLogout} className="justify-center">
                    Izrakstīties
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
