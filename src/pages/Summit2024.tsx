import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Quote, Play } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Summit2024 = () => {
  const speakers = [
    { name: "Satya Nadella", title: "CEO, Microsoft", topic: "AI-First Innovation Strategy" },
    { name: "Susan Wojcicki", title: "Former CEO, YouTube", topic: "Platform Innovation at Scale" },
    { name: "Marc Benioff", title: "Chairman & CEO, Salesforce", topic: "The Future of Work" },
    { name: "Reid Hoffman", title: "Co-founder, LinkedIn", topic: "Network Effects in Innovation" },
    { name: "Ginni Rometty", title: "Former CEO, IBM", topic: "Leading Through Transformation" },
    { name: "Daniel Ek", title: "CEO, Spotify", topic: "Disrupting Traditional Industries" }
  ];

  const testimonials = [
    {
      quote: "The most valuable innovation conference I've attended. The networking opportunities and insights were unparalleled.",
      author: "Sarah Chen",
      title: "Chief Innovation Officer, Goldman Sachs"
    },
    {
      quote: "Excellent curation of speakers and topics. Left with actionable strategies for scaling our innovation initiatives.",
      author: "Michael Torres",
      title: "VP Innovation, Johnson & Johnson"
    },
    {
      quote: "The intimate roundtables allowed for deep, meaningful conversations with peers facing similar challenges.",
      author: "Lisa Wang",
      title: "Head of Digital Innovation, Toyota"
    }
  ];

  const agenda = [
    { time: "9:00 AM", session: "Welcome & Opening Keynote", speaker: "Satya Nadella" },
    { time: "10:15 AM", session: "Panel: AI in Enterprise", speaker: "Multiple Speakers" },
    { time: "11:30 AM", session: "Innovation Roundtables", speaker: "Breakout Sessions" },
    { time: "1:00 PM", session: "Networking Lunch", speaker: "" },
    { time: "2:30 PM", session: "Fireside Chat: Platform Innovation", speaker: "Susan Wojcicki" },
    { time: "3:45 PM", session: "Workshop: Design Thinking", speaker: "IDEO Team" },
    { time: "5:00 PM", session: "Closing Keynote", speaker: "Marc Benioff" }
  ];

  const sponsors = {
    headline: ["Microsoft", "Google", "Amazon Web Services"],
    supporting: ["Salesforce", "IBM", "Accenture", "McKinsey & Company", "Boston Consulting Group"],
    community: ["TechCrunch", "Harvard Business Review", "MIT Technology Review", "Stanford Graduate School of Business"]
  };

  return (
    <Layout>
      <div className="container py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Event Completed</Badge>
          <h1 className="text-4xl font-bold tracking-tight mb-6">2024 Innovation Summit</h1>
          <div className="flex items-center justify-center gap-6 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>November 14-15, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>San Francisco, CA</span>
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-primary mb-4">
            "Scaling Innovation in Uncertain Times"
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our most successful summit to date brought together 500+ innovation leaders 
            to explore resilient innovation strategies and emerging technologies.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {speakers.map((speaker, index) => (
              <Card key={index} className="border-0 shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-1">{speaker.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{speaker.title}</p>
                  <Badge variant="secondary" className="text-xs">
                    {speaker.topic}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Agenda Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Day 1 Agenda Highlights</h2>
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

export default Summit2024;