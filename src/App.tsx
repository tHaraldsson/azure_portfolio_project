import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="portfolio">
      
      <nav className="navbar">
        <div className="nav-brand">
          <h1>Min Portfolio</h1>
        </div>
        <ul className="nav-links">
          <li>
            <button 
              className={activeSection === 'home' ? 'active' : ''}
              onClick={() => setActiveSection('home')}
            >
              Hem
            </button>
          </li>
          <li>
            <button 
              className={activeSection === 'about' ? 'active' : ''}
              onClick={() => setActiveSection('about')}
            >
              Om mig
            </button>
          </li>
          <li>
            <button 
              className={activeSection === 'projects' ? 'active' : ''}
              onClick={() => setActiveSection('projects')}
            >
              Projekt
            </button>
          </li>
          <li>
            <button 
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={() => setActiveSection('contact')}
            >
              Kontakt
            </button>
          </li>
        </ul>
      </nav>

      
      <main className="main-content">
        {activeSection === 'home' && (
          <section className="hero">
            <div className="hero-content">
              <h2>Hej, jag är Tommy</h2>
              <p>Javautvecklare</p>
              <button 
                className="cta-button"
                onClick={() => setActiveSection('projects')}
              >
                Se mina projekt
              </button>
            </div>
          </section>
        )}

        {activeSection === 'about' && (
          <section className="about">
            <h2>Om mig</h2>
            <div className="about-content">
              <div className="skills">
                <h3>Tekniska färdigheter</h3>
                <ul>
                  <li>Java</li>
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>JavaScript</li>
                  <li>HTML/CSS</li>
                  <li>Vite</li>
                </ul>
              </div>
              <div className="bio">
                <h3>Kort om mig</h3>
                <p>
                  Jag är en engagerad Javautvecklare med erfarenhet av att bygga robusta och skalbara backend-lösningar. Jag brinner för att designa effektiva system, skriva ren och underhållbar kod, samt implementera RESTful API:er och tjänster som löser verkliga problem. 
                  Jag strävar alltid efter att hålla mig uppdaterad med moderna ramverk och best practices inom Java-ekosystemet.
                </p>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'projects' && (
          <section className="projects">
            <h2>Mina projekt</h2>
            <div className="project-grid">
              <div className="project-card">
                <h3>Portfolio Hemsida</h3>
                <p>Denna hemsida byggd med React och TypeScript</p>
                <div className="tech-tags">
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>Vite</span>
                </div>
              </div>
              <div className="project-card">
                <h3>Employee database</h3>
                <p>En applikation som lagrar employees i en databas med ett fint GUI</p>
                <div className="tech-tags">
                  <span>Java</span>
                  <span>JDBC</span>
                  <span>jFrame</span>
                  <span>H2</span>
                </div>
              </div>
              <div className="project-card">
                <h3>To-do webservice</h3>
                <p>En enkel att-göra-lista webservice</p>
                <div className="tech-tags">
                  <span>Java</span>
                  <span>Spring</span>
                  <span>REST-API</span>
                  <span>PostgreDB</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'contact' && (
          <section className="contact">
            <h2>Kontakta mig</h2>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Namn</label>
                <input type="text" id="name" placeholder="Ditt namn" />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-post</label>
                <input type="email" id="email" placeholder="din@epost.se" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Meddelande</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  placeholder="Ditt meddelande..."
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                Skicka meddelande
              </button>
            </form>
            <div className="contact-info">
              <p>📧 tkoh93@live.com</p>
              <p>📱 +46 79 072 72 34</p>
              <p>📍 Stockholm, Sverige</p>
            </div>
          </section>
        )}
      </main>

      
      <footer className="footer">
        <p>&copy; 2025 Min Portfolio. Alla rättigheter förbehållna.</p>
      </footer>
    </div>
  )
}

export default App