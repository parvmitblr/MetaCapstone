import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header'

describe('Header Component', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    expect(screen.getByAltText('little lemon')).toBeInTheDocument()
  })

  it('displays logo with correct alt text', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    const logo = screen.getByAltText('little lemon')
    expect(logo).toHaveAttribute('src', '/images/logo.png')
  })

  it('contains navigation component', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('has semantic header element', () => {
    const { container } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    expect(container.querySelector('header')).toBeInTheDocument()
  })
})
