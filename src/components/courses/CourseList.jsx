const CourseList = ({ courses }) => {
    return (
        <div>
            {courses.map((course) => {
                <CourseCard
                    key={course.id}
                    course={course}
                />
            })}
        </div>
    );
};