"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

export function SchoolsApplicationSection() {
  const [formData, setFormData] = useState({
    universityName: "",
    contactName: "",
    email: "",
    phone: "",
    position: "",
    studentPopulation: "",
    expectedAttendance: "",
    venue: "",
    additionalInfo: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("School application submitted:", formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-card/30 to-secondary/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6">Apply to Host Midnight in PJs</h2>
          <p className="text-lg text-muted-foreground">
            Fill out the application below to bring this magical Christmas experience to your campus
          </p>
        </div>

        <Card className="bg-white/90 backdrop-blur-sm border-2 border-accent/20 shadow-2xl">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">University Name *</label>
                  <Input
                    placeholder="e.g., University of Lagos"
                    value={formData.universityName}
                    onChange={(e) => handleInputChange("universityName", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Contact Person *</label>
                  <Input
                    placeholder="Full name"
                    value={formData.contactName}
                    onChange={(e) => handleInputChange("contactName", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <Input
                    type="email"
                    placeholder="contact@university.edu.ng"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number *</label>
                  <Input
                    placeholder="+234 xxx xxx xxxx"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Position *</label>
                  <Select value={formData.position} onValueChange={(value) => handleInputChange("position", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student-affairs">Student Affairs Director</SelectItem>
                      <SelectItem value="dean">Dean</SelectItem>
                      <SelectItem value="student-union">Student Union Executive</SelectItem>
                      <SelectItem value="events-coordinator">Events Coordinator</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Student Population *</label>
                  <Select
                    value={formData.studentPopulation}
                    onValueChange={(value) => handleInputChange("studentPopulation", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-5000">Under 5,000</SelectItem>
                      <SelectItem value="5000-10000">5,000 - 10,000</SelectItem>
                      <SelectItem value="10000-20000">10,000 - 20,000</SelectItem>
                      <SelectItem value="20000-plus">20,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Expected Attendance *</label>
                  <Select
                    value={formData.expectedAttendance}
                    onValueChange={(value) => handleInputChange("expectedAttendance", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Estimated attendees" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="100-300">100 - 300 students</SelectItem>
                      <SelectItem value="300-500">300 - 500 students</SelectItem>
                      <SelectItem value="500-1000">500 - 1,000 students</SelectItem>
                      <SelectItem value="1000-plus">1,000+ students</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Proposed Venue *</label>
                  <Input
                    placeholder="e.g., Main campus field, Sports complex"
                    value={formData.venue}
                    onChange={(e) => handleInputChange("venue", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Additional Information</label>
                <Textarea
                  placeholder="Tell us why your university would be perfect for hosting Midnight in PJs. Include any special considerations, past event experience, or unique aspects of your campus..."
                  value={formData.additionalInfo}
                  onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                  className="min-h-[120px]"
                />
              </div>

              <div className="text-center pt-6">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-white font-bold px-12 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <span className="mr-2">🚀</span>
                  Submit Application
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  We'll review your application and get back to you within 48 hours
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
