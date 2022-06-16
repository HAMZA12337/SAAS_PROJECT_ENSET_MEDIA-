import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About.jsx';
import Service from './components/Service.jsx';
function App() {
  return (
    <div className="App">
   <Navbar />
   <Home/>
   <About/>
   <Service/>
    </div>
  );
}

export default App;
