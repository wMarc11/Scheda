import { useState, useMemo } from "react";
import CourseSearchBar from "../components/courses/CourseSearchBar";
import CourseList from "../components/courses/CourseList";
import { useSchedule } from '../hooks/useSchedule';

const CoursesPage = ({ courses }) => {
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

    return(
        <div className="w-full rounded-xl border border-gray-200 bg-white p-4 sm:p-6 lg:max-w-[700px] gap-7 flex flex-col">
            <h1 className="text-[16px] md:text-[22px] font-bold">Find your classes</h1>
            <CourseSearchBar onSearch={setQuery} onDayChange={setDay} onFilterChange={setFilter} />
            <CourseList courses={filteredCourses} />
        </div>
    );
};

export default CoursesPage;