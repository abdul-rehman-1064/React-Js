import React from "react";

export default function Button({
    childrenText,
    type = "button",
    height = "h-10",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${height} ${className}`} {...props}>
            {childrenText}
        </button>
    );
}