import React from 'react';
import { Globe2, Users, TrendingUp, Shield } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mb-20">
          <h1 className="text-6xl font-bold text-background-dark mb-8">
            Building the
            <br />
            <span className="text-primary">Future of Investing</span>
          </h1>
          <p className="text-xl text-text-secondary">
            We're democratizing access to startup investments, enabling everyone to
            back the next generation of world-changing companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-32">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-text-secondary">
              We believe great ideas can come from anywhere. Our platform connects exceptional
              founders with the capital and resources they need to build transformative companies.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg text-text-secondary">
              A world where anyone can invest in and benefit from the growth of innovative
              startups, while helping founders build companies that shape our future.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {[
            {
              icon: Globe2,
              stat: '45+',
              label: 'Countries',
              description: 'Global presence'
            },
            {
              icon: Users,
              stat: '10,000+',
              label: 'Investors',
              description: 'Active community'
            },
            {
              icon: TrendingUp,
              stat: '$350M+',
              label: 'Invested',
              description: 'Total portfolio value'
            }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <item.icon className="h-16 w-16 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-2">{item.stat}</h3>
              <p className="text-lg text-text-secondary">{item.label}</p>
              <p className="text-lg text-text-secondary">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}