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
  { title: 'Residential Plots', text: 'Thoughtfully planned plots for modern living and lasting value.' },
  { title: 'Investment Opportunities', text: 'High-potential land options for future appreciation and smart returns.' },
  { title: 'Guided Buying Support', text: 'Expert help from site selection to documentation and final purchase.' }
]

const gallery = [
  { title: 'Smart Location', text: 'Connected, peaceful, and future-ready neighborhoods.' },
  { title: 'Family Living', text: 'Comfortable spaces tailored for modern family lifestyles.' },
  { title: 'Growth Value', text: 'A strong property opportunity with long-term promise.' }
]

const testimonials = [
  { quote: 'The process felt transparent and trustworthy from day one. We found the right plot with real confidence.', name: 'Rohit S.' },
  { quote: 'Excellent guidance, clear communication, and a location that matches our future plans perfectly.', name: 'Priya M.' },
  { quote: 'A professional team that genuinely understands what home and investment buyers need.', name: 'Anand K.' }
]

export default function App() {
  return (
    <div className="marketing-page">
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
            <a href="#video">Video</a>
            <a href="#location">Location</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="hero-section">
          <div className="floating-orb orb-one" />
          <div className="floating-orb orb-two" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Building a better future for everyone</p>
              <h1>Invest in space, growth, and a brighter tomorrow.</h1>
              <p className="hero-text">
                DSS Brindavana brings together affordability, trusted guidance, and premium land
                opportunities in a location designed for long-term value and peaceful living.
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
              <div className="glass-card float-card">
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
            <div className="intro-copy">
              <p className="section-tag">About us</p>
              <h2>We believe the right plot can shape a stronger future.</h2>
            </div>
            <div className="intro-text">
              <p>
                Savithri Developers has built a reputation for dependable property solutions and a
                customer-first approach. We focus on high-quality, affordable plots in prime locations,
                helping families and investors choose opportunities that bring long-term value and peace
                of mind.
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
              {services.map((service, index) => (
                <article className="info-card reveal-card" key={service.title} style={{ animationDelay: `${index * 120}ms` }}>
                  <div className="card-icon">✓</div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="section gallery-section">
          <div className="container">
            <div className="section-heading center">
              <p className="section-tag">Project highlights</p>
              <h2>Built for lifestyle, value, and future growth</h2>
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

        <section id="location" className="section location-section">
          <div className="container location-grid">
            <div className="location-copy">
              <p className="section-tag">Location</p>
              <h2>Convenient access, open spaces, and long-term value.</h2>
              <p>
                Positioned with excellent connectivity and a calm environment, DSS Brindavana is designed
                for buyers who want a future-ready address with everyday convenience and a promising
                growth outlook.
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

        <section className="section testimonials-section">
          <div className="container">
            <div className="section-heading center">
              <p className="section-tag">Testimonials</p>
              <h2>What our buyers say</h2>
            </div>

            <div className="testimonial-grid">
              {testimonials.map((item) => (
                <article className="testimonial-card" key={item.name}>
                  <div className="quote-mark">“</div>
                  <p>{item.quote}</p>
                  <div className="person-name">{item.name}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-wrap">
            <div className="contact-info">
              <p className="section-tag">Contact</p>
              <h2>Let’s help you find the right investment.</h2>
              <p>For site visits, pricing, and availability details, connect with our team today.</p>
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
