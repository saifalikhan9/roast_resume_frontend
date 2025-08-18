import { BuyMeCoffeeButton } from "@/components/buy-me-coffee";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-sans font-bold text-primary">
                Resume Roaster
              </h1>
            </div>
            <BuyMeCoffeeButton size="sm" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge
            variant="secondary"
            className="mb-6 bg-card text-card-foreground"
          >
            AI-Powered Resume Critique
          </Badge>
          <h1 className="text-5xl md:text-6xl font-sans font-bold text-foreground mb-6 leading-tight">
            Roast Your Resume with a{" "}
            <span className="text-primary">Side of Humor!</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Upload your resume and let our AI serve up some playful critiques
            tailored to your career aspirations. Choose your tone, pick your
            roaster, and get ready to laugh while you learn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/roast">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 transform hover:scale-105"
              >
                Get Started
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="border-border hover:bg-card transition-colors bg-transparent"
            >
              See Example Roast
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-sans font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to get your resume roasted with personality
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📄</span>
                </div>
                <h3 className="text-xl font-sans font-semibold text-card-foreground mb-2">
                  Upload Resume
                </h3>
                <p className="text-muted-foreground">
                  Drop your PDF resume and let our AI analyze your career story
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎭</span>
                </div>
                <h3 className="text-xl font-sans font-semibold text-card-foreground mb-2">
                  Choose Your Style
                </h3>
                <p className="text-muted-foreground">
                  Pick your tone and roaster personality - from friendly to
                  brutally honest
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔥</span>
                </div>
                <h3 className="text-xl font-sans font-semibold text-card-foreground mb-2">
                  Get Roasted
                </h3>
                <p className="text-muted-foreground">
                  Receive your personalized roast with actionable insights and
                  laughs
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-sans font-bold text-foreground mb-4">
              Customize Your Roast
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tailor the experience to match your personality and career goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-sans font-semibold text-foreground mb-6">
                Choose Your Tone
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Badge
                    variant="outline"
                    className="bg-primary/10 text-primary border-primary/20"
                  >
                    Soft Hearted
                  </Badge>
                  <span className="text-muted-foreground">
                    Gentle and encouraging feedback
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge
                    variant="outline"
                    className="bg-primary/10 text-primary border-primary/20"
                  >
                    Hard Hearted
                  </Badge>
                  <span className="text-muted-foreground">
                    Brutally honest, no sugar coating
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge
                    variant="outline"
                    className="bg-primary/10 text-primary border-primary/20"
                  >
                    Dark Humor
                  </Badge>
                  <span className="text-muted-foreground">
                    Witty and sarcastic critiques
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-sans font-semibold text-foreground mb-6">
                Pick Your Roaster
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Badge
                    variant="outline"
                    className="bg-primary/10 text-primary border-primary/20"
                  >
                    Best Friend
                  </Badge>
                  <span className="text-muted-foreground">
                    Supportive but honest feedback
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge
                    variant="outline"
                    className="bg-primary/10 text-primary border-primary/20"
                  >
                    Job Interviewer
                  </Badge>
                  <span className="text-muted-foreground">
                    Professional industry perspective
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge
                    variant="outline"
                    className="bg-primary/10 text-primary border-primary/20"
                  >
                    Stand-up Comedian
                  </Badge>
                  <span className="text-muted-foreground">
                    Hilarious takes on your career
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-sans font-bold text-foreground mb-6">
            Ready to Get Roasted?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of job seekers who&apos;ve improved their resumes through
            the power of humor and AI.
          </p>
          <Link href="/roast">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 transform hover:scale-105"
            >
              Start Your Roast Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <h3 className="text-xl font-sans font-bold text-primary">
              Resume Roaster
            </h3>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/contact"
              className="hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
