
import React from 'react';

interface DetailCardProps {
  title: string;
  content: string | React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

const DetailCard: React.FC<DetailCardProps> = ({ 
  title, 
  content, 
  icon, 
  className = "" 
}) => {
  return (
    <div className={`p-5 rounded-xl border border-primary/30 bg-card shadow-sm glow-effect animate-fade-in space-gradient ${className}`}>
      {icon && (
        <div className="mb-3 text-primary">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-accent mb-2">{title}</h3>
      <div className="text-muted-foreground">
        {content}
      </div>
    </div>
  );
};

export default DetailCard;