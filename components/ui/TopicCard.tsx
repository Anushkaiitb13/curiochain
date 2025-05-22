
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface TopicCardProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  description?: string;
  imageUrl?: string;
}

const TopicCard: React.FC<TopicCardProps> = ({ id, title, icon, description, imageUrl }) => {
  return (
    <Link 
      to={`/path/${id}`} 
      className="topic-card flex flex-col h-full animate-fade-in"
    >
      <div className="relative h-32 overflow-hidden rounded-t-xl">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover" 
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-curio-900 to-secondary flex items-center justify-center">
            <div className="text-curio-500 opacity-30 transform scale-150">
              {icon}
            </div>
          </div>
        )}
      </div>
      
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-lg mb-1 text-curio-200">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        )}
        
        <div className="mt-auto pt-3 flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Explore path</span>
          <ArrowRight className="h-4 w-4 text-curio-400 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export default TopicCard;
