import { useState, useEffect } from "react";
import { SearchIcon } from "../icons/Icons";
import { useDebounce } from "../../hooks/useDebounce";

const CourseFilters = ({ onSearch, onDayChange, onFilterChange }) => {
    const [query, setQuery] = useState("");
    const [day, setDay] = useState("All");
    const [filter, setFilter] = useState("All");

    const debouncedQuery = useDebounce(query, 300);

    useEffect(() => {
        onSearch(debouncedQuery)
    }, [debouncedQuery, onSearch]);

    const handleSearchChange = (event) => {
        const value = event.target.value;

        setQuery(value);
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
        <div className="flex flex-col gap-2 md:flex-row lg:flex-row">
            <div className="relative flex w-[100%] lg:w-[50%] md:w-[50%]">
                <SearchIcon className="hidden h-5 w-5 text-gray-400 md:absolute md:left-3 md:top-1/2 md:-translate-y-1/2 lg:block" />
                <input 
                    type="text"
                    value={query}
                    id="search-bar"
                    name="search-bar"
                    onChange={handleSearchChange}
                    placeholder="Search by course or instructor"
                    aria-label="Search by course or instructor"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 md:pl-10 text-[11px] md:text-sm outline-none focus:border-blue-500"
                />
            </div>
            <div className="flex gap-2 w-full md:w-[50%] lg:w-[50%]">
                <select
                    value={filter}
                    id="filter-selection-status"
                    name="filter-selection-status"
                    onChange={handleFilterChange}
                    aria-label="Filter courses by selection status"
                    className="w-[50%] lg:w-[20%] rounded-lg border border-gray-300 px-2 py-3 text-[11px] md:text-sm outline-none text-gray-500 focus:border-blue-500 text-center lg:flex-1"
                >
                    <option value="All">All Courses</option>
                    <option value="added">Added</option>
                    <option value="not-added">Not Added</option>
                </select>
                <select
                    value={day}
                    id="filter-day"
                    name="filter-day"
                    onChange={handleDayChange}
                    aria-label="Filter courses by day"
                    className="w-[50%] rounded-lg border border-gray-300 px-2 py-3 text-[11px] md:text-sm outline-none text-gray-500 focus:border-blue-500 text-center lg:flex-1"
                >
                    <option value="All">All days</option>
                    <option value="mon">Mon</option>
                    <option value="tue">Tue</option>
                    <option value="wed">Wed</option>
                    <option value="thu">Thu</option>
                    <option value="fri">Fri</option>
                    <option value="sat">Sat</option>
                </select>
            </div>
        </div>
    );
}

export default CourseFilters;
