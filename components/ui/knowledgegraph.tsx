import React, { useEffect, useRef, useState } from 'react';

interface Node {
  id: string;
  label: string;
  level: number;
  description: string;
}

interface Link {
  source: string;
  target: string;
}

interface KnowledgeGraphProps {
  nodes: Node[];
  links: Link[];
  onNodeClick: (node: Node) => void;
}

const KnowledgeGraph: React.FC<KnowledgeGraphProps> = ({ 
  nodes, 
  links,
  onNodeClick 
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (svgRef.current && svgRef.current.parentElement) {
        const { width, height } = svgRef.current.parentElement.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // In a real implementation, this would use D3.js to create an actual force-directed graph
  // For now, we'll create a simple static visualization
  
  const handleNodeClick = (node: Node) => {
    setSelectedNode(node.id === selectedNode ? null : node.id);
    onNodeClick(node);
  };

  // Calculate positions in a circular layout for demonstration
  const nodePositions = nodes.map((node, index) => {
    const angle = (index / nodes.length) * 2 * Math.PI;
    const radius = 100 + node.level * 80;
    const x = dimensions.width / 2 + radius * Math.cos(angle);
    const y = dimensions.height / 2 + radius * Math.sin(angle);
    return { ...node, x, y };
  });

  return (
    <div className="w-full h-full min-h-[500px]">
      <svg 
        ref={svgRef} 
        className="w-full h-full bg-curio-50/30"
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
      >
        {/* Draw the links */}
        {links.map((link, index) => {
          const source = nodePositions.find(n => n.id === link.source);
          const target = nodePositions.find(n => n.id === link.target);
          
          if (!source || !target) return null;
          
          return (
            <line
              key={`link-${index}`}
              x1={source.x}
              y1={source.y}
              x2={target.x}
              y2={target.y}
              className="knowledge-link"
            />
          );
        })}
        
        {/* Draw the nodes */}
        {nodePositions.map((node) => {
          const isSelected = node.id === selectedNode;
          const nodeSize = 10 + node.level * 5;
          
          return (
            <g 
              key={node.id} 
              className="knowledge-node"
              onClick={() => handleNodeClick(node)}
              style={{ animationDelay: `${parseInt(node.id) * 0.1}s` }}
            >
              <circle
                cx={node.x}
                cy={node.y}
                r={nodeSize}
                className={`${isSelected ? 'fill-curio-600' : 'fill-curio-400'} transition-all duration-300`}
              />
              <text
                x={node.x}
                y={node.y + nodeSize + 15}
                textAnchor="middle"
                className="text-xs fill-curio-900 pointer-events-none"
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default KnowledgeGraph;
