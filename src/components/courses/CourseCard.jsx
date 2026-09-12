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
                    <SectionRow
                        key={section.id}
                        section={section}
                    />
                })}
            </div>
        </div>
    )
}

export default CourseCard;