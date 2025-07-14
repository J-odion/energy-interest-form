"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  Zap,
  Sun,
  Battery,
  Home,
  User,
  MapPin,
  Phone,
  Mail,
  Briefcase,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Calculator,
  Lightbulb,
  Shield,
  Leaf,
  Play,
  Sparkles,
  Clock,
  Award,
} from "lucide-react"

const nigerianStates = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "FCT",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
]

const systemCapacities = [
  {
    value: "200w/kwh power station",
    label: "200W Power Station",
    price: "₦150,000 - ₦300,000",
    description: "Perfect for small devices and emergency backup",
    icon: Battery,
    features: ["Portable", "USB charging", "LED lighting", "Phone charging"],
  },
  {
    value: "1.5kva inverter",
    label: "1.5KVA Inverter System",
    price: "₦400,000 - ₦800,000",
    description: "Ideal for small homes and apartments",
    icon: Home,
    features: ["Basic appliances", "Lighting", "TV & Fan", "Small fridge"],
  },
  {
    value: "3.5kva inverter",
    label: "3.5KVA Inverter System",
    price: "₦800,000 - ₦1,500,000",
    description: "Great for medium-sized homes",
    icon: Zap,
    features: ["Multiple rooms", "AC (small)", "Washing machine", "All lighting"],
  },
  {
    value: "5kva inverter",
    label: "5KVA Inverter System",
    price: "₦1,200,000 - ₦2,500,000",
    description: "Perfect for large homes",
    icon: Sun,
    features: ["Full home power", "Multiple ACs", "All appliances", "24/7 backup"],
  },
  {
    value: "10kva inverter",
    label: "10KVA Inverter System",
    price: "₦2,500,000 - ₦4,500,000",
    description: "Commercial grade for businesses",
    icon: Briefcase,
    features: ["Office buildings", "Small business", "Heavy appliances", "Industrial use"],
  },
  {
    value: "20kva inverter",
    label: "20KVA Inverter System",
    price: "₦4,500,000 - ₦8,000,000",
    description: "Large commercial applications",
    icon: Shield,
    features: ["Large offices", "Factories", "Multiple units", "High capacity"],
  },
  {
    value: "50kva inverter",
    label: "50KVA Inverter System",
    price: "₦8,000,000 - ₦15,000,000",
    description: "Industrial scale solutions",
    icon: Leaf,
    features: ["Industrial plants", "Large facilities", "Grid-tie capable", "Maximum power"],
  },
]

const occupations = ["Unemployed", "Employed", "Self-employed"]
const workplaceSectors = ["Private", "Public (Government)", "Non-profit", "Other - please specify"]
const paymentPlans = [
  { value: "Outright", label: "Outright Payment", discount: "5% discount" },
  { value: "3 months", label: "3 Months", interest: "0% interest" },
  { value: "6 months", label: "6 Months", interest: "2% interest" },
  { value: "8 months", label: "8 Months", interest: "3% interest" },
  { value: "12 months", label: "12 Months", interest: "5% interest" },
  { value: "18 months", label: "18 Months", interest: "8% interest" },
  { value: "21 months", label: "21 Months", interest: "10% interest" },
]

