export const timetoMinutes = (time) => {
    const [hours, minutes] = time.split(":").map(Number);

    return hours * 60 + minutes;
};

export const getDayIndex = (day) => {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days.indexOf(day);
};