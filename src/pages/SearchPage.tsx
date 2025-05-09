
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
    specialty: "Family & Newborn",
    location: "San Francisco, CA",
    rating: 4.9,
    reviewCount: 124,
    price: "$250",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    verified: true,
    description: "Specializing in natural light photography that captures authentic family moments. With over 8 years of experience working with families and newborns."
  },
  {
    id: 2,
    name: "Michael Chen",
    specialty: "Family & Maternity",
    location: "New York, NY",
    rating: 4.8,
    reviewCount: 98,
    price: "$300",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    verified: true,
    description: "Award-winning photographer creating artistic family portraits with a modern twist. Capturing the beauty of pregnancy and family connections."
  },
  {
    id: 3,
    name: "Sophia Martinez",
    specialty: "Children & Family",
    location: "Austin, TX",
    rating: 5.0,
    reviewCount: 87,
    price: "$200",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    verified: true,
    description: "Fun and engaging photo sessions that children love! Creating playful and candid family portraits that capture real personalities and emotions."
  },
  {
    id: 4,
    name: "David Wilson",
    specialty: "Family & Events",
    location: "Chicago, IL",
    rating: 4.7,
    reviewCount: 56,
    price: "$275",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    verified: true,
    description: "Documentary-style photography that tells your family's unique story. Specializing in candid moments during special events and everyday life."
  },
  {
    id: 5,
    name: "Aisha Patel",
    specialty: "Maternity & Newborn",
    location: "Seattle, WA",
    rating: 4.9,
    reviewCount: 72,
    price: "$325",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    verified: true,
    description: "Creating dreamy, artistic portraits for expecting mothers and newborns. Trained in safe newborn posing with a cozy, fully-equipped studio."
  }
];

const SearchPage = () => {
  const [photographers] = useState(samplePhotographers);

  return (
    <Layout>
      <div className="bg-secondary/50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-serif font-medium mb-2">Find Your Photographer</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Browse and connect with verified photographers in your area
          </p>
          
          <SearchFilters />
          
          <div className="space-y-6">
            {photographers.length > 0 ? photographers.map((photographer) => (
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
