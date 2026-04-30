import { useState } from "react"
import { useNavigate } from "react-router-dom"

/**
 * BookingForm Component
 * Handles restaurant reservation form with validation
 * @param {Array} availableTimes - Array of available booking times
 * @param {Function} dispatch - Redux dispatch for updating available times
 * @param {Function} submitForm - Function to submit the booking form
 */
export default function BookingForm({availableTimes, dispatch, submitForm}) {
    console.log(dispatch)
    
    // Form state management
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        contactNumber: "",
        date: "",
        time: "00:00",
        noOfGuests: 1,
        occasion: "Birthday"
    })

    // Validation error state
    const [errors, setErrors] = useState({})

    /**
     * Validates form data and returns error object
     * @returns {Object} Object containing field names as keys and error messages as values
     */
    const validateForm = () => {
        const newErrors = {}

        // Validate first name
        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required"
        } else if (formData.firstName.trim().length < 2) {
            newErrors.firstName = "First name must be at least 2 characters"
        }

        // Validate last name
        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last name is required"
        } else if (formData.lastName.trim().length < 2) {
            newErrors.lastName = "Last name must be at least 2 characters"
        }

        // Validate contact number
        if (!formData.contactNumber.trim()) {
            newErrors.contactNumber = "Contact number is required"
        } else if (!/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(formData.contactNumber)) {
            newErrors.contactNumber = "Invalid format. Use: 123-456-7890"
        }

        // Validate date
        if (!formData.date) {
            newErrors.date = "Date is required"
        } else {
            const selectedDate = new Date(formData.date)
            const today = new Date()
            today.setHours(0, 0, 0, 0)
            if (selectedDate < today) {
                newErrors.date = "Cannot book for past dates"
            }
        }

        // Validate time
        if (!formData.time || formData.time === "00:00") {
            newErrors.time = "Please select a time"
        }

        // Validate number of guests
        if (!formData.noOfGuests || formData.noOfGuests < 1 || formData.noOfGuests > 10) {
            newErrors.noOfGuests = "Guests must be between 1 and 10"
        }

        return newErrors
    }

    const handleFormChange = (event) => {
      const { name, value } = event.target
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }))
      // Clear error for this field when user starts typing
      if (errors[name]) {
        setErrors(prev => ({
          ...prev,
          [name]: ""
        }))
      }
    }

    const handleDateChange = async (event) => {
      const { name, value } = event.target
      
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }))
      
      // Update available times when date changes
      if (value) {
        dispatch({ type: 'UPDATE_TIMES', payload: value })
      }

      // Clear date error
      if (errors.date) {
        setErrors(prev => ({
          ...prev,
          date: ""
        }))
      }
    }

    const handleSubmit = (event) => {
      event.preventDefault()
      
      // Validate form before submission
      const newErrors = validateForm()
      setErrors(newErrors)

      // Only submit if no errors
      if (Object.keys(newErrors).length === 0) {
        submitForm(formData)
      }
    }

    const currentDate = new Date().toISOString().split("T")[0]
    const options = availableTimes.map(time => <option key={time}>{time}</option>)
    
    return (
      <main>
        <p className="desc-text form-desc">Please fill in the form below accurately to enable us serve you nicely.</p>
        <form onSubmit={handleSubmit}>
          <div className="seperate">
            <label htmlFor="first-name">First Name <span className="required">*</span></label>
            <input 
              type="text" 
              id="first-name" 
              name="firstName" 
              value={formData.firstName} 
              onChange={handleFormChange} 
              required 
              aria-describedby={errors.firstName ? "firstName-error" : undefined}
            />
            {errors.firstName && (
              <p id="firstName-error" className="error-message" role="alert">{errors.firstName}</p>
            )}
          </div>

          <div className="seperate">
            <label htmlFor="last-name">Last Name <span className="required">*</span></label>
            <input 
              type="text" 
              id="last-name" 
              name="lastName" 
              value={formData.lastName} 
              onChange={handleFormChange} 
              required 
              aria-describedby={errors.lastName ? "lastName-error" : undefined}
            />
            {errors.lastName && (
              <p id="lastName-error" className="error-message" role="alert">{errors.lastName}</p>
            )}
          </div>

          <div className="seperate">
            <label htmlFor="contact-number">Contact Number <span className="required">*</span></label>
            <input 
              type="text" 
              id="contact-number" 
              name="contactNumber" 
              placeholder="123-456-7890"
              value={formData.contactNumber} 
              onChange={handleFormChange} 
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              aria-describedby={errors.contactNumber ? "contactNumber-error" : undefined}
            />
            {errors.contactNumber && (
              <p id="contactNumber-error" className="error-message" role="alert">{errors.contactNumber}</p>
            )}
          </div>

          <div className="seperate date-time">
            <div className="seperate-child">
              <label htmlFor="res-date">Choose date <span className="required">*</span></label>
              <input 
                type="date" 
                id="res-date" 
                name="date" 
                value={formData.date} 
                onChange={handleDateChange} 
                required 
                min={currentDate}
                aria-describedby={errors.date ? "date-error" : undefined}
              />
              {errors.date && (
                <p id="date-error" className="error-message" role="alert">{errors.date}</p>
              )}
            </div>

            <div className="seperate-child">
              <label htmlFor="res-time">Choose time <span className="required">*</span></label>
              <select 
                id="res-time" 
                name="time" 
                value={formData.time} 
                onChange={handleFormChange} 
                required
                aria-describedby={errors.time ? "time-error" : undefined}
              >
                <option value="">Select a time</option>
                {options}
              </select>
              {errors.time && (
                <p id="time-error" className="error-message" role="alert">{errors.time}</p>
              )}
            </div>
          </div>

          <div className="seperate guests-occasion">
            <div className="seperate-child">
              <label htmlFor="guests">Number of guests <span className="required">*</span></label>
              <input 
                type="number" 
                placeholder="1" 
                min="1" 
                max="10" 
                required 
                id="guests" 
                name="noOfGuests" 
                value={formData.noOfGuests} 
                onChange={handleFormChange}
                aria-describedby={errors.noOfGuests ? "guests-error" : undefined}
              />
              {errors.noOfGuests && (
                <p id="guests-error" className="error-message" role="alert">{errors.noOfGuests}</p>
              )}
            </div>

            <div className="seperate-child">
              <label htmlFor="occasion">Occasion</label>
              <select 
                id="occasion" 
                name="occasion" 
                required 
                value={formData.occasion} 
                onChange={handleFormChange}
              >
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
            </div>
          </div>

          <input 
            className="submit" 
            type="submit" 
            value="Reserve" 
            aria-label="submit button"
          />
      </form>
      </main>
    )
  }