export default function Component() {
  const [currentStep, setCurrentStep] = useState(0) // Start at 0 for introduction
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    phoneNumber: "",
    homeAddress: "",
    residenceState: "",
    systemCapacity: "",
    occupation: "",
    otherSector: "",
    workplaceSector: "",
    estimatedBudget: "",
    paymentPlan: "",
  })
  const [selectedSystem, setSelectedSystem] = useState<any>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const totalSteps = 4 // Form steps (1-4)
  const progress = currentStep === 0 ? 0 : ((currentStep - 1) / (totalSteps - 1)) * 100

  useEffect(() => {
    if (formData.systemCapacity) {
      const system = systemCapacities.find((s) => s.value === formData.systemCapacity)
      setSelectedSystem(system)
    }
  }, [formData.systemCapacity])

  const handleStart = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentStep(1)
      setIsAnimating(false)
    }, 300)
  }

  const handleNext = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps))
      setIsAnimating(false)
    }, 300)
  }

  const handlePrev = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentStep((prev) => Math.max(prev - 1, 1))
      setIsAnimating(false)
    }, 300)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form submitted:", formData)
    setCurrentStep(5) // Move to completion step
    setIsSubmitting(false)
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.fullName && formData.email && formData.phoneNumber
      case 2:
        return formData.homeAddress && formData.residenceState
      case 3:
        return formData.systemCapacity && formData.paymentPlan
      case 4:
        return true
      default:
        return false
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-slate-100 relative">
      {/* Background Device Image */}
      <div className="fixed inset-0 z-0 opacity-5">
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/4">
          <Image
            src="/stroom-device.png"
            alt="Stroom Device"
            width={600}
            height={800}
            className="w-auto h-screen object-contain"
          />
        </div>
      </div>

      {/* Header - Only show during form steps */}
      {currentStep > 0 && currentStep < 5 && (
        <div className="bg-white shadow-lg border-b sticky top-0 z-50 relative">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Image
                src="/kairos-logo.png"
                alt="Kairos Hof Energy Ltd"
                width={300}
                height={119}
                className="h-12 w-auto"
              />
              <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-2 text-sm text-slate-600">
                  <span>
                    Step {currentStep} of {totalSteps}
                  </span>
                </div>
                <div className="w-32">
                  <Progress value={progress} className="h-2 bg-slate-200">
                    <div
                      className="h-full bg-gradient-to-r from-slate-800 to-green-500 transition-all duration-300 rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  </Progress>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Introduction Step */}
          {currentStep === 0 && (
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center space-y-8 max-w-4xl mx-auto">
                {/* Logo */}
                <div className="mb-8">
                  <Image
                    src="/kairos-logo.png"
                    alt="Kairos Hof Energy Ltd"
                    width={400}
                    height={159}
                    className="h-20 w-auto mx-auto"
                  />
                </div>

                {/* Hero Content */}
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-6xl font-bold text-slate-800 leading-tight">
                    Power Your Future with
                    <span className="text-green-500 block">Clean Energy</span>
                  </h1>

                  <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                    Join thousands of Nigerians who have made the switch to reliable, sustainable solar energy. Get a
                    personalized renewable energy solution tailored to your needs.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-6 my-12">
                  <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Clock className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">Quick & Easy</h3>
                      <p className="text-slate-600">Complete in just 5 minutes</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-slate-700 to-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Shield className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">Expert Consultation</h3>
                      <p className="text-slate-600">Free professional assessment</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Award className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">Trusted Brand</h3>
                      <p className="text-slate-600">Nigeria's leading solar provider</p>
                    </CardContent>
                  </Card>
                </div>

                {/* CTA Section */}
                <div className="space-y-6">
                  <div className="flex items-center justify-center gap-2 text-slate-600">
                    <Sparkles className="h-5 w-5 text-green-500" />
                    <span>Get your personalized energy solution in 4 simple steps</span>
                    <Sparkles className="h-5 w-5 text-green-500" />
                  </div>

                  <Button
                    onClick={handleStart}
                    size="lg"
                    className="bg-gradient-to-r from-slate-800 to-green-500 hover:from-slate-900 hover:to-green-600 text-white font-semibold px-12 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
                  >
                    <Play className="mr-3 h-6 w-6" />
                    Start Your Energy Journey
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="pt-8 border-t border-slate-200">
                  <p className="text-sm text-slate-500 mb-4">Trusted by over 10,000+ Nigerian homes and businesses</p>
                  <div className="flex justify-center items-center gap-8 text-slate-400">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">No spam, ever</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Secure & private</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-green-500" />
                      <span className="text-sm">24/7 support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Form Steps */}
          {currentStep > 0 && currentStep < 5 && (
            <>
              {/* Step Indicator */}
              <div className="flex justify-center mb-8">
                <div className="flex items-center space-x-4">
                  {[1, 2, 3, 4].map((step) => (
                    <div key={step} className="flex items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                          step <= currentStep
                            ? "bg-gradient-to-r from-slate-800 to-green-500 text-white shadow-lg"
                            : "bg-slate-200 text-slate-500"
                        }`}
                      >
                        {step < currentStep ? <CheckCircle className="h-5 w-5" /> : step}
                      </div>
                      {step < 4 && (
                        <div
                          className={`w-16 h-1 mx-2 transition-all duration-300 ${
                            step < currentStep ? "bg-gradient-to-r from-slate-800 to-green-500" : "bg-slate-200"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Form Content */}
              <div
                className={`transition-all duration-300 ${isAnimating ? "opacity-0 transform translate-x-4" : "opacity-100 transform translate-x-0"}`}
              >
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <div className="grid lg:grid-cols-2 gap-8">
                    <Card className="shadow-2xl border-0 overflow-hidden bg-white/95 backdrop-blur-sm">
                      <CardHeader className="bg-gradient-to-r from-slate-800 to-slate-700 text-white">
                        <CardTitle className="flex items-center gap-2 text-2xl">
                          <User className="h-6 w-6" />
                          Tell Us About Yourself
                        </CardTitle>
                        <CardDescription className="text-slate-200">
                          Let's start with your basic information
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-8 space-y-6">
                        <div className="space-y-6">
                          <div className="relative">
                            <Label htmlFor="fullName" className="text-sm font-medium flex items-center gap-2">
                              <User className="h-4 w-4" />
                              Full Name <span className="text-red-500">*</span>
                            </Label>
                            <Input
                              id="fullName"
                              type="text"
                              placeholder="Enter your full name"
                              value={formData.fullName}
                              onChange={(e) => handleInputChange("fullName", e.target.value)}
                              className="mt-2 border-2 border-slate-200 focus:border-green-500 focus:ring-green-500 transition-all duration-300"
                            />
                          </div>

                          <div className="relative">
                            <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                              <Mail className="h-4 w-4" />
                              Email Address <span className="text-red-500">*</span>
                            </Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="your.email@example.com"
                              value={formData.email}
                              onChange={(e) => handleInputChange("email", e.target.value)}
                              className="mt-2 border-2 border-slate-200 focus:border-green-500 focus:ring-green-500 transition-all duration-300"
                            />
                          </div>

                          <div className="relative">
                            <Label htmlFor="phoneNumber" className="text-sm font-medium flex items-center gap-2">
                              <Phone className="h-4 w-4" />
                              Phone Number <span className="text-red-500">*</span>
                            </Label>
                            <Input
                              id="phoneNumber"
                              type="tel"
                              placeholder="+234 xxx xxx xxxx"
                              value={formData.phoneNumber}
                              onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                              className="mt-2 border-2 border-slate-200 focus:border-green-500 focus:ring-green-500 transition-all duration-300"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="space-y-6">
                      <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <div className="text-center space-y-4">
                            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto">
                              <Lightbulb className="h-10 w-10 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-800">Why Choose Solar?</h3>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div className="text-center p-3 bg-green-50 rounded-lg border border-green-100">
                                <Sun className="h-6 w-6 text-green-600 mx-auto mb-2" />
                                <p className="font-medium text-slate-700">Clean Energy</p>
                              </div>
                              <div className="text-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                                <Calculator className="h-6 w-6 text-slate-600 mx-auto mb-2" />
                                <p className="font-medium text-slate-700">Cost Savings</p>
                              </div>
                              <div className="text-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                                <Shield className="h-6 w-6 text-slate-600 mx-auto mb-2" />
                                <p className="font-medium text-slate-700">Reliable Power</p>
                              </div>
                              <div className="text-center p-3 bg-green-50 rounded-lg border border-green-100">
                                <Leaf className="h-6 w-6 text-green-600 mx-auto mb-2" />
                                <p className="font-medium text-slate-700">Eco-Friendly</p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                )}

                {/* Step 2: Location Information */}
                {currentStep === 2 && (
                  <div className="grid lg:grid-cols-2 gap-8">
                    <Card className="shadow-2xl border-0 overflow-hidden bg-white/95 backdrop-blur-sm">
                      <CardHeader className="bg-gradient-to-r from-green-600 to-green-500 text-white">
                        <CardTitle className="flex items-center gap-2 text-2xl">
                          <MapPin className="h-6 w-6" />
                          Your Location
                        </CardTitle>
                        <CardDescription className="text-green-100">
                          Help us understand your location for better service
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-8 space-y-6">
                        <div className="space-y-6">
                          <div className="relative">
                            <Label htmlFor="residenceState" className="text-sm font-medium flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              Residence State <span className="text-red-500">*</span>
                            </Label>
                            <Select
                              value={formData.residenceState}
                              onValueChange={(value) => handleInputChange("residenceState", value)}
                            >
                              <SelectTrigger className="mt-2 border-2 border-slate-200 focus:border-green-500 focus:ring-green-500 transition-all duration-300">
                                <SelectValue placeholder="Select your state" />
                              </SelectTrigger>
                              <SelectContent className="max-h-60">
                                {nigerianStates.map((state) => (
                                  <SelectItem key={state} value={state}>
                                    {state}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="relative">
                            <Label htmlFor="homeAddress" className="text-sm font-medium flex items-center gap-2">
                              <Home className="h-4 w-4" />
                              Home Address <span className="text-red-500">*</span>
                            </Label>
                            <Textarea
                              id="homeAddress"
                              placeholder="Enter your complete home address"
                              value={formData.homeAddress}
                              onChange={(e) => handleInputChange("homeAddress", e.target.value)}
                              className="mt-2 border-2 border-slate-200 focus:border-green-500 focus:ring-green-500 min-h-[120px] transition-all duration-300"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="space-y-6">
                      <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold mb-4 text-center text-slate-800">
                            Installation Process
                          </h3>
                          <div className="space-y-4">
                            {[
                              { step: 1, title: "Site Survey", desc: "Free assessment of your location" },
                              { step: 2, title: "Custom Design", desc: "Tailored system for your needs" },
                              { step: 3, title: "Professional Installation", desc: "Expert installation team" },
                              { step: 4, title: "System Activation", desc: "Testing and commissioning" },
                            ].map((item) => (
                              <div
                                key={item.step}
                                className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                              >
                                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                                  <span className="text-white font-semibold text-sm">{item.step}</span>
                                </div>
                                <div>
                                  <h4 className="font-medium text-slate-800">{item.title}</h4>
                                  <p className="text-sm text-slate-600">{item.desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                )}

                {/* Step 3: System Selection */}
                {currentStep === 3 && (
                  <div className="space-y-8">
                    <div className="text-center">
                      <h2 className="text-3xl font-bold mb-4 text-slate-800">Choose Your Perfect System</h2>
                      <p className="text-slate-600">Select the system capacity that best fits your energy needs</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {systemCapacities.map((system) => {
                        const Icon = system.icon
                        const isSelected = formData.systemCapacity === system.value
                        return (
                          <Card
                            key={system.value}
                            className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white/95 backdrop-blur-sm ${
                              isSelected
                                ? "ring-4 ring-green-500 shadow-2xl bg-gradient-to-br from-green-50 to-slate-50"
                                : "hover:shadow-lg"
                            }`}
                            onClick={() => handleInputChange("systemCapacity", system.value)}
                          >
                            <CardHeader className="text-center">
                              <div
                                className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3 ${
                                  isSelected
                                    ? "bg-gradient-to-r from-slate-800 to-green-500"
                                    : "bg-gradient-to-r from-slate-400 to-slate-500"
                                }`}
                              >
                                <Icon className="h-8 w-8 text-white" />
                              </div>
                              <CardTitle className="text-lg text-slate-800">{system.label}</CardTitle>
                              <CardDescription className="text-slate-600">{system.description}</CardDescription>
                              <Badge variant="secondary" className="mt-2 bg-green-100 text-green-800">
                                {system.price}
                              </Badge>
                            </CardHeader>
                            <CardContent>
                              <ul className="space-y-2 text-sm">
                                {system.features.map((feature, index) => (
                                  <li key={index} className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                    <span className="text-slate-700">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>
                        )
                      })}
                    </div>

                    {selectedSystem && (
                      <Card className="shadow-xl border-0 bg-gradient-to-r from-green-50 to-slate-50 bg-white/95 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h3 className="text-xl font-semibold mb-4 text-slate-800">Payment Options</h3>
                              <div className="space-y-3">
                                {paymentPlans.map((plan) => (
                                  <div
                                    key={plan.value}
                                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                                      formData.paymentPlan === plan.value
                                        ? "border-green-500 bg-green-50"
                                        : "border-slate-200 hover:border-slate-300 bg-white"
                                    }`}
                                    onClick={() => handleInputChange("paymentPlan", plan.value)}
                                  >
                                    <div className="flex justify-between items-center">
                                      <span className="font-medium text-slate-800">{plan.label}</span>
                                      {plan.discount && (
                                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                                          {plan.discount}
                                        </Badge>
                                      )}
                                      {plan.interest && (
                                        <Badge variant="outline" className="border-slate-300">
                                          {plan.interest}
                                        </Badge>
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h3 className="text-xl font-semibold mb-4 text-slate-800">System Details</h3>
                              <div className="bg-white p-4 rounded-lg border border-slate-200">
                                <div className="flex items-center gap-3 mb-3">
                                  <selectedSystem.icon className="h-6 w-6 text-green-500" />
                                  <span className="font-medium text-slate-800">{selectedSystem.label}</span>
                                </div>
                                <p className="text-slate-600 mb-3">{selectedSystem.description}</p>
                                <div className="text-lg font-semibold text-green-600">{selectedSystem.price}</div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                )}

                {/* Step 4: Professional Info & Review */}
                {currentStep === 4 && (
                  <div className="grid lg:grid-cols-2 gap-8">
                    <Card className="shadow-2xl border-0 overflow-hidden bg-white/95 backdrop-blur-sm">
                      <CardHeader className="bg-gradient-to-r from-slate-700 to-slate-800 text-white">
                        <CardTitle className="flex items-center gap-2 text-2xl">
                          <Briefcase className="h-6 w-6" />
                          Professional Information
                        </CardTitle>
                        <CardDescription className="text-slate-200">
                          Optional information to better serve you
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-8 space-y-6">
                        <div className="space-y-6">
                          <div>
                            <Label htmlFor="occupation" className="text-sm font-medium flex items-center gap-2">
                              <Briefcase className="h-4 w-4" />
                              Occupation
                            </Label>
                            <Select
                              value={formData.occupation}
                              onValueChange={(value) => handleInputChange("occupation", value)}
                            >
                              <SelectTrigger className="mt-2 border-2 border-slate-200 focus:border-green-500">
                                <SelectValue placeholder="Select occupation" />
                              </SelectTrigger>
                              <SelectContent>
                                {occupations.map((occupation) => (
                                  <SelectItem key={occupation} value={occupation}>
                                    {occupation}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <Label htmlFor="workplaceSector" className="text-sm font-medium">
                              Workplace Sector
                            </Label>
                            <Select
                              value={formData.workplaceSector}
                              onValueChange={(value) => handleInputChange("workplaceSector", value)}
                            >
                              <SelectTrigger className="mt-2 border-2 border-slate-200 focus:border-green-500">
                                <SelectValue placeholder="Select sector" />
                              </SelectTrigger>
                              <SelectContent>
                                {workplaceSectors.map((sector) => (
                                  <SelectItem key={sector} value={sector}>
                                    {sector}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            {/* Conditional input field for "Other" option */}
                            {formData.workplaceSector === "Other - please specify" && (
                              <div className="mt-4">
                                <Label htmlFor="otherSector" className="text-sm font-medium">
                                  Please specify your workplace sector
                                </Label>
                                <Input
                                  id="otherSector"
                                  type="text"
                                  placeholder="Enter your specific workplace sector"
                                  value={formData.otherSector || ""}
                                  onChange={(e) => handleInputChange("otherSector", e.target.value)}
                                  className="mt-2 border-2 border-slate-200 focus:border-green-500 transition-all duration-300"
                                />
                              </div>
                            )}
                          </div>

                          <div>
                            <Label htmlFor="estimatedBudget" className="text-sm font-medium flex items-center gap-2">
                              <Calculator className="h-4 w-4" />
                              Estimated Budget
                            </Label>
                            <Input
                              id="estimatedBudget"
                              type="text"
                              placeholder="e.g., ₦500,000 - ₦5,000,000"
                              value={formData.estimatedBudget}
                              onChange={(e) => handleInputChange("estimatedBudget", e.target.value)}
                              className="mt-2 border-2 border-slate-200 focus:border-green-500"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
                      <CardHeader className="bg-gradient-to-r from-green-600 to-green-500 text-white">
                        <CardTitle>Review Your Information</CardTitle>
                        <CardDescription className="text-green-100">
                          Please review your details before submitting
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-6 space-y-4">
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span className="text-slate-600">Name:</span>
                            <span className="font-medium text-slate-800">{formData.fullName}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-600">Email:</span>
                            <span className="font-medium text-slate-800">{formData.email}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-600">Phone:</span>
                            <span className="font-medium text-slate-800">{formData.phoneNumber}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-600">State:</span>
                            <span className="font-medium text-slate-800">{formData.residenceState}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-600">System:</span>
                            <span className="font-medium text-slate-800">{selectedSystem?.label}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-600">Payment:</span>
                            <span className="font-medium text-slate-800">{formData.paymentPlan}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-600">Workplace:</span>
                            <span className="font-medium text-slate-800">
                              {formData.workplaceSector === "Other - please specify"
                                ? formData.otherSector || "Other"
                                : formData.workplaceSector}
                            </span>
                          </div>
                        </div>

                        <div className="pt-4 border-t">
                          <Button
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-slate-800 to-green-500 hover:from-slate-900 hover:to-green-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {isSubmitting ? (
                              <>
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                Submitting...
                              </>
                            ) : (
                              <>
                                Submit Interest Form
                                <CheckCircle className="ml-2 h-5 w-5" />
                              </>
                            )}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <Button
                  onClick={handlePrev}
                  disabled={currentStep === 1}
                  variant="outline"
                  className="flex items-center gap-2 bg-white/95 backdrop-blur-sm border-slate-300 hover:bg-slate-50"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Previous
                </Button>

                {currentStep < totalSteps ? (
                  <Button
                    onClick={handleNext}
                    disabled={!canProceed()}
                    className="flex items-center gap-2 bg-gradient-to-r from-slate-800 to-green-500 hover:from-slate-900 hover:to-green-600"
                  >
                    Next
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                ) : null}
              </div>
            </>
          )}

          {/* Completion Step */}
          {currentStep === 5 && (
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center space-y-8 max-w-2xl mx-auto">
                {/* Success Animation */}
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                    <CheckCircle className="h-16 w-16 text-white animate-bounce" />
                  </div>
                  <div className="absolute inset-0 w-32 h-32 bg-green-500 rounded-full mx-auto animate-ping opacity-20"></div>
                </div>

                {/* Success Message */}
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl font-bold text-slate-800">Thank You!</h1>
                  <p className="text-xl text-green-600 font-semibold">
                    Your interest form has been successfully submitted
                  </p>
                  <p className="text-lg text-slate-600 max-w-xl mx-auto">
                    Our energy experts will review your requirements and contact you within 24 hours to discuss your
                    personalized solar solution.
                  </p>
                </div>

                {/* Next Steps */}
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-6 text-slate-800">What happens next?</h3>
                    <div className="space-y-4">
                      {[
                        {
                          step: 1,
                          title: "Expert Review",
                          desc: "Our team reviews your requirements",
                          time: "Within 24 hours",
                        },
                        {
                          step: 2,
                          title: "Personal Consultation",
                          desc: "Schedule your free consultation call",
                          time: "1-2 days",
                        },
                        { step: 3, title: "Site Assessment", desc: "Free on-site energy audit", time: "3-5 days" },
                        { step: 4, title: "Custom Proposal", desc: "Receive your tailored solution", time: "5-7 days" },
                      ].map((item) => (
                        <div key={item.step} className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-semibold text-sm">{item.step}</span>
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-medium text-slate-800">{item.title}</h4>
                                <p className="text-sm text-slate-600">{item.desc}</p>
                              </div>
                              <Badge variant="outline" className="text-xs">
                                {item.time}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Contact Info */}
                <div className="pt-8 border-t border-slate-200">
                  <p className="text-slate-600 mb-4">Have questions? Our team is here to help!</p>
                  <div className="flex justify-center items-center gap-6 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-green-500" />
                      <span>+234 xxx xxx xxxx</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-green-500" />
                      <span>info@kairoshofenergy.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer - Only show on intro and completion */}
      {(currentStep === 0 || currentStep === 5) && (
        <footer className="bg-slate-900 text-white py-8 mt-12 relative z-10">
          <div className="container mx-auto px-4 text-center">
            <p className="text-slate-400">© 2025 Kairos Hof Energy Ltd. Powering Nigeria's sustainable future.</p>
          </div>
        </footer>
      )}
    </div>
  )
}
