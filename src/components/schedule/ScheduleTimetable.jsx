import { useSchedule } from "../../hooks/useSchedule";
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

    const courseCount = selectedSections.length;
    const totalUnits = selectedSections.reduce(
        (total, section) => total + section.units, 0
    );

    return (
        <div className="w-full rounded-xl border border-gray-200 bg-white p-4 sm:p-6 lg:h-[610px] lg:max-w-[700px] lg:sticky lg:top-24">

            <div className="mb-2 flex">
                <h2 className="text-md md:text-xl font-semibold">Your week</h2>

                <p className="text-xs sm:text-sm text-gray-500 ml-auto">{courseCount} courses • {totalUnits} units</p>
            </div>

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
                                <div className="h-[65px] border-b border-gray-200 p-2 sm:p-3 text-xs sm:text-sm text-gray-500">
                                    {time}
                                </div>

                                {days.map((day) => (
                                    <div 
                                        key={day} 
                                        className="border-b border-gray-200 p-2 sm:p-3 text-center text-xs sm:text-sm font-medium"
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
                                        courseColor={section.courseColor}
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