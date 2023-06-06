import React, { useState } from "react";
import Styles from "./input.module.css";

function Input({
    className,
    type = "text",
    value,
    label,
    title,
    placeholder,
    onChange,
}) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className={Styles.input_container}>
            <input
                className={`${className} ${Styles.input}`}
                // Check if is password field, and check whether to show password
                type={
                    type === "password" ? (showPassword ? "text" : type) : type
                }
                value={value}
                id={label}
                placeholder={placeholder}
                onChange={onChange}
            />
            <label
                className={Styles.input_title}
                data-transform={value !== ""}
            >
                {title}
            </label>
            {type === "password" && (
                <button
                    type="button"
                    className="icon_button"
                    onClick={() => setShowPassword((prev) => !prev)}
                >
                    {showPassword ? (
                        <span class="material-symbols-rounded">
                            visibility_off
                        </span>
                    ) : (
                        <span class="material-symbols-rounded">visibility</span>
                    )}
                </button>
            )}
        </div>
    );
}

export default Input;
