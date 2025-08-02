import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Roundtables = () => {
  const pastRoundtables = [
    {
      theme: "AI in Enterprise: Practical Applications & Ethics",
      date: "October 2024",
      summary: "Leading executives discussed real-world AI implementations, ethical considerations, and regulatory frameworks shaping the future of enterprise AI.",
      attendees: ["Microsoft", "OpenAI", "Salesforce", "IBM", "Accenture", "Boston Consulting Group"]
    },
    {
      theme: "Sustainable Innovation & ESG Integration",
      date: "September 2024",
      summary: "Corporate leaders explored how sustainability initiatives are driving innovation and creating new business models across industries.",
      attendees: ["Unilever", "Tesla", "Patagonia", "Interface", "IKEA", "Schneider Electric"]
    },
    {
      theme: "Future of Work: Remote, Hybrid & Digital Transformation",
      date: "August 2024",
      summary: "HR leaders and tech executives shared insights on building resilient organizations in the post-pandemic era.",
      attendees: ["Slack", "Zoom", "Atlassian", "WeWork", "LinkedIn", "Workday"]
    }
  ];

  const upcomingRoundtables = [
    {
      theme: "Quantum Computing: From Research to Commercial Reality",
      date: "February 15, 2025",
      description: "Explore the current state of quantum computing and its potential applications across industries."
    },
    {
      theme: "Web3 & Decentralized Innovation",
      date: "March 20, 2025",
      description: "Discuss blockchain technology, NFTs, and decentralized autonomous organizations (DAOs) in enterprise contexts."
    },
    {
      theme: "Biotech Innovation & Healthcare Transformation",
      date: "April 18, 2025",
      description: "Examine breakthrough technologies in biotechnology and their impact on healthcare delivery."
    }
  ];

  return (
    <Layout>
      <div className="container py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-6">Roundtables</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our exclusive roundtables bring together 10-15 senior executives for an intimate 
            discussions on the most pressing innovation challenges and opportunities.
          </p>
        </div>

        {/* Upcoming Roundtables */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Upcoming Roundtables</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingRoundtables.map((roundtable, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    {roundtable.date}
                  </div>
                  <CardTitle className="text-xl">{roundtable.theme}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{roundtable.description}</p>
                  <Button className="w-full bg-gradient-to-r from-primary to-primary-glow hover:opacity-90">
                    Express Interest
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Past Roundtables */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Past Roundtables</h2>
          <div className="space-y-8">
            {pastRoundtables.map((roundtable, index) => (
              <Card key={index} className="border-0 shadow-soft">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <CardTitle className="text-xl">{roundtable.theme}</CardTitle>
                    <Badge variant="outline" className="w-fit">
                      {roundtable.date}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{roundtable.summary}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Key Participants:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {roundtable.attendees.map((attendee, attendeeIndex) => (
                      <Badge key={attendeeIndex} variant="secondary">
                        {attendee}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Roundtables;
