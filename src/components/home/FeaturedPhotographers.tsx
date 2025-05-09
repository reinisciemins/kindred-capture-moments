
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample photographers data
const photographers = [
  {
    id: 1,
    name: "Līga Kļaviņa",
    specialty: "Ģimene un Jaundzimušie",
    location: "Rīga",
    rating: 4.9,
    reviewCount: 124,
    price: "€250",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    verified: true
  },
  {
    id: 2,
    name: "Jānis Bērziņš",
    specialty: "Ģimene un Grūtniecība",
    location: "Jūrmala",
    rating: 4.8,
    reviewCount: 98,
    price: "€300",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    verified: true
  },
  {
    id: 3,
    name: "Anna Zariņa",
    specialty: "Bērni un Ģimene",
    location: "Sigulda",
    rating: 5.0,
    reviewCount: 87,
    price: "€200",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    verified: true
  }
];

const FeaturedPhotographers = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Izceltie fotogrāfi</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Atklājiet mūsu izraudzīto uzticamo ģimeņu fotogrāfu izlasi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photographers.map((photographer) => (
            <Link key={photographer.id} to={`/photographer/${photographer.id}`}>
              <Card className="overflow-hidden card-hover">
                <div className="relative h-64 w-full">
                  <img 
                    src={photographer.image} 
                    alt={photographer.name} 
                    className="h-full w-full object-cover"
                  />
                  {photographer.verified && (
                    <Badge className="absolute top-4 right-4 bg-primary text-white">
                      Pārbaudīts
                    </Badge>
                  )}
                </div>
                <CardContent className="pt-6 pb-4">
                  <h3 className="text-lg font-medium mb-1">{photographer.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{photographer.specialty} • {photographer.location}</p>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                      <span className="ml-1 text-sm font-medium">{photographer.rating}</span>
                      <span className="ml-1 text-sm text-muted-foreground">({photographer.reviewCount})</span>
                    </div>
                    <span className="font-medium">Sākot no {photographer.price}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/search" 
            className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
          >
            Skatīt visus fotogrāfus 
            <svg className="ml-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPhotographers;
