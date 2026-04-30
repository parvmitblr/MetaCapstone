import { Link } from "react-router-dom"

/**
 * Hero Component
 * Main hero section with restaurant introduction and reservation CTA
 * Displays prominent restaurant name, location, and description
 */
export default function Hero() {

    return (
      <section className="hero" aria-label="Restaurant Hero Section">
        <div className="hero-content">
            <article className="hero-desc">
                <h1 className="title">Little Lemon</h1>
                <h2 className="subtitle">Chicago</h2>
                <p className="desc">We are a family owned Mediterranean restaurant, 
                    focused on traditional recipes served with a modern twist.</p>
                <Link to="/booking" aria-label="Reserve a table at Little Lemon">
                  <button className="reserve-btn btn" aria-label="Make a reservation">
                    Reserve a table
                  </button>
                </Link>
            </article>
            <div className="img-wrapper">
              <img 
                className="hero-img" 
                src="../images/hero.png" 
                alt="Fresh Mediterranean ingredients and prepared dishes at Little Lemon restaurant"
                width="250"
                height="275"
              />
            </div>
        </div>
      </section>
    )
  }
  

  