
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TopicCard from './TopicCard';

interface Topic {
  id: string;
  title: string;
  icon: React.ReactNode;
  description?: string;
  imageUrl?: string;
}

interface TopicCarouselProps {
  title: string;
  topics: Topic[];
}

const TopicCarousel: React.FC<TopicCarouselProps> = ({ title, topics }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="my-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-[#8B5CF6] glow-effect">{title}</h2>
        <div className="flex space-x-2">
          <button 
            onClick={() => scroll('left')}
            className="p-1 rounded-full hover:bg-secondary transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5 text-primary" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-1 rounded-full hover:bg-secondary transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>
      
      <div 
        ref={carouselRef}
        className="flex space-x-4 overflow-x-auto pb-4 scroll-hidden snap-x"
      >
        {topics.map((topic, index) => (
          <div 
            key={topic.id} 
            className="w-72 flex-shrink-0 snap-start"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <TopicCard {...topic} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicCarousel;
