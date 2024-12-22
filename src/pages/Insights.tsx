import React from 'react';
import { ArrowUpRight, TrendingUp, BookOpen, Users, Clock, ChevronRight } from 'lucide-react';
import GradientBackground from '../components/ui/GradientBackground';

export default function Insights() {
  const featuredInsight = {
    category: 'Featured Research',
    title: 'The Future of Startup Investing: 2024 Trends',
    description: 'An in-depth analysis of emerging investment patterns, technological breakthroughs, and market opportunities that will shape the next decade of innovation.',
    readTime: '15 min read',
    author: 'Sarah Chen',
    role: 'Head of Research'
  };

  const insights = [
    {
      category: 'Market Analysis',
      title: 'AI Infrastructure: The Next Big Investment Wave',
      description: 'Deep dive into the infrastructure powering the AI revolution',
      readTime: '8 min read',
      trend: '+127% YoY Growth'
    },
    {
      category: 'Sector Report',
      title: 'Climate Tech Investment Landscape 2024',
      description: 'Mapping the opportunities in sustainable technology',
      readTime: '12 min read',
      trend: '$28.2B Market Size'
    },
    {
      category: 'Founder Stories',
      title: 'From Seed to Series B: A Founders Journey',
      description: 'Lessons from successful founders in our portfolio',
      readTime: '10 min read',
      trend: '3.4x Return Multiple'
    }
  ];

  const trends = [
    { label: 'AI & ML', growth: '+127%' },
    { label: 'Climate Tech', growth: '+95%' },
    { label: 'Digital Health', growth: '+83%' },
    { label: 'Fintech', growth: '+72%' }
  ];

  return (
    <div className="relative min-h-screen">
      <GradientBackground />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* Featured Article */}
          <div className="mb-24">
            <div className="inline-flex items-center bg-primary/5 rounded-full px-4 py-2 mb-8">
              <BookOpen className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-medium">Latest Research</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <div className="mb-8">
                  <span className="text-primary font-medium">{featuredInsight.category}</span>
                  <h1 className="text-5xl font-bold text-background-dark mt-4 mb-6">
                    {featuredInsight.title}
                  </h1>
                  <p className="text-xl text-text-secondary mb-6">
                    {featuredInsight.description}
                  </p>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-text-secondary mr-2" />
                      <span className="text-text-secondary">{featuredInsight.readTime}</span>
                    </div>
                    <div>
                      <span className="font-medium">{featuredInsight.author}</span>
                      <span className="text-text-secondary ml-2">· {featuredInsight.role}</span>
                    </div>
                  </div>
                </div>
                <button className="inline-flex items-center text-primary font-medium hover:text-primary-dark">
                  Read Full Report
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </button>
              </div>

              <div className="bg-white rounded-2xl border border-border/5 p-8">
                <h3 className="font-bold mb-6">Trending Sectors</h3>
                <div className="space-y-6">
                  {trends.map((trend, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-text-secondary">{trend.label}</span>
                      <span className="font-medium text-primary">{trend.growth}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Latest Insights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl border border-border/5 hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-primary font-medium">{insight.category}</span>
                  <span className="text-sm text-text-secondary">{insight.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {insight.title}
                </h3>
                <p className="text-text-secondary mb-6">{insight.description}</p>
                <div className="flex items-center justify-between pt-6 border-t border-border/5">
                  <span className="text-sm font-medium text-primary">{insight.trend}</span>
                  <ChevronRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}