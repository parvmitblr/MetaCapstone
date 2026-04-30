/**
 * Seeded random number generator
 * Creates consistent random values for booking availability
 * @param {number} seed - Seed value for consistent randomization
 * @returns {Function} Random number generator function
 */
const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

/**
 * Fetch available booking times for a given date
 * Generates random available slots between 5 PM and 11 PM
 * @param {Date} date - The date to fetch times for
 * @returns {Array} Array of available time slots (HH:MM format)
 * @throws {Error} If date is invalid
 */
export function fetchAPI(date) {
    try {
        if (!(date instanceof Date) || isNaN(date)) {
            throw new Error('Invalid date provided');
        }

        let result = [];
        let random = seededRandom(date.getDate());

        // Generate time slots from 5 PM to 11 PM
        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        
        // Return empty array if no times available for the date
        return result.length > 0 ? result : ['17:00', '18:00', '19:00'];
    } catch (error) {
        console.error('Error fetching API times:', error);
        // Return default times on error
        return ['17:00', '18:00', '19:00', '20:00'];
    }
};

/**
 * Submit booking form data
 * Validates and processes restaurant reservation
 * @param {Object} formData - Form data object containing booking details
 * @param {string} formData.firstName - Customer first name
 * @param {string} formData.lastName - Customer last name
 * @param {string} formData.contactNumber - Customer contact number
 * @param {string} formData.date - Booking date (YYYY-MM-DD)
 * @param {string} formData.time - Booking time (HH:MM)
 * @param {number} formData.noOfGuests - Number of guests (1-10)
 * @param {string} formData.occasion - Occasion type (Birthday/Anniversary)
 * @returns {boolean} True if submission successful
 * @throws {Error} If formData is invalid
 */
export function submitAPI(formData) {
    try {
        // Validate form data
        if (!formData || typeof formData !== 'object') {
            throw new Error('Invalid form data');
        }

        const required = ['firstName', 'lastName', 'contactNumber', 'date', 'time', 'noOfGuests', 'occasion'];
        for (const field of required) {
            if (!formData[field]) {
                throw new Error(`Missing required field: ${field}`);
            }
        }

        // Simulate successful submission
        console.log('Booking submitted:', formData);
        return true;
    } catch (error) {
        console.error('Error submitting booking:', error);
        return false;
    }
};