import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../ui/SearchBar';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border py-3 px-4 sm:px-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-xl sm:text-2xl font-nunito font-bold text-primary hover:text-accent transition-colors"
        >
          <div className="bg-gradient-to-br from-primary to-accent text-white w-8 h-8 rounded-lg flex items-center justify-center">
            <span className="text-sm font-bold">C</span>
          </div>
          <span className="space-glow">CurioChain</span>
        </Link>

        <div className="hidden md:block w-full max-w-md mx-4">
          <SearchBar placeholder="Explore any topic..." />
        </div>
      </div>
      
      <div className="md:hidden mt-3 px-4">
        <SearchBar placeholder="Explore any topic..." />
      </div>
    </header>
  );
};

export default Header;
