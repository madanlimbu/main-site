import { ReactElement, useEffect, useState } from "react";
import "./ThemeToggle.scss";

export function ThemeToggle(): ReactElement {
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

    useEffect(() => {
        document.querySelector('body').classList.add((isDarkTheme) ? 'theme-dark' : 'theme-light');
        document.querySelector('body').classList.remove((isDarkTheme) ? 'theme-light' : 'theme-dark');
    }, [isDarkTheme]);

    return (
        <div className="toggle">
            <div className="toggle__btn-container" onClick={() => setIsDarkTheme((prevState) => !prevState)} >
                <div className="toggle__toggle-container">
                    <span className="toggle__toggle">
                        <input type="checkbox" />
                        <label className={isDarkTheme ? "checked" : "unchecked"} />
                    </span>
                </div>
            </div>
        </div>
    )
}