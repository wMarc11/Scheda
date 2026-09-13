import { useSchedule } from "../../context/ScheduleContext";

const SectionRow = ({ section, courseId, units }) => {
    const { selectedSections, addSection, removeSection } = useSchedule();

    const isAdded = selectedSections.some(
        (selectedSection) => selectedSection.id === section.id
    ); 

    const firstTwoLettersInSection = courseId.slice(0, 2);

const colors = {
    CC: {
        bg: "bg-blue-50",
        hover: "hover:bg-blue-600",
        added: "bg-blue-500",
    },
    GE: {
        bg: "bg-green-50",
        hover: "hover:bg-green-600",
        added: "bg-green-500",
    },
    CS: {
        bg: "bg-amber-50",
        hover: "hover:bg-amber-600",
        added: "bg-amber-500",
    },
};

const color = colors[firstTwoLettersInSection] || colors.CC;
        
    return (
        <div className={`flex w-full items-center justify-center rounded-lg ${color.bg} px-3 py-2 md:px-4 md:py-3`}>
            <div className="flex-1 ">
                <strong className="text-xs md:text-base">{section.section}</strong>
                <p className="text-[10px] md:text-sm">
                    {section.schedule.map((schedule, index) => (
                        <span key={index}>
                            {schedule.day} {schedule.start}
                            {index < section.schedule.length - 1 && " · "}
                        </span>
                    ))}
                </p>
            </div>

            <div className="flex-1">
                <p className="text-xs md:text-base">{section.instructor}</p>
                <p className="text-[10px] md:text-sm">{section.room}</p>
            </div>

            <button onClick={() => {
                if (isAdded){   
                    removeSection(section.id);
                } else {    
                    addSection(section, courseId, units); 
                }
            }}
                className={`px-2 py-1 md:px-4 md:py-2 rounded-lg hover:cursor-pointer ease-in-out transition-all ${color.hover} ${isAdded ? `${color.added} text-white font-bold`: `bg-white hover:text-white`} hover:text-white hover:font-bold hover:shadow-2xl`}
            >
                {isAdded ? "✓ Added" : "+ Add"}
            </button>
        </div>
    );
}

export default SectionRow;