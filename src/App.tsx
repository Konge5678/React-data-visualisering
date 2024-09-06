import React from 'react';
import { Routes, Route,} from 'react-router-dom'; 

// Import your page components
import Home from './pages/home';


const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
