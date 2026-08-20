const designs = [
  {
    title: "Design 1",
    tag: "Gallery",
    image: "/348s.jpg",
  },
  {
    title: "Design 2",
    tag: "Gallery",
    image: "/348s%20(1).jpg",
  },
  {
    title: "Design 3",
    tag: "Gallery",
    image: "/348s%20(2).jpg",
  },
  {
    title: "Design 4",
    tag: "Gallery",
    image: "/348s%20(3).jpg",
  },
];

const services = [
  {
    title: "Manicures",
    desc: "Traditional, Signature Spa, and Shellac/no-chip options — filing, shaping, cuticle care, and a hand & arm massage.",
  },
  {
    title: "Pedicures",
    desc: "Spa Pedicure with a relaxing soak and hot towels, or the Signature Spa Pedicure with exfoliation and a deep moisturizing mask.",
  },
  {
    title: "Full Sets & Fills",
    desc: "Acrylic, Pink & White, Pink & White with Gel, Gel Powder, and Liquid Gel — plus fills, repairs, and polish changes.",
  },
];

const promotions = [
  { label: "Manicure + Pedicure combo (Mon–Wed)", value: "$40" },
  { label: "Free Wi-Fi in salon", value: "Always on" },
];

const hours = [
  { day: "Mon – Fri", time: "10:00am – 7:00pm" },
  { day: "Saturday", time: "9:00am – 6:00pm" },
  { day: "Sunday", time: "12:00pm – 5:00pm" },
];

export default function Home() {
  return (
    <>
      <div className="nav-outer">
        <nav className="nav container">
          <div className="wordmark">
            LA<span>Nails</span>
          </div>
          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#promotions">Promotions</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href="#contact" className="nav-cta">Get in touch</a>
        </nav>
      </div>

      <div className="hero-outer">
        <div className="hero container">
          <div>
            <div className="hero-eyebrow">LA Nails · Grand Ave, St. Paul</div>
            <h1>
              Professional nail care, <em>done with care.</em>
            </h1>
            <p>
              We strive to give every client the finest, most personalized
              nail care in a comfortable setting. Take a look through the
              gallery or reach out to book a set.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn-primary">Book a set</a>
              <a href="#gallery" className="btn-secondary">View gallery</a>
            </div>
          </div>
          <div className="hero-visual" />
        </div>
      </div>

      <section className="section">
        <div className="container about-grid">
          <div className="about-art" />
          <div>
            <p className="section-eyebrow">What makes it different</p>
            <h2 style={{ fontFamily: "Fraunces, serif", fontWeight: 500, fontSize: 28, margin: 0 }}>
              Our promise: professional, comprehensive nail care.
            </h2>
            <ul className="about-list">
              <li>Skilled, professional staff you can count on.</li>
              <li>A comfortable salon experience from start to finish.</li>
              <li>Personalized service, every visit.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-header">
            <div>
              <p className="section-eyebrow">Services</p>
              <h2>What I offer</h2>
            </div>
            <p className="section-sub">A short menu, done properly rather than a long one done fast.</p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div className="service-card" key={s.title}>
                <div className="service-index">0{i + 1}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="gallery">
        <div className="container">
          <div className="section-header">
            <div>
              <p className="section-eyebrow">Gallery</p>
              <h2>Recent sets</h2>
            </div>
            <span className="gallery-count">{designs.length} designs</span>
          </div>

          <div className="grid">
            {designs.map((d) => (
              <div className="card" key={d.title}>
                <div className="card-swatch">
                  <img
                    src={d.image}
                    alt={d.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
                <div className="card-body">
                  <p className="card-title">{d.title}</p>
                  <p className="card-meta">{d.tag}</p>
                </div>
              </div>
            ))}
          </div>
{/*
          <div className="note">
            <strong>Note:</strong> want to add or swap photos? Upload new
            images into <code>/public</code> on GitHub, then add or edit
            entries in the <code>designs</code> list at the top of{" "}
            <code>app/page.js</code> to point at the new filenames.
          </div>

*/}
        </div>
      </section>

      <section className="section" id="promotions">
        <div className="container">
          <div className="promo-banner">
            <div>
              <h2>Current specials</h2>
              <p>
                A couple of standing offers — ask about these when you book.
              </p>
            </div>
            <div className="promo-list">
              {promotions.map((p) => (
                <div className="promo-item" key={p.label}>
                  <span>{p.label}</span>
                  <span>{p.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="contact" style={{ borderBottom: "none" }}>
        <div className="container">
          <div className="section-header">
            <div>
              <p className="section-eyebrow">Contact</p>
              <h2>Get in touch</h2>
            </div>
          </div>
          <div className="contact-grid">
            <div className="contact-block">
              <h3>Reach out</h3>
              <ul className="contact-rows">
                <li><span>Phone</span><span>651-293-1368</span></li>
                <li><span>Address</span><span>1102 Grand Ave, St. Paul, MN 55105</span></li>
              </ul>
            </div>
            <div className="contact-block">
              <h3>Hours</h3>
              <ul className="contact-rows">
                {hours.map((h) => (
                  <li key={h.day}><span>{h.day}</span><span>{h.time}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="footer-outer">
        <footer className="footer container">
          <span>© {new Date().getFullYear()} LA Nails</span>
          <span>1102 Grand Ave, St. Paul, MN</span>
        </footer>
      </div>
    </>
  );
}
