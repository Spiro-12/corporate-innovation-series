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
      summary: "The session brought together voices from government, health, academia, and startups to unpack the barriers and opportunities within WA's innovation ecosystem — with a sharp focus on healthcare.",
      photos: [
        "/assets/images/roundtables/COI-Session 3 (4).jpg",
        "/assets/images/roundtables/COI-Session 3 (3).jpg",
        "/assets/images/roundtables/COI-Session 3 (2).jpg",
        "/assets/images/roundtables/COI-Session 3 (1).jpg"
      ],
      attendees: ["WA Department of Health", "UWA", "Perth BioDesign", "The Bakery", "and others"]
    },
    {
      theme: "Corporate Innovation in the Heavy Industry",
      date: "April 2025",
      summary: "We discussed the challenges large organisations face when engaging startups, the role of government in setting direction, and how resilience and the right partnerships are key to success.",
      photos: [
        "/assets/images/roundtables/COI-Session 2 (2).jpg",
        "/assets/images/roundtables/COI-Session 2 (1).jpg"
      ],
      attendees: ["Eramet", "Betterlabs", "CBH", "CitiPacific", "and others"]
    },
    {
      theme: "The First of Many",
      date: "October 2024",
      summary: "This was the first roudntable. We discussed the mission and the vision of the plan moving forward.",
      photos: [
        "/assets/images/roundtables/COI-Session 1 (3).jpeg",
        "/assets/images/roundtables/COI-Session 1 (2).jpeg",
        "/assets/images/roundtables/COI-Session 1 (1).jpeg"
      ],
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
              <Card key={index} className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300 flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    {roundtable.date}
                  </div>
                  <CardTitle className="text-xl">{roundtable.theme}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <p className="text-muted-foreground mb-6 flex-1">{roundtable.description}</p>
                  <a
                    href={`mailto:info@corporateinnovation.org.au?subject=${encodeURIComponent(`Expression of Interest for ${roundtable.theme}`)}`}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 text-primary-foreground"
                  >
                    Express Interest
                  </a>
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
                  
                  {/* Photo Gallery */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                    {roundtable.photos.map((photo, photoIndex) => (
                      <div key={photoIndex} className="relative overflow-hidden rounded-lg">
                        <img 
                          src={photo} 
                          alt={`${roundtable.theme} - Photo ${photoIndex + 1}`}
                          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>

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
