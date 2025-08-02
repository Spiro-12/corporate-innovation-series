import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Roundtables = () => {
  const pastRoundtables = [
    {
      theme: "Advancing Health Through Collaboration",
      date: "July 2025",
      summary: "The session brought together voices from government, health, academia, and startups to unpack the barriers and opportunities within WA’s innovation ecosystem — with a sharp focus on healthcare.",
      attendees: ["WA Department of Health", "UWA", "Perth BioDesign", "The Bakery", "and others"]
    },
    {
      theme: "Corporate Innovation in the Heavy Industry",
      date: "April 2025",
      summary: "We discussed the challenges large organisations face when engaging startups, the role of government in setting direction, and how resilience and the right partnerships are key to success.",
      attendees: ["Eramet", "Betterlabs", "CBH", "CitiPacific", "and others"]
    },
    {
      theme: "The First of Many",
      date: "October 2024",
      summary: "This was the first roudntable. We discussed the mission and the vision of the plan moving forward.",
      attendees: ["The Bakery", "Visagio", "BHP", "South32", "UWA", "Capricorn", "and others"]
    }
  ];

  const upcomingRoundtables = [
    {
      theme: "Introduction to Corporate Venturing",
      date: "TBC",
      description: "Dive into the different models of corporate venturing—from CVCs to venture studios—and what makes them successful.",
    },
    {
      theme: "Corporate Innovation in the Finance Sector",
      date: "TBC",
      description: "The detailed information of this roundtable has not yet been finalised. It will be released soon."
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
