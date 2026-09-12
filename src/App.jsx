import { useState } from 'react';
import { useCourses } from './hooks/useCourses';
import CourseList from './components/courses/CourseList';
import SelectedSectionsList from './components/schedule/SelectedSectionsList';
import ScheduleTimetable from './components/schedule/ScheduleTimetable';
import CourseSearchBar from './components/courses/CourseSearchBar';
import "./index.css"

function App() {
  const { courses, loading, error } = useCourses();
  const [query, setQuery] = useState("");

  if (loading) {
    return <p>Loading courses...</p>
  }

  if(error) {
    return <p>Failed to load courses...</p>
  }

  const filteredCourses = courses.map((course) => {
    const searchTerm = query.toLowerCase();

    const courseMatches = 
      course.code.toLowerCase().includes(searchTerm) ||
      course.title.toLowerCase().includes(searchTerm);

    {/*If no course matches, the one being searched for is a professor*/}
    const filteredSections = courseMatches 
      ? course.sections
      : course.sections.filter((section) => 
        section.instructor.toLowerCase().includes(searchTerm)
      );

    return {
      ...course,
      sections: filteredSections
    };
    
  }).filter((course) => course.sections.length > 0);

  return (
    <main>
      <h1>Course Scheduler</h1>

      <CourseSearchBar onSearch={setQuery} />

      <CourseList courses={filteredCourses} />

      <ScheduleTimetable />
    </main>
  );
}

export default App
