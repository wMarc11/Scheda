import SectionRow from './SectionRow';
import { getCourseColor } from '../../utils/courseColors';

const CourseCard = ({ course }) => {
    return(
        <div className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none flex flex-col">
            <div className="flex mb-4">
                <div>
                    <p className="font-semibold text-sm md:text-md text-gray-500">{course.code}</p>
                    <p className="font-bold text-md md:text-xl">{course.title}</p>
                </div>
                <span className="ml-auto text-xs text-gray-500">{course.units} units</span>
            </div>
            <div className="flex flex-col gap-2">
                {course.sections.map((section) => {
                    const courseColor = getCourseColor(course.code);
                    return(
                        <SectionRow
                            key={section.id}
                            section={section}
                            courseId={course.id}
                            units={course.units}
                            courseColor={courseColor}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default CourseCard;