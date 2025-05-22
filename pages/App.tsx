import { Routes, Route } from 'react-router-dom';
import Index from './pages/index';
import LearningPath from './pages/explore';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/path/:id" element={<LearningPath />} />
    </Routes>
  );
}

export default App;
