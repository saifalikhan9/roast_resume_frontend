import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from './ui/label'
export default function Roaster_Section({role,setRole,roleOptions}) {
  return (
     <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-card-foreground font-sans">Pick Your Roaster</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={role} onValueChange={setRole} className="space-y-4">
                    {roleOptions.map((option) => (
                      <div key={option.value} className="flex items-start space-x-3">
                        <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                        <div className="flex-1">
                          <Label htmlFor={option.value} className="text-card-foreground font-medium cursor-pointer">
                            {option.label}
                          </Label>
                          <p className="text-muted-foreground text-sm mt-1">{option.description}</p>
                        </div>
                      </div>
                    ))}
                  </RadioGroup>
                </CardContent>
              </Card>
  )
}
