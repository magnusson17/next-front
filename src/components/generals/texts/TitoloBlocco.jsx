export default function TitoloBlocco({children}) {
    const classesArr = [
        "text-[40px]",
        "font-medium",
        "text-left",
        "leading-13"
    ]
    const classes = classesArr.join(" ")

    return (
        <h2 className={classes}>{children}</h2>
    )
}