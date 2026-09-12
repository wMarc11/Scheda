import SectionRow from './SectionRow';

const CourseCard = ({ course }) => {
    return(
        <div>
            <div>
                <div>
                    {/*Icon*/}
                </div>
                <div>
                    <p>{course.code}</p>
                    <p>{course.title}</p>
                </div>
                <span>{course.units} units</span>
            </div>
            <div>
                {course.sections.map((section) => {
                    return(
                        <SectionRow
                            key={section.id}
                            section={section}
                            courseId={course.id}
                            units={course.units}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default CourseCard;