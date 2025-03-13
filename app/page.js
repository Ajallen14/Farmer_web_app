import Spline from "@splinetool/react-spline/next"
import Link from "next/link"

export default function Home() {
  return (
    <div className="app-container">
      <header className="header">
        <div className="container header-container">
          <Link href="/" className="logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon"
            >
              <path d="M12 2a9 9 0 0 0-9 9c0 3.6 3.4 8.4 9 11 5.6-2.6 9-7.4 9-11a9 9 0 0 0-9-9z"></path>
              <path d="M12 2v20"></path>
              <path d="M2 12h20"></path>
            </svg>
            <span>FarmConnect</span>
          </Link>
          <nav className="nav-desktop">
            <Link href="#features" className="nav-link">
              Features
            </Link>
            <Link href="#about" className="nav-link">
              About
            </Link>
            <Link href="#contact" className="nav-link">
              Contact
            </Link>
          </nav>
          <button className="btn btn-outline sign-in-btn">Sign In</button>
          <button className="menu-btn">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </header>
      <main className="main">
        <section className="hero-section">
          <div className="spline-container">
            <Spline scene="https://prod.spline.design/sQvR0HfNsEL79Pvw/scene.splinecode" />
          </div>
          <div className="container hero-content">
            <div className="hero-text-box">
              <h1 className="hero-title">Growing Together, Farming Smarter</h1>
              <p className="hero-description">
                Your all-in-one platform for modern farming. Get real-time insights, connect with other farmers, and
                access the resources you need to thrive.
              </p>
              <div className="hero-buttons">
                <button className="btn btn-primary">Get Started</button>
                <button className="btn btn-outline">Learn More</button>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="features-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Everything You Need in One Place</h2>
              <p className="section-description">
                Access critical information and tools to make informed decisions for your farm.
              </p>
            </div>
            <div className="cards-container">
              <div className="card">
                <div className="card-header">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="card-icon"
                  >
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                    <polyline points="16 7 22 7 22 13"></polyline>
                  </svg>
                  <h3 className="card-title">Market Price</h3>
                  <p className="card-subtitle">Real-time updates on crop prices in local and national markets</p>
                </div>
                <div className="card-content">
                  <p className="card-text">
                    Stay informed about market trends and get the best prices for your produce. Our platform aggregates
                    data from multiple sources to provide accurate pricing information.
                  </p>
                </div>
                <div className="card-footer">
                  <button className="btn btn-outline btn-full">View Market Prices</button>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="card-icon"
                  >
                    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
                  </svg>
                  <h3 className="card-title">Weather Forecast</h3>
                  <p className="card-subtitle">Accurate weather predictions for your specific location</p>
                </div>
                <div className="card-content">
                  <p className="card-text">
                    Plan your farming activities with confidence using our hyperlocal weather forecasts. Get alerts for
                    extreme weather conditions and optimize your irrigation schedule.
                  </p>
                </div>
                <div className="card-footer">
                  <button className="btn btn-outline btn-full">Check Weather</button>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="card-icon"
                  >
                    <path d="M12 2a9 9 0 0 0-9 9c0 3.6 3.4 8.4 9 11 5.6-2.6 9-7.4 9-11a9 9 0 0 0-9-9z"></path>
                    <path d="M12 2v20"></path>
                    <path d="M2 12h20"></path>
                  </svg>
                  <h3 className="card-title">Crop Care Tips</h3>
                  <p className="card-subtitle">Expert advice on crop management and disease prevention</p>
                </div>
                <div className="card-content">
                  <p className="card-text">
                    Access a comprehensive library of farming best practices, pest control methods, and sustainable
                    agriculture techniques tailored to your crops and region.
                  </p>
                </div>
                <div className="card-footer">
                  <button className="btn btn-outline btn-full">Explore Tips</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="connect-section">
          <div className="container">
            <h2 className="section-title">Connect with Farmers Around You</h2>
            <p className="section-description">
              Join a thriving community of farmers in your area. Share knowledge, trade equipment, and build valuable
              relationships.
            </p>
            <button className="btn btn-primary connect-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              Connect with Local Farmers
            </button>
            <div className="stats-container">
              <div className="stat">
                <div className="stat-value">5,000+</div>
                <p className="stat-label">Active Farmers</p>
              </div>
              <div className="stat">
                <div className="stat-value">120+</div>
                <p className="stat-label">Regions Covered</p>
              </div>
              <div className="stat">
                <div className="stat-value">50+</div>
                <p className="stat-label">Crop Types</p>
              </div>
              <div className="stat">
                <div className="stat-value">24/7</div>
                <p className="stat-label">Support</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <Link href="/" className="logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon"
              >
                <path d="M12 2a9 9 0 0 0-9 9c0 3.6 3.4 8.4 9 11 5.6-2.6 9-7.4 9-11a9 9 0 0 0-9-9z"></path>
                <path d="M12 2v20"></path>
                <path d="M2 12h20"></path>
              </svg>
              <span>FarmConnect</span>
            </Link>
            <p className="footer-tagline">
              Empowering farmers with technology and community to grow sustainably and profitably.
            </p>
          </div>
          <div className="footer-links">
            <div className="footer-links-column">
              <h4 className="footer-links-title">Platform</h4>
              <ul className="footer-links-list">
                <li>
                  <Link href="#" className="footer-link">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="footer-link">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="footer-link">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h4 className="footer-links-title">Company</h4>
              <ul className="footer-links-list">
                <li>
                  <Link href="#" className="footer-link">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="footer-link">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="footer-link">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h4 className="footer-links-title">Contact</h4>
              <ul className="footer-links-list">
                <li>
                  <Link href="#" className="footer-link">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="footer-link">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="footer-link">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container footer-bottom-container">
            <p className="copyright">© {new Date().getFullYear()} FarmConnect. All rights reserved.</p>
            <div className="legal-links">
              <Link href="#" className="legal-link">
                Privacy Policy
              </Link>
              <Link href="#" className="legal-link">
                Terms of Service
              </Link>
              <Link href="#" className="legal-link">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

