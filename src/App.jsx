import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { Home } from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FirstCompany } from './components/Services/FirstCompany';
import { WhatsappButton } from './components/WhatsappButton';
import { SecondCompany } from './components/Services/SecondCompany';
import { ThirdCompany } from './components/Services/ThirdCompany';

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/360carwash" element={<FirstCompany />} /> 
          <Route path="/360otra" element={<SecondCompany />} /> 
          <Route path="/360otra2" element={<ThirdCompany />} /> 
        </Routes>
      <Footer />
      <WhatsappButton/>
    </Router>
  );
}

export default App;
