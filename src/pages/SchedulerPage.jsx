import { useState, useEffect } from "react";
import CoursesPage from "./CoursesPage";
import SchedulePage from "./SchedulePage";

const SchedulerPage = ({ courses }) => {
    const [view, setView] = useState("courses");
    const [showBackToTop, setShowBackToTop] = useState(false);

    function handleViewCourse() {
        setView("courses");
    }

    function handleViewSchedule() {
        setView("schedule");
    }

    useEffect(() => {
        function handleScroll(){
            setShowBackToTop(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    function handleBackToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
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

                {showBackToTop && (
                    <button onClick={handleBackToTop}
                        className="fixed bottom-5 right-5 z-50 h-13 rounded-full bg-blue-500 p-3 text-white shadow-lg"
                        aria-label="Back-to-top"
                    >
                        <span className="material-symbols-outlined">
                            arrow_upward
                        </span>
                    </button>
                )}
            </div>
        </>
    );
}

export default SchedulerPage;