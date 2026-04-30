import { useState, useReducer } from "react"
import BookingForm from "../components/BookingForm"
import { fetchAPI, submitAPI } from "../api"
import { useNavigate } from "react-router-dom";

/**
 * BookingPage Component
 * Manages restaurant reservation booking
 * Uses reducer pattern to manage available times state
 */
export default function BookingPage() {
    
  const [date, setDate] = useState(new Date())

  /**
   * Initialize available booking times for the given date
   * @param {Date} date - The date to fetch times for
   * @returns {Array} Array of available time slots
   */
  function initializeTimes(date) {
    return fetchAPI(date)
    }

  /**
   * Update available times when date changes
   * @param {Date} date - The new selected date
   * @returns {Array} Array of available time slots for new date
   */
  function updateTimes(date) {
    const dateObj = new Date(date)
    return fetchAPI(dateObj)
  }

  const navigate = useNavigate();

  /**
   * Handle booking form submission
   * @param {Object} formData - The form submission data
   */
  function submitForm(formData) {
    try {
      const isSubmitted = submitAPI(formData);

      if (isSubmitted) {
        navigate("/confirmed");
      } else {
        throw new Error('Booking submission failed');
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      alert('Unable to complete your reservation. Please try again.');
    }
  }
  
  /**
   * Reducer function to manage available times state
   * @param {Array} state - Current available times
   * @param {Object} action - Redux-style action
   * @returns {Array} Updated available times
   */
  function reducer(state, action) {
    let newState
    switch (action.type) {
      case 'UPDATE_TIMES':
      const newDate = new Date(action.payload);
      newState = updateTimes(newDate)
      break;

      default:
        throw new Error('Unknown action type')
    }
    return newState
  }

  const [availableTimes, dispatch] = useReducer(reducer, initializeTimes(date))
    return (
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
    )
  }
  

  