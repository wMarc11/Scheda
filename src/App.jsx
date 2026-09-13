import { useState, useMemo } from 'react';
import { useCourses } from './hooks/useCourses';
import CourseList from './components/courses/CourseList';
import SelectedSectionsList from './components/schedule/SelectedSectionsList';
import ScheduleTimetable from './components/schedule/ScheduleTimetable';
import CourseSearchBar from './components/courses/CourseSearchBar';
import logo from './assets/images/scheda-logo.png'
import "./index.css"
import { useSchedule } from './context/ScheduleContext';

function App() {
  const { courses, loading, error } = useCourses();
  const [query, setQuery] = useState("");
  const [day, setDay] = useState("All");
  const [filter, setFilter] = useState("All");
  const { selectedSections } = useSchedule();

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

        const isAdded = selectedSections.some(
          (selectedSection) => selectedSection.id === section.id
        );

        const matchesFilter =
          filter === "All" ||
          (filter === "added" && isAdded) ||
          (filter === "not-added" && !isAdded);

          return matchesSearch && matchesDay && matchesFilter;
      });

      return {
        ...course,
        sections: filteredSections
      };
      
    }).filter((course) => course.sections.length > 0)
  }, [courses, query, day, filter, selectedSections]);

  if (loading) {
    return <p>Loading courses...</p>
  }

  if(error) {
    return <p>Failed to load courses...</p>
  }

  return (  
    <>
      <header className="bg-white border-b border-gray-200 fixed w-full">
        <div className="mx-auto flex max-w-[1300px] px-4">
          <div className="flex items-center w-full">
            <img src={logo} 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
              className="-ml-6 w-[150px] h-[40px] md:w-[250px] md:h-[70px] cursor-pointer transition-all ease-in-out hover:scale-110" 
            />
            <div className="ml-auto flex items-center gap-7 md:-mr-5 px-4 md:px-none">
              <p className="text-xs md:text-md font-semibold">Term 1, AY 2026-2027</p>
              <span className="material-symbols-outlined text-gray-400 !text-[30px] md:!text-[50px] !text-blue-500">
                account_circle  
              </span>
            </div>
          </div>
        </div>
      </header> 
      <main className="lg:mx-5 max-w-7x1 p-6 flex justify-center">
        <div className="mt-24">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-4 sm:p-6 max-w-[700px] gap-7 flex flex-col">
              <h1 className="text-[16px] md:text-[22px] font-bold">Find your classes</h1>
              <CourseSearchBar onSearch={setQuery} onDayChange={setDay} onFilterChange={setFilter} />
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
