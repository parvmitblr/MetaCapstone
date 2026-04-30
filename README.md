# Little Lemon Restaurant - Booking Web Application

A modern, responsive web application for restaurant reservations built with React and Vite. This project demonstrates full-stack development practices including component-based architecture, form validation, accessibility standards, and comprehensive testing.

## 🎯 Project Overview

Little Lemon is a Mediterranean restaurant web application featuring:
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Restaurant Showcase**: Hero section, menu highlights, and customer testimonials
- **Booking System**: Fully functional reservation booking form with validation
- **Accessibility**: WCAG 2.1 compliant with semantic HTML and ARIA attributes
- **Testing**: Comprehensive unit tests with Vitest and React Testing Library
- **Error Handling**: Graceful error management with user-friendly messages

## ✨ Key Features

### 1. **Home Page**
- Attractive hero section showcasing the restaurant
- Weekly specials menu display
- Customer testimonials section
- About restaurant description

### 2. **Booking System**
- Date and time selection with availability
- Guest count (1-10) selection
- Occasion type selection (Birthday/Anniversary)
- Real-time form validation
- Error messages for each field
- Confirmation page after successful booking

### 3. **Responsive Navigation**
- Desktop navigation menu
- Mobile hamburger menu
- Keyboard navigation support
- Accessible navigation with ARIA labels

### 4. **Comprehensive Testing**
- Unit tests for all components
- API function tests
- Form submission tests
- Accessibility validation tests

## 🛠️ Technology Stack

- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite 8.0.10
- **Routing**: React Router 6.8.1
- **Testing**: Vitest 1.0.4 + React Testing Library 14.1.2
- **Icons**: React Icons 4.7.1
- **Styling**: CSS3 with responsive media queries
- **Node.js Version**: 14+ recommended

## 📋 Prerequisites

Before you begin, ensure you have the following:
- Node.js (v14 or higher)
- npm (v6 or higher)
- Git
- A modern web browser

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd MetaCapstone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🧪 Testing

### Run Tests
```bash
# Run all tests
npm test

# Run tests in UI mode
npm test:ui

# Run tests in watch mode
npm test -- --watch
```

### Test Coverage

Tests are provided for:
- **BookingForm Component**: Form rendering, input handling, validation, submission
- **Header Component**: Logo display, navigation integration, semantic structure
- **Footer Component**: Navigation links, contact information, semantic structure
- **HomePage Component**: Section rendering, content structure
- **API Functions**: Data fetching, error handling, validation

Test files:
- `src/components/BookingForm.test.jsx`
- `src/components/Header.test.jsx`
- `src/components/Footer.test.jsx`
- `src/pages/HomePage.test.jsx`
- `src/api.test.js`

## 📝 Form Validation

The booking form includes comprehensive validation:

| Field | Rules | Example |
|-------|-------|---------|
| First Name | 2+ characters | John |
| Last Name | 2+ characters | Doe |
| Contact Number | Format: XXX-XXX-XXXX | 123-456-7890 |
| Date | Future dates only | 2026-12-20 |
| Time | Must select available slot | 17:00 |
| Guests | 1-10 people | 2 |
| Occasion | Birthday/Anniversary | Birthday |

**Error Messages**: Each field displays specific, actionable error messages to guide users.

## ♿ Accessibility Features

The application follows WCAG 2.1 accessibility guidelines:

- **Semantic HTML**: Proper use of `<header>`, `<footer>`, `<section>`, `<nav>`, `<main>`
- **ARIA Labels**: `aria-label`, `aria-describedby`, `aria-expanded` attributes
- **Heading Hierarchy**: Proper `<h1>`, `<h2>`, `<h3>` structure
- **Form Accessibility**: Labels associated with inputs, error descriptions
- **Keyboard Navigation**: Full keyboard support for navigation and forms
- **Focus Management**: Visible focus indicators for keyboard users
- **Alt Text**: Descriptive alt text for all images
- **Color Contrast**: WCAG AA compliant color contrasts

## 📁 Project Structure

