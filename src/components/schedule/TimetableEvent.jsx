import { timetoMinutes, getDayIndex } from "../../utils/time";
import { getColorStyles } from "../../utils/courseColors";
import { TIMETABLE_DAYS, TIMETABLE_START, PIXELS_PER_HOUR } from "../../utils/timeTable";

const TimetableEvent = ({ section, schedule, courseColor }) => {
    const dayIndex = getDayIndex(schedule.day);
    const startMinutes = timetoMinutes(schedule.start);
    const endMinutes = timetoMinutes(schedule.end);

    const duration = endMinutes - startMinutes;

    const top = ((startMinutes - TIMETABLE_START) / 60) * PIXELS_PER_HOUR;
    const height = (duration / 60) * PIXELS_PER_HOUR;

    const columnWidth = 100 / TIMETABLE_DAYS.length;

    const color = getColorStyles(courseColor);

    return(
        <div
            className={`absolute rounded-t-md ${color.bg} p-1 lg:p-2 text-[clamp(6px,0.7vw,10px)] leading-tight text-center flex flex-col justify-center mx-auto overflow-hidden`}
            style={{
                top: `${top}px`,
                height: `${height}px`,
                left: `calc(${dayIndex * columnWidth}% + 4px)`,
                width: `calc(${columnWidth}% - 8px)`
            }}
        >
            <p><strong>{section.courseId}</strong></p>
            <p>{section.section}</p>
            <p>{schedule.start} - {schedule.end}</p>
            <small>Room: {section.room}</small>
            
        </div>
    );
};

export default TimetableEvent;