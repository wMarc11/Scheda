import { useCourses } from './hooks/useCourses';
import CourseList from './components/courses/CourseList';
import SelectedSectionsList from './components/schedule/SelectedSectionsList'

function App() {
  const { courses, loading, error } = useCourses();

  if (loading) {
    return <p>Loading courses...</p>
  }

  if(error) {
    return <p>Failed to load courses...</p>
  }

  return (
    <main>
      <h1>Course Scheduler</h1>

      <CourseList courses={courses} />
      <SelectedSectionsList />
    </main>
  );
}

export default App
