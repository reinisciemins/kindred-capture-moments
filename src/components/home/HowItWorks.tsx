
import { CalendarCheck, Heart, Search } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-10 h-10 text-primary" />,
    title: "Atrodiet ideālo fotogrāfu",
    description: "Pārlūkojiet pārbaudītu fotogrāfu profilus jūsu apkārtnē. Filtrējiet pēc stila, cenas un pieejamības, lai atrastu ideālo atbilstību."
  },
  {
    icon: <CalendarCheck className="w-10 h-10 text-primary" />,
    title: "Rezervējiet ar pārliecību",
    description: "Redziet reāllaika pieejamību, caurspīdīgas cenas un tūlītēju rezervācijas apstiprinājumu. Bez slēptām maksām, nekad."
  },
  {
    icon: <Heart className="w-10 h-10 text-primary" />,
    title: "Radiet skaistas atmiņas",
    description: "Izbaudiet sesiju ar uzticamu profesionāli, kurš saprot, kā iemūžināt jūsu ģimenes unikālo garu."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Kā darbojas Kindred</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mēs padarām ideālā ģimenes fotogrāfa atrašanu un rezervēšanu vienkāršu un bez stresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-peach-light p-4 rounded-full mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
