const SectionRow = ({ section }) => {
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

            <button>
                + Add
            </button>
        </div>
    );
}

export default SectionRow;