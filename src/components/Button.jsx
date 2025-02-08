import PropTypes from "prop-types";


const ButtonPrimary = ({
    href,
    target = '_self',
    label,
    icon,
    classes
}) => {
    if (href) {
        return (
            <a
            href={href}
            target={target}
            className={"btn btn-primary flex items-center justify-center gap-2 px-6 py-3 text-center" + classes}>
                {label}

                {icon ?
                    <span className="material-symbols-rounded"
                    aria-hidden="true">
                        {icon}    
                    </span>
                    : undefined
                }
            </a>
        )
    } else {
        return (
            <button className={"btn btn-primary flex items-center justify-center gap-2 px-6 py-3 text-center" + classes}>
                {label}
            </button>

            )
    }
}

ButtonPrimary.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}

const ButtonOutline = ({
    href,
    target = '_self',
    label,
    icon,
    classes
}) => {
    if (href) {
        return (
            <a
                href={href}
                target={target}
                className={"btn btn-outline flex items-center justify-center gap-2 px-6 py-3 text-center" + classes}>
                {label}

                {icon ?
                    <span className="material-symbols-rounded"
                        aria-hidden="true">
                        {icon}
                    </span>
                    : undefined
                }
            </a>
        )
    } else {
        return (
            <button className={"btn btn-outline flex items-center justify-center gap-2 px-6 py-3 text-center" + classes}>
                {label}
            </button>

        )
    }
}

ButtonOutline.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}

export {
    ButtonPrimary,
    ButtonOutline
}
