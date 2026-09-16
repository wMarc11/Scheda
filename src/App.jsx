import { useCourses } from './hooks/useCourses';
import logo from './assets/images/scheda-logo.webp';
import "./index.css"
import SchedulerPage from './pages/SchedulerPage';
import { UserCircleIcon } from './components/icons/Icons';

function App() {
  const { courses, loading, error } = useCourses();

  if (loading) {
    return <p>Loading courses...</p>
  }

  if(error) {
    return <p>Failed to load courses...</p>
  }

  return (  
    <>  
      <header className="bg-white border-b border-gray-200 fixed w-full z-100">
        <div className="mx-auto flex max-w-[1300px] px-4">
          <div className="flex items-center w-full">
            <img
              src={logo}
              alt="Scheda logo"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
              fetchPriority="high"
              className="-ml-6 w-[170px] h-auto md:w-[250px] cursor-pointer transition-all ease-in-out hover:scale-110" 
            />
            <div className="ml-auto flex items-center gap-7 md:-mr-5 px-4 md:px-none">
              <p className="text-xs lg:text-[14px] font-semibold">Term 1, AY 2026-2027</p>
              <UserCircleIcon className="h-[30px] w-[30px] text-blue-500 md:h-[50px] md:w-[50px]" />
            </div>
          </div>
        </div>
      </header> 
      <main className="lg:mx-5 p-6 flex justify-center">
        <div className="w-full lg:w-auto mt-15 lg:mt-24">
          <SchedulerPage courses={courses}/>
        </div>
      </main>
    </>
  );
}

export default App
