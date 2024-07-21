import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter} from "react-router-dom";
// import Home from './components/Home';
// import AboutUs from './components/AboutUs';
// import Services from './components/Services';
// import Appointment from './components/Appointment';
// import Resources from './components/Resources';
// import ContactUs from './components/ContactUs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <BrowserRouter>
  <App />
  /* <Routes>
    <Route exact path="/AboutUs" element={<AboutUs/>}/>
    <Route exact path="/Services" element={<Services/>}/>
    <Route exact path="/Appointment" element={<Appointment/>}/>
    <Route exact path="/Resources" element={<Resources/>}/>
    <Route exact path="/ContactUs" element={<ContactUs/>}/>
  </Routes> */
  
    
  // </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
