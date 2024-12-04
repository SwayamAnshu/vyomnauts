import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Suspense, lazy } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './home/home';
import Navbar from './components/navbar2/navbar';

const Projects = lazy(() => import('./components/projects/projects'));
const Team = lazy(() => import('./components/team/team'));
const Gallery = lazy(() => import('./components/gallery/gallery'));
const Aboutus= lazy(()=> import('./components/aboutus/aboutus'))
function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/aboutUs" element={<Aboutus />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
