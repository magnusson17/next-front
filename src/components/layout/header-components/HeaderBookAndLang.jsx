const classesArr = [
    "flex",
    "flex-col",
    "md:flex-row",
    "items-center",
    "md:gap-10",
    "text-base",
]
const classes = classesArr.join(" ")

export default function HeaderBookAndLang({children}) {
    return (
        <div className={classes}>
            {children}
        </div>
    )
}