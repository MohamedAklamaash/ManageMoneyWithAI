"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Shield, Zap, TrendingUp } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative pt-40 md:pt-52 pb-32 md:pb-40 px-4 overflow-hidden min-h-screen flex items-center">
      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-500/30 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-violet-500/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto text-center relative z-10">
        {/* Main heading with staggered animation */}
        <h1 
          className={`text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="block bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
            Financial Freedom
          </span>
          <span className="block mt-2 bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 bg-clip-text text-transparent leading-tight">
            Starts Here
          </span>
        </h1>

        <p 
          className={`text-xl md:text-2xl text-gray-700 mb-16 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Experience the future of personal finance with AI-driven insights that help you 
          <span className="font-semibold text-indigo-700"> save more</span>, 
          <span className="font-semibold text-violet-700"> spend smarter</span>, and 
          <span className="font-semibold text-indigo-700"> achieve your goals faster</span>.
        </p>

        {/* Feature Pills */}
        <div 
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm border-2 border-indigo-200 rounded-full shadow-lg">
            <Shield className="w-5 h-5 text-indigo-600" />
            <span className="font-semibold text-gray-900">Bank-Level Security</span>
          </div>
          <div className="flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm border-2 border-violet-200 rounded-full shadow-lg">
            <Zap className="w-5 h-5 text-violet-600" />
            <span className="font-semibold text-gray-900">Real-Time Insights</span>
          </div>
          <div className="flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm border-2 border-indigo-200 rounded-full shadow-lg">
            <TrendingUp className="w-5 h-5 text-indigo-600" />
            <span className="font-semibold text-gray-900">Smart Analytics</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div 
          className={`flex flex-col sm:flex-row justify-center items-center gap-6 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Link href="/dashboard">
            <Button 
              size="lg" 
              className="group px-12 py-7 text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Button>
          </Link>
          <Link href="#features">
            <Button 
              size="lg" 
              variant="outline"
              className="px-12 py-7 text-xl font-bold border-3 border-indigo-300 hover:bg-indigo-50 hover:border-indigo-400 text-gray-900 shadow-lg"
            >
              See How It Works
            </Button>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div 
          className={`mt-16 flex flex-col items-center gap-4 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm text-gray-600 font-medium">
            Trusted by professionals worldwide • No credit card required
          </p>
          <div className="flex items-center gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">10+</div>
              <div className="text-sm text-gray-600">Active Users</div>
            </div>
            <div className="w-px h-12 bg-gray-300" />
            <div className="text-center">
              <div className="text-2xl font-bold text-violet-600">$10K+</div>
              <div className="text-sm text-gray-600">Tracked Monthly</div>
            </div>
            <div className="w-px h-12 bg-gray-300" />
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">4.9/5</div>
              <div className="text-sm text-gray-600">User Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
