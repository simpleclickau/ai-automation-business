import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, MessageSquare, TrendingUp, Shield, Zap, Users, BarChart3, Clock } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const features = [
    {
      icon: MessageSquare,
      title: "Natural Conversations",
      description: "Human-like voice quality that creates authentic customer experiences"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Sub-800ms response time for seamless, real-time interactions"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2, GDPR, and HIPAA compliant with end-to-end encryption"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time insights with call transcripts and sentiment analysis"
    }
  ];

  const benefits = [
    "Reduce customer service costs by up to 70%",
    "Handle unlimited concurrent calls 24/7",
    "Improve response times from hours to seconds",
    "Scale instantly without hiring constraints",
    "Maintain consistent quality across all interactions",
    "Integrate seamlessly with your existing tools"
  ];

  const useCases = [
    {
      title: "Customer Support",
      description: "Handle common inquiries, troubleshooting, and FAQs automatically while escalating complex issues to human agents.",
      icon: Users
    },
    {
      title: "Sales & Lead Qualification",
      description: "Engage prospects 24/7, qualify leads, schedule demos, and nurture relationships at scale.",
      icon: TrendingUp
    },
    {
      title: "Appointment Scheduling",
      description: "Automate booking, rescheduling, and reminders across multiple calendars and time zones.",
      icon: Clock
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 -z-10" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40 -z-10" />
        
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-8">
              <Zap className="h-4 w-4" />
              <span>Transforming Business Communication with AI</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text">
              Voice Intelligence,{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Perfectly Articulated
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Deploy AI-powered voice agents that handle customer conversations with human-like quality. 
              Scale your business communication without scaling your team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/contact">Start Free Trial</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8">
                <Link href="/features">See Features</Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-muted-foreground">
              Enterprise-grade features designed for businesses of all sizes
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {features.map((feature) => (
              <Card key={feature.title} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transform Your Customer Experience
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Articulate AI empowers businesses to deliver exceptional customer service at scale. 
                Our AI voice agents work 24/7 to handle conversations with human-like quality, 
                freeing your team to focus on high-value interactions.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <div className="mt-1 p-1 bg-primary/10 rounded-full">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-base">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary mb-4">70%</div>
                  <div className="text-xl font-semibold mb-2">Cost Reduction</div>
                  <div className="text-muted-foreground">Average savings on customer service operations</div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card border-2 border-primary/20 rounded-xl p-6 shadow-lg max-w-xs">
                <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Always available, never takes a break</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built for Every Business Need
            </h2>
            <p className="text-xl text-muted-foreground">
              From customer support to sales, Articulate AI adapts to your unique workflows
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {useCases.map((useCase) => (
              <Card key={useCase.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 inline-flex p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full">
                    <useCase.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {useCase.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Trusted by Forward-Thinking Businesses
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">$52.6B</div>
                <div className="text-muted-foreground">Market Opportunity by 2030</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">46%</div>
                <div className="text-muted-foreground">Annual Market Growth Rate</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">800ms</div>
                <div className="text-muted-foreground">Average Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join hundreds of businesses transforming their customer communication with AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/contact">Start Free Trial</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8">
                <Link href="/features#pricing">View Pricing</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
