const classesArr = [
    // total custom
    "blocco-e",
    // normal
    "relative",
    "flex",
    "flex-col",
    "md:flex-row",
]
const classes = classesArr.join(" ")

export default function BloccoE({children, id}) {
    return (
        <div id={id} className={classes}>
            {children}
        </div>
    )
}