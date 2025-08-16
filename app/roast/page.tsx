"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Roast_Result } from "@/components/roastResult";
import { File_Upload_Section } from "@/components/fileUpload";
import { Tone_Section } from "@/components/tone-section";
import Roaster_Section from "@/components/roaster-section";

export default function RoastPage() {
  const [file, setFile] = useState<File | null>(null);
  const [tone, setTone] = useState("");
  const [role, setRole] = useState("");
  const [language, setLanguage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [roastResult, setRoastResult] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.type === "application/pdf") {
        setFile(selectedFile);
      } else {
        alert("Please upload a PDF file only");
      }
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      if (droppedFile.type === "application/pdf") {
        setFile(droppedFile);
      } else {
        alert("Please upload a PDF file only");
      }
    }
  };
  function cleanText(text: string) {
    if (!text) return "";
    return text
      .replace(/\*/g, "") // remove stars
      .replace(/[_`]/g, "") // remove underscores & backticks
      .replace(/#+\s/g, ""); // remove markdown headings like # Title
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file || !tone || !role || !language) {
      alert("Please fill in all fields and upload a resume");
      return;
    }

    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("resume", file);
      formData.append("tone", tone);
      formData.append("role", role);
      formData.append("language", language);

      const res = await fetch("https://resume-roast-backend2.vercel.app/generateRoast", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      console.log(data);
      if (!data) alert("data is empmty");
      const clean_text = cleanText(data.text);
      setRoastResult(clean_text);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyResult = async () => {
    if (roastResult) {
      try {
        await navigator.clipboard.writeText(roastResult);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (error) {
        alert("Failed to copy to clipboard");
      }
    }
  };

  const handleTryAgain = () => {
    setRoastResult(null);
    setFile(null);
    setTone("");
    setRole("");
    setLanguage("");
  };

  const toneOptions = [
    {
      value: "soft",
      label: "Soft Hearted",
      description: "Gentle and encouraging feedback",
    },
    {
      value: "hard",
      label: "Hard Hearted",
      description: "Brutally honest, no sugar coating",
    },
    {
      value: "dark",
      label: "Dark Humor",
      description: "Witty and sarcastic critiques",
    },
    {
      value: "motivational",
      label: "Motivational",
      description: "Inspiring and uplifting tone",
    },
  ];

  const roleOptions = [
    {
      value: "friend",
      label: "Best Friend",
      description: "Supportive but honest feedback",
    },
    {
      value: "interviewer",
      label: "Job Interviewer",
      description: "Professional industry perspective",
    },
    {
      value: "comedian",
      label: "Stand-up Comedian",
      description: "Hilarious takes on your career",
    },
    {
      value: "mentor",
      label: "Career Mentor",
      description: "Wise and experienced guidance",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-2xl font-sans font-bold text-primary">
                Resume Roaster
              </span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {roastResult ? (
          <Roast_Result
            handleCopyResult={handleCopyResult}
            copied={copied}
            roastResult={roastResult}
            handleTryAgain={handleTryAgain}
          />
        ) : (
          <>
            <div className="text-center mb-8">
              <h1 className="text-4xl font-sans font-bold text-foreground mb-4">
                Get Your Resume <span className="text-primary">Roasted</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Upload your resume and customize your roasting experience
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <File_Upload_Section
                dragActive={dragActive}
                file={file}
                handleDrag={handleDrag}
                handleDrop={handleDrop}
                handleFileChange={handleFileChange}
              />

              <Tone_Section
                tone={tone}
                toneOptions={toneOptions}
                setTone={setTone}
              />

              <Roaster_Section
                role={role}
                setRole={setRole}
                roleOptions={roleOptions}
              />

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-card-foreground font-sans">
                    Select Language
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger className="bg-input border-border text-foreground">
                      <SelectValue placeholder="Choose your preferred language" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border-border">
                      <SelectItem
                        value="english"
                        className="text-popover-foreground"
                      >
                        English
                      </SelectItem>
                      <SelectItem
                        value="hinglish"
                        className="text-popover-foreground"
                      >
                        Hinglish
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>

              <div className="text-center">
                <Button
                  type="submit"
                  size="lg"
                  disabled={!file || !tone || !role || !language || isLoading}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                      Cooking up your roast...
                    </div>
                  ) : (
                    "Roast My Resume"
                  )}
                </Button>
              </div>
            </form>
          </>
        )}

        {isLoading && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
            <Card className="bg-card border-border p-8 text-center max-w-md mx-4">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <h3 className="text-xl font-sans font-semibold text-card-foreground mb-2">
                Preparing Your Roast
              </h3>
              <p className="text-muted-foreground">
                Our AI is analyzing your resume and crafting the perfect roast.
                This might take a moment...
              </p>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
