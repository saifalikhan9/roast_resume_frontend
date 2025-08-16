import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { FileText, Upload } from "lucide-react";

export const File_Upload_Section = ({
  dragActive,
  file,
  handleDrag,
  handleDrop,
  handleFileChange,
}) => {
  return (
    <Card className="bg-card border-border">
                    <CardHeader>
                      <CardTitle className="text-card-foreground font-sans">Upload Your Resume</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div 
                        className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                          dragActive
                            ? "border-primary bg-primary/5"
                            : file
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                        }`}
                        onDragEnter={handleDrag}
                        onDragLeave={handleDrag}
                        onDragOver={handleDrag}
                        onDrop={handleDrop}
                      >
                        {file ? (
                          <div className="flex items-center justify-center gap-3">
                            <FileText className="w-8 h-8 text-primary" />
                            <div>
                              <p className="text-card-foreground font-medium">{file.name}</p>
                              <p className="text-muted-foreground text-sm">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                            </div>
                          </div>
                        ) : (
                          <div>
                            <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                            <p className="text-card-foreground mb-2">Drag and drop your resume here, or click to browse</p>
                            <p className="text-muted-foreground text-sm">PDF files only, max 10MB</p>
                          </div>
                        )}
                        <input
                          type="file"
                          accept=".pdf"
                          onChange={handleFileChange}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                      </div>
                    </CardContent>
                  </Card>
  );
};
