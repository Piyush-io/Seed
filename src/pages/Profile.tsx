import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/Button';
import {
  User, Mail, Calendar, Shield,
  Wallet, TrendingUp, PieChart,
  Settings, Bell, Lock, Edit3,
  ChevronRight, ArrowUpRight,
  CreditCard, Key, Eye, Globe,
  BellRing, Zap
} from 'lucide-react';

// Tab Components
const OverviewTab = ({ portfolioStats }: { portfolioStats: any }) => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    {/* Left Column - Portfolio Overview */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="lg:col-span-2 space-y-8"
    >
      {/* Portfolio Stats */}
      <div className="bg-background-light/50 backdrop-blur-sm border border-border rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-6 flex items-center justify-between">
          Portfolio Overview
          <Button variant="secondary" className="text-sm">
            View Details
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-2">
            <div className="text-text-secondary text-sm">Total Invested</div>
            <div className="text-2xl font-bold text-text-primary">{portfolioStats.totalInvested}</div>
          </div>
          <div className="space-y-2">
            <div className="text-text-secondary text-sm">Total Returns</div>
            <div className="text-2xl font-bold text-emerald-500">{portfolioStats.totalReturns}</div>
          </div>
          <div className="space-y-2">
            <div className="text-text-secondary text-sm">Active Investments</div>
            <div className="text-2xl font-bold text-text-primary">{portfolioStats.activeInvestments}</div>
          </div>
          <div className="space-y-2">
            <div className="text-text-secondary text-sm">Sectors</div>
            <div className="text-2xl font-bold text-text-primary">{portfolioStats.sectors.length}</div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-background-light/50 backdrop-blur-sm border border-border rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 rounded-xl bg-background-light hover:bg-primary/5 transition-colors cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">New Investment Made</div>
                  <div className="text-sm text-text-secondary">AI & ML Sector • $5,000</div>
                </div>
              </div>
              <div className="text-sm text-text-secondary">2h ago</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>

    {/* Right Column - Quick Actions & Info */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="space-y-8"
    >
      {/* Account Info */}
      <div className="bg-background-light/50 backdrop-blur-sm border border-border rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-6">Account Info</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 text-text-secondary">
            <User className="h-5 w-5" />
            <span>Account Type: Premium</span>
          </div>
          <div className="flex items-center space-x-4 text-text-secondary">
            <Calendar className="h-5 w-5" />
            <span>Member since Jan 2024</span>
          </div>
          <div className="flex items-center space-x-4 text-text-secondary">
            <Shield className="h-5 w-5" />
            <span>2FA enabled</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-background-light/50 backdrop-blur-sm border border-border rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-6">Quick Actions</h2>
        <div className="space-y-3">
          <Button variant="outline" className="w-full justify-between">
            <span className="flex items-center">
              <Wallet className="h-4 w-4 mr-2" />
              Add Funds
            </span>
            <ArrowUpRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="w-full justify-between">
            <span className="flex items-center">
              <Bell className="h-4 w-4 mr-2" />
              Notification Settings
            </span>
            <ArrowUpRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="w-full justify-between">
            <span className="flex items-center">
              <Lock className="h-4 w-4 mr-2" />
              Security Settings
            </span>
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  </div>
);

const InvestmentsTab = () => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
    className="space-y-8"
  >
    {/* Active Investments */}
    <div className="bg-background-light/50 backdrop-blur-sm border border-border rounded-2xl p-6">
      <h2 className="text-xl font-bold mb-6">Active Investments</h2>
      <div className="space-y-4">
        {[
          { name: 'AI Startup X', amount: '$10,000', return: '+15.3%', sector: 'AI & ML' },
          { name: 'FinTech Solution Y', amount: '$8,000', return: '+22.1%', sector: 'FinTech' },
          { name: 'HealthTech Platform Z', amount: '$12,000', return: '+18.7%', sector: 'HealthTech' },
        ].map((investment, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 rounded-xl bg-background-light hover:bg-primary/5 transition-colors cursor-pointer"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="font-medium">{investment.name}</div>
                <div className="text-sm text-text-secondary">{investment.sector}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium">{investment.amount}</div>
              <div className="text-sm text-emerald-500">{investment.return}</div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Investment Opportunities */}
    <div className="bg-background-light/50 backdrop-blur-sm border border-border rounded-2xl p-6">
      <h2 className="text-xl font-bold mb-6">Recommended Opportunities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { name: 'Green Energy Project', target: '$2M', progress: '75%', sector: 'CleanTech' },
          { name: 'Web3 Platform', target: '$1.5M', progress: '60%', sector: 'Blockchain' },
        ].map((opportunity, index) => (
          <div
            key={index}
            className="p-4 rounded-xl bg-background-light hover:bg-primary/5 transition-colors cursor-pointer"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <div className="font-medium">{opportunity.name}</div>
                <div className="text-sm text-text-secondary">{opportunity.sector}</div>
              </div>
              <Button variant="secondary" size="sm">
                View Details
              </Button>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-text-secondary">Target: {opportunity.target}</span>
                <span className="text-primary">{opportunity.progress}</span>
              </div>
              <div className="w-full bg-background-light rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: opportunity.progress }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
          </motion.div>
);

const SecurityTab = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="space-y-8"
  >
    {/* Security Overview */}
    <div className="bg-background-light/50 backdrop-blur-sm border border-border rounded-2xl p-6">
      <h2 className="text-xl font-bold mb-6">Security Overview</h2>
      <div className="space-y-4">
        {[
          { icon: Key, title: 'Two-Factor Authentication', status: 'Enabled', color: 'text-emerald-500' },
          { icon: Shield, title: 'Password Strength', status: 'Strong', color: 'text-emerald-500' },
          { icon: CreditCard, title: 'Payment Security', status: 'Verified', color: 'text-emerald-500' },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 rounded-xl bg-background-light"
          >
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-medium">{item.title}</div>
                <div className={`text-sm ${item.color}`}>{item.status}</div>
              </div>
            </div>
            <Button variant="secondary" size="sm">
              Manage
            </Button>
          </div>
        ))}
      </div>
        </div>

    {/* Recent Activity */}
    <div className="bg-background-light/50 backdrop-blur-sm border border-border rounded-2xl p-6">
      <h2 className="text-xl font-bold mb-6">Recent Security Activity</h2>
      <div className="space-y-4">
        {[
          { event: 'Password Changed', date: '2 days ago', location: 'San Francisco, CA' },
          { event: 'New Login', date: '5 days ago', location: 'New York, NY' },
          { event: '2FA Enabled', date: '1 week ago', location: 'San Francisco, CA' },
        ].map((activity, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 rounded-xl bg-background-light"
          >
            <div>
              <div className="font-medium">{activity.event}</div>
              <div className="text-sm text-text-secondary">
                {activity.location} • {activity.date}
              </div>
            </div>
            <Button variant="secondary" size="sm">
              Details
            </Button>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default function Profile() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data - replace with real data from your backend
  const portfolioStats = {
    totalInvested: '$50,000',
    totalReturns: '+25.4%',
    activeInvestments: 12,
    sectors: ['AI & ML', 'FinTech', 'HealthTech']
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab portfolioStats={portfolioStats} />;
      case 'investments':
        return <InvestmentsTab />;
      case 'security':
        return <SecurityTab />;
      default:
        return <OverviewTab portfolioStats={portfolioStats} />;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden pt-20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8"
        >
          <div className="flex items-center space-x-6">
            <div className="relative group">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-emerald-500/20 flex items-center justify-center">
                <span className="text-3xl font-bold text-primary">
                  {user?.firstName?.[0]?.toUpperCase()}
                  {user?.lastName?.[0]?.toUpperCase()}
              </span>
              </div>
              <button className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <Edit3 className="h-4 w-4" />
              </button>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-text-primary mb-1">
                {user?.firstName} {user?.lastName}
              </h1>
              <p className="text-text-secondary flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                {user?.email}
              </p>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <Button variant="outline" className="mr-3" onClick={() => window.location.href = '/settings'}>
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Button>
              <Edit3 className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex space-x-1 mb-8 bg-background-light/50 backdrop-blur-sm p-1 rounded-xl border border-border"
        >
          {['overview', 'investments', 'security'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                activeTab === tab
                  ? 'bg-primary text-white'
                  : 'text-text-secondary hover:text-text-primary hover:bg-primary/5'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        {renderTabContent()}
      </div>
    </div>
  );
}