
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import FeaturedPhotographers from "@/components/home/FeaturedPhotographers";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <HowItWorks />
      <FeaturedPhotographers />
      <Testimonials />
      <CTASection />
    </Layout>
  );
};

export default Index;
