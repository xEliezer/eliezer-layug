import { useState, useEffect } from "react";

const ThemeSwitcher = () => {
    const [darkMode, setDarkMode] = useState(
        () => localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    const toggleTheme = () => {
        setDarkMode((prev) => !prev);
    };

    return (
        <button
            onClick={toggleTheme}
            className={`relative flex h-5 w-10 items-center rounded-full transition-colors duration-300 ease-in-out ${darkMode ? "bg-zinc-800" : "bg-zinc-200"
                }`}
            aria-label="Toggle theme"
        >
            <div
                className={`absolute left-1 flex h-4 w-4 items-center justify-center rounded-full shadow-md transition-transform duration-300 ease-in-out ${darkMode
                        ? "translate-x-4 bg-zinc-700"
                        : "translate-x-0 bg-zinc-100"
                    }`}
            >
                {darkMode ? (
                    <svg
                        className="h-3 w-3 text-sky-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                ) : (
                    <svg
                        className="h-3 w-3 text-amber-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                            clipRule="evenodd"
                        />
                    </svg>
                )}
            </div>
        </button>
    );
};

export default ThemeSwitcher;
