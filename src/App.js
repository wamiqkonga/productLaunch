import './App.css';
import CallToActionButton from './components/CallToActionButton.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import Pricing from './components/Pricing.jsx';
import Specification from './components/Specification.jsx';
import Testimonials from './components/Testimonials.jsx';



function App() {
  return (
    <>
    <div className="App">
      <Header/>
      <HeroSection/> 
      <Specification/>   
      <Testimonials/>
      <Pricing/> 
      <CallToActionButton
        emailAddress="wamiqkongwani@example.com"
        subject="Pre-order Inquiry"
        buttonText="Pre-order Now"
      />
      <Footer/>
    </div>
    </>
  );
}

export default App;
