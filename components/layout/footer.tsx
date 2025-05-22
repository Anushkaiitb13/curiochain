import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-border py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link 
              to="/" 
              className="flex items-center gap-2 text-lg font-nunito font-bold text-curio-300"
            >
              <div className="bg-gradient-to-br from-curio-500 to-curio-700 text-white w-6 h-6 rounded flex items-center justify-center">
                <span className="text-xs font-bold">C</span>
              </div>
              <span>CurioChain</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              AI-powered knowledge exploration for curious minds.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:col-span-2">
            <div>
              <h3 className="font-medium text-sm mb-3 text-gray-300">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/" className="hover:text-curio-300">Home</Link></li>
                <li><Link to="/paths" className="hover:text-curio-300">Learning Paths</Link></li>
                <li><Link to="/" className="hover:text-curio-300">About</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-sm mb-3 text-gray-300">Contact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/" className="hover:text-curio-300">Help Center</Link></li>
                <li><Link to="/" className="hover:text-curio-300">Feedback</Link></li>
                <li><Link to="/" className="hover:text-curio-300">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CurioChain. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-curio-300">
              Twitter
            </a>
            <a href="#" className="text-muted-foreground hover:text-curio-300">
              GitHub
            </a>
            <a href="#" className="text-muted-foreground hover:text-curio-300">
              Discord
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
