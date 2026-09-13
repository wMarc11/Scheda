    import { useState} from "react";

    const CourseSearchBar = ({ onSearch, onDayChange, onFilterChange }) => {
        const [query, setQuery] = useState("");
        const [day, setDay] = useState("All");
        const [filter, setFilter] = useState("All");

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

        const handleFilterChange = (event) => {
            const value = event.target.value;

            setFilter(value);
            onFilterChange(value);
        }   

        return (
            <div className="flex gap-2">
                <div className="relative flex w-[50%] md:w-[65%]">
                    <span className="material-symbols-outlined !hidden lg:!block md:absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 !text-[20px]">
                        search
                    </span>
                    <input 
                        type="text"
                        value={query}
                        onChange={handleSearchChange}
                        placeholder="Search by course or instructor"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 md:pl-10 text-[11px] md:text-sm outline-none focus:border-blue-500"
                    />
                </div>
                <select
                    type="select"
                    value={filter}
                    onChange={handleFilterChange}
                    className="w-[25%] md:w-[20%] rounded-lg border border-gray-300 px-2 py-3 text-[11px] md:text-sm outline-none text-gray-500 focus:border-blue-500 text-center"
                >
                    <option value="All">All</option>
                    <option value="added">Added</option>
                    <option value="not-added">Not Added</option>
                </select>
                <select
                    type="select"
                    value={day}
                    onChange={handleDayChange}
                    className="w-[25%] md:w-[15%] rounded-lg border border-gray-300 px-2 py-3 text-[11px] md:text-sm outline-none text-gray-500 focus:border-blue-500 text-center"
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