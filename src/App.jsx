import { useState } from 'react';
import { useCourses } from './hooks/useCourses';
import CourseList from './components/courses/CourseList';
import SelectedSectionsList from './components/schedule/SelectedSectionsList';
import ScheduleTimetable from './components/schedule/ScheduleTimetable';
import CourseSearchBar from './components/courses/CourseSearchBar';
import logo from './assets/images/scheda-logo.png'
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
    <>
      <header className="bg-white border-b border-gray-200 fixed w-full">
        <div className="mx-auto flex max-w-[1350px]">
          <div>
            <img src={logo} className="w-[200px] h-[70px]" />
            <p></p>
          </div>
        </div>
      </header>
      <main className="lg:mx-5 max-w-7x1 p-6 flex justify-center">
        <div className="mt-14">
          <h1 className="mb-6 text-2x1 font-bold">Course Scheduler</h1>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div>
              <CourseSearchBar onSearch={setQuery} />
              <CourseList courses={filteredCourses} />
            </div>

            <ScheduleTimetable />
          </div>
        </div>
      </main>
    </>
  );
}

export default App
