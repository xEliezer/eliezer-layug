import { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-transparent">
            <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid-cols-[1fr,3fr,1fr]">
                <h1>
                    <a href="/" className="logo">
                        <img src="/devlogo-white.svg" width={40} height={40} alt="Eliezer Layug" />
                    </a>
                </h1>

                {/* Navbar Toggle */}
                <div className="relative md:flex md:justify-self-center">
                    <button
                        className="menu-btn md:hidden"
                        onClick={() => setNavOpen((prev) => !prev)}
                    >
                        <span className="material-symbols-rounded text-white text-3xl">
                            {navOpen ? "close" : "menu"}
                        </span>
                    </button>

                    {/* Navbar Visibility Based on navOpen */}
                    <Navbar navOpen={navOpen} />
                </div>

                <a
                    href="#contact"
                    className="btn btn-secondary hidden md:block md:justify-self-end"
                >
                    Contact Me
                </a>
            </div>
        </header>
    );
};

export default Header;
