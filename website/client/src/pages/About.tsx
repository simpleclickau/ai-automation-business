import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, Lightbulb, TrendingUp } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Customer-Centric",
      description: "We build technology that solves real business problems and delivers measurable value to our customers."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay at the forefront of AI technology to provide cutting-edge solutions that give our customers a competitive advantage."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We view our customers as partners and work collaboratively to ensure their success with our platform."
    },
    {
      icon: TrendingUp,
      title: "Excellence",
      description: "We are committed to delivering the highest quality voice AI technology with enterprise-grade reliability."
    }
  ];

  const team = [
    {
      role: "Leadership",
      title: "CEO & Co-Founder",
      description: "15+ years in AI product development and SaaS leadership. Previously led product teams at enterprise AI companies, scaling from seed to Series C."
    },
    {
      role: "Technical Leadership",
      title: "CTO & Co-Founder",
      description: "PhD in Machine Learning with 12+ years building production AI systems. Former engineering leader at voice technology companies."
    },
    {
      role: "Business Operations",
      title: "COO & Co-Founder",
      description: "20+ years in enterprise SaaS sales and operations. Built and scaled sales teams from 0 to $50M ARR at multiple B2B SaaS companies."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Building the Future of Business Communication
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're on a mission to make AI-powered voice communication accessible to every business, from startups to enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  To transform business communication by making enterprise-grade AI voice technology accessible, affordable, and easy to use for organizations of all sizes.
                </p>
                <p className="text-lg text-muted-foreground">
                  We believe that every business deserves access to the same advanced AI capabilities that large enterprises use, without the complexity or cost barriers.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  To become the global standard for AI-powered business communication, enabling seamless interactions between businesses and their customers across all channels.
                </p>
                <p className="text-lg text-muted-foreground">
                  We're building a future where AI augments human capabilities, allowing teams to focus on high-value interactions while AI handles routine communications efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 inline-flex p-4 bg-primary/10 rounded-full">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Team
            </h2>
            <p className="text-xl text-muted-foreground">
              Experienced founders with proven track records in AI, SaaS, and enterprise sales
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {team.map((member) => (
              <Card key={member.role} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <CardTitle className="text-lg">{member.role}</CardTitle>
                  <CardDescription className="font-semibold text-primary">
                    {member.title}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">$52.6B</div>
              <div className="text-muted-foreground">Market Opportunity by 2030</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">46%</div>
              <div className="text-muted-foreground">Annual Market Growth Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">56-78%</div>
              <div className="text-muted-foreground">Gross Margin Potential</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">12:1</div>
              <div className="text-muted-foreground">LTV:CAC Ratio</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Us on Our Journey
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Whether you're a potential customer, investor, or team member, we'd love to hear from you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/investors">Investor Information</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
