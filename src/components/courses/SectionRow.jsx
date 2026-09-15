import { useState } from "react";
import { useSchedule } from "../../hooks/useSchedule";
import { getColorStyles } from "../../utils/courseColors";

const SectionRow = ({ section, courseId, units, courseColor }) => {
    const { selectedSections, addSection, removeSection } = useSchedule();
    const [isHovering, setIsHovering] = useState(false);

    const isAdded = selectedSections.some(
        (selectedSection) => selectedSection.id === section.id
    ); 
    
    const color = getColorStyles(courseColor);
        
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
                className={`px-2 py-1 md:px-4 md:py-2 rounded-lg border-1 border-gray-400 hover:cursor-pointer ease-in-out transition-all ${color.hover} ${isAdded ? `${color.added} text-white font-bold`: `bg-white hover:text-white`} hover:text-white hover:font-bold hover:shadow-2xl`}
            >   
                {/*This is for mobile*/}
                <span className="lg:hidden">
                    {isAdded ? "✓ Added" : "+ Add"}
                </span>

                {/*This is for desktop/laptop*/}
                <span className="hidden lg:inline">
                    {isAdded && isHovering ? "✕ Remove" :isAdded ? "✓ Added" : "+ Add"}
                </span>
            </button>
        </div>
    );
}

export default SectionRow;