
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const PricingPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Cenu plāni fotogrāfiem</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Izvēlieties piemērotāko plānu, lai parādītu savu portfolio un iegūtu jaunus klientus caur Kindred platformu.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <div className="border rounded-lg p-8 flex flex-col h-full">
            <h3 className="text-xl font-semibold">Pamata</h3>
            <div className="mt-4 mb-6">
              <span className="text-4xl font-bold">€19</span>
              <span className="text-muted-foreground">/mēnesī</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Ideāls fotogrāfiem, kas tikko sākuši savu karjeru vai vēlas izmēģināt platformu.
            </p>
            <div className="space-y-4 mb-8 flex-grow">
              <div className="flex items-start">
                <Check className="text-primary mr-3 mt-1" size={18} />
                <span>Pamata profils ar līdz 20 fotogrāfijām</span>
              </div>
              <div className="flex items-start">
                <Check className="text-primary mr-3 mt-1" size={18} />
                <span>Pieejamības kalendārs</span>
              </div>
              <div className="flex items-start">
                <Check className="text-primary mr-3 mt-1" size={18} />
                <span>Līdz 5 rezervācijām mēnesī</span>
              </div>
              <div className="flex items-start">
                <Check className="text-primary mr-3 mt-1" size={18} />
                <span>8% komisijas maksa par katru rezervāciju</span>
              </div>
            </div>
            <Button asChild className="w-full mt-auto" variant="outline">
              <Link to="/signup?plan=basic">Reģistrēties</Link>
            </Button>
          </div>

          {/* Pro Plan */}
          <div className="border border-primary rounded-lg p-8 flex flex-col h-full relative overflow-hidden shadow-md">
            <div className="absolute top-5 right-0 bg-primary text-primary-foreground py-1 px-4 text-sm font-medium -mr-8 rotate-45 transform origin-center">
              Populārākais
            </div>
            <h3 className="text-xl font-semibold">Profesionāls</h3>
            <div className="mt-4 mb-6">
              <span className="text-4xl font-bold">€39</span>
              <span className="text-muted-foreground">/mēnesī</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Pilns komplekts pieredzējušiem fotogrāfiem, kas vēlas palielināt savu klientu loku.
            </p>
            <div className="space-y-4 mb-8 flex-grow">
              <div className="flex items-start">
                <Check className="text-primary mr-3 mt-1" size={18} />
                <span>Paplašināts profils ar neierobežotu fotogrāfiju skaitu</span>
              </div>
              <div className="flex items-start">
                <Check className="text-primary mr-3 mt-1" size={18} />
                <span>Pieejamības kalendārs ar blokēšanas opciju</span>
              </div>
              <div className="flex items-start">
                <Check className="text-primary mr-3 mt-1" size={18} />
                <span>Neierobežots rezervāciju skaits</span>
              </div>
              <div className="flex items-start">
                <Check className="text-primary mr-3 mt-1" size={18} />
                <span>5% komisijas maksa par katru rezervāciju</span>
              </div>
              <div className="flex items-start">
                <Check className="text-primary mr-3 mt-1" size={18} />
                <span>Prioritāra vieta meklēšanas rezultātos</span>
              </div>
            </div>
            <Button asChild className="w-full mt-auto">
              <Link to="/signup?plan=pro">Reģistrēties</Link>
            </Button>
          </div>

          {/* Premium Plan */}
          <div className="border rounded-lg p-8 flex flex-col h-full">
            <h3 className="text-xl font-semibold">Premium</h3>
            <div className="mt-4 mb-6">
              <span className="text-4xl font-bold">€79</span>
              <span className="text-muted-foreground">/mēnesī</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Visaptverošs risinājums profesionāļiem, kas vēlas maksimālu redzamību un izaugsmi.
            </p>
            <div className="space-y-4 mb-8 flex-grow">
              <div className="flex items-start">
                <Check className="text-primary mr-3 mt-1" size={18} />
                <span>Visas Profesionālā plāna priekšrocības</span>
              </div>
              <div className="flex items-start">
                <Check className="text-primary mr-3 mt-1" size={18} />
                <span>Izcelts profils mājaslapas sākumā</span>
              </div>
              <div className="flex items-start">
                <Check className="text-primary mr-3 mt-1" size={18} />
                <span>3% komisijas maksa par katru rezervāciju</span>
              </div>
              <div className="flex items-start">
                <Check className="text-primary mr-3 mt-1" size={18} />
                <span>Pielāgotas mārketinga kampaņas</span>
              </div>
              <div className="flex items-start">
                <Check className="text-primary mr-3 mt-1" size={18} />
                <span>Personisks konts vadītājs un atbalsts</span>
              </div>
            </div>
            <Button asChild className="w-full mt-auto" variant="outline">
              <Link to="/signup?plan=premium">Reģistrēties</Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">Bieži uzdotie jautājumi par cenām</h2>
          
          <div className="max-w-3xl mx-auto text-left space-y-8">
            <div>
              <h3 className="font-medium text-lg mb-2">Vai tiek piemērota ilgtermiņa saistība?</h3>
              <p className="text-muted-foreground">
                Nē, jūs varat atcelt savu abonementu jebkurā laikā. Mēs piedāvājam arī 10% atlaidi, ja izvēlaties gada maksājumu plānu.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-lg mb-2">Cik daudz izmaksā komisija?</h3>
              <p className="text-muted-foreground">
                Komisijas maksa ir atkarīga no jūsu abonēšanas plāna - no 3% līdz 8% no katra darījuma. Šī maksa sedz 
                maksājumu apstrādi, klientu atbalstu un platformas apdrošināšanu.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-lg mb-2">Vai varu mainīt plānus vēlāk?</h3>
              <p className="text-muted-foreground">
                Jā, jūs varat jebkurā laikā atjaunināt vai pazemināt savu plānu. Atjauninājumi stājas spēkā nekavējoties, 
                bet plāna pazemināšana stāsies spēkā pēc pašreizējā norēķinu cikla beigām.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PricingPage;
