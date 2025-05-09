
import Layout from "@/components/layout/Layout";

const TermsPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-8">Pakalpojuma noteikumi</h1>
        
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-medium mt-8 mb-4">1. Vispārīgie noteikumi</h2>
          <p>
            Laipni lūgti Kindred platformā! Šie pakalpojuma noteikumi ("Noteikumi") nosaka 
            jūsu lietošanas nosacījumus attiecībā uz mūsu tīmekļa vietni, kas pieejama vietnē www.kindred.com.
          </p>
          
          <h2 className="text-2xl font-medium mt-8 mb-4">2. Definīcijas</h2>
          <p>
            <strong>Platforma</strong> nozīmē Kindred tīmekļa vietni un saistītos pakalpojumus.
            <br />
            <strong>Lietotājs</strong> ir jebkura persona, kas piekļūst Platformai un to izmanto.
            <br />
            <strong>Fotogrāfs</strong> ir profesionāls pakalpojumu sniedzējs, kas piedāvā savus pakalpojumus, izmantojot Platformu.
          </p>
          
          <h2 className="text-2xl font-medium mt-8 mb-4">3. Konta reģistrācija</h2>
          <p>
            Lai izmantotu noteiktas Platformas funkcijas, jums nepieciešams reģistrēt kontu. Jūs esat atbildīgs par 
            sava konta paroles drošību un visām darbībām, kas notiek jūsu kontā.
          </p>
          
          <h2 className="text-2xl font-medium mt-8 mb-4">4. Platformas lietošana</h2>
          <p>
            Jūs piekrītat izmantot Platformu tikai likumīgiem mērķiem un saskaņā ar šiem Noteikumiem. Jūs piekrītat neizmantot 
            Platformu, lai:
          </p>
          <ul className="list-disc pl-5 my-4">
            <li>Pārkāptu likumus vai noteikumus</li>
            <li>Aizskartu citu lietotāju tiesības</li>
            <li>Izplatītu ļaunprātīgu saturu vai programmatūru</li>
            <li>Traucētu Platformas darbību</li>
          </ul>
          
          <h2 className="text-2xl font-medium mt-8 mb-4">5. Maksājumi un atcelšana</h2>
          <p>
            Rezervējot fotogrāfu caur mūsu Platformu, jūs piekrītat maksāt norādīto summu. Atcelšanas politika ir atkarīga no katra 
            fotogrāfa noteiktajiem nosacījumiem, kas tiek paziņoti rezervācijas laikā.
          </p>
          
          <h2 className="text-2xl font-medium mt-8 mb-4">6. Konfidencialitāte</h2>
          <p>
            Jūsu privātums mums ir svarīgs. Lūdzu, skatiet mūsu Privātuma politiku, lai uzzinātu, kā mēs vācam un izmantojam 
            jūsu personisko informāciju.
          </p>
          
          <h2 className="text-2xl font-medium mt-8 mb-4">7. Noteikumu izmaiņas</h2>
          <p>
            Mēs paturam tiesības jebkurā laikā mainīt vai atjaunināt šos Noteikumus. Jebkuras izmaiņas stājas spēkā nekavējoties 
            pēc to publicēšanas Platformā. Turpinot lietot Platformu pēc šādu izmaiņu veikšanas, jūs piekrītat jaunajiem Noteikumiem.
          </p>
          
          <h2 className="text-2xl font-medium mt-8 mb-4">8. Kontaktinformācija</h2>
          <p>
            Ja jums ir kādi jautājumi par šiem Noteikumiem, lūdzu, sazinieties ar mums, izmantojot kontaktinformācijas sadaļu.
          </p>
          
          <p className="mt-8 text-sm text-muted-foreground">
            Pēdējo reizi atjaunināts: 2025. gada 9. maijā
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default TermsPage;
