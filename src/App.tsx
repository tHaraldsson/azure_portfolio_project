import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="portfolio">
      {/* Navigation */}
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

      {/* Main Content */}
      <main className="main-content">
        {activeSection === 'home' && (
          <section className="hero">
            <div className="hero-content">
              <h2>Hej, jag är [Ditt Namn]</h2>
              <p>Frontend Developer & React Entusiast</p>
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
                  Jag är en passionerad frontend-utvecklare med fokus på 
                  att skapa moderna och användarvänliga webbapplikationer.
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
                <h3>Weather App</h3>
                <p>En väderapplikation med realtidsdata</p>
                <div className="tech-tags">
                  <span>React</span>
                  <span>API</span>
                  <span>CSS</span>
                </div>
              </div>
              <div className="project-card">
                <h3>Task Manager</h3>
                <p>En enkel att-göra-lista app</p>
                <div className="tech-tags">
                  <span>JavaScript</span>
                  <span>LocalStorage</span>
                  <span>UI/UX</span>
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
              <p>📧 email@example.com</p>
              <p>📱 +46 70 123 45 67</p>
              <p>📍 Stockholm, Sverige</p>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Min Portfolio. Alla rättigheter förbehållna.</p>
      </footer>
    </div>
  )
}

export default App