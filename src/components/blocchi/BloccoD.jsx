const classesArr = [
    // total custom
    "blocco-d",
    // custom config
    "bg-secondary-bg",
    "text-primary-text",
    // normal
    "flex",
    "flex-col",
    "md:flex-row",
    "gap-10",
    "w-full",
    "pb-12",
    "md:pb-40",
]
const classes = classesArr.join(" ")

export default function BloccoD({children}) {
    return (
        <div className={classes}>
            {children}
        </div>
    )
}