const classesArr = [
    "mt-5",
    "md:w-1/2",
    "md:pt-8",
    "md:pl-8",
    "md:text-lg",
    "leading-7"
]
const classes = classesArr.join(" ")

export default function TestoMainBlocco({children}) {
    return (
        <p className={classes}>{children}</p>
    )
}