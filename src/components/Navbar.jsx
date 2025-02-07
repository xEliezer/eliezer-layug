import { useRef, useEffect } from "react";

const Navbar = ({ navOpen }) => {
    const lastActiveLink = useRef(null);
    const activeBox = useRef(null);
    const linkRefs = useRef([]);

    const initActiveBox = () => {
        if (!lastActiveLink.current || !activeBox.current) return;

        activeBox.current.style.top = `${lastActiveLink.current.offsetTop}px`;
        activeBox.current.style.left = `${lastActiveLink.current.offsetLeft}px`;
        activeBox.current.style.width = `${lastActiveLink.current.offsetWidth}px`;
        activeBox.current.style.height = `${lastActiveLink.current.offsetHeight}px`;
    };
    window.addEventListener('resize', initActiveBox);

    useEffect(() => {
        lastActiveLink.current = linkRefs.current[0]; // Set default active link
        initActiveBox();
    }, []);

    const activeCurrentLink = (event) => {
        if (lastActiveLink.current) {
            lastActiveLink.current.classList.remove("active");
        }

        event.target.classList.add("active");
        lastActiveLink.current = event.target;
        initActiveBox();
    };

    const navItems = [
        { label: "Home", link: "#home", className: "nav-link active" },
        { label: "About", link: "#about", className: "nav-link" },
        { label: "Work", link: "#work", className: "nav-link" },
        { label: "Contact", link: "#contact", className: "nav-link md:hidden" },
    ];

    return (
        <nav className={`navbar ${navOpen ? "active" : ""}`}>
            {navItems.map((item, index) => (
                <a
                    href={item.link}
                    key={index}
                    ref={(el) => (linkRefs.current[index] = el)}
                    className={item.className}
                    onClick={activeCurrentLink}
                >
                    {item.label}
                </a>
            ))}
            <div className="active-box" ref={activeBox}></div>
        </nav>
    );
};

export default Navbar;
