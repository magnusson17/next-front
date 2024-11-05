const classesArr = [
    // custom config
    "text-primary-text",
    // normal
    "absolute",
    "bottom-[30px]",
    "right-[30px]",
    "text-[16px]",
]
const classes = classesArr.join(" ")

export default function DidascaliaBloccoA({children}) {
    return (
        <span className={classes}>
            {children}
        </span>
    )
}