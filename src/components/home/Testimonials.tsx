
import { Card, CardContent } from "@/components/ui/card";

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    quote: "We found the most amazing photographer for our family photos. The process was so simple and the results were beyond what I could have hoped for!",
    author: "Sarah M.",
    role: "Mother of two",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 2,
    quote: "As a busy mom, I appreciated how easy it was to find a photographer who fit our style and schedule. Our photos are perfect!",
    author: "Jessica T.",
    role: "Mother of three",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 3,
    quote: "Kindred made it so easy to find the right photographer for our maternity photos. The transparent pricing meant no surprises.",
    author: "Laura K.",
    role: "Expecting mother",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">What Families Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from families who found their perfect photographer through Kindred
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="shadow-soft">
              <CardContent className="p-8">
                <div className="mb-6">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.33333 20H4L8 12H5.33333V4H13.3333V13.3333L9.33333 20ZM22.6667 20H17.3333L21.3333 12H18.6667V4H26.6667V13.3333L22.6667 20Z" fill="#FEC6A1"/>
                  </svg>
                </div>
                <p className="mb-6 text-foreground">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
