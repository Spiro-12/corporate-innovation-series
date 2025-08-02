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
    image: "/images/speakers/nicolas-sauvage.jpg"
  },
  {
    name: "Felipe Novaes",
    title: "The Bakery",
    image: "/images/speakers/felipe-novaes.jpg"
  },
  {
    name: "Marion Burchell",
    title: "Azolla Holdings Pty Ltd",
    image: "/images/speakers/marion-burchell.jpg"
  },
  {
    name: "Christina Gerakiteys",
    title: "Utopia X",
    image: "/images/speakers/christina-gerakiteys.jpg"
  },
  {
    name: "Prof. Paul Bergey",
    title: "UWA Business School",
    image: "/images/speakers/paul-bergey.jpg"
  },
  {
    name: "Kemal Anbarci",
    title: "Chevron Technology Ventures",
    image: "/images/speakers/kemal-anbarci.jpg"
  },
  {
    name: "Wilson Casado",
    title: "Corporate Innovation Summit",
    image: "/images/speakers/wilson-casado.jpg"
  },
  {
    name: "James Edwards",
    title: "BetterLabs",
    image: "/images/speakers/james-edwards.jpg"
  },
  {
    name: "Gabe Alves",
    title: "Extag",
    image: "/images/speakers/gabe-alves.jpg"
  },
  {
    name: "Prof. Andrew Harris",
    title: "Novalith Technologies",
    image: "/images/speakers/andrew-harris.jpg"
  },
  {
    name: "Zane Prickett",
    title: "Unearthed",
    image: "/images/speakers/zane-prickett.jpg"
  },
  {
    name: "Holly Bridgwater",
    title: "Unearthed",
    image: "/images/speakers/holly-bridgwater.jpg"
  },
  {
    name: "Vish Sahasranamam",
    title: "Forge Innovation & Ventures",
    image: "/images/speakers/vish-sahasranamam.jpg"
  },
  {
    name: "Pekka Santasalo",
    title: "Rio Tinto",
    image: "/images/speakers/pekka-santasalo.jpg"
  },
  {
    name: "Olivia Brooks",
    title: "Founders' Factory",
    image: "/images/speakers/olivia-brooks.jpg"
  },
  {
    name: "Flavia Xavier",
    title: "South32",
    image: "/images/speakers/flavia-xavier.jpg"
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
      { name: "UtopiaX", logo: "https://logo.clearbit.com/utopiax.com" },
      { name: "Meshpoints", logo: "https://logo.clearbit.com/meshpoints.com" },
      { name: "Unearthed", logo: "https://logo.clearbit.com/unearthed.solutions" }
    ],
    satelliteEvent: [
      { name: "West Tech Fest", logo: "https://logo.clearbit.com/westtechfest.com" }
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
            <div className="relative h-64 bg-gradient-to-r from-primary to-primary-glow flex items-center justify-center">
              <Button size="lg" variant="secondary" className="group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Summit Highlights
              </Button>
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
                  <div key={index} className="bg-background rounded-lg p-4 shadow-soft border hover:shadow-elegant transition-all duration-300">
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name}
                      className="h-8 w-auto max-w-[100px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
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
                  <div key={index} className="bg-background rounded-lg p-3 shadow-soft border hover:shadow-elegant transition-all duration-300">
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name}
                      className="h-6 w-auto max-w-[80px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
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
