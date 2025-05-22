import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import DetailCard from '../components/ui/DetailCard';

// Mock data
const conceptDetails = {
  'quantum-mechanics': {
    title: 'Quantum Mechanics',
    overview: 'Quantum mechanics is a fundamental theory in physics that describes nature at the scale of atoms and subatomic particles. It is the foundation of all quantum physics including quantum chemistry, quantum field theory, quantum technology, and quantum information science.',
    connections: [
      { 
        title: 'Music Theory', 
        description: 'Wave functions in quantum mechanics show similarities to harmonic oscillations in music theory.'
      },
      { 
        title: 'Philosophy of Mind', 
        description: 'Quantum mechanics has been proposed as a possible explanation for consciousness.'
      },
      { 
        title: 'Cryptography', 
        description: "Quantum entanglement enables quantum encryption protocols that are theoretically unbreakable."
      },
    ],
    applications: [
      { 
        title: 'Quantum Computing', 
        description: 'Using quantum mechanical phenomena to perform operations on data.'
      },
      { 
        title: 'MRI Technology', 
        description: 'Medical imaging based on nuclear magnetic resonance, a quantum mechanical property of atoms.'
      },
      { 
        title: 'Transistors', 
        description: 'The foundation of all modern electronics relies on quantum tunneling.'
      },
    ]
  },
  'algorithmic-bias': {
    title: 'Algorithmic Bias',
    overview: 'Algorithmic bias is a systematic and repeatable error in a computer system that creates unfair outcomes, such as privileging one arbitrary group of users over others. It can arise from many factors including but not limited to the design of the algorithm or biased training data.',
    connections: [
      { 
        title: 'Sociology', 
        description: 'Social stratification patterns often become embedded in AI systems, reinforcing existing inequalities.'
      },
      { 
        title: 'Cognitive Psychology', 
        description: 'Human cognitive biases influence how we design algorithms and interpret their outputs.'
      },
      { 
        title: 'Legal Theory', 
        description: 'Questions of liability and responsibility when algorithms make biased decisions.'
      },
    ],
    applications: [
      { 
        title: 'Hiring Tools', 
        description: 'Analyzing how resume screening algorithms can perpetuate workplace discrimination.'
      },
      { 
        title: 'Facial Recognition', 
        description: 'Addressing higher error rates for certain demographic groups in facial analysis systems.'
      },
      { 
        title: 'Loan Approvals', 
        description: "Ensuring lending algorithms don't unfairly deny credit to certain populations."
      },
    ]
  },
  // More concepts can be added here
};

const DetailView: React.FC = () => {
  const { conceptId } = useParams<{ conceptId: string }>();
  const [activeTab, setActiveTab] = useState<'overview' | 'connections' | 'applications'>('overview');
  
  // Default to the first concept if id doesn't match
  const conceptData = conceptDetails[conceptId as keyof typeof conceptDetails] || conceptDetails['quantum-mechanics'];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2 space-glow">{conceptData.title}</h1>
          <p className="text-lg text-muted-foreground">
            An in-depth exploration of this concept and its connections.
          </p>
        </div>
        
        <div className="mb-8 border-b border-border">
          <nav className="flex space-x-8">
            {(['overview', 'connections', 'applications'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-accent hover:border-accent/70'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>
        
        <div className="animate-fade-in">
          {activeTab === 'overview' && (
            <div className="prose max-w-none">
              <p className="text-lg mb-6">{conceptData.overview}</p>
              
              <DetailCard 
                title="Key Points"
                content={
                  <ul className="list-disc pl-5 space-y-2">
                    <li>First important concept related to {conceptData.title}.</li>
                    <li>Second important concept related to {conceptData.title}.</li>
                    <li>Third important concept related to {conceptData.title}.</li>
                  </ul>
                }
                className="mb-6"
              />
              
              <h2 className="text-xl font-semibold mb-4 text-primary">Historical Development</h2>
              <p className="mb-4">
                The development of {conceptData.title.toLowerCase()} has been a fascinating journey through scientific discovery and human understanding.
              </p>
              
              <div className="bg-secondary p-4 rounded-lg mb-6 border border-primary/30">
                <h3 className="font-medium mb-2 text-accent">Did You Know?</h3>
                <p className="text-sm">
                  An interesting fact about {conceptData.title.toLowerCase()} that most people don't know.
                </p>
              </div>
              
              <h2 className="text-xl font-semibold mb-4 text-primary">Current Understanding</h2>
              <p>
                Modern perspectives on {conceptData.title.toLowerCase()} continue to evolve as research advances.
              </p>
            </div>
          )}
          
          {activeTab === 'connections' && (
            <div>
              <p className="text-lg mb-6">
                Discover surprising connections between {conceptData.title.toLowerCase()} and other fields of knowledge.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {conceptData.connections.map((connection, index) => (
                  <DetailCard
                    key={index}
                    title={connection.title}
                    content={connection.description}
                    icon={
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="18" cy="18" r="3" />
                        <circle cx="6" cy="6" r="3" />
                        <path d="M13 6h3a2 2 0 0 1 2 2v7" />
                        <path d="M11 18H8a2 2 0 0 1-2-2V9" />
                      </svg>
                    }
                  />
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-secondary/50 rounded-xl border border-accent/20">
                <h2 className="text-xl font-semibold mb-4 text-primary">Knowledge Map</h2>
                <p className="mb-4">
                  This visualization shows how {conceptData.title.toLowerCase()} connects to other fields through shared concepts and principles.
                </p>
                <div className="h-64 bg-card rounded-lg border border-border flex items-center justify-center">
                  <p className="text-muted-foreground">Interactive knowledge map visualization (placeholder)</p>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'applications' && (
            <div>
              <p className="text-lg mb-6">
                Explore how {conceptData.title.toLowerCase()} is applied in the real world and its practical implications.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {conceptData.applications.map((application, index) => (
                  <DetailCard
                    key={index}
                    title={application.title}
                    content={application.description}
                    icon={
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                        <polyline points="3.29 7 12 12 20.71 7" />
                        <line x1="12" y1="22" x2="12" y2="12" />
                      </svg>
                    }
                  />
                ))}
              </div>
              
              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4 text-primary">Future Directions</h2>
                <p className="mb-4">
                  The future of {conceptData.title.toLowerCase()} holds exciting possibilities for innovation and discovery.
                </p>
                
                <div className="p-6 border border-primary/20 rounded-xl bg-gradient-to-br from-secondary to-background">
                  <h3 className="font-semibold mb-3 text-accent">Emerging Research Areas</h3>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>First emerging research direction.</li>
                    <li>Second emerging research direction.</li>
                    <li>Third emerging research direction.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DetailView;
