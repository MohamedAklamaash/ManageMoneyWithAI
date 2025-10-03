"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  featuresData,
  howItWorksData,
  testimonialsData,
} from "@/data/landing";
import HeroSection from "@/components/hero";
import LiquidEtherBackground from "@/components/liquid-ether-background";
import Link from "next/link";
import { ArrowRight, Star, Sparkles, Target, Rocket } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-violet-50/30 overflow-hidden">
      {/* Hero Section with Liquid Ether Background */}
      <LiquidEtherBackground>
        <HeroSection />
      </LiquidEtherBackground>

      {/* Features Section - Modern Card Design */}
      <section id="features" className="py-24 md:py-32 relative bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-3 mb-6 bg-gradient-to-r from-indigo-100 to-violet-100 border-2 border-indigo-200 rounded-full shadow-sm">
              <Sparkles className="w-5 h-5 text-indigo-600" />
              <span className="text-sm font-bold text-indigo-900 uppercase tracking-wide">Powerful Capabilities</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-900 via-violet-900 to-indigo-900 bg-clip-text text-transparent">
              Built for Modern Life
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Advanced tools that work seamlessly together to help you take complete control of your money
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <Card
                key={index}
                className="group p-10 border-2 border-indigo-100 hover:border-indigo-400 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-200/50 hover:-translate-y-3 bg-white/90 backdrop-blur-md"
              >
                <CardContent className="space-y-5 pt-4">
                  <div className="relative w-20 h-20 mb-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-3xl transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-xl shadow-indigo-400/40 group-hover:shadow-2xl group-hover:shadow-indigo-500/50" />
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-900 transition-colors">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">{feature.description}</p>
                  <div className="flex items-center text-indigo-600 font-bold pt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">
                    Explore <ArrowRight className="ml-2 w-5 h-5" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section - Timeline Design */}
      <section className="py-24 md:py-32 relative bg-gradient-to-br from-slate-50 via-white to-indigo-50/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-3 mb-6 bg-gradient-to-r from-violet-100 to-indigo-100 border-2 border-violet-300 rounded-full shadow-md">
              <Target className="w-5 h-5 text-violet-700" />
              <span className="text-sm font-bold text-violet-900 uppercase tracking-wide">Simple Process</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-indigo-900 via-violet-900 to-indigo-900 bg-clip-text text-transparent">
                Your Path to Financial Clarity
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Get up and running in minutes with our streamlined onboarding experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative max-w-7xl mx-auto">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute left-[16.66%] right-[16.66%] h-1 bg-gradient-to-r from-transparent via-indigo-300 to-transparent" style={{ top: '3.5rem' }} />

            {howItWorksData.map((step, index) => (
              <div key={index} className="relative group">
                {/* Icon Circle */}
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    {/* Animated glow ring */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-violet-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                    {/* Main circle */}
                    <div className="relative w-28 h-28 bg-gradient-to-br from-indigo-600 via-indigo-500 to-violet-600 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <div className="text-white">{step.icon}</div>
                    </div>
                    {/* Step number badge */}
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-white border-3 border-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-indigo-600 font-bold text-lg">{index + 1}</span>
                    </div>
                  </div>
                </div>

                {/* Card */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:border-indigo-300 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 min-h-[200px]">
                  <h3 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-indigo-900 to-violet-900 bg-clip-text text-transparent">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Modern Cards */}
      <section id="testimonials" className="py-24 md:py-32 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-3 mb-6 bg-gradient-to-r from-amber-100 to-yellow-100 border-2 border-amber-200 rounded-full shadow-sm">
              <Star className="w-5 h-5 text-amber-600 fill-amber-600" />
              <span className="text-sm font-bold text-amber-900 uppercase tracking-wide">Real Success Stories</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-900 via-violet-900 to-indigo-900 bg-clip-text text-transparent">
              Loved by Professionals
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Join thousands who have transformed their financial future with our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {testimonialsData.map((testimonial, index) => (
              <Card
                key={index}
                className="group p-10 bg-gradient-to-br from-white to-indigo-50/50 border-2 border-indigo-100 hover:border-violet-400 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-200/50 hover:-translate-y-3"
              >
                <CardContent className="pt-4">
                  <div className="flex items-center mb-8">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full blur-lg opacity-60 group-hover:opacity-80 transition-opacity" />
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={70}
                        height={70}
                        className="relative rounded-full border-4 border-white shadow-xl"
                      />
                    </div>
                    <div className="ml-5">
                      <div className="font-bold text-xl text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600 font-medium">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-800 leading-relaxed text-lg font-medium italic">&ldquo;{testimonial.quote}&rdquo;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Modern Gradient */}
      <section className="py-32 md:py-40 relative overflow-hidden bg-gradient-to-b from-white via-indigo-50/30 to-violet-50/20">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-200 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-violet-200 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 bg-gradient-to-r from-indigo-100 to-violet-100 border-2 border-indigo-300 rounded-full shadow-lg">
              <Rocket className="w-6 h-6 text-indigo-700" />
              <span className="text-sm font-bold text-indigo-900 uppercase tracking-wider">Start Your Financial Transformation</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-indigo-900 via-violet-900 to-indigo-900 bg-clip-text text-transparent">
                Take Control of Your
                <br />
                Financial Future Today
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-14 max-w-3xl mx-auto leading-relaxed font-medium">
              Join the growing community of smart savers who are building wealth 
              with confidence and clarity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="group px-14 py-8 text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started - It&apos;s Free
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
              <Link href="#features">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-14 py-8 text-xl font-bold border-3 border-indigo-600 text-indigo-700 hover:bg-indigo-50 hover:border-indigo-700 shadow-lg transition-all duration-300"
                >
                  Learn More
                </Button>
              </Link>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-gray-700">
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-full shadow-md border border-indigo-100">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-semibold">No credit card required</span>
              </div>
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-full shadow-md border border-indigo-100">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-semibold">Free forever plan</span>
              </div>
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-full shadow-md border border-indigo-100">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-semibold">Setup in under 2 minutes</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
