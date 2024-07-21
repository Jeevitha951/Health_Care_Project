// App.js
import React from 'react';
import './App.css';
import Header from './Header';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Appointments from './components/Appointment';
import Resources from './components/Resources';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import './components/ContactUs.css';
import './components/Resources.css';
import './components/HeroSection.css';
import './components/Testimonials.css';
import './components/Services.css';
import './components/AboutUs.css';







function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutUs />
      <Services />
      <Appointments />
      <Resources />
      <Testimonials />
      <ContactUs />
    </div>
  );
}

export default App;
