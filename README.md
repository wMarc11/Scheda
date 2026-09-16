# Scheda

Scheda is an application for browsing a course catalogue and building a personal weekly class schedule. Students can search courses or instructors, filter sections by day or selection status, choose a section, and see the result on a Monday–Saturday timetable.

### Features

- Searches by course code, course title, or instructor.
- Filters sections by meeting/class day and whether they are added or to the schedule.
- Adds, removes, or replaces a selected section. Only one section is kept per course.
- Displays selected meetings in a time-positioned weekly timetable.
- Shows the selected-course count and total units.
- Uses a responsive desktop/mobile layout, with a mobile course/schedule switcher and a back-to-top button.

### Technology

- React 19
- Vite 8
- Tailwind CSS 4
- ESLint

### Requirements

- Node.js 20.19+ or 22.12+
- npm

### Installation and setup

1. Clone or download the project, then open a terminal in the project folder.
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

### Available commands

```bash
npm run dev         # Start the development server
npm run build       # Create a production build
npm run preview     # Preview the production build locally
npm run lint        # Check code quality with ESLint
```

### Quality checks

The project passes the following checks:

```bash
npm run lint
npm run build
```

The production build was audited with Lighthouse using `npm run preview` in an Incognito browser session for both desktop and mobile.

- Performance: 100
- Accessibility: 100
- Best Practices: 100
- SEO: 92

### Project structure

```text

src/
├── api/coursesApi.js               # Local course-data access point
├── assets/images/                  # Application branding
├── components/
│   ├── courses/                    # Search, course cards, and section controls
│   ├── icons/                      # Local reusable SVG icons
│   └── schedule/                   # Timetable and meeting events
├── context/
│   ├── ScheduleContext.jsx         # Shared context definition
│   └── ScheduleProvider.jsx        # Selected-section state and actions
├── data/courses.json               # Mock course catalogue
├── hooks/
│   ├── useCourses.jsx              # Course-loading hook
│   └── useSchedule.jsx             # Accesses schedule state and actions.
│   └── useDebounce.jsx             # Delays updates until input stops changing
├── pages/                          # Course, schedule, and responsive views
└── utils/                          # Shared utilities, colors, and timetable constants
```

### Documentation

See [Technical Rationale](./Technical%20Rationale.md) for implementation decisions, responsive design choices, performance considerations, and future improvements.