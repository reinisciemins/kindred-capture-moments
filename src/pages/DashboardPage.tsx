
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { format } from "date-fns";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

interface Order {
  id: number;
  photographerId: number;
  photographerName: string;
  packageName: string;
  packagePrice: string;
  date: string;
  formattedDate: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  status: string;
  createdAt: string;
}

interface Service {
  id: string;
  name: string;
  price: string;
  duration: string;
  description: string;
  includes: string[];
}

const DashboardPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [newService, setNewService] = useState<Partial<Service>>({
    id: Date.now().toString(),
    name: "",
    price: "",
    duration: "",
    description: "",
    includes: [""]
  });
  
  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      navigate("/login");
      return;
    }
    
    setUser(JSON.parse(storedUser));
    
    // Load orders
    const storedOrders = localStorage.getItem("orders");
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }
    
    // Load services for photographers
    const storedServices = localStorage.getItem("services");
    if (storedServices) {
      setServices(JSON.parse(storedServices));
    } else {
      // Set some default services for photographers
      const defaultServices = [
        {
          id: "1",
          name: "Ģimenes Mini Sesija",
          price: "€250",
          duration: "30 minūtes",
          description: "Īsa, bet efektīva sesija ģimenēm",
          includes: [
            "30 minūšu fotosesija",
            "Viena lokācija",
            "15 digitālie attēli",
            "Tiešsaistes galerija"
          ]
        },
        {
          id: "2",
          name: "Portretu Sesija",
          price: "€180",
          duration: "45 minūtes",
          description: "Profesionāli portreti mārketingam vai personīgai lietošanai",
          includes: [
            "45 minūšu fotosesija",
            "Viena lokācija",
            "10 apstrādāti attēli",
            "Tiešsaistes galerija"
          ]
        }
      ];
      
      setServices(defaultServices);
      localStorage.setItem("services", JSON.stringify(defaultServices));
    }
    
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
    toast.success("Veiksmīgi atteikts", {
      description: "Jūs esat izgājis no sava konta"
    });
  };

  const viewOrderDetails = (order: Order) => {
    setSelectedOrder(order);
    setShowOrderDetails(true);
  };

  const addIncludeField = () => {
    setNewService({
      ...newService,
      includes: [...(newService.includes || []), ""]
    });
  };

  const updateIncludeField = (index: number, value: string) => {
    const updatedIncludes = [...(newService.includes || [])];
    updatedIncludes[index] = value;
    setNewService({
      ...newService,
      includes: updatedIncludes
    });
  };

  const removeIncludeField = (index: number) => {
    const updatedIncludes = [...(newService.includes || [])];
    updatedIncludes.splice(index, 1);
    setNewService({
      ...newService,
      includes: updatedIncludes
    });
  };

  const handleSubmitService = () => {
    // Validate form
    if (!newService.name || !newService.price || !newService.duration) {
      toast.error("Lūdzu, aizpildiet visus obligātos laukus");
      return;
    }

    // Filter out empty includes
    const filteredIncludes = newService.includes?.filter(item => item.trim() !== "") || [];

    // Create new service
    const serviceToAdd = {
      ...newService,
      id: newService.id || Date.now().toString(),
      includes: filteredIncludes
    } as Service;

    // Add to services list
    const updatedServices = [...services, serviceToAdd];
    setServices(updatedServices);
    localStorage.setItem("services", JSON.stringify(updatedServices));

    // Reset form and close sheet
    setNewService({
      id: Date.now().toString(),
      name: "",
      price: "",
      duration: "",
      description: "",
      includes: [""]
    });
    setShowServiceForm(false);

    toast.success("Pakalpojums pievienots", {
      description: "Jūsu pakalpojums ir veiksmīgi pievienots"
    });
  };

  const deleteService = (serviceId: string) => {
    const updatedServices = services.filter(s => s.id !== serviceId);
    setServices(updatedServices);
    localStorage.setItem("services", JSON.stringify(updatedServices));

    toast.success("Pakalpojums dzēsts", {
      description: "Pakalpojums ir veiksmīgi dzēsts"
    });
  };

  if (!user) {
    return <Layout>
      <div className="container mx-auto py-12">
        <div className="text-center">Ielādē...</div>
      </div>
    </Layout>;
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-serif font-bold">Lietotāja panelis</h1>
            <p className="text-muted-foreground">Laipni lūdzam, {user.name}</p>
          </div>
          <Button variant="outline" onClick={handleLogout}>Iziet</Button>
        </div>

        <Tabs defaultValue={user.role === "photographer" ? "services" : "bookings"}>
          <TabsList className="mb-8">
            {user.role === "user" && (
              <TabsTrigger value="bookings">Manas rezervācijas</TabsTrigger>
            )}
            {user.role === "photographer" && (
              <>
                <TabsTrigger value="services">Mani pakalpojumi</TabsTrigger>
                <TabsTrigger value="orders">Ienākošie pasūtījumi</TabsTrigger>
              </>
            )}
            <TabsTrigger value="profile">Mans profils</TabsTrigger>
          </TabsList>

          {user.role === "user" && (
            <TabsContent value="bookings">
              <h2 className="text-xl font-medium mb-4">Manas rezervācijas</h2>
              
              {orders.length > 0 ? (
                <div className="grid grid-cols-1 gap-4">
                  {orders.map((order) => (
                    <Card key={order.id} className="overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium text-lg">{order.photographerName}</h3>
                            <p className="text-muted-foreground">{order.packageName}</p>
                            <p className="mt-2">{order.formattedDate}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-lg">{order.packagePrice}</p>
                            <Badge className="mt-1">{order.status}</Badge>
                          </div>
                        </div>
                        <Button 
                          variant="outline" 
                          className="mt-4 w-full" 
                          onClick={() => viewOrderDetails(order)}
                        >
                          Skatīt detaļas
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="p-6 text-center">
                    <p className="text-muted-foreground mb-4">Jums vēl nav rezervāciju</p>
                    <Button asChild>
                      <a href="/search">Atrast fotogrāfu</a>
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          )}

          {user.role === "photographer" && (
            <TabsContent value="services">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-medium">Mani pakalpojumi</h2>
                <Button onClick={() => setShowServiceForm(true)}>
                  Pievienot pakalpojumu
                </Button>
              </div>
              
              {services.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map((service) => (
                    <Card key={service.id}>
                      <CardHeader>
                        <CardTitle>{service.name}</CardTitle>
                        <CardDescription>
                          {service.duration} | {service.price}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4">{service.description}</p>
                        <h4 className="font-medium mb-2">Iekļauts:</h4>
                        <ul className="space-y-1 mb-4">
                          {service.includes.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <span className="mr-2">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <Button 
                          variant="destructive" 
                          size="sm" 
                          className="w-full"
                          onClick={() => deleteService(service.id)}
                        >
                          Dzēst pakalpojumu
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="p-6 text-center">
                    <p className="text-muted-foreground mb-4">Jums vēl nav pievienotu pakalpojumu</p>
                    <Button onClick={() => setShowServiceForm(true)}>
                      Pievienot pakalpojumu
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          )}

          {user.role === "photographer" && (
            <TabsContent value="orders">
              <h2 className="text-xl font-medium mb-4">Ienākošie pasūtījumi</h2>
              
              {orders.length > 0 ? (
                <div className="grid grid-cols-1 gap-4">
                  {orders.map((order) => (
                    <Card key={order.id} className="overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium text-lg">{order.customerName}</h3>
                            <p className="text-muted-foreground">{order.packageName}</p>
                            <p className="mt-2">{order.formattedDate}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-lg">{order.packagePrice}</p>
                            <Badge className="mt-1">{order.status}</Badge>
                          </div>
                        </div>
                        <Button 
                          variant="outline" 
                          className="mt-4 w-full" 
                          onClick={() => viewOrderDetails(order)}
                        >
                          Skatīt detaļas
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="p-6 text-center">
                    <p className="text-muted-foreground">Jums vēl nav ienākošo pasūtījumu</p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          )}

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Profila informācija</CardTitle>
                <CardDescription>
                  Jūsu konta informācija un iestatījumi
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-1">
                  <h3 className="font-medium">Vārds, uzvārds</h3>
                  <p>{user.name}</p>
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium">E-pasta adrese</h3>
                  <p>{user.email}</p>
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium">Konta tips</h3>
                  <p>{user.role === "user" ? "Klients" : "Fotogrāfs"}</p>
                </div>
                <Button variant="outline" className="w-full">
                  Rediģēt profilu
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Order Details Dialog */}
      <Dialog open={showOrderDetails} onOpenChange={setShowOrderDetails}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Pasūtījuma detaļas</DialogTitle>
            <DialogDescription>
              Pasūtījuma ID: #{selectedOrder?.id}
            </DialogDescription>
          </DialogHeader>
          
          {selectedOrder && (
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium">Fotogrāfs</h3>
                  <p>{selectedOrder.photographerName}</p>
                </div>
                <div>
                  <h3 className="font-medium">Klients</h3>
                  <p>{selectedOrder.customerName}</p>
                </div>
                <div>
                  <h3 className="font-medium">Pakalpojums</h3>
                  <p>{selectedOrder.packageName}</p>
                </div>
                <div>
                  <h3 className="font-medium">Cena</h3>
                  <p className="font-medium">{selectedOrder.packagePrice}</p>
                </div>
                <div>
                  <h3 className="font-medium">Datums</h3>
                  <p>{selectedOrder.formattedDate}</p>
                </div>
                <div>
                  <h3 className="font-medium">Statuss</h3>
                  <Badge>{selectedOrder.status}</Badge>
                </div>
                <div>
                  <h3 className="font-medium">E-pasts</h3>
                  <p>{selectedOrder.customerEmail}</p>
                </div>
                <div>
                  <h3 className="font-medium">Tālrunis</h3>
                  <p>{selectedOrder.customerPhone}</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-1">Izveidošanas datums</h3>
                <p>{format(new Date(selectedOrder.createdAt), "dd.MM.yyyy HH:mm")}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Add Service Form */}
      <Sheet open={showServiceForm} onOpenChange={setShowServiceForm}>
        <SheetContent className="sm:max-w-md">
          <SheetHeader>
            <SheetTitle>Pievienot pakalpojumu</SheetTitle>
            <SheetDescription>
              Izveidojiet jaunu pakalpojumu, ko piedāvāt saviem klientiem
            </SheetDescription>
          </SheetHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Pakalpojuma nosaukums *</Label>
              <Input 
                id="name" 
                value={newService.name} 
                onChange={(e) => setNewService({...newService, name: e.target.value})} 
                placeholder="Piemēram, Ģimenes fotosesija" 
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="price">Cena *</Label>
                <Input 
                  id="price" 
                  value={newService.price} 
                  onChange={(e) => setNewService({...newService, price: e.target.value})} 
                  placeholder="€200" 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="duration">Ilgums *</Label>
                <Input 
                  id="duration" 
                  value={newService.duration} 
                  onChange={(e) => setNewService({...newService, duration: e.target.value})} 
                  placeholder="60 minūtes" 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Apraksts</Label>
              <Textarea 
                id="description" 
                value={newService.description} 
                onChange={(e) => setNewService({...newService, description: e.target.value})} 
                placeholder="Pakalpojuma apraksts"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label>Pakalpojumā iekļauts</Label>
                <Button type="button" size="sm" variant="outline" onClick={addIncludeField}>
                  Pievienot
                </Button>
              </div>
              
              {newService.includes?.map((include, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Input 
                    value={include} 
                    onChange={(e) => updateIncludeField(index, e.target.value)} 
                    placeholder="Piemēram, 10 digitālie attēli"
                  />
                  <Button 
                    type="button" 
                    size="icon" 
                    variant="outline" 
                    onClick={() => removeIncludeField(index)}
                    disabled={newService.includes?.length === 1}
                  >
                    &times;
                  </Button>
                </div>
              ))}
            </div>
            
            <Button className="w-full mt-4" onClick={handleSubmitService}>
              Pievienot pakalpojumu
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </Layout>
  );
};

export default DashboardPage;
