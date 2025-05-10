
import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Calendar, MessageCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const ForPhotographersPage = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Paldies par jūsu interesi!", {
        description: "Mēs drīzumā ar jums sazināsimies."
      });
      setEmail("");
    }
  };

  return (
    <Layout>
      {/* Hero section */}
      <section className="py-16 md:py-24 bg-peach-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-medium mb-6">
              Attīstiet savu fotogrāfijas uzņēmumu ar Kindred
            </h1>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground">
              Pievienojieties tūkstošiem profesionālu fotogrāfu, kuri izmanto mūsu platformu, lai atrastu jaunus klientus, vienkāršotu rezervācijas un koncentrētos uz to, ko viņi dara vislabāk — radīt brīnišķīgas fotogrāfijas.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/signup">Pievienoties kā fotogrāfs</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#learn-more">Uzzināt vairāk</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits section */}
      <section id="learn-more" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
              Kāpēc pievienoties Kindred
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mēs nodrošināsim visus nepieciešamos rīkus, lai palīdzētu jums augt un gūt panākumus
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Card className="shadow-none">
              <CardContent className="p-8">
                <div className="bg-peach-light p-4 rounded-full inline-block mb-6">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-3">
                  Sasniedziet vairāk klientu
                </h3>
                <p className="text-muted-foreground">
                  Izgaismojiet savu darbu tūkstošiem potenciālo klientu, kuri aktīvi meklē jūsu pakalpojumus mūsu platformā.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-none">
              <CardContent className="p-8">
                <div className="bg-peach-light p-4 rounded-full inline-block mb-6">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-3">
                  Vienkāršota rezervēšana
                </h3>
                <p className="text-muted-foreground">
                  Mūsu jaudīgie rezervācijas rīki ļauj klientiem rezervēt un apmaksāt jūsu pakalpojumus tiešsaistē, ietaupot jūsu laiku un samazinot administratīvo darbu.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-none">
              <CardContent className="p-8">
                <div className="bg-peach-light p-4 rounded-full inline-block mb-6">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-3">
                  Profesionāls profils
                </h3>
                <p className="text-muted-foreground">
                  Izveidojiet pielāgotu, pārliecinošu profilu, kas izceļ jūsu unikālo stilu un piedāvājumu, piesaistot jūsu ideālo klientu grupu.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it works section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
              Kā tas darbojas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vienkāršs process, lai kļūtu par Kindred fotogrāfu un sāktu pieņemt rezervācijas
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="register">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="register">Reģistrējieties</TabsTrigger>
                <TabsTrigger value="profile">Izveidojiet Profilu</TabsTrigger>
                <TabsTrigger value="services">Pievienojiet Pakalpojumus</TabsTrigger>
                <TabsTrigger value="bookings">Saņemiet Rezervācijas</TabsTrigger>
              </TabsList>
              
              <div className="bg-white p-8 rounded-lg shadow-soft">
                <TabsContent value="register">
                  <h3 className="text-xl font-medium mb-4">1. Reģistrējieties kā fotogrāfs</h3>
                  <p className="mb-4">
                    Izveidojiet savu Kindred kontu, norādot jūsu uzņēmējdarbības informāciju un kontaktinformāciju. Mēs pārbaudīsim jūsu datus, lai nodrošinātu mūsu platformas kvalitāti.
                  </p>
                  <img 
                    src="https://images.unsplash.com/photo-1522152577195-d59d7facbc4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                    alt="Reģistrācijas process" 
                    className="w-full h-64 object-cover rounded-lg mb-4" 
                  />
                  <Button asChild>
                    <Link to="/signup">Reģistrēties tagad</Link>
                  </Button>
                </TabsContent>
                
                <TabsContent value="profile">
                  <h3 className="text-xl font-medium mb-4">2. Izveidojiet pievilcīgu profilu</h3>
                  <p className="mb-4">
                    Augšupielādējiet savas labākās fotogrāfijas, pievienojiet pārliecinošu biogrāfiju, norādiet savu specializāciju un pakalpojumu sniegšanas vietas. Labs profils ir atslēga klientu piesaistei.
                  </p>
                  <img 
                    src="https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                    alt="Profila izveide" 
                    className="w-full h-64 object-cover rounded-lg" 
                  />
                </TabsContent>
                
                <TabsContent value="services">
                  <h3 className="text-xl font-medium mb-4">3. Iestatiet savus pakalpojumus un cenrādi</h3>
                  <p className="mb-4">
                    Definējiet savas fotosesiju paketes, cenas un pieejamību mūsu lietotājam draudzīgajā interfeisā. Jūs varat izveidot neierobežotu skaitu pakalpojumu, kas atbilst jūsu darbības nišai.
                  </p>
                  <img 
                    src="https://images.unsplash.com/photo-1606165708214-5b5e4a4a6832?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                    alt="Pakalpojumu iestatīšana" 
                    className="w-full h-64 object-cover rounded-lg" 
                  />
                </TabsContent>
                
                <TabsContent value="bookings">
                  <h3 className="text-xl font-medium mb-4">4. Pieņemiet un pārvaldiet rezervācijas</h3>
                  <p className="mb-4">
                    Sāciet saņemt rezervācijas no klientiem, pārvaldiet savu kalendāru un sazinieties ar klientiem tieši platformā. Mēs parūpēsimies par maksājumiem un pēc sesijas nosūtīsim jums jūsu naudu.
                  </p>
                  <img 
                    src="https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                    alt="Rezervāciju pārvaldīšana" 
                    className="w-full h-64 object-cover rounded-lg" 
                  />
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Pricing section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
              Vienkārša un caurspīdīga cenu politika
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Bez fiksētām ikmēneša maksām, maksājiet tikai tad, kad pelnāt
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-xl font-medium mb-2">Komisijas modelis</h3>
                  <div className="text-5xl font-medium mb-6">10%</div>
                  <p className="text-muted-foreground mb-6">
                    No katras pabeigtas rezervācijas
                  </p>
                  <ul className="space-y-4 text-left mb-8">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                      <span>Nav mēneša maksas vai slēptas izmaksas</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                      <span>Neierobežots rezervāciju skaits</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                      <span>Iespēja izveidot neierobežotu skaitu pakalpojumu</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                      <span>Iekļauta rezervāciju pārvaldība un maksājumu apstrāde</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                      <span>Iknedēļas izmaksas tieši jūsu kontā</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full">
                    <Link to="/signup">Pievienoties Kindred</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
              Biežāk uzdotie jautājumi
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Atbildes uz jautājumiem, kas jums varētu rasties
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  Kā pievienoties Kindred kā fotogrāfs?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Lai pievienotos Kindred kā fotogrāfs, jums jāreģistrējas mūsu platformā, jāiesniedz portfolio vai darba paraugi un jāaizpilda profila informācija. Pēc reģistrācijas mēs pārskatīsim jūsu pieteikumu, lai nodrošinātu, ka tas atbilst mūsu kvalitātes standartiem.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="bg-white rounded-lg shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  Kā tiek aprēķināta 10% komisijas maksa?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  10% komisijas maksa tiek aprēķināta no pilnas sesijas cenas, ko samaksā klients. Piemēram, ja jūsu sesijas cena ir 300€, Kindred komisijas maksa būs 30€, un jūs saņemsiet 270€. Mūsu maksājumu sistēma automātiski aprēķina un apstrādā šīs maksas.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="bg-white rounded-lg shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  Vai es varu mainīt savu pieejamību?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Jā, jūs varat pielāgot savu pieejamības kalendāru jebkurā laikā. Mūsu sistēma ļauj iestatīt regulāro darba laiku, bloķēt konkrētus datumus vai periodus, kad neesat pieejams, un pārvaldīt rezervācijas no vienas vienkāršas vadības paneļa saskarnes.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="bg-white rounded-lg shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  Kā es saņemšu savus maksājumus?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Maksājumi tiek veikti tieši uz jūsu bankas kontu reizi nedēļā. Pēc sesijas pabeigšanas un apstiprinājuma no klienta, maksājums tiek pārskaitīts nākamajā maksājumu ciklā. Jūs varat sekot līdzi saviem ieņēmumiem un gaidāmajiem maksājumiem savā Kindred kontā.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="bg-white rounded-lg shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  Kā darbojas klientu atcelšanas politika?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  Jūs varat izvēlēties atcelšanas politiku, kas vislabāk atbilst jūsu uzņēmējdarbības prasībām. Mēs piedāvājam elastīgas, mērenas un stingras atcelšanas politikas opcijas. Atkarībā no izvēlētās politikas, klienti var saņemt daļēju vai pilnu atmaksu, ja viņi atceļ savu rezervāciju noteiktā laika periodā.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-peach-light">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
              Gatavs pacelt savu fotogrāfijas uzņēmumu jaunā līmenī?
            </h2>
            <p className="text-lg mb-10 text-muted-foreground">
              Pievienojieties Kindred jau šodien un sāciet audzēt savu fotogrāfijas uzņēmumu ar platformu, kas izstrādāta tieši jums.
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-soft">
              <h3 className="text-xl font-medium mb-4">
                Iesniedziet savu pieteikumu
              </h3>
              <p className="mb-6 text-muted-foreground">
                Atstājiet savu e-pastu, un mēs sazināsimies ar jums, lai uzsāktu pieteikšanās procesu.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <div className="flex-1">
                  <Label htmlFor="email" className="sr-only">E-pasts</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jūsu@epasts.lv"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit">Pieteikties</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ForPhotographersPage;
