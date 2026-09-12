import { useSchedule } from "../../context/ScheduleContext";
import TimetableEvent from "./TimetableEvent";


const ScheduleTimetable = () => {
    const { selectedSections } = useSchedule();

    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const times = [
        "8:00 AM",
        "10:00 AM",
        "12:00 PM",
        "2:00 PM",
        "4:00 PM",
        "6:00 PM",
        "8:00 PM"
    ];

    return (
        <div>
            <h2>Your week</h2>
            <div>
                <div>
                    <span></span>

                    {days.map((day) => (
                        <span key={day}>{day}</span>
                    ))}
                </div>

                {times.map((time) => (
                    <div key={time}>
                        <span>{time}</span>

                        {days.map((day) => (
                            <div key={day}></div>
                        ))}
                    </div>
                ))}
            </div>
            {selectedSections.map((section) => 
                section.schedule.map((schedule, index) => {
                    return(
                        <TimetableEvent
                            key={`${section.id}-${index}`}
                            section={section}
                            schedule={schedule}
                        />
                    );
                })
            )}
        </div>
    );
};

export default ScheduleTimetable;