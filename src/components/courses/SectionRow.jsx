import { useSchedule } from "../../context/ScheduleContext";

const SectionRow = ({ section, courseId, units }) => {
    const { selectedSections, addSection, removeSection } = useSchedule();

    const isAdded = selectedSections.some(
        (selectedSection) => selectedSection.id === section.id
    ); 

    return (
        <div>
            <div>
                <strong>{section.section}</strong>

                <p>
                    {section.schedule.map((schedule, index) => {
                        <span key={index}>
                            {schedule.day} {schedule.start}
                            {index < section.schedule.length - 1 && " · "}
                        </span>
                    })}
                </p>
            </div>

            <div>
                <p>{section.instructor}</p>
                <p>{section.room}</p>
            </div>

            <button onClick={() => {
                if (isAdded){
                    removeSection(section.id);
                } else {
                    addSection(section, courseId, units);
                }
            }}>
                {isAdded ? (<p><span>✓</span> Add</p>) : (<p><span>+</span> Add</p>)}
            </button>
        </div>
    );
}

export default SectionRow;