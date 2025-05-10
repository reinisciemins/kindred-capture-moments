
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";
import { Check } from "lucide-react";

interface BookingDetails {
  photographerId: number;
  photographerName: string;
  packageId: string;
  packageName?: string;
  packagePrice?: string;
  date: string;
  formattedDate: string;
}

const OrderInformation = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    // Retrieve booking details from sessionStorage
    const storedBookingDetails = sessionStorage.getItem("bookingDetails");
    if (storedBookingDetails) {
      setBookingDetails(JSON.parse(storedBookingDetails));
    } else {
      // If no booking details found, redirect to home
      navigate("/");
      toast.error("Pasūtījuma informācija nav atrasta", {
        description: "Lūdzu, vispirms izvēlieties fotogrāfu un sesiju."
      });
    }
  }, [navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !phone) {
      toast.error("Lūdzu, aizpildiet visus obligātos laukus", {
        description: "Vārds, e-pasts un telefons ir obligāti."
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setShowConfirmation(true);
      
      // Store the order in localStorage for dashboard
      const orderData = {
        id: Math.floor(Math.random() * 10000),
        ...bookingDetails,
        customerName: name,
        customerEmail: email,
        customerPhone: phone,
        customerAddress: address,
        notes: notes,
        status: "Apstiprināts",
        createdAt: new Date().toISOString()
      };
      
      const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]");
      localStorage.setItem("orders", JSON.stringify([...existingOrders, orderData]));
      
    }, 1500);
  };

  const handleComplete = () => {
    setShowConfirmation(false);
    navigate("/dashboard");
  };

  if (!bookingDetails) {
    return <Layout>
      <div className="container mx-auto py-12">
        <div className="text-center">Ielādē pasūtījuma informāciju...</div>
      </div>
    </Layout>;
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Pasūtījuma informācija</CardTitle>
                <CardDescription>
                  Lūdzu, aizpildiet savu kontaktinformāciju, lai pabeigtu sesijas rezervāciju
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Vārds un uzvārds *</Label>
                      <Input 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="Jānis Bērziņš" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">E-pasta adrese *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="janis@piemers.lv" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Telefona numurs *</Label>
                      <Input 
                        id="phone" 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} 
                        placeholder="+371 12345678" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="address">Adrese (nav obligāti)</Label>
                      <Input 
                        id="address" 
                        value={address} 
                        onChange={(e) => setAddress(e.target.value)} 
                        placeholder="Brīvības iela 1, Rīga, LV-1010" 
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="notes">Papildus piezīmes vai vēlmes</Label>
                      <Textarea 
                        id="notes" 
                        value={notes} 
                        onChange={(e) => setNotes(e.target.value)} 
                        placeholder="Pievienojiet jebkādu papildu informāciju par sesiju..." 
                        rows={4}
                      />
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Apstrādā..." : "Apstiprināt rezervāciju"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Rezervācijas kopsavilkums</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">Fotogrāfs</h3>
                    <p>{bookingDetails.photographerName}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium">Pakalpojums</h3>
                    <p>{bookingDetails.packageName}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium">Datums</h3>
                    <p>{bookingDetails.formattedDate}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium">Cena</h3>
                    <p className="text-xl font-medium">{bookingDetails.packagePrice}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Rezervācija Apstiprināta!</DialogTitle>
            <DialogDescription>
              Jūsu fotosesija ir veiksmīgi rezervēta.
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex flex-col items-center py-6">
            <div className="bg-green-100 rounded-full p-3 mb-4">
              <Check className="h-10 w-10 text-green-500" />
            </div>
            <h3 className="text-lg font-medium mb-2">Paldies par jūsu rezervāciju!</h3>
            <p className="text-center text-muted-foreground">
              Mēs esam nosūtījuši rezervācijas apstiprinājumu uz jūsu e-pastu. 
              Fotogrāfs ar jums sazināsies, lai apstiprinātu visas detaļas.
            </p>
          </div>
          
          <div className="flex justify-end">
            <Button onClick={handleComplete}>Turpināt</Button>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default OrderInformation;
