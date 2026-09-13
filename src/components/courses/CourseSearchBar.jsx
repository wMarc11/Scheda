import { useState} from "react";

const CourseSearchBar = ({ onSearch, onDayChange }) => {
    const [query, setQuery] = useState("");
    const [day, setDay] = useState("");

    const handleSearchChange = (event) => {
        const value = event.target.value;

        setQuery(value);
        onSearch(value);
    };

    const handleDayChange = (event) => {
        const value = event.target.value;

        setDay(value);
        onDayChange(value);
    };

    return (
        <div className="flex gap-2">
            <input 
                type="text"
                value={query}
                onChange={handleSearchChange}
                placeholder="Search by course or instructor"
                className="w-[70%] md:w-[85%] rounded-lg border border-gray-300 px-4 py-3 text-[11px] md:text-sm outline-none focus:border-blue-500"
            />
            <select
                type="select"
                value={day}
                onChange={handleDayChange}
                className="w-[30%] md:w-[15%] rounded-lg border border-gray-300 px-2 py-3 text-[11px] md:text-sm outline-none text-gray-500 focus:border-blue-500 text-center"
            >
                <option value="All">All days</option>
                <option value="mon">Mon</option>
                <option value="tue">Tue</option>
                <option value="wed">Wed</option>
                <option value="thu">Thu</option>
                <option value="fri">Fri</option>
                <option value="Sat">Sat</option>
            </select>
        </div>
    );
}

export default CourseSearchBar;