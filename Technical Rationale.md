# Technical Rationale

## Implementation Approach

Scheda is currently structured around clear  separation of responsibilities: data access, shared schedule state. page-level state, reusable UI components, and utility logic.

The course data is currently loaded from a local JSON through `coursesApi.js`. I kept the data access behind this module so that the UI does not directly depend on the JSON file and can later be connected to a backend API with minimal changes needed. I also designed the `useCourses` hook which owns the course-loading flow and exposes the `courses`, `loading`, and `error` states to the application.

Schedule state is currently separated into three focused modules:
- `ScheduleContext` defines the shared context.
- `ScheduleProvider` owns selected-section state and the functions that update it.
- `useSchedule` provides a reusable hook for components that need schedule data.

I separated it this way to keep Fast Refresh linting valid while also making the responsibilities easier to understand and maintain. Basically, the provider is the single source of truth for selected sections. So, when a user adds a section, any previously selected section from the same course is replaced. I designed it this way so that it still enforces the one-section-per-course rule consistently instead of repeating the logic multiple times in multiple components.

Search, day filtering, and added/not-added filtering are only local to `CoursesPage` because they only affect the course-browsing view. I also memoized the the resulting course list with `useMemo` to avoid unnecessary filtering work when unrelated state changes which makes the search and filters more optimized.

The timetable or the weekly schedule is built from reusable components and utilities. `timeTable.js` centralizes the timetable days, displayed times, start time, and positioning values. I decided to put it there so it would be easy to adjust the values if needed. `time.js` converts `HH:MM` strings into minutes and identifies the day column. `TimetableEvent` uses those values to calculate each meeting's position and duration.

## Responsive and usability design choices

On larger screens like desktop, laptop, and some tablets/iPads, Scheda uses a two-column layout: the course catalogue is shown beside the weekly timetable. I designed it this way so that it would be more convenient because it let the students see the result of adding or replacing a section without losing sight of the available choices. The timetable also remains sticky on larger screens so it always stay visible while browsing through a long list of courses.

However, on mobile phones and smaller tablets/iPads, this isn't the case because displaying both panels side by side would make the content very difficult to read and interact with. Instead, I designed it so that the interface shows one panel at a time, using a sticky `View Courses / View Schedule` switcher buttons. This preserves readable controls and a usable and readable time window on narrow screens. A back-to-top button will also popup once the users have scrolled enough just in case they want to go back to top immediately.

The course cards also group related information such as the course code, title, units, sections, instructor, meeting, and room. The selected sections receive clear visual feedback, and the same course color is used in both the section list and the timetable to help users connect a selected section with its scheduled meetings. However, the course colors are currently hardcoded from `courseColors.js` and in a larger application, they could just instead be generated deterministically or directly supplied by the course data.

The search field and filter controls include accessible labels. Native HTML inputs, selects, and buttons are also used so users can navigate between controls with the keyboard and operate them using standard browser behavior, such as Tab, arrow keys, Enter, and Space.

## Filter scope

The application currently provides three filters:
- `Search by course or instructor` helps users to locate a known course code, course title, or professor
- `All courses / Added / Not Added` lets the students review selections or focus on available sections. This can be particularly useful if a user wants to examine their current added courses and also remove them easily or check other courses/sections they haven't added.
- `Day` filters section by their meeting / class day which helps users to compare options against weekly availability.

Additional filters were intentionally not added because they would increase the interface complexity without substantially  improving the current catalogue.

## Performance validation

The application was audited using Lighthouse against Vite’s production preview build (`npm run build` followed by `npm run preview`) in an Incognito browser session. The production audit achieved scores of 100 for Performance, Accessibility, and Best Practices, with an SEO score of 92.

To reduce initial loading work, the application uses a compressed WebP logo and locally defined inline SVG icons. This removes the external Material Symbols font request and avoids downloading an icon font when only a small number of icons are needed.

## Performance considerations

For the current catalogue size, React state, Context, and `useMemo` already provide an appropriate level of complexity. Filtering is derived from the source course data instead of being stored separately which avoids duplicated state and keeps the results predictable.

However, if the catalogue became significantly larger, the possible next steps would include using a `Set` of selected section IDs to make checking whether a section is selected faster than repeatedly searching the selected-sections array, implement debouncing search input so that it won't filter after every single keypress, and virtualizing the course list instead of displaying them all at once.

## Current limitations and future work

- The catalogue uses mock JSON rather than a backend or live enrollment data.
- Selected sections are stored only in memory and reset on page refresh.
- The app does not yet detect schedule conflicts, prerequisites, section capacity, or generate schedules automatically.
- There are no automated tests yet.

Future improvements could include local storage or account-based persistence, conflict feedback, a real catalogue API, and automated tests for filtering.