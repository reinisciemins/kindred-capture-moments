
import { useState } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { 
  Calendar,
  Star,
  MessageCircle, 
  MapPin, 
  Check,
  Image,
  Clock
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";

// Sample photographer data - Translated to Latvian
const samplePhotographer = {
  id: 1,
  name: "Emily Johnson",
  specialty: "Ģimene un Jaundzimušie",
  location: "Rīga, Centrs",
  rating: 4.9,
  reviewCount: 124,
  price: "€250",
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  verified: true,
  bio: "Esmu profesionāla fotogrāfe ar vairāk nekā 8 gadu pieredzi, specializējoties ģimenes un jaundzimušo fotogrāfijās. Mana kaislība ir iemūžināt autentiskās saites un dārgos mirkļus, kas padara katru ģimeni unikālu. Ar dabīgu, gaismas piepildītu estētiku es veidoju mūžīgus attēlus, kas stāsta jūsu ģimenes stāstu.",
  portfolioImages: [
    "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1518438136221-20729c2e1e47?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1471239847883-acddfe4ebe7f?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1543342384-1f1350e27861?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?w=500&auto=format&fit=crop&q=60",
  ],
  packages: [
    {
      id: "basic",
      name: "Ģimenes Mini Sesija",
      price: "€250",
      duration: "30 minūtes",
      includes: [
        "30 minūšu fotosesija",
        "Viena lokācija",
        "15 digitālie attēli",
        "Tiešsaistes galerija",
        "Drukāšanas atļauja"
      ]
    },
    {
      id: "standard",
      name: "Ģimenes Pilnā Sesija",
      price: "€450",
      duration: "1 stunda",
      includes: [
        "1 stundas fotosesija",
        "Līdz divām lokācijām",
        "30 digitālie attēli",
        "Tiešsaistes galerija",
        "Drukāšanas atļauja",
        "10 profesionāli fotoattēli (5x7)"
      ]
    },
    {
      id: "premium",
      name: "Paplašināta Ģimenes Sesija",
      price: "€650",
      duration: "90 minūtes",
      includes: [
        "90 minūšu fotosesija",
        "Vairākas lokācijas",
        "Visi digitālie attēli (50+)",
        "Tiešsaistes galerija",
        "Drukāšanas atļauja",
        "Pielāgots fotoalbums"
      ]
    }
  ],
  reviews: [
    {
      id: 1,
      name: "Linda K.",
      date: "2023-04-15",
      rating: 5,
      text: "Emily bija neticama ar mūsu jaundzimušo! Viņa bija pacietīga, maiga un uzņēma visskaistākos attēlus. Mēs esam tik pateicīgi par šīm dārgajām atmiņām."
    },
    {
      id: 2,
      name: "Jānis un Anna",
      date: "2023-03-22",
      rating: 5,
      text: "Mums bija ģimenes sesija ar Emily, un mēs bijām sajūsmā par rezultātiem. Viņa padarīja visus komfortablus un lieliski uztvēra mūsu ģimenes dinamiku."
    },
    {
      id: 3,
      name: "Liene T.",
      date: "2023-02-18",
      rating: 4,
      text: "Lieliska pieredze ar Emily. Viņa bija profesionāla, un fotogrāfijas izdevās skaistas. Vienīgi vēlētos, lai būtu vairāk laika dažādiem kadriem."
    }
  ],
  availability: {
    // Sample availability dates (available dates in next 2 weeks)
    availableDates: [
      new Date(2023, 3, 18),
      new Date(2023, 3, 19),
      new Date(2023, 3, 22),
      new Date(2023, 3, 25),
      new Date(2023, 3, 29),
      new Date(2023, 4, 2),
      new Date(2023, 4, 3),
    ]
  },
  certifications: [
    "Sertificēts Profesionāls Fotogrāfs (CPP)",
    "Jaundzimušo Drošības Sertifikāts",
    "Profesionālo Fotogrāfu Asociācijas Biedrs"
  ]
};

const PhotographerProfile = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [date, setDate] = useState<Date | undefined>();

  // In a real app, we would fetch the photographer data based on the ID
  const photographer = samplePhotographer;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Photographer info */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg overflow-hidden shadow-soft mb-8">
              <div className="relative h-64 sm:h-80">
                <img 
                  src={photographer.image} 
                  alt={photographer.name}
                  className="w-full h-full object-cover"
                />
                {photographer.verified && (
                  <Badge className="absolute top-4 right-4 bg-primary text-white">
                    Verificēts
                  </Badge>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h1 className="text-2xl font-serif font-medium mb-1">{photographer.name}</h1>
                    <p className="text-muted-foreground flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {photographer.location}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-amber-500 fill-amber-500" />
                    <span className="ml-1 font-medium">{photographer.rating}</span>
                    <span className="ml-1 text-muted-foreground">({photographer.reviewCount} atsauksmes)</span>
                  </div>
                </div>
                
                <p className="mb-6">{photographer.bio}</p>
                
                <div className="space-y-4">
                  <h2 className="text-lg font-medium">Sertifikāti un Kvalifikācijas</h2>
                  <ul className="space-y-2">
                    {photographer.certifications.map((cert, i) => (
                      <li key={i} className="flex items-start">
                        <Check size={18} className="mr-2 text-primary shrink-0 mt-0.5" />
                        <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <Tabs defaultValue="portfolio">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                <TabsTrigger value="packages">Pakalpojumi</TabsTrigger>
                <TabsTrigger value="reviews">Atsauksmes</TabsTrigger>
              </TabsList>
              
              <TabsContent value="portfolio" className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {photographer.portfolioImages.map((image, i) => (
                    <div key={i} className="rounded-lg overflow-hidden h-48 sm:h-64">
                      <img 
                        src={image} 
                        alt={`Portfolio attēls ${i+1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="packages" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {photographer.packages.map((pkg) => (
                    <Card 
                      key={pkg.id} 
                      className={`overflow-hidden transition-all duration-300 ${selectedPackage === pkg.id ? 'ring-2 ring-primary' : ''}`}
                    >
                      <CardContent className="p-6">
                        <h3 className="text-xl font-medium mb-2">{pkg.name}</h3>
                        <div className="flex items-center mb-4 text-muted-foreground">
                          <Clock size={16} className="mr-1" />
                          <span>{pkg.duration}</span>
                        </div>
                        <div className="text-2xl font-medium mb-4">{pkg.price}</div>
                        <ul className="space-y-2 mb-6">
                          {pkg.includes.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <Check size={16} className="mr-2 text-primary shrink-0 mt-1" />
                              <span className="text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                        <Button 
                          className="w-full" 
                          variant={selectedPackage === pkg.id ? "default" : "outline"}
                          onClick={() => setSelectedPackage(pkg.id)}
                        >
                          {selectedPackage === pkg.id ? 'Izvēlēts' : 'Izvēlēties pakalpojumu'}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="space-y-6">
                {photographer.reviews.map((review) => (
                  <div key={review.id} className="bg-white p-6 rounded-lg shadow-soft">
                    <div className="flex justify-between mb-2">
                      <h3 className="font-medium">{review.name}</h3>
                      <span className="text-sm text-muted-foreground">
                        {format(new Date(review.date), 'dd.MM.yyyy')}
                      </span>
                    </div>
                    <div className="flex mb-3">
                      {Array(5).fill(0).map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={i < review.rating 
                            ? "text-amber-500 fill-amber-500" 
                            : "text-gray-300"
                          } 
                        />
                      ))}
                    </div>
                    <p>{review.text}</p>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </div>

          {/* Right column - Booking and contact */}
          <div>
            <div className="bg-white rounded-lg shadow-soft p-6 mb-6 sticky top-24">
              <h2 className="text-xl font-medium mb-4">Rezervēt Sesiju</h2>
              
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Izvēlēties datumu</h3>
                <CalendarComponent
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="p-3 pointer-events-auto"
                  disabled={(date) => {
                    // In a real app, we would check against actual availability
                    return !photographer.availability.availableDates.some(
                      availableDate => 
                        availableDate.getDate() === date.getDate() &&
                        availableDate.getMonth() === date.getMonth() &&
                        availableDate.getFullYear() === date.getFullYear()
                    );
                  }}
                />
              </div>
              
              {selectedPackage && date ? (
                <Button className="w-full">
                  Rezervēt Tagad
                </Button>
              ) : (
                <Button className="w-full" disabled>
                  {!selectedPackage ? 'Izvēlieties Pakalpojumu' : 'Izvēlieties Datumu'}
                </Button>
              )}
              
              <div className="text-center mt-4">
                <p className="text-sm text-muted-foreground">
                  Maksājums nav nepieciešams līdz sesijas beigām.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-soft p-6">
              <h2 className="text-xl font-medium mb-4">Sazināties ar Fotogrāfu</h2>
              <Button variant="outline" className="w-full">
                <MessageCircle size={18} className="mr-2" />
                Sūtīt Ziņu
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PhotographerProfile;
