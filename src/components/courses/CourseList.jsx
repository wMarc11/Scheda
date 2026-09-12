import CourseCard from "./CourseCard";

const CourseList = ({ courses }) => {
    return (
        <div>
            {courses.map((course) => {
                return(
                    <CourseCard
                        key={course.id}
                        course={course}
                    />
                );
            })}
        </div>
    );
};

export default CourseList;