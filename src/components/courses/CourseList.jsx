import CourseCard from "./CourseCard";
import { SearchIcon } from "../icons/Icons";

const CourseList = ({ courses }) => {
    return (
        courses.length > 0 ?
        <div className="flex flex-col gap-5 max-h-none overflow-y-auto">
            {courses.map((course) => {
                return(
                    <CourseCard
                        key={course.id}
                        course={course} 
                    />
                );
            })}
        </div> :
        <div className="flex flex-col p-4 justify-center items-center">
            <SearchIcon className="h-9 w-9 text-gray-400" />
            <h1 className="font-semibold">No courses found.</h1>
            <p className="text-gray-500">Try another search term or clear your filters.</p>
        </div>
    );
};

export default CourseList;
