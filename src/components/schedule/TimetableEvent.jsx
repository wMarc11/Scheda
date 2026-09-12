import { timetoMinutes, getDayIndex } from "../../utils/time";

const TimetableEvent = ({ section, schedule }) => {
    const dayIndex = getDayIndex(schedule.day);
    const startMinutes = timetoMinutes(schedule.start);
    const endMinutes = timetoMinutes(schedule.end);

    const duration = endMinutes - startMinutes;

    const timeTableStart = 8 * 60;
    const pixelsPerHour = 40;

    const top = ((startMinutes - timeTableStart) / 60) * pixelsPerHour;
    const height = (duration / 60) * pixelsPerHour;

    return(
        <div
            className="absolute rounded-md bg-blue-100 p-2 text-xs text-blue-900"
            style={{
                top: `${top}px`,
                height: `${height}px`,
                left: `${dayIndex * (100 / 6)}%`,
                width: `${100 / 6}%`
            }}
        >
            <strong>{section.courseId}</strong>
            <p>{section.section}</p>
            <small>{section.room}</small>
        </div>
    );
};

export default TimetableEvent;