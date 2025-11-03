import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Target, DollarSign, Users, BarChart3, Globe } from "lucide-react";
import { Link } from "wouter";

export default function Investors() {
  const highlights = [
    {
      icon: Globe,
      title: "Massive Market Opportunity",
      stat: "$52.6B by 2030",
      description: "AI voice agent market growing at 46.3% CAGR, driven by enterprise digital transformation."
    },
    {
      icon: TrendingUp,
      title: "Strong Unit Economics",
      stat: "56-78% Gross Margin",
      description: "Proven path to profitability with scalable SaaS model and efficient cost structure."
    },
    {
      icon: Target,
      title: "Clear Go-to-Market",
      stat: "12:1 LTV:CAC",
      description: "Multi-channel acquisition strategy with proven customer acquisition playbook."
    },
    {
      icon: Users,
      title: "Experienced Team",
      stat: "50+ Years Combined",
      description: "Founders with proven track records in AI, SaaS, and enterprise sales."
    }
  ];

  const financials = [
    {
      year: "Year 1",
      arr: "$2.4M",
      customers: "240",
      growth: "-"
    },
    {
      year: "Year 2",
      arr: "$8.6M",
      customers: "860",
      growth: "258%"
    },
    {
      year: "Year 3",
      arr: "$24.3M",
      customers: "2,430",
      growth: "183%"
    },
    {
      year: "Year 4",
      arr: "$52.9M",
      customers: "5,290",
      growth: "118%"
    },
    {
      year: "Year 5",
      arr: "$90.4M",
      customers: "9,040",
      growth: "71%"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Investor Information
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Join us in transforming business communication with AI-powered voice technology
            </p>
            <Button asChild size="lg">
              <Link href="/contact?type=investor">Request Investor Deck</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Investment Highlights
            </h2>
            <p className="text-xl text-muted-foreground">
              Why Articulate AI is positioned for exceptional growth
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {highlights.map((highlight) => (
              <Card key={highlight.title} className="border-2">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <highlight.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{highlight.title}</CardTitle>
                      <div className="text-2xl font-bold text-primary mb-2">
                        {highlight.stat}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {highlight.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Projections */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Financial Projections
            </h2>
            <p className="text-xl text-muted-foreground">
              Path to $90M ARR by Year 5
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-4 px-4 font-semibold">Period</th>
                        <th className="text-right py-4 px-4 font-semibold">ARR</th>
                        <th className="text-right py-4 px-4 font-semibold">Customers</th>
                        <th className="text-right py-4 px-4 font-semibold">YoY Growth</th>
                      </tr>
                    </thead>
                    <tbody>
                      {financials.map((row, index) => (
                        <tr key={row.year} className={index !== financials.length - 1 ? "border-b" : ""}>
                          <td className="py-4 px-4 font-medium">{row.year}</td>
                          <td className="text-right py-4 px-4 font-semibold text-primary">{row.arr}</td>
                          <td className="text-right py-4 px-4">{row.customers}</td>
                          <td className="text-right py-4 px-4">{row.growth}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-3 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Revenue Model</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Subscription + usage-based pricing with 85% gross margins at scale
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Customer Acquisition</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Multi-channel strategy: digital marketing, partnerships, and direct sales
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Profitability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Path to 40% EBITDA margin by Year 5 with operational leverage
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Funding */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold mb-6">Funding Round</h2>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Raising</div>
                    <div className="text-3xl font-bold text-primary">$2.5M</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Stage</div>
                    <div className="text-xl font-semibold">Seed Round</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Use of Funds</div>
                    <ul className="space-y-2 mt-2">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">40% Product Development</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">35% Sales & Marketing</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">15% Customer Success</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">10% Operations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Key Milestones</h2>
                <div className="space-y-6">
                  <div>
                    <div className="font-semibold mb-2">Months 1-6: MVP Launch</div>
                    <p className="text-sm text-muted-foreground">
                      Complete platform development, onboard first 50 customers, validate product-market fit
                    </p>
                  </div>
                  <div>
                    <div className="font-semibold mb-2">Months 7-12: Scale</div>
                    <p className="text-sm text-muted-foreground">
                      Expand sales team, launch partner program, reach $1M ARR
                    </p>
                  </div>
                  <div>
                    <div className="font-semibold mb-2">Months 13-18: Growth</div>
                    <p className="text-sm text-muted-foreground">
                      Enterprise features, international expansion, achieve profitability
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Competitive Advantages
            </h2>
            <p className="text-xl text-muted-foreground">
              What sets Articulate AI apart in the market
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Superior Voice Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Industry-leading natural voice synthesis with sub-800ms latency for seamless conversations
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>No-Code Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Visual workflow builder enabling non-technical users to deploy agents in minutes
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Enterprise Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  SOC 2, GDPR, HIPAA compliant from day one with enterprise-grade security
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Deep Integrations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Native integrations with 50+ CRM and business tools for seamless workflows
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Scalable Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Cloud-native infrastructure supporting millions of concurrent conversations
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Proven Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Founders with successful exits and deep expertise in AI, SaaS, and enterprise sales
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Interested in Learning More?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Request our full investor deck and financial model
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact?type=investor">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="https://github.com/simpleclickau/ai-automation-business" target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
