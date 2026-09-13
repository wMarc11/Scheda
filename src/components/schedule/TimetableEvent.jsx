import { timetoMinutes, getDayIndex } from "../../utils/time";

const TimetableEvent = ({ section, schedule, courseColor }) => {
    const dayIndex = getDayIndex(schedule.day);
    const startMinutes = timetoMinutes(schedule.start);
    const endMinutes = timetoMinutes(schedule.end);

    const duration = endMinutes - startMinutes;

    const timeTableStart = 8 * 60;
    const pixelsPerHour = 32.5;

    const top = ((startMinutes - timeTableStart) / 60) * pixelsPerHour;
    const height = (duration / 60) * pixelsPerHour;

    const colors = {
        blue: {
            bg: "bg-blue-50"
        },
        orange: {
            bg: "bg-orange-50"
        },
        purple: {
            bg: "bg-purple-50"
        },
        green: {
            bg: "bg-green-50"
        },
        pink: {
            bg: "bg-pink-50"
        },
        yellow: {
            bg: "bg-yellow-50"
        },
        teal: {
            bg: "bg-teal-50"
        },
        red: {
            bg: "bg-red-50"
        },
        indigo: {
            bg: "bg-indigo-50"
        },
        lime: {
            bg: "bg-lime-50"
        },
        magenta: {
            bg: "bg-fuchsia-50"
        },
        brown: {
            bg: "bg-stone-50"
        },
        cyan: {
            bg: "bg-cyan-50"
        },
        slate: {
            bg: "bg-slate-50"
        },
    };

    const color = colors[courseColor];

    return(
        <div
            className={`absolute rounded-t-md ${color.bg} p-1 lg:p-2 text-[clamp(6px,0.7vw,10px)] leading-tight text-center flex flex-col justify-center mx-auto overflow-hidden`}
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