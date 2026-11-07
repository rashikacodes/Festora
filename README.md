# FESTORA – Event Discovery & Registration Platform

> **Discover. Celebrate. Connect.**  
> A premium, modern event discovery and registration platform built with React, Vite, and modern Web APIs.

[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![React Router](https://img.shields.io/badge/React_Router-6.28-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](https://opensource.org/licenses/MIT)

---

## 📌 Project Overview

**Festora** is an interactive college event management website designed to streamline how students discover, explore, and register for campus events. Built with a design-first approach, Festora combines high-performance client-side routing, responsive UI/UX, reactive local state management, and real-time event countdowns.

### Problem Statement
College campuses host dozens of technical symposiums, cultural nights, sports tournaments, and professional workshops throughout the year. Information is often scattered across physical posters, notice boards, social media groups, and messaging chats, resulting in missed deadlines and low student engagement.

### Objectives
1. **Centralized Discovery**: Provide an organized, searchable catalog of upcoming campus events.
2. **Category & Keyword Filtering**: Enable students to filter events by categories (*Technical, Cultural, Sports, Workshops, Competitions*) or search by event name, venue, and keywords.
3. **Zero-Friction Registration**: Deliver an intuitive registration form with real-time validation (including standard Indian mobile numbers and email formatting).
4. **Offline Persistence**: Store user registrations and theme preferences locally using the HTML5 `localStorage` API without requiring complex backend servers.
5. **Interactive Experience**: Real-time dynamic event countdown timers, theme toggling (Dark & Light modes), and fluid CSS animations.

---

## 🚀 Key Features

### 1. 🏠 Homepage
- **Hero Section**: High-impact headline, sub-headline, quick statistics, and direct Call-to-Action (CTA) buttons.
- **Featured Events**: Dynamic carousel-style showcase of highlighted events with direct access to event details.
- **Category Explorer**: Quick-browse category cards indicating the count of available events per vertical.
- **Platform Metrics**: Live statistics highlighting total events, participant reach, and campus presence.

### 2. 🔍 Explore & Filter Events
- **Live Search**: Instant client-side search across event titles, venues, and descriptions.
- **Multi-category Filtering**: Seamless switching across *All Events*, *Technical*, *Cultural*, *Sports*, *Workshops*, and *Competitions*.
- **Empty States**: Thoughtful fallback feedback when no search or filter criteria are matched.

### 3. 📄 Event Details & Real-Time Countdown
- Large high-resolution event banners with category tags.
- Detailed descriptions, eligibility, team size, registration fees, and prize breakdowns.
- Key highlights checklist for every event.
- **Dynamic Countdown Timer**: Live ticking countdown (Days, Hours, Minutes, Seconds) targeting the event date.

### 4. 📝 Registration & Validation
- Comprehensive registration form: Full Name, Email Address, Mobile Number, and Event Selection.
- **Form Validation**:
  - Enforces non-empty values.
  - Strict email format validation regex.
  - Strict Indian 10-digit mobile number validation (supporting `+91` or `0` prefix).
  - Duplicate registration detection (prevents registering twice for the same event with the same email).
- Automatic generation of a unique alphanumeric **Registration ID** (e.g., `FST-XXXXXXXX`).

### 5. ✅ Confirmation & "My Registrations"
- Instant confirmation screen displaying registration ID and event summary.
- Dedicated **My Registrations** dashboard displaying all booked tickets persisted in `localStorage`.

### 6. 🌓 Bonus Features (Mandatory Set)
- 🌓 **Dark / Light Mode**: Seamless theme switching with instant CSS variable transitions, persisted in `localStorage`.
- ⏱️ **Event Countdown Timer**: Active second-by-second countdown on event detail pages.
- ✨ **Fluid Micro-Animations**: Card hover elevations, subtle glassmorphism, gradient accents, and staggered entrance transitions.
- 💾 **Client-Side Persistence**: Complete registration records, ticket IDs, and theme state survive full page refreshes.

---

## 🎨 Color Palette & Design System

Festora features a modern dark aesthetic inspired by top-tier developer platforms:

| Role | Color Name | Hex Code | Visual Sample |
|---|---|---|---|
| Background Primary | Deep Navy | `#0B1020` | <img src="https://via.placeholder.com/15/0B1020/0B1020.png" width="15" /> `#0B1020` |
| Background Secondary | Dark Surface | `#151C30` | <img src="https://via.placeholder.com/15/151C30/151C30.png" width="15" /> `#151C30` |
| Primary Accent | Electric Purple | `#7957FF` | <img src="https://via.placeholder.com/15/7957FF/7957FF.png" width="15" /> `#7957FF` |
| Secondary Accent | Electric Blue | `#4C9AFF` | <img src="https://via.placeholder.com/15/4C9AFF/4C9AFF.png" width="15" /> `#4C9AFF` |
| Base Text | Snow White | `#F5F6FA` | <img src="https://via.placeholder.com/15/F5F6FA/F5F6FA.png" width="15" /> `#F5F6FA` |

---

## 🛠️ Technology Stack

- **Frontend Library**: React 18
- **Build Tool**: Vite 6
- **Routing**: React Router v6 (`react-router-dom`)
- **Icons**: Lucide React (`lucide-react`)
- **Styling**: Custom CSS3 with CSS Custom Properties (Theme Variables), Flexbox, CSS Grid, and Keyframe Animations
- **Storage**: Browser HTML5 `localStorage` API
- **Deployment Target**: Vercel / Netlify

---

## 📂 Project Directory Structure

```text
Festora/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── CategoryFilter.jsx   # Filter pills by event category
│   │   ├── Countdown.jsx        # Live days/hours/mins/secs countdown
│   │   ├── EventCard.jsx        # Reusable card component with meta
│   │   ├── Footer.jsx           # Multi-column footer
│   │   ├── Navbar.jsx           # Responsive glass navbar & mobile drawer
│   │   ├── SearchBar.jsx        # Instant search input
│   │   └── ThemeToggle.jsx      # Dark/Light toggle button
│   ├── context/
│   │   └── ThemeContext.jsx     # Global theme state provider
│   ├── data/
│   │   └── events.js            # 15+ curated sample demo events
│   ├── pages/
│   │   ├── About.jsx            # Platform background & university mission
│   │   ├── Confirmation.jsx     # Registration confirmation receipt
│   │   ├── Contact.jsx          # Campus contact information & form
│   │   ├── EventDetails.jsx     # Single event view + banner + countdown
│   │   ├── ExploreEvents.jsx    # Search and category catalog
│   │   ├── Home.jsx             # Hero, featured cards, categories, metrics
│   │   ├── MyRegistrations.jsx  # LocalStorage-backed ticket dashboard
│   │   └── Register.jsx         # Form with Indian phone & email validation
│   ├── utils/
│   │   ├── storage.js           # LocalStorage helpers & ID generator
│   │   └── validation.js        # Form validation rules
│   ├── App.jsx                  # Root layout & route configuration
│   ├── index.css                # CSS variables, animations, and typography
│   └── main.jsx                 # React root renderer
├── index.html                   # HTML5 template with Google Fonts
├── package.json                 # Project dependencies & scripts
├── vite.config.js               # Vite bundler configuration
└── README.md                    # Project documentation
```

---

## 💻 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18.0.0 or higher recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rashikacodes/Festora.git
   cd Festora
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Open in your browser:**
   Navigate to `http://localhost:5173` to experience Festora.

5. **Build for production:**
   ```bash
   npm run build
   ```
   The compiled assets will be ready in the `dist/` directory.

---

## 🚀 Deployment Instructions (Vercel)

1. Push your repository to GitHub:
   ```bash
   git push origin main
   ```
2. Log in to [Vercel](https://vercel.com).
3. Click **"Add New Project"** and import the `Festora` repository.
4. Leave framework preset as **Vite**.
5. Click **"Deploy"**. Vercel will automatically build and publish your site with HTTPS enabled.

---

## 🎓 Viva Questions & Answers (Evaluation Reference)

### Q1. What is the architecture of the Festora platform?
**Answer:** Festora is a Single Page Application (SPA) built using React.js and Vite. It utilizes client-side routing via React Router DOM to deliver instant page transitions without full browser reloads. Global themes are managed via React Context (`ThemeContext`), and event data along with registration state are handled client-side using `localStorage`.

### Q2. How is form validation implemented?
**Answer:** Form validation is handled purely with modular JavaScript utility functions in `src/utils/validation.js`. We validate:
1. Non-empty required fields.
2. Standard email regex matching.
3. Indian mobile numbers (`/^(?:\+91|91|0)?[6-9]\d{9}$/`).
4. Duplicate registrations by checking if a ticket already exists for the given email and event ID combination in `localStorage`.

### Q3. How does the Countdown Timer work without memory leaks?
**Answer:** The `Countdown` component calculates the delta between the event's target date and `Date.now()`. A `setInterval` ticks every 1,000 milliseconds to re-compute days, hours, minutes, and seconds. In React's `useEffect`, we return a cleanup function (`clearInterval(timer)`) to guarantee the interval is cleared when the component unmounts.

### Q4. How does Dark/Light theme switching persist?
**Answer:** The selected theme (`dark` or `light`) is stored in `localStorage` under `festora_theme`. On initial load, `ThemeContext` reads this value and applies the `data-theme` attribute to the root `<html>` element. All colors in `index.css` are parameterized using CSS Custom Properties (variables), ensuring instant color shifts across all components.

---

## 📄 License & Attribution

Developed by **Rashika Shah** ([@rashikacodes](https://github.com/rashikacodes)) for College Web Designing Examination.  
Demonstration event data and assets are used solely for educational demonstration purposes.
