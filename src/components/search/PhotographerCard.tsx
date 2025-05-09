
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface PhotographerCardProps {
  id: number;
  name: string;
  specialty: string;
  location: string;
  rating: number;
  reviewCount: number;
  price: string;
  image: string;
  verified: boolean;
  description: string;
}

const PhotographerCard = ({
  id,
  name,
  specialty,
  location,
  rating,
  reviewCount,
  price,
  image,
  verified,
  description
}: PhotographerCardProps) => {
  const [isMessageDialogOpen, setIsMessageDialogOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const { toast } = useToast();

  const handleSendMessage = () => {
    if (!message.trim()) {
      toast({
        title: "Lūdzu, ievadiet ziņojumu",
        description: "Jūs nevarat nosūtīt tukšu ziņojumu",
        variant: "destructive",
      });
      return;
    }

    setIsSending(true);
    
    // Simulate message sending
    setTimeout(() => {
      toast({
        title: "Ziņojums nosūtīts!",
        description: `Jūsu ziņojums uz ${name} tika veiksmīgi nosūtīts.`,
      });
      setIsSending(false);
      setMessage("");
      setIsMessageDialogOpen(false);
    }, 1000);
  };

  return (
    <>
      <Card className="overflow-hidden card-hover">
        <div className="md:flex">
          <div className="md:w-1/3 relative">
            <img 
              src={image} 
              alt={name} 
              className="h-64 md:h-full w-full object-cover"
            />
            {verified && (
              <Badge className="absolute top-4 left-4 bg-primary text-white">
                Verified
              </Badge>
            )}
          </div>
          <div className="md:w-2/3">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-medium mb-1">{name}</h3>
                  <p className="text-muted-foreground">{specialty} • {location}</p>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-amber-500 fill-amber-500" />
                  <span className="ml-1 font-medium">{rating}</span>
                  <span className="ml-1 text-muted-foreground">({reviewCount})</span>
                </div>
              </div>
              
              <p className="mb-6 line-clamp-2">{description}</p>
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <span className="text-muted-foreground text-sm">Sākot no</span>
                  <div className="text-lg font-medium">{price}</div>
                </div>
                
                <div className="flex gap-3 w-full sm:w-auto">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="sm:w-auto w-full"
                    onClick={() => setIsMessageDialogOpen(true)}
                  >
                    <MessageCircle size={16} className="mr-1" /> Ziņojums
                  </Button>
                  <Button size="sm" className="sm:w-auto w-full" asChild>
                    <Link to={`/photographer/${id}`}>
                      Skatīt profilu
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>

      {/* Message Dialog */}
      <Dialog open={isMessageDialogOpen} onOpenChange={setIsMessageDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Nosūtīt ziņojumu</DialogTitle>
            <DialogDescription>
              Sazinieties ar {name} par fotogrāfijas sesiju vai uzdodiet jautājumus.
            </DialogDescription>
          </DialogHeader>

          <div className="py-4">
            <Textarea
              placeholder="Jūsu ziņojums fotogrāfam..."
              className="min-h-[150px]"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsMessageDialogOpen(false)}
              disabled={isSending}
            >
              Atcelt
            </Button>
            <Button 
              onClick={handleSendMessage}
              disabled={isSending}
            >
              {isSending ? "Nosūta..." : "Nosūtīt ziņojumu"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PhotographerCard;
