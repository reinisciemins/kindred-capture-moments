
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">404 - Lapa nav atrasta</h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          Atvainojiet, meklētā lapa nav atrasta. Iespējams, tā ir pārvietota vai dzēsta.
        </p>
        <Button asChild size="lg">
          <Link to="/">Atgriezties uz sākumlapu</Link>
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
