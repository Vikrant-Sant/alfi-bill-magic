import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Clock, 
  DollarSign, 
  Mail, 
  Camera, 
  Zap, 
  Shield, 
  TrendingUp,
  ArrowRight,
  Star
} from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";

const Index = () => {
  const features = [
    {
      icon: <Mail className="h-8 w-8 text-primary" />,
      title: "Email Processing",
      description: "Automatically extract bill details from any email format"
    },
    {
      icon: <Camera className="h-8 w-8 text-primary" />,
      title: "Photo Recognition", 
      description: "Snap a photo of any bill and let AI handle the rest"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Instant Payment",
      description: "Secure, automated payments processed immediately"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Bank-Level Security",
      description: "Enterprise-grade encryption and compliance standards"
    }
  ];

  const problems = [
    {
      icon: <Clock className="h-6 w-6 text-destructive" />,
      title: "Wasted Time & Resources",
      description: "Businesses waste hours per month manually processing vendor payments that don't fit into standard autopay systems"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-destructive" />,
      title: "Clunky Payment Experiences", 
      description: "Individuals struggle with tuition, medical, government, and other ad-hoc bills through outdated portals requiring multiple steps"
    },
    {
      icon: <DollarSign className="h-6 w-6 text-destructive" />,
      title: "Costly Consequences",
      description: "Manual entry leads to missed due dates, late fees, and administrative overhead that impacts bottom lines"
    }
  ];

  const steps = [
    {
      step: "01",
      title: "Send or Snap", 
      description: "Forward bill emails to Alfi or take a photo of any physical bill"
    },
    {
      step: "02",
      title: "AI Processing",
      description: "Our AI extracts all payment details, verifies accuracy, and schedules payment"
    },
    {
      step: "03",
      title: "Auto Payment",
      description: "Bills are paid automatically on time, every time, with full tracking and receipts"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">Alfi</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How it Works</a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            <Button variant="outline" size="sm">Sign In</Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-primary">
                AI-Powered Bill Management
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Your AI Bill 
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Butler</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Handling every irregular bill from email or photo and paying it automatically. 
                Never miss a payment or waste time on manual processing again.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="flex items-center">
                Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="xl">
                Schedule Demo
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Free 30-day trial</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-hero rounded-3xl blur-3xl opacity-30"></div>
            <img 
              src={heroIllustration} 
              alt="AI Bill Butler automation illustration" 
              className="relative z-10 w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-destructive">
            The Problem with Irregular Bills
          </Badge>
          <h2 className="text-4xl font-bold text-foreground">
            Manual Bill Processing Is Broken
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Autopay and credit cards only cover a fraction of payment scenarios, leaving a significant gap for one-off, irregular bills that require manual intervention.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <Card key={index} className="border border-destructive/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  {problem.icon}
                  <h3 className="font-semibold text-foreground">{problem.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="container mx-auto px-4 py-20">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-primary">
            Simple Process
          </Badge>
          <h2 className="text-4xl font-bold text-foreground">
            How Alfi Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to automate your entire bill payment process
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-4 relative">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">{step.step}</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute top-8 -right-4 h-6 w-6 text-muted-foreground" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-primary">
            Powerful Features
          </Badge>
          <h2 className="text-4xl font-bold text-foreground">
            Everything You Need to Automate Bills
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50">
              <CardContent className="p-6 space-y-4">
                <div className="p-3 bg-accent/50 rounded-lg w-fit group-hover:bg-accent transition-colors">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-hero rounded-3xl p-12 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-foreground">
              Trusted by Forward-Thinking Businesses
            </h2>
            <div className="flex justify-center items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-primary text-primary" />
              ))}
              <span className="ml-2 text-lg font-semibold text-foreground">4.9/5</span>
            </div>
            <p className="text-muted-foreground text-lg">
              "Alfi has saved us 15+ hours per month and eliminated late payment fees entirely. 
              It's like having a dedicated accounts payable assistant that never sleeps."
            </p>
            <div className="text-center">
              <p className="font-semibold text-foreground">Sarah Chen</p>
              <p className="text-muted-foreground">CFO, TechStart Inc.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-8">
          <h2 className="text-4xl font-bold text-foreground">
            Ready to Automate Your Bills?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of businesses and individuals who never worry about bill payments anymore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="premium" size="xl" className="flex items-center">
              Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="xl">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-foreground">Alfi</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Your AI Bill Butler for automated payment processing.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Product</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Features</a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Security</a>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Company</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">About</a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Blog</a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Careers</a>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Support</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Help Center</a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Contact</a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">API Docs</a>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Alfi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;