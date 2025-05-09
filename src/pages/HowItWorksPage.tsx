
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, CalendarCheck, MessageCircle, Heart, Image, Check } from "lucide-react";

const steps = [
  {
    icon: <Search className="w-12 h-12 text-primary" />,
    title: "Browse and Filter",
    description: "Search for photographers based on your location, preferred style, price range, and availability. Read reviews and see verified credentials to find the perfect match for your family."
  },
  {
    icon: <Image className="w-12 h-12 text-primary" />,
    title: "Review Portfolios",
    description: "Explore detailed portfolios to see each photographer's style and previous work. Every photographer on our platform is thoroughly vetted for quality and professionalism."
  },
  {
    icon: <CalendarCheck className="w-12 h-12 text-primary" />,
    title: "Book Your Session",
    description: "When you find a photographer you like, select a package and check real-time availability. Book your session with instant confirmation and no hidden fees."
  },
  {
    icon: <MessageCircle className="w-12 h-12 text-primary" />,
    title: "Connect Directly",
    description: "Message your photographer to discuss your vision, coordinate details, and ask any questions before your session. Our platform makes communication simple and direct."
  },
  {
    icon: <Heart className="w-12 h-12 text-primary" />,
    title: "Enjoy Your Experience",
    description: "Relax and enjoy your photography session, knowing you've selected a trusted professional who specializes in working with families like yours."
  }
];

const HowItWorksPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-serif font-medium mb-4">How Kindred Works</h1>
            <p className="text-lg text-muted-foreground">
              We've simplified the process of finding and booking a trusted family photographer.
              Here's how our platform helps you capture your precious moments with ease.
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
            <h2 className="text-2xl font-serif font-medium mb-4">Why Families Choose Kindred</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start">
                <Check className="text-primary shrink-0 mt-1 mr-3" />
                <p>Verified photographers with background checks</p>
              </div>
              <div className="flex items-start">
                <Check className="text-primary shrink-0 mt-1 mr-3" />
                <p>Transparent pricing with no hidden fees</p>
              </div>
              <div className="flex items-start">
                <Check className="text-primary shrink-0 mt-1 mr-3" />
                <p>Real reviews from other families</p>
              </div>
              <div className="flex items-start">
                <Check className="text-primary shrink-0 mt-1 mr-3" />
                <p>Secure booking and payment system</p>
              </div>
              <div className="flex items-start">
                <Check className="text-primary shrink-0 mt-1 mr-3" />
                <p>Direct communication with photographers</p>
              </div>
              <div className="flex items-start">
                <Check className="text-primary shrink-0 mt-1 mr-3" />
                <p>Satisfaction guarantee on all bookings</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-serif font-medium mb-6">Ready to find your perfect photographer?</h2>
            <Button asChild size="lg">
              <Link to="/search">Browse Photographers</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HowItWorksPage;
