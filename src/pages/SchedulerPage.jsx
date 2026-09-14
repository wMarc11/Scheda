import { useState } from "react";
import CoursesPage from "./CoursesPage";
import SchedulePage from "./SchedulePage";

const SchedulerPage = ({ courses }) => {
    const [view, setView] = useState("courses");

    function handleViewCourse() {
        setView("courses");
    }

    function handleViewSchedule() {
        setView("schedule");
    }

    const coursesButtonStyle = view === "courses" ? "bg-blue-500 text-white rounded-md font-semibold" : "bg-white";
    const scheduleButtonStyle = view === "courses" ? "bg-white" : "bg-blue-500 text-white rounded-md font-semibold";

    return(
        <>      
            <div className="hidden lg:grid gap-6 lg:grid-cols-2">
                <CoursesPage courses={courses} />
                <SchedulePage />
            </div>

            <div className="lg:hidden w-full relative">
                <div className="flex bg-white shadow-2xl mt-0 mb-3 p-1 text-[14px] rounded-md sticky top-15 z-100">
                    <button onClick={handleViewCourse}
                        className={`flex-1 p-2 ${coursesButtonStyle}`}     
                    >
                        View Courses
                    </button>

                    <button onClick={handleViewSchedule}
                        className={`flex-1 p-2 ${scheduleButtonStyle}`}    
                    >
                        View Schedule
                    </button>
                </div>

                {view === "courses" ? <CoursesPage courses={courses} /> : <SchedulePage />}
            </div>
        </>
    );
}

export default SchedulerPage;