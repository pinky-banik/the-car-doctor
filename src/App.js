import {Routes,Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import ServiceDetails from './Components/Home/ServiceDetails';
import Services from './Components/Home/Services';
import About from './Components/Shared/About';
import Footer from './Components/Shared/Footer';
import Navbar from './Components/Shared/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/service/:serviceId" element={<ServiceDetails/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
