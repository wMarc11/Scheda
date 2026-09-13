import { useState, useMemo } from 'react';
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
  const [day, setDay] = useState("All");

  const filteredCourses = useMemo(() => {
    return courses.map((course) => {
      const searchTerm = query.toLowerCase();

      const courseMatches = 
        course.code.toLowerCase().includes(searchTerm) ||
        course.title.toLowerCase().includes(searchTerm);

      const filteredSections = course.sections.filter((section) => {
        {/*If no course matches, the one being searched for is a professor*/}
        const matchesSearch = courseMatches
          ? true
          : section.instructor.toLowerCase().includes(searchTerm);

        const matchesDay = day === "All" ||
          section.schedule.some((schedule) => schedule.day.toLowerCase() === day);

          return matchesSearch && matchesDay;
      });

      return {
        ...course,
        sections: filteredSections
      };
      
    }).filter((course) => course.sections.length > 0)
  }, [courses, query, day]);

  if (loading) {
    return <p>Loading courses...</p>
  }

  if(error) {
    return <p>Failed to load courses...</p>
  }

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
        <div className="mt-24">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-4 sm:p-6 max-w-[700px] gap-7 flex flex-col">
              <h1 className="text-[16px] md:text-[22px] font-bold">Find your classes</h1>
              <CourseSearchBar onSearch={setQuery} onDayChange={setDay} />
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
