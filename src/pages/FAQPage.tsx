
import Layout from "@/components/layout/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-center">Biežāk uzdotie jautājumi</h1>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Kā darbojas Kindred?</AccordionTrigger>
              <AccordionContent>
                Kindred ir platforma, kas savieno ģimenes ar profesionāliem fotogrāfiem. Jūs varat meklēt fotogrāfus pēc atrašanās vietas, 
                specializācijas un cenas, apskatīt viņu portfolio, pārbaudīt pieejamību un veikt tiešsaistes rezervāciju. Mēs esam rūpīgi 
                pārbaudījuši visus mūsu platformas fotogrāfus, lai nodrošinātu augstākās kvalitātes pakalpojumus.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>Kā es varu rezervēt fotogrāfu?</AccordionTrigger>
              <AccordionContent>
                Fotogrāfa rezervēšana ir vienkārša. Vispirms atrodiet fotogrāfu, kas atbilst jūsu prasībām, izmantojot mūsu meklēšanas rīku. 
                Pārskatiet viņu portfolio un cenas. Kad esat gatavs, pārbaudiet viņu pieejamību kalendārā, izvēlieties datumu un laiku, 
                un veiciet rezervāciju. Jūs saņemsiet tūlītēju apstiprinājumu un detalizētu informāciju par rezervāciju.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>Vai es varu atcelt rezervāciju?</AccordionTrigger>
              <AccordionContent>
                Jā, jūs varat atcelt rezervāciju, bet atcelšanas noteikumi var atšķirties atkarībā no fotogrāfa politikas. 
                Parasti pilnu atmaksu var saņemt, ja atcelšana notiek vismaz 48 stundas pirms plānotās fotosesijas. 
                Lai atceltu, dodieties uz savu rezervāciju sadaļu savā kontā un izvēlieties "Atcelt rezervāciju".
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger>Kāda ir cenu struktūra?</AccordionTrigger>
              <AccordionContent>
                Cenas nosaka katrs fotogrāfs individuāli un tās parasti ietver fotosesiju un noteiktu skaitu rediģētu fotogrāfiju. 
                Visi pakalpojumi un to cenas ir skaidri norādītas katra fotogrāfa profilā pirms rezervācijas. 
                Nav nekādu slēptu maksu vai papildu izmaksu - tas, ko redzat, ir tas, ko jūs maksāsiet.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger>Kā es saņemšu savas fotogrāfijas?</AccordionTrigger>
              <AccordionContent>
                Pēc fotosesijas fotogrāfs rediģēs jūsu attēlus un nosūtīs jums digitālu galeriju ar gala rezultātiem, 
                parasti 1-2 nedēļu laikā. No turienes jūs varēsiet lejupielādēt fotogrāfijas augstā izšķirtspējā, 
                koplietot tās ar ģimeni un draugiem, vai pat pasūtīt drukātas kopijas, ja fotogrāfs piedāvā šādu iespēju.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6">
              <AccordionTrigger>Vai fotogrāfi ir pārbaudīti?</AccordionTrigger>
              <AccordionContent>
                Jā, mēs rūpīgi pārbaudam visus fotogrāfus, pirms viņi pievienojas mūsu platformai. Mēs pārbaudam viņu profesionālo 
                pieredzi, kvalifikāciju un darba kvalitāti. Mēs arī pieprasām fona pārbaudi, lai nodrošinātu jūsu ģimenes drošību 
                un mieru. Tikai fotogrāfi, kuri izpilda mūsu stingros standartus, var piedāvāt savus pakalpojumus Kindred platformā.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-7">
              <AccordionTrigger>Kas notiek, ja fotogrāfs neierodas?</AccordionTrigger>
              <AccordionContent>
                Mūsu fotogrāfi ir profesionāļi ar augstu uzticamību, taču neparedzētās situācijās, ja fotogrāfs neierodas, 
                mēs piedāvājam 100% atmaksu un palīdzēsim atrast citu fotogrāfu, cik ātri vien iespējams. Lūdzu, sazinieties ar 
                mūsu klientu atbalsta dienestu nekavējoties, ja rodas šāda situācija.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-8">
              <AccordionTrigger>Vai es varu sazināties ar fotogrāfu pirms rezervēšanas?</AccordionTrigger>
              <AccordionContent>
                Jā, mēs mudinām jūs sazināties ar fotogrāfu pirms rezervēšanas, lai pārrunātu jūsu vīziju, prasības un jebkurus 
                īpašus pieprasījumus. Katram fotogrāfam ir ziņojumu funkcija viņa profilā, kas ļauj jums sazināties tieši caur platformu.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </Layout>
  );
};

export default FAQPage;
