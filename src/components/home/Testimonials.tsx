
import { Card, CardContent } from "@/components/ui/card";

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    quote: "Mēs atradām vispārsteidzošāko fotogrāfu mūsu ģimenes fotogrāfijām. Process bija tik vienkāršs, un rezultāti pārspēja manas cerības!",
    author: "Sanda M.",
    role: "Divu bērnu māte",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 2,
    quote: "Kā aizņemtai mammai, es novērtēju, cik viegli bija atrast fotogrāfu, kurš atbilda mūsu stilam un grafikam. Mūsu fotogrāfijas ir ideālas!",
    author: "Jekaterina T.",
    role: "Trīs bērnu māte",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 3,
    quote: "Kindred padarīja tik vienkāršu pareizā fotogrāfa atrašanu mūsu grūtniecības fotogrāfijām. Caurspīdīgās cenas nozīmēja, ka nebija nekādu pārsteigumu.",
    author: "Laura K.",
    role: "Topošā māmiņa",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Ko saka ģimenes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Īsti stāsti no ģimenēm, kas atradušas savu ideālo fotogrāfu ar Kindred palīdzību
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
