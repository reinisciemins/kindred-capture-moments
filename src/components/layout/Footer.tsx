
import { Link } from 'react-router-dom';

const Footer = () => {
  return <footer className="bg-secondary py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-medium">Kindred</h3>
            <p className="text-muted-foreground">
              Savienojam ģimenes ar uzticamiem fotogrāfiem, lai iemūžinātu dzīves vērtīgos mirkļus.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Atklāt</h4>
            <ul className="space-y-2">
              <li><Link to="/search" className="text-muted-foreground hover:text-primary transition-colors">Atrast fotogrāfus</Link></li>
              <li><Link to="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors">Kā tas darbojas</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Cenas</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Informācija</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">Par mums</Link></li>
              
              <li><Link to="/for-photographers" className="text-muted-foreground hover:text-primary transition-colors">Fotogrāfiem</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Palīdzība</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Sazināties ar mums</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">Biežāk uzdotie jautājumi</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privātuma politika</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">Lietošanas noteikumi</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Kindred. Visas tiesības aizsargātas.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <span className="sr-only">Instagram</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <span className="sr-only">Facebook</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>;
};

export default Footer;
