import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, Users, Lightbulb, Handshake, Mic, DollarSign, FileText } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Summit = () => {
  return (
    <Layout>
      <div className="container py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-6">Corporate Innovation Summit</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our annual summit is the premier gathering for corporate innovation leaders, 
            bringing together 100+ executives, intra/entrepreneurs, and thought leaders 
            for a day of insights, networking, and collaboration.
          </p>
        </div>

        {/* Summit Options */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 2024 Summit */}
          <Card className="border-0 shadow-elegant hover:shadow-lg transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-primary to-primary-glow text-white rounded-t-lg">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Calendar className="h-6 w-6" />
                2024 Summit
              </CardTitle>
              <p className="text-primary-foreground/90">Recap & Highlights</p>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>PCEC, Perth WA • December 02, 2024</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Theme: "The Venture Mindset"</h4>
                  <p className="text-muted-foreground">
                    Our most successful summit to date, featuring insights on resilient 
                    innovation strategies, emerging technologies, and adaptive leadership.
                  </p>
                </div>
              </div>
              <Link to="/summit/2024">
                <Button variant="outline" className="w-full group">
                  View 2024 Highlights
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* 2025 Summit */}
          <Card className="border-0 shadow-elegant hover:shadow-lg transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-accent to-accent-foreground/10 rounded-t-lg">
              <CardTitle className="text-2xl flex items-center gap-2 text-accent-foreground">
                <Calendar className="h-6 w-6" />
                2025 Summit
              </CardTitle>
              <p className="text-accent-foreground/70">Join Us This Year</p>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>AIM WA, Floreat WA • December 10, 2025</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Theme: "Building Innovation Engines"</h4>
                  <p className="text-muted-foreground">
                    Explore how corporate innovation & venturing are transforming Growth, 
                    accelerating R&D, and creating new business models across industries.
                  </p>
                </div>
              </div>
              <Link to="/summit/2025">
                <Button className="w-full group bg-gradient-to-r from-primary to-primary-glow hover:opacity-90">
                  Learn More & Register
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>
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
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:info@corporateinnovation.org.au?subject=Summit Involvement Inquiry">
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white">
                Contact Us
              </Button>
            </a>
            <Button size="lg" variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900">
              <FileText className="mr-2 h-4 w-4" />
              Download Partnership Pack
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Exclusive Networking</h3>
            <p className="text-muted-foreground text-sm">
              Connect with C-suite executives, CVCs, and innovation leaders from top companies.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
              <Lightbulb className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Cutting-Edge Insights</h3>
            <p className="text-muted-foreground text-sm">
              Learn from industry pioneers sharing their latest innovations and strategic insights.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
              <Handshake className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Strategic Partnerships</h3>
            <p className="text-muted-foreground text-sm">
              Forge partnerships and collaborations that drive innovation across industries.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Summit;
