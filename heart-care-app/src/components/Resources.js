// Resources.js
import React from 'react';

function Resources() {
  return (
    <section id="resources">
      <div className="resources-container">
        <h2>Resources</h2>
        <p>Explore our resources to learn more about health and wellness:</p>
        <ul>
          <li><a href="https://www.cdc.gov/" target="_blank" rel="noopener noreferrer">Centers for Disease Control and Prevention (CDC)</a></li>
          <li><a href="https://www.who.int/" target="_blank" rel="noopener noreferrer">World Health Organization (WHO)</a></li>
          <li><a href="https://www.mayoclinic.org/" target="_blank" rel="noopener noreferrer">Mayo Clinic</a></li>
          <li><a href="https://www.healthline.com/" target="_blank" rel="noopener noreferrer">Healthline</a></li>
          <li><a href="https://medlineplus.gov/" target="_blank" rel="noopener noreferrer">MedlinePlus</a></li>
        </ul>
      </div>
    </section>
  );
}

export default Resources;
