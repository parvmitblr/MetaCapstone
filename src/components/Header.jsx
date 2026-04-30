import Nav from "./Nav"
import { Link } from "react-router-dom"

/**
 * Header Component
 * Main navigation header for the restaurant website
 * Contains logo and navigation menu
 */
export default function Header() {

    return (
      <header role="banner">
        <Link to="/" aria-label="Little Lemon Restaurant Home">
          <img src="/images/logo.png" alt="Little Lemon" width="200" height="100" />
        </Link>
        <Nav/>
      </header>
    )
  }
  

  