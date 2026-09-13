import CourseCard from "./CourseCard";

const CourseList = ({ courses }) => {
    return (
        courses.length > 0 ?
        <div>
            {courses.map((course) => {
                return(
                    <CourseCard
                        key={course.id}
                        course={course}
                    />
                );
            })}
        </div> :
        <div className="flex flex-col p-4 justify-center items-center mt-31">
            <span className="material-symbols-outlined text-gray-400 !text-[36px]">
                search
            </span>
            <h1 className="font-semibold">No courses found.</h1>
            <p className="font-gray-500 ">Try another search term or clear your filters.</p>
        </div>
    );
};

export default CourseList;