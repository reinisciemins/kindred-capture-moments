
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Ziņojums nosūtīts",
        description: "Mēs ar jums sazināsimies tuvākajā laikā.",
      });
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-medium mb-4">Sazināties ar mums</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mums patīk uzklausīt mūsu klientus. Jautājiet mums jebko, un mēs centīsimies palīdzēt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center text-center p-6 bg-secondary/30 rounded-lg">
              <Mail className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-medium mb-2">E-pasts</h3>
              <p className="text-muted-foreground mb-3">Rakstiet mums jebkurā laikā</p>
              <a href="mailto:info@kindred.lv" className="text-primary hover:underline">info@kindred.lv</a>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-secondary/30 rounded-lg">
              <MapPin className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-medium mb-2">Adrese</h3>
              <p className="text-muted-foreground mb-3">Nāciet ciemos</p>
              <address className="not-italic">Brīvības iela 76, Rīga, LV-1001</address>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-secondary/30 rounded-lg">
              <Phone className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-medium mb-2">Tālrunis</h3>
              <p className="text-muted-foreground mb-3">Piezvaniet mums</p>
              <a href="tel:+37120000000" className="text-primary hover:underline">+371 2000 0000</a>
            </div>
          </div>

          <div className="bg-white shadow-sm rounded-lg p-8">
            <h2 className="text-2xl font-serif font-medium mb-6">Nosūtiet mums ziņu</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Jūsu vārds</label>
                  <Input 
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">E-pasta adrese</label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Temats</label>
                <Input 
                  id="subject" 
                  value={subject} 
                  onChange={(e) => setSubject(e.target.value)}
                  required 
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-1">Jūsu ziņojums</label>
                <Textarea 
                  id="message" 
                  rows={6} 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)}
                  required 
                />
              </div>
              
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sūta..." : "Sūtīt ziņojumu"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
