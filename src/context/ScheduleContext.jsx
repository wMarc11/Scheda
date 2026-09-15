import { createContext, useState } from "react";

const ScheduleContext = createContext();

export const ScheduleProvider = ({ children }) => {
    const [selectedSections, setSelectedSections] = useState([]);

    const addSection = (section, courseId, units, courseColor) => {
        setSelectedSections((prev) => {
            const filtered = prev.filter((selectedSection) =>
                selectedSection.courseId !== courseId 
            );

            return [
                ...filtered,
                {
                    ...section,
                    courseId,
                    units,
                    courseColor
                }
            ];
        });
    };

    const removeSection = (sectionId) => {
        setSelectedSections((prev) => 
            prev.filter((section) => section.id !== sectionId)
        );
    };

    return (
        <ScheduleContext.Provider value={{selectedSections, addSection, removeSection}}>
            {children}
        </ScheduleContext.Provider>
    );
};