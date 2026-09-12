import { useSchedule } from "../../context/ScheduleContext";

const SelectedSectionsList = () => {
    const { selectedSections } = useSchedule();

    return (
        <div>
            <h2>My Schedule</h2>

            {selectedSections.length === 0? (
                <p>No sections selected</p>
            ): (
                selectedSections.map((section) => (
                    <div key={section.id}>
                        <strong>{section.courseId}</strong>
                        <p>{section.section}</p>
                        <p>{section.instructor}</p>
                        <p>{section.room}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default SelectedSectionsList;