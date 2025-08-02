import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Calendar, MapPin, Shield, Users, Lightbulb, UserPlus } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Summit2025 = () => {
  const speakers = [
    { 
      name: "Sam Altman", 
      title: "CEO, OpenAI", 
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop&crop=face"
    },
    { 
      name: "Demis Hassabis", 
      title: "CEO, Google DeepMind", 
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=300&h=300&fit=crop&crop=face"
    },
    { 
      name: "Jensen Huang", 
      title: "CEO, NVIDIA", 
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const highlights = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "AI Innovation Workshops",
      description: "Hands-on sessions exploring practical AI implementation strategies"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Executive Roundtables",
      description: "Intimate discussions on AI governance, ethics, and business transformation"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "AI Safety & Ethics Panel",
      description: "Leading researchers discuss responsible AI development and deployment"
    }
  ];

  const sponsors = {
    presentingPartners: [
      { name: "The Bakery", logo: "https://logo.clearbit.com/thebakery.com" }
    ],
    platinumSponsors: [
      { name: "TBC", logo: null }
    ],
    goldSponsors: [
      { name: "TBC", logo: null }
    ],
    silverSponsors: [
      { name: "TBC", logo: null }
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
          <Badge className="mb-4 bg-gradient-to-r from-primary to-primary-glow text-white">
            Early Bird Registration Open
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight mb-6">2025 Innovation Summit</h1>
          <div className="flex items-center justify-center gap-6 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>October 16-17, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>New York, NY</span>
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-primary mb-4">
            "AI-Driven Innovation at Scale"
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Join 600+ innovation leaders to explore how artificial intelligence is transforming 
            innovation processes, accelerating R&D, and creating new business models across industries.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90">
              Register Interest
            </Button>
            <Button size="lg" variant="outline">
              Download Prospectus
            </Button>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Summit Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-0 shadow-soft text-center">
                <CardContent className="pt-8">
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {highlight.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Speakers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Confirmed Speakers</h2>
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
            
            {/* More speakers coming card */}
            <div className="text-center group">
              <div className="relative mb-4 mx-auto w-32 h-32">
                <div className="w-32 h-32 border-4 border-dashed border-primary/30 rounded-lg flex items-center justify-center bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300">
                  <UserPlus className="h-8 w-8 text-primary/60 group-hover:text-primary transition-colors duration-300" />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-1 text-primary">More speakers</h3>
              <p className="text-sm text-muted-foreground">to be confirmed soon!</p>
            </div>
          </div>
        </div>

        {/* NDA & Access Information */}
        <div className="mb-16">
          <Card className="border-0 shadow-soft bg-accent/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Event Access & Confidentiality
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm text-muted-foreground">
                <p>
                  <strong>Invitation Only:</strong> This summit is limited to C-suite executives, 
                  VPs of Innovation, Chief Technology Officers, and senior leaders from Fortune 1000 companies.
                </p>
                <p>
                  <strong>Chatham House Rule:</strong> All sessions operate under the Chatham House Rule, 
                  allowing participants to use information freely while maintaining speaker confidentiality.
                </p>
                <p>
                  <strong>NDA Requirements:</strong> Attendees will be required to sign a mutual NDA 
                  covering proprietary technologies, strategic initiatives, and competitive insights shared during the event.
                </p>
                <p>
                  <strong>No Recording Policy:</strong> Audio and video recording is strictly prohibited 
                  to maintain the confidential nature of discussions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Draft Theme & Positioning */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Summit Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle>AI Implementation at Scale</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Explore practical strategies for implementing AI across large organizations, 
                  including infrastructure, talent, and change management considerations.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle>AI-Accelerated R&D</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Discover how AI is transforming research and development processes, 
                  from drug discovery to materials science and beyond.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle>Responsible AI Governance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Address the challenges of AI ethics, bias mitigation, and regulatory 
                  compliance in enterprise AI deployments.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle>AI-Native Business Models</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learn how companies are building AI-first products and services 
                  that create new revenue streams and competitive advantages.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sponsors */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">2025 Sponsors</h2>
          
          <div className="space-y-12">
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
              <h3 className="text-xl font-semibold text-center mb-6">Platinum Sponsors</h3>
              <div className="flex flex-wrap justify-center items-center gap-8">
                {sponsors.platinumSponsors.map((sponsor, index) => (
                  <div key={index} className="bg-background rounded-lg p-4 shadow-soft border hover:shadow-elegant transition-all duration-300">
                    {sponsor.logo ? (
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
                    ) : (
                      <div className="h-8 flex items-center justify-center text-muted-foreground font-medium text-sm">
                        {sponsor.name}
                      </div>
                    )}
                    <div className="hidden text-center text-xs font-medium text-muted-foreground">
                      {sponsor.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-center mb-6">Gold Sponsors</h3>
              <div className="flex flex-wrap justify-center items-center gap-8">
                {sponsors.goldSponsors.map((sponsor, index) => (
                  <div key={index} className="bg-background rounded-lg p-4 shadow-soft border hover:shadow-elegant transition-all duration-300">
                    {sponsor.logo ? (
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
                    ) : (
                      <div className="h-8 flex items-center justify-center text-muted-foreground font-medium text-sm">
                        {sponsor.name}
                      </div>
                    )}
                    <div className="hidden text-center text-xs font-medium text-muted-foreground">
                      {sponsor.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-center mb-6">Silver Sponsors</h3>
              <div className="flex flex-wrap justify-center items-center gap-8">
                {sponsors.silverSponsors.map((sponsor, index) => (
                  <div key={index} className="bg-background rounded-lg p-4 shadow-soft border hover:shadow-elegant transition-all duration-300">
                    {sponsor.logo ? (
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
                    ) : (
                      <div className="h-8 flex items-center justify-center text-muted-foreground font-medium text-sm">
                        {sponsor.name}
                      </div>
                    )}
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

export default Summit2025;
