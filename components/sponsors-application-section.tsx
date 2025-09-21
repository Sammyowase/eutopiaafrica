"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

export function SponsorsApplicationSection() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    position: "",
    category: "",
    budget: "",
    products: "",
    goals: "",
    experience: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Sponsor application submitted:", formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-card/30 to-secondary/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6">Apply for Sponsorship</h2>
          <p className="text-lg text-muted-foreground">
            Submit your application to become part of the Midnight in PJs experience
          </p>
        </div>

        <Card className="bg-white/90 backdrop-blur-sm border-2 border-accent/20 shadow-2xl">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Company Name *</label>
                  <Input
                    placeholder="Your company name"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange("companyName", e.target.value)}
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
                    placeholder="contact@company.com"
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
                  <Input
                    placeholder="e.g., Marketing Manager"
                    value={formData.position}
                    onChange={(e) => handleInputChange("position", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Sponsorship Category *</label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="jewelry">💍 Jewelry & Accessories</SelectItem>
                      <SelectItem value="sneakers">👟 Sneakers & Streetwear</SelectItem>
                      <SelectItem value="beauty">💄 Beauty & Skincare</SelectItem>
                      <SelectItem value="tech">📱 Tech & Gadgets</SelectItem>
                      <SelectItem value="food">🥤 Food & Drinks</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Budget Range *</label>
                  <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="50k-100k">₦50,000 - ₦100,000</SelectItem>
                      <SelectItem value="100k-250k">₦100,000 - ₦250,000</SelectItem>
                      <SelectItem value="250k-500k">₦250,000 - ₦500,000</SelectItem>
                      <SelectItem value="500k-plus">₦500,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Products for Claw Machine *</label>
                  <Input
                    placeholder="e.g., AirPods, Sneakers, Gift cards"
                    value={formData.products}
                    onChange={(e) => handleInputChange("products", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Marketing Goals *</label>
                <Textarea
                  placeholder="What do you hope to achieve through this sponsorship? (e.g., brand awareness, product trials, social media engagement)"
                  value={formData.goals}
                  onChange={(e) => handleInputChange("goals", e.target.value)}
                  className="min-h-[100px]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Previous Sponsorship Experience</label>
                <Textarea
                  placeholder="Tell us about any previous student marketing campaigns or event sponsorships you've done..."
                  value={formData.experience}
                  onChange={(e) => handleInputChange("experience", e.target.value)}
                  className="min-h-[100px]"
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
                  We'll review your application and contact you within 24 hours
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
