
import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Search..." }) => {
  return (
    <div className="relative w-full search-ring rounded-full overflow-hidden">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-4 w-4 text-primary/80" />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className="block w-full pl-10 pr-4 py-2 bg-secondary border-0 focus:outline-none rounded-full text-sm text-foreground"
      />
    </div>
  );
};

export default SearchBar;
