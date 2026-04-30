import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import HomePage from './HomePage'

describe('HomePage Component', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    )
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('displays Hero section', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    )
    expect(screen.getByText('Little Lemon')).toBeInTheDocument()
    expect(screen.getByText('Chicago')).toBeInTheDocument()
  })

  it('displays testimonials section', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    )
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
  })

  it('has semantic structure with main element', () => {
    const { container } = render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    )
    const mainElement = container.querySelector('main')
    expect(mainElement).toBeInTheDocument()
  })
})
