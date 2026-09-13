import { useState } from "react";
import { useSchedule } from "../../context/ScheduleContext";

const SectionRow = ({ section, courseId, units, courseColor }) => {
    const { selectedSections, addSection, removeSection } = useSchedule();
    const [isHovering, setIsHovering] = useState(false);

    const isAdded = selectedSections.some(
        (selectedSection) => selectedSection.id === section.id
    ); 
    
    const colors = {
        blue: {
            bg: "bg-blue-50",
            hover: "hover:bg-blue-600",
            added: "bg-blue-500",
        },
        orange: {
            bg: "bg-orange-50",
            hover: "hover:bg-orange-600",
            added: "bg-orange-500",
        },
        purple: {
            bg: "bg-purple-50",
            hover: "hover:bg-purple-600",
            added: "bg-purple-500",
        },
        green: {
            bg: "bg-green-50",
            hover: "hover:bg-green-600",
            added: "bg-green-500",
        },
        pink: {
            bg: "bg-pink-50",
            hover: "hover:bg-pink-600",
            added: "bg-pink-500",
        },
        yellow: {
            bg: "bg-yellow-50",
            hover: "hover:bg-yellow-600",
            added: "bg-yellow-500",
        },
        teal: {
            bg: "bg-teal-50",
            hover: "hover:bg-teal-600",
            added: "bg-teal-500",
        },
        red: {
            bg: "bg-red-50",
            hover: "hover:bg-red-600",
            added: "bg-red-500",
        },
        indigo: {
            bg: "bg-indigo-50",
            hover: "hover:bg-indigo-600",
            added: "bg-indigo-500",
        },
        lime: {
            bg: "bg-lime-50",
            hover: "hover:bg-lime-600",
            added: "bg-lime-500",
        },
        magenta: {
            bg: "bg-fuchsia-50",
            hover: "hover:bg-fuchsia-600",
            added: "bg-fuchsia-500",
        },
        brown: {
            bg: "bg-stone-50",
            hover: "hover:bg-stone-600",
            added: "bg-stone-500",
        },
        cyan: {
            bg: "bg-cyan-50",
            hover: "hover:bg-cyan-600",
            added: "bg-cyan-500",
        },
        slate: {
            bg: "bg-slate-50",
            hover: "hover:bg-slate-600",
            added: "bg-slate-500",
        },
    };

    const color = colors[courseColor];
        
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
                    addSection(section, courseId, units, courseColor); 
                }
            }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className={`px-2 py-1 md:px-4 md:py-2 rounded-lg hover:cursor-pointer ease-in-out transition-all ${color.hover} ${isAdded ? `${color.added} text-white font-bold`: `bg-white hover:text-white`} hover:text-white hover:font-bold hover:shadow-2xl`}
            >
                {isAdded && isHovering ? "✕ Remove" :isAdded ? "✓ Added" : "+ Add"}
            </button>
        </div>
    );
}

export default SectionRow;