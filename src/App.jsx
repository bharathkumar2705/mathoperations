import { Route, Routes } from 'react-router-dom'; //  Routing in React (react-router-dom)
import Navigation from './components/Navigation'; //  Importing a Component
import Addition from './pages/Addition'; //  Page Component
import Division from './pages/Division';
import Home from './pages/Home';
import Multiplication from './pages/Multiplication';
import Percentage from './pages/Percentage';
import Practice from './pages/Practice';
import Subtraction from './pages/Subtraction';
import './styles/App.css'; // Importing CSS for styling

function App() { //  Functional Component
  return (
    <div className="app">
      <Navigation /> {/* Component usage */}
      <Routes> {/*  Defining Routes */}
        <Route path="/" element={<Home />} /> {/*  Route to Home Page */}
        <Route path="/addition" element={<Addition />} />
        <Route path="/subtraction" element={<Subtraction />} />
        <Route path="/multiplication" element={<Multiplication />} />
        <Route path="/division" element={<Division />} />
        <Route path="/percentage" element={<Percentage />} />
        <Route path="/practice" element={<Practice />} />
      </Routes>
    </div>
  );
}

export default App; //  Exporting Component
