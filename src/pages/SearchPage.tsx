
import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import SearchFilters from "@/components/search/SearchFilters";
import PhotographerCard from "@/components/search/PhotographerCard";
import NoResults from "@/components/search/NoResults";
import SortOptions from "@/components/search/SortOptions";

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
    description: "Specializējos dabiskā apgaismojuma fotogrāfijā, kas iemūžina autentiskus ģimenes mirkļus. Vairāk nekā 8 gadu pieredze darbā ar ģimenēm un jaundzimušajiem.",
    availableDates: ["2025-05-15", "2025-05-16", "2025-05-20", "2025-05-25", "2025-05-30"]
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
    description: "Godalgots fotogrāfs, kas rada mākslinieciskus ģimenes portretus ar mūsdienīgu pieskārienu. Iemūžinu grūtniecības skaistumu un ģimenes saites.",
    availableDates: ["2025-05-12", "2025-05-13", "2025-05-22", "2025-05-23", "2025-06-05"]
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
    description: "Jautras un aizraujošas fotosesijas, kas patīk bērniem! Radošas un spontānas ģimenes fotosesijas, kas atklāj patiesas personības un emocijas.",
    availableDates: ["2025-05-10", "2025-05-11", "2025-05-17", "2025-05-18", "2025-05-24"]
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
    description: "Dokumentālā stila fotogrāfija, kas stāsta jūsu ģimenes unikālo stāstu. Specializējos spontānu mirkļu tveršanā īpašu notikumu un ikdienas dzīves laikā.",
    availableDates: ["2025-05-12", "2025-05-19", "2025-05-26", "2025-06-02", "2025-06-09"]
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
    description: "Veidoju sapņainus, mākslinieciskus portretus topošajām māmiņām un jaundzimušajiem. Apmācīta drošai jaundzimušo pozēšanai, ar mājīgu, pilnībā aprīkotu studiju.",
    availableDates: ["2025-05-14", "2025-05-21", "2025-05-28", "2025-06-04", "2025-06-11"]
  }
];

// Available locations for autofill
const availableLocations = [
  "Rīga, Centrs",
  "Rīga, Āgenskalns",
  "Rīga, Pārdaugava",
  "Rīga, Teika",
  "Jūrmala",
  "Sigulda",
  "Ventspils",
  "Liepāja",
  "Daugavpils",
  "Cēsis",
  "Valmiera"
];

// Parse date based on selected filter option
const getDateRange = (dateFilter: string): { start: Date | null, end: Date | null } => {
  const currentDate = new Date();
  const result = { start: null, end: null };
  
  if (dateFilter === 'this-week') {
    result.start = new Date();
    result.end = new Date();
    result.end.setDate(currentDate.getDate() + 7);
  } else if (dateFilter === 'this-month') {
    result.start = new Date();
    result.end = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  } else if (dateFilter === 'next-month') {
    result.start = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    result.end = new Date(currentDate.getFullYear(), currentDate.getMonth() + 2, 0);
  } else if (dateFilter === 'custom' && typeof dateFilter === 'string' && dateFilter.match(/^\d{4}-\d{2}-\d{2}$/)) {
    // If a custom date is provided in YYYY-MM-DD format
    result.start = new Date(dateFilter);
    result.end = new Date(dateFilter);
  }
  
  return result;
};

type SortOption = "name-asc" | "name-desc" | "price-low" | "price-high" | "rating-high" | "distance";

