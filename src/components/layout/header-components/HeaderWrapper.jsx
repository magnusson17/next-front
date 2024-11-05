export default function HeaderWrapper({children, secondary}) {
    const secondaryClass = secondary ? "header--secondary" : ""

    const classesArr = [
        // custom @layer
        "header-transition",
        // custom config
        "text-secondary-text",
        "bg-primary-bg",
        "h-header-mob-custom",
        "md:h-header-custom",
        // normal
        "fixed",
        "top-0",
        "left-0",
        "block",
        "md:flex",
        "md:justify-between",
        "md:items-center",
        "w-full",
        "md:px-10",
        "z-50",
        // custom @layer change style
        `${secondaryClass}`
    ]
    const classes = classesArr.join(" ")
    
    return (
        <>
            <header id="header" className={classes}>
                {children}
            </header>

            <div className="h-header-mob-custom md:h-header-custom"></div>
        </>
    )
}