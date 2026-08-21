import React from 'react'

const VIDEO_URL = 'https://www.youtube.com/embed/rP03CQXcCj4'
const MAP_LINK = 'https://maps.app.goo.gl/u2BJbR9ijsHAgDex6?g_st=iwb'

export default function App(){
  return (
    <div className="page">
      <header className="site-header">
        <div className="container header-inner">
          <h1 className="brand">DSS Brindavana</h1>
          <nav className="nav">
            <a href="#video">Video</a>
            <a href="#location">Location</a>
            <a href="mailto:info@example.com">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container">
        <section id="hero" className="hero">
          <h2 className="tagline">Welcome to DSS Brindavana</h2>
          <p className="lead">A short showcase page modeled from the requested reference site.</p>
        </section>

        <section id="video" className="card">
          <h3>Featured Video</h3>
          <div className="video-wrap">
            <iframe
              title="DSS Brindavana Video"
              src={VIDEO_URL}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        <section id="location" className="card two-col">
          <div>
            <h3>Location</h3>
            <p>Open the interactive map to view the exact location.</p>
            <p><a className="btn" href={MAP_LINK} target="_blank" rel="noopener noreferrer">Open in Google Maps</a></p>
          </div>
          <div>
            <h3>Interactive map</h3>
            <div className="map-wrap">
              <iframe
                title="DSS Brindavana Map"
                src={`https://www.google.com/maps?q=${encodeURIComponent(MAP_LINK)}&output=embed`}
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section id="contact" className="card">
          <h3>Contact</h3>
          <p>Click the button to open your email client and send a message.</p>
          <p><a className="btn" href="mailto:info@example.com?subject=Inquiry%20about%20DSS%20Brindavana">Email Us</a></p>
        </section>

        <footer className="site-footer">
          <p>© {new Date().getFullYear()} DSS Brindavana</p>
        </footer>
      </main>
    </div>
  )
}
