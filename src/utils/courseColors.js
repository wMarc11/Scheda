export const COURSE_COLORS = {
    CCPROG3: 'blue',
    CSMODEL: 'orange',
    CCAPDEV: 'purple',
    GESTSOC: 'green',
    CSNETWK: 'pink',
    GEDANCE: 'yellow',
    CCINFOM: 'teal',
    CCDSALG: 'red',
    CSSWENG: 'indigo',
    CCPROJEC: 'lime',
    GEDESGN: 'magenta',
    GEETHIC: 'brown',
    CCCOMPRG: 'cyan',
    CSSECUR: 'slate',
};

export const DEFAULT_COURSE_COLOR = 'slate';

export const COLOR_STYLES = {
    blue: {
        bg: "bg-blue-50",
        hover: "hover:bg-blue-600",
        added: "bg-blue-500",
    },
    orange: {
        bg: "bg-orange-50",
        hover: "hover:bg-orange-600",
        added: "bg-orange-500",
    },
    purple: {
        bg: "bg-purple-50",
        hover: "hover:bg-purple-600",
        added: "bg-purple-500",
    },
    green: {
        bg: "bg-green-50",
        hover: "hover:bg-green-600",
        added: "bg-green-500",
    },
    pink: {
        bg: "bg-pink-50",
        hover: "hover:bg-pink-600",
        added: "bg-pink-500",
    },
    yellow: {
        bg: "bg-yellow-50",
        hover: "hover:bg-yellow-600",
        added: "bg-yellow-500",
    },
    teal: {
        bg: "bg-teal-50",
        hover: "hover:bg-teal-600",
        added: "bg-teal-500",
    },
    red: {
        bg: "bg-red-50",
        hover: "hover:bg-red-600",
        added: "bg-red-500",
    },
    indigo: {
        bg: "bg-indigo-50",
        hover: "hover:bg-indigo-600",
        added: "bg-indigo-500",
    },
    lime: {
        bg: "bg-lime-50",
        hover: "hover:bg-lime-600",
        added: "bg-lime-500",
    },
    magenta: {
        bg: "bg-fuchsia-50",
        hover: "hover:bg-fuchsia-600",
        added: "bg-fuchsia-500",
    },
    brown: {
        bg: "bg-stone-50",
        hover: "hover:bg-stone-600",
        added: "bg-stone-500",
    },
    cyan: {
        bg: "bg-cyan-50",
        hover: "hover:bg-cyan-600",
        added: "bg-cyan-500",
    },
    slate: {
        bg: "bg-slate-50",
        hover: "hover:bg-slate-600",
        added: "bg-slate-500",
    },
};

export const getCourseColor = (code) => COURSE_COLORS[code] ?? DEFAULT_COURSE_COLOR;

export const getColorStyles = (color) => COLOR_STYLES[color] ?? COLOR_STYLES[DEFAULT_COURSE_COLOR];
