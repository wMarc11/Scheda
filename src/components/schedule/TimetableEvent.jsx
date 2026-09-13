import { timetoMinutes, getDayIndex } from "../../utils/time";

const TimetableEvent = ({ section, schedule }) => {
    const dayIndex = getDayIndex(schedule.day);
    const startMinutes = timetoMinutes(schedule.start);
    const endMinutes = timetoMinutes(schedule.end);

    const duration = endMinutes - startMinutes;

    const timeTableStart = 8 * 60;
    const pixelsPerHour = 30;

    const top = ((startMinutes - timeTableStart) / 60) * pixelsPerHour;
    const height = (duration / 60) * pixelsPerHour;
    
    return(
        <div
            className="absolute rounded-md bg-blue-100 p-1 lg:p-2 text-[clamp(6px,0.7vw,10px)] leading-tight text-blue-900 text-center flex flex-col justify-center mx-auto overflow-hidden"
            style={{
                top: `${top}px`,
                height: `${height}px`,
                left: `calc(${dayIndex * (100 / 6)}% + 4px)`,
                width: `calc(${100 / 6}% - 8px)`
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