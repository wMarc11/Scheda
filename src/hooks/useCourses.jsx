import { useState, useEffect} from "react";
import { getCourses } from "../api/coursesApi";

export const useCourses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const data = await getCourses();
                setCourses(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchCourses();
    }, []);

    return {
        courses, loading, error
    };
}