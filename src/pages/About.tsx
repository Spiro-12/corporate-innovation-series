import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/Layout";

const About = () => {
  const teamMembers = [
    {
      name: "Clarisse Menezes",
      role: "Operations",
      image: "https://cdn.jsdelivr.net/gh/Spiro-12/corporate-spark-site@main/assets/images/team/clarisse-menezes.jpg"
    },
    {
      name: "Matheus Mello",
      role: "Operations",
      image: "https://cdn.jsdelivr.net/gh/Spiro-12/corporate-spark-site@main/assets/images/team/matheus-mello.jpg"
    },
    {
      name: "Rebeca Fortes",
      role: "Marketing & Comms",
      image: "https://cdn.jsdelivr.net/gh/Spiro-12/corporate-spark-site@main/assets/images/team/rebeca-fortes.jpg"
    },
    {
      name: "Spiro El Khoury",
      role: "Operations",
      image: "https://cdn.jsdelivr.net/gh/Spiro-12/corporate-spark-site@main/assets/images/team/spiro-el-khoury.jpg"
    },
    {
      name: "Wilson Casado",
      role: "Chairperson",
      image: "https://cdn.jsdelivr.net/gh/Spiro-12/corporate-spark-site@main/assets/images/team/wilson-casado.jpg"
    }
  ];

  const impactStats = [
    { number: "50+", label: "Companies in Network" },
    { number: "10+", label: "Events Run" },
    { number: "150+", label: "Innovators Connected" }
  ];

  return (
    <Layout>
      <div className="container py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-6">Corporate Innovation Series</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              An independent, non-profit, industry-led education series focused on
              corporate innovation and venturing. Our goal is to accelerate economic development in the region by
              increasing corporate participation in the innovation ecosystem.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              We believe that the greatest innovations emerge from diverse perspectives 
              and meaningful dialogue. Through our curated roundtables and annual summit, 
              we create exclusive environments where ideas flourish and partnerships form.
            </p>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {impactStats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-soft">
              <CardContent className="pt-8 pb-8">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300">
                <CardContent className="pt-6 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <Badge variant="secondary" className="text-sm">
                    {member.role}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
