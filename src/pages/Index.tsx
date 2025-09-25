import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { 
  Clock, 
  DollarSign, 
  Mail, 
  Zap, 
  TrendingUp,
  ArrowRight
} from "lucide-react";
import alfiLogo from "@/assets/alfi-logo.png";

const Index = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("https://hook.us2.make.com/8rpk55qtdgcznso684i8aufgo9qfb98m", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          email: email,
          timestamp: new Date().toISOString(),
          source: "waitlist",
        }),
      });

      toast({
        title: "Success!",
        description: "You've been added to our waitlist. We'll be in touch soon!",
      });
      
      setEmail("");
    } catch (error) {
      console.error("Error submitting to waitlist:", error);
      toast({
        title: "Error",
        description: "Failed to join waitlist. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const problems = [
    {
      icon: <Clock className="h-6 w-6 text-destructive" />,
      title: "Wasted Time",
      description: "Hours spent manually processing irregular bills that don't fit autopay"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-destructive" />,
      title: "Clunky Portals", 
      description: "Outdated payment systems requiring multiple steps for simple transactions"
    },
    {
      icon: <DollarSign className="h-6 w-6 text-destructive" />,
      title: "Late Fees",
      description: "Manual processing leads to missed deadlines and costly penalties"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-center">
          <div className="flex items-center">
            <span className="text-xl font-bold text-foreground">Alfi</span>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <Badge variant="secondary" className="text-primary">
              Coming Soon
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Your AI Bill 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Butler</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Automatically handle every irregular bill from email or photo. 
              Never miss a payment or waste time on manual processing again.
            </p>
          </div>
          
          <form onSubmit={handleWaitlistSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                variant="hero" 
                className="flex items-center"
                disabled={isLoading}
              >
                {isLoading ? "Joining..." : "Join Waitlist"} 
                {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Be the first to know when we launch. No spam, ever.
            </p>
          </form>

          <div className="pt-4">
            <p className="text-sm text-muted-foreground mb-2">
              Want to learn more? Reach out directly:
            </p>
            <a 
              href="mailto:hello@alfi.ai" 
              className="inline-flex items-center text-primary hover:text-primary-glow transition-colors"
            >
              <Mail className="h-4 w-4 mr-2" />
              hello@alfi.ai
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-destructive">
            The Problem
          </Badge>
          <h2 className="text-4xl font-bold text-foreground">
            Irregular Bills Are a Pain
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Autopay only works for regular bills. Everything else requires manual work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <Card key={index} className="text-center border-border/50">
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-center">
                  {problem.icon}
                </div>
                <h3 className="font-semibold text-foreground">{problem.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {problem.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Solution Preview */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-hero rounded-3xl p-12 text-center max-w-4xl mx-auto">
          <div className="space-y-6">
            <Badge variant="secondary" className="text-primary">
              The Solution
            </Badge>
            <h2 className="text-3xl font-bold text-foreground">
              AI That Handles Any Bill
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="space-y-2">
                <Mail className="h-8 w-8 text-primary mx-auto" />
                <h3 className="font-semibold text-foreground">From Email</h3>
                <p className="text-sm text-muted-foreground">Forward any bill email</p>
              </div>
              <div className="space-y-2">
                <Zap className="h-8 w-8 text-primary mx-auto" />
                <h3 className="font-semibold text-foreground">AI Processing</h3>
                <p className="text-sm text-muted-foreground">Extract & verify details</p>
              </div>
              <div className="space-y-2">
                <DollarSign className="h-8 w-8 text-primary mx-auto" />
                <h3 className="font-semibold text-foreground">Auto Payment</h3>
                <p className="text-sm text-muted-foreground">Paid on time, every time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-8 max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground">
            Ready to Automate Your Bills?
          </h2>
          <p className="text-lg text-muted-foreground">
            Join our waitlist to be notified when Alfi launches.
          </p>
          <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              variant="premium" 
              className="flex items-center"
              disabled={isLoading}
            >
              {isLoading ? "Joining..." : "Join Waitlist"} 
              {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
          </form>
          <div className="pt-4">
            <p className="text-muted-foreground text-sm mb-2">
              Questions? We'd love to hear from you:
            </p>
            <a 
              href="mailto:hello@alfi.ai" 
              className="inline-flex items-center text-primary hover:text-primary-glow transition-colors font-medium"
            >
              <Mail className="h-4 w-4 mr-2" />
              hello@alfi.ai
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <img 
                src={alfiLogo} 
                alt="Alfi Logo" 
                className="h-6 w-auto"
              />
              <span className="font-bold text-foreground">Alfi</span>
              <span className="text-muted-foreground text-sm">Your AI Bill Butler</span>
            </div>
            <div className="text-center text-sm text-muted-foreground">
              <p>&copy; 2024 Alfi. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;