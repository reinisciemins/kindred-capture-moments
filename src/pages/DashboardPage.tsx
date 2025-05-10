
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Calendar, Clock, Edit, MessageCircle, Trash2 } from "lucide-react";

// Type definitions
interface User {
  email: string;
  name: string;
  role: "user" | "photographer";
}

interface Booking {
  id: string;
  photographerId: number;
  photographerName: string;
  packageId: string;
  packageName: string;
  packagePrice: string;
  date: string;
  formattedDate: string;
  status: "pending" | "confirmed" | "completed" | "cancelled";
}

interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  includes: string[];
}

const DashboardPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Mock photographer services data
  const defaultServices = [
    {
      id: "basic",
      name: "Ģimenes Mini Sesija",
      description: "Īsa fotosesija ģimenei piemērotā vietā",
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
      description: "Pilna garuma sesija ar vairākām lokācijām",
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
      description: "Premium pieredze ar personalizētiem pakalpojumiem",
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
  ];

  // Mock bookings data for user
  const defaultBookings = [
    {
      id: "b1",
      photographerId: 1,
      photographerName: "Emily Johnson",
      packageId: "standard",
      packageName: "Ģimenes Pilnā Sesija",
      packagePrice: "€450",
      date: new Date().toISOString(),
      formattedDate: new Date().toLocaleDateString("lv-LV"),
      status: "confirmed" as const
    },
    {
      id: "b2",
      photographerId: 2,
      photographerName: "Mārtiņš Bērziņš",
      packageId: "basic",
      packageName: "Ģimenes Mini Sesija",
      packagePrice: "€250",
      date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
      formattedDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString("lv-LV"),
      status: "pending" as const
    }
  ];

  // Check if user is logged in and load appropriate data
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      
      // Get saved bookings from localStorage or use default data
      const storedBookings = localStorage.getItem("bookings");
      if (storedBookings) {
        setBookings(JSON.parse(storedBookings));
      } else {
        // Only set default bookings for demo purposes
        if (parsedUser.role === "user") {
          localStorage.setItem("bookings", JSON.stringify(defaultBookings));
          setBookings(defaultBookings);
        } else {
          // For photographers, create mock booking requests
          const photographerBookings = defaultBookings.map(booking => ({
            ...booking,
            status: Math.random() > 0.5 ? "pending" : "confirmed"
          }));
          localStorage.setItem("bookings", JSON.stringify(photographerBookings));
          setBookings(photographerBookings);
        }
      }
      
      // Load services for photographers
      if (parsedUser.role === "photographer") {
        const storedServices = localStorage.getItem("services");
        if (storedServices) {
          setServices(JSON.parse(storedServices));
        } else {
          localStorage.setItem("services", JSON.stringify(defaultServices));
          setServices(defaultServices);
        }
      }
    } else {
      // Redirect to login if not logged in
      navigate("/login");
    }
    
    setIsLoading(false);
  }, [navigate]);

  const cancelBooking = (bookingId: string) => {
    const updatedBookings = bookings.map(booking => {
      if (booking.id === bookingId) {
        return { ...booking, status: "cancelled" as const };
      }
      return booking;
    });
    
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
    setBookings(updatedBookings);
    
    toast.success("Rezervācija atcelta", {
      description: "Fotogrāfs tiks informēts par jūsu lēmumu"
    });
  };

  const confirmBooking = (bookingId: string) => {
    const updatedBookings = bookings.map(booking => {
      if (booking.id === bookingId) {
        return { ...booking, status: "confirmed" as const };
      }
      return booking;
    });
    
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
    setBookings(updatedBookings);
    
    toast.success("Rezervācija apstiprināta", {
      description: "Klients tiks informēts par jūsu lēmumu"
    });
  };

  const updateService = (service: Service) => {
    const updatedServices = services.map(s => 
      s.id === service.id ? service : s
    );
    
    localStorage.setItem("services", JSON.stringify(updatedServices));
    setServices(updatedServices);
    
    toast.success("Pakalpojums atjaunināts", {
      description: "Izmaiņas ir saglabātas"
    });
  };

  const deleteService = (serviceId: string) => {
    const updatedServices = services.filter(service => service.id !== serviceId);
    
    localStorage.setItem("services", JSON.stringify(updatedServices));
    setServices(updatedServices);
    
    toast.success("Pakalpojums dzēsts", {
      description: "Pakalpojums ir dzēsts no jūsu piedāvājuma"
    });
  };

  const addService = (service: Service) => {
    const newService = {
      ...service,
      id: `service-${Date.now()}`
    };
    
    const updatedServices = [...services, newService];
    localStorage.setItem("services", JSON.stringify(updatedServices));
    setServices(updatedServices);
    
    toast.success("Pakalpojums pievienots", {
      description: "Jauns pakalpojums ir pievienots jūsu piedāvājumam"
    });
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">Ielādē...</div>
        </div>
      </Layout>
    );
  }

  if (!user) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <Card>
            <CardHeader>
              <CardTitle>Nav piekļuves</CardTitle>
              <CardDescription>Lūdzu, piesakieties, lai piekļūtu kontrolpanelim</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button onClick={() => navigate("/login")}>Pieslēgties</Button>
            </CardFooter>
          </Card>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-serif font-medium mb-8">Mans Kontrolpanelis</h1>
        
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-lg">Laipni lūdzam, <span className="font-medium">{user.name}</span>!</p>
            <p className="text-muted-foreground">{user.role === "user" ? "Klienta konts" : "Fotogrāfa konts"}</p>
          </div>
        </div>

        {user.role === "user" ? (
          /* Client dashboard */
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Manas Rezervācijas</CardTitle>
                <CardDescription>Pārvaldiet savas fotogrāfiju sesijas</CardDescription>
              </CardHeader>
              <CardContent>
                {bookings.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground mb-4">Jums pašlaik nav nevienas rezervācijas</p>
                    <Button onClick={() => navigate("/search")}>Atrast fotogrāfu</Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {bookings.map((booking) => (
                      <Card key={booking.id}>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">{booking.packageName}</CardTitle>
                          <CardDescription>{booking.photographerName}</CardDescription>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <div className="flex items-center mb-2">
                            <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span>{booking.formattedDate}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span>{booking.packagePrice}</span>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <div className="flex justify-between items-center w-full">
                            <div>
                              <Badge status={booking.status} />
                            </div>
                            <div className="space-x-2">
                              <Button size="sm" variant="outline" asChild>
                                <a href={`mailto:info@example.com?subject=Jautājums par rezervāciju #${booking.id}`}>
                                  <MessageCircle className="h-4 w-4 mr-2" />
                                  Sazināties
                                </a>
                              </Button>
                              {booking.status !== "cancelled" && booking.status !== "completed" && (
                                <Button size="sm" variant="destructive" onClick={() => cancelBooking(booking.id)}>
                                  Atcelt
                                </Button>
                              )}
                            </div>
                          </div>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        ) : (
          /* Photographer dashboard */
          <Tabs defaultValue="bookings">
            <TabsList className="mb-8">
              <TabsTrigger value="bookings">Rezervācijas</TabsTrigger>
              <TabsTrigger value="services">Mani Pakalpojumi</TabsTrigger>
            </TabsList>
            
            <TabsContent value="bookings">
              <Card>
                <CardHeader>
                  <CardTitle>Rezervāciju Pieprasījumi</CardTitle>
                  <CardDescription>Pārvaldiet klientu rezervācijas</CardDescription>
                </CardHeader>
                <CardContent>
                  {bookings.length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">Jums pašlaik nav nevienas rezervācijas</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {bookings.map((booking) => (
                        <Card key={booking.id}>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg">{booking.packageName}</CardTitle>
                            <CardDescription>Klienta ID: {booking.id}</CardDescription>
                          </CardHeader>
                          <CardContent className="pb-2">
                            <div className="flex items-center mb-2">
                              <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                              <span>{booking.formattedDate}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                              <span>{booking.packagePrice}</span>
                            </div>
                          </CardContent>
                          <CardFooter>
                            <div className="flex justify-between items-center w-full">
                              <div>
                                <Badge status={booking.status} />
                              </div>
                              <div className="space-x-2">
                                {booking.status === "pending" && (
                                  <Button size="sm" onClick={() => confirmBooking(booking.id)}>
                                    Apstiprināt
                                  </Button>
                                )}
                                <Button size="sm" variant="outline">
                                  <MessageCircle className="h-4 w-4 mr-2" />
                                  Sazināties
                                </Button>
                              </div>
                            </div>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="services">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Mani Pakalpojumi</CardTitle>
                      <CardDescription>Pārvaldiet savus piedāvātos pakalpojumus</CardDescription>
                    </div>
                    <Button onClick={() => {
                      // This would normally open a modal to add a new service
                      // For simplicity, we'll just add a mock service
                      addService({
                        id: "",
                        name: "Jauns Pakalpojums",
                        description: "Pakalpojuma apraksts",
                        price: "€300",
                        duration: "45 minūtes",
                        includes: ["Iekļautās lietas"]
                      });
                    }}>Pievienot Pakalpojumu</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {services.map((service) => (
                      <Card key={service.id}>
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-lg">{service.name}</CardTitle>
                              <CardDescription>{service.description}</CardDescription>
                            </div>
                            <div className="text-xl font-medium">{service.price}</div>
                          </div>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <div className="flex items-center mb-4">
                            <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span>{service.duration}</span>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium mb-2">Iekļauts:</h4>
                            <ul className="text-sm space-y-1">
                              {service.includes.map((item, i) => (
                                <li key={i} className="flex items-start">
                                  <span className="text-primary mr-2">✓</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <div className="flex justify-end gap-2">
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4 mr-2" />
                              Rediģēt
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => deleteService(service.id)}>
                              <Trash2 className="h-4 w-4 mr-2" />
                              Dzēst
                            </Button>
                          </div>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </Layout>
  );
};

// Badge component to display booking status
const Badge = ({ status }: { status: Booking["status"] }) => {
  const getStatusDetails = () => {
    switch (status) {
      case "pending":
        return { label: "Gaidīšanā", className: "bg-amber-100 text-amber-800" };
      case "confirmed":
        return { label: "Apstiprināts", className: "bg-green-100 text-green-800" };
      case "completed":
        return { label: "Pabeigts", className: "bg-blue-100 text-blue-800" };
      case "cancelled":
        return { label: "Atcelts", className: "bg-red-100 text-red-800" };
      default:
        return { label: status, className: "bg-gray-100 text-gray-800" };
    }
  };

  const { label, className } = getStatusDetails();

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${className}`}>
      {label}
    </span>
  );
};

export default DashboardPage;