```
MetaCapstone/
├── public/
│   └── images/              # Restaurant images
├── src/
│   ├── components/          # Reusable React components
│   │   ├── BookingForm.jsx
│   │   ├── BookingForm.test.jsx
│   │   ├── Header.jsx
│   │   ├── Header.test.jsx
│   │   ├── Footer.jsx
│   │   ├── Footer.test.jsx
│   │   ├── Hero.jsx
│   │   ├── Menu.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Description.jsx
│   │   └── Nav.jsx
│   ├── pages/               # Page components
│   │   ├── HomePage.jsx
│   │   ├── HomePage.test.jsx
│   │   ├── BookingPage.jsx
│   │   └── ConfirmedBooking.jsx
│   ├── test/                # Test configuration
│   │   └── setup.js
│   ├── api.js               # API functions
│   ├── api.test.js
│   ├── App.jsx              # Main app component
│   ├── App.css              # Global styles
│   └── main.jsx             # Entry point
├── package.json
├── vite.config.js
├── vitest.config.js
├── README.md
└── index.html
```

## 🎨 Component Documentation

### BookingForm Component
- **Purpose**: Main form for restaurant reservations
- **State Management**: React hooks (useState) for form data and errors
- **Validation**: Real-time field validation with error messages
- **Accessibility**: ARIA labels and error descriptions for screen readers

### Header Component
- **Purpose**: Navigation bar and branding
- **Features**: Responsive navigation, mobile menu toggle
- **Accessibility**: Semantic header, navigation landmarks

### Footer Component
- **Purpose**: Site-wide footer with links and contact info
- **Features**: Navigation links, contact information, social media
- **Accessibility**: Semantic footer, proper link structure

### Hero Component
- **Purpose**: Main landing section with call-to-action
- **Features**: Restaurant intro, image, reservation button

### Menu Component
- **Purpose**: Display weekly specials
- **Features**: Product cards with description and pricing

### Testimonials Component
- **Purpose**: Display customer reviews
- **Features**: Review cards with ratings

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm test` - Run all tests
- `npm test:ui` - Run tests with UI dashboard
- `npm run lint` - Run ESLint code quality checks

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📱 Responsive Design

The application is fully responsive with media queries for:
- **Mobile**: < 600px
- **Tablet**: 600px - 1024px
- **Desktop**: > 1024px

## ⚙️ Configuration

### Vite Configuration (`vite.config.js`)
- React plugin integration
- Vitest configuration with jsdom environment
- HMR (Hot Module Replacement) settings

### ESLint Configuration (`eslint.config.js`)
- React and React Hooks rules
- Best practices enforcement

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Use a different port
npm run dev -- --port 3000
```

### Dependencies Issues
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Tests Failing
```bash
# Clear Vitest cache
npm test -- --clearCache
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The `dist/` folder contains the optimized production build ready for deployment to services like:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Firebase Hosting

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [React Router Documentation](https://reactrouter.com)
- [Vitest Documentation](https://vitest.dev)
- [WCAG Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## 📄 Code Quality & Best Practices

The project follows these practices:

1. **Component Structure**
   - Single responsibility per component
   - Props validation
   - Meaningful component names

2. **Code Comments**
   - JSDoc comments for functions
   - Inline comments for complex logic
   - Component purpose documentation

3. **Error Handling**
   - Try-catch blocks for API calls
   - User-friendly error messages
   - Proper error logging

4. **Testing**
   - Unit tests for all components
   - API function validation
   - Edge case coverage

5. **Accessibility**
   - WCAG 2.1 AA compliance
   - Semantic HTML structure
   - Keyboard navigation support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For issues or questions:
1. Check existing GitHub issues
2. Create a new issue with detailed description
3. Include screenshots or error messages

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

## ✅ Completion Checklist

- [x] Responsive UI/UX Design
- [x] Accessibility Tags & Semantic HTML
- [x] Unit Tests (Vitest + React Testing Library)
- [x] Form Validation with Error Messages
- [x] Responsive Design & Mobile Support
- [x] Git Repository & Commits
- [x] Code Comments & Documentation
- [x] Error Handling & Edge Cases
- [x] Clear Documentation & Setup Instructions
- [x] Proper Project Structure

---

**Last Updated**: April 30, 2026

**Version**: 1.0.0

**Status**: ✅ Complete and Production Ready
