import { Check, Copy, RotateCcw } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
interface RoastResultProps {
  handleCopyResult?: () => Promise<void>;
  copied?: boolean;
  roastResult: string;
  handleTryAgain?: () => void;
}
export const Roast_Result: React.FC<RoastResultProps> = ({
  handleCopyResult,
  copied,
  roastResult,
  handleTryAgain,
}) => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-sans font-bold text-foreground mb-4">
          Your Resume <span className="text-primary">Roast</span> is Ready! 🔥
        </h1>
        <p className="text-muted-foreground text-lg">
          Here&apos;s what our AI roaster thinks about your resume
        </p>
      </div>

      <Card className="bg-card border-border">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-card-foreground font-sans">
            Your Personalized Roast
          </CardTitle>
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopyResult}
            className="flex items-center gap-2 bg-transparent"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy
              </>
            )}
          </Button>
        </CardHeader>
        <CardContent>
          <div className="prose prose-invert max-w-none">
            <pre className="whitespace-pre-wrap text-card-foreground font-sans text-sm leading-relaxed bg-muted/20 p-4 rounded-lg border border-border">
              {roastResult}
            </pre>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/roast">
          <Button
            onClick={handleTryAgain}
            variant="outline"
            size="lg"
            className="flex items-center gap-2 bg-transparent"
          >
            <RotateCcw className="w-4 h-4" />
            Try Another Roast
          </Button>
        </Link>
        <Link href="/">
          <Button size="lg" className="w-full sm:w-auto">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};
