import { useState } from "react";

const CourseSearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleChange = (event) => {
        const value = event.target.value;

        setQuery(value);
        onSearch(value);
    };

    return (
        <input 
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search by course or instructor"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500"
        />
    );
}

export default CourseSearchBar;