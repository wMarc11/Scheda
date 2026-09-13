import { timetoMinutes, getDayIndex } from "../../utils/time";

const TimetableEvent = ({ section, schedule }) => {
    const dayIndex = getDayIndex(schedule.day);
    const startMinutes = timetoMinutes(schedule.start);
    const endMinutes = timetoMinutes(schedule.end);

    const duration = endMinutes - startMinutes;

    const timeTableStart = 8 * 60;
    const pixelsPerHour = 32.5;

    const top = ((startMinutes - timeTableStart) / 60) * pixelsPerHour;
    const height = (duration / 60) * pixelsPerHour;

    const firstTwoLettersInSection = section.courseId.slice(0, 2);

    const color = firstTwoLettersInSection === "CC" ?
        "bg-blue-100 text-blue-900" : 
        firstTwoLettersInSection === "GE" ?
        "bg-green-100 text-green-900" :
        firstTwoLettersInSection === "CS" ?
        "bg-amber-100 text-amber-900" :
        "bg-blue-100 text-blue-900";

    return(
        <div
            className={`absolute rounded-md ${color} p-1 lg:p-2 text-[clamp(6px,0.7vw,10px)] leading-tight text-center flex flex-col justify-center mx-auto overflow-hidden`}
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