
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-medium">Kindred</h3>
            <p className="text-muted-foreground">
              Connecting families with trusted photographers to capture life's precious moments.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Discover</h4>
            <ul className="space-y-2">
              <li><Link to="/search" className="text-muted-foreground hover:text-primary transition-colors">Find Photographers</Link></li>
              <li><Link to="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors">How It Works</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Information</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Tips & Inspiration</Link></li>
              <li><Link to="/for-photographers" className="text-muted-foreground hover:text-primary transition-colors">For Photographers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Help</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Kindred. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <span className="sr-only">Instagram</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <span className="sr-only">Facebook</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <span className="sr-only">Pinterest</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M20 12h2"/><path d="M2 12h2"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
