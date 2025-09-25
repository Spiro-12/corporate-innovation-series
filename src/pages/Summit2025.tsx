import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

import { Calendar, MapPin, Shield, Users, Lightbulb, UserPlus, Mic, Handshake, DollarSign } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Summit2025 = () => {
  const [validSpeakers, setValidSpeakers] = useState<any[]>([]);

  const speakers = [
    { 
      name: "Justin Greenstein", 
      title: "CEO, 1835i", 
      image: "https://cdn.jsdelivr.net/gh/Spiro-12/corporate-spark-site@main/assets/images/speakers/2025/Justin-Greenstein.png"
    },
    { 
      name: "Nicolas Sauvage", 
      title: "President, TDK Ventures", 
      image: "https://cdn.jsdelivr.net/gh/Spiro-12/corporate-spark-site@main/assets/images/speakers/2024/Nicolas-Sauvage.png"
    },
    { 
      name: "Georg Kuegerl", 
      title: "Deputy GM of Technology and IP Headquarters, TDK", 
      image: "https://cdn.jsdelivr.net/gh/Spiro-12/corporate-spark-site@main/assets/images/speakers/2025/Georg-Kuegerl.png"
    },
    { 
      name: "Dr. Kid – Supachai Parchariyanon", 
      title: "CEO and Co-Founder, RISE", 
      image: "https://cdn.jsdelivr.net/gh/Spiro-12/corporate-spark-site@main/assets/images/speakers/2025/Kid-Supachai.jpg"
    }
  ];

  // Function to check if image URL actually loads
  const checkImageExists = (url: string): Promise<boolean> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  };

  // Check which speakers have valid images
  useEffect(() => {
    const checkSpeakers = async () => {
      const speakersWithValidImages = [];
      
      for (const speaker of speakers) {
        if (speaker.image) {
          const imageExists = await checkImageExists(speaker.image);
          if (imageExists) {
            speakersWithValidImages.push(speaker);
          }
        }
      }
      
      setValidSpeakers(speakersWithValidImages);
    };

    checkSpeakers();
  }, []);

  const highlights = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Diversity of Sectors",
      description: "Including financial services, energy & resources, health, etc..."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "National Spotlight",
      description: "An emphasis on Local stories in addition to global benchmarks"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Hands-on Workshop",
      description: "Building a suitable venturing engine for your organisation"
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
    ],
    eventPartner: [
      { name: "TBC", logo: "https://logo.clearbit.com/aimwa.com" }
    ]
  };

  // Helper function to check if sponsor category should be shown
  const shouldShowSponsorCategory = (sponsors: any[]) => {
    return sponsors.some(sponsor => sponsor.name !== "TBC");
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
              <span>December 10, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>AIM WA, Floreat WA</span>
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-primary mb-4">
            "Building Innovation Engines"
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Join 100+ innovation leaders to explore how corporate innovation & venturing are transforming 
            growth, accelerating R&D, and creating new business models across industries.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90"
              onClick={() => window.open('https://events.humanitix.com/corporate-innovation-summit-2025', '_blank')}
            >
              Register Now
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
            {validSpeakers.length > 0 ? (
              <>
                {validSpeakers.map((speaker, index) => (
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
              </>
            ) : (
              <div className="col-span-full text-center py-12">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mic className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Speakers will be announced soon</h3>
                <p className="text-muted-foreground">We're finalizing an incredible lineup of innovation leaders and industry experts.</p>
              </div>
            )}
          </div>
        </div>

        {/* NDA & Access Information */}
        <div className="mb-16">
          <Card className="border-0 shadow-soft bg-accent/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Attendee Profile
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm text-muted-foreground">
                <p>
                  <strong> </strong> Senior executives and leaders driving innovation, 
                  strategy, or digital transformation.
                </p>
                <p>
                  <strong> </strong> Senior executives leading Corporate Venturing, R&D, and Emerging Technology.
                </p>
                <p>
                  <strong> </strong> Entrepreneurs building solutions for large organisations or launching corporate ventures.
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
                <CardTitle>Scaling Corporate Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Explore strategies for moving beyond pilots and prototypes to embed innovation
                  into the core of the business and deliver measurable impact at scale.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle>Designing Effective Venture Engines</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                 Unpack the structures, incentives, and governance
                  models that enable corporate venture builders, CVCs, and accelerators to thrive.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle>From Partnership to Equity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Understand how corporates are evolving from collaborators to investors — and how 
                  startups are navigating these new hybrid relationships.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle>Building Innovation from Within</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learn how leading organisations are empowering internal talent, 
                  leveraging existing assets and creating the right culture to launch new ventures from inside the business.
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

            {shouldShowSponsorCategory(sponsors.platinumSponsors) && (
              <div>
                <h3 className="text-xl font-semibold text-center mb-6">Platinum Sponsors</h3>
                <div className="flex flex-wrap justify-center items-center gap-8">
                  {sponsors.platinumSponsors.map((sponsor, index) => (
                    <div key={index} className="bg-background rounded-lg p-3 shadow-soft border hover:shadow-elegant transition-all duration-300">
                      {sponsor.logo ? (
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
                      ) : (
                        <div className="h-10 flex items-center justify-center text-muted-foreground font-medium text-sm">
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
            )}

            {shouldShowSponsorCategory(sponsors.goldSponsors) && (
              <div>
                <h3 className="text-xl font-semibold text-center mb-6">Gold Sponsors</h3>
                <div className="flex flex-wrap justify-center items-center gap-8">
                  {sponsors.goldSponsors.map((sponsor, index) => (
                    <div key={index} className="bg-background rounded-lg p-3 shadow-soft border hover:shadow-elegant transition-all duration-300">
                      {sponsor.logo ? (
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
                      ) : (
                        <div className="h-10 flex items-center justify-center text-muted-foreground font-medium text-sm">
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
            )}

            {shouldShowSponsorCategory(sponsors.silverSponsors) && (
              <div>
                <h3 className="text-xl font-semibold text-center mb-6">Silver Sponsors</h3>
                <div className="flex flex-wrap justify-center items-center gap-8">
                  {sponsors.silverSponsors.map((sponsor, index) => (
                    <div key={index} className="bg-background rounded-lg p-3 shadow-soft border hover:shadow-elegant transition-all duration-300">
                      {sponsor.logo ? (
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
                      ) : (
                        <div className="h-10 flex items-center justify-center text-muted-foreground font-medium text-sm">
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
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              
              <div>
                <h3 className="text-xl font-semibold text-center mb-6">Event Partner</h3>
                <div className="flex flex-wrap justify-center items-center gap-6">
                   {sponsors.eventPartner.map((sponsor, index) => (
                     <div key={index} className="bg-background rounded-lg p-4 shadow-soft border hover:shadow-elegant transition-all duration-300">
                       {sponsor.logo ? (
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
                       ) : (
                         <div className="h-12 flex items-center justify-center text-muted-foreground font-medium text-sm">
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
            </div>
          </div>
        </div>

        {/* Ways to Get Involved Section */}
        <div className="mt-16 mb-16 bg-slate-900 rounded-2xl p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ways to Get Involved</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Join us as a speaker, partner, or sponsor and be part of Australia's premier corporate innovation event.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                <Mic className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Speaker</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Share your innovation expertise</li>
                <li>• Connect with industry leaders</li>
                <li>• Showcase your company's innovations</li>
                <li>• Build thought leadership</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                <Handshake className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Partner</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Collaborate on event content</li>
                <li>• Co-create valuable experiences</li>
                <li>• Access to attendee networks</li>
                <li>• Joint marketing opportunities</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                <DollarSign className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Sponsor</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Maximum brand visibility</li>
                <li>• Direct access to decision makers</li>
                <li>• Custom activation opportunities</li>
                <li>• Comprehensive marketing package</li>
              </ul>
            </div>
          </div>
          
          <div className="flex justify-center">
            <a href="mailto:info@corporateinnovation.org.au?subject=Summit Involvement Inquiry">
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white">
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Summit2025;
