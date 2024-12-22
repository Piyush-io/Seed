import React from 'react';
import { ArrowRight, Shield, Users, TrendingUp, Star, Globe, Award, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 pt-32 pb-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-primary/5 rounded-full px-4 py-2 mb-8">
              <Star className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-medium">Trusted by leading VCs and angel investors</span>
            </div>

            <h1 className="text-7xl font-bold tracking-tight text-background-dark mb-8">
              Where Great Companies
              <br />
              <span className="text-primary">Begin Their Journey</span>
            </h1>

            <p className="text-xl text-text-secondary mb-12 max-w-2xl">
              Join the next generation of transformative startups. Our platform connects exceptional
              founders with smart capital and the resources they need to succeed.
            </p>

            <div className="flex items-center space-x-6 mb-16">
              <Link to="/apply">
                <Button size="lg" className="bg-background-dark hover:bg-black text-white">
                  Start Investing
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/founders">
                <Button variant="outline" size="lg">
                  For Founders
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 text-sm text-text-secondary">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>SEC Regulated</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>10,000+ Investors</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4" />
                <span>$50M+ Invested</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Section */}
        <div className="border-y border-border/10 bg-background-light">
          <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-bold mb-6">Why Choose Inventure</h2>
                <p className="text-text-secondary mb-8">
                  We're building the future of startup investing through technology,
                  transparency, and trust.
                </p>
                <Link to="/about" className="text-primary font-medium hover:text-primary-dark inline-flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Globe,
                    title: 'Global Network',
                    description: 'Access deals from top ecosystems worldwide'
                  },
                  {
                    icon: Shield,
                    title: 'Due Diligence',
                    description: 'Rigorous vetting of all investment opportunities'
                  },
                  {
                    icon: Award,
                    title: 'Expert Support',
                    description: 'Guidance from industry veterans and analysts'
                  },
                  {
                    icon: Zap,
                    title: 'Smart Technology',
                    description: 'Advanced platform for portfolio management'
                  }
                ].map((feature, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl border border-border/5">
                    <div className="bg-primary/5 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-text-secondary">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section with enhanced design */}
        <div className="bg-background-dark text-white">
          <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <div>
                <div className="text-5xl font-bold mb-4">$50M+</div>
                <p className="text-white/70 text-lg">Total investments facilitated through our platform</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-4">89%</div>
                <p className="text-white/70 text-lg">Portfolio companies still active after 3 years</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-4">45+</div>
                <p className="text-white/70 text-lg">Countries represented in our investor network</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}