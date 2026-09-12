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
        <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="mb-6 text-xl font-semibold">Your week</h2>
            
            <div className="grid grid-cols-7">
                <div className="border-b border-gray-200"></div>

                {days.map((day) => (
                    <div
                        key={day}
                        className="border-b border-gray-200 p-3 text-center text-sm font-medium"
                    >
                        {day}
                    </div>
                ))}
            </div>
                
                <div className="relative">
                    <div className="grid grid-cols-7">
                        {times.map((time) => (
                            <div key={time} className="contents">
                                <div className="border-b border-gray-200 p-3 text-sm text-gray-500">
                                    {time}
                                </div>

                                {days.map((day) => (
                                    <div 
                                        key={day} 
                                        className="h-20 border-b border-1 border-gray-200"
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="absolute inset-0 ml-[14.2857%]"> {/*14.2857% because 1/7*/}
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
                </div>
        </div>
    );
};

export default ScheduleTimetable;