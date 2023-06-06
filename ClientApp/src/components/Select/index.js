import React from "react";
import Styles from "./select.module.css";

function Select({ className, title, label, options, value, onChange, ariaLabel, ariaControls }) {
    return (
        <div className={Styles.container}>
            <label
                htmlFor={label}
                className={Styles.label}
                data-transform={value !== ""}
            >
                {title}
            </label>

            <select
                id={label}
                className={`${className} ${Styles.select}`}
                value={value}
                onChange={onChange}
                aria-label={ariaLabel}
                aria-haspopup='menu'
                aria-controls={ariaControls}
            >
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Select;
