import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Shield, Users, Lightbulb } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Summit2025 = () => {
  const speakers = [
    { name: "Sam Altman", title: "CEO, OpenAI", status: "Confirmed" },
    { name: "Demis Hassabis", title: "CEO, Google DeepMind", status: "Confirmed" },
    { name: "Jensen Huang", title: "CEO, NVIDIA", status: "Confirmed" },
    { name: "Dario Amodei", title: "CEO, Anthropic", status: "TBA" },
    { name: "Fei-Fei Li", title: "Professor, Stanford AI Lab", status: "TBA" },
    { name: "Andrew Ng", title: "Founder, DeepLearning.AI", status: "TBA" }
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
    headline: ["OpenAI", "Microsoft", "NVIDIA"],
    supporting: ["Google", "Anthropic", "Scale AI", "Hugging Face", "Databricks"],
    community: ["Stanford HAI", "MIT CSAIL", "AI Policy Institute", "Partnership on AI"]
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
          <h2 className="text-3xl font-bold text-center mb-12">Confirmed & Expected Speakers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {speakers.map((speaker, index) => (
              <Card key={index} className="border-0 shadow-soft">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">{speaker.name}</h3>
                      <p className="text-sm text-muted-foreground">{speaker.title}</p>
                    </div>
                    <Badge 
                      variant={speaker.status === "Confirmed" ? "default" : "secondary"}
                      className={speaker.status === "Confirmed" ? "bg-primary" : ""}
                    >
                      {speaker.status}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
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
              <h3 className="text-xl font-semibold text-center mb-6">Headline Sponsors</h3>
              <div className="flex flex-wrap justify-center gap-8">
                {sponsors.headline.map((sponsor, index) => (
                  <Badge key={index} variant="outline" className="text-lg py-2 px-4">
                    {sponsor}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-center mb-6">Supporting Sponsors</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {sponsors.supporting.map((sponsor, index) => (
                  <Badge key={index} variant="secondary" className="py-1 px-3">
                    {sponsor}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-center mb-6">Community Partners</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {sponsors.community.map((sponsor, index) => (
                  <Badge key={index} variant="outline" className="py-1 px-3">
                    {sponsor}
                  </Badge>
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