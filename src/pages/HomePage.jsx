import Hero from "../components/Hero"
import Menu from "../components/Menu"
import Testimonials from "../components/Testimonials"
import Description from "../components/Description"

/**
 * HomePage Component
 * Main landing page displaying restaurant showcase
 * Includes hero section, menu, testimonials, and description
 */
export default function HomePage() {
    return (
      <main role="main" aria-label="Home page content">
       <Hero />
       <Menu />
       <Testimonials />
       <Description />
      </main>
    )
  }
  

