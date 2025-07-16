import React from "react";

export default function Button({
    childrenText,
    type = "button",
    height = "h-10",
    bgColor = "bg-[#00d8d8]",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-lg font-semibold hover:bg-transparent hover:border-2 border-[#00d8d8] transition ${bgColor} ${textColor} ${height} ${className}`} {...props}>
            {childrenText}
        </button>
    );
}