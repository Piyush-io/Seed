import React from 'react';
import { Activity, TrendingUp, Users, BarChart3, PieChart, ArrowUpRight, Shield, Globe } from 'lucide-react';
import GradientBackground from '../components/ui/GradientBackground';

export default function Investments() {
  const portfolioStats = [
    {
      icon: PieChart,
      label: 'Total Invested',
      value: '$12,500',
      change: '+12.5%',
      changeLabel: 'from last month'
    },
    {
      icon: Users,
      label: 'Co-Investors',
      value: '234',
      change: '+18',
      changeLabel: 'new this month'
    },
    {
      icon: Activity,
      label: 'Portfolio Health',
      value: '94%',
      change: '+2.3%',
      changeLabel: 'from previous'
    }
  ];

  const activeDeals = [
    {
      name: 'GreenTech Solutions',
      sector: 'Climate Tech',
      raised: '$1.8M',
      target: '$2.5M',
      progress: 72,
      daysLeft: 15
    },
    {
      name: 'AI Analytics Platform',
      sector: 'Enterprise Tech',
      raised: '$950K',
      target: '$1.5M',
      progress: 63,
      daysLeft: 21
    },
    {
      name: 'HealthTech Innovation',
      sector: 'Digital Health',
      raised: '$2.2M',
      target: '$3M',
      progress: 73,
      daysLeft: 18
    }
  ];

  return (
    <div className="relative min-h-screen">
      <GradientBackground />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h1 className="text-4xl font-bold mb-4">Investment Dashboard</h1>
              <p className="text-text-secondary">Track and manage your startup portfolio</p>
            </div>
            <button className="mt-4 md:mt-0 bg-primary/10 text-primary hover:bg-primary/20 px-4 py-2 rounded-lg flex items-center transition-colors">
              <Activity className="h-5 w-5 mr-2" />
              Portfolio Health: Excellent
            </button>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {portfolioStats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-border/5 hover:border-primary/20 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-text-secondary mb-1">{stat.label}</p>
                    <h3 className="text-3xl font-bold">{stat.value}</h3>
                  </div>
                  <div className="bg-primary/10 p-2 rounded-xl">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="flex items-center text-emerald-500">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  <span className="text-sm">{stat.change} {stat.changeLabel}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Portfolio Performance Chart */}
            <div className="lg:col-span-2 bg-background-card p-6 rounded-2xl border border-border">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Portfolio Performance</h2>
                <select className="bg-background-light border border-border rounded-lg px-3 py-1">
                  <option>Last 30 Days</option>
                  <option>Last 90 Days</option>
                  <option>Last Year</option>
                </select>
              </div>
              <div className="h-64 bg-background-light rounded-xl flex items-center justify-center">
                <span className="text-text-secondary">Chart Placeholder</span>
              </div>
            </div>

            {/* Active Investments */}
            <div className="bg-background-card p-6 rounded-2xl border border-border">
              <h2 className="text-xl font-bold mb-6">Active Investments</h2>
              <div className="space-y-4">
                {activeDeals.map((deal, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-xl hover:bg-background-light transition-colors">
                    <div>
                      <h3 className="font-medium">{deal.name}</h3>
                      <p className="text-sm text-text-secondary">{deal.sector}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Shield className="h-4 w-4 mr-1" />
                        <span className="text-sm">{deal.raised} raised</span>
                      </div>
                      <div className="flex items-center">
                        <Globe className="h-4 w-4 mr-1" />
                        <span className="text-sm">{deal.target} target</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}