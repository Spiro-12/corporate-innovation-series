import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState, useEffect } from "react";

import { Calendar, MapPin, Shield, Users, Lightbulb, Mic, Handshake, DollarSign } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Summit2025 = () => {
  const [validSpeakers, setValidSpeakers] = useState<any[]>([]);
  const [selectedSpeaker, setSelectedSpeaker] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isPartnerDialogOpen, setIsPartnerDialogOpen] = useState(false);

  const speakers = [
    { 
      name: "Nicolas Sauvage", 
      title: "President, TDK Ventures", 
      image: "https://cdn.jsdelivr.net/gh/Spiro-12/corporate-spark-site@main/assets/images/speakers/2024/Nicolas-Sauvage.png",
      bio: "Nicolas Sauvage is President of TDK Ventures, the corporate venture capital arm of TDK Corporation, where he leads the firm's $500M mandate to invest in early-stage startups driving digital and energy innovation. Since its founding in 2019, TDK Ventures has backed 47 startups under his leadership, including three unicorns—Ascend Elements, Groq, and Silicon Box. Recognized globally, Nicolas has been awarded the GCV Powerlist for six consecutive years. He is also the only Corporate VC who ever received the prestigious Jeff Timmons Award from Kauffman Fellows VC Program. A champion of knowledge-sharing, Nicolas contributes to outlets including Harvard Business Review, London Business School, and INSEAD, and hosts the Corporate Venturing Insider podcast to spotlight best practices in venture investing. He currently serves on the boards of AutoFlight, Faction, Metalenz, Sagence AI, Virewirx, and TDK Ventures. Prior to TDK, Nicolas held leadership roles at InvenSense—managing strategic relationships with Google and Qualcomm—and at NXP Software, where he oversaw global sales and OEM strategy. Nicolas holds an engineering degree from ISEN in France, studied at King's College London through Erasmus, and is an alumnus of Stanford GSB and Harvard Business School's Corporate Director program."
    },
    { 
      name: "Ian Krieger", 
      title: "Innovation Officer APJ, ServiceNow", 
      image: "https://cdn.jsdelivr.net/gh/Spiro-12/corporate-spark-site@main/assets/images/speakers/2025/Ian-Krieger.jpg",
      bio: "Ian Krieger is an Innovation Officer for ServiceNow in Asia Pacific & Japan and a former regional Chief Technology Officer. He has led end-to-end transformations across highly regulated industries - public sector, financial services, and telecommunications, spanning platform strategy, cloud migration, service modernisation, and AI-enabled operations. Ian is recognised for aligning C-suite ambition with the realities of technology, risk, and delivery, rescuing high-stakes programs, and scaling new capabilities with measurable outcomes. His leadership blends hands-on engineering depth with executive stakeholder management, focusing teams on resilience, reliability, and customer experience. He brings a CTO's lens on what it takes to move from pilot to production and scale innovation safely."
    },
    { 
      name: "Dr. Kid – Supachai Parchariyanon", 
      title: "CEO and Co-Founder, RISE", 
      image: "https://cdn.jsdelivr.net/gh/Spiro-12/corporate-spark-site@main/assets/images/speakers/2025/Kid-Supachai.jpg",
      bio: "Dr. Kid is the CEO and Co-Founder of RISE, a corporate innovation powerhouse on a mission to drive 1% GDP growth and reduce 1% carbon emissions across Southeast Asia. RISE has partnered with over 400 large conglomerates and government agencies to build innovation capabilities, accelerating more than 2,000 startups valued at over $2 billion. He is also the Managing Partner of SeaX Ventures, a US-based DeepTech VC fund investing in exponential technologies globally."
    },
    { 
      name: "Isabelle Charter", 
      title: "Head of Venture Studio, Betterlabs", 
      image: "https://cdn.jsdelivr.net/gh/Spiro-12/corporate-spark-site@main/assets/images/speakers/2025/Isabelle-Charter.jpg",
      bio: "Isabelle Charter is Head of the BetterLabs Venture Studio, RAC's corporate innovation fund. She also leads Town Square, a fast-scaling startup revolutionising strata management, and previously built and sold Drip, Australia's first investing app for under-18s. With nearly 20 years in startups (aka 147 in founder years 🧓), she's started, scaled, sold, and killed ventures — now channelling that experience into helping founders grow faster, smarter, and bolder, while redefining what a venture studio can be. With her community hat on, Isabelle serves on the board of Meridian Global Foundation and mentors through programs including Plus Eight Accelerator, She Thrives, and Curtin Ignition."
    },
    { 
      name: "Kemal Anbarci", 
      title: "Managing Executive and GM of Venture Capital, Chevron Tech Ventures", 
      image: "https://cdn.jsdelivr.net/gh/Spiro-12/corporate-spark-site@main/assets/images/speakers/2024/Kemal-Anbarci.jpg",
      bio: "Kemal Anbarci is the Managing Executive and General Manager of Venture Capital at Chevron Technology Ventures—the longest-running and continuously operating corporate venture capital (CVC) arm in the energy industry. He has held this position since 2013. Kemal has been with Chevron for over 30 years, serving in a variety of roles across engineering, technology management, and commercial functions. He holds a B.S. in Petroleum Engineering from Middle East Technical University in Ankara, Turkey; an M.S. in Operations Research; M.S. and Ph.D. degrees in Petroleum and Natural Gas Engineering from Pennsylvania State University; and an MBA from the University of California, Irvine."
    },
    { 
      name: "Justyna Dąbrowska PhD", 
      title: "Research Fellow, UWA", 
      image: "",
      bio: "Biography coming soon."
    },
    { 
      name: "Marcone Siqueira", 
      title: "CEO, The Bakery", 
      image: "",
      bio: "Biography coming soon."
    },
    { 
      name: "Steven Vassiloudis", 
      title: "Head of Group Strategy, RAC", 
      image: "",
      bio: "Biography coming soon."
    },
    { 
      name: "Spiro El Khoury", 
      title: "Partner, Cicada Innovations & Co-Founder, Corporate Innovation Australia", 
      image: "",
      bio: "Biography coming soon."
    },
    { 
      name: "Nikki Madden", 
      title: "Co-Founder & CEO, Earlywork", 
      image: "",
      bio: "Biography coming soon."
    },
    { 
      name: "Olliver Bazzani", 
      title: "Open Innovation Lead, Rio Tinto", 
      image: "",
      bio: "Biography coming soon."
    },
    { 
      name: "Nikhilesh Bappo", 
      title: "Group Head Strategy & Innovation, Coventry Group", 
      image: "",
      bio: "Biography coming soon."
    },
    { 
      name: "Tracey Wilkinson", 
      title: "Executive Manager Strategy & Transformation, Synergy", 
      image: "",
      bio: "Biography coming soon."
    },
    { 
      name: "Caroline Chapman", 
      title: "Head of Growth, Covad", 
      image: "",
      bio: "Biography coming soon."
    },
    { 
      name: "Tamryn Barker", 
      title: "CEO & Co-Founder, Skalata", 
      image: "https://cdn.jsdelivr.net/gh/Spiro-12/corporate-spark-site@main/assets/images/speakers/2025/Tamryn-Barker.png",
      bio: "Biography coming soon."
    },
    { 
      name: "Henning Prommer", 
      title: "Chief Innovation Officer, GHD", 
      image: "",
      bio: "Biography coming soon."
    },
    { 
      name: "Holly Bridgwater", 
      title: "Head of Corporate Innovation, Telstra", 
      image: "",
      bio: "Biography coming soon."
    },
    { 
      name: "Brad Hill", 
      title: "Executive Manager Digital Services, Bankwest", 
      image: "",
      bio: "Biography coming soon."
    }
  ];

  const handleSpeakerClick = (speaker: typeof speakers[0]) => {
    setSelectedSpeaker(speaker);
    setIsDialogOpen(true);
  };

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
      { name: "AIM WA", logo: "https://logo.clearbit.com/aimwa.com" },
      { name: "IHG", logo: "https://logo.clearbit.com/IHG.com" }
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
            Event Completed
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
              disabled
            >
              Stay Tuned for Highlights
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
          <h2 className="text-3xl font-bold text-center mb-12">2025 Speakers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {validSpeakers.length > 0 ? (
              <>
                {validSpeakers.map((speaker, index) => (
                  <div 
                    key={index} 
                    className="text-center group cursor-pointer"
                    onClick={() => handleSpeakerClick(speaker)}
                  >
                    <div className="relative mb-4 mx-auto w-32 h-32">
                      <img 
                        src={speaker.image} 
                        alt={speaker.name}
                        className="w-32 h-32 object-cover rounded-lg border-4 border-primary/20 group-hover:border-primary group-hover:scale-105 transition-all duration-300"
                      />
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{speaker.name}</h3>
                    <p className="text-sm text-muted-foreground">{speaker.title}</p>
                  </div>
                ))}
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

        {/* Speaker Bio Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-2xl">
            {selectedSpeaker && (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={selectedSpeaker.image} 
                      alt={selectedSpeaker.name}
                      className="w-24 h-24 object-cover rounded-lg border-2 border-primary/20"
                    />
                    <div className="text-left">
                      <DialogTitle className="text-2xl mb-1">
                        {selectedSpeaker.name}
                      </DialogTitle>
                      <p className="text-muted-foreground">
                        {selectedSpeaker.title}
                      </p>
                    </div>
                  </div>
                </DialogHeader>
                <DialogDescription className="text-base leading-relaxed text-foreground">
                  {selectedSpeaker.bio}
                </DialogDescription>
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* Event Partner Dialog */}
        <Dialog open={isPartnerDialogOpen} onOpenChange={setIsPartnerDialogOpen}>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle className="text-2xl mb-4">
                InterContinental Perth City Centre
              </DialogTitle>
            </DialogHeader>
            <DialogDescription className="text-base leading-relaxed text-foreground space-y-4">
              <p>
                The InterContinental Perth City Centre is our hotel of choice for this year's Summit! Located right in the heart of the city, it's the perfect base for your Perth experience.
              </p>
              <p>
                🌟 CI Summit attendees enjoy a percentage off the best flexible rate!
              </p>
              <p>
                To access the discount code and booking details, simply email us at{' '}
                <a href="mailto:info@corporateinnovation.org.au" className="text-primary hover:underline">
                  info@corporateinnovation.org.au
                </a>
              </p>
            </DialogDescription>
          </DialogContent>
        </Dialog>

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
                     <div 
                       key={index} 
                       className={`bg-background rounded-lg p-4 shadow-soft border hover:shadow-elegant transition-all duration-300 ${sponsor.name === 'IHG' ? 'cursor-pointer' : ''}`}
                       onClick={() => {
                         if (sponsor.name === 'IHG') {
                           setIsPartnerDialogOpen(true);
                         }
                       }}
                     >
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
