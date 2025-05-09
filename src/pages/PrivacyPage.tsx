
import Layout from "@/components/layout/Layout";

const PrivacyPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-8">Privātuma politika</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="lead">
            Kindred apņemas aizsargāt jūsu privātumu. Šajā Privātuma politikā ir izskaidrots, kā mēs vācam, izmantojam un aizsargām 
            jūsu personisko informāciju.
          </p>
          
          <h2 className="text-2xl font-medium mt-8 mb-4">1. Kādu informāciju mēs vācam</h2>
          <p>
            Mēs varam vākt šādus personiskos datus:
          </p>
          <ul className="list-disc pl-5 my-4">
            <li>Identifikācijas informāciju (vārdu, uzvārdu, e-pastu)</li>
            <li>Kontaktinformāciju (tālruņa numuru, adresi)</li>
            <li>Maksājumu informāciju (kredītkartes datus, rēķina adresi)</li>
            <li>Profila informāciju (fotogrāfijas, aprakstus)</li>
            <li>Lietošanas datus par to, kā jūs mijiedarbojaties ar mūsu platformu</li>
          </ul>
          
          <h2 className="text-2xl font-medium mt-8 mb-4">2. Kā mēs izmantojam jūsu informāciju</h2>
          <p>
            Mēs izmantojam jūsu informāciju, lai:
          </p>
          <ul className="list-disc pl-5 my-4">
            <li>Nodrošinātu, uzturētu un uzlabotu mūsu pakalpojumus</li>
            <li>Apstrādātu rezervācijas un maksājumus</li>
            <li>Sazinātos ar jums par rezervācijām, pakalpojumiem un atjauninājumiem</li>
            <li>Nodrošinātu klientu atbalstu</li>
            <li>Aizsargātu mūsu un citu lietotāju drošību</li>
          </ul>
          
          <h2 className="text-2xl font-medium mt-8 mb-4">3. Kā mēs kopīgojam jūsu informāciju</h2>
          <p>
            Mēs varam kopīgot jūsu personisko informāciju ar:
          </p>
          <ul className="list-disc pl-5 my-4">
            <li>Fotogrāfiem, ar kuriem jūs izveidojat rezervāciju</li>
            <li>Pakalpojumu sniedzējiem, kas palīdz mums nodrošināt pakalpojumus</li>
            <li>Tiesībsargājošām iestādēm, ja to pieprasa likums</li>
          </ul>
          
          <h2 className="text-2xl font-medium mt-8 mb-4">4. Jūsu tiesības</h2>
          <p>
            Atkarībā no jūsu atrašanās vietas jums var būt noteiktas tiesības attiecībā uz saviem personas datiem, tostarp:
          </p>
          <ul className="list-disc pl-5 my-4">
            <li>Piekļuve saviem datiem</li>
            <li>Datu labošana vai dzēšana</li>
            <li>Ierobežot vai iebilst pret apstrādi</li>
            <li>Datu pārnesamība</li>
          </ul>
          
          <h2 className="text-2xl font-medium mt-8 mb-4">5. Datu drošība</h2>
          <p>
            Mēs īstenojam atbilstošus tehniskos un organizatoriskos drošības pasākumus, lai aizsargātu jūsu personas datus pret 
            nejaušu vai nelikumīgu iznīcināšanu, zudumu, izmaiņām vai neatļautu izpaušanu.
          </p>
          
          <h2 className="text-2xl font-medium mt-8 mb-4">6. Sīkdatnes</h2>
          <p>
            Mēs izmantojam sīkdatnes un līdzīgas izsekošanas tehnoloģijas, lai uzlabotu jūsu pieredzi mūsu platformā. Jūs varat 
            kontrolēt sīkdatņu iestatījumus savā pārlūkprogrammā.
          </p>
          
          <h2 className="text-2xl font-medium mt-8 mb-4">7. Izmaiņas šajā politikā</h2>
          <p>
            Mēs varam periodiski atjaunināt šo privātuma politiku. Mēs informēsim jūs par jebkādām būtiskām izmaiņām, publicējot 
            jaunu versiju mūsu vietnē.
          </p>
          
          <h2 className="text-2xl font-medium mt-8 mb-4">8. Sazinieties ar mums</h2>
          <p>
            Ja jums ir jautājumi vai bažas par mūsu privātuma praksi, lūdzu, sazinieties ar mums pa e-pastu privacy@kindred.com.
          </p>
          
          <p className="mt-8 text-sm text-muted-foreground">
            Pēdējo reizi atjaunināta: 2025. gada 9. maijā
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPage;
