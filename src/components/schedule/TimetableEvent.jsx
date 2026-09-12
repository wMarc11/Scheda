const TimetableEvent = ({ section, schedule }) => {
    return(
        <div>
            <strong>{section.courseId}</strong>
            <p>{section.section}</p>
            <small>{section.room}</small>
        </div>
    );
};

export default TimetableEvent;