
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NoResults = () => {
  return (
    <div className="text-center py-12 px-4">
      <div className="bg-secondary/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
        <Search size={24} className="text-muted-foreground" />
      </div>
      <h3 className="text-xl font-medium mb-2">Fotogrāfi nav atrasti</h3>
      <p className="text-muted-foreground mb-6 max-w-md mx-auto">
        Mēs nevarējām atrast nevienu fotogrāfu, kas atbilstu jūsu kritērijiem. Mēģiniet pielāgot filtrus vai meklēt citā teritorijā.
      </p>
      <Button asChild>
        <Link to="/search">Atiestatīt visus filtrus</Link>
      </Button>
    </div>
  );
};

export default NoResults;
