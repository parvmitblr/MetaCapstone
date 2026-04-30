import { Link } from "react-router-dom"

/**
 * Footer Component
 * Contains site navigation, contact information, and social media links
 * Provides semantic footer structure
 */
export default function Footer() {

    return (
      <footer role="contentinfo">
        <img src="/images/footer.png" alt="Little Lemon Footer Logo" width="300" height="100" />
        <div className="footer-content">
            <nav className="footer-nav" aria-label="Footer Navigation">
                <p className="footer-head"><strong>Navigation</strong></p>
                <Link to="/" className="footer-item">Home</Link>
                <a href="#about" className="footer-item">About</a>
                <a href="#menu" className="footer-item">Menu</a>
                <Link to="/booking" className="footer-item">Reservations</Link>
                <a href="#order" className="footer-item">Order Online</a>
                <a href="#login" className="footer-item">Login</a>
            </nav>
            <section className="footer-contact" aria-label="Contact Information">
                <p className="footer-head"><strong>Contact</strong></p>
                <a href="tel:+1-312-555-0123" className="footer-item">+1 (312) 555-0123</a>
                <a href="mailto:info@littlelemon.com" className="footer-item">info@littlelemon.com</a>
                <address className="footer-item" style={{fontStyle: 'normal'}}>
                  123 Main St, Chicago, IL 60601
                </address>
            </section>
            <section className="footer-social" aria-label="Social Media">
                <p className="footer-head"><strong>Social Media</strong></p>
                <a href="https://facebook.com/littlelemon" className="footer-item" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://instagram.com/littlelemon" className="footer-item" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://tiktok.com/@littlelemon" className="footer-item" target="_blank" rel="noopener noreferrer">TikTok</a>
                <a href="https://twitter.com/littlelemon" className="footer-item" target="_blank" rel="noopener noreferrer">Twitter</a>
            </section>
        </div>
      </footer>
    )
  }
  

  