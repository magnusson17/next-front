const classesArr = [
    // custom config
    "bg-primary-bg",
    // normal
    "absolute",
    "top-1/2",
    "left-1/2",
    "-translate-y-1/2",
    "-translate-x-1/2",
    "p-8",
    "md:p-12",
    "z-10",
]
const classes = classesArr.join(" ")

export default function WrapperTitoliSlideBloccoE({children}) {
    return (
        <div className={classes}>
            {children}
        </div>
    )
}