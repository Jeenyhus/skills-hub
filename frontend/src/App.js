import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navigation from './components/Navigation';
import { TraineeList } from './components/Trainees/TraineeList';
import { TraineeForm } from './components/Trainees/TraineeForm';
import { ScoreList } from './components/Scores/ScoreList';
import { ScoreForm } from './components/Scores/ScoreForm';
import Dashboard from './components/Dashboard';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <Routes>
          <Route path="/" element={<Dashboard />} />
            <Route path="/trainees" element={
              <div className="grid grid-cols-2 gap-8">
                <TraineeList />
                <TraineeForm />
              </div>
            } />
            <Route path="/scores" element={
              <div className="grid grid-cols-2 gap-8">
                <ScoreList />
                <ScoreForm />
              </div>
            } />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
