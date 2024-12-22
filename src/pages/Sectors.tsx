import React from 'react';
import { Brain, Heart, Coins, Cpu, Leaf, Globe, ArrowRight, TrendingUp, Users, BarChart } from 'lucide-react';
import GradientBackground from '../components/ui/GradientBackground';

export default function Sectors() {
  const sectors = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Next-generation AI solutions transforming industries',
      stats: { growth: '+127%', deals: '234', avgDeal: '$2.8M' },
    },
    {
      icon: Heart,
      title: 'Digital Health',
      description: 'Revolutionary healthcare technology and biotech innovations',
      stats: { growth: '+85%', deals: '156', avgDeal: '$3.2M' },
    },
    {
      icon: Coins,
      title: 'FinTech',
      description: 'Innovative financial technology solutions',
      stats: { growth: '+92%', deals: '189', avgDeal: '$2.5M' },
    },
    {
      icon: Cpu,
      title: 'Enterprise Tech',
      description: 'B2B solutions powering business transformation',
      stats: { growth: '+73%', deals: '167', avgDeal: '$3.1M' },
    },
    {
      icon: Leaf,
      title: 'Climate Tech',
      description: 'Sustainable solutions for a better future',
      stats: { growth: '+95%', deals: '145', avgDeal: '$3.5M' },
    },
    {
      icon: Globe,
      title: 'Web3',
      description: 'Decentralized technologies and blockchain innovations',
      stats: { growth: '+112%', deals: '178', avgDeal: '$2.3M' },
    },
  ];

  return (
    <div className="relative min-h-screen">
      <GradientBackground />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl mb-20">
            <div className="inline-flex items-center bg-primary/5 rounded-full px-4 py-2 mb-8">
              <TrendingUp className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-medium">Industry-Leading Returns</span>
            </div>

            <h1 className="text-6xl font-bold text-background-dark mb-8">
              Sectors Shaping
              <br />
              <span className="text-primary">Tomorrow</span>
            </h1>
            <p className="text-xl text-text-secondary">
              We invest in breakthrough technologies across high-growth sectors,
              backing founders who are building the future.
            </p>
          </div>

          {/* Market Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white p-8 rounded-2xl border border-border/5 hover:border-primary/20 transition-all duration-300">
              <BarChart className="h-8 w-8 text-primary mb-4" />
              <div className="text-4xl font-bold mb-2">$8.7T</div>
              <p className="text-text-secondary">Total addressable market across sectors</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-border/5 hover:border-primary/20 transition-all duration-300">
              <Users className="h-8 w-8 text-primary mb-4" />
              <div className="text-4xl font-bold mb-2">27%</div>
              <p className="text-text-secondary">Average annual sector growth</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-border/5 hover:border-primary/20 transition-all duration-300">
              <TrendingUp className="h-8 w-8 text-primary mb-4" />
              <div className="text-4xl font-bold mb-2">3.2x</div>
              <p className="text-text-secondary">Average return multiple</p>
            </div>
          </div>

          {/* Sectors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-2xl border border-border/5 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-6">
                  <sector.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{sector.title}</h3>
                <p className="text-text-secondary mb-8">{sector.description}</p>

                <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border/5">
                  <div>
                    <div className="text-lg font-bold text-background-dark">{sector.stats.growth}</div>
                    <div className="text-sm text-text-secondary">Growth</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-background-dark">{sector.stats.deals}</div>
                    <div className="text-sm text-text-secondary">Deals</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-background-dark">{sector.stats.avgDeal}</div>
                    <div className="text-sm text-text-secondary">Avg Deal</div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}