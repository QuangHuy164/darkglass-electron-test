import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Fetch from '../components/Fetch';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Fetch />} />
      </Routes>
    </Router>
  );
}
