
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle2 } from "lucide-react";

const ForPhotographersPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-serif font-medium mb-4">
            Pievienojieties Kindred fotogrāfu komandai
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Sasniedziet jaunus klientus un attīstiet savu biznesu ar mūsu platformu, 
            kas paredzēta profesionāliem fotogrāfiem
          </p>
          <Button asChild size="lg" className="mt-4">
            <Link to="/signup">Pieteikties kā fotogrāfs</Link>
          </Button>
        </div>

        <Separator className="my-12" />

        <h2 className="text-3xl font-serif text-center mb-10">Kāpēc pievienoties Kindred?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Lielāka Redzamība</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Sasniedziet jaunus klientus un paplašiniet savu biznesu, 
                izmantojot mūsu platformu, ko apmeklē tūkstošiem ģimeņu.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Vairāk Pasūtījumu</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Veidojiet savu klientu bāzi ar mūsu automatizētu rezervācijas sistēmu 
                un saņemiet vairāk pasūtījumu.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Elastīgs Grafiks</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Strādājiet ar saviem noteikumiem un pielāgojiet grafiku savām vajadzībām 
                un pieejamībai.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-secondary/50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-serif text-center mb-8">Mūsu plāni fotogrāfiem</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-primary/20 hover:border-primary transition-all">
              <CardHeader>
                <CardTitle>Pamata</CardTitle>
                <CardDescription className="text-2xl font-medium">€20/mēnesī</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary h-5 w-5" />
                    <span>Profils platformā</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary h-5 w-5" />
                    <span>Līdz 20 attēliem portfolijā</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary h-5 w-5" />
                    <span>Rezervācijas kalendārs</span>
                  </li>
                </ul>
                <Button className="w-full mt-6">Izvēlēties</Button>
              </CardContent>
            </Card>

            <Card className="border-primary bg-primary/5 scale-105 shadow-lg">
              <CardHeader>
                <CardTitle>Profesionālis</CardTitle>
                <CardDescription className="text-2xl font-medium">€40/mēnesī</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary h-5 w-5" />
                    <span>Viss no Pamata plāna</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary h-5 w-5" />
                    <span>Neierobežots attēlu skaits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary h-5 w-5" />
                    <span>Pastiprināta redzamība meklēšanā</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary h-5 w-5" />
                    <span>Automātiskas atgādinājuma ziņas</span>
                  </li>
                </ul>
                <Button variant="default" className="w-full mt-6">
                  Izvēlēties
                </Button>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary transition-all">
              <CardHeader>
                <CardTitle>Premium</CardTitle>
                <CardDescription className="text-2xl font-medium">€60/mēnesī</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary h-5 w-5" />
                    <span>Viss no Profesionāļa plāna</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary h-5 w-5" />
                    <span>Īpaši izcelts profils</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary h-5 w-5" />
                    <span>Pieeja premium klientiem</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary h-5 w-5" />
                    <span>Reklāma platformas galvenajā lapā</span>
                  </li>
                </ul>
                <Button className="w-full mt-6">Izvēlēties</Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <h2 className="text-3xl font-serif text-center mb-8">Bieži uzdotie jautājumi</h2>

        <div className="max-w-3xl mx-auto mb-16">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Kā es varu pievienoties Kindred?</AccordionTrigger>
              <AccordionContent>
                Lai pievienotos Kindred platformai kā fotogrāfs, vienkārši reģistrējieties 
                mūsu vietnē, izveidojiet savu profilu un augšupielādējiet savus labākos darbus. 
                Pēc tam jūsu profils tiks pārbaudīts, un, kad tas tiks apstiprināts, jūs varēsiet 
                sākt saņemt rezervācijas.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Kādas ir komisijas maksas?</AccordionTrigger>
              <AccordionContent>
                Mēs ieturamies 10% provīziju no katras rezervācijas, ko jūs saņemat caur mūsu platformu. 
                Šī maksa ietver visas maksājumu apstrādes izmaksas un platformas uzturēšanu.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Kā es saņemu samaksu?</AccordionTrigger>
              <AccordionContent>
                Samaksa tiek automātiski nosūtīta uz jūsu bankas kontu 7 dienas pēc fotosesijas 
                pabeigšanas. Jums jāreģistrē savs bankas konts mūsu platformā, lai saņemtu maksājumus.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Vai es varu noteikt savu grafiku un cenas?</AccordionTrigger>
              <AccordionContent>
                Jā, jūs pilnībā kontrolējat savu grafiku un varat noteikt savas cenas. 
                Jūs varat norādīt, kurās dienās un stundās esat pieejams, kā arī 
                izveidot dažādus pakalpojumu paketes ar atšķirīgām cenām.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-serif mb-4">Gatavs pievienoties?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Sāciet savu ceļu kā Kindred fotogrāfs jau šodien
          </p>
          <Button asChild size="lg">
            <Link to="/signup">Reģistrēties kā fotogrāfs</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default ForPhotographersPage;
