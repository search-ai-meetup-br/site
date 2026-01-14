import './styles/index.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx'
import CodeOfConduct from './pages/CodeOfConduct/CodeOfConduct.jsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/code-of-conduct" element={<CodeOfConduct />} />
      </Routes>
    </Router>
  );
}
