
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-blue-light">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6 max-w-2xl mx-auto">
          Ready to capture your family's special moments?
        </h2>
        <p className="text-lg mb-10 max-w-2xl mx-auto text-muted-foreground">
          Join thousands of families who have found their perfect photographer through Kindred.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg">
            <Link to="/search">
              Find Your Photographer
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/signup">
              Create an Account
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
