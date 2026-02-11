# Portfolio Setup Guide

## Features Added

### 1. **Dark/Light Theme Switch**
- Toggle between dark and light themes using the sun/moon icon in the header
- Theme preference is saved in localStorage and persists across sessions
- Smooth transitions between themes with spinning icon animation
- Fully responsive theme toggle on both desktop and mobile

### 2. **Email Contact Form**
- Contact form sends emails to `hishmatdrawarh786@gmail.com`
- Automatic reply sent to the sender
- Loading state with visual feedback
- Success/error messages displayed to user
- Clean, styled email templates with HTML formatting

### 3. **Resume Download**
- Resume link added to header navigation (desktop & mobile)
- Download button in hero section
- Resume file located at `/public/resume.pdf`

### 4. **Enhanced Animations**
The portfolio now features multiple animations:
- **fadeInUp**: Elements fade in while sliding up from below
- **fadeInLeft/fadeInRight**: Elements slide in from sides
- **slideInDown**: Header animations
- **scaleIn**: Items grow into view
- **pulse-glow**: Subtle pulsing effect for badges
- **float**: Gentle floating motion for visual elements
- **gradient-shift**: Background gradient animations
- Staggered animation delays for sequential reveals

### 5. **Styled Components**
- All animations use Tailwind CSS utility classes
- Smooth hover effects with scale and translate transforms
- Consistent transitions across all interactive elements

## Environment Variables Setup

### For Email Functionality
To enable the contact form email feature, add these environment variables:

```bash
EMAIL_USER=hishmatdrawarh786@gmail.com
EMAIL_PASSWORD=your_app_password_here
```

**Note**: For Gmail, generate an App Password:
1. Go to myaccount.google.com
2. Click Security in the left menu
3. Enable 2-Step Verification if not already enabled
4. Create an App Password for "Mail" and "Windows Computer"
5. Use this password as `EMAIL_PASSWORD`

## Installation & Running

```bash
# Install dependencies
npm install
# or
pnpm install

# Set up environment variables
# Create a .env.local file in the root directory with:
# EMAIL_USER=your_email@gmail.com
# EMAIL_PASSWORD=your_app_password

# Run development server
npm run dev
# or
pnpm dev

# Open http://localhost:3000 in your browser
```

## File Structure

```
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.js          # Email API endpoint
│   ├── layout.tsx                 # Root layout with ThemeProvider
│   ├── globals.css                # Global styles with animations
│   └── page.jsx                   # Main portfolio page
├── components/
│   ├── Header.jsx                 # Navigation with theme toggle
│   ├── Hero.jsx                   # Hero section with animations
│   ├── Skills.jsx                 # Skills showcase
│   ├── Experience.jsx             # Experience & education
│   ├── Projects.jsx               # Featured projects
│   ├── Contact.jsx                # Contact form with email
│   ├── Footer.jsx                 # Footer
│   ├── ThemeProvider.jsx          # Theme context provider
│   └── ThemeToggle.jsx            # Theme toggle button
├── public/
│   └── resume.pdf                 # Resume file
└── package.json
```

## Key Features Breakdown

### Theme System
- Uses React Context API for theme management
- Stores preference in localStorage
- Applies theme to entire document
- Supports light and dark mode CSS variables

### Contact Form
- Client-side validation
- Sends via `/api/contact` endpoint
- Uses nodemailer for email delivery
- Auto-reply sent to form submitter
- Error handling with user-friendly messages

### Animations
All animations are GPU-accelerated using CSS:
- Used Tailwind's animation utilities
- Staggered delays for sequential effects
- Smooth transitions on hover
- Performance optimized with transform and opacity changes

## Customization

### Modify Colors
Edit the CSS custom properties in `app/globals.css`:
```css
:root {
  --primary: 220 90% 56%;      /* Blue */
  --secondary: 280 85% 45%;    /* Purple */
  --accent: 168 76% 42%;       /* Teal */
}

.dark {
  /* Dark theme colors */
}
```

### Adjust Animations
Update animation timing in `app/globals.css`:
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);  /* Adjust distance */
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;  /* Adjust duration */
}
```

### Update Email Address
Modify in `/app/api/contact/route.js`:
```javascript
to: 'hishmatdrawarh786@gmail.com',  // Change this
```

## Troubleshooting

### Email Not Sending
1. Check environment variables are set correctly
2. Verify Gmail App Password is correct
3. Check if 2-Step Verification is enabled
4. Check browser console for errors

### Theme Not Persisting
- Clear localStorage and refresh
- Check if localStorage is enabled in browser
- Verify ThemeProvider is wrapping all components

### Animations Not Smooth
- Check if hardware acceleration is enabled
- Verify CSS animations are not conflicting
- Check browser DevTools Performance tab
- Ensure animation-delay calculations are correct

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

All modern browsers with CSS Grid, Flexbox, and CSS Variables support.

## Performance Notes

- Animations use GPU-accelerated properties (transform, opacity)
- Theme toggle uses localStorage (no database needed)
- Email API is serverless (Next.js API Route)
- Resume is a static PDF file

## Future Enhancements

- Add email templates customization
- Integrate with email service (SendGrid, Mailgun)
- Add form validation with Zod
- Add rate limiting to contact API
- Implement analytics
- Add more animation variants
- Support for multiple resume versions

## Support

For issues or questions, refer to:
- Next.js Documentation: https://nextjs.org
- Tailwind CSS: https://tailwindcss.com
- Nodemailer: https://nodemailer.com
