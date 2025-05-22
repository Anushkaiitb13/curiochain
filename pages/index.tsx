import React from 'react';
import Footer from '../components/layout/Footer';
import TopicCarousel from '../components/ui/TopicCarousel';
import { Search } from 'lucide-react';

const Index: React.FC = () => {
  // Mock data for trending topics
  const trendingTopics = [
    {
      id: '1',
      title: 'Quantum Physics',
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><circle cx="12" cy="12" r="10"/><path d="M12 2a4.5 4.5 0 0 0 0 9 4.5 4.5 0 0 0 0-9z" fill="currentColor" opacity=".3"/><circle cx="12" cy="12" r="4" opacity=".3"/></svg>,
      description: 'Explore the fascinating world of quantum mechanics and particle physics.',
      imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      id: '2',
      title: 'AI & Ethics',
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 2a4 4 0 0 0-4 4v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4z"/><circle cx="12" cy="14" r="4" fill="currentColor" opacity=".3"/></svg>,
      description: 'Dive into the ethical considerations around artificial intelligence.',
      imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      id: '3',
      title: 'Climate Science',
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 2v8"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m8 22 4-10 4 10"/><path opacity=".3" d="M16 18h-8"/></svg>,
      description: 'Understand the science behind climate change and its impacts.',
      imageUrl: 'https://images.unsplash.com/photo-1569511166263-99acce40b17e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      id: '4',
      title: 'Neuroscience',
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 4a4 4 0 0 1 0 8 4 4 0 0 1 0-8z" opacity=".3"/><path d="M12 12v8"/><path d="M12 4V2"/><path d="M12 22v-2"/><path d="M20 12h2"/><path d="M2 12h2"/></svg>,
      description: 'Explore how the brain works and the latest discoveries in neuroscience.',
      imageUrl: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      id: '5',
      title: 'Modern Philosophy',
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
      description: 'Dive into contemporary philosophical ideas and debates.',
      imageUrl: 'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      id: '6',
      title: 'Blockchain Technology',
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 7h.01"/><path d="M17 7h.01"/><path d="M7 17h.01"/><path d="M17 17h.01"/><path opacity=".3" d="m14 10-4 4"/></svg>,
      description: 'Understanding the technology behind cryptocurrencies and beyond.',
      imageUrl: 'https://images.unsplash.com/photo-1639322537231-2f206e06af84?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
  ];

  // Mock data for popular paths
  const popularPaths = [
    {
      id: '7',
      title: 'Machine Learning Fundamentals',
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>,
      description: 'Learn the core concepts of machine learning from basics to advanced.',
      imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      id: '8',
      title: 'World History',
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M21 12a9 9 0 1 1-9-9 9.75 9.75 0 0 1 6.91 3.18"/><path d="M3.34 7H20.5"/><path d="M3.34 17H20.5"/><path fill="currentColor" opacity=".3" d="M14 12a9 9 0 0 0 0-6 9 9 0 0 0 0 6z"/></svg>,
      description: 'Journey through the key events that shaped our modern world.',
      imageUrl: 'https://images.unsplash.com/photo-1461360228754-6e81c478b882?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      id: '9',
      title: 'Photography Basics',
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>,
      description: 'Master the fundamentals of photography and visual composition.',
      imageUrl: 'https://images.unsplash.com/photo-1491796014055-e6835cdcd4c6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      id: '10',
      title: 'Psychology of Decision Making',
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 13V2l8 4-8 4"/><path d="m8.93 15.93-5.5 5.5"/><path d="M2 22h16"/><path d="M20 14a2 2 0 0 1 0 4 2 2 0 1 1 0-4"/><path d="M14 6a2 2 0 1 0 0 4 2 2 0 1 0 0-4"/><path opacity=".3" d="M14 10v7"/></svg>,
      description: 'Understanding how our brain makes decisions and cognitive biases.',
      imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      id: '11',
      title: 'Music Theory',
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><circle cx="12" cy="12" r="10"/><path opacity=".3" fill="currentColor" d="m9 17 3-3 3 3M9 7l3 3 3-3"/></svg>,
      description: 'Learn the language of music from basic notation to composition.',
      imageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="my-8 pt-6">
          <div className="max-w-4xl mx-auto text-center mb-10 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-[#33C3F0] glow-effect animate-fade-up">
              Discover the Joy of Connected Learning
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-up animate-delay-1">
              CurioChain helps you explore knowledge in a new way, revealing unexpected connections between topics.
            </p>
            
            <div className="relative max-w-xl mx-auto mt-8 animate-fade-up animate-delay-2">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                type="text"
                placeholder="Explore any topic..."
                className="block w-full pl-12 pr-4 py-3 bg-secondary border border-border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-primary text-lg"
              />
              <button className="absolute inset-y-1.5 right-1.5 bg-accent text-white rounded-full px-6 py-1.5 hover:bg-accent/80 transition-colors">
                Explore
              </button>
            </div>
          </div>
        </section>
        
        <section>
          <TopicCarousel title="Trending Topics" topics={trendingTopics} />
          <TopicCarousel title="Popular Learning Paths" topics={popularPaths} />
        </section>
        
        <section className="mt-16 py-12 px-6 bg-secondary/30 rounded-2xl animate-fade-up animate-delay-3 space-border">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#D946EF] mb-4 glow-effect">How CurioChain Works</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our AI engine maps the connections between concepts, creating a personalized learning journey just for you.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="p-4">
                <div className="rounded-full bg-primary/20 w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#0EA5E9]">Choose a Topic</h3>
                <p className="text-muted-foreground">
                  Start with any topic that sparks your curiosity.
                </p>
              </div>
              
              <div className="p-4">
                <div className="rounded-full bg-primary/20 w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#0EA5E9]">Explore Connections</h3>
                <p className="text-muted-foreground">
                  Discover how concepts connect in unexpected ways.
                </p>
              </div>
              
              <div className="p-4">
                <div className="rounded-full bg-primary/20 w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#0EA5E9]">Deepen Knowledge</h3>
                <p className="text-muted-foreground">
                  Dive deeper into areas that interest you most.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
