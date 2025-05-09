
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NoResults = () => {
  return (
    <div className="text-center py-12 px-4">
      <div className="bg-secondary/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
        <Search size={24} className="text-muted-foreground" />
      </div>
      <h3 className="text-xl font-medium mb-2">No photographers found</h3>
      <p className="text-muted-foreground mb-6 max-w-md mx-auto">
        We couldn't find any photographers matching your criteria. Try adjusting your filters or search in a different area.
      </p>
      <Button asChild>
        <Link to="/search">Reset All Filters</Link>
      </Button>
    </div>
  );
};

export default NoResults;
