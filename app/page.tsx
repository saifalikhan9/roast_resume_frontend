import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-sans font-bold text-primary">Resume Roaster</h1>
            </div>
            <div className="flex items-center gap-4">
              <Link href="#pricing" className="text-foreground hover:text-primary transition-colors">
                Pricing
              </Link>
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 bg-card text-card-foreground">
            AI-Powered Resume Critique
          </Badge>
          <h1 className="text-5xl md:text-6xl font-sans font-bold text-foreground mb-6 leading-tight">
            Roast Your Resume with a <span className="text-primary">Side of Humor!</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Upload your resume and let our AI serve up some playful critiques tailored to your career aspirations.
            Choose your tone, pick your roaster, and get ready to laugh while you learn.
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
            <h2 className="text-3xl font-sans font-bold text-foreground mb-4">How It Works</h2>
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
                <h3 className="text-xl font-sans font-semibold text-card-foreground mb-2">Upload Resume</h3>
                <p className="text-muted-foreground">Drop your PDF resume and let our AI analyze your career story</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎭</span>
                </div>
                <h3 className="text-xl font-sans font-semibold text-card-foreground mb-2">Choose Your Style</h3>
                <p className="text-muted-foreground">
                  Pick your tone and roaster personality - from friendly to brutally honest
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔥</span>
                </div>
                <h3 className="text-xl font-sans font-semibold text-card-foreground mb-2">Get Roasted</h3>
                <p className="text-muted-foreground">
                  Receive your personalized roast with actionable insights and laughs
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
            <h2 className="text-3xl font-sans font-bold text-foreground mb-4">Customize Your Roast</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tailor the experience to match your personality and career goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-sans font-semibold text-foreground mb-6">Choose Your Tone</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    Soft Hearted
                  </Badge>
                  <span className="text-muted-foreground">Gentle and encouraging feedback</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    Hard Hearted
                  </Badge>
                  <span className="text-muted-foreground">Brutally honest, no sugar coating</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    Dark Humor
                  </Badge>
                  <span className="text-muted-foreground">Witty and sarcastic critiques</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-sans font-semibold text-foreground mb-6">Pick Your Roaster</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    Best Friend
                  </Badge>
                  <span className="text-muted-foreground">Supportive but honest feedback</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    Job Interviewer
                  </Badge>
                  <span className="text-muted-foreground">Professional industry perspective</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    Stand-up Comedian
                  </Badge>
                  <span className="text-muted-foreground">Hilarious takes on your career</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-sans font-bold text-foreground mb-4">Choose Your Roast Plan</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From gentle feedback to brutal honesty - pick the plan that matches your courage level
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-200 relative">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-sans font-bold text-card-foreground mb-2">Gentle Roast</h3>
                  <p className="text-muted-foreground mb-4">Perfect for sensitive souls</p>
                  <div className="text-4xl font-sans font-bold text-primary mb-2">$9</div>
                  <p className="text-muted-foreground text-sm">per roast</p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-card-foreground">1 Resume Analysis</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-card-foreground">Soft-hearted tone only</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-card-foreground">Best friend perspective</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-card-foreground">English & Hindi support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-card-foreground">Basic improvement tips</span>
                  </li>
                </ul>

                <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Get Gentle Roast
                </Button>
              </CardContent>
            </Card>

            {/* Popular Plan */}
            <Card className="bg-card border-primary hover:border-primary transition-all duration-200 relative scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground px-4 py-1">Most Popular</Badge>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-sans font-bold text-card-foreground mb-2">Full Roast</h3>
                  <p className="text-muted-foreground mb-4">The complete roasting experience</p>
                  <div className="text-4xl font-sans font-bold text-primary mb-2">$19</div>
                  <p className="text-muted-foreground text-sm">per roast</p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-card-foreground">1 Resume Analysis</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-card-foreground">All tone options</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-card-foreground">All roaster personalities</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-card-foreground">English & Hindi support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-card-foreground">Detailed improvement guide</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-card-foreground">Industry-specific insights</span>
                  </li>
                </ul>

                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Get Full Roast
                </Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-200 relative">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-sans font-bold text-card-foreground mb-2">Roast Package</h3>
                  <p className="text-muted-foreground mb-4">For the truly brave</p>
                  <div className="text-4xl font-sans font-bold text-primary mb-2">$49</div>
                  <p className="text-muted-foreground text-sm">3 roasts + extras</p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-card-foreground">3 Resume Analyses</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-card-foreground">All tone options</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-card-foreground">All roaster personalities</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-card-foreground">English & Hindi support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-card-foreground">Premium improvement guide</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-card-foreground">Before/after comparison</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-card-foreground">Priority support</span>
                  </li>
                </ul>

                <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Get Roast Package
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Pricing FAQ */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-sans font-semibold text-foreground mb-8">Frequently Asked Questions</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
              <div>
                <h4 className="font-sans font-semibold text-foreground mb-2">What file formats do you accept?</h4>
                <p className="text-muted-foreground">
                  We currently accept PDF files only. Make sure your resume is in PDF format before uploading.
                </p>
              </div>
              <div>
                <h4 className="font-sans font-semibold text-foreground mb-2">How long does a roast take?</h4>
                <p className="text-muted-foreground">
                  Most roasts are ready within 2-5 minutes. Complex resumes might take a bit longer to analyze
                  thoroughly.
                </p>
              </div>
              <div>
                <h4 className="font-sans font-semibold text-foreground mb-2">Can I get a refund?</h4>
                <p className="text-muted-foreground">
                  If you're not satisfied with your roast, we offer a full refund within 24 hours of purchase.
                </p>
              </div>
              <div>
                <h4 className="font-sans font-semibold text-foreground mb-2">Is my resume data secure?</h4>
                <p className="text-muted-foreground">
                  We delete all uploaded resumes within 24 hours and never share your data with third parties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-sans font-bold text-foreground mb-6">Ready to Get Roasted?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of job seekers who've improved their resumes through the power of humor and AI.
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
            <h3 className="text-xl font-sans font-bold text-primary">Resume Roaster</h3>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
