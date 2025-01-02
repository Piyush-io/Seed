import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Search, Bell, User, Menu, X,
  ChevronDown, Zap, TrendingUp, Settings
} from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo - taking up 1/4 of space */}
        <div className="w-1/4">
          <Link to="/" className="flex items-center gap-2 text-xl font-semibold text-primary">
            Seed
          </Link>
        </div>

        {/* Navigation links - centered in middle 2/4 */}
        <div className="w-2/4 flex justify-center">
          <div className="flex items-center gap-6">
            <Link to="/sectors" className="text-base font-medium hover:text-primary transition-colors">
              Sectors
            </Link>
            <Link to="/investments" className="text-base font-medium hover:text-primary transition-colors">
              Investments
            </Link>
            <Link to="/insights" className="text-base font-medium hover:text-primary transition-colors">
              Insights
            </Link>
            <Link to="/about" className="text-base font-medium hover:text-primary transition-colors">
              About
            </Link>
          </div>
        </div>

        {/* Right section with search and icons - taking up 1/4 of space */}
        <div className="w-1/4 flex items-center justify-end gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search..."
              className="w-44 pl-9 pr-4 py-2 rounded-full bg-background border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
          <button className="relative">
            <Bell className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">
              3
            </span>
          </button>
          <Link to="/profile">
            <User className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>
    </nav>
  );
}