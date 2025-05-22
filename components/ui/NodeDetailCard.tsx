
import React from 'react';

interface NodeDetailCardProps {
  title: string;
  description: string;
  onClose: () => void;
}

const NodeDetailCard: React.FC<NodeDetailCardProps> = ({ 
  title, 
  description, 
  onClose 
}) => {
  return (
    <div className="node-card p-4 animate-scale-in">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-curio-200">{title}</h3>
        <button 
          onClick={onClose}
          className="text-muted-foreground hover:text-curio-300 text-sm"
        >
          Close
        </button>
      </div>
      <p className="text-sm text-muted-foreground mb-3">{description}</p>
      <div className="flex justify-end">
        <button className="text-sm text-curio-400 hover:text-curio-300 font-medium">
          Learn more →
        </button>
      </div>
    </div>
  );
};

export default NodeDetailCard;
