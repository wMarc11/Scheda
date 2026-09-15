const baseIconProps = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
};

export const SearchIcon = ({ className }) => (
    <svg {...baseIconProps} className={className}>
        <circle cx="11" cy="11" r="6" />
        <path d="m16 16 4 4" />
    </svg>
);

export const UserCircleIcon = ({ className }) => (
    <svg {...baseIconProps} className={className}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="9" r="3" />
        <path d="M6.7 19a5.8 5.8 0 0 1 10.6 0" />
    </svg>
);

export const ArrowUpIcon = ({ className }) => (
    <svg {...baseIconProps} className={className}>
        <path d="M12 19V5" />
        <path d="m6 11 6-6 6 6" />
    </svg>
);
