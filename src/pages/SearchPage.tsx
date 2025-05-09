
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SearchFilters from "@/components/search/SearchFilters";
import PhotographerCard from "@/components/search/PhotographerCard";
import NoResults from "@/components/search/NoResults";

// Sample photographers data
const samplePhotographers = [
  {
    id: 1,
    name: "Emily Johnson",
    specialty: "Ģimene un Jaundzimušie",
    location: "Rīga, Centrs",
    rating: 4.9,
    reviewCount: 124,
    price: "€250",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    verified: true,
    description: "Specializējos dabiskā apgaismojuma fotogrāfijā, kas iemūžina autentiskus ģimenes mirkļus. Vairāk nekā 8 gadu pieredze darbā ar ģimenēm un jaundzimušajiem."
  },
  {
    id: 2,
    name: "Michael Chen",
    specialty: "Ģimene un Grūtniecība",
    location: "Jūrmala",
    rating: 4.8,
    reviewCount: 98,
    price: "€300",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    verified: true,
    description: "Godalgots fotogrāfs, kas rada mākslinieciskus ģimenes portretus ar mūsdienīgu pieskārienu. Iemūžinu grūtniecības skaistumu un ģimenes saites."
  },
  {
    id: 3,
    name: "Sophia Martinez",
    specialty: "Bērni un Ģimene",
    location: "Sigulda",
    rating: 5.0,
    reviewCount: 87,
    price: "€200",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    verified: true,
    description: "Jautras un aizraujošas fotosesijas, kas patīk bērniem! Radošas un spontānas ģimenes fotosesijas, kas atklāj patiesas personības un emocijas."
  },
  {
    id: 4,
    name: "David Wilson",
    specialty: "Ģimene un Pasākumi",
    location: "Ventspils",
    rating: 4.7,
    reviewCount: 56,
    price: "€275",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    verified: true,
    description: "Dokumentālā stila fotogrāfija, kas stāsta jūsu ģimenes unikālo stāstu. Specializējos spontānu mirkļu tveršanā īpašu notikumu un ikdienas dzīves laikā."
  },
  {
    id: 5,
    name: "Aisha Patel",
    specialty: "Grūtniecība un Jaundzimušie",
    location: "Rīga, Āgenskalns",
    rating: 4.9,
    reviewCount: 72,
    price: "€325",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    verified: true,
    description: "Veidoju sapņainus, mākslinieciskus portretus topošajām māmiņām un jaundzimušajiem. Apmācīta drošai jaundzimušo pozēšanai, ar mājīgu, pilnībā aprīkotu studiju."
  }
];

const SearchPage = () => {
  const [photographers, setPhotographers] = useState(samplePhotographers);
  const [filteredPhotographers, setFilteredPhotographers] = useState(samplePhotographers);
  const [searchCriteria, setSearchCriteria] = useState({
    location: "",
    type: [] as string[],
    date: "",
    priceRange: [50, 500] as [number, number],
    rating: ""
  });

  const handleSearch = (criteria: any) => {
    setSearchCriteria(criteria);
    
    let filtered = [...photographers];
    
    // Filter by location
    if (criteria.location) {
      filtered = filtered.filter(photographer => 
        photographer.location.toLowerCase().includes(criteria.location.toLowerCase())
      );
    }
    
    // Filter by photography type
    if (criteria.type && criteria.type.length > 0) {
      filtered = filtered.filter(photographer => {
        return criteria.type.some((type: string) => 
          photographer.specialty.toLowerCase().includes(type.toLowerCase())
        );
      });
    }
    
    // Filter by price range
    filtered = filtered.filter(photographer => {
      const price = parseInt(photographer.price.replace(/[^0-9]/g, ''));
      return price >= criteria.priceRange[0] && price <= criteria.priceRange[1];
    });
    
    // Filter by rating
    if (criteria.rating) {
      const ratingValue = parseFloat(criteria.rating.replace('plus', ''));
      filtered = filtered.filter(photographer => photographer.rating >= ratingValue);
    }
    
    setFilteredPhotographers(filtered);
  };

  return (
    <Layout>
      <div className="bg-secondary/50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-serif font-medium mb-2">Atrodiet savu fotogrāfu</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Pārlūkojiet un sazinieties ar pārbaudītiem fotogrāfiem jūsu apkārtnē
          </p>
          
          <SearchFilters onSearch={handleSearch} />
          
          <div className="space-y-6">
            {filteredPhotographers.length > 0 ? filteredPhotographers.map((photographer) => (
              <PhotographerCard key={photographer.id} {...photographer} />
            )) : (
              <NoResults />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SearchPage;
