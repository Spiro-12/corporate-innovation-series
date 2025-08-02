import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/Layout";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Program Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612c2c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&h=387&q=80"
    },
    {
      name: "Michael Chen",
      role: "Innovation Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&h=387&q=80"
    },
    {
      name: "Emily Rodriguez",
      role: "Partnership Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&h=387&q=80"
    },
    {
      name: "David Kim",
      role: "Research Analyst",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&h=387&q=80"
    }
  ];

  const impactStats = [
    { number: "150+", label: "Companies in Network" },
    { number: "32", label: "Events Run" },
    { number: "2,800+", label: "Innovators Connected" }
  ];

  return (
    <Layout>
      <div className="container py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-6">About Us</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Corporate Innovation Series brings together forward-thinking leaders, 
              entrepreneurs, and innovators to explore the future of business. Our mission 
              is to foster meaningful connections, share cutting-edge insights, and drive 
              collaborative innovation across industries.
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