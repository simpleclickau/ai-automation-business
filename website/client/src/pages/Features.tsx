import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, MessageSquare, Zap, Shield, BarChart3, Puzzle, Clock, Globe } from "lucide-react";
import { Link } from "wouter";

export default function Features() {
  const features = [
    {
      icon: MessageSquare,
      title: "Natural Conversations",
      description: "Human-like voice quality with advanced natural language processing for authentic customer interactions."
    },
    {
      icon: Zap,
      title: "Real-Time Processing",
      description: "Ultra-low latency responses under 800ms for seamless, natural-feeling conversations."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2, GDPR, and HIPAA compliant with end-to-end encryption for your data protection."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time dashboards with call transcripts, sentiment analysis, and performance metrics."
    },
    {
      icon: Puzzle,
      title: "Seamless Integrations",
      description: "Native integrations with Salesforce, HubSpot, Zendesk, and 50+ CRM platforms."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Never miss a call with AI agents that work around the clock without breaks."
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Support for 40+ languages with native accent and cultural context understanding."
    },
    {
      icon: Zap,
      title: "No-Code Platform",
      description: "Build and deploy voice agents in minutes with our intuitive visual workflow builder."
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses getting started",
      features: [
        "200 minutes included",
        "$0.50 per minute overage",
        "Basic analytics dashboard",
        "Email support",
        "1 voice agent",
        "Standard voice quality"
      ]
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "For growing teams and businesses",
      features: [
        "750 minutes included",
        "$0.40 per minute overage",
        "Advanced analytics",
        "Priority support",
        "5 voice agents",
        "Premium voice quality",
        "CRM integrations",
        "Custom workflows"
      ],
      popular: true
    },
    {
      name: "Business",
      price: "$799",
      period: "/month",
      description: "For established businesses scaling up",
      features: [
        "2,500 minutes included",
        "$0.35 per minute overage",
        "Full analytics suite",
        "24/7 priority support",
        "Unlimited voice agents",
        "Premium voice quality",
        "All integrations",
        "Advanced workflows",
        "Dedicated account manager"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with custom needs",
      features: [
        "Custom volume pricing",
        "$0.30 per minute rate",
        "Enterprise analytics",
        "White-glove support",
        "Unlimited everything",
        "Custom voice training",
        "On-premise deployment option",
        "SLA guarantees",
        "Custom integrations"
      ]
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful Features for Modern Business Communication
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Everything you need to transform your customer interactions with AI-powered voice agents
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="border-2 hover:border-primary/50 transition-colors">
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

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the plan that fits your business needs
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {pricingTiers.map((tier) => (
              <Card 
                key={tier.name} 
                className={`relative ${tier.popular ? 'border-primary border-2 shadow-lg' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-muted-foreground">{tier.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild 
                    className="w-full" 
                    variant={tier.popular ? "default" : "outline"}
                  >
                    <Link href="/contact">
                      {tier.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Customer Experience?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join hundreds of businesses already using Articulate AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Start Free Trial</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
