
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="hero-gradient py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-6 max-w-4xl mx-auto">
          Capture your family's precious moments with trusted photographers
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-muted-foreground">
          Find verified, professional photographers who specialize in family photography. Book with confidence and create lasting memories.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="gap-2">
            <Link to="/search">
              <Search size={18} />
              Find a Photographer
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/how-it-works">
              How It Works
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
