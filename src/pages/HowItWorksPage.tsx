
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, CalendarCheck, MessageCircle, Heart, Image, Check } from "lucide-react";

const steps = [
  {
    icon: <Search className="w-12 h-12 text-primary" />,
    title: "Meklēt un filtrēt",
    description: "Meklējiet fotogrāfus pēc atrašanās vietas, vēlamā stila, cenu diapazona un pieejamības. Lasiet atsauksmes un skatiet pārbaudītus sertifikātus, lai atrastu ideālo fotogrāfu jūsu ģimenei."
  },
  {
    icon: <Image className="w-12 h-12 text-primary" />,
    title: "Apskatiet portfolio",
    description: "Izpētiet detalizētus portfolio, lai redzētu katra fotogrāfa stilu un iepriekšējos darbus. Katrs fotogrāfs mūsu platformā ir rūpīgi pārbaudīts, lai nodrošinātu kvalitāti un profesionalitāti."
  },
  {
    icon: <CalendarCheck className="w-12 h-12 text-primary" />,
    title: "Rezervējiet sesiju",
    description: "Kad atrodat fotogrāfu, kurš jums patīk, izvēlieties pakalpojumu paketi un pārbaudiet reāllaika pieejamību. Rezervējiet sesiju ar tūlītēju apstiprinājumu un bez slēptām maksām."
  },
  {
    icon: <MessageCircle className="w-12 h-12 text-primary" />,
    title: "Sazinieties tieši",
    description: "Sūtiet ziņojumus fotogrāfam, lai apspriestu savu vīziju, saskaņotu detaļas un uzdotu jautājumus pirms sesijas. Mūsu platforma padara komunikāciju vienkāršu un tiešu."
  },
  {
    icon: <Heart className="w-12 h-12 text-primary" />,
    title: "Izbaudiet pieredzi",
    description: "Atpūtieties un baudiet fotografēšanas sesiju, zinot, ka esat izvēlējies uzticamu profesionāli, kurš specializējas darbā ar ģimenēm kā jūsējā."
  }
];

const HowItWorksPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-serif font-medium mb-4">Kā darbojas Kindred</h1>
            <p className="text-lg text-muted-foreground">
              Mēs esam vienkāršojuši procesu, kā atrast un rezervēt uzticamu ģimenes fotogrāfu.
              Lūk, kā mūsu platforma palīdz jums iemūžināt vērtīgos mirkļus ar vieglu pieeju.
            </p>
          </div>

          <div className="space-y-12 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-peach-light p-4 rounded-full">
                  {step.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-medium mb-2">{step.title}</h2>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-secondary/50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-serif font-medium mb-4">Kāpēc ģimenes izvēlas Kindred</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start">
                <Check className="text-primary shrink-0 mt-1 mr-3" />
                <p>Pārbaudīti fotogrāfi ar rūpīgu izvērtēšanu</p>
              </div>
              <div className="flex items-start">
                <Check className="text-primary shrink-0 mt-1 mr-3" />
                <p>Caurspīdīgas cenas bez slēptām maksām</p>
              </div>
              <div className="flex items-start">
                <Check className="text-primary shrink-0 mt-1 mr-3" />
                <p>Īstas atsauksmes no citām ģimenēm</p>
              </div>
              <div className="flex items-start">
                <Check className="text-primary shrink-0 mt-1 mr-3" />
                <p>Droša rezervācijas un maksājumu sistēma</p>
              </div>
              <div className="flex items-start">
                <Check className="text-primary shrink-0 mt-1 mr-3" />
                <p>Tieša komunikācija ar fotogrāfiem</p>
              </div>
              <div className="flex items-start">
                <Check className="text-primary shrink-0 mt-1 mr-3" />
                <p>Apmierinātības garantija visām rezervācijām</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-serif font-medium mb-6">Gatavi atrast savu ideālo fotogrāfu?</h2>
            <Button asChild size="lg">
              <Link to="/search">Meklēt fotogrāfus</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HowItWorksPage;
