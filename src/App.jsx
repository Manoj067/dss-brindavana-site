import React from 'react'

const VIDEO_URL = 'https://www.youtube.com/embed/rP03CQXcCj4?rel=0'
const MAP_LINK = 'https://maps.app.goo.gl/u2BJbR9ijsHAgDex6?g_st=iwb'

const stats = [
  { value: '10+', label: 'Years of trust' },
  { value: 'Premium', label: 'Land opportunities' },
  { value: '100%', label: 'Customer focus' },
  { value: 'Prime', label: 'Locations' }
]

const highlights = [
  'Affordable and premium plots',
  'Clear documentation support',
  'Trusted local expertise',
  'Ideal locations for future growth'
]

const services = [
  {
    title: 'Residential Plots',
    text: 'Well-planned residential plots built for modern families and long-term value.'
  },
  {
    title: 'Investment-Friendly',
    text: 'High-potential opportunities designed for smart property investments.'
  },
  {
    title: 'Guided Buying',
    text: 'Personalized guidance to help you choose the right plot and complete the process smoothly.'
  }
]

const gallery = [
  { title: 'Smart Location', text: 'Accessible connectivity and future-ready neighborhoods.' },
  { title: 'Family Living', text: 'Purpose-built communities for a secure and comfortable lifestyle.' },
  { title: 'Growth Value', text: 'A strong real-estate investment with long-term appreciation.' }
]

export default function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="container nav-wrap">
          <div className="brand-block">
            <div className="brand-mark">DSS</div>
            <div>
              <div className="brand-name">DSS Brindavana</div>
              <div className="brand-subtitle">A promising address for your future</div>
            </div>
          </div>
          <nav className="main-nav" aria-label="Main navigation">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#gallery">Gallery</a>
            <a href="#location">Location</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Building a better future for everyone</p>
              <h1>Invest in space, growth, and a brighter tomorrow.</h1>
              <p className="hero-text">
                At DSS Brindavana, we focus on thoughtfully planned land opportunities that combine
                affordability, trust, and strong future value. Inspired by the values of trusted real
                estate development, we help families and investors find the right place to build.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#contact">Book a Visit</a>
                <a className="btn btn-secondary" href={MAP_LINK} target="_blank" rel="noreferrer">View Location</a>
              </div>
              <ul className="highlight-list">
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="hero-panel">
              <div className="glass-card">
                <div className="label-row">
                  <span className="badge">Featured</span>
                  <span className="mini-tag">Trusted property partner</span>
                </div>
                <h3>Why buyers choose us</h3>
                <div className="stat-grid">
                  {stats.map((stat) => (
                    <div className="stat-item" key={stat.label}>
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section intro-section">
          <div className="container two-col">
            <div>
              <p className="section-tag">About us</p>
              <h2>We believe the right plot can shape a stronger future.</h2>
            </div>
            <div>
              <p>
                Savithri Developers has built a reputation for delivering dependable property solutions
                with a customer-first mindset. We are a leading real-estate developer committed to
                developing high-quality, affordable plots in prime locations. Every project is shaped
                with long-term value, transparent guidance, and genuine care for the families and
                investors we serve.
              </p>
            </div>
          </div>
        </section>

        <section id="features" className="section section-alt">
          <div className="container">
            <div className="section-heading center">
              <p className="section-tag">What we offer</p>
              <h2>Prime opportunities for growing families and smart investors</h2>
            </div>
            <div className="card-grid">
              {services.map((service) => (
                <article className="info-card" key={service.title}>
                  <div className="card-icon">✓</div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="section">
          <div className="container">
            <div className="section-heading center">
              <p className="section-tag">Project highlights</p>
              <h2>Designed with lifestyle, value, and future growth in mind</h2>
            </div>
            <div className="gallery-grid">
              {gallery.map((item, index) => (
                <div className={`gallery-card card-${index + 1}`} key={item.title}>
                  <div className="card-overlay">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="video" className="section section-alt">
          <div className="container">
            <div className="section-heading center">
              <p className="section-tag">Video overview</p>
              <h2>See the vision behind DSS Brindavana</h2>
            </div>
            <div className="video-wrapper">
              <iframe
                title="DSS Brindavana video"
                src={VIDEO_URL}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section id="location" className="section">
          <div className="container location-grid">
            <div className="location-copy">
              <p className="section-tag">Location</p>
              <h2>Convenient access, open skies, and plenty of future potential.</h2>
              <p>
                Designed for buyers who want a peaceful setting with connectivity to essential amenities,
                schools, and growing urban zones. Explore the exact location and start planning your
                next move with confidence.
              </p>
              <div className="location-actions">
                <a className="btn btn-primary" href={MAP_LINK} target="_blank" rel="noreferrer">Open in Google Maps</a>
              </div>
            </div>
            <div className="map-panel">
              <iframe
                title="DSS Brindavana location map"
                src="https://www.google.com/maps?q=12.9716,77.5946&z=13&output=embed"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-wrap">
            <div className="contact-info">
              <p className="section-tag">Contact</p>
              <h2>Let’s help you find the right investment.</h2>
              <p>For availability, site visits, and pricing details, connect with our team today.</p>
              <ul>
                <li><strong>Email:</strong> <a href="mailto:info@dssbrindavana.com">info@dssbrindavana.com</a></li>
                <li><strong>Phone:</strong> <a href="tel:+919876543210">+91 98765 43210</a></li>
                <li><strong>Location:</strong> <a href={MAP_LINK} target="_blank" rel="noreferrer">Open exact map</a></li>
              </ul>
            </div>

            <div className="contact-card">
              <h3>Request a callback</h3>
              <form action="mailto:info@dssbrindavana.com" method="post" encType="text/plain">
                <label>
                  Name
                  <input type="text" name="name" placeholder="Your name" />
                </label>
                <label>
                  Phone
                  <input type="tel" name="phone" placeholder="Your phone number" />
                </label>
                <label>
                  Message
                  <textarea name="message" rows="4" placeholder="Tell us what you are looking for"></textarea>
                </label>
                <button type="submit" className="btn btn-primary">Send Enquiry</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} DSS Brindavana. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
