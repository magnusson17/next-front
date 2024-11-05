const classesArr = [
    // custom config
    "bg-tertiary-bg",
    "text-primary-text",
    // normal
    "w-full",
    "md:w-1/2",
    "px-8",
    "py-12",
    "md:py-20",
    "md:pl-20",
    "md:pr-20",
]
const classes = classesArr.join(" ")

export default function WrapperTestiBloccoE({children}) {
    return (
        <div className={classes}>
            {children}
        </div>
    )
}