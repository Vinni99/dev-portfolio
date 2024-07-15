import React from 'react';
import './App.css';
import NavbarComponent from './components/navbar.js';
import Contact from './components/contact.js';
import About from './components/about.js';
import Project from './components/project.js';
import Footer from './components/footer.js';

function App() {
  return (
    <div className="App" style={{ marginTop: '75px' }}>
       <NavbarComponent />
      <section id="home" style={{ marginTop: '56px', height: '100vh', backgroundColor: 'lightblue' }}>
        <h1>Home Section</h1>
      </section>
      <section id="about" style={{ height: '100vh', backgroundColor: 'lightpink' }}>
        <h1>About Section</h1>
        <About/>
      </section>
      <section id="projects" style={{ height: '100vh', backgroundColor: 'lightgreen' }}>
        <h1>Project Section</h1>
        <Project/>
      </section>
      <section id="contact" style={{ height: '100vh', backgroundColor: 'lightcoral' }}>
        <h1>Contact Section</h1>
        <Contact/>
      </section>
      <Footer />
    </div>
  );
}

export default App;
