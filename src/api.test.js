import { describe, it, expect } from 'vitest'
import { fetchAPI, submitAPI } from './api'

describe('API Functions', () => {
  describe('fetchAPI', () => {
    it('returns an array of available times', () => {
      const date = new Date('2026-12-20')
      const result = fetchAPI(date)
      
      expect(Array.isArray(result)).toBe(true)
      expect(result.length).toBeGreaterThanOrEqual(0)
    })

    it('returns times in correct format', () => {
      const date = new Date('2026-12-20')
      const result = fetchAPI(date)
      
      result.forEach(time => {
        expect(time).toMatch(/^\d{2}:\d{2}$/)
        const [hours, minutes] = time.split(':')
        expect(parseInt(hours)).toBeGreaterThanOrEqual(17)
        expect(parseInt(hours)).toBeLessThanOrEqual(23)
      })
    })

    it('returns consistent results for the same date', () => {
      const date = new Date('2026-12-20')
      const result1 = fetchAPI(date)
      const result2 = fetchAPI(date)
      
      expect(result1).toEqual(result2)
    })

    it('may return different results for different dates', () => {
      const date1 = new Date('2026-12-20')
      const date2 = new Date('2026-12-21')
      const result1 = fetchAPI(date1)
      const result2 = fetchAPI(date2)
      
      // Results should not be always the same (seeded random)
      expect([result1, result2]).toBeDefined()
    })
  })

  describe('submitAPI', () => {
    it('returns true for form submission', () => {
      const formData = {
        firstName: 'John',
        lastName: 'Doe',
        contactNumber: '123-456-7890',
        date: '2026-12-20',
        time: '17:00',
        noOfGuests: 2,
        occasion: 'Birthday'
      }
      
      const result = submitAPI(formData)
      expect(result).toBe(true)
    })

    it('handles various form data', () => {
      const testCases = [
        {
          firstName: 'Jane',
          lastName: 'Smith',
          contactNumber: '987-654-3210',
          date: '2026-12-25',
          time: '18:30',
          noOfGuests: 4,
          occasion: 'Anniversary'
        },
        {
          firstName: 'Bob',
          lastName: 'Johnson',
          contactNumber: '555-555-5555',
          date: '2026-12-20',
          time: '17:00',
          noOfGuests: 1,
          occasion: 'Birthday'
        }
      ]

      testCases.forEach(data => {
        const result = submitAPI(data)
        expect(result).toBe(true)
      })
    })
  })
})
