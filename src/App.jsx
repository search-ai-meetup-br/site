import './styles/index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'
import CodeOfConductPage from './pages/CodeOfConductPage.jsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/code-of-conduct" element={<CodeOfConductPage />} />
      </Routes>
    </Router>
  );
}

