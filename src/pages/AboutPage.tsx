
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-serif font-medium mb-4">Par Kindred</h1>
            <p className="text-lg text-muted-foreground">
              Savienojam ģimenes ar uzticamiem fotogrāfiem, lai iemūžinātu dzīves vērtīgos mirkļus.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-serif font-medium mb-4">Mūsu stāsts</h2>
            <p>
              Kindred tika dibināts 2023. gadā ar mērķi atvieglot ģimenēm iespēju atrast un rezervēt kvalificētus fotogrāfus īpašiem dzīves mirkļiem. Mūsu platformas ideju iedvesmoja personīgā pieredze – kā jaunajiem vecākiem mums bija sarežģīti atrast uzticamu fotogrāfu, kas varētu iemūžināt mūsu bērna pirmos dzīves mirkļus.
            </p>
            
            <p>
              Kā profesionāli fotogrāfi un jaunie vecāki, mēs sapratām, cik svarīgi ir iemūžināt šos neatkārtojamos mirkļus, un cik grūti var būt atrast pareizo personu šim uzdevumam. Tāpēc mēs izveidojām Kindred – platformu, kas vienkāršo procesu un dod iespēju ģimenēm viegli atrast un rezervēt fotogrāfus, kas specializējas tieši ģimeņu fotografēšanā.
            </p>

            <h2 className="text-2xl font-serif font-medium mb-4 mt-8">Mūsu misija</h2>
            <p>
              Mūsu misija ir savienot ģimenes ar uzticamiem, profesionāliem fotogrāfiem, lai palīdzētu iemūžināt dzīves īpašos mirkļus. Mēs ticam, ka katrai ģimenei vajadzētu būt iespējai radīt kvalitatīvus foto atmiņu krājumus, kas priecēs paaudžu paaudzēm.
            </p>

            <h2 className="text-2xl font-serif font-medium mb-4 mt-8">Mūsu vērtības</h2>
            <ul>
              <li>
                <strong>Uzticība</strong> - Visi mūsu platformas fotogrāfi ir rūpīgi pārbaudīti, lai nodrošinātu augstākās kvalitātes pakalpojumus.
              </li>
              <li>
                <strong>Caurspīdīgums</strong> - Mēs ticam skaidrām, godīgām cenām bez slēptām maksām vai pārsteigumiem.
              </li>
              <li>
                <strong>Kvalitāte</strong> - Mēs neatlaidīgi tiecamies uz izcilību visos aspektos, no platformas lietotāju pieredzes līdz fotogrāfu darbu kvalitātei.
              </li>
              <li>
                <strong>Drošība</strong> - Mēs prioritizējam jūsu ģimenes drošību un privātumu visos līmeņos.
              </li>
              <li>
                <strong>Vienkāršība</strong> - Mēs ticam, ka tehnoloģijām vajadzētu atvieglot dzīvi, nevis sarežģīt to.
              </li>
            </ul>

            <h2 className="text-2xl font-serif font-medium mb-4 mt-8">Mūsu komanda</h2>
            <p>
              Mūsu komandu veido pieredzējuši profesionāļi ar pieredzi fotogrāfijā, tehnoloģijās un biznesa attīstībā. Mēs esam arī vecāki, kas saprot, cik svarīgi ir iemūžināt īpašos ģimenes mirkļus.
            </p>

            <div className="flex justify-center mt-10">
              <Button asChild size="lg">
                <Link to="/contact">Sazināties ar mums</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
