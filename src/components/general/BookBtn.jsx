export default function BookBtn({secondary, changeBg, fixedMob}) {
    const secondaryClass = secondary ? "book-btn--secondary" : ""
    const changeBgClass = changeBg ? "book-btn--change-bg" : ""
    const fixedMobClass = fixedMob ? "book-btn--fixed-mob" : ""
    
    const btnWrapperClassesArr = [
        // custom @layer
        "book-btn",
        "header-transition",
        // custom config
        "bg-tertiary-bg",
        // normal
        "px-7",
        "py-5",
        "rounded-[132px]",
        // custom @layer change style
        `${secondaryClass}`,
        `${changeBgClass}`,
        `${fixedMobClass}`,
    ]
    const btnClassesArr = [
        // custom config
        "book-btn__txt",
        "text-primary-text",
        // normal
        "before:block",
        "before:content-['']",
        "before:bg-primary-text",
        "before:w-3",
        "before:h-3",
        "before:rounded-full",
        "before:mr-2",
        "flex",
        "items-center",
    ]
    const btnWrapperClasses = btnWrapperClassesArr.join(" ")
    const btnClasses = btnClassesArr.join(" ")

    return (
        <a href="https://www.lipsum.com/" target="_blank" className={btnWrapperClasses}>
            <div className={btnClasses}>Book now</div>
        </a>
    )
}