
import { CalendarCheck, Heart, Search } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-10 h-10 text-primary" />,
    title: "Find the Perfect Photographer",
    description: "Browse profiles of verified photographers in your area. Filter by style, price, and availability to find your perfect match."
  },
  {
    icon: <CalendarCheck className="w-10 h-10 text-primary" />,
    title: "Book with Confidence",
    description: "See real-time availability, transparent pricing, and instant booking confirmation. No hidden fees, ever."
  },
  {
    icon: <Heart className="w-10 h-10 text-primary" />,
    title: "Create Beautiful Memories",
    description: "Enjoy your session with a trusted professional who understands how to capture your family's unique spirit."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">How Kindred Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We make finding and booking the perfect family photographer simple and stress-free.
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
