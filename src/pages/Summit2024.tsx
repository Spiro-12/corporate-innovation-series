import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Quote, Play } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Summit2024 = () => {
const speakers = [
  {
    name: "Nicolas Sauvage",
    title: "TDK Ventures",
    image: "https://cdn.jsdelivr.net/gh/Spiro-12/corporate-spark-site@main/assets/images/speakers/2024/Nicolas-Sauvage.png"
  },
  {
    name: "Felipe Novaes",
    title: "The Bakery",
    image: "https://cdn.jsdelivr.net/gh/Spiro-12/corporate-spark-site@main/assets/images/speakers/2024/Felipe-Novaes.png"
  },
  {
    name: "Marion Burchell",
    title: "Azolla Holdings Pty Ltd",
    image: "https://cdn.jsdelivr.net/gh/Spiro-12/corporate-spark-site@main/assets/images/speakers/2024/Marion-Burchell.png"
  },
  {
    name: "Christina Gerakiteys",
    title: "Utopia X",
    image: "https://cdn.jsdelivr.net/gh/Spiro-12/corporate-spark-site@main/assets/images/speakers/2024/Christina-Gerakiteys.png"
  },
  {
    name: "Prof. Paul Bergey",
    title: "UWA Business School",
    image: "https://cdn.jsdelivr.net/gh/Spiro-12/corporate-spark-site@main/assets/images/speakers/2024/Paul-Bergey.png"
  },
  {
    name: "Kemal Anbarci",
    title: "Chevron Technology Ventures",
    image: "https://cdn.jsdelivr.net/gh/Spiro-12/corporate-spark-site@main/assets/images/speakers/2024/Kemal-Anbarci.png"
  },
  {
    name: "Wilson Casado",
    title: "Corporate Innovation Summit",
    image: "https://cdn.jsdelivr.net/gh/Spiro-12/corporate-spark-site@main/assets/images/speakers/2024/Wilson-Casado.png"
  },
  {
    name: "James Edwards",
    title: "BetterLabs",
    image: "https://cdn.jsdelivr.net/gh/Spiro-12/corporate-spark-site@main/assets/images/speakers/2024/James-Edwards.png"
  },
  {
    name: "Gabe Alves",
    title: "Extag",
    image: "https://cdn.jsdelivr.net/gh/Spiro-12/corporate-spark-site@main/assets/images/speakers/2024/Gabe-Alves.png"
  },
  {
    name: "Prof. Andrew Harris",
    title: "Novalith Technologies",
    image: "https://cdn.jsdelivr.net/gh/Spiro-12/corporate-spark-site@main/assets/images/speakers/2024/Andrew-Harris.png"
  },
  {
    name: "Zane Prickett",
    title: "Unearthed",
    image: "https://cdn.jsdelivr.net/gh/Spiro-12/corporate-spark-site@main/assets/images/speakers/2024/Zane-Prickett.png"
  },
  {
    name: "Holly Bridgwater",
    title: "Unearthed",
    image: "https://cdn.jsdelivr.net/gh/Spiro-12/corporate-spark-site@main/assets/images/speakers/2024/Holly-Bridgwater.png"
  },
  {
    name: "Vish Sahasranamam",
    title: "Forge Innovation & Ventures",
    image: "https://cdn.jsdelivr.net/gh/Spiro-12/corporate-spark-site@main/assets/images/speakers/2024/Vish-Sahasranamam.png"
  },
  {
    name: "Pekka Santasalo",
    title: "Rio Tinto",
    image: "https://cdn.jsdelivr.net/gh/Spiro-12/corporate-spark-site@main/assets/images/speakers/2024/Pekka-Santasalo.png"
  },
  {
    name: "Olivia Brooks",
    title: "Founders' Factory",
    image: "https://cdn.jsdelivr.net/gh/Spiro-12/corporate-spark-site@main/assets/images/speakers/2024/Olivia-Brooks.png"
  },
  {
    name: "Flavia Xavier",
    title: "South32",
    image: "https://cdn.jsdelivr.net/gh/Spiro-12/corporate-spark-site@main/assets/images/speakers/2024/Flavia-Xavier.png"
  }
];

  const testimonials = [
    {
      quote: "Add quote from attendents",
      author: "Add name",
      title: "Add job title, Add company"
    },
    {
      quote: "Add quote from attendents",
      author: "Add name",
      title: "Add job title, Add company"
    },
    {
      quote: "Add quote from attendents",
      author: "Add name",
      title: "Add job title, Add company"
    }
  ];

  const agenda = [
    { time: "10:20 AM", session: "Opening Keynote: The Venture Mindset in Action", speaker: "Nicolas Sauvage" },
    { time: "11:00 AM", session: "Panel: Corporate Innovation in Practice", speaker: "Multiple Speakers" },
    { time: "01:30 PM", session: "Corporate Innovation Workshop", speaker: "Marion Burchell & Christina Gerakiteys" },
    { time: "03:00 PM", session: "Panel: Founders' Perspective", speaker: "Multiple Speakers" },
  ];

  const sponsors = {
    seriesPartner: [
      { name: "Visagio", logo: "https://logo.clearbit.com/visagio.com" },
      { name: "City of Perth", logo: "https://logo.clearbit.com/perth.wa.gov.au" }
    ],
    presentingPartners: [
      { name: "The Bakery", logo: "https://logo.clearbit.com/thebakery.com" }
    ],
    supportPartners: [
      { name: "UtopiaX", logo: "https://logo.clearbit.com/utopiax.global" },
      { name: "Meshpoints", logo: "https://logo.clearbit.com/meshpoints.com" },
      { name: "Unearthed", logo: "https://logo.clearbit.com/unearthed.solutions" }
    ],
    satelliteEvent: [
      { name: "West Tech Fest", logo: "https://logo.clearbit.com/westtechfest.com.au" }
    ]
  };

  return (
    <Layout>
      <div className="container py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Event Completed</Badge>
          <h1 className="text-4xl font-bold tracking-tight mb-6">2024 Corporate Innovation Summit</h1>
          <div className="flex items-center justify-center gap-6 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>December 02, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>PCEC, Perth WA</span>
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-primary mb-4">
            "The Venture Mindset"
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our annual summit is the premier gathering for corporate innovation leaders, 
            bringing together 100+ executives, intra/entrepreneurs, and thought leaders 
            for a day of insights, networking, and collaboration.
          </p>
        </div>

        {/* Video Highlights */}
        <div className="mb-16">
          <Card className="border-0 shadow-elegant overflow-hidden">
            <div className="relative h-0 pb-[56.25%] overflow-hidden">
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/xxCaosWNJso"
                title="2024 Corporate Innovation Summit Highlights"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </Card>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">What Attendees Said</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-soft">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Speakers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Speakers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {speakers.map((speaker, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4 mx-auto w-32 h-32">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-32 h-32 object-cover rounded-lg border-4 border-primary/20 group-hover:border-primary transition-colors duration-300"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-1">{speaker.name}</h3>
                <p className="text-sm text-muted-foreground">{speaker.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Agenda Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Agenda Highlights</h2>
          <Card className="border-0 shadow-soft">
            <CardContent className="pt-6">
              <div className="space-y-4">
                {agenda.map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-4 py-3 border-b last:border-b-0">
                    <div className="text-sm font-medium text-primary min-w-20">
                      {item.time}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{item.session}</h4>
                      {item.speaker && (
                        <p className="text-sm text-muted-foreground">{item.speaker}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sponsors */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">2024 Sponsors</h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold text-center mb-6">Series Partner</h3>
              <div className="flex flex-wrap justify-center items-center gap-12">
                {sponsors.seriesPartner.map((sponsor, index) => (
                  <div key={index} className="bg-background rounded-lg p-6 shadow-soft border hover:shadow-elegant transition-all duration-300">
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name}
                      className="h-12 w-auto max-w-[150px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        const sibling = target.nextElementSibling as HTMLElement;
                        target.style.display = 'none';
                        if (sibling) sibling.style.display = 'block';
                      }}
                    />
                    <div className="hidden text-center text-sm font-medium text-muted-foreground">
                      {sponsor.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-center mb-6">Presenting Partners</h3>
              <div className="flex flex-wrap justify-center items-center gap-12">
                {sponsors.presentingPartners.map((sponsor, index) => (
                  <div key={index} className="bg-background rounded-lg p-6 shadow-soft border hover:shadow-elegant transition-all duration-300">
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name}
                      className="h-12 w-auto max-w-[150px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        const sibling = target.nextElementSibling as HTMLElement;
                        target.style.display = 'none';
                        if (sibling) sibling.style.display = 'block';
                      }}
                    />
                    <div className="hidden text-center text-sm font-medium text-muted-foreground">
                      {sponsor.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-center mb-6">Support Partners</h3>
              <div className="flex flex-wrap justify-center items-center gap-8">
                {sponsors.supportPartners.map((sponsor, index) => (
                  <div key={index} className="bg-background rounded-lg p-3 shadow-soft border hover:shadow-elegant transition-all duration-300">
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name}
                      className="h-10 w-auto max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        const sibling = target.nextElementSibling as HTMLElement;
                        target.style.display = 'none';
                        if (sibling) sibling.style.display = 'block';
                      }}
                    />
                    <div className="hidden text-center text-xs font-medium text-muted-foreground">
                      {sponsor.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-center mb-6">Satellite event of</h3>
              <div className="flex flex-wrap justify-center items-center gap-6">
                 {sponsors.satelliteEvent.map((sponsor, index) => (
                   <div key={index} className="bg-background rounded-lg p-4 shadow-soft border hover:shadow-elegant transition-all duration-300">
                     <img 
                       src={sponsor.logo} 
                       alt={sponsor.name}
                       className="h-12 w-auto max-w-[140px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        const sibling = target.nextElementSibling as HTMLElement;
                        target.style.display = 'none';
                        if (sibling) sibling.style.display = 'block';
                      }}
                    />
                    <div className="hidden text-center text-xs font-medium text-muted-foreground">
                      {sponsor.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Summit2024;