const SearchPage = () => {
  const [photographers, setPhotographers] = useState(samplePhotographers);
  const [filteredPhotographers, setFilteredPhotographers] = useState(samplePhotographers);
  const [sortOption, setSortOption] = useState<SortOption>("rating-high");
  const [searchCriteria, setSearchCriteria] = useState({
    location: "",
    type: [] as string[],
    date: "any",
    priceRange: [50, 500] as [number, number],
    rating: "any"
  });
  
  // Store unsorted filtered results
  const [unsortedResults, setUnsortedResults] = useState(samplePhotographers);

  useEffect(() => {
    // Apply sorting whenever sort option changes
    sortPhotographers(sortOption, unsortedResults);
  }, [sortOption, unsortedResults]);

  const sortPhotographers = (option: SortOption, photographers: typeof samplePhotographers) => {
    let sorted = [...photographers];
    
    switch (option) {
      case "name-asc":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "price-low":
        sorted.sort((a, b) => {
          const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
          const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
          return priceA - priceB;
        });
        break;
      case "price-high":
        sorted.sort((a, b) => {
          const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
          const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
          return priceB - priceA;
        });
        break;
      case "rating-high":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case "distance":
        // In a real app, this would calculate actual distance
        // For now, we're just sorting alphabetically by location as a placeholder
        sorted.sort((a, b) => a.location.localeCompare(b.location));
        break;
      default:
        break;
    }
    
    setFilteredPhotographers(sorted);
  };

  const handleSearch = (criteria: any) => {
    setSearchCriteria(criteria);
    console.log("Search criteria:", criteria);
    
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
    
    // Filter by date
    if (criteria.date && criteria.date !== 'any') {
      const dateRange = getDateRange(criteria.date);
      
      if (dateRange.start && dateRange.end) {
        filtered = filtered.filter(photographer => {
          return photographer.availableDates && photographer.availableDates.some(dateStr => {
            const date = new Date(dateStr);
            return date >= dateRange.start! && date <= dateRange.end!;
          });
        });
      }
    }
    
    // Filter by price range
    filtered = filtered.filter(photographer => {
      const price = parseInt(photographer.price.replace(/[^0-9]/g, ''));
      return price >= criteria.priceRange[0] && price <= criteria.priceRange[1];
    });
    
    // Filter by rating
    if (criteria.rating && criteria.rating !== 'any') {
      let ratingValue = 0;
      
      if (criteria.rating === '4plus') {
        ratingValue = 4;
      } else if (criteria.rating === '45plus') {
        ratingValue = 4.5;
      } else if (criteria.rating === '5') {
        ratingValue = 5;
      }
      
      filtered = filtered.filter(photographer => photographer.rating >= ratingValue);
    }
    
    // Store unsorted results
    setUnsortedResults(filtered);
    
    // Apply sorting to filtered results
    sortPhotographers(sortOption, filtered);
  };

  const resetFilters = () => {
    const defaultCriteria = {
      location: "",
      type: [] as string[],
      date: "any",
      priceRange: [50, 500] as [number, number],
      rating: "any"
    };
    
    setSearchCriteria(defaultCriteria);
    setUnsortedResults(photographers);
    sortPhotographers(sortOption, photographers);
    
    // Return the default criteria so SearchFilters component can reset its state
    return defaultCriteria;
  };

  const handleSortChange = (option: SortOption) => {
    setSortOption(option);
  };

  return (
    <Layout>
      <div className="bg-secondary/50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-serif font-medium mb-2">Atrodiet savu fotogrāfu</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Pārlūkojiet un sazinieties ar pārbaudītiem fotogrāfiem jūsu apkārtnē
          </p>
          
          <SearchFilters 
            onSearch={handleSearch} 
            onReset={resetFilters} 
            initialCriteria={searchCriteria}
            locationSuggestions={availableLocations} 
          />
          
          {filteredPhotographers.length > 0 && (
            <div className="mb-6">
              <SortOptions 
                value={sortOption}
                onChange={handleSortChange}
                resultCount={filteredPhotographers.length}
              />
            </div>
          )}
          
          <div className="space-y-6">
            {filteredPhotographers.length > 0 ? filteredPhotographers.map((photographer) => (
              <PhotographerCard key={photographer.id} {...photographer} />
            )) : (
              <NoResults onReset={resetFilters} />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SearchPage;
