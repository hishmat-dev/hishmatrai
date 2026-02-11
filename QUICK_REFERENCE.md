# Quick Reference Guide

## 🚀 5-Minute Setup

```bash
# 1. Install packages
npm install

# 2. (Optional) Set up email:
# - Create .env.local
# - Add EMAIL_USER and EMAIL_PASSWORD
# - See .env.example for instructions

# 3. Run
npm run dev

# 4. Open
# http://localhost:3000
```

---

## 🎨 What's Where

### Theme Toggle
**Location**: Header (top right corner)
**Click**: Sun/Moon icon
**Result**: Entire site changes color
**Effect**: Smooth spinning animation

### Contact Form
**Location**: Bottom of page (#contact section)
**Fill Out**: Name, Email, Message
**Click**: Send Message button
**Result**: Email sent to hishmatdrawarh786@gmail.com
**Bonus**: Auto-reply sent to form submitter

### Resume Download
**Location 1**: Header navigation (desktop)
**Location 2**: Hero section (main content)
**Click**: "Download Resume" or "Resume" link
**Result**: PDF downloads to computer

### Animations
**Where**: Every section
**How**: Automatic when page loads
**Duration**: 0.5-0.6s per element
**Result**: Professional entrance effects

---

## ⚙️ Configuration Files

### `.env.local` (Create this file)
```bash
EMAIL_USER=hishmatdrawarh786@gmail.com
EMAIL_PASSWORD=your_app_password
```

### `app/globals.css`
Contains all colors and animations.
Edit here to customize:
- Theme colors
- Animation timing
- Animation delays

### `components/` folder
All components use animations.
Edit here to:
- Change styling
- Add/remove animations
- Modify content

---

## 🎯 Component Quick Map

```
Header
├─ Logo
├─ Navigation (5 links)
├─ Resume Download ← NEW
├─ Theme Toggle ← NEW
└─ Mobile Menu

Hero
├─ Welcome Badge (animated)
├─ Heading (animated)
├─ Description (animated)
├─ Buttons (including Resume) ← NEW
├─ Social Links (animated)
└─ Visual Elements (blob animation)

Skills
├─ Frontend
├─ Backend
├─ Tools
└─ Concepts

Experience & Education
├─ Professional Experience
└─ Education Details

Projects
├─ 4 Featured Projects
└─ Tech Stack Info

Contact ← UPDATED WITH EMAIL
├─ Contact Form ← SENDS EMAILS
├─ Contact Info
└─ Social Links

Footer
└─ Links & Credits
```

---

## 🎬 Animation Classes

### Use in Components
```jsx
className="animate-fade-in-up"
className="animate-scale-in"
className="animate-float"
// etc.
```

### With Delay
```jsx
style={{ animationDelay: '0.2s' }}
className="animate-fade-in-up"
```

### Available
- `animate-fade-in-up`
- `animate-fade-in-left`
- `animate-fade-in-right`
- `animate-slide-in-down`
- `animate-scale-in`
- `animate-blob`
- `animate-float`
- `animate-pulse-glow`

---

## 🔧 Common Customizations

### Change Primary Color
**File**: `app/globals.css`
**Find**: `--primary: 220 90% 56%;`
**Change**: `--primary: 0 100% 50%;` (for red, for example)

### Update Email Recipient
**File**: `app/api/contact/route.js`
**Find**: `to: 'hishmatdrawarh786@gmail.com'`
**Change**: `to: 'your-email@gmail.com'`

### Replace Resume
**File**: `public/resume.pdf`
**Action**: Replace with your PDF
**Done**: Links automatically use new file

### Speed Up Animations
**File**: `app/globals.css`
**Find**: `animation: fadeInUp 0.6s ease-out;`
**Change**: `0.6s` to `0.3s` (faster)

### Slow Down Animations
**Change**: `0.6s` to `1s` (slower)

---

## 🌓 Theme Colors

### Light Mode
```
Background: Light gray (#f8fafc)
Text: Dark blue (#1e293b)
Primary: Blue (#3b82f6)
Accent: Teal (#06b6d4)
```

### Dark Mode
```
Background: Dark slate (#0f172a)
Text: Light gray (#f1f5f9)
Primary: Blue (#3b82f6)
Accent: Teal (#06b6d4)
```

---

## 📧 Email Setup - Step by Step

### 1. Enable 2-Step Verification
- Go to myaccount.google.com
- Click Security
- Find 2-Step Verification
- Enable it

### 2. Create App Password
- In Security section
- Find "App passwords"
- Select Mail + Windows Computer
- Google gives you 16-character password
- Copy it

### 3. Create `.env.local`
In project root, create file named `.env.local`:
```
EMAIL_USER=hishmatdrawarh786@gmail.com
EMAIL_PASSWORD=your_16_char_password
```

### 4. Test
- Fill out contact form
- Click Send
- Check your inbox!

---

## ✨ Feature Status

| Feature | Status | Where |
|---------|--------|-------|
| Theme Toggle | ✅ Active | Header |
| Email Contact | ✅ Ready | Needs setup |
| Resume Download | ✅ Active | Header + Hero |
| Animations | ✅ Active | Everywhere |
| Mobile Responsive | ✅ Yes | All sections |
| Dark Mode | ✅ Works | Theme toggle |

---

## 🚨 Common Issues & Quick Fixes

| Issue | Solution |
|-------|----------|
| Theme not persisting | Clear localStorage, refresh page |
| Emails not sending | Check .env.local file exists with correct credentials |
| Animations choppy | Ensure browser has hardware acceleration enabled |
| Resume won't download | Check file exists at `/public/resume.pdf` |
| Colors look wrong | Verify dark/light mode toggle and globals.css |

---

## 📱 Responsive Breakpoints

```
Mobile: < 768px
Tablet: 768px - 1024px
Desktop: > 1024px
```

All features work on all sizes!

---

## 🎓 File Purposes Summary

```
SETUP_GUIDE.md          → Read this first for detailed setup
FEATURES.md             → Read this for feature explanations
README_UPDATES.md       → Overview of all changes
QUICK_REFERENCE.md      → This file - quick answers
IMPLEMENTATION_CHECKLIST.md → What was done

components/
  ThemeProvider.jsx     → Theme management logic
  ThemeToggle.jsx       → Theme button component
  Contact.jsx           → Email contact form

app/
  api/contact/route.js  → Email endpoint
  globals.css           → Colors & animations
  layout.tsx            → Page wrapper

public/
  resume.pdf            → Your resume file
```

---

## 💡 Pro Tips

1. **Keyboard Shortcut for Theme**: No shortcut, but toggle button is always visible
2. **Email Notifications**: Gmail notifies you of new submissions automatically
3. **Mobile Testing**: Use Chrome DevTools to test mobile view
4. **Animation Performance**: Animations use GPU (very efficient)
5. **Backup Emails**: Consider setting up email forwarding

---

## 🔗 Useful Links

- Gmail App Passwords: https://myaccount.google.com/security
- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com
- Nodemailer: https://nodemailer.com

---

## 📞 Still Need Help?

1. **Setup Issues** → Check `SETUP_GUIDE.md`
2. **Feature Questions** → Check `FEATURES.md`
3. **Technical Details** → Check `IMPLEMENTATION_CHECKLIST.md`
4. **Quick Answers** → You're reading it!

---

## ✅ Post-Setup Checklist

- [ ] Ran `npm install`
- [ ] Started dev server with `npm run dev`
- [ ] Tested theme toggle (sun/moon button)
- [ ] (Optional) Set up email with .env.local
- [ ] Tested contact form (if email is set up)
- [ ] Tested resume download button
- [ ] Checked animations on page load
- [ ] Tested on mobile (Chrome DevTools)
- [ ] Updated resume file
- [ ] Customized colors to match brand

---

**That's it! You're all set!** 🎉

All features are ready to use. Enjoy your modern, animated portfolio! 🚀
