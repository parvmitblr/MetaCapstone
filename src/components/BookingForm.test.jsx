import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import BookingForm from './BookingForm'

describe('BookingForm Component', () => {
  const mockDispatch = vi.fn()
  const mockSubmitForm = vi.fn()
  const mockAvailableTimes = ['17:00', '17:30', '18:00', '18:30']

  beforeEach(() => {
    mockDispatch.mockClear()
    mockSubmitForm.mockClear()
  })

  it('renders without crashing', () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    )
    expect(screen.getByRole('button', { name: /reserve/i })).toBeInTheDocument()
  })

  it('displays all form fields', () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    )
    
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/contact number/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument()
  })

  it('handles form input changes', async () => {
    const user = userEvent.setup()
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    )

    const firstNameInput = screen.getByLabelText(/first name/i)
    await user.type(firstNameInput, 'John')
    expect(firstNameInput.value).toBe('John')
  })

  it('submits form with valid data', async () => {
    const user = userEvent.setup()
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    )

    await user.type(screen.getByLabelText(/first name/i), 'John')
    await user.type(screen.getByLabelText(/last name/i), 'Doe')
    await user.type(screen.getByLabelText(/contact number/i), '123-456-7890')
    await user.type(screen.getByLabelText(/choose date/i), '2026-12-30')
    await user.selectOptions(screen.getByLabelText(/choose time/i), '17:00')
    await user.clear(screen.getByLabelText(/number of guests/i))
    await user.type(screen.getByLabelText(/number of guests/i), '2')

    const submitButton = screen.getByRole('button', { name: /reserve/i })
    await user.click(submitButton)

    expect(mockSubmitForm).toHaveBeenCalled()
  })

  it('prevents submission with invalid contact number', async () => {
    const user = userEvent.setup()
    const { container } = render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    )

    const contactInput = screen.getByLabelText(/contact number/i)
    await user.type(contactInput, 'invalid')
    
    expect(contactInput).toHaveAttribute('pattern', '[0-9]{3}-[0-9]{3}-[0-9]{4}')
  })

  it('enforces number of guests between 1 and 10', () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    )

    const guestInput = screen.getByLabelText(/number of guests/i)
    expect(guestInput).toHaveAttribute('min', '1')
    expect(guestInput).toHaveAttribute('max', '10')
  })

  it('renders correct occasion options', () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    )

    const occasionSelect = screen.getByLabelText(/occasion/i)
    const options = occasionSelect.querySelectorAll('option')
    expect(options).toHaveLength(2)
    expect(options[0]).toHaveTextContent('Birthday')
    expect(options[1]).toHaveTextContent('Anniversary')
  })

  it('has proper ARIA labels on submit button', () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    )

    const submitButton = screen.getByRole('button', { name: /reserve/i })
    expect(submitButton).toHaveAttribute('aria-label', 'submit button')
  })

  it('displays available times from props', () => {
    const times = ['17:00', '17:30', '18:00', '18:30', '19:00']
    render(
      <BookingForm
        availableTimes={times}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    )

    const timeSelect = screen.getByLabelText(/choose time/i)
    const options = timeSelect.querySelectorAll('option')
    times.forEach(time => {
      expect(timeSelect).toHaveFormValues({ time })
    })
  })
})
