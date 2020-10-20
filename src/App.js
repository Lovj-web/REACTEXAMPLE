import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Banner from './components/Banner';
import About from './components/About';
import ContactForm from './components/ContactForm';

function App() {
  const [formData, setFormData] = useState({});

  return (
    <div>
      <Navigation />
      <Banner />
      <About />
      <ContactForm formData={formData} setFormData={setFormData} />
      <p>{formData.name}</p>
      <p>{formData.email}</p>
      <p>{formData.message}</p>
    </div>
  );
}

export default App;
