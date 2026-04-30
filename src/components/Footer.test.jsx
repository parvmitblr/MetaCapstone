import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Footer from './Footer'

describe('Footer Component', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    expect(screen.getByAltText('little lemon')).toBeInTheDocument()
  })

  it('displays footer navigation links', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    
    expect(screen.getByText('Navigtion')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getByText('Social Media')).toBeInTheDocument()
  })

  it('contains footer home link', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    const homeLinks = screen.getAllByText('Home')
    expect(homeLinks.length).toBeGreaterThan(0)
  })

  it('has semantic footer element', () => {
    const { container } = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    expect(container.querySelector('footer')).toBeInTheDocument()
  })
})
