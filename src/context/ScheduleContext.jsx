import { createContext, useContext, useState } from "react";

const ScheduleContext = createContext();

export const ScheduleProvider = ({ children }) => {
    const [selectedSections, setSelectedSections] = useState([]);

    return (
        <ScheduleContext.Provider value={{selectedSections, setSelectedSections}}>
            {children}
        </ScheduleContext.Provider>
    );
};

export const useSchedule = () => {
    return useContext(ScheduleContext);
};